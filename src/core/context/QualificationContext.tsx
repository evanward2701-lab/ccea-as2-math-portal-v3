import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Qualification = 'AS1' | 'AS2' | 'A2';

interface QualificationContextType {
  activeQualification: Qualification;
  setActiveQualification: (q: Qualification) => void;
}

const QualificationContext = createContext<QualificationContextType | undefined>(undefined);

const isQualification = (value: string | null): value is Qualification =>
  value === 'AS1' || value === 'AS2' || value === 'A2';

const getInitialQualification = (): Qualification => {
  if (typeof window === 'undefined') return 'AS2';

  const path = window.location.pathname;
  if (/^\/(?:lessons\/P\d-Lesson|practice\/P\d(?:\/|$))/.test(path)) return 'AS1';
  if (/^\/(?:lessons\/[MS]\d-Lesson|practice\/[MS]\d(?:\/|$))/.test(path)) return 'AS2';

  const savedQualification = window.localStorage.getItem('activeQualification');
  return isQualification(savedQualification) ? savedQualification : 'AS2';
};

export function QualificationProvider({ children }: { children: ReactNode }) {
  const [activeQualification, setActiveQualificationState] = useState<Qualification>(getInitialQualification);

  const setActiveQualification = (qualification: Qualification) => {
    setActiveQualificationState(qualification);
    window.localStorage.setItem('activeQualification', qualification);
  };

  return (
    <QualificationContext.Provider value={{ activeQualification, setActiveQualification }}>
      {children}
    </QualificationContext.Provider>
  );
}

export function useQualification() {
  const context = useContext(QualificationContext);
  if (context === undefined) {
    throw new Error('useQualification must be used within a QualificationProvider');
  }
  return context;
}
