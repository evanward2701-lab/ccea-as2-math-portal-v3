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

![visual:M3-LiftSystem]()

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
`,
    markSchemeMarkdown: `
(a) A census collects data from every single member of the population [MW1], whereas a sample collects data from only a selected smaller group (or subset) of the population [MW1].

(b) A census is usually very time-consuming (or expensive/difficult to process) [W1].
`
  },
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
