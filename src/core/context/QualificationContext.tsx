import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Qualification = 'AS1' | 'AS2' | 'A2';

interface QualificationContextType {
  activeQualification: Qualification;
  setActiveQualification: (q: Qualification) => void;
}

const QualificationContext = createContext<QualificationContextType | undefined>(undefined);

export function QualificationProvider({ children }: { children: ReactNode }) {
  const [activeQualification, setActiveQualification] = useState<Qualification>('AS2');

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
