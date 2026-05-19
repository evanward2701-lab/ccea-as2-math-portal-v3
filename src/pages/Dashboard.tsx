import { Link } from "react-router-dom";
import { LESSONS } from "@/data/lessons";
import { QUESTIONS } from "@/data/questions";

export function Dashboard() {
  const mechanicsLessons = LESSONS.filter(l => l.type === "Mechanics");
  const statisticsLessons = LESSONS.filter(l => l.type === "Statistics");

  return (
    <div className="p-8 max-w-6xl mx-auto flex flex-col gap-8 flex-1 w-full">
      <header className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch h-auto lg:h-90">
        <div className="col-span-1 border-b border-[#1A1A1A] pb-4 md:col-span-8 bg-white border md:border-[#1A1A1A] p-10 flex flex-col relative overflow-hidden h-full min-h-75">
          <div className="absolute top-0 left-0 bg-[#1A1A1A] text-white px-3 py-1 text-[10px] uppercase font-bold tracking-widest">Platform Overview</div>
          <div className="mt-4 z-10 flex flex-col justify-center h-full">
            <h1 className="font-serif text-5xl font-light leading-tight mb-4 tracking-tight">AS2 Applied<br/><span className="italic font-serif">Mathematics</span></h1>
            <p className="text-sm text-[#1A1A1A]/70 max-w-lg leading-relaxed mb-6">
              Welcome to your document-style revision portal. Designed strictly for the CCEA A-Level specification. 
              Focusing on Mechanics and Statistics, bringing you exact theory, exam technique, and targeted past-paper practice.
            </p>
          </div>
          <div className="absolute -right-5 -bottom-5 w-64 h-64 border-[0.5px] border-[#1A1A1A]/20 rounded-full flex items-center justify-center pointer-events-none hidden md:flex">
             <div className="w-48 h-48 border border-[#1A1A1A]/40 rounded-full flex items-center justify-center">
                <div className="w-px h-full bg-[#1A1A1A]/10 rotate-45"></div>
                <div className="w-full h-px bg-[#1A1A1A]/10 rotate-12"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-serif italic text-4xl text-[#1A1A1A]/10">ΣF = ma</div>
             </div>
          </div>
        </div>

        <div className="col-span-1 md:col-span-4 flex flex-col gap-4 h-full">
          <div className="flex-1 bg-[#F1EFE9] border border-[#1A1A1A] p-6 flex flex-col relative">
            <span className="text-[10px] uppercase font-bold tracking-widest mb-2 text-[#1A1A1A]">Practice Bank</span>
            <h3 className="font-serif text-xl mb-4 italic text-[#1A1A1A]">Active Assessment Mode</h3>
            <p className="text-xs font-semibold pt-2 text-[#1A1A1A]/80 mb-4 pb-4">
              We have compiled exactly {QUESTIONS.length} CCEA-style questions focusing on AS2 boundaries. The mark schemes present authentic examiner requirements, structured nicely for self-marking.
            </p>
            <div className="mt-auto pt-4">
              <Link to="/practice" className="inline-flex w-full items-center justify-center px-6 py-4 bg-[#1A1A1A] text-white text-xs uppercase font-bold tracking-widest transition-colors hover:bg-black">
                Start Practicing
              </Link>
            </div>
          </div>
        </div>
      </header>

      <section className="flex-1 flex flex-col min-h-0 pt-4">
        <div className="flex items-center justify-between mb-8 border-b border-[#1A1A1A] pb-4">
          <h2 className="font-serif text-2xl text-[#1A1A1A]">Lesson Resources <span className="text-sm font-sans uppercase font-bold tracking-widest opacity-30">/ Modules</span></h2>
          <div className="flex gap-4">
             <span className="text-[10px] font-bold uppercase tracking-widest opacity-50 px-2">Mechanics</span>
             <span className="text-[10px] font-bold uppercase tracking-widest opacity-50 px-2">Statistics</span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 flex-1 pb-16">
          <div className="flex flex-col border border-[#1A1A1A] bg-white relative hover:shadow-[4px_4px_0px_#1A1A1A] transition-shadow duration-300">
             <div className="absolute top-0 right-0 bg-[#1A1A1A] text-white px-2 py-1 text-[9px] uppercase font-bold tracking-widest">Section A</div>
             <div className="p-8">
                <h3 className="font-serif text-3xl mb-8 italic border-b border-[#1A1A1A]/10 pb-4 text-[#1A1A1A]">Mechanics</h3>
                <ul className="space-y-6">
                  {mechanicsLessons.map(lesson => (
                    <li key={lesson.id} className="group">
                      <Link to={`/lessons/${lesson.id}`} className="flex flex-col gap-2">
                        <div className="flex items-center w-full">
                          <span className="text-[10px] bg-black text-white px-1.5 py-0.5 font-bold uppercase">{lesson.id}</span>
                        </div>
                        <span className="text-sm font-serif leading-snug group-hover:underline text-[#1A1A1A]">
                          {lesson.title}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
             </div>
          </div>

          <div className="flex flex-col border border-[#1A1A1A] bg-white relative hover:shadow-[4px_4px_0px_#1A1A1A] transition-shadow duration-300">
             <div className="absolute top-0 right-0 bg-white border-l border-b border-[#1A1A1A] text-[#1A1A1A] px-2 py-1 text-[9px] uppercase font-bold tracking-widest">Section B</div>
             <div className="p-8">
                <h3 className="font-serif text-3xl mb-8 italic border-b border-[#1A1A1A]/10 pb-4 text-[#1A1A1A]">Statistics</h3>
                <ul className="space-y-6">
                  {statisticsLessons.map(lesson => (
                    <li key={lesson.id} className="group">
                      <Link to={`/lessons/${lesson.id}`} className="flex flex-col gap-2">
                        <div className="flex items-center w-full">
                          <span className="text-[10px] border border-[#1A1A1A] text-[#1A1A1A] px-1.5 py-0.5 font-bold uppercase">{lesson.id}</span>
                        </div>
                        <span className="text-sm font-serif leading-snug group-hover:underline text-[#1A1A1A]">
                          {lesson.title}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}