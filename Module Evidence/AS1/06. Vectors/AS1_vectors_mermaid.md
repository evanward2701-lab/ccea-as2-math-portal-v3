# Mermaid Diagrams for AS1 Vectors

## MMD-001: Velocity to Distance Flowchart
Source: AI-proposed teaching enhancement, not present in lesson PDF  
Used in lesson placeholder: `[VISUAL PLACEHOLDER: MMD-001 | ...]`  
Purpose: Summarise the modelling process from velocity vector to distance using a flowchart.

```mermaid
graph TD
    A([Start with velocity vector \(\mathbf{v}\) and time \(t\)])
    B{Calculate speed}
    C[\(|\mathbf{v}| = \sqrt{x^2 + y^2}\)]
    D{Convert time}
    E[Convert \(t\) into hours or consistent units]
    F{Compute distance}
    G[Distance \(= |\mathbf{v}| \times t\)]
    H([Include units and interpret])
    A --> B
    B --> C
    C --> D
    D --> E
    E --> F
    F --> G
    G --> H
```
