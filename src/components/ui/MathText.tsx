import React from "react";
import katex from "katex";

interface MathTextProps {
  text: string;
  className?: string;
}

export default function MathText({ text, className = "" }: MathTextProps) {
  if (!text) return null;

  // Split by LaTeX tokens ($$...$$ or $...$)
  const parts = text.split(/(\$\$[\s\S]*?\$\$|\$[^\$]*?\$)/g);

  return (
    <span className={className}>
      {parts.map((part, idx) => {
        // Block math: $$formula$$
        if (part.startsWith("$$") && part.endsWith("$$")) {
          const math = part.slice(2, -2).trim();
          try {
            const html = katex.renderToString(math, { displayMode: true, throwOnError: false });
            return (
              <span
                key={idx}
                className="block my-3 overflow-x-auto text-center"
                dangerouslySetInnerHTML={{ __html: html }}
              />
            );
          } catch (_) {
            return (
              <code key={idx} className="block bg-slate-100 p-2 rounded text-xs dark:bg-slate-800 text-slate-800 dark:text-slate-200">
                {part}
              </code>
            );
          }
        }
        
        // Inline math: $formula$
        if (part.startsWith("$") && part.endsWith("$")) {
          const math = part.slice(1, -1).trim();
          try {
            const html = katex.renderToString(math, { displayMode: false, throwOnError: false });
            return (
              <span
                key={idx}
                className="inline-block mx-0.5 align-middle"
                dangerouslySetInnerHTML={{ __html: html }}
              />
            );
          } catch (_) {
            return (
              <code key={idx} className="bg-slate-100 px-1 rounded text-xs dark:bg-slate-800 text-slate-800 dark:text-slate-200">
                {part}
              </code>
            );
          }
        }

        // Render inline markdown styles (e.g. bolding)
        return renderInlineMarkdown(part, idx);
      })}
    </span>
  );
}

function renderInlineMarkdown(text: string, key: number) {
  if (text.includes("**")) {
    const boldParts = text.split(/\*\*([\s\S]*?)\*\*/g);
    return (
      <span key={key}>
        {boldParts.map((bPart, bIdx) => {
          if (bIdx % 2 === 1) {
            return (
              <strong key={bIdx} className="font-bold text-slate-900 dark:text-white">
                {bPart}
              </strong>
            );
          }
          return bPart;
        })}
      </span>
    );
  }
  return text;
}
