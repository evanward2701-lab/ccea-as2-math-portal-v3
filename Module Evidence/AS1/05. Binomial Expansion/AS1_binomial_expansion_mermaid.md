# Mermaid Diagrams for AS1 binomial expansion

## MMD‑001: Binomial Expansion Flowchart
Source: AI‑proposed teaching enhancement, not present in lesson PDF  
Used in lesson placeholder: `[VISUAL PLACEHOLDER: MMD‑001 | ...]`  
Purpose: Summarise the steps for expanding $(a+b)^n$ and ordering terms in ascending powers of $x$.

```mermaid
flowchart TD
    A[Identify $a$ and $b$ in $(a+b)^n$] --> B[Decide how many terms are needed and write down $n$]
    B --> C[Obtain coefficients from Pascal's triangle or compute $\binom{n}{r}$]
    C --> D[Write general term $T(r+1) = \binom{n}{r}\,a^{n-r}\,b^r$]
    D --> E[Compute each term for $r=0,1,2,\dots$]
    E --> F[Order the terms in ascending powers of $x$ (if $b$ contains $x$)]
    F --> G[Check coefficients and simplify numerical factors]
```
