import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { message, history } = body;

    // 1. Validate Input
    if (!message) {
      return NextResponse.json({ error: "Message is required" }, { status: 400 });
    }

    const apiKey = process.env.PERPLEXITY_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "API Key not found. Check .env.local" },
        { status: 500 }
      );
    }

    // 2. Prepare Full Conversation
    // Map roles: 'model' -> 'assistant', 'user' -> 'user'
    const mappedHistory = (history || []).map((msg: any) => ({
      role: msg.role === "model" ? "assistant" : "user",
      content: msg.text || "",
    }));

    // Combine history with the new user message
    const fullConversation = [
      ...mappedHistory,
      { role: "user", content: message },
    ];

    // 3. Sanitize Messages (CRITICAL FIX for "Alternate" Error)
    const sanitizedMessages: any[] = [];

    // Step A: Remove any leading 'assistant' messages (The conversation MUST start with User)
    // We skip the initial "Hello" greeting from the AI so the API doesn't crash.
    let startIndex = 0;
    while (startIndex < fullConversation.length && fullConversation[startIndex].role === "assistant") {
      startIndex++;
    }

    // Step B: Merge consecutive messages of the same role
    // (e.g., User -> User becomes one big User message)
    for (let i = startIndex; i < fullConversation.length; i++) {
      const currentMsg = fullConversation[i];
      
      if (sanitizedMessages.length > 0) {
        const lastMsg = sanitizedMessages[sanitizedMessages.length - 1];
        
        if (lastMsg.role === currentMsg.role) {
          // Merge content if roles are identical
          lastMsg.content += "\n\n" + currentMsg.content;
        } else {
          sanitizedMessages.push(currentMsg);
        }
      } else {
        sanitizedMessages.push(currentMsg);
      }
    }

    // 4. Construct Final Payload
    const messages = [
      { role: "system", content: "You are a helpful and accurate career assistant." },
      ...sanitizedMessages
    ];

    // 5. Call Perplexity API
    const response = await fetch("https://api.perplexity.ai/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "sonar-pro", 
        messages: messages,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error?.message || `API Error: ${response.status}`);
    }

    const data = await response.json();
    const text = data.choices[0]?.message?.content || "";

    return NextResponse.json({ text });

  } catch (error: any) {
    console.error("Chat API Error:", error);
    return NextResponse.json(
      { error: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}