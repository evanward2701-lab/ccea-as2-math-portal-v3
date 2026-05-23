import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { QUESTIONS as AS2_QUESTIONS } from "@/modules/AS2/data/questions";
import { QUESTIONS as AS1_QUESTIONS } from "@/modules/AS1/data/questions";
import { LESSONS as AS2_LESSONS } from "@/modules/AS2/data/lessons";
import { LESSONS as AS1_LESSONS } from "@/modules/AS1/data/lessons";
import { QuestionCard } from "@/core/components/QuestionCard";
import { useQualification } from "@/core/context/QualificationContext";

export function PracticePage() {
  const { moduleId, topic } = useParams();
  const { activeQualification } = useQualification();

  const QUESTIONS = activeQualification === 'AS1' ? AS1_QUESTIONS : activeQualification === 'AS2' ? AS2_QUESTIONS : [];
  const LESSONS = activeQualification === 'AS1' ? AS1_LESSONS : activeQualification === 'AS2' ? AS2_LESSONS : [];

  const moduleQuestions = QUESTIONS.filter(
    (q) => q.moduleId === moduleId && (topic === "General" || q.topic === topic)
  );

  const currentLesson = LESSONS.find(l => l.id.replace("-Lesson", "") === moduleId);
  const title = currentLesson ? currentLesson.title : moduleId;

  return (
    <div className="p-8 max-w-7xl mx-auto w-full flex flex-col gap-8 bg-background text-zinc-100 min-h-screen">
      <header className="mb-6">
        <Link 
          to="/practice"
          className="inline-flex items-center gap-2 text-zinc-400 hover:text-zinc-200 text-[10px] font-mono font-bold uppercase tracking-widest transition-colors mb-8"
        >
          <ArrowLeft className="w-3 h-3" />
          Back to Practice Matrix
        </Link>
        <div className="flex items-end gap-6 border-b border-zinc-800 pb-8">
          <div className="bg-zinc-800 border border-zinc-700 text-zinc-400 px-4 py-2 rounded-lg font-mono font-bold text-sm tracking-widest shadow-sm">
            {moduleId}
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-serif text-zinc-100 tracking-wide">
              {title}
            </h1>
            <h2 className="text-[11px] uppercase tracking-widest font-mono text-zinc-400 font-bold">
              {topic === "General" ? "Full Module Practice Bank" : `Topic Focus: ${topic}`}
            </h2>
          </div>
        </div>
      </header>

      <main className="flex flex-col gap-8 max-w-5xl mx-auto w-full">
        {moduleQuestions.length === 0 ? (
          <div className="p-16 text-center border border-dashed border-zinc-800 rounded-3xl bg-zinc-900/20">
            <p className="text-zinc-500 font-serif italic mb-2">No practice questions active for this sector.</p>
            <p className="text-zinc-600 font-mono text-[10px] uppercase tracking-widest">Select another module or topic.</p>
          </div>
        ) : (
          moduleQuestions.map((q, index) => (
            <QuestionCard key={q.id} question={q} index={index} />
          ))
        )}
      </main>
    </div>
  );
}
