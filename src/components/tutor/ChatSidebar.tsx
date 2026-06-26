"use client";

import { useState, useRef, useEffect } from "react";
import { MessageSquare, Send, X, Sparkles, User, Brain, AlertCircle, PlayCircle, Minimize2, Maximize2 } from "lucide-react";
import { ChatMessage, TUTOR_PRESETS, sendChatMessageStream } from "@/lib/gemini";
import MathText from "@/components/ui/MathText";

interface ChatSidebarProps {
  currentConceptName?: string;
  isOpen: boolean;
  onClose: () => void;
}

export default function ChatSidebar({ currentConceptName, isOpen, onClose }: ChatSidebarProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "model",
      content: "Hi Karthik! I'm your Study Buddy. 🌟 Select a concept on the left, click a quick preset helper below, or ask me any question about your CBSE syllabus!"
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom on new messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isGenerating]);

  const handleSendMessage = async (text: string, presetPrompt?: string) => {
    if (!text.trim() && !presetPrompt) return;

    // Create user message
    const userMsgContent = presetPrompt 
      ? `Tutor help request: ${text} (${presetPrompt})` 
      : text;

    const newMessages: ChatMessage[] = [
      ...messages,
      { role: "user", content: userMsgContent }
    ];

    setMessages(newMessages);
    setInputValue("");
    setIsGenerating(true);

    // Placeholder model message for streaming chunk accumulation
    setMessages((prev) => [...prev, { role: "model", content: "" }]);

    // Determine target system instruction prefix if we have current concept context
    let fullPresetPrompt = presetPrompt || "";
    if (currentConceptName) {
      fullPresetPrompt = `Currently studying concept: "${currentConceptName}". ${fullPresetPrompt}`;
    }

    await sendChatMessageStream(
      newMessages.slice(0, -1), // Send history up to the user message
      fullPresetPrompt,
      {
        onChunk: (chunk) => {
          setMessages((prev) => {
            const updated = [...prev];
            const last = updated[updated.length - 1];
            if (last && last.role === "model") {
              last.content += chunk;
            }
            return updated;
          });
        },
        onDone: (fullText) => {
          setIsGenerating(false);
        },
        onError: (err) => {
          console.error("Tutor chat error:", err);
          setMessages((prev) => {
            const updated = [...prev];
            const last = updated[updated.length - 1];
            if (last && last.role === "model") {
              last.content = "Oops! I encountered an error connecting to Gemini. Please try again. In the meantime, try selecting one of my local mock presets (like Story Mode or Cricket Analogy) which work offline!";
            }
            return updated;
          });
          setIsGenerating(false);
        }
      }
    );
  };

  /* ====================================================================
     MATH & MARKDOWN RENDERING HELPER
     ==================================================================== */
  const renderMessageContent = (content: string) => {
    if (!content) return <span className="inline-block h-4 w-1 bg-indigo-500 animate-pulse" />;

    // Split content by lines to process block-level structures
    const lines = content.split("\n");
    const elements: React.ReactNode[] = [];
    
    let inTable = false;
    let tableRows: React.ReactNode[] = [];
    let tableKey = 0;

    const flushTable = () => {
      if (tableRows.length > 0) {
        elements.push(
          <div key={`table-${tableKey++}`} className="my-3 overflow-x-auto rounded-xl border border-slate-150 dark:border-slate-800">
            <table className="min-w-full divide-y divide-slate-150 dark:divide-slate-800 bg-white dark:bg-slate-900">
              <tbody>{tableRows}</tbody>
            </table>
          </div>
        );
        tableRows = [];
      }
      inTable = false;
    };

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const trimmed = line.trim();

      // Table detection
      if (trimmed.startsWith("|")) {
        inTable = true;
        const cells = line.split("|").map(c => c.trim()).filter((_, idx) => idx > 0 && idx < line.split("|").length - 1);
        const isDivider = cells.every(c => c.startsWith("-") || c.endsWith("-"));
        
        if (!isDivider) {
          const isHeader = tableRows.length === 0; // First row is header
          tableRows.push(
            <tr key={`tr-${tableRows.length}`} className={isHeader ? "bg-slate-100 dark:bg-slate-800" : "border-b border-slate-100 dark:border-slate-800"}>
              {cells.map((cell, cIdx) => (
                isHeader ? (
                  <th key={cIdx} className="px-3 py-1.5 text-left text-xs font-bold text-slate-700 dark:text-slate-205">
                    <MathText text={cell} />
                  </th>
                ) : (
                  <td key={cIdx} className="px-3 py-1.5 text-xs text-slate-655 dark:text-slate-350">
                    <MathText text={cell} />
                  </td>
                )
              ))}
            </tr>
          );
        }
        continue;
      } else {
        if (inTable) {
          flushTable();
        }
      }

      // Headers
      if (trimmed.startsWith("### ")) {
        elements.push(
          <h5 key={`h5-${i}`} className="font-heading font-bold text-xs uppercase tracking-wide text-indigo-650 dark:text-indigo-400 mt-2 mb-1">
            <MathText text={trimmed.slice(4)} />
          </h5>
        );
        continue;
      }
      if (trimmed.startsWith("## ")) {
        elements.push(
          <h4 key={`h4-${i}`} className="font-heading font-bold text-sm text-indigo-700 dark:text-indigo-350 mt-3 mb-1">
            <MathText text={trimmed.slice(3)} />
          </h4>
        );
        continue;
      }
      if (trimmed.startsWith("# ")) {
        elements.push(
          <h3 key={`h3-${i}`} className="font-heading font-bold text-base text-indigo-800 dark:text-indigo-300 mt-4 mb-2">
            <MathText text={trimmed.slice(2)} />
          </h3>
        );
        continue;
      }

      // Bullet lists
      if (trimmed.startsWith("* ") || trimmed.startsWith("- ")) {
        elements.push(
          <ul key={`ul-${i}`} className="list-disc pl-5 my-0.5 space-y-0.5 text-xs">
            <li className="text-xs md:text-sm leading-relaxed text-slate-700 dark:text-slate-300">
              <MathText text={trimmed.slice(2)} />
            </li>
          </ul>
        );
        continue;
      }

      // Numbered lists
      if (/^\d+\.\s/.test(trimmed)) {
        const match = trimmed.match(/^(\d+)\.\s(.*)/);
        const num = match ? match[1] : "1";
        const content = match ? match[2] : trimmed;
        elements.push(
          <ol key={`ol-${i}`} className="list-decimal pl-5 my-0.5 space-y-0.5 text-xs" start={parseInt(num)}>
            <li className="text-xs md:text-sm leading-relaxed text-slate-700 dark:text-slate-300">
              <MathText text={content} />
            </li>
          </ol>
        );
        continue;
      }

      // Paragraph / spacing
      if (trimmed) {
        elements.push(
          <p key={`p-${i}`} className="text-xs md:text-sm leading-relaxed text-slate-700 dark:text-slate-300">
            <MathText text={line} />
          </p>
        );
      } else {
        elements.push(<div key={`space-${i}`} className="h-2" />);
      }
    }

    if (inTable) {
      flushTable();
    }

    return <div className="space-y-1.5">{elements}</div>;
  };

  if (!isOpen) return null;

  return (
    <div
      style={{ width: isExpanded ? "550px" : "380px" }}
      className="fixed inset-y-0 right-0 z-50 flex flex-col border-l border-slate-200 bg-white shadow-2xl transition-all duration-300 dark:border-slate-850 dark:bg-slate-950"
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-100 px-4 py-4 dark:border-slate-850">
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 dark:bg-indigo-950 dark:text-indigo-400">
            <Brain className="h-5 w-5 animate-pulse" />
          </div>
          <div>
            <h4 className="font-heading text-sm font-bold text-slate-800 dark:text-slate-150">
              AI Study Buddy
            </h4>
            {currentConceptName && (
              <p className="text-[10px] text-slate-450 truncate max-w-[180px] md:max-w-[240px]">
                Topic: {currentConceptName}
              </p>
            )}
          </div>
        </div>

        <div className="flex items-center gap-1.5">
          {/* Expand/Collapse sidebar width toggle */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="hidden md:flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 hover:bg-slate-50 hover:text-slate-600 dark:hover:bg-slate-850"
            title={isExpanded ? "Minimize panel" : "Maximize panel"}
          >
            {isExpanded ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
          </button>
          
          <button
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 hover:bg-slate-50 hover:text-slate-600 dark:hover:bg-slate-850"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Messages Window */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50/50 dark:bg-slate-900/10">
        {messages.map((msg, i) => {
          const isTutor = msg.role === "model";
          
          return (
            <div key={i} className={`flex gap-3 ${!isTutor ? "flex-row-reverse" : "flex-row"}`}>
              {/* Avatar */}
              <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl text-xs font-bold ${
                isTutor 
                  ? "bg-indigo-50 text-indigo-600 dark:bg-indigo-950 dark:text-indigo-400" 
                  : "bg-purple-100 text-purple-700 dark:bg-purple-950 dark:text-purple-400"
              }`}>
                {isTutor ? "AI" : <User className="h-4.5 w-4.5" />}
              </div>

              {/* Message Bubble */}
              <div className={`rounded-2xl px-4 py-3 max-w-[85%] text-xs shadow-sm ${
                isTutor 
                  ? "bg-white border border-slate-100 text-slate-805 dark:bg-slate-900 dark:border-slate-850 dark:text-slate-150" 
                  : "bg-purple-650 text-white dark:bg-purple-600"
              }`}>
                {renderMessageContent(msg.content)}
              </div>
            </div>
          );
        })}
        {isGenerating && messages[messages.length - 1]?.content === "" && (
          <div className="flex gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-indigo-50 text-indigo-650 dark:bg-indigo-950">
              AI
            </div>
            <div className="rounded-2xl bg-white border border-slate-100 px-4 py-3 dark:bg-slate-900 dark:border-slate-850">
              <span className="flex items-center gap-1.5 text-xs text-slate-400">
                Thinking... <span className="inline-block h-1.5 w-1.5 bg-indigo-500 rounded-full animate-bounce" />
              </span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Preset Chips */}
      <div className="border-t border-slate-100 px-4 pt-3 pb-1 dark:border-slate-850">
        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">
          Study Presets (Quick helpers)
        </p>
        <div className="flex gap-2 overflow-x-auto pb-1 max-w-full no-scrollbar">
          {Object.entries(TUTOR_PRESETS).map(([key, config]) => (
            <button
              key={key}
              disabled={isGenerating}
              onClick={() => handleSendMessage(config.label, config.prompt)}
              className="shrink-0 rounded-full border border-slate-200 bg-white px-3 py-1 text-[10px] font-bold text-slate-600 hover:border-indigo-300 hover:text-indigo-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400 dark:hover:border-indigo-900 dark:hover:text-indigo-400"
            >
              {config.label}
            </button>
          ))}
        </div>
      </div>

      {/* Inputs block */}
      <div className="p-4 border-t border-slate-100 dark:border-slate-850">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSendMessage(inputValue);
          }}
          className="flex items-center gap-2"
        >
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            disabled={isGenerating}
            placeholder={
              currentConceptName 
                ? `Ask about "${currentConceptName}"...` 
                : "Ask anything about NCERT..."
            }
            className="flex-1 rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-2.5 text-xs focus:border-indigo-500 focus:bg-white focus:outline-none dark:border-slate-850 dark:bg-slate-900 dark:focus:border-indigo-455"
          />
          <button
            type="submit"
            disabled={!inputValue.trim() || isGenerating}
            className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-650 text-white transition-all hover:bg-indigo-750 disabled:bg-slate-200 disabled:text-slate-400 dark:bg-indigo-600 dark:hover:bg-indigo-500 dark:disabled:bg-slate-800 dark:disabled:text-slate-650"
          >
            <Send className="h-4 w-4" />
          </button>
        </form>
      </div>
    </div>
  );
}
