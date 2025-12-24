import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    // 1. Get the text directly from the JSON body
    const body = await req.json();
    const { resumeText } = body;

    if (!resumeText || typeof resumeText !== "string" || resumeText.trim().length === 0) {
      return NextResponse.json({ error: "Please paste your resume text." }, { status: 400 });
    }

    // 2. Prepare Prompt for Perplexity
    const systemPrompt = `
      You are an expert AI Career Coach. Analyze the resume provided.
      Return ONLY a valid JSON object (no markdown formatting, no code blocks) with this exact structure:
      {
        "score": number,
        "techStack": ["string", "string"],
        "improvements": [{"title": "string", "description": "string"}],
        "suggestedRoles": [{"role": "string", "match": "string"}]
      }
      If information is missing, make reasonable inferences.
    `;

    const userMessage = `Analyze this resume content:\n\n${resumeText}`;

    const apiKey = process.env.PERPLEXITY_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: "Perplexity API Key missing in .env.local" }, { status: 500 });
    }

    // 3. Call Perplexity API
    const response = await fetch("https://api.perplexity.ai/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "sonar-pro",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userMessage },
        ],
        temperature: 0.2,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Perplexity API Error:", errorText);
      throw new Error(`API Error: ${response.status}`);
    }

    const data = await response.json();
    let rawContent = data.choices[0]?.message?.content || "";

    // 4. Cleanup & Parse JSON
    rawContent = rawContent.replace(/```json/g, "").replace(/```/g, "").trim();

    let analysis;
    try {
      analysis = JSON.parse(rawContent);
    } catch (e) {
      console.error("JSON Parse Error. Raw content:", rawContent);
      return NextResponse.json({ error: "Failed to parse AI response" }, { status: 500 });
    }

    return NextResponse.json(analysis);

  } catch (error: any) {
    console.error("Resume Analysis Error:", error);
    return NextResponse.json(
      { error: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}