import React from 'react';
import { useParams, Link } from "react-router-dom";
import { QUESTIONS } from "@/data/questions";
import { QuestionCard } from "../components/QuestionCard";
import { ChevronLeft, BrainCircuit } from "lucide-react";
import { cn } from "@/lib/utils";

export function PracticePage() {
  const { moduleId, topic } = useParams<{ moduleId: string; topic: string }>();

  // Filter questions by moduleId and topic
  const filteredQuestions = QUESTIONS.filter(q => 
    q.moduleId === moduleId && 
    (!topic || topic === "General" || q.topic.toLowerCase() === topic.toLowerCase())
  );

  return (
    <div className="p-8 max-w-300 mx-auto w-full flex flex-col gap-8 bg-zinc-950 text-zinc-100 min-h-full">
      {/* Header Navigation */}
      <header className="flex flex-col gap-4 border-b border-zinc-900 pb-6">
        <div className="flex items-center gap-4">
          <Link 
            to="/practice" 
            className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-zinc-100 hover:border-zinc-800/50 transition-all shadow-sm group"
          >
            <ChevronLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
          </Link>
          <div className="flex flex-col">
            <div className="flex items-center gap-2 text-[10px] font-mono font-bold uppercase tracking-widest text-zinc-500">
              <BrainCircuit className="w-3 h-3 text-zinc-100" />
              Focused Practice Session
            </div>
            <h1 className="text-2xl font-serif font-light text-zinc-100 flex items-center gap-3 mt-1 tracking-wide">
              {moduleId}: {topic || "General Practice"}
              <span className="text-xs font-mono font-normal bg-zinc-900 border border-zinc-800 text-zinc-500 px-2 py-0.5 rounded ml-2 tracking-normal">
                {filteredQuestions.length} Questions
              </span>
            </h1>
          </div>
        </div>
      </header>

      {/* Questions Stream */}
      <main className="flex flex-col">
        {filteredQuestions.length === 0 ? (
          <div className="p-20 text-center border border-dashed border-zinc-800 rounded-3xl bg-zinc-900/20 mt-12">
            <p className="text-zinc-500 font-serif italic text-lg">
              No specific questions found for this topic filter.
            </p>
            <Link to="/practice" className="mt-6 inline-block text-zinc-100 hover:text-zinc-300 font-mono text-sm underline underline-offset-4">
              Return to Practice Bank
            </Link>
          </div>
        ) : (
          filteredQuestions.map((q, index) => (
            <QuestionCard key={q.id} question={q} index={index} />
          ))
        )}
      </main>

      {/* Footer Nav */}
      <footer className="mt-12 pt-8 border-t border-zinc-900 flex justify-center pb-20">
        <Link 
          to="/practice" 
          className="text-xs font-mono font-bold uppercase tracking-widest text-zinc-500 hover:text-zinc-100 transition-colors"
        >
          Return to All Practice Sets
        </Link>
      </footer>
    </div>
  );
}
