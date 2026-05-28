# Mermaid Diagrams for AS1 Indices and Surds

## MMD-001: Surd Simplification Flowchart
Source: lesson PDF p.2  
Used in lesson placeholder: `[VISUAL PLACEHOLDER: MMD-001 | ...]`  
Purpose: to give a clear, repeatable procedure for simplifying a square root by extracting the largest square factor and checking if further simplification is possible.

```mermaid
flowchart TD
    A[Start with $\sqrt{n}$] --> B{Does $n$ have a square factor $>1$?}
    B -- No --> F[Result: $\sqrt{n}$ is already in simplest surd form]
    B -- Yes --> C[Write $n = k^2 \times m$ where $k$ is the largest integer $\leq \sqrt{n}$]
    C --> D[Rewrite $\sqrt{n} = \sqrt{k^2 \times m}$]
    D --> E[Extract the square root of $k^2$: $\sqrt{n} = k\sqrt{m}$]
    E --> B
```

The loop back to the decision box emphasises that you should continue checking $m$ for further square factors until no more can be extracted.  This flowchart is based on the method described in the lesson PDF and helps students follow a systematic process when simplifying surds.

## MMD-002: Index and Surd Laws Concept Map
Source: AI-proposed teaching enhancement, not present in lesson PDF  
Used in lesson placeholder: `[VISUAL PLACEHOLDER: MMD-002 | ...]`  
Purpose: to show how the eight laws of indices and the core surd rules are interrelated.  It serves as a high‑level revision tool linking the rules to their respective operations.

```mermaid
graph LR
    A([Index & Surd Laws])
    A --> B[Index laws]
    A --> C[Surd rules]
    %% Index law branches
    B --> B1[Multiplication: $a^m \times a^n = a^{m+n}$]
    B --> B2[Division: $a^m \div a^n = a^{m-n}$]
    B --> B3[Power of a power: $(a^m)^n = a^{mn}$]
    B --> B4[Product to a power: $(ab)^n = a^n b^n$]
    B --> B5[Quotient to a power: $(\tfrac{a}{b})^n = \tfrac{a^n}{b^n}$]
    B --> B6[Zero index: $a^0 = 1$]
    B --> B7[Negative index: $a^{-n} = \tfrac{1}{a^n}$]
    B --> B8[Fractional index: $a^{m/n} = (\sqrt[n]{a})^m$]
    %% Surd rules branches
    C --> C1[Product: $\sqrt{a}\,\sqrt{b} = \sqrt{ab}$]
    C --> C2[Quotient: $\tfrac{\sqrt{a}}{\sqrt{b}} = \sqrt{\tfrac{a}{b}}$]
    C --> C3[Simplification: $\sqrt{k^2 m} = k \sqrt{m}$]
    C --> C4[Rationalise denominator]
    C4 --> C4a[Simple: multiply top & bottom by $\sqrt{a}$]
    C4 --> C4b[Binomial: multiply by the conjugate $a \mp \sqrt{b}$]
```

This concept map groups the eight index laws under a single branch and the primary surd rules under another.  It highlights key formulas and illustrates the additional technique of rationalising denominators, connecting all the rules required by the specification.