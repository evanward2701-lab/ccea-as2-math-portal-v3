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

  const getButtonClass = (isActive: boolean) => 
    `px-3 py-1 text-[10px] uppercase font-bold tracking-widest border transition-colors ${isActive ? 'bg-[#1A1A1A] text-white border-[#1A1A1A]' : 'bg-transparent text-[#1A1A1A] border-[#1A1A1A]/20 hover:border-[#1A1A1A]'}`;

  return (
    <div className="flex-1 flex flex-col p-8 md:p-12 pb-32 bg-[#FAF9F6] max-w-5xl mx-auto w-full">
      <header className="mb-10 border-b border-[#1A1A1A] pb-6">
        <h1 className="font-serif text-4xl italic text-[#1A1A1A] mb-3">Questions & Solutions Practice Bank</h1>
        <p className="text-sm font-semibold text-[#1A1A1A]/80">
          Targeted practice and exam-style questions for CCEA AS2 Applied Mathematics.
        </p>
      </header>

      {/* Filters */}
      <div className="flex flex-col gap-6 mb-12">
        <div className="flex flex-wrap items-start md:items-center gap-4">
          <span className="text-[10px] uppercase font-bold tracking-widest text-[#1A1A1A]/60 w-20 pt-1 md:pt-0">Module</span>
          <div className="flex flex-wrap gap-2 flex-1">
            <button 
              onClick={() => updateFilter("module", "All")}
              className={getButtonClass(selectedModule === "All")}
            >
              All
            </button>
            {LESSONS.map(l => (
              <button 
                key={l.id}
                onClick={() => updateFilter("module", getModuleCode(l.id))}
                className={getButtonClass(selectedModule === getModuleCode(l.id))}
              >
                {getModuleCode(l.id)}: {l.title.split(":")[0]}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap items-start md:items-center gap-4">
          <span className="text-[10px] uppercase font-bold tracking-widest text-[#1A1A1A]/60 w-20 pt-1 md:pt-0">Type</span>
          <div className="flex flex-wrap gap-2 flex-1">
            {["All", "Exam-Style", "Targeted Practice"].map(type => (
              <button 
                key={type}
                onClick={() => updateFilter("type", type)}
                className={getButtonClass(selectedType === type)}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap items-start md:items-center gap-4">
          <span className="text-[10px] uppercase font-bold tracking-widest text-[#1A1A1A]/60 w-20 pt-1 md:pt-0">Marks</span>
          <div className="flex flex-wrap gap-2 flex-1">
            {[
              { label: "All", value: "All" },
              { label: "1-3 Marks", value: "1-3" },
              { label: "4-6 Marks", value: "4-6" },
              { label: "7+ Marks", value: "7+" }
            ].map(markFilter => (
              <button 
                key={markFilter.value}
                onClick={() => updateFilter("marks", markFilter.value)}
                className={getButtonClass(selectedMarks === markFilter.value)}
              >
                {markFilter.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-8">
        {filteredQuestions.length === 0 ? (
          <div className="text-center py-20 bg-white border border-dashed border-[#1A1A1A]/30">
            <h3 className="font-serif text-xl text-[#1A1A1A] italic mb-2">No questions found</h3>
            <p className="text-sm font-semibold text-[#1A1A1A]/60">Adjust your filters to see more questions.</p>
          </div>
        ) : (
          filteredQuestions.map((q, index) => (
            <div key={q.id} className="rounded-none border border-[#1A1A1A] bg-white shadow-none relative mb-8">
              <div className="bg-white border-b border-[#1A1A1A] p-6 lg:p-8">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] bg-black text-white px-2 py-0.5 font-bold uppercase">{q.moduleId}</span>
                    <span className="text-[9px] border border-[#1A1A1A] px-2 py-0.5 uppercase font-bold tracking-widest text-[#1A1A1A]">{q.type}</span>
                    <span className="text-[10px] font-bold uppercase tracking-tight opacity-60 text-[#1A1A1A]">{q.topic}</span>
                  </div>
                  <div className="text-[10px] uppercase font-bold tracking-widest opacity-80 text-[#1A1A1A]">
                    [{q.marks} Marks]
                  </div>
                </div>
              </div>
              <div className="p-6 lg:p-8 font-serif leading-relaxed text-[#1A1A1A]">
                <MathText content={q.questionMarkdown} />
              </div>
              <div className="bg-[#FAF9F6] border-t border-[#1A1A1A] p-0">
                <details className="w-full relative group marker:content-none [&>summary::-webkit-details-marker]:hidden">
                  <summary className="px-6 lg:px-8 py-4 hover:bg-white transition-colors cursor-pointer list-none select-none flex items-center justify-between outline-none focus-visible:ring-2 focus-visible:ring-black">
                    <div className="flex items-center text-[10px] uppercase font-bold tracking-widest text-[#1A1A1A]">
                      <CheckCircle2 className="w-4 h-4 mr-2 opacity-50 group-hover:opacity-100 transition-opacity group-open:opacity-100" />
                      View Mark Scheme
                    </div>
                  </summary>
                  <div className="px-6 lg:px-8 pb-8 pt-4 bg-white border-t border-[#1A1A1A]/10">
                    <div className="bg-white p-8 border border-[#1A1A1A] relative shadow-[4px_4px_0px_#1A1A1A]">
                      <div className="absolute top-0 right-0 bg-[#1A1A1A] text-white px-2 py-1 text-[9px] uppercase font-bold tracking-widest">Mark Scheme</div>
                      <div className="font-serif leading-relaxed text-[#1A1A1A] mt-2">
                        <MathText content={q.markSchemeMarkdown} />
                      </div>
                      
                      <div className="mt-8 pt-6 border-t border-[#1A1A1A]/10">
                        <h4 className="text-[9px] font-bold text-[#1A1A1A]/50 uppercase tracking-widest mb-4">Mark Badge Key</h4>
                        <div className="flex flex-wrap gap-6 text-[10px] text-[#1A1A1A] font-medium">
                          <span className="flex items-center"><code className="font-mono bg-[#F1EFE9] border border-[#1A1A1A]/20 px-1 py-0.5 mr-2">[M1]</code> Method mark</span>
                          <span className="flex items-center"><code className="font-mono bg-[#F1EFE9] border border-[#1A1A1A]/20 px-1 py-0.5 mr-2">[W1]</code> Working mark</span>
                          <span className="flex items-center"><code className="font-mono bg-[#F1EFE9] border border-[#1A1A1A]/20 px-1 py-0.5 mr-2">[A1]</code> Accuracy mark</span>
                          <span className="flex items-center"><code className="font-mono bg-[#F1EFE9] border border-[#1A1A1A]/20 px-1 py-0.5 mr-2">[MW1]</code> Combined Method/Working</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </details>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
