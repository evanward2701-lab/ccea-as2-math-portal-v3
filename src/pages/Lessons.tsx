import { useParams, Link, Navigate } from "react-router-dom";
import { LESSONS } from "../data/lessons";
import { MathText } from "../components/MathText";
import { LessonVisual } from "../components/LessonVisual";

const visualTagPattern = /!\[visual:([^\]]+)\]\([^)]*\)/g;
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
      <div className="w-64 border-r border-slate-900 bg-slate-900/40 backdrop-blur-md z-10 hidden md:block shrink-0 h-full overflow-y-auto">
          <div className="p-6 space-y-8">
            <div>
              <h4 className="text-[10px] uppercase font-bold tracking-widest text-slate-500 mb-4">Mechanics</h4>
              <ul className="space-y-1">
                {LESSONS.filter(l => l.type === "Mechanics").map(l => (
                  <li key={l.id}>
                    <Link 
                      to={`/lessons/${l.id}`}
                      className={`block px-3 py-2 text-xs rounded-lg border font-medium transition-all ${
                        l.id === id 
                          ? 'bg-slate-800 text-sky-400 border-slate-700 font-bold shadow-lg shadow-sky-950/20' 
                          : 'bg-transparent text-slate-400 border-transparent hover:text-slate-200 hover:border-slate-800 hover:bg-slate-900/50'
                      }`}
                    >
                      {l.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="h-px bg-slate-850 w-full" />

            <div>
              <h4 className="text-[10px] uppercase font-bold tracking-widest text-slate-500 mb-4">Statistics</h4>
              <ul className="space-y-1">
                {LESSONS.filter(l => l.type === "Statistics").map(l => (
                  <li key={l.id}>
                    <Link 
                      to={`/lessons/${l.id}`}
                      className={`block px-3 py-2 text-xs rounded-lg border font-medium transition-all ${
                        l.id === id 
                          ? 'bg-slate-800 text-amber-400 border-slate-700 font-bold shadow-lg shadow-amber-950/20' 
                          : 'bg-transparent text-slate-400 border-transparent hover:text-slate-200 hover:border-slate-800 hover:bg-slate-900/50'
                      }`}
                    >
                      {l.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 bg-slate-950 overflow-y-auto w-full border-l border-slate-900">
        <div className="max-w-3xl mx-auto p-8 md:p-12 pb-32">
          {/* Section badge */}
          <div className="mb-8">
            <span className="inline-flex items-center px-2.5 py-1 rounded border border-slate-800 text-[10px] uppercase font-bold tracking-widest bg-slate-900 text-slate-400">
              {lesson.id} &middot; {lesson.type}
            </span>
          </div>

          {lesson.visualId && (
            <div className="mb-10">
              <LessonVisual visualId={lesson.visualId} />
            </div>
          )}

          <div className="prose prose-invert max-w-none">
            <MathText content={stripDuplicateLeadVisual(lesson.content, lesson.visualId)} />
          </div>
          
          {/* Knowledge Test CTA Panel */}
          <div className="mt-16 pt-8 border-t border-slate-900">
            <div className="bg-linear-to-br from-slate-900 to-slate-950 border border-slate-800 p-8 rounded-xl flex flex-col items-start gap-4 shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-2xl group-hover:bg-emerald-500/10 transition-all duration-500" />
              <div className="z-10">
                <span className="text-[10px] uppercase font-bold tracking-widest text-slate-500 mb-2 block">Knowledge Test</span>
                <h3 className="font-serif text-2xl mb-2 italic text-slate-100">Ready to test your knowledge?</h3>
                <p className="text-sm text-slate-400">
                  Head over to the practice bank to work through targeted questions and interactive CCEA exam-style problems optimized for <span className="text-slate-200 font-semibold">{lesson.id}</span>.
                </p>
              </div>
              <Link 
                to={`/practice?module=${getModuleCode(lesson.id)}`} 
                className="z-10 inline-flex items-center justify-center px-5 py-2.5 bg-emerald-600 text-slate-950 text-xs uppercase font-bold tracking-widest rounded-lg transition-all hover:bg-emerald-500 active:scale-98 font-sans shadow-lg shadow-emerald-950/40"
              >
                Practice Questions &rarr;
              </Link>
            </div>
          </div>

          {/* Navigation Module Buttons */}
          <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col sm:flex-row justify-between items-center gap-4">
            {previousLesson ? (
              <Link 
                to={`/lessons/${previousLesson.id}`} 
                className="w-full sm:flex-1 flex flex-col items-start group p-5 border border-slate-900 rounded-xl hover:border-slate-800 transition-all bg-slate-900/30 hover:bg-slate-900/60"
              >
                <span className="text-[9px] uppercase font-bold tracking-widest text-slate-500 mb-1 group-hover:text-slate-400">&larr; Previous Module</span>
                <span className="font-serif text-base leading-tight text-slate-300 italic group-hover:text-sky-400">{previousLesson.title}</span>
              </Link>
            ) : <div className="hidden sm:block flex-1" />}
            
            {nextLesson ? (
              <Link 
                to={`/lessons/${nextLesson.id}`} 
                className="w-full sm:flex-1 flex flex-col items-end text-right group p-5 border border-slate-900 rounded-xl hover:border-slate-800 transition-all bg-slate-900/30 hover:bg-slate-900/60"
              >
                <span className="text-[9px] uppercase font-bold tracking-widest text-slate-500 mb-1 group-hover:text-slate-400">Next Module &rarr;</span>
                <span className="font-serif text-base leading-tight text-slate-300 italic group-hover:text-sky-400">{nextLesson.title}</span>
              </Link>
            ) : <div className="hidden sm:block flex-1" />}
          </div>

        </div>
      </div>
    </div>
  );
}