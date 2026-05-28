# Mermaid Diagrams for AS1 Transformations of Trigonometric Graphs

## MMD-001: Effect of parameters on \(y = a\,f(bx + c) + d\)
Source: AI-proposed teaching enhancement, not present in lesson PDF  
Used in lesson placeholder: `[VISUAL PLACEHOLDER: MMD-001 | Source: AI-proposed teaching enhancement | Insert from AS1_transformations_mermaid.md | Purpose: concept map summarising the effect of each parameter]`  
Purpose: Summarises how the parameters \(a\), \(b\), \(c\) and \(d\) in the general transformation \(y = a\,f(bx + c) + d\) affect the graph of a trigonometric function.  

```mermaid
flowchart TD
    A[General transformation: y = a f(bx + c) + d]
    A --> B[Amplitude (vertical stretch)]
    A --> C[Horizontal factor (b)]
    A --> D[Horizontal shift (c)]
    A --> E[Vertical shift (d)]
    B --> B1[Amplitude = |a|]
    B --> B2[If a \(<0\): reflect in x-axis]
    C --> C1[Period = parent period / |b|]
    C --> C2[b \(> 1\): compress horizontally]
    C --> C3[0 < b < 1: stretch horizontally]
    D --> D1[Shift left by c when c \(> 0\)]
    D --> D2[Shift right by |c| when c \(< 0\)]
    E --> E1[Move up by d when d \(> 0\)]
    E --> E2[Move down by |d| when d \(< 0\)]
```

## MMD-002: Coordinate mapping for \(y = a\,f(bx + c) + d\)
Source: lesson PDF p.6  
Used in lesson placeholder: `[VISUAL PLACEHOLDER: MMD-002 | Source: lesson PDF p.6 | Insert from AS1_transformations_mermaid.md | Purpose: flowchart of coordinate mapping method]`  
Purpose: Shows how to map a point \((x_\text{old},y_\text{old})\) on the parent graph \(y = f(x)\) to a point \((x_\text{new},y_\text{new})\) on the transformed graph \(y = a\,f(bx + c) + d\).  

```mermaid
flowchart LR
    Start((Start with point (x_old, y_old) on y = f(x)))
    Start --> Step1[Compute new x-coordinate: x_new = (x_old − c) / b]
    Step1 --> Step2[Compute new y-coordinate: y_new = a·y_old + d]
    Step2 --> End((Point on y = a f(bx + c) + d: (x_new, y_new)))
```
