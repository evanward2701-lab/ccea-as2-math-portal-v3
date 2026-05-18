import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { LESSONS } from "@/data/lessons";
import { MathText } from "@/components/MathText";

export function Lessons() {
  const { id } = useParams();
  
  if (!id) {
    // Redirect to first lesson
    return <Navigate to={`/lessons/${LESSONS[0].id}`} replace />;
  }

  const currentIndex = LESSONS.findIndex(l => l.id === id);
  const lesson = LESSONS[currentIndex !== -1 ? currentIndex : 0];
  const previousLesson = currentIndex > 0 ? LESSONS[currentIndex - 1] : null;
  const nextLesson = currentIndex < LESSONS.length - 1 ? LESSONS[currentIndex + 1] : null;

  if (!lesson) {
    return <div className="p-8">Lesson not found.</div>;
  }

  return (
    <div className="flex h-full bg-[#FAF9F6]">
      {/* Lesson Navigation Table of Contents */}
      <div className="w-64 border-r border-[#1A1A1A] bg-white z-10 hidden md:block shrink-0 h-full overflow-y-auto">
          <div className="p-6 space-y-8">
            <div>
              <h4 className="text-[10px] uppercase font-bold tracking-widest text-[#1A1A1A]/60 mb-4">Mechanics</h4>
              <ul className="space-y-1">
                {LESSONS.filter(l => l.type === "Mechanics").map(l => (
                  <li key={l.id}>
                    <Link 
                      to={`/lessons/${l.id}`}
                      className={`block px-3 py-2 text-xs rounded-none border transition-colors ${l.id === id ? 'bg-[#1A1A1A] text-white border-[#1A1A1A] font-bold' : 'bg-transparent text-[#1A1A1A] border-transparent hover:border-[#1A1A1A]/30'}`}
                    >
                      {l.id}: {l.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="h-px bg-[#1A1A1A]/10 w-full" />

            <div>
              <h4 className="text-[10px] uppercase font-bold tracking-widest text-[#1A1A1A]/60 mb-4">Statistics</h4>
              <ul className="space-y-1">
                {LESSONS.filter(l => l.type === "Statistics").map(l => (
                  <li key={l.id}>
                    <Link 
                      to={`/lessons/${l.id}`}
                      className={`block px-3 py-2 text-xs rounded-none border transition-colors ${l.id === id ? 'bg-[#1A1A1A] text-white border-[#1A1A1A] font-bold' : 'bg-transparent text-[#1A1A1A] border-transparent hover:border-[#1A1A1A]/30'}`}
                    >
                      {l.id}: {l.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 bg-white overflow-y-auto w-full">
        <div className="max-w-3xl mx-auto p-8 md:p-12 pb-32">
          {/* Section badge */}
          <div className="mb-8">
            <span className={`inline-flex items-center px-3 py-1 border border-[#1A1A1A] text-[9px] uppercase font-bold tracking-widest bg-[#FAF9F6] text-[#1A1A1A]`}>
              {lesson.id} / {lesson.type}
            </span>
          </div>

          <MathText content={lesson.content} />
          
          <div className="mt-16 pt-8 border-t border-[#1A1A1A]">
            <div className="bg-[#F1EFE9] border border-[#1A1A1A] p-8 flex flex-col items-start gap-4">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#1A1A1A]/60 mb-2 block">Knowledge Test</span>
                <h3 className="font-serif text-2xl mb-2 italic text-[#1A1A1A]">Ready to test your knowledge?</h3>
                <p className="text-sm font-semibold text-[#1A1A1A]/80">Go to the practice bank to find targeted questions and exam-style problems for {lesson.id}.</p>
              </div>
              <Link to={`/practice?module=${lesson.id}`} className="inline-flex items-center justify-center px-6 py-3 bg-[#1A1A1A] text-white text-[10px] uppercase font-bold tracking-widest transition-colors hover:bg-black mt-2">
                Practice {lesson.id} Questions &rarr;
              </Link>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="mt-12 pt-8 border-t border-[#1A1A1A]/20 flex justify-between items-center gap-4">
            {previousLesson ? (
              <Link to={`/lessons/${previousLesson.id}`} className="flex-1 flex flex-col items-start group p-6 border border-[#1A1A1A]/20 hover:border-[#1A1A1A] transition-colors bg-[#FAF9F6] hover:bg-white">
                <span className="text-[9px] uppercase font-bold tracking-widest text-[#1A1A1A]/50 mb-2 group-hover:text-[#1A1A1A]">← Previous Module</span>
                <span className="font-serif text-lg leading-tight text-[#1A1A1A] italic group-hover:underline">{previousLesson.id}: {previousLesson.title}</span>
              </Link>
            ) : <div className="flex-1" />}
            
            {nextLesson ? (
              <Link to={`/lessons/${nextLesson.id}`} className="flex-1 flex flex-col items-end text-right group p-6 border border-[#1A1A1A]/20 hover:border-[#1A1A1A] transition-colors bg-[#FAF9F6] hover:bg-white">
                <span className="text-[9px] uppercase font-bold tracking-widest text-[#1A1A1A]/50 mb-2 group-hover:text-[#1A1A1A]">Next Module →</span>
                <span className="font-serif text-lg leading-tight text-[#1A1A1A] italic group-hover:underline">{nextLesson.id}: {nextLesson.title}</span>
              </Link>
            ) : <div className="flex-1" />}
          </div>

        </div>
      </div>
    </div>
  );
}
