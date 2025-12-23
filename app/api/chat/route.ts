import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    // 1. Parse Input
    const body = await req.json();
    const { message, history } = body;
    
    if (!message) {
      return NextResponse.json({ error: "Message is required" }, { status: 400 });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: "API Key not found" }, { status: 500 });
    }

    // 2. Format History (Strict User/Model roles)
    // We map 'user' to 'user' and 'model' to 'model'
    let formattedHistory = (history || []).map((msg: any) => ({
      role: msg.role === "user" ? "user" : "model",
      parts: [{ text: msg.text || "" }], 
    }));

    // RULE: History must NOT start with a model response. Remove it if it does.
    if (formattedHistory.length > 0 && formattedHistory[0].role === "model") {
      formattedHistory.shift();
    }

    // 3. Initialize Google AI
    const genAI = new GoogleGenerativeAI(apiKey);
    
    // *** FIX: Switched to 'gemini-pro' to solve the 404 error ***
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    // 4. Start Chat
    const chat = model.startChat({
      history: formattedHistory,
    });

    // 5. Send Message
    const result = await chat.sendMessage(message);
    const response = await result.response;
    const text = response.text();

    return NextResponse.json({ text });

  } catch (error) {
    console.error("Chat API Error:", error);
    // Return the actual error message so you can see it in the browser console if needed
    return NextResponse.json({ error: "Internal Server Error", details: String(error) }, { status: 500 });
  }
}