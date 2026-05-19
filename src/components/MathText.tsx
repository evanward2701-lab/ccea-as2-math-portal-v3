import React from "react";
import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import { cn } from "@/lib/utils";
import { LessonVisual } from "@/components/LessonVisual";

interface MathTextProps {
  content: string;
  className?: string;
}

type ContentSegment =
  | { type: "markdown"; content: string }
  | { type: "visual"; visualId: string };

const visualTagPattern = /!\[visual:([^\]]+)\]\([^)]*\)/g;

function splitVisualSegments(content: string): ContentSegment[] {
  const segments: ContentSegment[] = [];
  let lastIndex = 0;

  for (const match of content.matchAll(visualTagPattern)) {
    const [fullMatch, visualId] = match;
    const matchIndex = match.index ?? 0;
    const markdownBefore = content.slice(lastIndex, matchIndex);

    if (markdownBefore.trim()) {
      segments.push({ type: "markdown", content: markdownBefore });
    }

    segments.push({ type: "visual", visualId });
    lastIndex = matchIndex + fullMatch.length;
  }

  const markdownAfter = content.slice(lastIndex);
  if (markdownAfter.trim()) {
    segments.push({ type: "markdown", content: markdownAfter });
  }

  return segments;
}

export function MathText({ content, className }: MathTextProps) {
  const segments = splitVisualSegments(content);
  const markdownComponents = {
    h1: ({ node, ...props }) => <h1 className="font-serif text-4xl mb-6 italic tracking-tight text-[#1A1A1A]" {...props} />,
    h2: ({ node, ...props }) => <h2 className="font-serif text-3xl mb-4 mt-12 border-b border-[#1A1A1A]/20 pb-2 text-[#1A1A1A]" {...props} />,
    h3: ({ node, ...props }) => <h3 className="font-serif text-xl mb-3 mt-8 italic text-[#1A1A1A]" {...props} />,
    p: ({ node, ...props }) => <p className="leading-relaxed mb-6 text-sm" {...props} />,
    ul: ({ node, ...props }) => <ul className="list-none mb-6 space-y-3" {...props} />,
    ol: ({ node, ...props }) => <ol className="list-decimal list-outside ml-6 mb-6 space-y-3 text-sm font-serif" {...props} />,
    li: ({ node, ...props }) => <li className="relative pl-6 text-sm before:content-[''] before:absolute before:left-0 before:top-2 before:w-3 before:h-px before:bg-[#1A1A1A]" {...props} />,
    blockquote: ({ node, ...props }) => <blockquote className="border-l border-[#1A1A1A] bg-[#F1EFE9] p-6 italic text-[#1A1A1A] my-8 text-sm" {...props} />,
    strong: ({ node, ...props }) => <strong className="font-bold underline decoration-[#1A1A1A]/30 underline-offset-4" {...props} />,
    code: ({ node, ...props }) => <code className="font-mono text-[10px] bg-[#1A1A1A] text-white px-1.5 py-0.5 uppercase tracking-widest" {...props} />,
    img: ({ node, src, alt, ...props }) => <img src={src} alt={alt} className="my-8 border border-[#1A1A1A] shadow-[8px_8px_0px_#1A1A1A] max-w-full h-auto" {...props} />,
  };
  
  return (
    <div className={cn("markdown-body max-w-none text-[#1A1A1A]", className)}>
      {segments.map((segment, index) => (
        segment.type === "visual" ? (
          <LessonVisual key={`${segment.visualId}-${index}`} visualId={segment.visualId} />
        ) : (
          <ReactMarkdown
            key={index}
            remarkPlugins={[remarkMath]}
            rehypePlugins={[rehypeKatex]}
            components={markdownComponents}
          >
            {segment.content}
          </ReactMarkdown>
        )
      ))}
    </div>
  );
}
