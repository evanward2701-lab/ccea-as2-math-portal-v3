import React from 'react';
import { useParams, Link } from "react-router-dom";
import { QUESTIONS } from "@/data/questions";
import { MathText } from "../components/MathText";
import { LessonVisual } from "../components/LessonVisual";
import { CheckCircle2, ChevronLeft, BrainCircuit } from "lucide-react";
import { cn } from "@/lib/utils";

export function PracticePage() {
  const { moduleId, topic } = useParams<{ moduleId: string; topic: string }>();

  // Filter questions by moduleId and topic
  const filteredQuestions = QUESTIONS.filter(q => 
    q.moduleId === moduleId && 
    (!topic || topic === "General" || q.topic.toLowerCase() === topic.toLowerCase())
  );

  return (
    <div className="p-8 max-w-300 mx-auto w-full flex flex-col gap-8 bg-slate-950 text-slate-100 min-h-full">
      {/* Header Navigation */}
      <header className="flex flex-col gap-4 border-b border-slate-900 pb-6">
        <div className="flex items-center gap-4">
          <Link 
            to="/practice" 
            className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-sky-400 hover:border-sky-500/30 transition-all shadow-sm group"
          >
            <ChevronLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
          </Link>
          <div className="flex flex-col">
            <div className="flex items-center gap-2 text-[10px] font-mono font-bold uppercase tracking-widest text-slate-500">
              <BrainCircuit className="w-3 h-3 text-sky-400" />
              Focused Practice Session
            </div>
            <h1 className="text-2xl font-serif font-bold text-slate-100 flex items-center gap-3 mt-1">
              {moduleId}: {topic || "General Practice"}
              <span className="text-xs font-mono font-normal bg-slate-900 border border-slate-800 text-slate-500 px-2 py-0.5 rounded ml-2">
                {filteredQuestions.length} Questions
              </span>
            </h1>
          </div>
        </div>
      </header>

      {/* Questions Stream */}
      <main className="flex flex-col gap-12">
        {filteredQuestions.length === 0 ? (
          <div className="p-20 text-center border border-dashed border-slate-800 rounded-3xl bg-slate-900/20">
            <p className="text-slate-500 font-serif italic text-lg">
              No specific questions found for this topic filter.
            </p>
            <Link to="/practice" className="mt-6 inline-block text-sky-400 hover:text-sky-300 font-mono text-sm underline underline-offset-4">
              Return to Practice Bank
            </Link>
          </div>
        ) : (
          filteredQuestions.map((q, index) => (
            <section key={q.id} className="relative flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500" style={{ animationDelay: `${index * 100}ms` }}>
              
              {/* Question Header */}
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-mono font-bold text-slate-500 uppercase tracking-tighter">
                  Question Block <span className="text-slate-300">#{q.id}</span>
                </h3>
                <div className="px-3 py-1 rounded-full bg-emerald-950/30 border border-emerald-500/20 text-[10px] font-mono font-bold text-emerald-400 uppercase tracking-wider shadow-sm">
                  {q.marks} Tariff Marks
                </div>
              </div>

              {/* Question Body */}
              <div className="bg-slate-900/40 border border-slate-800/50 rounded-2xl p-8 shadow-xl backdrop-blur-sm">
                <div className="prose prose-invert prose-slate max-w-none leading-relaxed text-slate-200 text-lg font-serif">
                  <MathText content={q.questionMarkdown} />
                </div>

                {/* Optional Visual */}
                {q.visualId && (
                  <div className="mt-8 border-t border-slate-800/50 pt-8 flex justify-center overflow-hidden rounded-xl bg-slate-950/30">
                    <LessonVisual visualId={q.visualId} />
                  </div>
                )}
              </div>

              {/* Solution - Details Pattern */}
              <details className="group">
                <summary className="flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono font-bold uppercase tracking-widest text-slate-400 cursor-pointer hover:bg-slate-800 hover:text-emerald-400 hover:border-emerald-500/30 transition-all list-none select-none active:scale-[0.98]">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 group-open:hidden" />
                  <span className="group-open:hidden">Show Official Solution</span>
                  <span className="hidden group-open:inline">Hide Solution</span>
                </summary>
                
                <div className="mt-4 p-8 bg-slate-950 border border-slate-900 rounded-2xl shadow-inner animate-in zoom-in-95 duration-300 origin-top">
                  <div className="flex items-center gap-2 text-[10px] uppercase font-mono tracking-widest font-bold text-emerald-400/80 mb-6">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                    Official Mark Scheme Solution
                  </div>
                  
                  <div className="prose prose-invert prose-emerald max-w-none font-serif text-slate-300 text-base leading-relaxed overflow-x-auto">
                    <MathText content={q.markSchemeMarkdown} />
                  </div>

                  {/* Marking Key */}
                  <div className="mt-8 pt-6 border-t border-slate-900">
                    <div className="flex flex-wrap gap-x-6 gap-y-3 text-[10px] text-slate-500 font-medium font-mono uppercase tracking-tight">
                      <span className="flex items-center gap-1.5"><b className="text-amber-400">[M]</b> Method</span>
                      <span className="flex items-center gap-1.5"><b className="text-sky-400">[W]</b> Working</span>
                      <span className="flex items-center gap-1.5"><b className="text-emerald-400">[A]</b> Accuracy</span>
                      <span className="flex items-center gap-1.5"><b className="text-purple-400">[MW]</b> Combined</span>
                    </div>
                  </div>
                </div>
              </details>

              {/* Separator for clarity */}
              {index < filteredQuestions.length - 1 && (
                <div className="h-px bg-linear-to-r from-transparent via-slate-800 to-transparent my-4 opacity-50" />
              )}
            </section>
          ))
        )}
      </main>

      {/* Footer Nav */}
      <footer className="mt-12 pt-8 border-t border-slate-900 flex justify-center pb-20">
        <Link 
          to="/practice" 
          className="text-xs font-mono font-bold uppercase tracking-widest text-slate-500 hover:text-sky-400 transition-colors"
        >
          Return to All Practice Sets
        </Link>
      </footer>
    </div>
  );
}
