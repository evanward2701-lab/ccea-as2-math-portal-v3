import { Routes, Route, Link, useLocation } from "react-router-dom";
import { BookOpen, GraduationCap, LayoutDashboard, BrainCircuit } from "lucide-react";
import { Dashboard } from "./pages/Dashboard";
import { Lessons } from "./pages/Lessons";
import { PracticeBank } from "./pages/PracticeBank";
import { PracticePage } from "./pages/PracticePage";
import CompareDerivationDiagramsPage from "./pages/CompareDerivationDiagramsPage";
import { cn } from "@/core/utils/cn";
import { LESSONS as AS2_LESSONS } from "@/modules/AS2/data/lessons";
import { LESSONS as AS1_LESSONS } from "@/modules/AS1/data/lessons";
import { LESSONS as A21_LESSONS } from "@/modules/A21/data/lessons";
import { QualificationProvider, useQualification } from "@/core/context/QualificationContext";
import { GlobalNav } from "@/core/components/GlobalNav";

const getModuleCode = (moduleId: string) => moduleId.replace("-Lesson", "");

function AppLayout() {
  const location = useLocation();
  const { activeQualification } = useQualification();

  const mainLinks = [
    { name: "Dashboard", path: "/", icon: LayoutDashboard },
    { name: "Course Modules", path: "/lessons", icon: BookOpen },
    { name: "Practice Bank", path: "/practice", icon: BrainCircuit },
    { name: "Compare Diagrams", path: "/compare", icon: BrainCircuit },
  ];

  const currentLessons = activeQualification === 'AS1' ? AS1_LESSONS : activeQualification === 'AS2' ? AS2_LESSONS : activeQualification === 'A2' ? A21_LESSONS : [];

  return (
    <div className="flex flex-col h-screen bg-background text-foreground font-sans overflow-hidden select-none">
      <GlobalNav />
      {/* Header Navigation */}
      <nav className="h-16 border-b border-border flex items-center justify-between px-8 bg-background z-10 shrink-0 shadow-sm">
        <div className="flex items-center gap-8">
          <span className="font-serif italic text-2xl font-bold tracking-tighter text-foreground flex items-center gap-3">
            <GraduationCap className="h-6 w-6 text-primary" />
            {activeQualification} Mathematics
          </span>
          <div className="h-4 w-px bg-border"></div>
          <span className="text-2.5 uppercase tracking-widest font-semibold text-muted-foreground">
            CCEA Specification / Revision Portal
          </span>
        </div>
      </nav>

      <div className="flex-1 flex overflow-hidden">
        {/* Main Sidebar Layout */}
        <aside className="w-64 border-r border-border flex flex-col bg-card shrink-0 shadow-xl z-20 h-full overflow-y-auto">
          <nav className="flex-1 px-4 py-8 space-y-2">
            {mainLinks.map((link) => {
              const Icon = link.icon;
              const isCourseModules = link.name === "Course Modules";
              const isActive = location.pathname === link.path || (link.path !== '/' && location.pathname.startsWith(link.path));
              
              if (isCourseModules) {
                return (
                  <details key={link.path} className="group" open={isActive}>
                    <summary className={cn(
                      "flex items-center gap-3 px-4 py-3 rounded-lg text-2.75 uppercase tracking-widest font-bold border transition-all duration-200 cursor-pointer list-none",
                      isActive 
                        ? "bg-accent text-accent-foreground border-border shadow-md" 
                        : "bg-transparent text-muted-foreground border-transparent hover:bg-muted/50 hover:text-foreground hover:border-border/50"
                    )}>
                      <Icon className="h-4 w-4 shrink-0" />
                      <span>{link.name}</span>
                    </summary>
                    <div className="pl-5 pt-2 space-y-1 border-l-2 border-border ml-6">
                      {currentLessons.length === 0 ? (
                         <div className="px-4 py-2 text-2.5 text-muted-foreground italic">No modules available</div>
                      ) : (
                        currentLessons.map(lesson => {
                          const lessonIsActive = location.pathname === `/lessons/${lesson.id}`;
                          return (
                            <Link
                              key={lesson.id}
                              to={`/lessons/${lesson.id}`}
                              className={cn(
                                "flex items-center gap-3 px-4 py-2 rounded-xl text-xs font-mono transition-all",
                                lessonIsActive
                                  ? "bg-primary/10 text-primary border border-primary/20 shadow-inner font-bold"
                                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50 border border-transparent"
                              )}
                            >
                              <span className={cn(
                                "w-8 text-center px-1.5 py-0.5 rounded text-2.25 font-bold",
                                lessonIsActive ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                              )}>
                                {getModuleCode(lesson.id)}
                              </span>
                              <span className="truncate">{lesson.title}</span>
                            </Link>
                          );
                        })
                      )}
                    </div>
                  </details>
                );
              }

              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    "flex items-center gap-3 px-4 py-3 rounded-lg text-2.75 uppercase tracking-widest font-bold border transition-all duration-200",
                    isActive 
                      ? "bg-accent text-accent-foreground border-border shadow-md" 
                      : "bg-transparent text-muted-foreground border-transparent hover:bg-muted/50 hover:text-foreground hover:border-border/50"
                  )}
                >
                  <Icon className="h-4 w-4 shrink-0" />
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* User / Session Footer Area */}
          <div className="p-4 border-t border-border bg-muted/30">
            <div className="p-4 bg-background border border-border rounded-lg flex flex-col items-center justify-center gap-2 shadow-inner">
              <span className="text-2.25 uppercase tracking-widest font-mono text-primary font-bold">
                System Active
              </span>
              <span className="text-2.5 text-muted-foreground font-medium text-center">
                {activeQualification} Modules Loaded
              </span>
            </div>
          </div>
        </aside>

        {/* Dynamic Route Viewport */}
        <main className="flex-1 overflow-y-scroll flex flex-col relative bg-background">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/lessons" element={<Lessons />} />
            <Route path="/lessons/:id" element={<Lessons />} />
            <Route path="/practice" element={<PracticeBank />} />
            <Route path="/practice/:moduleId/:topic" element={<PracticePage />} />
            <Route path="/compare" element={<CompareDerivationDiagramsPage />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <QualificationProvider>
      <AppLayout />
    </QualificationProvider>
  );
}
