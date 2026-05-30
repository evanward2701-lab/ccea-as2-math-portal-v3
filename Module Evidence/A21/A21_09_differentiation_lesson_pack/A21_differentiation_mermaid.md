```markdown
# A21_differentiation_mermaid.md

# Mermaid Diagrams for A21 Differentiation  

**Unit code:** A21  
**Topic ID:** A21Differentiation  

## A21DifferentiationMMD-001: Chain Rule Decision Flowchart  

**Source:** AI-proposed teaching enhancement, not present in supplied lesson evidence  
**Related lesson section:** 8.2  
**Used in placeholder:** `[VISUAL PLACEHOLDER: A21DifferentiationMMD-001 | ...]`  
**Purpose:** Flowchart showing the layers of the Chain Rule for composite functions.  

### Creation Notes  
This flowchart breaks down the mental process of the "blah" method described in the transcript. It visually separates the outer function from the inner function, showing how they are differentiated separately and then multiplied.

```mermaid
graph TD
    A[Start: Identify Composite Function y = f(g(x))] --> B{Can you spot the inner function?}
    B -->|Yes| C[Let inner function = 'blah' or u]
    B -->|No| D[Look for brackets, powers, or exponents]
    D --> C
    C --> E[Differentiate the outer function f('blah')]
    E --> F[Differentiate the inner function 'blah']
    F --> G[Multiply them together: f'('blah') * 'blah'']
    G --> H[Final Result: dy/dx]
    
    style A fill:#f9f,stroke:#333,stroke-width:2px
    style H fill:#ccf,stroke:#333,stroke-width:2px
```
```
