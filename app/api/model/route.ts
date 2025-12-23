import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: "API Key not found" }, { status: 500 });
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const models = await genAI.listModels();
    
    const availableModels = models.map(m => ({
      name: m.name,
      displayName: m.displayName,
      description: m.description,
    }));

    return NextResponse.json({ 
      count: availableModels.length,
      models: availableModels 
    });

  } catch (error: any) {
    return NextResponse.json({ 
      error: error?.message || String(error) 
    }, { status: 500 });
  }
}
