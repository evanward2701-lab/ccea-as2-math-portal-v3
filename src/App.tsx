import { Routes, Route, Link, useLocation } from "react-router-dom";
import { BookOpen, GraduationCap, LayoutDashboard, BrainCircuit } from "lucide-react";
import { Dashboard } from "./pages/Dashboard";
import { Lessons } from "./pages/Lessons";
import { PracticeBank } from "./pages/PracticeBank";
import { cn } from "@/lib/utils";

export default function App() {
  return (
    <div className="flex flex-col h-screen bg-[#FAF9F6] text-[#1A1A1A] font-sans overflow-hidden select-none">
      {/* Header Navigation */}
      <nav className="h-16 border-b border-[#1A1A1A] flex items-center justify-between px-8 bg-white z-10 shrink-0">
        <div className="flex items-center gap-8">
          <span className="font-serif italic text-2xl font-bold tracking-tighter">AS2 Mathematics</span>
          <div className="h-4 w-[1px] bg-[#1A1A1A]/20"></div>
          <span className="text-[10px] uppercase tracking-widest font-semibold text-[#1A1A1A]/60">CCEA Specification / Revision Portal</span>
        </div>
      </nav>
      <div className="flex-1 flex overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-auto flex flex-col">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/lessons" element={<Lessons />} />
            <Route path="/lessons/:id" element={<Lessons />} />
            <Route path="/practice" element={<PracticeBank />} />
          </Routes>
        </main>
      </div>
      {/* Footer Bar */}
      <footer className="h-10 border-t border-[#1A1A1A] bg-white flex items-center justify-between px-8 text-[9px] uppercase tracking-[0.2em] font-bold shrink-0">
        <span>CCEA Approved Content / © 2026 MathPortal</span>
        <div className="flex gap-8">
          <span>Topic Coverage: 84%</span>
          <span>Confidence Score: 92</span>
        </div>
      </footer>
    </div>
  );
}

function Sidebar() {
  const location = useLocation();

  const links = [
    { name: "Overview", path: "/", icon: LayoutDashboard },
    { name: "AS2 Lessons", path: "/lessons", icon: BookOpen },
    { name: "Practice Bank", path: "/practice", icon: BrainCircuit },
  ];

  return (
    <aside className="w-64 border-r border-[#1A1A1A] flex flex-col bg-white shrink-0">
      <nav className="flex-1 px-4 py-8 space-y-4">
        {links.map((link) => {
          const Icon = link.icon;
          const isActive = location.pathname === link.path || (link.path !== '/' && location.pathname.startsWith(link.path));
          
          return (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-none text-[11px] uppercase tracking-widest font-bold border transition-colors",
                isActive 
                  ? "bg-[#1A1A1A] text-white border-[#1A1A1A]" 
                  : "bg-white text-[#1A1A1A] border-transparent hover:border-[#1A1A1A]"
              )}
            >
              <Icon className="h-4 w-4 shrink-0" />
              {link.name}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-[#1A1A1A]">
        <div className="p-3 bg-[#FAF9F6] border border-[#1A1A1A] flex flex-col items-center justify-center gap-2">
          <div className="h-2 text-lg font-serif leading-none italic opacity-40">+</div>
          <p className="text-[9px] font-bold uppercase tracking-widest text-center mt-2">AS2 Curriculum Loaded</p>
        </div>
      </div>
    </aside>
  );
}
