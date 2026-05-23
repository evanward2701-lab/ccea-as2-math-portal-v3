import { useSearchParams } from "react-router-dom";
import { QUESTIONS } from "@/data/questions";
import { LESSONS } from "@/data/lessons";
import { MathText } from "../components/MathText";
import { CheckCircle2 } from "lucide-react";

const getModuleCode = (moduleId: string) => moduleId.replace("-Lesson", "");

export function PracticeBank() {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedModule = getModuleCode(searchParams.get("module") || "All");
  const selectedType = searchParams.get("type") || "All";
  const selectedMarks = searchParams.get("marks") || "All";

  const updateFilter = (key: string, value: string) => {
    const newParams = new URLSearchParams(searchParams);
    if (value === "All") {
      newParams.delete(key);
    } else {
      newParams.set(key, value);
    }
    setSearchParams(newParams);
  };

  const filteredQuestions = QUESTIONS.filter(q => {
    if (selectedModule !== "All" && q.moduleId !== selectedModule) return false;
    if (selectedType !== "All" && q.type !== selectedType) return false;
    if (selectedMarks !== "All") {
      if (selectedMarks === "1-3" && (q.marks < 1 || q.marks > 3)) return false;
      if (selectedMarks === "4-6" && (q.marks < 4 || q.marks > 6)) return false;
      if (selectedMarks === "7+" && q.marks < 7) return false;
    }
    return true;
  });

  return (
    <div className="p-8 max-w-350 mx-auto w-full flex flex-col gap-8 bg-slate-950 text-slate-100">
      {/* Configuration Filter Sidebar */}
      <aside className="w-full border border-slate-800 bg-slate-900/40 p-6 rounded-2xl shadow-xl backdrop-blur-sm">
        <h2 className="text-xs uppercase tracking-widest text-slate-500 font-mono font-bold mb-6">Filter Matrix</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block text-[10px] uppercase font-mono tracking-wider font-bold text-slate-400 mb-2">Module Topic</label>
            <select 
              value={searchParams.get("module") || "All"} 
              onChange={(e) => updateFilter("module", e.target.value)}
              className="w-full text-xs font-mono bg-slate-950 border border-slate-800 text-slate-300 rounded-lg p-2.5 focus:border-emerald-500/50 outline-none transition-colors"
            >
              <option value="All">All Modules</option>
              {LESSONS.map(l => (
                <option key={l.id} value={l.id}>{getModuleCode(l.id)}: {l.title}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-[10px] uppercase font-mono tracking-wider font-bold text-slate-400 mb-2">Syllabus Type</label>
            <select 
              value={selectedType} 
              onChange={(e) => updateFilter("type", e.target.value)}
              className="w-full text-xs font-mono bg-slate-950 border border-slate-800 text-slate-300 rounded-lg p-2.5 focus:border-emerald-500/50 outline-none transition-colors"
            >
              <option value="All">All Categories</option>
              <option value="Mechanics">Mechanics</option>
              <option value="Statistics">Statistics</option>
            </select>
          </div>

          <div>
            <label className="block text-[10px] uppercase font-mono tracking-wider font-bold text-slate-400 mb-2">Mark Allocation</label>
            <div className="flex flex-col gap-1.5 mt-1">
              {["All", "1-3", "4-6", "7+"].map((tier) => (
                <button
                  key={tier}
                  onClick={() => updateFilter("marks", tier)}
                  className={`w-full text-left text-xs font-mono px-3 py-2 rounded-lg transition-all border ${
                    selectedMarks === tier
                      ? "bg-slate-800 border-slate-700 text-emerald-400 font-bold shadow-inner"
                      : "text-slate-400 border-transparent hover:bg-slate-950/60 hover:text-slate-200"
                  }`}
                >
                  {tier === "All" ? "Clear Tariff Bounds" : `${tier} Tariff Marks`}
                </button>
              ))}
            </div>
          </div>
        </div>
      </aside>

      {/* Task List Grid Stream */}
      <main className="flex-1 flex flex-col gap-8">
        <div className="flex items-center justify-between border-b border-slate-900 pb-4">
          <div className="text-xs font-mono text-slate-500">
            Yield Output: <span className="text-slate-300 font-bold">{filteredQuestions.length}</span> items matching criteria
          </div>
        </div>

        {filteredQuestions.length === 0 ? (
          <div className="p-12 text-center border border-dashed border-slate-800 rounded-2xl text-slate-500 font-serif italic text-sm bg-slate-900/10">
            No active sandboxes match the chosen criteria matrix.
          </div>
        ) : (
          filteredQuestions.map((q) => (
            <div key={q.id} className="border border-slate-800 bg-slate-900/30 rounded-2xl shadow-xl overflow-hidden backdrop-blur-sm">
              
              {/* Question Meta Header Block */}
              <div className="bg-slate-900/80 px-6 py-4 border-b border-slate-800/80 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-mono font-bold bg-slate-900 border border-slate-700 text-slate-400 px-2 py-0.5 rounded">
                    {q.moduleId}
                  </span>
                  <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-wider">
                    Task ID: #{q.id}
                  </span>
                </div>
                <div className="text-[10px] font-mono font-bold text-emerald-400 bg-emerald-950/40 border border-emerald-500/20 px-2 py-0.5 rounded-full">
                  {q.marks} Tariff Marks
                </div>
              </div>

              {/* Task Question Core Body */}
              <div className="p-6 border-b border-slate-800/40">
                <div className="font-serif leading-relaxed text-slate-200 text-base">
                  <MathText content={q.questionMarkdown} />
                </div>
              </div>

              {/* Mark Scheme Grid Module */}
              <div className="p-6 bg-slate-950/40">
                <div className="flex items-center gap-2 text-[10px] uppercase font-mono tracking-widest font-bold text-slate-400 mb-3">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  Official Marking Guide Criteria
                </div>
                <div className="font-serif leading-relaxed text-slate-300 bg-slate-950/80 border border-slate-900 p-4 rounded-xl shadow-inner">
                  <MathText content={q.markSchemeMarkdown} />
                </div>
                
                {/* Taxonomy Badge Key Footer */}
                <div className="mt-6 pt-5 border-t border-slate-900/60">
                  <h4 className="text-[9px] font-mono font-bold text-slate-500 uppercase tracking-widest mb-3">
                    Taxonomy Mark Scheme Guide
                  </h4>
                  <div className="flex flex-wrap gap-4 text-[10px] text-slate-400 font-medium">
                    <span className="flex items-center">
                      <code className="font-mono bg-slate-900 border border-slate-800 px-1.5 py-0.5 mr-2 text-amber-400 rounded">[M1]</code> Method mark
                    </span>
                    <span className="flex items-center">
                      <code className="font-mono bg-slate-900 border border-slate-800 px-1.5 py-0.5 mr-2 text-sky-400 rounded">[W1]</code> Working mark
                    </span>
                    <span className="flex items-center">
                      <code className="font-mono bg-slate-900 border border-slate-800 px-1.5 py-0.5 mr-2 text-emerald-400 rounded">[A1]</code> Accuracy mark
                    </span>
                    <span className="flex items-center">
                      <code className="font-mono bg-slate-900 border border-slate-800 px-1.5 py-0.5 mr-2 text-purple-400 rounded">[MW1]</code> Combined Method/Working
                    </span>
                  </div>
                </div>
              </div>

            </div>
          ))
        )}
      </main>
    </div>
  );
}