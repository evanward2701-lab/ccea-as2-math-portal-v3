import React from 'react';
import { useQualification, Qualification } from '../context/QualificationContext';
import { cn } from '../utils/cn';

export function GlobalNav() {
  const { activeQualification, setActiveQualification } = useQualification();

  const tabs: { id: Qualification; label: string }[] = [
    { id: 'AS1', label: 'AS1 PURE' },
    { id: 'AS2', label: 'AS2 APPLIED' },
    { id: 'A2', label: 'A2 PURE' },
  ];

  return (
    <div className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-border/80 shrink-0">
      <div className="flex items-center justify-center gap-8 h-12 px-6">
        {tabs.map(tab => {
          const isActive = activeQualification === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveQualification(tab.id)}
              className={cn(
                "relative h-full px-4 text-2.75 uppercase tracking-[0.25em] font-bold transition-all duration-300 cursor-pointer",
                isActive 
                  ? "text-foreground" 
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {tab.label}
              {isActive && (
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary shadow-[0_0_8px_rgba(212,175,55,0.3)]" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
