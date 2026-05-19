import { Link } from "react-router-dom";
import { LESSONS } from "@/data/lessons";
import { QUESTIONS } from "@/data/questions";

export function Dashboard() {
  const mechanicsLessons = LESSONS.filter(l => l.type === "Mechanics");
  const statisticsLessons = LESSONS.filter(l => l.type === "Statistics");

  return (
    <div className="p-8 max-w-6xl mx-auto flex flex-col gap-8 flex-1 w-full bg-slate-950 text-slate-100 min-h-screen">
      <header className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch h-auto lg:h-90">
        <div className="col-span-1 border border-slate-800 pb-4 md:col-span-8 bg-slate-900/60 p-10 flex flex-col relative overflow-hidden h-full min-h-75 rounded-2xl shadow-2xl backdrop-blur-sm">
          <div className="absolute top-0 left-0 bg-slate-800 border-r border-b border-slate-700 text-slate-400 px-3 py-1 text-[10px] uppercase font-mono font-bold tracking-widest">
            Platform Overview
          </div>
          <div className="mt-4 z-10 flex flex-col justify-center h-full">
            <h1 className="font-serif text-5xl font-light leading-tight mb-4 tracking-tight text-slate-100">
              AS2 Applied<br/>
              <span className="italic text-emerald-400 font-serif">Mathematics</span>
            </h1>
            <p className="text-sm text-slate-400 max-w-lg leading-relaxed mb-6">
              Welcome to the digital study companion optimized for the CCEA A-Level Mathematics specification. Track core kinematic models, balance force systems, and parse structural probability trees with real-time vector analytics.
            </p>
          </div>
        </div>

        <div className="col-span-1 border border-slate-800 md:col-span-4 bg-slate-900/40 p-10 flex flex-col justify-between relative h-full min-h-60 rounded-2xl shadow-2xl backdrop-blur-sm">
          <div className="absolute top-0 left-0 bg-slate-800 border-r border-b border-slate-700 text-slate-400 px-3 py-1 text-[10px] uppercase font-mono font-bold tracking-widest">
            Performance Index
          </div>
          <div className="mt-4 flex flex-col justify-center flex-1">
            <div className="text-6xl font-serif italic text-emerald-400 mb-2">
              {QUESTIONS.length}
            </div>
            <div className="text-xs uppercase font-mono tracking-wider text-slate-400 font-bold">
              Active Exam Sandbox Tasks
            </div>
          </div>
          <Link
            to="/practice"
            className="w-full py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 rounded-xl text-center text-xs font-mono font-bold uppercase tracking-wider transition-all shadow-md mt-4"
          >
            Launch Sandbox &rarr;
          </Link>
        </div>
      </header>

      <main className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <div className="flex flex-col border border-slate-800 bg-slate-900/50 relative rounded-2xl shadow-2xl hover:border-slate-700/80 transition-all duration-300 backdrop-blur-sm">
          <div className="absolute top-0 right-0 bg-slate-800 border-l border-b border-slate-700 text-amber-400 px-3 py-1 text-[9px] uppercase font-mono font-bold tracking-widest">
            Section A
          </div>
          <div className="p-8">
            <h3 className="font-serif text-3xl mb-8 italic border-b border-slate-800/80 pb-4 text-slate-100">
              Mechanics
            </h3>
            <ul className="space-y-4">
              {mechanicsLessons.map(lesson => (
                <li key={lesson.id} className="group">
                  <Link to={`/lessons/${lesson.id}`} className="flex flex-col gap-1.5 p-3 rounded-xl border border-transparent hover:border-slate-800 hover:bg-slate-950/40 transition-all">
                    <div className="flex items-center w-full">
                      <span className="text-[9px] border border-slate-700 text-slate-400 px-1.5 py-0.5 font-mono font-bold uppercase rounded bg-slate-800">
                        {lesson.id.replace("-Lesson", "")}
                      </span>
                    </div>
                    <span className="text-sm font-serif leading-snug text-slate-300 group-hover:text-sky-400 transition-colors">
                      {lesson.title}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col border border-slate-800 bg-slate-900/50 relative rounded-2xl shadow-2xl hover:border-slate-700/80 transition-all duration-300 backdrop-blur-sm">
          <div className="absolute top-0 right-0 bg-slate-800 border-l border-b border-slate-700 text-sky-400 px-3 py-1 text-[9px] uppercase font-mono font-bold tracking-widest">
            Section B
          </div>
          <div className="p-8">
            <h3 className="font-serif text-3xl mb-8 italic border-b border-slate-800/80 pb-4 text-slate-100">
              Statistics
            </h3>
            <ul className="space-y-4">
              {statisticsLessons.map(lesson => (
                <li key={lesson.id} className="group">
                  <Link to={`/lessons/${lesson.id}`} className="flex flex-col gap-1.5 p-3 rounded-xl border border-transparent hover:border-slate-800 hover:bg-slate-950/40 transition-all">
                    <div className="flex items-center w-full">
                      <span className="text-[9px] border border-slate-700 text-slate-400 px-1.5 py-0.5 font-mono font-bold uppercase rounded bg-slate-800">
                        {lesson.id.replace("-Lesson", "")}
                      </span>
                    </div>
                    <span className="text-sm font-serif leading-snug text-slate-300 group-hover:text-sky-400 transition-colors">
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