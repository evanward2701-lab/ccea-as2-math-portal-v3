# Mermaid Diagrams for AS1 Integration Basics

## MMD-001: Concept map for integration
Source: AI‑proposed teaching enhancement, not present in lesson PDF  
Used in lesson placeholder: `[VISUAL PLACEHOLDER: MMD-001 | ...]`  
Purpose: Provide a high‑level concept map linking indefinite integration, definite integration, the power rule, constants of integration and areas.

```mermaid
graph TD
  A[Integration] --> B[Indefinite Integration]
  A --> C[Definite Integration]
  B --> B1[Reverse of differentiation]
  B --> B2[Power rule: ∫ x^n dx = x^{n+1}/(n+1) + C (n ≠ −1)]
  B --> B3[Add constant of integration C]
  C --> C1[Uses limits a and b]
  C --> C2[Find antiderivative F(x)]
  C --> C3[Evaluate F(b) − F(a)]
  C --> C4[Represents signed area under curve]
  C --> C5[No constant C needed]
  C4 --> D[Split integral for total area if f(x) crosses x‑axis]
```
