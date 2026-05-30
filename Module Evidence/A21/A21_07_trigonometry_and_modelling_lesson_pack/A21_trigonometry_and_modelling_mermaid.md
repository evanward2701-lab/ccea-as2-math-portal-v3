```markdown
# A21_trigonometry_and_modelling_mermaid.md

**Unit code:** A21
**Topic ID:** A21TrigonometryAndModelling

## A21TrigonometryAndModellingMMD-001: Choosing the Right Cosine Double Angle Formula

**Source:** AI-proposed teaching enhancement, not present in supplied lesson evidence
**Related lesson section:** 8.2
**Used in placeholder:** `[VISUAL PLACEHOLDER: A21TrigonometryAndModellingMMD-001 | Source: AI-proposed teaching enhancement | Insert from A21_trigonometry_and_modelling_mermaid.md | Purpose: Flowchart for selecting the correct cos(2A) identity]`
**Purpose:** Helps students decide which of the three $\cos 2A$ identities to use when solving equations.

### Creation Notes
The transcript explicitly notes that choosing the correct double angle identity for $\cos 2x$ is a critical step in solving equations (e.g., Example 2). This flowchart visualises that decision-making process.

```mermaid
graph TD
    A[Equation contains cos 2x] --> B{What other trigonometric<br>terms are present?}
    B -->|Only cos x| C["Use: cos 2x ≡ 2cos²x - 1"]
    B -->|Only sin x| D["Use: cos 2x ≡ 1 - 2sin²x"]
    B -->|Mixture of sin x and cos x| E["Use: cos 2x ≡ cos²x - sin²x"]
    C --> F[Factorise and solve quadratic in cos x]
    D --> G[Factorise and solve quadratic in sin x]
    E --> H[Look for opportunities to factorise<br>or use tan x ≡ sin x / cos x]
    
    style A fill:#f9f2f4,stroke:#333,stroke-width:2px
    style C fill:#d4edda,stroke:#333,stroke-width:2px
    style D fill:#d4edda,stroke:#333,stroke-width:2px
    style E fill:#fff3cd,stroke:#333,stroke-width:2px
```
```

