"use client";

import React, { useState, useRef, useEffect } from "react";

type Message = {
  role: "user" | "model";
  text: string;
};

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "model",
      text: "Hello! 👋 I'm your Career Assistant powered by Perplexity. I can search the web to give you up-to-date advice. How can I help?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput("");
    
    // Add user message locally
    setMessages((prev) => [...prev, { role: "user", text: userMessage }]);
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: userMessage,
          // We send the existing history. The backend will handle the merging/cleaning.
          history: messages.map((m) => ({ role: m.role, text: m.text })),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to fetch response");
      }

      if (data.text) {
        setMessages((prev) => [...prev, { role: "model", text: data.text }]);
      }
    } catch (error: any) {
      console.error("Chat Error:", error);
      setMessages((prev) => [
        ...prev,
        { role: "model", text: `⚠️ Error: ${error.message}` },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="flex h-screen w-full overflow-hidden bg-background-light dark:bg-background-dark text-slate-900 dark:text-white font-display">
      {/* Sidebar */}
      <aside className="hidden md:flex flex-col w-[280px] h-full border-r border-border-dark bg-[#0d191c] shrink-0">
        <div className="p-5 pb-2">
          <div className="flex items-center gap-3 mb-6 text-primary">
            <span className="material-symbols-outlined text-3xl">smart_toy</span>
            <h1 className="text-xl font-bold tracking-tight text-white">Career AI</h1>
          </div>
          <button 
            onClick={() => setMessages([{
              role: "model",
              text: "Hello! 👋 Ready to search the web for your career. What do you need?"
            }])} 
            className="flex w-full items-center justify-center gap-2 rounded-xl h-11 px-4 bg-primary hover:bg-primary-hover text-[#102023] text-sm font-bold transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">add</span>
            <span>New Chat</span>
          </button>
        </div>
        <div className="flex-1 overflow-y-auto px-3 py-2 space-y-6">
          <div className="flex flex-col gap-1">
            <p className="px-3 text-xs font-medium text-slate-400 uppercase tracking-wider mb-2">Today</p>
            <button className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-surface-dark text-white group cursor-pointer transition-colors">
              <span className="material-symbols-outlined text-[20px] text-primary">chat_bubble</span>
              <span className="text-sm font-medium truncate">Current Session</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-full relative min-w-0 bg-background-light dark:bg-background-dark">
        {/* Header */}
        <header className="h-16 flex items-center justify-between px-4 md:px-6 border-b border-border-dark bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-sm z-10">
          <div className="md:hidden flex items-center gap-2 text-white">
             <span className="material-symbols-outlined">smart_toy</span>
             <span className="font-bold">Career AI</span>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">AI Career Assistant</h2>
            <span className="bg-[#224249] text-primary text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">Perplexity</span>
          </div>
        </header>

        {/* Chat Area */}
        <div className="flex-1 overflow-y-auto p-4 md:p-6 pb-40 scroll-smooth">
          <div className="max-w-3xl mx-auto flex flex-col gap-6">
            {messages.map((msg, index) => (
              <div key={index} className={`flex items-start gap-4 ${msg.role === "user" ? "justify-end" : ""}`}>
                {msg.role === "model" && (
                  <div className="bg-primary/20 p-1.5 rounded-full shrink-0 border border-primary/30 mt-1">
                    <span className="material-symbols-outlined text-primary text-[20px]">smart_toy</span>
                  </div>
                )}
                <div className={`flex flex-col gap-1 max-w-[85%] ${msg.role === "user" ? "items-end" : ""}`}>
                  <span className="text-xs font-medium text-slate-500 dark:text-slate-400 mx-1">
                    {msg.role === "user" ? "You" : "Perplexity"}
                  </span>
                  <div className={`p-4 rounded-2xl shadow-sm text-[15px] leading-relaxed whitespace-pre-wrap ${msg.role === "user" ? "bg-primary text-[#102023] rounded-tr-none font-medium" : "bg-white dark:bg-surface-dark text-slate-800 dark:text-slate-100 rounded-tl-none border border-gray-200 dark:border-border-dark"}`}>
                    {msg.text}
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex items-center gap-4">
                 <div className="bg-primary/20 p-1.5 rounded-full shrink-0 border border-primary/30 mt-1">
                    <span className="material-symbols-outlined text-primary text-[20px]">smart_toy</span>
                  </div>
                  <div className="bg-white dark:bg-surface-dark px-4 py-3 rounded-2xl rounded-tl-none border border-gray-200 dark:border-border-dark flex items-center gap-1.5 h-12">
                    <div className="w-2 h-2 rounded-full bg-slate-400 animate-bounce"></div>
                    <div className="w-2 h-2 rounded-full bg-slate-400 animate-bounce delay-75"></div>
                    <div className="w-2 h-2 rounded-full bg-slate-400 animate-bounce delay-150"></div>
                  </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        </div>

        {/* Input Area */}
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-background-light via-background-light to-transparent dark:from-background-dark dark:via-background-dark dark:to-transparent px-4 pb-6 pt-10">
          <div className="max-w-3xl mx-auto">
            <div className="relative bg-white dark:bg-[#162a2f] rounded-2xl border border-gray-300 dark:border-[#2e5760] shadow-lg focus-within:ring-2 focus-within:ring-primary focus-within:border-transparent transition-all">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                disabled={isLoading}
                className="w-full bg-transparent border-none text-slate-900 dark:text-white placeholder-slate-400 focus:ring-0 px-4 py-4 pr-24 resize-none max-h-32 focus:outline-none disabled:opacity-50"
                placeholder="Ask anything..."
                rows={1}
                style={{ minHeight: "56px" }}
              />
              <div className="absolute right-2 bottom-2">
                <button 
                  onClick={handleSend}
                  disabled={isLoading || !input.trim()}
                  className="p-2 bg-primary hover:bg-primary-hover text-[#102023] rounded-xl transition-colors shadow-md disabled:opacity-50"
                >
                  <span className="material-symbols-outlined text-[20px] font-bold block transform translate-x-0.5">send</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}