import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { targetRole, masteredSkills, learningQueue } = await req.json();

    // 1. Verify API Key exists
    if (!process.env.PERPLEXITY_API_KEY) {
      return NextResponse.json(
        { error: "Server configuration error: Missing API Key" }, 
        { status: 500 }
      );
    }

    const prompt = `
      Act as an expert AI Career Mentor.
      User Target Role: ${targetRole}
      Current Mastered Skills: ${masteredSkills.join(", ")}
      Current Learning Queue: ${learningQueue.join(", ")}

      Based on this, generate a personalized learning roadmap.
      Return ONLY a valid JSON object (no markdown, no backticks) with this structure:
      {
        "matchPercentage": 65,
        "estimatedTime": "4 Months",
        "insight": "A short, 2-sentence analysis of their current gap.",
        "steps": [
          {
            "title": "Step Name",
            "status": "current" | "next" | "future",
            "percentage": 0,
            "description": "What to learn and why.",
            "resources": [
              { "name": "Resource Name", "type": "Course" | "Project" | "Doc", "url": "#" }
            ]
          }
        ]
      }
    `;

    const response = await fetch('https://api.perplexity.ai/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.PERPLEXITY_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: "sonar", // UPDATED: Changed from 'llama-3.1-sonar-small...' to 'sonar'
        messages: [
          { role: "system", content: "You are a helpful career mentor that outputs strict JSON." },
          { role: "user", content: prompt }
        ],
        temperature: 0.2
      }),
    });

    const data = await response.json();

    // 2. Check for API Errors
    if (!response.ok || !data.choices) {
      console.error("Perplexity API Error:", data);
      return NextResponse.json(
        { error: data.error?.message || "Failed to fetch from AI provider" }, 
        { status: response.status || 500 }
      );
    }
    
    // 3. Safe Parsing
    let content = data.choices[0].message.content;
    
    // Cleanup code blocks if the AI adds them (e.g., ```json ... ```)
    content = content.replace(/```json/g, '').replace(/```/g, '').trim();
    
    try {
      const parsedData = JSON.parse(content);
      return NextResponse.json(parsedData);
    } catch (parseError) {
      console.error("JSON Parse Error:", content);
      return NextResponse.json(
        { error: "AI response was not valid JSON" }, 
        { status: 500 }
      );
    }

  } catch (error) {
    console.error("Server Route Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}