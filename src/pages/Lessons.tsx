import { useParams, Link, Navigate } from "react-router-dom";
import { LESSONS } from "../data/lessons";
import { MathText } from "../components/MathText";
import { LessonVisual } from "../components/LessonVisual";

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