"use client";

import React, { useState, useEffect, useRef } from "react";
import { X, Minus, Send, RotateCcw, ExternalLink, Terminal } from "lucide-react";
import { generateSreedevResponse } from "../lib/localResponder";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: string;
}

const STARTER_PROMPTS = [
  "Tell me about yourself",
  "What is Floww and how does it work?",
  "Why Forward Deployed Engineer (FDE)?",
  "Tell me about Topviewframes",
  "What is your tech stack?",
  "How can we collaborate?",
];

function formatTime() {
  const now = new Date();
  return now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

// Simple Markdown Renderer for links, bold, code, and bullet points
function FormattedMessageText({ text }: { text: string }) {
  const lines = text.split("\n");

  return (
    <div className="space-y-1.5 leading-relaxed text-xs md:text-sm">
      {lines.map((line, idx) => {
        if (!line.trim()) {
          return <div key={idx} className="h-1.5" />;
        }

        // Parse links [title](url) and bold **bold**
        const formatted = renderInlineFormatting(line);

        if (line.trim().startsWith("•") || line.trim().startsWith("-")) {
          return (
            <div key={idx} className="flex items-start gap-2 pl-1">
              <span className="text-[#4af626] font-bold text-sm shrink-0 leading-tight">▸</span>
              <span className="flex-1 text-[#d4d4d4]">{renderInlineFormatting(line.replace(/^[•\-]\s*/, ""))}</span>
            </div>
          );
        }

        return (
          <p key={idx} className="text-[#d4d4d4]">
            {formatted}
          </p>
        );
      })}
    </div>
  );
}

function renderInlineFormatting(str: string): React.ReactNode[] {
  // Regex pattern for bold **text** and links [text](url) and code `code`
  const regex = /(\*\*.*?\*\*|\[.*?\]\(.*?\)|\`.*?\`)/g;
  const parts = str.split(regex);

  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="text-white font-semibold">
          {part.slice(2, -2)}
        </strong>
      );
    }
    if (part.startsWith("`") && part.endsWith("`")) {
      return (
        <code key={i} className="px-1.5 py-0.5 rounded bg-[#1f1f1f] border border-[#333] text-[#8ab4f8] text-xs font-mono">
          {part.slice(1, -1)}
        </code>
      );
    }
    if (part.startsWith("[") && part.includes("](") && part.endsWith(")")) {
      const match = part.match(/\[(.*?)\]\((.*?)\)/);
      if (match) {
        const [, label, url] = match;
        const isExternal = url.startsWith("http");
        return (
          <a
            key={i}
            href={url}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noopener noreferrer" : undefined}
            className="inline-flex items-center gap-1 text-[#4af626] hover:text-[#8ab4f8] underline decoration-[#4af626]/40 underline-offset-2 transition-colors font-medium"
          >
            {label}
            {isExternal && <ExternalLink size={10} className="inline opacity-80" />}
          </a>
        );
      }
    }
    return part;
  });
}

export default function ChatWithSreedev() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [hasUnread, setHasUnread] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      role: "assistant",
      content:
        `Hello, I am **Sreedev Rajendran**.\n\n` +
        `I am a B.Tech CS & AI student, **Forward Deployed Engineer (FDE)**, and the Founder of [Topviewframes](https://topviewframes.netlify.app).\n\n` +
        `Feel free to ask about my flagship project **[Floww](https://flowwexpensetracker.netlify.app)**, why I specialize as an FDE, technical architecture, or how we can collaborate.`,
      timestamp: formatTime(),
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const chatWindowRef = useRef<HTMLDivElement>(null);

  // Auto-scroll on new messages
  useEffect(() => {
    if (isOpen && !isMinimized) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isTyping, isOpen, isMinimized]);

  // Trap scroll within the chatbot so the background website never scrolls
  useEffect(() => {
    if (!isOpen || isMinimized) return;

    const scrollContainer = scrollContainerRef.current;
    const chatWindow = chatWindowRef.current;

    const handleContainerWheel = (e: WheelEvent) => {
      if (!scrollContainer) return;
      const { scrollTop, scrollHeight, clientHeight } = scrollContainer;
      const isAtTop = scrollTop <= 0 && e.deltaY < 0;
      const isAtBottom = scrollTop + clientHeight >= scrollHeight - 1 && e.deltaY > 0;

      if (isAtTop || isAtBottom) {
        e.preventDefault();
      }
      e.stopPropagation();
    };

    const handleWindowWheel = (e: WheelEvent) => {
      // If hovering outside the scrollable messages area (e.g. title bar, status bar, input)
      if (scrollContainer && !scrollContainer.contains(e.target as Node)) {
        e.preventDefault();
        e.stopPropagation();
      }
    };

    scrollContainer?.addEventListener("wheel", handleContainerWheel, { passive: false });
    chatWindow?.addEventListener("wheel", handleWindowWheel, { passive: false });

    return () => {
      scrollContainer?.removeEventListener("wheel", handleContainerWheel);
      chatWindow?.removeEventListener("wheel", handleWindowWheel);
    };
  }, [isOpen, isMinimized]);

  // Focus input on open
  useEffect(() => {
    if (isOpen && !isMinimized) {
      setTimeout(() => inputRef.current?.focus(), 150);
      setHasUnread(false);
    }
  }, [isOpen, isMinimized]);

  const handleSend = async (messageText?: string) => {
    const textToSend = (messageText || input).trim();
    if (!textToSend || isTyping) return;

    const userMessage: Message = {
      id: `usr-${Date.now()}`,
      role: "user",
      content: textToSend,
      timestamp: formatTime(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    let replyText = "";

    try {
      // First attempt: call Netlify serverless Gemini API endpoint
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [...messages, userMessage].map((m) => ({
            role: m.role === "assistant" ? "model" : "user",
            content: m.content,
          })),
        }),
      });

      if (res.ok) {
        const data = await res.json();
        if (data.reply && !data.fallback) {
          replyText = data.reply;
        }
      }
    } catch {
      // Network or fetch failed, fallback immediately to local persona intelligence
    }

    // Fallback: If no API key or network error, use client-side Sreedev intelligence
    if (!replyText) {
      // Simulate realistic natural response delay
      await new Promise((r) => setTimeout(r, 600));
      replyText = generateSreedevResponse(textToSend);
    }

    const assistantMessage: Message = {
      id: `ast-${Date.now()}`,
      role: "assistant",
      content: replyText,
      timestamp: formatTime(),
    };

    setMessages((prev) => [...prev, assistantMessage]);
    setIsTyping(false);

    if (!isOpen) {
      setHasUnread(true);
    }
  };

  const handleReset = () => {
    setMessages([
      {
        id: `welcome-${Date.now()}`,
        role: "assistant",
        content:
          `Conversation reset. Feel free to ask about **Floww**, **Forward Deployed Engineering (FDE)**, **Topviewframes**, or my background.`,
        timestamp: formatTime(),
      },
    ]);
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 font-mono select-none">
      {/* ── Chat Modal / Window ── */}
      {isOpen && (
        <div
          ref={chatWindowRef}
          style={{ overscrollBehavior: "contain" }}
          className={`overscroll-contain transition-all duration-300 ease-out flex flex-col bg-[#0a0a0a]/95 backdrop-blur-xl border border-[#333] shadow-[0_12px_40px_rgba(0,0,0,0.85),0_0_24px_rgba(74,246,38,0.12)] rounded-2xl overflow-hidden mb-4 ${
            isMinimized
              ? "w-[300px] h-[52px]"
              : "w-[92vw] sm:w-[420px] md:w-[460px] h-[580px] max-h-[82vh]"
          }`}
        >
          {/* ── Terminal Window Bar ── */}
          <div className="flex items-center justify-between bg-[#141414] border-b border-[#262626] px-3.5 py-2.5 shrink-0">
            <div className="flex items-center gap-2">
              <div className="flex space-x-1.5">
                <button
                  type="button"
                  aria-label="Close chat"
                  onClick={() => setIsOpen(false)}
                  className="w-3 h-3 rounded-full bg-[#ff5f56] hover:brightness-125 transition-all cursor-pointer"
                />
                <button
                  type="button"
                  aria-label="Minimize chat"
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="w-3 h-3 rounded-full bg-[#ffbd2e] hover:brightness-125 transition-all cursor-pointer"
                />
                <button
                  type="button"
                  aria-label="Reset chat"
                  onClick={handleReset}
                  className="w-3 h-3 rounded-full bg-[#27c93f] hover:brightness-125 transition-all cursor-pointer"
                  title="Clear conversation"
                />
              </div>
              <span className="text-[#666] text-[11px] font-mono tracking-tight ml-2">
                ~/sreedev/chat.sh
              </span>
            </div>

            <div className="flex items-center gap-1">
              <button
                type="button"
                aria-label="Reset chat history"
                onClick={handleReset}
                title="Restart chat"
                className="p-1 rounded text-[#777] hover:text-[#4af626] hover:bg-[#222] transition-colors"
              >
                <RotateCcw size={13} />
              </button>
              <button
                type="button"
                aria-label="Minimize"
                onClick={() => setIsMinimized(!isMinimized)}
                className="p-1 rounded text-[#777] hover:text-white hover:bg-[#222] transition-colors"
              >
                <Minus size={13} />
              </button>
              <button
                type="button"
                aria-label="Close"
                onClick={() => setIsOpen(false)}
                className="p-1 rounded text-[#777] hover:text-[#ff5f56] hover:bg-[#222] transition-colors"
              >
                <X size={14} />
              </button>
            </div>
          </div>

          {!isMinimized && (
            <>
              {/* ── Profile Status Header ── */}
              <div className="flex items-center gap-3 px-4 py-3 bg-[#0d0d0d] border-b border-[#222] shrink-0">
                <div className="relative shrink-0">
                  <img
                    src="/profile.png"
                    alt="Sreedev Rajendran"
                    className="w-10 h-10 rounded-full object-cover border border-[#4af626]/40 shadow-[0_0_10px_rgba(74,246,38,0.2)]"
                  />
                  <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-[#27c93f] border-2 border-[#0a0a0a]" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h3 className="text-white text-sm font-bold truncate">Sreedev Rajendran</h3>
                    <span className="text-[10px] px-1.5 py-0.2 rounded bg-[#4af626]/10 border border-[#4af626]/30 text-[#4af626] font-semibold tracking-wider">
                      ONLINE
                    </span>
                  </div>
                  <p className="text-[#8ab4f8] text-[11px] truncate">
                    Forward Deployed Engineer (FDE) · Founder
                  </p>
                </div>
              </div>

              {/* ── Messages Container ── */}
              <div
                ref={scrollContainerRef}
                style={{ overscrollBehavior: "contain", overscrollBehaviorY: "contain" }}
                className="flex-1 overflow-y-auto p-4 space-y-3.5 scrollbar-thin scrollbar-thumb-[#222] scrollbar-track-transparent overscroll-contain"
              >
                {messages.map((m) => (
                  <div
                    key={m.id}
                    className={`flex flex-col ${
                      m.role === "user" ? "items-end" : "items-start"
                    }`}
                  >
                    <div className="flex items-center gap-1.5 mb-1 px-1">
                      <span className="text-[10px] text-[#555] font-mono">
                        {m.role === "user" ? "you" : "sreedev"}
                      </span>
                      <span className="text-[9px] text-[#444]">{m.timestamp}</span>
                    </div>

                    <div
                      className={`max-w-[88%] p-3.5 rounded-xl border text-xs sm:text-sm select-text ${
                        m.role === "user"
                          ? "bg-[#161616] border-[#333] text-white rounded-tr-xs"
                          : "bg-[#0d140e] border-[#4af626]/20 text-[#e0e0e0] rounded-tl-xs shadow-[0_2px_12px_rgba(0,0,0,0.4)]"
                      }`}
                    >
                      {m.role === "assistant" && (
                        <div className="text-[#4af626] font-bold text-xs mb-1.5 flex items-center gap-1">
                          <span>&gt; _</span>
                          <span className="text-[10px] text-[#666] font-normal tracking-wide">
                            response
                          </span>
                        </div>
                      )}
                      <FormattedMessageText text={m.content} />
                    </div>
                  </div>
                ))}

                {/* Typing Indicator */}
                {isTyping && (
                  <div className="flex flex-col items-start">
                    <div className="flex items-center gap-1.5 mb-1 px-1">
                      <span className="text-[10px] text-[#4af626] font-mono">sreedev</span>
                      <span className="text-[9px] text-[#444]">thinking...</span>
                    </div>
                    <div className="p-3 rounded-xl bg-[#0d140e] border border-[#4af626]/20 text-xs text-[#888] flex items-center gap-2">
                      <span className="inline-block w-2 h-2 rounded-full bg-[#4af626] animate-pulse" />
                      <span className="inline-block w-2 h-2 rounded-full bg-[#4af626] animate-pulse delay-150" />
                      <span className="inline-block w-2 h-2 rounded-full bg-[#4af626] animate-pulse delay-300" />
                      <span className="text-[11px] text-[#888] ml-1">Sreedev is replying...</span>
                    </div>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* ── Suggested Questions Chips ── */}
              {messages.length <= 2 && (
                <div
                  style={{ overscrollBehavior: "contain" }}
                  className="px-4 py-2 border-t border-[#1a1a1a] bg-[#0d0d0d]/80 flex gap-1.5 overflow-x-auto scrollbar-none shrink-0 overscroll-contain"
                >
                  {STARTER_PROMPTS.map((prompt, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => handleSend(prompt.replace(/^[^\s]+\s*/, ""))}
                      className="whitespace-nowrap px-2.5 py-1 rounded-md bg-[#161616] hover:bg-[#222] border border-[#262626] hover:border-[#4af626]/50 text-[11px] text-[#aaa] hover:text-[#4af626] transition-all cursor-pointer"
                    >
                      {prompt}
                    </button>
                  ))}
                </div>
              )}

              {/* ── Input Box ── */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend();
                }}
                className="p-3 bg-[#111] border-t border-[#262626] flex items-center gap-2 shrink-0"
              >
                <div className="flex-1 flex items-center bg-[#070707] border border-[#2a2a2a] focus-within:border-[#4af626] focus-within:ring-1 focus-within:ring-[#4af626]/40 rounded-xl px-3 py-2 transition-all">
                  <span className="text-[#4af626] text-xs font-bold mr-1.5 shrink-0">&gt;</span>
                  <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ask Sreedev about Floww, FDE, AI..."
                    className="w-full bg-transparent border-none outline-none text-white text-xs placeholder-[#555] font-mono"
                    disabled={isTyping}
                  />
                </div>

                <button
                  type="submit"
                  disabled={!input.trim() || isTyping}
                  aria-label="Send message"
                  className="p-2.5 rounded-xl bg-[#4af626] text-black hover:bg-[#39cc1c] disabled:opacity-30 disabled:hover:bg-[#4af626] transition-all cursor-pointer shrink-0 shadow-[0_0_12px_rgba(74,246,38,0.2)]"
                >
                  <Send size={14} className="stroke-[2.5]" />
                </button>
              </form>
            </>
          )}
        </div>
      )}

      {/* ── Floating Launcher Button ── */}
      <button
        type="button"
        aria-label="Chat with Sreedev"
        onClick={() => {
          setIsOpen(!isOpen);
          setIsMinimized(false);
          setHasUnread(false);
        }}
        className="group relative flex items-center gap-3 px-4 py-3 rounded-full bg-[#0a0a0a] border border-[#333] hover:border-[#4af626] shadow-[0_8px_30px_rgba(0,0,0,0.8),0_0_20px_rgba(74,246,38,0.15)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.8),0_0_28px_rgba(74,246,38,0.35)] transition-all duration-300 cursor-pointer active:scale-95"
      >
        {/* Pulsing beacon indicator */}
        <span className="relative flex h-2.5 w-2.5 shrink-0">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4af626] opacity-75" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#4af626]" />
        </span>

        {/* Avatar */}
        <div className="w-7 h-7 rounded-full overflow-hidden border border-[#4af626]/50 shrink-0">
          <img
            src="/profile.png"
            alt="Sreedev"
            className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-300"
          />
        </div>

        {/* Text */}
        <div className="flex items-center gap-1.5">
          <Terminal size={13} className="text-[#4af626]" />
          <span className="text-white text-xs font-bold tracking-tight">
            Chat with Sreedev
          </span>
          <span className="text-[#4af626] text-xs font-bold animate-pulse">_</span>
        </div>

        {/* Unread badge */}
        {hasUnread && !isOpen && (
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-[#ff5f56] border-2 border-[#0a0a0a]" />
        )}
      </button>
    </div>
  );
}
