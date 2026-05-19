import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import { cn } from "@/lib/utils";
import { LessonVisual } from "@/components/LessonVisual";
import type { Components } from "react-markdown";

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
  
  // Refactored to seamlessly match the global dark canvas premium styling parameters
  const markdownComponents: Components = {
    h1: ({ node, ...props }) => <h1 className="font-serif text-4xl mb-6 italic tracking-tight text-slate-100" {...props} />,
    h2: ({ node, ...props }) => <h2 className="font-serif text-3xl mb-4 mt-12 border-b border-slate-800 pb-2 text-slate-200" {...props} />,
    h3: ({ node, ...props }) => <h3 className="font-serif text-xl mb-3 mt-8 italic text-slate-300" {...props} />,
    p: ({ node, ...props }) => <p className="leading-relaxed mb-6 text-sm text-slate-300" {...props} />,
    ul: ({ node, ...props }) => <ul className="list-none mb-6 space-y-3 text-slate-300" {...props} />,
    ol: ({ node, ...props }) => <ol className="list-decimal list-outside ml-6 mb-6 space-y-3 text-sm font-serif text-slate-300" {...props} />,
    li: ({ node, ...props }) => <li className="relative pl-6 text-sm before:content-[''] before:absolute before:left-0 before:top-2 before:w-3 before:h-px before:bg-slate-700 text-slate-300" {...props} />,
    blockquote: ({ node, ...props }) => <blockquote className="border-l-2 border-emerald-500 bg-slate-900/60 p-6 italic text-slate-300 my-8 text-sm rounded-r-lg" {...props} />,
    strong: ({ node, ...props }) => <strong className="font-bold underline decoration-slate-700 underline-offset-4 text-slate-100" {...props} />,
    code: ({ node, ...props }) => <code className="font-mono text-[10px] bg-slate-900 text-amber-400 px-1.5 py-0.5 uppercase tracking-widest rounded border border-slate-800" {...props} />,
    img: ({ node, src, alt, ...props }) => <img src={src} alt={alt} className="my-8 border border-slate-800 shadow-2xl max-w-full h-auto rounded-xl" {...props} />,
  };
  
  return (
    <div className={cn("markdown-body max-w-none text-slate-300", className)}>
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