```markdown
A21_integration_mermaid.md
```

```markdown
# Mermaid Diagrams for A21 Integration  

**Unit code:** A21  
**Topic ID:** A21Integration  

## A21IntegrationMMD-001: Integration Strategy Flowchart  

**Source:** Transcript & PowerPoint slide 2  
**Related lesson section:** 8.1  
**Used in placeholder:** `[VISUAL PLACEHOLDER: A21IntegrationMMD-001 | Source: Transcript & PowerPoint slide 2 | Insert from A21_integration_mermaid.md | Purpose: Flowchart showing the decision-making process for integration techniques]`  
**Purpose:** Flowchart showing the decision-making process for selecting an integration technique.  

### Creation Notes  
This Mermaid diagram represents the hierarchical decision-making process taught in the lesson transcript. Mermaid is the right format because it cleanly handles top-down logical flowcharts, making it easy for students to follow the "if this, then that" logic of integration.  

```mermaid
graph TD
    Start([Start: Look at the Integrand]) --> Q1{Is it a Standard Result?}
    Q1 -- Yes --> A1[Integrate directly / Apply linear scaling]
    Q1 -- No --> Q2{Can I manipulate it?}
    Q2 -- Yes --> A2[Use Trig Identities or Expand Brackets]
    Q2 -- No --> Q3{Is it a Reverse Chain Rule?}
    Q3 -- Yes --> A3[Consider the original function, differentiate, and scale]
    Q3 -- No --> Q4{Is it a Fraction?}
    
    Q4 -- Yes --> F1{Single term in denominator?}
    F1 -- Yes --> FA1[Split the numerator]
    F1 -- No --> F2{Is it top-heavy?}
    F2 -- Yes --> FA2[Algebraic Long Division]
    F2 -- No --> F3{Can denominator be factorised?}
    F3 -- Yes --> FA3[Partial Fractions]
    F3 -- No --> Sub[Last Resort: Substitution]
    
    Q4 -- No --> Q5{Is it a Product?}
    Q5 -- Yes --> A5[Integration by Parts]
    Q5 -- No --> Sub
    
    A5 --> LIATE[Use LIATE to choose u and v']
```
```