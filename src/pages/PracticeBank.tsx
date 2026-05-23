import { useSearchParams } from "react-router-dom";
import { QUESTIONS } from "@/data/questions";
import { LESSONS } from "@/data/lessons";
import { QuestionCard } from "../components/QuestionCard";

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
    
    // Family Filter: Check if question belongs to Mechanics (M) or Statistics (S)
    if (selectedType !== "All") {
      const isMechanics = q.moduleId.startsWith("M");
      const isStatistics = q.moduleId.startsWith("S");
      if (selectedType === "Mechanics" && !isMechanics) return false;
      if (selectedType === "Statistics" && !isStatistics) return false;
    }

    if (selectedMarks !== "All") {
      if (selectedMarks === "1-3" && (q.marks < 1 || q.marks > 3)) return false;
      if (selectedMarks === "4-6" && (q.marks < 4 || q.marks > 6)) return false;
      if (selectedMarks === "7+" && q.marks < 7) return false;
    }
    return true;
  });

  return (
    <div className="p-8 max-w-350 mx-auto w-full flex flex-col gap-8 bg-background text-zinc-100">
      {/* Configuration Filter Sidebar */}
      <aside className="w-full border border-zinc-800 bg-zinc-900/40 p-6 rounded-2xl shadow-xl backdrop-blur-sm">
        <h2 className="text-xs uppercase tracking-widest text-zinc-500 font-mono font-bold mb-6">Filter Matrix</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block text-[10px] uppercase font-mono tracking-wider font-bold text-zinc-400 mb-2">Module Topic</label>
            <select 
              value={searchParams.get("module") || "All"} 
              onChange={(e) => updateFilter("module", e.target.value)}
              className="w-full text-xs font-mono bg-background border border-zinc-800 text-zinc-300 rounded-lg p-2.5 focus:border-emerald-500/50 outline-none transition-colors"
            >
              <option value="All">All Modules</option>
              {LESSONS.map(l => (
                <option key={l.id} value={l.id}>{getModuleCode(l.id)}: {l.title}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-[10px] uppercase font-mono tracking-wider font-bold text-zinc-400 mb-2">Syllabus Type</label>
            <select 
              value={selectedType} 
              onChange={(e) => updateFilter("type", e.target.value)}
              className="w-full text-xs font-mono bg-background border border-zinc-800 text-zinc-300 rounded-lg p-2.5 focus:border-emerald-500/50 outline-none transition-colors"
            >
              <option value="All">All Categories</option>
              <option value="Mechanics">Mechanics</option>
              <option value="Statistics">Statistics</option>
            </select>
          </div>

          <div>
            <label className="block text-[10px] uppercase font-mono tracking-wider font-bold text-zinc-400 mb-2">Mark Allocation</label>
            <div className="flex flex-col gap-1.5 mt-1">
              {["All", "1-3", "4-6", "7+"].map((tier) => (
                <button
                  key={tier}
                  onClick={() => updateFilter("marks", tier)}
                  className={`w-full text-left text-xs font-mono px-3 py-2 rounded-lg transition-all border ${
                    selectedMarks === tier
                      ? "bg-zinc-800 border-zinc-700 text-emerald-400 font-bold shadow-inner"
                      : "text-zinc-400 border-transparent hover:bg-background/60 hover:text-zinc-200"
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
      <main className="flex-1 flex flex-col">
        <div className="flex items-center justify-between border-b border-zinc-900 pb-4 mb-4">
          <div className="text-xs font-mono text-zinc-500">
            Yield Output: <span className="text-zinc-300 font-bold">{filteredQuestions.length}</span> items matching criteria
          </div>
        </div>

        {filteredQuestions.length === 0 ? (
          <div className="p-12 text-center border border-dashed border-zinc-800 rounded-2xl text-zinc-500 font-serif italic text-sm bg-zinc-900/10 mt-8">
            No active sandboxes match the chosen criteria matrix.
          </div>
        ) : (
          filteredQuestions.map((q, index) => (
            <QuestionCard key={q.id} question={q} index={index} showModuleBadge={true} />
          ))
        )}
      </main>
    </div>
  );
}