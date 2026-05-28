# Mermaid Diagrams for AS1 differentiation

This file contains the Mermaid diagrams referenced in the main lesson on differentiation.  Each diagram is presented with a clear title, its source, the placeholder used in the lesson file and a brief explanation of its purpose.  Copy the code blocks into a Markdown processor that supports Mermaid to render the diagrams.

## MMD‑001: First Principles Differentiation Flowchart
Source: lesson PDF p.1  
Used in lesson placeholder: `[VISUAL PLACEHOLDER: MMD-001 | Source: lesson PDF p.1 | Insert from AS1_differentiation_mermaid.md | Purpose: illustrate the step‑by‑step process of differentiating from first principles]`  
Purpose: This flowchart summarises the five key steps involved when differentiating a function from first principles.  It begins with the original function, constructs the secant‑difference quotient and ends with the derivative as the limit of this quotient as \(h\) tends to zero.

```mermaid
graph TD
    A([Start]) --> B[Write \(f(x)\)]
    B --> C[Compute \(f(x+h)\)]
    C --> D[Form \(f(x+h) - f(x)\)]
    D --> E[Divide by \(h\)]
    E --> F[Take the limit \(h\to 0\)]
    F --> G[Result: \(f'(x)\)]
    G --> H([End])
```

## MMD‑002: Stationary Point Classification Decision Tree
Source: AI‑proposed teaching enhancement, not present in lesson PDF  
Used in lesson placeholder: `[VISUAL PLACEHOLDER: MMD-002 | Source: AI-proposed teaching enhancement, not present in lesson PDF | Insert from AS1_differentiation_mermaid.md | Purpose: summarise stationary point classification using the second derivative or a sign table]`  
Purpose: This decision tree guides you through the process of classifying stationary points once they have been located by solving \(f'(x)=0\).  It branches according to the sign of the second derivative and, if necessary, examines the sign of the first derivative on either side of the point to determine whether it is a maximum, minimum or stationary point of inflection.

```mermaid
graph TD
    S[Start: Solve \(f'(x)=0\) to find stationary point \(x=a\)] --> Q{Compute \(f''(a)\)}
    Q -->|\(f''(a) > 0\)| M[Local minimum]
    Q -->|\(f''(a) < 0\)| K[Local maximum]
    Q -->|\(f''(a) = 0\)| R{Check sign of \(f'(x)\) either side of \(a\)}
    R -->|changes from + to −| K
    R -->|changes from − to +| M
    R -->|no change| I[Stationary point of inflection]
    M --> E([End])
    K --> E
    I --> E
```