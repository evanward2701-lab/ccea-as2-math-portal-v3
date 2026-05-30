```markdown
# Mermaid Diagrams for A21 Proofs and Partial Fractions

**Unit code:** A21  
**Topic ID:** A21ProofsAndPartialFractions  

## A21ProofsAndPartialFractionsMMD-001: Logic Flowchart for Proof by Contradiction  

**Source:** AI-proposed teaching enhancement, not present in supplied lesson evidence  
**Related lesson section:** 8.1  
**Used in placeholder:** `[VISUAL PLACEHOLDER: A21ProofsAndPartialFractionsMMD-001 | ...]`  
**Purpose:** Flowchart showing the logical steps of a proof by contradiction.  

### Creation Notes  
This Mermaid diagram uses a top-down flowchart to visually break down the abstract logical steps of a proof by contradiction. It highlights the "assumption of the opposite" and the "discovery of a contradiction" as the key pivot points in the argument.

```mermaid
graph TD
    A[Start: Given a statement to prove] --> B[Step 1: Negate the statement]
    B --> C[Assume this negated statement is TRUE]
    C --> D[Step 2: Perform logical mathematical steps<br/>based on this assumption]
    D --> E{Does this lead to<br/>a mathematical impossibility?}
    E -- Yes --> F[Step 3: A Contradiction is found!]
    F --> G[Conclusion: The assumption must be FALSE]
    G --> H[Therefore, the ORIGINAL statement is TRUE]
    E -- No --> I[Check your maths or try a different proof method]
    
    style A fill:#e1f5fe,stroke:#333,stroke-width:2px
    style C fill:#fff9c4,stroke:#333,stroke-width:2px
    style F fill:#ffcdd2,stroke:#333,stroke-width:2px
    style H fill:#c8e6c9,stroke:#333,stroke-width:2px
```
```

