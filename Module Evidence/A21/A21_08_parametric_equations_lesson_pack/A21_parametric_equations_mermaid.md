```markdown
# A21_parametric_equations_mermaid.md

**Unit code:** A21  
**Topic ID:** A21ParametricEquations  

## A21ParametricEquationsMMD-001: Intersection Strategy Flowchart  

**Source:** AI-proposed teaching enhancement, not present in supplied lesson evidence  
**Related lesson section:** 8.5  
**Used in placeholder:** `[VISUAL PLACEHOLDER: A21ParametricEquationsMMD-001 | ...]`  
**Purpose:** Flowchart showing the decision process for finding intersections (Stay in Parametric vs Convert to Cartesian).  

### Creation Notes  
This flowchart guides students on the most efficient exam technique when dealing with intersections involving parametric equations.  

```mermaid
graph TD
    A[Find Intersection] --> B{What are you intersecting?}
    B -->|Curve crosses x-axis| C[Set y = 0]
    B -->|Curve crosses y-axis| D[Set x = 0]
    B -->|Curve meets a straight line| E[Substitute x(t) and y(t) into line equation]
    
    C --> F[Solve for t]
    D --> F
    E --> F
    
    F --> G[Substitute t back into x(t) and y(t)]
    G --> H[State final x, y coordinates]
    
    style E fill:#d4edda,stroke:#28a745,stroke-width:2px
    style F fill:#fff3cd,stroke:#28a745,stroke-width:2px
```
