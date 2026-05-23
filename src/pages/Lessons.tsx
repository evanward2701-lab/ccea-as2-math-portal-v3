import { useState } from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { MathText } from "@/core/components/MathText";
import { LESSONS as AS2_LESSONS } from "@/modules/AS2/data/lessons";
import { LESSONS as AS1_LESSONS } from "@/modules/AS1/data/lessons";
import { useQualification } from "@/core/context/QualificationContext";

export function Lessons() {
  const { id } = useParams();
  const { activeQualification } = useQualification();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const LESSONS = activeQualification === 'AS1' ? AS1_LESSONS : activeQualification === 'AS2' ? AS2_LESSONS : [];

  if (LESSONS.length === 0) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center p-12 text-center h-full">
        <h2 className="text-2xl font-serif italic text-zinc-400 mb-2">No Course Modules Found</h2>
        <p className="text-[10px] uppercase font-mono tracking-widest text-zinc-600">
          The curriculum data for {activeQualification} is currently unavailable.
        </p>
      </div>
    );
  }

  // Redirect to first lesson if no ID provided
  if (!id) {
    return <Navigate to={`/lessons/${LESSONS[0].id}`} replace />;
  }

  const currentIndex = LESSONS.findIndex(l => l.id === id);
  const currentLesson = LESSONS[currentIndex];
  
  if (!currentLesson) {
    return (
      <div className="flex-1 flex items-center justify-center p-12 text-zinc-500 font-mono text-sm uppercase tracking-widest">
        Module protocol not found
      </div>
    );
  }

  const prevLesson = currentIndex > 0 ? LESSONS[currentIndex - 1] : null;
  const nextLesson = currentIndex < LESSONS.length - 1 ? LESSONS[currentIndex + 1] : null;

  return (
    <div className="flex-1 flex h-full overflow-hidden bg-background">
      {/* Lesson Content Area */}
      <div className="flex-1 overflow-y-auto relative scroll-smooth">
        <div className="max-w-4xl mx-auto px-8 py-16 md:px-16 w-full">
          {/* Main Title Section */}
          <header className="mb-16 border-b border-zinc-800 pb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="flex items-center gap-4 mb-8">
              <span className="text-[10px] uppercase tracking-[0.2em] font-mono font-bold bg-zinc-800 text-zinc-400 px-3 py-1 rounded-md shadow-sm border border-zinc-700">
                {currentLesson.type}
              </span>
              <span className="text-[11px] uppercase tracking-[0.3em] font-mono font-bold text-sky-400/80">
                Module {currentIndex + 1} of {LESSONS.length}
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-serif text-zinc-100 font-light tracking-wide leading-[1.1] mb-6">
              {currentLesson.title}
            </h1>
            
            <p className="text-xl font-serif italic text-zinc-400 leading-relaxed max-w-2xl border-l-2 border-zinc-800 pl-6">
              Study material and theoretical breakdown for {currentLesson.title}.
            </p>
          </header>

          {/* Dynamic Markdown Content */}
          <article className="prose prose-invert prose-zinc max-w-none w-full animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-150 fill-mode-both">
            <MathText content={currentLesson.content} />
          </article>

          {/* Bottom Navigation Ribbon */}
          <nav className="mt-24 pt-8 border-t border-zinc-800 flex justify-between items-center pb-24">
            {prevLesson ? (
              <Link
                to={`/lessons/${prevLesson.id}`}
                className="group flex flex-col items-start hover:bg-zinc-900/50 p-4 rounded-xl transition-colors border border-transparent hover:border-zinc-800 w-64"
              >
                <span className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-zinc-500 group-hover:text-sky-400 transition-colors mb-2 font-bold">
                  <ArrowLeft className="w-3 h-3" /> Previous
                </span>
                <span className="text-zinc-300 font-serif truncate w-full">{prevLesson.title}</span>
              </Link>
            ) : <div />}

            {nextLesson ? (
              <Link
                to={`/lessons/${nextLesson.id}`}
                className="group flex flex-col items-end hover:bg-zinc-900/50 p-4 rounded-xl transition-colors border border-transparent hover:border-zinc-800 w-64 text-right"
              >
                <span className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-zinc-500 group-hover:text-sky-400 transition-colors mb-2 font-bold">
                  Next <ArrowRight className="w-3 h-3" />
                </span>
                <span className="text-zinc-300 font-serif truncate w-full">{nextLesson.title}</span>
              </Link>
            ) : <div />}
          </nav>
        </div>
      </div>
    </div>
  );
}