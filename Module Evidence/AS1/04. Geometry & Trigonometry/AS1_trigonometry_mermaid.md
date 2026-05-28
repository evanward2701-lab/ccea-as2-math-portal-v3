# Mermaid Diagrams for AS1 trigonometry

## MMD-001: Decision tree for choosing sine rule, cosine rule or area formula
Source: AI‑proposed teaching enhancement, not present in lesson PDF  
Used in lesson placeholder: `[VISUAL PLACEHOLDER: MMD‑001 | Source: AI‑proposed teaching enhancement | Insert from AS1_trigonometry_mermaid.md | Purpose: decision tree for choosing between sine rule, cosine rule and area formula]`  
Purpose: This flowchart helps students decide which trigonometric formula to use when solving a non right‑angled triangle.  It prompts them to check whether the triangle is right‑angled, what information is given (sides and angles) and whether the question asks for an area.  It emphasises that the sine rule applies when a known angle is opposite a known side (including ambiguous SSA cases), the cosine rule applies for SAS and SSS situations, and the area formula applies when two sides and the included angle are known.

```mermaid
graph TD
    Start[[Start: determine known values]] --> Right{Is the triangle right‑angled?}
    Right -->|Yes| RightTrig[Use SOH CAH TOA or Pythagoras]
    Right -->|No| Info{Known information?}
    Info -->|Two sides and included angle (SAS) or all three sides (SSS)| Cosine[Use Cosine Rule]
    Info -->|Two angles and one side (AAS/ASA) or two sides and a non‑included angle (SSA)| Sine[Use Sine Rule]
    Sine --> Ambig{Is it the SSA ambiguous case?}
    Ambig -->|Yes| AmbigCase[Consider 0, 1 or 2 solutions]
    Ambig -->|No| SolveSine[Solve normally]
    Cosine --> AreaQ{Need the area?}
    AreaQ -->|Yes| Area[Use area formula \(\tfrac{1}{2}ab\sin C\)]
    AreaQ -->|No| Done1[Compute unknowns]
    AmbigCase --> Done2[Compute possible solutions]
    SolveSine --> Done2
    RightTrig --> Done2
    Area --> Done1
    Done1 --> End1[Finish]
    Done2 --> End2[Finish]
```

---

## MMD-002: Decision tree for solving basic trigonometric equations
Source: AI‑proposed teaching enhancement, not present in lesson PDF  
Used in lesson placeholder: `[VISUAL PLACEHOLDER: MMD‑002 | Source: AI‑proposed teaching enhancement | Insert from AS1_trigonometry_mermaid.md | Purpose: decision tree for solving trigonometric equations]`  
Purpose: This flowchart outlines a systematic procedure for solving equations of the form \(\sin x = k\), \(\cos x = k\) and \(\tan x = k\) within a specified interval.  It guides students to determine the reference angle, decide which quadrants contain the solutions based on the sign of \(k\), and then list all solutions in the interval.

```mermaid
graph TD
    StartEq[[Start: solve \(f(x)=k\)]] --> Type{Which function?}
    Type -->|\(\sin x = k\)| Sin
    Type -->|\(\cos x = k\)| Cos
    Type -->|\(\tan x = k\)| Tan
    %% Sine branch
    Sin --> SinRA[Compute reference angle \(\alpha = \arcsin(|k|)\)]
    SinRA --> SinSign{Is \(k\) positive?}
    SinSign -->|Yes| SinPos[Solutions: \(x = \alpha\) or \(x = 180^\circ - \alpha\) (Quadrants I & II)]
    SinSign -->|No| SinNeg[Solutions: \(x = 180^\circ + \alpha\) or \(x = 360^\circ - \alpha\) (Quadrants III & IV)]
    %% Cosine branch
    Cos --> CosRA[Compute reference angle \(\alpha = \arccos(|k|)\)]
    CosRA --> CosSign{Is \(k\) positive?}
    CosSign -->|Yes| CosPos[Solutions: \(x = \alpha\) or \(x = 360^\circ - \alpha\) (Quadrants I & IV)]
    CosSign -->|No| CosNeg[Solutions: \(x = 180^\circ - \alpha\) or \(x = 180^\circ + \alpha\) (Quadrants II & III)]
    %% Tangent branch
    Tan --> TanRA[Compute reference angle \(\alpha = \arctan(|k|)\)]
    TanRA --> TanSign{Is \(k\) positive?}
    TanSign -->|Yes| TanPos[Solutions: \(x = \alpha + 180^\circ n\) (Quadrants I & III)]
    TanSign -->|No| TanNeg[Solutions: \(x = 180^\circ - \alpha + 180^\circ n\) (Quadrants II & IV)]
    %% Final note
    TanPos --> EndEq[Check the specified interval and list all solutions]
    TanNeg --> EndEq
    CosPos --> EndEq
    CosNeg --> EndEq
    SinPos --> EndEq
    SinNeg --> EndEq
```

---

## MMD-003: Concept map of trigonometry topics
Source: AI‑proposed teaching enhancement, not present in lesson PDF  
Used in lesson placeholder: `[VISUAL PLACEHOLDER: MMD‑003 | Source: AI‑proposed teaching enhancement | Insert from AS1_trigonometry_mermaid.md | Purpose: concept map connecting trigonometry topics]`  
Purpose: This concept map visually links the main subtopics of trigonometry covered in the AS1 course.  It shows how right‑angled trigonometry leads to the unit circle and exact values, how the unit circle informs graphs and identities, how identities feed into equation solving, and how the sine and cosine rules and area formula connect to more advanced problems.

```mermaid
graph LR
    RightTrig[Right‑angled trig \n(SOH CAH TOA)] --> UnitCircle[Unit circle & CAST]
    RightTrig --> ExactVals[Exact values \n& special triangles]
    UnitCircle --> Graphs[Graphs of \(\sin\), \(\cos\), \(\tan\)]
    Graphs --> Identities[Pythagorean & simple identities]
    Identities --> Equations[Solving trig equations]
    Equations --> MultiStep[Multi‑step problems]
    SineRule[Sine rule & \nambiguous case] --> MultiStep
    CosineRule[Cosine rule] --> MultiStep
    AreaFormula[Area formula \(\tfrac{1}{2}ab\sin C\)] --> MultiStep
    ExactVals --> Graphs
    UnitCircle --> Identities
```
