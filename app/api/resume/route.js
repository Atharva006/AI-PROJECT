import { NextResponse } from "next/server";
import pdf from "pdf-parse";

export async function POST(req) {
  try {
    const formData = await req.formData();
    const file = formData.get("file");

    if (!file) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    // 1. Extract Text from PDF
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const pdfData = await pdf(buffer);
    const resumeText = pdfData.text;

    // 2. Prepare Prompt for Perplexity
    const systemPrompt = `
      You are an expert AI Career Coach. Analyze the resume provided.
      Return ONLY a valid JSON object (no markdown formatting) with this exact structure:
      {
        "score": number (0-100),
        "techStack": ["string", "string"],
        "improvements": [{"title": "string", "description": "string"}],
        "suggestedRoles": [{"role": "string", "match": "string"}]
      }
      If information is missing, make reasonable inferences based on standard career paths.
    `;

    const userMessage = `Analyze this resume content:\n\n${resumeText}`;

    // 3. Call Perplexity API
    const apiKey = process.env.PERPLEXITY_API_KEY;
    
    if (!apiKey) {
        throw new Error("PERPLEXITY_API_KEY is not defined in .env.local");
    }

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
      throw new Error(`Perplexity API Error: ${response.status} - ${errorText}`);
    }

    const data = await response.json();
    let rawContent = data.choices[0]?.message?.content || "";

    // Cleanup: Remove markdown code blocks if present
    rawContent = rawContent.replace(/```json/g, "").replace(/```/g, "").trim();

    const analysis = JSON.parse(rawContent);

    return NextResponse.json(analysis);

  } catch (error) {
    console.error("Resume Analysis Error:", error);
    return NextResponse.json(
      { error: error.message || "Failed to analyze resume" },
      { status: 500 }
    );
  }
}