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
    <div className="h-full bg-slate-950 text-slate-100">
      {/* Main Content Workspace Layout */}
      <main className="px-8 py-12 md:px-16 lg:px-24 bg-slate-950">
        <div className="max-w-3xl mx-auto flex flex-col gap-10 pb-24">
          
          {/* Status Header: System Active */}
          <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-emerald-400">
              System Active
            </span>
          </div>

          {/* Main Visual Display Block */}
          {lesson.visualId && (
            <div className="w-full">
              <LessonVisual visualId={lesson.visualId} />
            </div>
          )}

          {/* Processed Mathematical Markdown Text */}
          {/* Note: min-h-[60vh] ensures layout stability during KaTeX rendering */}
          <article className="prose prose-slate prose-invert max-w-none text-slate-200 min-h-[60vh]">
            <MathText content={stripDuplicateLeadVisual(lesson.content, lesson.visualId)} />
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
      </main>
    </div>
  );
}