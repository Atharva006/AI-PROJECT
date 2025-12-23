import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { message, history } = body;
    
    if (!message) {
      return NextResponse.json({ error: "Message is required" }, { status: 400 });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: "API Key not found" }, { status: 500 });
    }

    // Format history properly
    let formattedHistory = (history || []).map((msg: any) => ({
      role: msg.role === "user" ? "user" : "model",
      parts: [{ text: msg.text || "" }], 
    }));

    // Remove if history starts with model message
    if (formattedHistory.length > 0 && formattedHistory[0].role === "model") {
      formattedHistory.shift();
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    
    // ✅ FIXED: Try these models in order of preference
    // For student/pro plan, try: gemini-1.5-flash, gemini-pro, or gemini-1.0-pro
    const model = genAI.getGenerativeModel({ 
    model: "gemini-1.0-pro"


// This should work with Pro plan
    });

    const chat = model.startChat({
      history: formattedHistory,
    });

    const result = await chat.sendMessage(message);
    const response = await result.response;
    const text = response.text();

    return NextResponse.json({ text });

  } catch (error: any) {
    console.error("Chat API Error:", error);
    
    // Better error reporting
    const errorMessage = error?.message || String(error);
    const statusCode = error?.status || 500;
    
    return NextResponse.json({ 
      error: "Failed to get response", 
      details: errorMessage,
      suggestion: "Please verify your API key and model access"
    }, { status: statusCode });
  }
}
