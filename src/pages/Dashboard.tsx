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
              Welcome to your digital study companion. This interactive portal maps out your applied mechanics pipelines and statistical verification tools, optimized directly for current CCEA specification criteria.
            </p>
          </div>
        </div>

        <div className="col-span-1 md:col-span-4 bg-[#1A1A1A] text-white p-8 flex flex-col justify-between relative min-h-60">
          <div className="absolute top-0 right-0 bg-white text-[#1A1A1A] px-2 py-1 text-[9px] uppercase font-bold tracking-widest">Status</div>
          <div>
            <h2 className="font-mono text-xs uppercase tracking-widest text-white/50 mb-2">Active Tracker</h2>
            <div className="text-4xl font-serif mb-4 italic">{LESSONS.length} <span className="text-xs font-sans not-italic text-white/60">Modules Loaded</span></div>
            <div className="text-4xl font-serif italic">{QUESTIONS.length} <span className="text-xs font-sans not-italic text-white/60">Practice Items</span></div>
          </div>
          <Link to="/practice" className="mt-6 border border-white text-white text-xs font-bold uppercase tracking-wider py-3 px-4 text-center hover:bg-white hover:text-[#1A1A1A] transition-colors duration-200">
            Open Practice Bank
          </Link>
        </div>
      </header>

      <main className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
        {/* ==========================================
            SECTION A: MECHANICS CARD
           ========================================== */}
        <div className="flex flex-col border border-[#1A1A1A] bg-white relative hover:shadow-[4px_4px_0px_#1A1A1A] transition-shadow duration-300">
          <div className="absolute top-0 right-0 bg-white border-l border-b border-[#1A1A1A] text-[#1A1A1A] px-2 py-1 text-[9px] uppercase font-bold tracking-widest">Section A</div>
          <div className="p-8">
            <h3 className="font-serif text-3xl mb-4 italic border-b border-[#1A1A1A]/10 pb-4 text-[#1A1A1A]">Mechanics</h3>
            <p className="text-xs text-[#1A1A1A]/60 mb-6 font-sans leading-relaxed">
              Master fundamental physical parameters, constant acceleration structures, and advanced multi-body particle systems.
            </p>
            <ul className="space-y-6">
              {mechanicsLessons.map(lesson => (
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

        {/* ==========================================
            SECTION B: STATISTICS CARD (UPDATED)
           ========================================== */}
        <div className="flex flex-col border border-[#1A1A1A] bg-white relative hover:shadow-[4px_4px_0px_#1A1A1A] transition-shadow duration-300">
          <div className="absolute top-0 right-0 bg-white border-l border-b border-[#1A1A1A] text-[#1A1A1A] px-2 py-1 text-[9px] uppercase font-bold tracking-widest">Section B</div>
          <div className="p-8">
            <h3 className="font-serif text-3xl mb-4 italic border-b border-[#1A1A1A]/10 pb-4 text-[#1A1A1A]">Statistics</h3>
            <p className="text-xs text-[#1A1A1A]/60 mb-6 font-sans leading-relaxed">
              Explore data types, sampling models, probability structures, and partition sets using Bayes' Theorem.
            </p>
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
      </main>
    </div>
  );
}