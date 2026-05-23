import { useParams, Link, Navigate } from "react-router-dom";
import { LESSONS } from "../data/lessons";
import { MathText } from "../components/MathText";
import { LessonVisual } from "../components/LessonVisual";
import { BrainCircuit, ChevronLeft } from "lucide-react";

const visualTagPattern = /!\[visual:([^\]]+)\]\([^)]*\)/g;

const stripDuplicateLeadVisual = (content: string, visualId?: string) => {
  if (!visualId) return content;
  return content.replace(visualTagPattern, (match, inlineVisualId) => (
    inlineVisualId === visualId ? "" : match
  ));
};

const getModuleCode = (moduleId: string) => moduleId.replace("-Lesson", "");

const cleanContent = (content: string) => {
  return content
    .replace(/^\s*##\s*\d+\.\s*Lesson Title\s*\n+\*\*.*?\*\*\s*/m, "")
    .replace(/^\s*\d+\.\s*Lesson Title.*$/m, "")
    .trim();
};

export function Lessons() {
  const { id } = useParams();
  
  if (!id) {
    return <Navigate to={`/lessons/${LESSONS[0].id}`} replace />;
  }

  const currentIndex = LESSONS.findIndex(l => l.id === id);
  const lesson = LESSONS[currentIndex !== -1 ? currentIndex : 0];
  const previousLesson = currentIndex > 0 ? LESSONS[currentIndex - 1] : null;
  const nextLesson = currentIndex < LESSONS.length - 1 ? LESSONS[currentIndex + 1] : null;

  if (!lesson) {
    return <div className="p-8 text-slate-400 bg-slate-950 h-full">Lesson not found.</div>;
  }

  return (
    // The main scrollable container for lesson content, with wide padding.
    // It's nested inside the main layout's scroll area from App.tsx.
    <div className="flex-1 min-w-0 p-12 lg:p-20">
      {/* Inner content wrapper for max-width and vertical spacing. */}
      <div className="max-w-4xl mx-auto flex flex-col gap-16 pb-32">
          <div>
            <header className="border-b border-slate-800 pb-8 mb-4">
              <h1 className="text-4xl font-serif text-slate-100 tracking-tight">
                {lesson.title}
              </h1>
              <p className="text-emerald-500 font-mono text-[10px] uppercase tracking-widest mt-3">
                CCEA Specification Module: {getModuleCode(lesson.id)}
              </p>
            </header>

            {/* Main Visual Display Block */}
            {lesson.visualId && (
              <div className="w-full bg-slate-900/40 p-6 rounded-2xl border border-slate-800 shadow-xl">
                <LessonVisual visualId={lesson.visualId} />
              </div>
            )}
          </div>

          {/* Processed Mathematical Markdown Text */}
          <article className="prose prose-slate prose-invert max-w-none">
            <MathText
              content={stripDuplicateLeadVisual(cleanContent(lesson.content), lesson.visualId)}
            />
          </article>

          {/* Focused Practice Link Block */}
          <section className="mt-16 p-8 rounded-3xl bg-linear-to-br from-sky-900/20 to-emerald-900/10 border border-slate-800 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
              <BrainCircuit className="w-24 h-24 text-sky-400" />
            </div>
            <div className="relative z-10">
              <h3 className="text-xs font-mono font-bold text-sky-400 uppercase tracking-widest mb-2 flex items-center gap-2">
                <BrainCircuit className="w-4 h-4" />
                Active Learning Component
              </h3>
              <h2 className="text-2xl font-serif font-bold text-slate-100 mb-4">
                Ready to verify your understanding?
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-8 max-w-md">
                Launch a focused practice session for <strong>{getModuleCode(lesson.id)}</strong> to test these concepts against official CCEA-style criteria.
              </p>
              <Link 
                to={`/practice/${getModuleCode(lesson.id)}/General`}
                className="inline-flex items-center gap-3 px-6 py-3 bg-sky-600 hover:bg-sky-500 text-white rounded-xl font-mono text-xs font-bold transition-all shadow-lg hover:shadow-sky-500/20 active:scale-95"
              >
                Start Focused Practice
                <ChevronLeft className="w-4 h-4 rotate-180" />
              </Link>
            </div>
          </section>

          {/* Step Sequencer Action Footer */}
          <footer className="mt-12 pt-8 border-t border-slate-900 flex flex-col sm:flex-row justify-between items-center gap-4">
            {previousLesson ? (
              <Link 
                to={`/lessons/${previousLesson.id}`} 
                className="w-full sm:flex-1 flex flex-col items-start group p-5 border border-slate-900 rounded-xl hover:border-slate-800 transition-all bg-slate-900/30 hover:bg-slate-900/60"
              >
                <span className="text-[9px] uppercase font-bold tracking-widest text-slate-500 mb-1 group-hover:text-slate-400">&larr; Previous Module</span>
                <span className="font-serif text-base leading-tight text-slate-300 italic group-hover:text-sky-400 transition-colors">{previousLesson.title}</span>
              </Link>
            ) : <div className="hidden sm:block flex-1" />}
            
            {nextLesson ? (
              <Link 
                to={`/lessons/${nextLesson.id}`} 
                className="w-full sm:flex-1 flex flex-col items-end text-right group p-5 border border-slate-900 rounded-xl hover:border-slate-800 transition-all bg-slate-900/30 hover:bg-slate-900/60"
              >
                <span className="text-[9px] uppercase font-bold tracking-widest text-slate-500 mb-1 group-hover:text-slate-400">Next Module &rarr;</span>
                <span className="font-serif text-base leading-tight text-slate-300 italic group-hover:text-emerald-400 transition-colors">{nextLesson.title}</span>
              </Link>
            ) : <div className="hidden sm:block flex-1" />}
          </footer>

        </div>
    </div>
  );
}