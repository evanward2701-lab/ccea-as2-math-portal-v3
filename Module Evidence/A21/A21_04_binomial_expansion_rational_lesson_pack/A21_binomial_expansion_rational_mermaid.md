```markdown
# A21_binomial_expansion_rational_mermaid.md

**Unit code:** A21
**Topic ID:** A21BinomialExpansionRational

## A21BinomialExpansionRationalMMD-001: Expansion Decision Flowchart

**Source:** AI-proposed teaching enhancement, not present in supplied lesson evidence
**Related lesson section:** 8
**Used in placeholder:** `[VISUAL PLACEHOLDER: A21BinomialExpansionRationalMMD-001 | ...]`
**Purpose:** Guides students through the decision process of whether to factor out a constant before applying the binomial formula.

### Creation Notes
This flowchart helps students avoid the common mistake of applying the binomial formula directly to $(a+bx)^n$ when $a \neq 1$. It visually separates the two pathways.

```mermaid
graph TD
    A[Expression to expand: <br> bracket to power n] --> B{Is the first term <br> inside the bracket exactly 1?}
    B -- Yes --> C[Apply formula directly: <br> 1 + nx + ...]
    B -- No --> D[Factor out the first term 'a']
    D --> E[Apply power 'n' to 'a' outside <br> and to the new bracket]
    E --> F[Expand the new bracket <br> 1 + n(b/a)x + ...]
    F --> G[Multiply every term in the <br> expansion by a^n]
    C --> H[Determine validity: <br> |x term| < 1]
    G --> H
```
```
