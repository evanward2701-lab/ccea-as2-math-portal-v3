import { Link } from "react-router-dom";
import { useQualification } from "@/core/context/QualificationContext";
import { LESSONS as AS2_LESSONS } from "@/modules/AS2/data/lessons";
import { QUESTIONS as AS2_QUESTIONS } from "@/modules/AS2/data/questions";
import { LESSONS as AS1_LESSONS } from "@/modules/AS1/data/lessons";
import { QUESTIONS as AS1_QUESTIONS } from "@/modules/AS1/data/questions";
import type { CourseModule, PracticeQuestion } from "@/core/types";

interface ModuleData {
  lessons: CourseModule[];
  questions: PracticeQuestion[];
  title: string;
  subtitle: string;
}

export function Dashboard() {
  const { activeQualification } = useQualification();

  const getModuleData = (): ModuleData => {
    switch (activeQualification) {
      case "AS1":
        return { lessons: AS1_LESSONS, questions: AS1_QUESTIONS, title: "AS1 Pure", subtitle: "Mathematics" };
      case "AS2":
        return { lessons: AS2_LESSONS, questions: AS2_QUESTIONS, title: "AS2 Applied", subtitle: "Mathematics" };
      case "A2":
        return { lessons: [], questions: [], title: "A2 Pure/Applied", subtitle: "Mathematics" };
      default:
        return { lessons: AS2_LESSONS, questions: AS2_QUESTIONS, title: "AS2 Applied", subtitle: "Mathematics" };
    }
  };

  const { lessons, questions, title, subtitle } = getModuleData();
  const mechanicsLessons = lessons.filter((lesson) => lesson.type === "Mechanics");
  const statisticsLessons = lessons.filter((lesson) => lesson.type === "Statistics");
  const pureLessons = lessons.filter((lesson) => lesson.type === "Pure");
  const pureSplitPoint = Math.ceil(pureLessons.length / 2);

  const sectionALessons = activeQualification === "AS2" ? mechanicsLessons : pureLessons.slice(0, pureSplitPoint);
  const sectionBLessons = activeQualification === "AS2" ? statisticsLessons : pureLessons.slice(pureSplitPoint);

  const renderLessonList = (sectionLessons: CourseModule[]) => (
    <ul className="space-y-2">
      {sectionLessons.map((lesson) => {
        const code = lesson.id.replace("-Lesson", "");
        return (
          <li
            key={lesson.id}
            className="group flex items-center justify-between gap-4 p-3 rounded-xl border border-transparent hover:border-zinc-800 hover:bg-background/60 transition-all"
          >
            <Link to={`/lessons/${lesson.id}`} className="flex flex-col gap-1 flex-1 overflow-hidden">
              <span className="text-2.5 w-fit border border-zinc-700 text-zinc-500 px-2 py-0.5 font-mono font-bold uppercase rounded bg-zinc-800">
                {code}
              </span>
              <span className="text-xl font-serif font-medium leading-snug text-zinc-200 group-hover:text-zinc-400 transition-colors truncate">
                {lesson.title}
              </span>
            </Link>
            <Link
              to={`/practice/${code}/General`}
              className="px-4 py-2 bg-zinc-800 hover:bg-zinc-700/50 text-2.5 font-mono font-bold uppercase tracking-tighter text-zinc-400 hover:text-zinc-200 rounded-lg border border-zinc-700 transition-all shadow-sm"
            >
              Practice
            </Link>
          </li>
        );
      })}
    </ul>
  );

  return (
    <div className="p-8 max-w-7xl mx-auto flex flex-col gap-8 w-full bg-background text-zinc-100 h-full">
      <header className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-3 border border-zinc-800 bg-zinc-800/40 p-8 rounded-2xl shadow-2xl backdrop-blur-sm relative overflow-hidden">
          <div className="absolute top-0 left-0 bg-zinc-800 border-r border-b border-zinc-700 text-zinc-400 px-3 py-1 text-2.5 uppercase font-mono font-bold tracking-widest">
            Platform Overview
          </div>
          <h1 className="font-serif text-5xl font-light leading-tight tracking-wide text-zinc-100 mt-4">
            {title} <br />
            <span className="italic text-zinc-400 font-serif">{subtitle}</span>
          </h1>
        </div>

        <div className="border border-zinc-800 bg-zinc-900/40 p-8 flex flex-col justify-center rounded-2xl shadow-2xl backdrop-blur-sm">
          <div className="text-5xl font-serif italic text-zinc-300 mb-2">
            {questions.length}
          </div>
          <div className="text-2.5 uppercase font-mono tracking-widest text-zinc-500 font-bold">
            Active Exam Tasks
          </div>
          <Link
            to="/practice"
            className="w-full mt-6 py-2 bg-zinc-800/50 hover:bg-zinc-700/50 text-zinc-300 border border-zinc-700/50 rounded-lg text-center text-2.5 font-mono font-bold uppercase tracking-wider transition-all"
          >
            Launch Sandbox &rarr;
          </Link>
        </div>
      </header>

      {lessons.length === 0 ? (
        <main className="flex-1 flex items-center justify-center border border-zinc-800/50 bg-zinc-900/20 rounded-2xl p-12">
          <div className="text-center">
            <h3 className="font-serif text-2xl text-zinc-400 mb-2 italic">Modules pending ingestion...</h3>
            <p className="text-zinc-600 font-mono text-2.5 uppercase tracking-widest">
              Content for {activeQualification} is currently unavailable.
            </p>
          </div>
        </main>
      ) : (
        <main className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          <div className="flex flex-col h-full border border-zinc-800 bg-zinc-800/40 relative rounded-2xl shadow-2xl backdrop-blur-sm">
            <div className="absolute top-0 right-0 bg-zinc-800 border-l border-b border-zinc-700 text-zinc-400 px-3 py-1 text-2.5 uppercase font-mono font-bold tracking-widest">
              Section A
            </div>
            <div className="p-8">
              <h3 className="font-serif text-3xl mb-6 italic border-b border-zinc-800/80 pb-4 text-zinc-100">
                {activeQualification === "AS2" ? "Mechanics" : "Pure Mathematics (1)"}
              </h3>
              {renderLessonList(sectionALessons)}
            </div>
          </div>

          <div className="flex flex-col h-full border border-zinc-800 bg-zinc-800/40 relative rounded-2xl shadow-2xl backdrop-blur-sm">
            <div className="absolute top-0 right-0 bg-zinc-800 border-l border-b border-zinc-700 text-zinc-400 px-3 py-1 text-2.5 uppercase font-mono font-bold tracking-widest">
              Section B
            </div>
            <div className="p-8">
              <h3 className="font-serif text-3xl font-light mb-6 italic border-b border-zinc-800/80 pb-4 text-zinc-100 tracking-wide">
                {activeQualification === "AS2" ? "Statistics" : "Pure Mathematics (2)"}
              </h3>
              {renderLessonList(sectionBLessons)}
            </div>
          </div>
        </main>
      )}
    </div>
  );
}
