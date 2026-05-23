import { Routes, Route, Link, useLocation } from "react-router-dom";
import { BookOpen, GraduationCap, LayoutDashboard, BrainCircuit } from "lucide-react";
import { Dashboard } from "./pages/Dashboard";
import { Lessons } from "./pages/Lessons";
import { PracticeBank } from "./pages/PracticeBank";
import { PracticePage } from "./pages/PracticePage";
import { cn } from "@/lib/utils";
import { LESSONS } from "./data/lessons";

const getModuleCode = (moduleId: string) => moduleId.replace("-Lesson", "");

export default function App() {
  const location = useLocation();

  const mainLinks = [
    { name: "Dashboard", path: "/", icon: LayoutDashboard },
    { name: "Course Modules", path: "/lessons", icon: BookOpen },
    { name: "Practice Bank", path: "/practice", icon: BrainCircuit },
  ];

  return (
    <div className="flex flex-col h-screen bg-slate-950 text-slate-100 font-sans overflow-hidden select-none">
      {/* Header Navigation */}
      <nav className="h-16 border-b border-slate-800 flex items-center justify-between px-8 bg-slate-950 z-10 shrink-0 shadow-sm">
        <div className="flex items-center gap-8">
          <span className="font-serif italic text-2xl font-bold tracking-tighter text-slate-100 flex items-center gap-3">
            <GraduationCap className="h-6 w-6 text-sky-400" />
            AS2 Mathematics
          </span>
          <div className="h-4 w-px bg-slate-700"></div>
          <span className="text-[10px] uppercase tracking-widest font-semibold text-slate-400">
            CCEA Specification / Revision Portal
          </span>
        </div>
      </nav>

      <div className="flex-1 flex overflow-hidden">
        {/* Main Sidebar Layout */}
        <aside className="w-64 border-r border-slate-800 flex flex-col bg-slate-900/50 shrink-0 shadow-xl z-20 h-full overflow-y-auto">
          <nav className="flex-1 px-4 py-8 space-y-2">
            {mainLinks.map((link) => {
              const Icon = link.icon;
              const isCourseModules = link.name === "Course Modules";
              const isActive = location.pathname === link.path || (link.path !== '/' && location.pathname.startsWith(link.path));
              
              if (isCourseModules) {
                return (
                  <details key={link.path} className="group" open={isActive}>
                    <summary className={cn(
                      "flex items-center gap-3 px-4 py-3 rounded-lg text-[11px] uppercase tracking-widest font-bold border transition-all duration-200 cursor-pointer list-none",
                      isActive 
                        ? "bg-slate-800 text-sky-400 border-slate-700 shadow-md" 
                        : "bg-transparent text-slate-400 border-transparent hover:bg-slate-800/50 hover:text-slate-200 hover:border-slate-700/50"
                    )}>
                      <Icon className="h-4 w-4 shrink-0" />
                      <span>{link.name}</span>
                    </summary>
                    <div className="pl-5 pt-2 space-y-1 border-l-2 border-slate-800 ml-6">
                      {LESSONS.map(lesson => {
                        const lessonIsActive = location.pathname === `/lessons/${lesson.id}`;
                        return (
                          <Link
                            key={lesson.id}
                            to={`/lessons/${lesson.id}`}
                            className={cn(
                              "flex items-center gap-3 px-4 py-2 rounded-xl text-xs font-mono transition-all",
                              lessonIsActive
                                ? "bg-slate-800 text-emerald-400 border border-slate-700 shadow-inner font-bold"
                                : "text-slate-400 hover:text-slate-200 hover:bg-slate-900/50 border border-transparent"
                            )}
                          >
                            <span className={cn(
                              "w-8 text-center px-1.5 py-0.5 rounded text-[9px] font-bold",
                              lessonIsActive ? "bg-emerald-950 text-emerald-400" : "bg-slate-800 text-slate-400"
                            )}>
                              {getModuleCode(lesson.id)}
                            </span>
                            <span className="truncate">{lesson.title}</span>
                          </Link>
                        );
                      })}
                    </div>
                  </details>
                );
              }

              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    "flex items-center gap-3 px-4 py-3 rounded-lg text-[11px] uppercase tracking-widest font-bold border transition-all duration-200",
                    isActive 
                      ? "bg-slate-800 text-sky-400 border-slate-700 shadow-md" 
                      : "bg-transparent text-slate-400 border-transparent hover:bg-slate-800/50 hover:text-slate-200 hover:border-slate-700/50"
                  )}
                >
                  <Icon className="h-4 w-4 shrink-0" />
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* User / Session Footer Area */}
          <div className="p-4 border-t border-slate-800 bg-slate-950/50">
            <div className="p-4 bg-slate-950 border border-slate-800 rounded-lg flex flex-col items-center justify-center gap-2 shadow-inner">
              <span className="text-[9px] uppercase tracking-widest font-mono text-emerald-400 font-bold">
                System Active
              </span>
              <span className="text-[10px] text-slate-500 font-medium">
                M1-M3 & S1-S4 Modules Loaded
              </span>
            </div>
          </div>
        </aside>

        {/* Dynamic Route Viewport */}
        <main className="flex-1 overflow-y-scroll flex flex-col relative bg-slate-950">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/lessons" element={<Lessons />} />
            <Route path="/lessons/:id" element={<Lessons />} />
            <Route path="/practice" element={<PracticeBank />} />
            <Route path="/practice/:moduleId/:topic" element={<PracticePage />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}