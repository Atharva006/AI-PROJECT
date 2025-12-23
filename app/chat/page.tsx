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
      text: "Hello! 👋 I'm ready to help you navigate your career path. Are you looking for advice on resumes, interview prep, or exploring new fields like Data Science?",
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
    setMessages((prev) => [...prev, { role: "user", text: userMessage }]);
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: userMessage,
          history: messages.map((m) => ({ role: m.role, text: m.text })),
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      if (data.error) {
        setMessages((prev) => [
          ...prev, 
          { role: "model", text: `Error: ${data.error}. ${data.details || ''}` }
        ]);
      } else if (data.text) {
        setMessages((prev) => [...prev, { role: "model", text: data.text }]);
      } else {
        setMessages((prev) => [
          ...prev, 
          { role: "model", text: "Sorry, I couldn't get a response. Please try again." }
        ]);
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setMessages((prev) => [
        ...prev, 
        { role: "model", text: "Connection error. Please check your internet and try again." }
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
              text: "Hello! 👋 I'm ready to help you navigate your career path. Are you looking for advice on resumes, interview prep, or exploring new fields like Data Science?",
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
        <div className="p-4 border-t border-border-dark bg-[#0d191c]">
          <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-[#162a2f] cursor-pointer transition-colors">
            <div className="h-9 w-9 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
              U
            </div>
            <div className="flex flex-col overflow-hidden">
              <p className="text-white text-sm font-medium truncate">User</p>
              <p className="text-primary text-xs truncate">Pro Plan</p>
            </div>
            <span className="material-symbols-outlined text-slate-400 ml-auto text-[20px]">settings</span>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-full relative min-w-0 bg-background-light dark:bg-background-dark">
        {/* Header */}
        <header className="h-16 flex items-center justify-between px-4 md:px-6 border-b border-border-dark bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-sm z-10">
          <div className="flex items-center gap-3 md:hidden">
            <button className="text-slate-400 hover:text-white">
              <span className="material-symbols-outlined">menu</span>
            </button>
            <h2 className="text-lg font-bold text-white">Career AI</h2>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">AI Career Assistant</h2>
            <span className="bg-[#224249] text-primary text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">Pro</span>
          </div>
        </header>

        {/* Chat Area */}
        <div className="flex-1 overflow-y-auto p-4 md:p-6 pb-40 scroll-smooth" id="chat-container">
          <div className="max-w-3xl mx-auto flex flex-col gap-6">
            <div className="flex justify-center my-2">
              <span className="text-xs text-slate-500 dark:text-slate-400 bg-black/5 dark:bg-white/5 px-3 py-1 rounded-full">Today</span>
            </div>

            {messages.map((msg, index) => (
              <div key={index} className={`flex items-start gap-4 ${msg.role === "user" ? "justify-end" : ""}`}>
                
                {msg.role === "model" && (
                  <div className="bg-primary/20 p-1.5 rounded-full shrink-0 border border-primary/30 mt-1">
                    <span className="material-symbols-outlined text-primary text-[20px]">smart_toy</span>
                  </div>
                )}

                <div className={`flex flex-col gap-1 max-w-[85%] ${msg.role === "user" ? "items-end" : ""}`}>
                  <span className="text-xs font-medium text-slate-500 dark:text-slate-400 mx-1">
                    {msg.role === "user" ? "You" : "Career AI"}
                  </span>
                  <div
                    className={`p-4 rounded-2xl shadow-sm text-[15px] leading-relaxed whitespace-pre-wrap
                      ${msg.role === "user" 
                        ? "bg-primary text-[#102023] rounded-tr-none font-medium" 
                        : "bg-white dark:bg-surface-dark text-slate-800 dark:text-slate-100 rounded-tl-none border border-gray-200 dark:border-border-dark"
                      }`}
                  >
                    {msg.text}
                  </div>
                </div>

                {msg.role === "user" && (
                  <div className="h-9 w-9 rounded-full bg-slate-600 flex items-center justify-center text-white text-xs shrink-0 mt-1">
                    ME
                  </div>
                )}
              </div>
            ))}

            {/* Loading Indicator */}
            {isLoading && (
              <div className="flex items-center gap-4">
                <div className="bg-primary/20 p-1.5 rounded-full shrink-0 border border-primary/30 mt-1">
                  <span className="material-symbols-outlined text-primary text-[20px]">smart_toy</span>
                </div>
                <div className="bg-white dark:bg-surface-dark px-4 py-3 rounded-2xl rounded-tl-none border border-gray-200 dark:border-border-dark flex items-center gap-1.5 h-12">
                  <div className="w-2 h-2 rounded-full bg-slate-400 dark:bg-slate-500 animate-bounce" style={{ animationDelay: "0ms" }}></div>
                  <div className="w-2 h-2 rounded-full bg-slate-400 dark:bg-slate-500 animate-bounce" style={{ animationDelay: "150ms" }}></div>
                  <div className="w-2 h-2 rounded-full bg-slate-400 dark:bg-slate-500 animate-bounce" style={{ animationDelay: "300ms" }}></div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>
        </div>

        {/* Input Area */}
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-background-light via-background-light to-transparent dark:from-background-dark dark:via-background-dark dark:to-transparent px-4 pb-6 pt-10">
          <div className="max-w-3xl mx-auto flex flex-col gap-3">
            <div className="relative bg-white dark:bg-[#162a2f] rounded-2xl border border-gray-300 dark:border-[#2e5760] shadow-lg focus-within:ring-2 focus-within:ring-primary focus-within:border-transparent transition-all">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                disabled={isLoading}
                className="w-full bg-transparent border-none text-slate-900 dark:text-white placeholder-slate-400 focus:ring-0 px-4 py-4 pr-24 resize-none max-h-32 focus:outline-none disabled:opacity-50"
                placeholder="Ask anything about your career..."
                rows={1}
                style={{ minHeight: "56px" }}
              />
              <div className="absolute right-2 bottom-2 flex items-center gap-1">
                <button 
                  onClick={handleSend}
                  disabled={isLoading || !input.trim()}
                  className="p-2 bg-primary hover:bg-primary-hover text-[#102023] rounded-xl transition-colors shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className="material-symbols-outlined text-[20px] font-bold block transform translate-x-0.5">send</span>
                </button>
              </div>
            </div>
            <p className="text-center text-[10px] text-slate-400">
              AI can make mistakes. Verify important career information.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
