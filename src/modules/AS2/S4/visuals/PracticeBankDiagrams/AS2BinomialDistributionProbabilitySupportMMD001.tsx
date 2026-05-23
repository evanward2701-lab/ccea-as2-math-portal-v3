import React from 'react';
import { MermaidDiagram } from '@/core/diagram-engine/MermaidDiagram';
import { DiagramPanel } from '@/core/diagram-engine/DiagramPanel';

export const AS2BinomialDistributionProbabilitySupportMMD001: React.FC = () => (
  <DiagramPanel title="AS2BinomialDistributionProbabilitySupportMMD-001" analysis={null}>
    <div className="max-h-[400px] overflow-auto py-4">
      <MermaidDiagram chart={`flowchart TD
    A[Start with the context] --> B{Fixed number of trials?}
    B -- No --> X[Not a binomial model]
    B -- Yes --> C{Each trial has two outcomes?}
    C -- No --> X
    C -- Yes --> D{Same probability of success each trial?}
    D -- No --> X
    D -- Yes --> E{Trials independent?}
    E -- No --> X
    E -- Yes --> F[Use X ~ B(n, p)]

    F --> G{Question wording}
    G --> H[Exactly r: P(X = r)]
    G --> I[At most r: P(X <= r)]
    G --> J[Fewer than r: P(X < r)]
    G --> K[At least r: P(X >= r)]
    G --> L[More than r: P(X > r)]

    I --> M[Add probabilities from 0 to r]
    J --> N[Add probabilities from 0 to r - 1]
    K --> O[Often use complement: 1 - P(X <= r - 1)]
    L --> P[Often use complement: 1 - P(X <= r)]`} />
    </div>
  </DiagramPanel>
);
