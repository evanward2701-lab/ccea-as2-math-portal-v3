# Mermaid Diagrams for AS1 Quadratic Functions

## MMD-001: Decision tree for choosing a solution method
Source: AI‑proposed teaching enhancement, not present in lesson PDF  
Used in lesson placeholder: `[VISUAL PLACEHOLDER: MMD-001 | Source: AI‑proposed teaching enhancement, not present in lesson PDF | Insert from AS1_quadratic_functions_mermaid.md | Purpose: decision tree to help students choose the best method for solving a quadratic equation]`  
Purpose: This flowchart guides learners through the decision process when selecting an appropriate method (factorising, completing the square or using the quadratic formula) to solve a quadratic equation.

```mermaid
flowchart TD
    Start([Start: quadratic equation ax^2 + bx + c = 0])
    Q1{Does it factorise easily?}
    Q2{Is completing the square straightforward?}
    Factorising["Use factorising method\n– write ax^2+bx+c=0,\n– factorise the left‑hand side,\n– set each factor to zero and solve"]
    CompletingSquare["Use completing the square\n– rewrite in vertex form,\n– solve by isolating the squared bracket"]
    QuadraticFormula["Use the quadratic formula\n– always works: x = (-b ± √(b²–4ac))/(2a)"]

    Start --> Q1
    Q1 -- Yes --> Factorising
    Q1 -- No --> Q2
    Q2 -- Yes --> CompletingSquare
    Q2 -- No --> QuadraticFormula
    Factorising --> End([Finish: obtain solutions])
    CompletingSquare --> End
    QuadraticFormula --> End
```

## MMD-002: Concept map linking quadratic features
Source: AI‑proposed teaching enhancement, not present in lesson PDF  
Used in lesson placeholder: `[VISUAL PLACEHOLDER: MMD-002 | Source: AI‑proposed teaching enhancement, not present in lesson PDF | Insert from AS1_quadratic_functions_mermaid.md | Purpose: concept map linking algebraic and graphical features of a quadratic function]`  
Purpose: This concept map summarises how different algebraic representations of a quadratic function relate to its graph, solutions and key properties.

```mermaid
graph LR
    F["Quadratic function f(x) = ax^2 + bx + c"]
    Graph["Graph: parabola"]
    Shape["Shape & direction: depends on the sign and magnitude of a"]
    Vertex["Turning point (vertex) and axis of symmetry"]
    Discriminant["Discriminant D = b² – 4ac"]
    Roots["Number of real roots / x‑intercepts"]
    Methods["Solution methods"]
    Fact["Factorising"]
    CS["Completing the square"]
    QF["Quadratic formula"]
    YInt["y‑intercept: (0,c)"]

    F --> Graph
    Graph --> Shape
    Graph --> Vertex
    Graph --> YInt
    F --> Discriminant
    Discriminant --> Roots
    F --> Methods
    Methods --> Fact
    Methods --> CS
    Methods --> QF
    CS --> Vertex
    Shape --> Roots
    Roots --> Graph
    YInt --> Graph
```
