import { PracticeQuestion } from "@/types";

export const QUESTIONS: PracticeQuestion[] = [
  {
    id: "M1-Q1",
    moduleId: "M1",
    topic: "Units & Modelling",
    type: "Targeted Practice",
    marks: 3,
    questionMarkdown: `
A rescue vehicle is towing a broken-down car along a straight horizontal road. They are joined by a rigid tow bar.

![visual:M1-Towing]()

(a) State the SI base unit of mass.
(b) Explain what the modelling assumptions "rigid" and "light" imply about the tow bar.
`,
    markSchemeMarkdown: `
(a) kilogram (or kg) [MW1]

(b) "Rigid" implies the tow bar will not bend or buckle (it maintains a constant distance between the vehicles) [W1].  
"Light" implies the tow bar has zero or negligible mass [W1].
`
  },
  {
    id: "M2-Q1",
    moduleId: "M2",
    topic: "Constant Acceleration",
    type: "Exam-Style",
    marks: 6,
    questionMarkdown: `
A cyclist accelerates at a constant rate from a velocity of $4 \\text{ m s}^{-1}$ to $7.5 \\text{ m s}^{-1}$ in 40 seconds.

![visual:M2-VTS]()

(a) Find the distance she travels in these 40 seconds.
(b) Find her acceleration in these 40 seconds.
`,
    markSchemeMarkdown: `
**(a)**
$s = \\frac{u+v}{2}t$ [M1]
$s = \\frac{4+7.5}{2}(40)$ [W1]
$s = 230 \\text{ m}$ [A1]

**(b)**
$v = u + at \\Rightarrow a = \\frac{v-u}{t}$ [M1]
$a = \\frac{7.5-4}{40}$ [W1]
$a = 0.0875 \\text{ m s}^{-2}$ [A1]
`
  },
  {
    id: "M3-Q1",
    moduleId: "M3",
    topic: "Connected Particles",
    type: "Exam-Style",
    marks: 8,
    questionMarkdown: `
A woman travels in a lift. The mass of the woman is $50 \\text{ kg}$ and the mass of the lift is $950 \\text{ kg}$. The lift is being raised vertically by a vertical cable attached to the top of the lift. The lift is moving upwards and has a constant deceleration of $2 \\text{ m s}^{-2}$.

![visual:M3-Lift]()

By modelling the cable as being light and inextensible:
(a) Find the tension in the cable.
(b) Find the magnitude of the force exerted on the woman by the floor of the lift.
`,
    markSchemeMarkdown: `
**(a)** Treat the lift and woman as a whole system. Total mass = $1000 \\text{ kg}$.
Since the lift is moving upwards but decelerating, acceleration $a = -2 \\text{ m s}^{-2}$ (taking upwards as positive).
Resolve upwards: 
$T - 1000g = 1000a$ [M1]
$T - 1000(9.8) = 1000(-2)$ [W1]
$T - 9800 = -2000 \\Rightarrow T = 7800 \\text{ N}$ [A1]

**(b)** Zoom in and treat the woman as a single particle. Let $R$ be the normal reaction from the floor.
Resolve upwards:
$R - 50g = 50a$ [M1]
$R - 50(9.8) = 50(-2)$ [W1]
$R - 490 = -100 \\Rightarrow R = 390 \\text{ N}$ [A1]
`
  },
  {
    id: "S1-Q1",
    moduleId: "S1",
    topic: "Sampling",
    type: "Exam-Style",
    marks: 3,
    questionMarkdown: `
(a) Explain the exact difference between a census and a sample.
(b) Give one disadvantage of using a census.

![visual:S1-Sampling]() 
`,
    markSchemeMarkdown: `
(a) A census collects data from every single member of the population [MW1], whereas a sample collects data from only a selected smaller group (or subset) of the population [MW1].

(b) A census is usually very time-consuming (or expensive/difficult to process) [W1].
`
  },
  {
    id: "S2-Q1",
    moduleId: "S2",
    topic: "Data Presentation & PMCC",
    type: "Exam-Style",
    marks: 7, // Increased marks to accommodate the residual evaluation part
    questionMarkdown: `
A researcher calculates the Product-Moment Correlation Coefficient (PMCC) for a data set of 12 paired observations and obtains a value of $r = 0.78$. 

![visual:S2-PMCC]()

(a) Explain what this $r$ value indicates about the linear correlation of the data.

(b) To validate the model, the researcher plots the residuals ($e = y - \\hat{y}$) against the independent variable $x$, yielding the diagnostic diagram below:

![visual:S2-Residual]()

State, with a reason, whether a linear regression model is appropriate for this data set.
`,
    markSchemeMarkdown: `
**(a)**
The value $r = 0.78$ indicates a **strong positive linear correlation** between the variables [W1].

**(b)**
A linear regression model is **not appropriate** for this data set [W1]. 
**Reason:** The residual plot displays a distinct, non-random **parabolic pattern/curve** rather than a random scatter around the zero line [W1]. This indicates that a non-linear relationship exists, which invalidates the linear model fit [W1].
`
  },
  // Append or replace within the QUESTIONS array inside src/data/questions.ts

  {
    id: "S3-Q1",
    moduleId: "S3",
    topic: "Venn Configurations & General Addition Law",
    type: "Targeted Practice",
    marks: 4,
    questionMarkdown: `
A high-precision engineering lab records two types of independent component faults: electrical ($A$) and mechanical ($B$). A student is reviewing the abstract Venn boundaries for these operations in the workspace panel below:

![visual:S3-Venn]()

Given that $P(A) = 0.25$ and $P(B) = 0.40$, calculate the value of $P(A \\cup B)$ under the following distinct layout conditions:
(a) The faults are explicitly stated to be **mutually exclusive**.
(b) The faults are **independent**.
`,
    markSchemeMarkdown: `
**(a) Mutually Exclusive Case**
If the events are mutually exclusive, they cannot overlap in the sample field, meaning $P(A \\cap B) = 0$ [M1].
Apply the General Addition Law:
$$P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$$
$$P(A \\cup B) = 0.25 + 0.40 - 0 = 0.65$$ [W1]

**(b) Independent Case**
If the faults are independent, their simultaneous intersection is defined by the multiplication rule: $P(A \\cap B) = P(A) \\times P(B)$ [M1].
$$P(A \\cap B) = 0.25 \\times 0.40 = 0.10$$ [A1]
Substitute back into the General Addition Law:
$$P(A \\cup B) = 0.25 + 0.40 - 0.10 = 0.55$$ [W1]
`
  },
  {
    id: "S3-Q2",
    moduleId: "S3",
    topic: "Two-Way Contingency Tables",
    type: "Exam-Style",
    marks: 5,
    questionMarkdown: `
A local CCEA school analyzes student choices between studying Technology ($A$) or Art ($A'$). The structural cross-cells represent gender groupings across Event $B$ (Male) and Event $B'$ (Female), mapped to the universal total baseline space:

![visual:S3-Table]()

The underlying raw frequencies yield the following baseline probabilities:
* $P(A) = 0.60$
* $P(B) = 0.50$
* $P(A \\cap B) = 0.20$

(a) Complete the missing cells to find the marginal total $P(A' \\cap B')$.
(b) Determine whether the choice of studying Technology ($A$) is **independent** of gender ($B$). Show clear mathematical proof.
`,
    markSchemeMarkdown: `
**(a) Table Resolution**
Using row and column sum constraints from the marginal boundaries:
1. Find $P(A') = 1.0 - P(A) = 1.0 - 0.60 = 0.40$ [M1]
2. Find $P(A' \\cap B)$ from the Male row: $P(B) - P(A \\cap B) = 0.50 - 0.20 = 0.30$ [A1]
3. Find $P(A' \\cap B')$ from the Art column: $P(A') - P(A' \\cap B) = 0.40 - 0.30 = 0.10$ [A1]

Hence, $P(A' \\cap B') = 0.10$.

**(b) Test for Independence**
Test if $P(A \\cap B) = P(A) \\times P(B)$ [M1].
$$\\text{Product Pool: } P(A) \\times P(B) = 0.60 \\times 0.50 = 0.30$$
$$\\text{Actual Intersection: } P(A \\cap B) = 0.20$$
Since $0.20 \\neq 0.30$, the events are **not independent** [W1]. 
*(Alternative method: $P(A|B) = \\frac{0.20}{0.50} = 0.40$. Since $P(A|B) \\neq P(A)$, they are dependent.)*
`
  },
  {
    id: "S3-Q3",
    moduleId: "S3",
    topic: "Tree Diagrams & Product Rule",
    type: "Exam-Style",
    marks: 5,
    questionMarkdown: `
A quality control process tests components sequentially across two distinct verification filters. The operational branch configurations are represented below:

![visual:S3-Tree]()

The probability of passing the first filter is $P(A) = 0.70$. If the component passes the first filter, the conditional probability of passing the second is $P(B|A) = 0.85$. If it fails the first filter, the probability of passing the second drops to $P(B|A') = 0.30$.

(a) Calculate the total combined probability that a randomly chosen component passes the second filter, $P(B)$.
(b) Given that a component has successfully passed the second filter, find the probability that it failed the first filter.
`,
    markSchemeMarkdown: `
**(a) Law of Total Probability via Branches**
To find $P(B)$, identify and sum up all terminal column paths that end in node $B$ [M1]:
$$P(B) = P(A \\cap B) + P(A' \\cap B)$$
$$P(B) = [P(A) \\times P(B|A)] + [P(A') \\times P(B|A')]$$
Given $P(A') = 1 - 0.70 = 0.30$:
$$P(B) = (0.70 \\times 0.85) + (0.30 \\times 0.30)$$
$$P(B) = 0.595 + 0.090 = 0.685$$ [A1]

**(b) Conditional Inversion**
We require $P(A'|B)$. Apply the conditional formula framework [M1]:
$$P(A'|B) = \\frac{P(A' \\cap B)}{P(B)}$$
$$P(A'|B) = \\frac{0.30 \\times 0.30}{0.685} = \\frac{0.090}{0.685}$$ [A1]
$$P(A'|B) = \\frac{18}{137} \\approx 0.131 \\text{ (to 3 s.f.)}$$ [W1]
`
  },
  {
    id: "S3-Q4",
    moduleId: "S3",
    topic: "Law of Total Probability & Bayes' Theorem",
    type: "Synoptic Tier",
    marks: 6,
    questionMarkdown: `
An insurance asset division classifies drivers into three non-overlapping risk partitions: $A_1$ (Low Risk), $A_2$ (Medium Risk), and $A_3$ (High Risk), satisfying the universal sample layout below:

![visual:S3-Bayes]()

The global client distribution reveals that $60\\%$ of policyholders belong to $A_1$, $30\\%$ to $A_2$, and $10\\%$ to $A_3$. The baseline probabilities of filing an accident claim ($Event \\ B$) within a 12-month timeline are:
* $P(B|A_1) = 0.02$
* $P(B|A_2) = 0.08$
* $P(B|A_3) = 0.22$

(a) Calculate the total probability that a randomly selected policyholder files a claim, $P(B)$.
(b) Given that a policyholder has filed a claim, find the exact probability that they belong to the **High Risk ($A_3$)** partition.
`,
    markSchemeMarkdown: `
**(a) Law of Total Probability**
The partitions are mutually exclusive and collectively exhaustive. Expand the baseline framework [M1]:
$$P(B) = P(A_1)P(B|A_1) + P(A_2)P(B|A_2) + P(A_3)P(B|A_3)$$
$$P(B) = (0.60 \\times 0.02) + (0.30 \\times 0.08) + (0.10 \\times 0.22)$$
$$P(B) = 0.012 + 0.024 + 0.022 = 0.058$$ [A1]

The global baseline claim probability is $0.058$ or $5.8\\%$.

**(b) Bayes' Theorem Reverse Path**
Calculate the path ratio to isolate the causal source [M1]:
$$P(A_3|B) = \\frac{P(A_3 \\cap B)}{P(B)} = \\frac{P(A_3)P(B|A_3)}{P(B)}$$
$$P(A_3|B) = \\frac{0.10 \\times 0.22}{0.058} = \\frac{0.022}{0.058}$$ [A1]
$$P(A_3|B) = \\frac{22}{58} = \\frac{11}{29} \\approx 0.379 \\text{ (to 3 s.f.)}$$ [W1]
`
  }
  {
    id: "S4-Q1",
    moduleId: "S4",
    topic: "Binomial Distribution",
    type: "Exam-Style",
    marks: 6,
    questionMarkdown: `
A factory makes porcelain picture frames. It is known that 20% of the picture frames are faulty. A random sample of 8 picture frames is taken and examined for faults. The number of faulty picture frames in the sample is denoted by $X$.

Find the probability that:
(i) none of the picture frames inspected are faulty;
(ii) at most one quarter of those inspected is faulty.
`,
    markSchemeMarkdown: `
$X \\sim B(8, 0.2)$ [M1]

**(i)** 
$P(X=0) = \\binom{8}{0}(0.2)^0(0.8)^8$ [MW1]
$P(X=0) = 0.168 \\text{ (to 3 s.f.)}$ [W1]

**(ii)**
"At most one quarter" of 8 is 2. Therefore we need $P(X \\leq 2)$. [M1]
$P(X \\leq 2) = P(X=0) + P(X=1) + P(X=2)$
$P(X=1) = \\binom{8}{1}(0.2)^1(0.8)^7 = 0.3355...$
$P(X=2) = \\binom{8}{2}(0.2)^2(0.8)^6 = 0.2936...$ [MW2]
$P(X \\leq 2) = 0.1677... + 0.3355... + 0.2936... = 0.7969...$
$P(X \\leq 2) = 0.797 \\text{ (to 3 s.f.)}$ [W1]
`
  }
];
