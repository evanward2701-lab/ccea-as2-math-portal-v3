import React, { useState } from 'react';
import { PracticeQuestion } from "@/core/types";
import { MathText } from "@/core/components/MathText";
import { VisualRenderer } from "@/core/components/VisualRenderer";
import { cn } from "@/core/utils/cn";
import { motion, AnimatePresence } from 'framer-motion';

interface QuestionCardProps {
  question: PracticeQuestion;
  index?: number;
  showModuleBadge?: boolean;
}

interface Part {
  key: string;
  displayLabel: string;
  parentLabel: string;
  childLabel: string;
  content: string;
  marks: number;
}

interface Row {
  kind: "content" | "break" | "annotation";
  text?: string;
  marks: string[];
  markCount: number;
}

const PART_LABEL_REGEX = /(?:^|\n)\s*(?:\*\*)?\(([a-z]|[ivx]+)\)(?:\*\*)?(?=\s|\n|$)/gi;

const extractMarksFromText = (text: string): number => {
  const match = text.match(/\[(\d+)(?:\s*marks?)?\]/i);
  return match ? parseInt(match[1]) : 0;
};

const extractIntro = (text: string) => {
  const regex = new RegExp(PART_LABEL_REGEX);
  const match = regex.exec(text);
  if (!match) return text.trim();
  return text.slice(0, match.index).trim();
};

const extractHierarchicalParts = (text: string): Part[] => {
  const matches = [...text.matchAll(PART_LABEL_REGEX)];
  if (matches.length === 0) return [];

  const isRoman = (l: string) => /^(i|ii|iii|iv|v|vi|vii|viii|ix|x)$/i.test(l);
  const isAlpha = (l: string) => /^[a-z]$/i.test(l) && !isRoman(l);
  
  const labels = matches.map(m => m[1].toLowerCase());
  const hasAlpha = labels.some(isAlpha);
  let currentAlphaParent = "";
  
  return matches.map((match, index) => {
    const raw = match[1].toLowerCase();
    let displayLabel = "";
    let parent = "";
    let child = "";

    if (isAlpha(raw)) {
      currentAlphaParent = raw.toUpperCase();
      displayLabel = currentAlphaParent;
      parent = currentAlphaParent;
      child = "";
    } else if (isRoman(raw)) {
      if (hasAlpha && currentAlphaParent) {
        displayLabel = `${currentAlphaParent}(${raw})`;
        parent = currentAlphaParent;
        child = raw.toUpperCase();
      } else {
        displayLabel = raw.toUpperCase();
        parent = "";
        child = raw.toUpperCase();
      }
    } else {
      displayLabel = raw.toUpperCase();
      parent = "";
      child = raw.toUpperCase();
    }

    const labelStart = match.index ?? 0;
    const contentStart = labelStart + match[0].length;
    const nextStart = matches[index + 1]?.index ?? text.length;
    const content = text.slice(contentStart, nextStart).trim();

    return {
      key: parent ? (child ? `${parent}.${child}` : parent) : child,
      displayLabel,
      parentLabel: parent,
      childLabel: child,
      content,
      marks: extractMarksFromText(content)
    };
  });
};

const parseTableRows = (text: string): Row[] => {
  const rows: Row[] = [];
  const tableMatch = text.match(/\|[\s\S]*?\|/m);
  if (!tableMatch) return [];

  const tableLines = tableMatch[0].split('\n').map(l => l.trim()).filter(l => l.startsWith('|'));
  if (tableLines.length < 3) return [];

  const headerCells = tableLines[0].split('|').map(c => c.trim().toLowerCase());
  const workingCol = headerCells.indexOf('official working / result');
  const genWorkingCol = headerCells.indexOf('generated working / result');
  const codeCol = headerCells.indexOf('mark code');
  const awardedCol = headerCells.indexOf('mark awarded');
  const annotCol = headerCells.indexOf('brief annotation');

  const finalWorkingCol = workingCol !== -1 ? workingCol : genWorkingCol;

  tableLines.slice(2).forEach(line => {
    const cells = line.split('|').map(c => c.trim());
    if (cells.length < 3) return;

    const working = finalWorkingCol !== -1 ? cells[finalWorkingCol] : '';
    const code = codeCol !== -1 ? cells[codeCol] : '';
    const awarded = awardedCol !== -1 ? cells[awardedCol] : '';
    const annotation = annotCol !== -1 ? cells[annotCol] : '';

    if (working || code || awarded) {
      const marks = code ? code.split(/[\s,]+/).filter(m => m.length > 0) : [];
      const markCount = awarded ? parseInt(awarded.replace(/[^\d]/g, '')) || 0 : 0;
      rows.push({ kind: 'content', text: working, marks, markCount });
      if (annotation && annotation !== '-' && annotation !== '') {
        rows.push({ kind: 'annotation', text: annotation, marks: [], markCount: 0 });
      }
    }
  });

  return rows;
};

function processTextToRows(text: string): Row[] {
  if (!text) return [];
  const markRegex = /\[([A-Z0-9\s,]+)\]/g;
  const mathBlockRegex = /(\$\$[\s\S]*?\$\$)/g;
  const parts = text.split(mathBlockRegex);
  const rows: Row[] = [];

  parts.forEach((part, i) => {
    if (i % 2 === 1) {
      rows.push({ kind: 'content', text: part, marks: [], markCount: 0 });
    } else {
      const lines = part.split('\n');
      lines.forEach((line, lineIdx) => {
        const foundMarks: string[] = [];
        const cleanLine = line.replace(markRegex, (match, m) => {
          m.split(/[\s,]+/).forEach(sm => { if (sm.trim()) foundMarks.push(sm.trim()); });
          return '';
        }).trim();
        if (!cleanLine && foundMarks.length === 0) {
          if (lineIdx > 0 && lineIdx < lines.length - 1) rows.push({ kind: 'break', marks: [], markCount: 0 });
          return;
        }
        rows.push({ kind: 'content', text: cleanLine, marks: foundMarks, markCount: 0 });
      });
    }
  });
  return rows;
}

const MarkSchemeScaffold: React.FC<{ rows: Row[] }> = ({ rows }) => {
  return (
    <div className="w-full flex flex-col items-center">
      {rows.map((row, idx) => {
        if (row.kind === 'break') return <div key={idx} className="h-4" />;
        if (row.kind === 'annotation') {
          return <div key={idx} className="w-full max-w-4xl mb-3 italic text-muted-foreground text-[12px] text-center antialiased opacity-80">{row.text}</div>;
        }
        return (
          <div key={idx} className="w-full max-w-4xl mb-4 last:mb-0">
            {row.text && <div className="w-full text-center"><MathText content={row.text} center noMargin /></div>}
            {row.marks && row.marks.length > 0 && (
              <div className="w-full flex justify-end mt-1">
                <div className="flex gap-2 flex-wrap justify-end">
                  {row.marks.map((m, mIdx) => (
                    <span key={mIdx} className="font-mono font-bold text-primary bg-primary/5 border border-primary/20 px-2.5 py-0.5 rounded-full text-2.25 tracking-widest uppercase italic shadow-sm">{m}</span>
                  ))}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

const SolutionDropdown: React.FC<{ dropdown: { label: string; rows: Row[] } }> = ({ dropdown }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="group border border-primary/20 rounded-xl bg-card hover:bg-muted/50 transition-all duration-500 overflow-hidden">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="w-full cursor-pointer px-6 py-3 font-bold text-2.25 text-muted-foreground hover:text-primary uppercase tracking-[0.3em] flex items-center justify-between transition-colors outline-none text-left"
      >
        <div className="flex items-center gap-4">
          <div className={cn("w-1 h-1 rounded-full bg-muted-foreground transition-all duration-500", isOpen && "bg-primary shadow-[0_0_10px_var(--color-primary)]")} />
          <span>View Solution {dropdown.label ? `Part ${dropdown.label}` : ''}</span>
        </div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }} 
            animate={{ height: 'auto', opacity: 1 }} 
            exit={{ height: 0, opacity: 0 }} 
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="px-6 pb-6 pt-2">
              {dropdown.rows.length > 0 ? (
                <MarkSchemeScaffold rows={dropdown.rows} />
              ) : (
                <div className="p-2 text-muted-foreground text-2.5 italic text-center">Solution protocol unavailable.</div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const QuestionCard: React.FC<QuestionCardProps> = ({ 
  question, 
  index,
  showModuleBadge = false 
}) => {
  const sanitizedQuestion = question.questionMarkdown
    .replace(/\[(\d+)\]/g, '[$1 marks]')
    .replace(/### Space for Working[\s\S]*$/g, '')
    .trim();
    
  const questionIntro = extractIntro(sanitizedQuestion);
  const questionParts = extractHierarchicalParts(sanitizedQuestion);

  const solutionText = question.markSchemeMarkdown;
  const tableRows = parseTableRows(solutionText);
  const isTable = tableRows.length > 0;
  
  let solutionDropdowns: { label: string; rows: Row[] }[] = [];

  if (isTable) {
    if (questionParts.length <= 1) {
      solutionDropdowns.push({ label: '', rows: tableRows });
    } else {
      let rowIdx = 0;
      questionParts.forEach(qPart => {
        const partRows: Row[] = [];
        let accumulatedMarks = 0;
        const targetMarks = qPart.marks || 0;
        while (rowIdx < tableRows.length) {
          const row = tableRows[rowIdx];
          partRows.push(row);
          accumulatedMarks += row.markCount;
          rowIdx++;
          if (targetMarks > 0 && accumulatedMarks >= targetMarks) {
             if (rowIdx < tableRows.length && tableRows[rowIdx].markCount > 0) break;
          }
        }
        solutionDropdowns.push({ label: qPart.displayLabel, rows: partRows });
      });
      if (rowIdx < tableRows.length && solutionDropdowns.length > 0) {
        solutionDropdowns[solutionDropdowns.length - 1].rows.push(...tableRows.slice(rowIdx));
      }
    }
  } else {
    const solutionPartsList = extractHierarchicalParts(solutionText);
    const solutionMap = new Map<string, string>();
    solutionPartsList.forEach(p => solutionMap.set(p.key, p.content));

    if (questionParts.length === 0) {
      solutionDropdowns.push({ label: '', rows: processTextToRows(solutionText) });
    } else {
      questionParts.forEach(qPart => {
        let content = solutionMap.get(qPart.key);
        solutionDropdowns.push({ label: qPart.displayLabel, rows: processTextToRows(content || '') });
      });
    }
  }

  // If no parts matched but we have solution text, show full solution in one block
  const hasContent = solutionDropdowns.some(d => d.rows.length > 0);
  if (!hasContent && solutionText && solutionText.trim() !== '') {
    solutionDropdowns = [{ label: '', rows: isTable ? tableRows : processTextToRows(solutionText) }];
  }

  return (
    <div className={cn("mb-6 p-6 md:p-8 bg-card border border-primary/20 rounded-[2rem] shadow-xl animate-in fade-in slide-in-from-bottom-6 duration-1000", index !== undefined && `delay-[${index * 150}ms]`)}>
      <div className="flex items-center justify-between mb-6 opacity-80">
        <div className="flex items-center gap-3">
          {showModuleBadge && <span className="text-2.25 font-mono font-bold bg-primary/5 border border-primary/20 text-primary px-2 py-0.5 rounded uppercase tracking-widest">{question.moduleId}</span>}
          <h3 className="text-2.25 font-mono font-bold text-muted-foreground uppercase tracking-[0.4em]">Ref <span className="text-foreground font-normal">#{question.id}</span></h3>
        </div>
        <div className="text-2.25 font-mono font-bold text-primary uppercase tracking-[0.3em] bg-primary/10 px-3 py-1 rounded-full border border-primary/20">{question.marks} Marks</div>
      </div>

      {question.visualId && !question.questionMarkdown.includes('[VISUAL') && (
        <div className="mb-8 p-6 bg-muted/30 rounded-2xl border border-primary/10 flex justify-center items-center overflow-hidden shadow-inner group transition-all duration-1000">
          <VisualRenderer visualId={question.visualId} />
        </div>
      )}

      <div className="mb-6 text-foreground">
        {questionIntro && <div className="mb-6 antialiased"><MathText content={questionIntro} /></div>}
        {questionParts.map((part, i) => (
          <div key={i} className="flex gap-4 mb-4 last:mb-0 group animate-in fade-in slide-in-from-left-4 duration-700">
            <div className="pt-1 shrink-0">
              <span className="font-mono font-bold text-primary text-2.5 uppercase tracking-widest bg-primary/10 px-2 py-0.5 rounded border border-primary/20 block group-hover:bg-primary/20 transition-colors">{part.displayLabel}</span>
            </div>
            <div className="flex-1 whitespace-pre-wrap antialiased"><MathText content={part.content} /></div>
          </div>
        ))}
      </div>

      <div className="mt-6 space-y-2 border-t border-primary/10 pt-6">
        {solutionDropdowns.map((dropdown, i) => (
          <SolutionDropdown key={i} dropdown={dropdown} />
        ))}
      </div>
    </div>
  );
};
