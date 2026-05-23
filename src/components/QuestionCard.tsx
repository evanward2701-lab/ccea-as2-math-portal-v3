import React from 'react';
import { PracticeQuestion } from "@/types";
import { MathText } from "./MathText";
import { LessonVisual } from "./LessonVisual";
import { cn } from "@/lib/utils";

interface QuestionCardProps {
  question: PracticeQuestion;
  index?: number;
  showModuleBadge?: boolean;
}

interface Part {
  label: string;
  content: string;
}

interface Row {
  kind: "content" | "break" | "annotation";
  text?: string;
  marks?: string[];
}

/**
 * LABEL DETECTOR: Finds part labels like (a), (b), (i), (ii), **(a)**, **(i)**.
 */
const detectLabels = (text: string): string[] => {
  const labelPattern = /(?:\n|^)\s*(\(?\*\*?\(?[a-zivx]+\)?\*\*?\)?) /gi;
  const matches = Array.from(text.matchAll(labelPattern));
  return matches.map(m => m[1].replace(/[\*()]/g, '').toUpperCase().trim());
};

/**
 * SPLITTER: Splits text based on a specific set of ordered labels.
 * This ensures the mark scheme is split even if it lacks some formatting.
 */
const splitByLabels = (text: string, labels: string[]): Part[] => {
  if (!text) return [];
  if (labels.length === 0) return [{ label: '', content: text.trim() }];

  const results: Part[] = [];
  
  // Construct a split pattern for these specific labels
  const escapedLabels = labels.map(l => l.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
  const splitPattern = new RegExp(`(?:\n|^)\\s*(\\(?\\*\\*?\\(?(?:${escapedLabels.join('|')})\\)?\\*\\*?\\)?) `, 'i');
  
  const rawParts = text.split(splitPattern).filter(p => p !== undefined && p !== "");
  
  let startIndex = 0;
  // Handle intro text
  if (rawParts.length > 0 && !labels.some(l => rawParts[0].includes(l))) {
    results.push({ label: '', content: rawParts[0].trim() });
    startIndex = 1;
  }

  for (let i = startIndex; i < rawParts.length; i += 2) {
    const rawLabel = rawParts[i];
    const cleanLabel = rawLabel.replace(/[\*()]/g, '').toUpperCase().trim();
    const content = (rawParts[i + 1] || '').trim();
    results.push({ label: cleanLabel, content });
  }

  return results;
};

/**
 * TABLE PARSER: Converts Markdown mark-scheme tables into standard rows.
 */
const parseTableRows = (text: string): Row[] => {
  const rows: Row[] = [];
  const lines = text.split('\n').map(l => l.trim());
  
  const headerIndex = lines.findIndex(l => l.startsWith('|') && l.toLowerCase().includes('working'));
  if (headerIndex === -1) return [];

  const headerCells = lines[headerIndex].split('|').map(c => c.trim().toLowerCase());
  const workingCol = headerCells.indexOf('official working / result');
  const codeCol = headerCells.indexOf('mark code');
  const annotCol = headerCells.indexOf('brief annotation');

  lines.slice(headerIndex + 2).forEach(line => {
    if (!line.startsWith('|')) return;
    const cells = line.split('|').map(c => c.trim());
    if (cells.length < 3) return;

    const working = workingCol !== -1 ? cells[workingCol] : '';
    const code = codeCol !== -1 ? cells[codeCol] : '';
    const annotation = annotCol !== -1 ? cells[annotCol] : '';

    if (working) {
      // Split mark codes by space or comma
      const marks = code ? code.split(/[\s,]+/).filter(m => m.length > 0) : [];
      rows.push({ kind: 'content', text: working, marks });
    }
    
    if (annotation && annotation !== '-' && annotation !== '') {
      rows.push({ kind: 'annotation', text: annotation });
    }
  });

  return rows;
};

/**
 * COMPONENT: Scaffolds solution steps with LaTeX awareness and mark extraction.
 */
const MarkSchemeScaffold: React.FC<{ content: string }> = ({ content }) => {
  const markRegex = /\[([A-Z0-9\s,]+)\]/g;
  const mathBlockRegex = /(\$\$[\s\S]*?\$\$)/g;
  
  if (content.trim().startsWith('|')) {
    const tableRows = parseTableRows(content);
    if (tableRows.length > 0) return renderRows(tableRows);
  }

  const parts = content.split(mathBlockRegex);
  const rows: Row[] = [];

  parts.forEach((part, i) => {
    if (i % 2 === 1) {
      rows.push({ kind: 'content', text: part, marks: [] });
    } else {
      const lines = part.split('\n');
      lines.forEach((line, lineIdx) => {
        const foundMarks: string[] = [];
        const cleanLine = line.replace(markRegex, (match, m) => {
          // Split multiple marks in brackets like [M1 W1]
          m.split(/[\s,]+/).forEach(singleMark => {
            if (singleMark.trim()) foundMarks.push(singleMark.trim());
          });
          return '';
        }).trim();

        if (!cleanLine && foundMarks.length === 0) {
          if (lineIdx > 0 && lineIdx < lines.length - 1) {
            rows.push({ kind: 'break' });
          }
          return;
        }

        rows.push({ kind: 'content', text: cleanLine, marks: foundMarks });
      });
    }
  });

  return renderRows(rows);
};

const renderRows = (rows: Row[]) => (
  <div className="w-full flex flex-col items-center">
    {rows.map((row, idx) => {
      if (row.kind === 'break') return <div key={idx} className="h-4" />;
      
      if (row.kind === 'annotation') {
        return (
          <div key={idx} className="w-full max-w-2xl mb-4 italic text-zinc-500 text-[13px] text-center antialiased">
            {row.text}
          </div>
        );
      }

      return (
        <div key={idx} className="w-full max-w-3xl mb-6 last:mb-0">
          {row.text && (
            <div className="w-full text-center">
              <MathText content={row.text} center noMargin />
            </div>
          )}
          
          {row.marks && row.marks.length > 0 && (
            <div className="w-full flex justify-end mt-1">
              <div className="flex gap-2 flex-wrap justify-end">
                {row.marks.map((m, mIdx) => (
                  <span 
                    key={mIdx} 
                    className="font-mono font-bold text-zinc-400 bg-zinc-800/60 border border-zinc-700/40 px-2.5 py-0.5 rounded-full text-[9px] tracking-widest uppercase italic shadow-xs"
                  >
                    {m}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      );
    })}
  </div>
);

export const QuestionCard: React.FC<QuestionCardProps> = ({ 
  question, 
  index,
  showModuleBadge = false 
}) => {
  const sanitizedQuestion = question.questionMarkdown.replace(/\[(\d+)\]/g, '($1 marks)');
  
  // 1. Source of Truth: Detect labels from the question
  const expectedLabels = detectLabels(sanitizedQuestion);
  
  // 2. Split both question and solution by these labels
  const qParts = splitByLabels(sanitizedQuestion, expectedLabels);
  const mParts = splitByLabels(question.markSchemeMarkdown, expectedLabels);

  // 3. Map solution content to each detected part
  const solutionMap = new Map<string, string>();
  mParts.forEach(p => {
    solutionMap.set(p.label, p.content);
  });

  return (
    <div 
      className={cn(
        "mb-10 p-8 md:p-10 bg-[#1e1e21] border border-zinc-800/40 rounded-[2.5rem] shadow-2xl animate-in fade-in slide-in-from-bottom-6 duration-1000",
        index !== undefined && `delay-[${index * 150}ms]`
      )}
    >
      {/* Meta Header */}
      <div className="flex items-center justify-between mb-8 opacity-60">
        <div className="flex items-center gap-4">
          {showModuleBadge && (
            <span className="text-[9px] font-mono font-bold bg-zinc-800 border border-zinc-700 text-zinc-500 px-2 py-0.5 rounded uppercase tracking-[0.1em]">
              {question.moduleId}
            </span>
          )}
          <h3 className="text-[10px] font-mono font-bold text-zinc-500 uppercase tracking-[0.4em]">
            Reference <span className="text-zinc-600 font-normal">#{question.id}</span>
          </h3>
        </div>
        <div className="text-[10px] font-mono font-bold text-zinc-500 uppercase tracking-[0.2em] bg-zinc-950 px-3 py-1.5 rounded-full border border-zinc-800 shadow-xs">
          {question.marks} Tariff Points
        </div>
      </div>

      {/* Visual Inset */}
      {question.visualId && (
        <div className="mb-10 p-10 bg-[#141417] rounded-[2rem] border border-zinc-800/80 flex justify-center items-center overflow-hidden shadow-inner group transition-all duration-1000">
          <LessonVisual visualId={question.visualId} />
        </div>
      )}

      {/* Question Content */}
      <div className="mb-8 text-zinc-300">
        {qParts.map((part, i) => (
          <div key={i} className="flex gap-6 mb-8 last:mb-0 group animate-in fade-in slide-in-from-left-4 duration-700">
            {part.label && (
              <div className="pt-1.5 shrink-0">
                <span className="font-mono font-bold text-zinc-600 text-[10px] uppercase tracking-[0.2em] bg-zinc-800/30 px-2.5 py-1 rounded-lg border border-zinc-700/30 block group-hover:text-zinc-400 transition-colors">
                  {part.label}
                </span>
              </div>
            )}
            <div className="flex-1 whitespace-pre-wrap antialiased">
              <MathText content={part.content} />
            </div>
          </div>
        ))}
      </div>

      {/* Solutions Dropdowns: One per part detected in Question */}
      <div className="mt-6 space-y-3 border-t border-zinc-800/40 pt-8">
        {expectedLabels.length === 0 ? (
          // Single Part Fallback
          <details className="group border border-zinc-800/30 rounded-2xl bg-[#252529] hover:bg-[#2a2a2e] transition-all duration-500 overflow-hidden">
            <summary className="cursor-pointer px-8 py-4 font-bold text-[10px] text-zinc-500 hover:text-zinc-200 uppercase tracking-[0.3em] flex items-center justify-between transition-colors list-none select-none">
              <div className="flex items-center gap-5">
                <div className="w-1.5 h-1.5 rounded-full bg-zinc-800 group-open:bg-zinc-100 group-open:shadow-[0_0_15px_rgba(255,255,255,0.4)] transition-all duration-500" />
                <span>View Solution</span>
              </div>
              <span className="opacity-0 group-open:opacity-100 transition-opacity duration-1000 text-[9px] font-mono text-zinc-600 uppercase tracking-widest">Protocol Active</span>
            </summary>
            <div className="px-8 pb-10 pt-2 flex flex-col items-center">
              <div className="w-24 h-px bg-zinc-800/40 mb-10 mx-auto" />
              <MarkSchemeScaffold content={question.markSchemeMarkdown} />
            </div>
          </details>
        ) : (
          // Multi Part Dropdowns
          expectedLabels.map((label, i) => {
            const content = solutionMap.get(label);
            return (
              <details key={label} className="group border border-zinc-800/30 rounded-2xl bg-[#252529] hover:bg-[#2a2a2e] transition-all duration-500 overflow-hidden">
                <summary className="cursor-pointer px-8 py-4 font-bold text-[10px] text-zinc-500 hover:text-zinc-200 uppercase tracking-[0.3em] flex items-center justify-between transition-colors list-none select-none">
                  <div className="flex items-center gap-5">
                    <div className="w-1.5 h-1.5 rounded-full bg-zinc-800 group-open:bg-zinc-100 group-open:shadow-[0_0_15px_rgba(255,255,255,0.4)] transition-all duration-500" />
                    <span>View Solution Part {label}</span>
                  </div>
                </summary>
                <div className="px-8 pb-10 pt-2 flex flex-col items-center">
                  <div className="w-24 h-px bg-zinc-800/40 mb-10 mx-auto" />
                  {content ? (
                    <MarkSchemeScaffold content={content} />
                  ) : (
                    <div className="p-4 text-zinc-500 text-xs italic">Solution for this part is not available yet.</div>
                  )}
                </div>
              </details>
            );
          })
        )}
      </div>
    </div>
  );
};
