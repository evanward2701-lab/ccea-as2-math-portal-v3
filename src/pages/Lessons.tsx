import { useParams, Link, Navigate } from "react-router-dom";
import { LESSONS } from "../data/lessons";
import { MathText } from "../components/MathText";
import { LessonVisual } from "../components/LessonVisual";

const visualTagPattern = /!\[visual:([^\\]]+)\\]\\([^)]*\\)/g;
const getModuleCode = (moduleId: string) => moduleId.replace("-Lesson", "");

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
    <div className="flex h-full bg-slate-950 text-slate-100">
      {/* Lesson Navigation Table of Contents */}
      <aside className="w-64 border-r border-slate-800 shrink-0 hidden md:flex flex-col bg-slate-900/30 h-[calc(100vh-4rem)] sticky top-16 overflow-y-auto">
        <div className="p-6 border-b border-slate-800">
          <h2 className="text-xs uppercase tracking-widest text-slate-500 font-mono font-bold">Module Index</h2>
        </div>
        <nav className="flex-1 p-4 space-y-1">
          {LESSONS.map((l) => {
            const isActive = l.id === id;
            return (
              <Link
                key={l.id}
                to={`/lessons/${l.id}`}
                className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-xs font-mono transition-all ${
                  isActive
                    ? "bg-slate-800 text-emerald-400 border border-slate-700 shadow-inner font-bold"
                    : "text-slate-400 hover:text-slate-200 hover:bg-slate-900/50 border border-transparent"
                }`}
              >
                <span className={`px-1.5 py-0.5 rounded text-[9px] font-bold ${
                  isActive ? "bg-emerald-950 text-emerald-400" : "bg-slate-800 text-slate-400"
                }`}>
                  {getModuleCode(l.id)}
                </span>
                <span className="truncate">{l.title}</span>
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* Main Content Workspace Layout */}
      <main className="flex-1 min-w-0 overflow-y-auto h-[calc(100vh-4rem)] px-8 py-12 md:px-16 lg:px-24 bg-slate-950">
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