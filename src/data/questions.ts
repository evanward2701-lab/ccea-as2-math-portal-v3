import { PracticeQuestion } from "@/types";

export const QUESTIONS: PracticeQuestion[] = [
  {
    id: "M1-Q1",
    moduleId: "M1",
    topic: "Units & Modelling",
    type: "Targeted Practice",
    marks: 3,
    questionMarkdown: `
A rescue vehicle is towing a broken-down car along a straight horizontal road. They are joined by a rigid light tow bar.

![visual:M1-Towing]()

(a) State the SI base unit of mass.
(b) Explain what the modelling assumptions "rigid" and "light" imply about the tow bar.
`,
    markSchemeMarkdown: `
(a) kilogram, or kg. [MW1]

(b) Rigid means the tow bar does not bend or buckle and keeps a fixed distance between the vehicles. [W1]  
Light means the tow bar has zero or negligible mass. [W1]
`,
  },
  {
    id: "M1-Q2",
    moduleId: "M1",
    topic: "Vectors & Scalars",
    type: "Exam-Style",
    marks: 4,
    questionMarkdown: `
A drone's velocity is modelled by the vector $\\mathbf{v}=7\\mathbf{i}-24\\mathbf{j}\\text{ m}\\,\\text{s}^{-1}$.

![visual:M1-ScalarVector]()

(a) State the difference between velocity and speed.
(b) Calculate the speed of the drone.
`,
    markSchemeMarkdown: `
(a) Velocity is a vector quantity with magnitude and direction, whereas speed is a scalar quantity with magnitude only. [MW1]

(b)
$$
\\text{Speed}=\\sqrt{7^2+(-24)^2}
$$
[M1]
$$
=\\sqrt{49+576}=\\sqrt{625}
$$
[W1]
$$
=25\\text{ m}\\,\\text{s}^{-1}
$$
[A1]
`,
  },
  {
    id: "M1-Q3",
    moduleId: "M1",
    topic: "Units & Weight",
    type: "Exam-Style",
    marks: 3,
    questionMarkdown: `
An industrial crate has a mass of $1.85$ tonnes.

(a) Convert this mass into the standard SI base unit.
(b) Calculate the weight of the crate. Give your answer to 3 significant figures and include the correct unit.
`,
    markSchemeMarkdown: `
(a)
$$
1.85\\text{ tonnes}=1.85\\times1000=1850\\text{ kg}
$$
[MW1]

(b)
$$
W=mg=1850\\times9.8=18130\\text{ N}
$$
[M1]

To 3 significant figures:
$$
18100\\text{ N}
$$
[A1]
`,
  },
  {
    id: "M1-Q4",
    moduleId: "M1",
    topic: "Modelling Assumptions",
    type: "Definition",
    marks: 4,
    questionMarkdown: `
A mechanics question states that a box is modelled as a particle on a smooth horizontal surface.

(a) Explain what is meant by modelling the box as a particle.
(b) Explain what is implied by the surface being smooth.
`,
    markSchemeMarkdown: `
(a) The dimensions of the box are negligible and its mass can be treated as concentrated at a single point. [W1 W1]

(b) A smooth surface has no friction. [W1] Therefore no frictional force needs to be included in the force diagram. [W1]
`,
  },
  {
    id: "M2-Q1",
    moduleId: "M2",
    topic: "Constant Acceleration",
    type: "Exam-Style",
    marks: 6,
    questionMarkdown: `
A cyclist accelerates at a constant rate from a velocity of $4\\text{ m}\\,\\text{s}^{-1}$ to $7.5\\text{ m}\\,\\text{s}^{-1}$ in 40 seconds.

![visual:M2-VTS]()

(a) Find the distance she travels in these 40 seconds.
(b) Find her acceleration in these 40 seconds.
`,
    markSchemeMarkdown: `
**(a)**
$$
s=\\frac{u+v}{2}t
$$
[M1]
$$
s=\\frac{4+7.5}{2}(40)
$$
[W1]
$$
s=230\\text{ m}
$$
[A1]

**(b)**
$$
v=u+at\\Rightarrow a=\\frac{v-u}{t}
$$
[M1]
$$
a=\\frac{7.5-4}{40}
$$
[W1]
$$
a=0.0875\\text{ m}\\,\\text{s}^{-2}
$$
[A1]
`,
  },
  {
    id: "M2-Q2",
    moduleId: "M2",
    topic: "Vertical Motion",
    type: "Exam-Style",
    marks: 6,
    questionMarkdown: `
A book falls off the top shelf of a bookcase. The shelf is $1.4\\text{ m}$ above a wooden floor.

![visual:M2-Gravity]()

(a) Find the time the book takes to reach the floor.
(b) Find the speed with which the book strikes the floor.
`,
    markSchemeMarkdown: `
Take downwards as positive:
$$
s=1.4,\\quad u=0,\\quad a=9.8
$$
[M1 for setup]

**(a)**
Use:
$$
s=ut+\\frac{1}{2}at^2
$$
[M1]
$$
1.4=4.9t^2
$$
[W1]
$$
t=\\sqrt{\\frac{1.4}{4.9}}=0.5345...
$$
$$
t=0.535\\text{ s}
$$
[A1]

**(b)**
Use:
$$
v^2=u^2+2as
$$
[M1]
$$
v^2=2(9.8)(1.4)=27.44
$$
$$
v=5.238...
$$
$$
v=5.24\\text{ m}\\,\\text{s}^{-1}
$$
[A1]
`,
  },
  {
    id: "M2-Q3",
    moduleId: "M2",
    topic: "2D Vector Kinematics",
    type: "Targeted Practice",
    marks: 4,
    questionMarkdown: `
A particle has initial velocity $\\mathbf{u}=4\\mathbf{i}-3\\mathbf{j}\\text{ m}\\,\\text{s}^{-1}$ and constant acceleration $\\mathbf{a}=-2\\mathbf{i}+\\mathbf{j}\\text{ m}\\,\\text{s}^{-2}$.

Find its displacement vector after 6 seconds.
`,
    markSchemeMarkdown: `
Use:
$$
\\mathbf{s}=\\mathbf{u}t+\\frac{1}{2}\\mathbf{a}t^2
$$
[M1]
$$
\\mathbf{s}=(4\\mathbf{i}-3\\mathbf{j})(6)+\\frac{1}{2}(-2\\mathbf{i}+\\mathbf{j})(6^2)
$$
[W1]
$$
\\mathbf{s}=24\\mathbf{i}-18\\mathbf{j}+18(-2\\mathbf{i}+\\mathbf{j})
$$
[W1]
$$
\\mathbf{s}=-12\\mathbf{i}\\text{ m}
$$
[A1]
`,
  },
  {
    id: "M2-Q4",
    moduleId: "M2",
    topic: "Velocity-Time Graphs",
    type: "Exam-Style",
    marks: 5,
    questionMarkdown: `
A car travels along a straight road. It accelerates uniformly from rest to $V\\text{ m}\\,\\text{s}^{-1}$, then immediately decelerates uniformly to rest. The total time is 120 seconds and the distance travelled is 1500 m.

![visual:M2-VTS]()

Find $V$.
`,
    markSchemeMarkdown: `
The velocity-time graph is a triangle. [M1]

Area under the graph gives distance:
$$
1500=\\frac{1}{2}\\times120\\times V
$$
[M1 W1]
$$
1500=60V
$$
[W1]
$$
V=25\\text{ m}\\,\\text{s}^{-1}
$$
[A1]
`,
  },
  {
    id: "M3-Q1",
    moduleId: "M3",
    topic: "Lift Dynamics",
    type: "Exam-Style",
    marks: 8,
    questionMarkdown: `
A woman travels in a lift. The mass of the woman is $50\\text{ kg}$ and the mass of the lift is $950\\text{ kg}$. The lift is moving upwards and has a constant deceleration of $2\\text{ m}\\,\\text{s}^{-2}$.

![visual:M3-Lift]()

By modelling the cable as light and inextensible:

(a) Find the tension in the cable.
(b) Find the magnitude of the force exerted on the woman by the floor of the lift.
`,
    markSchemeMarkdown: `
Take upwards as positive. Since the lift is moving upwards but decelerating, $a=-2\\text{ m}\\,\\text{s}^{-2}$. [M1]

**(a)** Treat lift and woman as one system:
$$
T-1000g=1000a
$$
[M1]
$$
T-1000(9.8)=1000(-2)
$$
[W1]
$$
T=7800\\text{ N}
$$
[A1]

**(b)** Treat the woman alone:
$$
R-50g=50a
$$
[M1]
$$
R-50(9.8)=50(-2)
$$
[W1]
$$
R=390\\text{ N}
$$
[A1]
`,
  },
  {
    id: "M3-Q2",
    moduleId: "M3",
    topic: "Inclined Planes",
    type: "Exam-Style",
    marks: 6,
    questionMarkdown: `
Take $g=10\\text{ m}\\,\\text{s}^{-2}$ in this question.

A lorry of mass $6000\\text{ kg}$ is ascending a hill inclined at angle $\\theta$ to the horizontal, where $\\sin\\theta=\\frac{3}{5}$. The resistance to motion is $140000\\text{ N}$. The lorry has a deceleration of $2\\text{ m}\\,\\text{s}^{-2}$.

![visual:M3-Incline]()

Find the tractive force produced by the lorry's engine.
`,
    markSchemeMarkdown: `
Resolve parallel to the slope, taking up the hill as positive.

Weight component down the slope:
$$
mg\\sin\\theta=6000\\times10\\times\\frac{3}{5}=36000\\text{ N}
$$
[M1]

Let the tractive force be $T$:
$$
T-140000-36000=6000(-2)
$$
[M1 W1]
$$
T-176000=-12000
$$
[W1]
$$
T=164000\\text{ N}
$$
[A1]
`,
  },
  {
    id: "M3-Q3",
    moduleId: "M3",
    topic: "Connected Particles",
    type: "Exam-Style",
    marks: 6,
    questionMarkdown: `
Two particles, P and Q, of masses $5\\text{ kg}$ and $3\\text{ kg}$ respectively, are connected by a light inextensible string. Particle P is pulled by a horizontal force of $40\\text{ N}$ along a rough horizontal plane. Particle P experiences a frictional force of $10\\text{ N}$ and particle Q experiences a frictional force of $6\\text{ N}$.

![visual:M3-Connected]()

(a) Find the acceleration of the particles.
(b) Find the tension in the string.
`,
    markSchemeMarkdown: `
**(a)** Treat both particles as one system. Internal tension cancels.
$$
40-10-6=8a
$$
[M1 W1]
$$
24=8a
$$
$$
a=3\\text{ m}\\,\\text{s}^{-2}
$$
[A1]

**(b)** Isolate Q:
$$
T-6=3a
$$
[M1]
$$
T-6=3(3)
$$
[W1]
$$
T=15\\text{ N}
$$
[A1]
`,
  },
  {
    id: "M3-Q4",
    moduleId: "M3",
    topic: "Forces as Vectors",
    type: "Targeted Practice",
    marks: 6,
    questionMarkdown: `
A boat modelled as a particle of mass $60\\text{ kg}$ is acted on by three forces:

$$
\\mathbf{F}_1=80\\mathbf{i}+50\\mathbf{j}
$$
$$
\\mathbf{F}_2=10p\\mathbf{i}+20q\\mathbf{j}
$$
$$
\\mathbf{F}_3=-75\\mathbf{i}+100\\mathbf{j}
$$

The boat accelerates at $(0.8\\mathbf{i}-1.5\\mathbf{j})\\text{ m}\\,\\text{s}^{-2}$.

Find $p$ and $q$.
`,
    markSchemeMarkdown: `
Resultant force:
$$
\\mathbf{R}=(80+10p-75)\\mathbf{i}+(50+20q+100)\\mathbf{j}
$$
[M1]
$$
\\mathbf{R}=(5+10p)\\mathbf{i}+(150+20q)\\mathbf{j}
$$

Apply $\\mathbf{F}=m\\mathbf{a}$:
$$
(5+10p)\\mathbf{i}+(150+20q)\\mathbf{j}=60(0.8\\mathbf{i}-1.5\\mathbf{j})
$$
[W1]
$$
(5+10p)\\mathbf{i}+(150+20q)\\mathbf{j}=48\\mathbf{i}-90\\mathbf{j}
$$
[W1]

Equate components:
$$
5+10p=48\\Rightarrow p=4.3
$$
[A1]
$$
150+20q=-90\\Rightarrow q=-12
$$
[A1]
`,
  },
  {
    id: "M3-Q5",
    moduleId: "M3",
    topic: "Friction",
    type: "Targeted Practice",
    marks: 5,
    questionMarkdown: `
A block of mass $12\\text{ kg}$ rests on a rough horizontal plane. The coefficient of friction between the block and the plane is $0.35$.

(a) Find the normal reaction.
(b) Find the maximum possible frictional force.
(c) Explain when this maximum value is reached.
`,
    markSchemeMarkdown: `
**(a)**
$$
R=mg=12\\times9.8=117.6\\text{ N}
$$
[M1 A1]

**(b)**
$$
F_{\\text{max}}=\\mu R=0.35(117.6)=41.16\\text{ N}
$$
[M1 A1]

**(c)** This maximum is reached when the block is on the point of slipping or is sliding. [W1]
`,
  },
  {
    id: "M3-Q6",
    moduleId: "M3",
    topic: "Pulleys",
    type: "Exam-Style",
    marks: 7,
    questionMarkdown: `
Two particles of masses $4\\text{ kg}$ and $6\\text{ kg}$ are connected by a light inextensible string passing over a smooth fixed pulley. The particles hang freely and are released from rest.

![visual:M3-Pulley]()

(a) Find the acceleration of the particles.
(b) Find the tension in the string.
`,
    markSchemeMarkdown: `
Let the $6\\text{ kg}$ mass move downwards and the $4\\text{ kg}$ mass move upwards with acceleration $a$.

For the $6\\text{ kg}$ mass:
$$
6g-T=6a
$$
[M1]

For the $4\\text{ kg}$ mass:
$$
T-4g=4a
$$
[M1]

Add the equations:
$$
2g=10a
$$
[W1]
$$
a=\\frac{2(9.8)}{10}=1.96\\text{ m}\\,\\text{s}^{-2}
$$
[A1]

Substitute into $T-4g=4a$:
$$
T-39.2=4(1.96)
$$
[M1 W1]
$$
T=47.04\\text{ N}
$$
[A1]
`,
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
(a) A census collects data from every single member of the population. [MW1] A sample collects data from only a selected smaller group or subset of the population. [MW1]

(b) A census is usually very time-consuming, expensive, or difficult to process. [W1]
`,
  },
  {
    id: "S1-Q2",
    moduleId: "S1",
    topic: "Sampling & Bias",
    type: "Exam-Style",
    marks: 4,
    questionMarkdown: `
A market researcher is interested in the opinions of nurses living in Northern Ireland. To get a random sample, he questions women that he meets entering the Royal Victoria Hospital on a Monday morning after 9 am.

Give two reasons why this sampling procedure is not satisfactory.
`,
    markSchemeMarkdown: `
Any two valid contextual points:

* He only questions women, so male nurses living in Northern Ireland are ignored. [W1]
* Sampling only at the Royal Victoria Hospital excludes nurses at other hospitals, clinics, or workplaces. [W1]
* Monday morning after 9 am may miss nurses on night shifts, different shifts, days off, or leave. [W1]
* He assumes everyone entering the hospital is a nurse, but they may be patients, visitors, or other staff. [W1]
`,
  },
  {
    id: "S1-Q3",
    moduleId: "S1",
    topic: "Stratified Sampling & Data Types",
    type: "Targeted Practice",
    marks: 5,
    questionMarkdown: `
A sixth form has 120 AS students and 80 A2 students. A survey will ask 50 students how long they spend travelling to school each morning. The organiser wants a stratified sample by year group.

![visual:S1-Stratified]()

(a) Find the number of AS students and A2 students that should be selected.
(b) State whether travel time is qualitative, quantitative discrete, or quantitative continuous data.
(c) Give one reason why a stratified sample may be better than asking the first 50 students who arrive at school.
`,
    markSchemeMarkdown: `
**(a)**
Total population:
$$
120+80=200
$$
[M1]

AS students:
$$
\\frac{120}{200}\\times50=30
$$
[A1]

A2 students:
$$
\\frac{80}{200}\\times50=20
$$
[A1]

**(b)** Travel time is measured, so it is quantitative continuous data. [W1]

**(c)** A stratified sample preserves the correct AS/A2 proportions. Asking the first 50 arrivals may be biased because early arrivals may have different travel times from later arrivals. [W1]
`,
  },
  {
    id: "S1-Q4",
    moduleId: "S1",
    topic: "Data Classification",
    type: "Targeted Practice",
    marks: 4,
    questionMarkdown: `
Classify each variable as qualitative, quantitative discrete, or quantitative continuous:

(a) Type of transport used to get to school.
(b) Number of textbooks in a student's bag.
(c) Time taken to complete a homework task.
(d) Favourite A level subject.
`,
    markSchemeMarkdown: `
(a) Qualitative. [W1]  
(b) Quantitative discrete. [W1]  
(c) Quantitative continuous. [W1]  
(d) Qualitative. [W1]
`,
  },
  {
    id: "S2-Q1",
    moduleId: "S2",
    topic: "Histograms",
    type: "Exam-Style",
    marks: 5,
    questionMarkdown: `
A grouped data class has interval $10<x\\leq22$ and frequency 36.

![visual:S2-Histogram]()

(a) Find the class width.
(b) Find the frequency density.
(c) Explain why frequency density is used instead of frequency as the histogram height.
`,
    markSchemeMarkdown: `
**(a)**
$$
22-10=12
$$
[W1]

**(b)**
$$
\\text{Frequency Density}=\\frac{36}{12}=3
$$
[M1 A1]

**(c)** In a histogram, area represents frequency. [W1] When class widths are unequal, frequency alone would give misleading bar heights. [W1]
`,
  },
  {
    id: "S2-Q2",
    moduleId: "S2",
    topic: "Outliers & Cleaning Data",
    type: "Targeted Practice",
    marks: 5,
    questionMarkdown: `
For a data set, $Q_1=18$ and $Q_3=34$.

(a) Find the interquartile range.
(b) Using the rule that outliers lie below $Q_1-1.5\\times\\text{IQR}$ or above $Q_3+1.5\\times\\text{IQR}$, find the lower and upper outlier limits.
(c) State whether a value of 61 is an outlier.
`,
    markSchemeMarkdown: `
**(a)**
$$
\\text{IQR}=34-18=16
$$
[W1]

**(b)**
Lower limit:
$$
18-1.5(16)=18-24=-6
$$
[M1 A1]

Upper limit:
$$
34+1.5(16)=34+24=58
$$
[M1 A1]

**(c)** Since $61>58$, 61 is an outlier. [W1]
`,
  },
  {
    id: "S2-Q3",
    moduleId: "S2",
    topic: "PMCC & Regression",
    type: "Exam-Style",
    marks: 7,
    questionMarkdown: `
A researcher calculates the Product-Moment Correlation Coefficient for 12 paired observations and obtains $r=0.78$.

![visual:S2-PMCC]()

(a) Explain what this value indicates about the linear correlation of the data.

(b) The researcher plots residuals against the independent variable and obtains the diagnostic diagram below.

![visual:S2-Residual]()

State, with a reason, whether a linear regression model is appropriate.
`,
    markSchemeMarkdown: `
**(a)** The value $r=0.78$ indicates strong positive linear correlation. [W1]

**(b)** A linear regression model is not appropriate. [W1] The residual plot shows a clear curved or non-random pattern rather than random scatter around zero. [W1] This suggests a non-linear relationship, so a straight-line model is unsuitable. [W1]
`,
  },
  {
    id: "S2-Q4",
    moduleId: "S2",
    topic: "Standard Deviation",
    type: "Targeted Practice",
    marks: 4,
    questionMarkdown: `
Two classes complete the same test. Class A has mean 62 and standard deviation 4. Class B has mean 62 and standard deviation 11.

![visual:S2-StdDev]()

Compare the two classes.
`,
    markSchemeMarkdown: `
Both classes have the same mean score of 62. [W1] Class B has the larger standard deviation, so its marks are more spread out. [W1] Class A's marks are more consistent or clustered closer to the mean. [W1] A comparison must refer to both centre and spread. [W1]
`,
  },
  {
    id: "S2-Q5",
    moduleId: "S2",
    topic: "Interpolation",
    type: "Exam-Style",
    marks: 5,
    questionMarkdown: `
In a grouped frequency table, the median lies in the class $30<x\\leq50$. The lower class boundary is 30, the class width is 20, the cumulative frequency before the class is 42, the frequency of the class is 16, and the median position is the 50th value.

![visual:S2-Interpolate]()

Estimate the median.
`,
    markSchemeMarkdown: `
The median is $50-42=8$ values into the median class. [M1]

Assuming values are evenly spread within the class:
$$
\\text{Median}=30+\\frac{8}{16}\\times20
$$
[M1 W1]
$$
=30+10=40
$$
[A1]

The estimated median is 40. [W1]
`,
  },
  {
    id: "S3-Q1",
    moduleId: "S3",
    topic: "Venn Diagrams & Addition Law",
    type: "Targeted Practice",
    marks: 5,
    questionMarkdown: `
For two events A and B:
$$
P(A)=0.25,\\quad P(B)=0.40
$$

![visual:S3-Venn]()

(a) Find $P(A\\cup B)$ if A and B are mutually exclusive.
(b) Find $P(A\\cup B)$ if A and B are independent.
`,
    markSchemeMarkdown: `
**(a)** If A and B are mutually exclusive, $P(A\\cap B)=0$. [M1]
$$
P(A\\cup B)=0.25+0.40=0.65
$$
[A1]

**(b)** If A and B are independent:
$$
P(A\\cap B)=P(A)P(B)=0.25\\times0.40=0.10
$$
[M1 A1]
$$
P(A\\cup B)=0.25+0.40-0.10=0.55
$$
[W1]
`,
  },
  {
    id: "S3-Q2",
    moduleId: "S3",
    topic: "Two-Way Tables",
    type: "Exam-Style",
    marks: 5,
    questionMarkdown: `
In a group of students, A represents studying Technology and B represents being male.

![visual:S3-Table]()

The probabilities are:
* $P(A)=0.60$
* $P(B)=0.50$
* $P(A\\cap B)=0.20$

(a) Find $P(A'\\cap B')$.
(b) Determine whether A and B are independent.
`,
    markSchemeMarkdown: `
**(a)**
$$
P(A')=1-0.60=0.40
$$
[M1]
$$
P(A'\\cap B)=P(B)-P(A\\cap B)=0.50-0.20=0.30
$$
[A1]
$$
P(A'\\cap B')=0.40-0.30=0.10
$$
[A1]

**(b)** Test independence:
$$
P(A)P(B)=0.60\\times0.50=0.30
$$
[M1]
But:
$$
P(A\\cap B)=0.20
$$
Since $0.20\\neq0.30$, A and B are not independent. [W1]
`,
  },
  {
    id: "S3-Q3",
    moduleId: "S3",
    topic: "Tree Diagrams",
    type: "Exam-Style",
    marks: 6,
    questionMarkdown: `
A machine makes components. On any one test, the probability that a component passes is 0.8. Two components are tested independently.

![visual:S3-Tree]()

(a) Find the probability that both components pass.
(b) Find the probability that exactly one component passes.
(c) Find the probability that at least one component passes.
`,
    markSchemeMarkdown: `
Let P mean pass and F mean fail. Since $P(P)=0.8$, $P(F)=0.2$. [M1]

**(a)**
$$
0.8\\times0.8=0.64
$$
[A1]

**(b)** Exactly one pass means PF or FP:
$$
(0.8\\times0.2)+(0.2\\times0.8)=0.16+0.16=0.32
$$
[M1 A1]

**(c)** At least one pass is the complement of both failing:
$$
1-(0.2\\times0.2)=1-0.04=0.96
$$
[M1 A1]
`,
  },
  {
    id: "S3-Q4",
    moduleId: "S3",
    topic: "Exhaustive Events",
    type: "Targeted Practice",
    marks: 4,
    questionMarkdown: `
Events A and B are exhaustive. $P(A)=0.65$ and $P(B)=0.42$.

(a) Find $P(A\\cap B)$.
(b) State whether A and B are mutually exclusive, giving a reason.
`,
    markSchemeMarkdown: `
**(a)** Since A and B are exhaustive, $P(A\\cup B)=1$. [M1]
$$
1=0.65+0.42-P(A\\cap B)
$$
[W1]
$$
P(A\\cap B)=0.07
$$
[A1]

**(b)** They are not mutually exclusive because $P(A\\cap B)=0.07\\neq0$. [W1]
`,
  },
  {
    id: "S4-Q1",
    moduleId: "S4",
    topic: "Binomial Distribution",
    type: "Exam-Style",
    marks: 6,
    questionMarkdown: `
A factory makes porcelain picture frames. It is known that 20% of the picture frames are faulty. A random sample of 8 picture frames is taken and examined for faults. The number of faulty picture frames is denoted by $X$.

![visual:S4-BinomialTree]()

Find the probability that:

(i) none of the picture frames inspected are faulty;
(ii) at most one quarter of those inspected are faulty.
`,
    markSchemeMarkdown: `
$$
X\\sim B(8,0.2)
$$
[M1]

**(i)**
$$
P(X=0)=\\binom{8}{0}(0.2)^0(0.8)^8
$$
[MW1]
$$
P(X=0)=0.168
$$
[W1]

**(ii)** At most one quarter of 8 means at most 2, so find $P(X\\leq2)$. [M1]
$$
P(X\\leq2)=P(X=0)+P(X=1)+P(X=2)
$$
$$
=0.1677...+0.3355...+0.2936...
$$
[MW2]
$$
=0.797
$$
[W1]
`,
  },
  {
    id: "S4-Q2",
    moduleId: "S4",
    topic: "Model Suitability",
    type: "Targeted Practice",
    marks: 4,
    questionMarkdown: `
A student wants to model the number of heads obtained when a fair coin is tossed 12 times.

![visual:S4-BinomialConditions]()

(a) State the distribution of $X$, the number of heads.
(b) Give two reasons why the binomial model is appropriate.
`,
    markSchemeMarkdown: `
**(a)**
$$
X\\sim B(12,0.5)
$$
[MW1]

**(b)** Any two:
* There is a fixed number of trials, 12. [W1]
* Each trial has two outcomes: head or not head. [W1]
* The probability of success is constant at 0.5. [W1]
* The trials are independent. [W1]
`,
  },
  {
    id: "S4-Q3",
    moduleId: "S4",
    topic: "Inequalities",
    type: "Exam-Style",
    marks: 6,
    questionMarkdown: `
Let $X\\sim B(10,0.3)$.

![visual:S4-Inequality]()

(a) Write "fewer than 3 successes" using probability notation.
(b) Write "at least 3 successes" using probability notation.
(c) Find $P(X=2)$.
`,
    markSchemeMarkdown: `
**(a)** Fewer than 3 successes means:
$$
P(X<3)\\text{ or }P(X\\leq2)
$$
[W1]

**(b)** At least 3 successes means:
$$
P(X\\geq3)
$$
[W1]

**(c)**
$$
P(X=2)=\\binom{10}{2}(0.3)^2(0.7)^8
$$
[M1 W1]
$$
=45(0.09)(0.7^8)
$$
[W1]
$$
=0.233\\text{ to 3 s.f.}
$$
[A1]
`,
  },
  {
    id: "S4-Q4",
    moduleId: "S4",
    topic: "Cumulative Probability",
    type: "Exam-Style",
    marks: 5,
    questionMarkdown: `
Let $X\\sim B(6,0.4)$.

Find $P(X\\geq1)$.
`,
    markSchemeMarkdown: `
Use the complement:
$$
P(X\\geq1)=1-P(X=0)
$$
[M1]
$$
P(X=0)=\\binom{6}{0}(0.4)^0(0.6)^6
$$
[M1 W1]
$$
P(X=0)=0.046656
$$
$$
P(X\\geq1)=1-0.046656=0.953344
$$
[W1]
$$ 
P(X\\geq1)=0.953
$$
[A1]
`,
  },
  {
    id: "S4-Q5",
    moduleId: "S4",
    topic: "Binomial Distribution",
    type: "Exam-Style",
    marks: 5,
    questionMarkdown: `
At an airport, the probability that severe winds prevent landings on any particular day is 0.04. Assume days are independent. Let $X$ be the number of days in a 7-day week on which severe winds prevent landings.

(a) State the distribution of $X$.
(b) Find the probability that severe winds prevent landings on no days in the week.
`,
    markSchemeMarkdown: `
**(a)**
$$
X\\sim B(7,0.04)
$$
[M1]

**(b)**
$$
P(X=0)=\\binom{7}{0}(0.04)^0(0.96)^7
$$
[MW1]
$$
=0.7514...
$$
[W1]
$$
=0.751\\text{ to 3 s.f.}
$$
[A1]
`,
  },
  {
    id: "S4-Q6",
    moduleId: "S4",
    topic: "Binomial Model Assumptions",
    type: "Targeted Practice",
    marks: 4,
    questionMarkdown: `
A company has 8 branches. The probability that any one branch meets its weekly target is 0.72. A manager wants to model the number of branches meeting the target using a binomial distribution.

(a) State one assumption needed for the binomial model to be valid.
(b) Explain why the model may not be valid in a real company context.
`,
    markSchemeMarkdown: `
(a) Any valid assumption, for example:
* The branches perform independently of one another. [W1]
* The probability of meeting the target is the same for every branch. [W1]
* Each branch has only two outcomes for the model: meets target or does not meet target. [W1]

(b) The model may not be valid because branches may affect each other or share common conditions, such as the same advertising campaign, regional demand, staffing issues, or stock supply. [W1 W1] This means independence or constant probability may fail. [W1]
`,
  },
];
