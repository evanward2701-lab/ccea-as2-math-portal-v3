import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, Calculator } from "lucide-react";
import { cn } from "@/core/utils/cn";

export interface CalculatorStep {
  key: string;
  description: string;
  extraInfo?: string;
}

interface CalculatorMasteryProps {
  model?: string;
  steps: CalculatorStep[];
}

export function CalculatorMastery({ model = "Casio fx-991EX ClassWiz", steps }: CalculatorMasteryProps) {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 0));

  if (!steps || steps.length === 0) return null;

  return (
    <div className="my-12 max-w-2xl mx-auto bg-card border border-primary/20 rounded-2xl shadow-xl overflow-hidden backdrop-blur-sm relative">
      {/* Header */}
      <div className="bg-primary/5 border-b border-primary/20 p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-primary/10 rounded-lg text-primary">
            <Calculator className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-primary mb-0.5">Calculator Guide</h3>
            <p className="text-xs font-mono text-muted-foreground">{model}</p>
          </div>
        </div>
        <div className="text-xs font-mono font-bold text-primary bg-primary/10 border border-primary/20 px-2 py-1 rounded">
          {currentStep + 1} / {steps.length}
        </div>
      </div>

      {/* Content Area */}
      <div className="p-8 relative min-h-[220px] flex flex-col justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="flex flex-col items-center text-center"
          >
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-foreground text-background font-mono text-xl font-bold rounded-lg shadow-sm border-b-4 border-foreground/50">
                {steps[currentStep].key}
              </span>
            </div>
            <h4 className="text-2xl font-serif text-foreground mb-3">
              {steps[currentStep].description}
            </h4>
            {steps[currentStep].extraInfo && (
              <p className="text-muted-foreground font-sans text-sm max-w-sm">
                {steps[currentStep].extraInfo}
              </p>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Footer Navigation */}
      <div className="bg-muted/30 p-4 flex items-center justify-between border-t border-border/50">
        <button
          onClick={prevStep}
          disabled={currentStep === 0}
          className="flex items-center gap-2 px-4 py-2 text-sm font-mono uppercase tracking-wider text-muted-foreground hover:text-foreground disabled:opacity-30 transition-colors"
        >
          <ChevronLeft className="w-4 h-4" /> Prev
        </button>
        <div className="flex gap-1.5">
          {steps.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentStep(idx)}
              className={cn(
                "w-2 h-2 rounded-full transition-all duration-300",
                currentStep === idx ? "bg-primary w-6" : "bg-primary/20 hover:bg-primary/40"
              )}
              aria-label={`Go to step ${idx + 1}`}
            />
          ))}
        </div>
        <button
          onClick={nextStep}
          disabled={currentStep === steps.length - 1}
          className="flex items-center gap-2 px-4 py-2 text-sm font-mono uppercase tracking-wider text-primary hover:text-primary/80 disabled:opacity-30 transition-colors"
        >
          Next <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
