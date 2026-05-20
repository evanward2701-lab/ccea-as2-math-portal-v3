import { Link } from "react-router-dom";
import { LESSONS } from "@/data/lessons";
import { QUESTIONS } from "@/data/questions";

export function Dashboard() {
  const mechanicsLessons = LESSONS.filter(l => l.type === "Mechanics");
  const statisticsLessons = LESSONS.filter(l => l.type === "Statistics");

  return (
    <div className="p-8 max-w-[1400px] mx-auto flex flex-col gap-8 w-full bg-slate-950 text-slate-100 h-full">
      {/* HEADER SECTION: Combined Title and Performance Status */}
      <header className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-3 border border-slate-800 bg-slate-900/40 p-8 rounded-2xl shadow-2xl backdrop-blur-sm relative overflow-hidden">
           <div className="absolute top-0 left-0 bg-slate-800 border-r border-b border-slate-700 text-slate-400 px-3 py-1 text-[10px] uppercase font-mono font-bold tracking-widest">
            Platform Overview
          </div>
          <h1 className="font-serif text-5xl font-light leading-tight tracking-tight text-slate-100 mt-4">
            AS2 Applied <br/>
            <span className="italic text-emerald-400 font-serif">Mathematics</span>
          </h1>
        </div>
        
        {/* Performance Index now acts as the 4th corner of your "2x2" visual logic */}
        <div className="border border-slate-800 bg-emerald-950/20 p-8 flex flex-col justify-center rounded-2xl shadow-2xl backdrop-blur-sm border-emerald-900/30">
          <div className="text-5xl font-serif italic text-emerald-400 mb-2">
            {QUESTIONS.length}
          </div>
          <div className="text-[10px] uppercase font-mono tracking-widest text-emerald-400 font-bold">
            Active Exam Tasks
          </div>
          <Link
            to="/practice"
            className="w-full mt-6 py-2 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-lg text-center text-[10px] font-mono font-bold uppercase tracking-wider transition-all"
          >
            Launch Sandbox &rarr;
          </Link>
        </div>
      </header>

      {/* MAIN MODULE GRID: The 2-Column Expansion */}
      <main className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
        
        {/* Mechanics Column */}
        <div className="flex flex-col h-full border border-slate-800 bg-slate-900/40 relative rounded-2xl shadow-2xl backdrop-blur-sm">
          <div className="absolute top-0 right-0 bg-slate-800 border-l border-b border-slate-700 text-amber-400 px-3 py-1 text-[10px] uppercase font-mono font-bold tracking-widest">
            Section A
          </div>
          <div className="p-8">
            {/* Reduced to text-3xl for better hierarchy */}
            <h3 className="font-serif text-3xl mb-6 italic border-b border-slate-800/80 pb-4 text-slate-100">
              Mechanics
            </h3>
            <ul className="space-y-2">
              {mechanicsLessons.map(lesson => (
                <li key={lesson.id} className="group">
                  <Link to={`/lessons/${lesson.id}`} className="flex flex-col gap-1 p-3 rounded-xl border border-transparent hover:border-slate-800 hover:bg-slate-950/60 transition-all">
                    <span className="text-[10px] w-fit border border-slate-700 text-slate-500 px-2 py-0.5 font-mono font-bold uppercase rounded bg-slate-800">
                      {lesson.id.replace("-Lesson", "")}
                    </span>
                    {/* Module Title bumped to text-xl */}
                    <span className="text-xl font-serif font-medium leading-snug text-slate-200 group-hover:text-sky-400 transition-colors">
                      {lesson.title}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Statistics Column */}
        <div className="flex flex-col h-full border border-slate-800 bg-slate-900/40 relative rounded-2xl shadow-2xl backdrop-blur-sm">
          <div className="absolute top-0 right-0 bg-slate-800 border-l border-b border-slate-700 text-sky-400 px-3 py-1 text-[10px] uppercase font-mono font-bold tracking-widest">
            Section B
          </div>
          <div className="p-8">
            {/* Reduced to text-3xl for better hierarchy */}
            <h3 className="font-serif text-3xl mb-6 italic border-b border-slate-800/80 pb-4 text-slate-100">
              Statistics
            </h3>
            <ul className="space-y-2">
              {statisticsLessons.map(lesson => (
                <li key={lesson.id} className="group">
                  <Link to={`/lessons/${lesson.id}`} className="flex flex-col gap-1 p-3 rounded-xl border border-transparent hover:border-slate-800 hover:bg-slate-950/60 transition-all">
                    <span className="text-[10px] w-fit border border-slate-700 text-slate-500 px-2 py-0.5 font-mono font-bold uppercase rounded bg-slate-800">
                      {lesson.id.replace("-Lesson", "")}
                    </span>
                    {/* Module Title bumped to text-xl */}
                    <span className="text-xl font-serif font-medium leading-snug text-slate-200 group-hover:text-sky-400 transition-colors">
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
