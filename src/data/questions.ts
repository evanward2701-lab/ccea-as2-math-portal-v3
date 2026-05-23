import { PracticeQuestion } from "@/types";

export const QUESTIONS: PracticeQuestion[] = [
  {
    "id": "M1-Q1",
    "moduleId": "M1",
    "topic": "Units & Modelling",
    "type": "Targeted Practice",
    "marks": 3,
    "questionMarkdown": "\nA rescue vehicle is towing a broken-down car along a straight horizontal road. They are joined by a rigid light tow bar.\n\n![visual:M1-Towing]()\n\n(a) State the SI base unit of mass.\n(b) Explain what the modelling assumptions \"rigid\" and \"light\" imply about the tow bar.\n",
    "markSchemeMarkdown": "\n(a) kilogram, or kg. [MW1]\n\n(b) Rigid means the tow bar does not bend or buckle and keeps a fixed distance between the vehicles. [W1]  \nLight means the tow bar has zero or negligible mass. [W1]\n"
  },
  {
    "id": "M1-Q2",
    "moduleId": "M1",
    "topic": "Vectors & Scalars",
    "type": "Exam-Style",
    "marks": 4,
    "questionMarkdown": "\nA drone's velocity is modelled by the vector $\\mathbf{v}=7\\mathbf{i}-24\\mathbf{j}\\text{ m}\\,\\text{s}^{-1}$.\n\n![visual:M1-ScalarVector]()\n\n(a) State the difference between velocity and speed.\n(b) Calculate the speed of the drone.\n",
    "markSchemeMarkdown": "\n(a) Velocity is a vector quantity with magnitude and direction, whereas speed is a scalar quantity with magnitude only. [MW1]\n\n(b)\n$$\n\\text{Speed}=\\sqrt{7^2+(-24)^2}\n$$\n[M1]\n$$\n=\\sqrt{49+576}=\\sqrt{625}\n$$\n[W1]\n$$\n=25\\text{ m}\\,\\text{s}^{-1}\n$$\n[A1]\n"
  },
  {
    "id": "M1-Q3",
    "moduleId": "M1",
    "topic": "Units & Weight",
    "type": "Exam-Style",
    "marks": 3,
    "questionMarkdown": "\nAn industrial crate has a mass of $1.85$ tonnes.\n\n(a) Convert this mass into the standard SI base unit.\n(b) Calculate the weight of the crate. Give your answer to 3 significant figures and include the correct unit.\n",
    "markSchemeMarkdown": "\n(a)\n$$\n1.85\\text{ tonnes}=1.85\\times1000=1850\\text{ kg}\n$$\n[MW1]\n\n(b)\n$$\nW=mg=1850\\times9.8=18130\\text{ N}\n$$\n[M1]\n\nTo 3 significant figures:\n$$\n18100\\text{ N}\n$$\n[A1]\n"
  },
  {
    "id": "M1-Q4",
    "moduleId": "M1",
    "topic": "Modelling Assumptions",
    "type": "Definition",
    "marks": 4,
    "questionMarkdown": "\nA mechanics question states that a box is modelled as a particle on a smooth horizontal surface.\n\n(a) Explain what is meant by modelling the box as a particle.\n(b) Explain what is implied by the surface being smooth.\n",
    "markSchemeMarkdown": "\n(a) The dimensions of the box are negligible and its mass can be treated as concentrated at a single point. [W1 W1]\n\n(b) A smooth surface has no friction. [W1] Therefore no frictional force needs to be included in the force diagram. [W1]\n"
  },
  {
    "id": "M2-Q1",
    "moduleId": "M2",
    "topic": "Constant Acceleration",
    "type": "Exam-Style",
    "marks": 6,
    "questionMarkdown": "\nA cyclist accelerates at a constant rate from a velocity of $4\\text{ m}\\,\\text{s}^{-1}$ to $7.5\\text{ m}\\,\\text{s}^{-1}$ in 40 seconds.\n\n![visual:M2-VTS]()\n\n(a) Find the distance she travels in these 40 seconds.\n(b) Find her acceleration in these 40 seconds.\n",
    "markSchemeMarkdown": "\n**(a)**\n$$\ns=\\frac{u+v}{2}t\n$$\n[M1]\n$$\ns=\\frac{4+7.5}{2}(40)\n$$\n[W1]\n$$\ns=230\\text{ m}\n$$\n[A1]\n\n**(b)**\n$$\nv=u+at\\Rightarrow a=\\frac{v-u}{t}\n$$\n[M1]\n$$\na=\\frac{7.5-4}{40}\n$$\n[W1]\n$$\na=0.0875\\text{ m}\\,\\text{s}^{-2}\n$$\n[A1]\n"
  },
  {
    "id": "M2-Q2",
    "moduleId": "M2",
    "topic": "Vertical Motion",
    "type": "Exam-Style",
    "marks": 6,
    "questionMarkdown": "\nA book falls off the top shelf of a bookcase. The shelf is $1.4\\text{ m}$ above a wooden floor.\n\n![visual:M2-Gravity]()\n\n(a) Find the time the book takes to reach the floor.\n(b) Find the speed with which the book strikes the floor.\n",
    "markSchemeMarkdown": "\nTake downwards as positive:\n$$\ns=1.4,\\quad u=0,\\quad a=9.8\n$$\n[M1 for setup]\n\n**(a)**\nUse:\n$$\ns=ut+\\frac{1}{2}at^2\n$$\n[M1]\n$$\n1.4=4.9t^2\n$$\n[W1]\n$$\nt=\\sqrt{\\frac{1.4}{4.9}}=0.5345...\n$$\n$$\nt=0.535\\text{ s}\n$$\n[A1]\n\n**(b)**\nUse:\n$$\nv^2=u^2+2as\n$$\n[M1]\n$$\nv^2=2(9.8)(1.4)=27.44\n$$\n$$\nv=5.238...\n$$\n$$\nv=5.24\\text{ m}\\,\\text{s}^{-1}\n$$\n[A1]\n"
  },
  {
    "id": "M2-Q3",
    "moduleId": "M2",
    "topic": "2D Vector Kinematics",
    "type": "Targeted Practice",
    "marks": 4,
    "questionMarkdown": "\nA particle has initial velocity $\\mathbf{u}=4\\mathbf{i}-3\\mathbf{j}\\text{ m}\\,\\text{s}^{-1}$ and constant acceleration $\\mathbf{a}=-2\\mathbf{i}+\\mathbf{j}\\text{ m}\\,\\text{s}^{-2}$.\n\nFind its displacement vector after 6 seconds.\n",
    "markSchemeMarkdown": "\nUse:\n$$\n\\mathbf{s}=\\mathbf{u}t+\\frac{1}{2}\\mathbf{a}t^2\n$$\n[M1]\n$$\n\\mathbf{s}=(4\\mathbf{i}-3\\mathbf{j})(6)+\\frac{1}{2}(-2\\mathbf{i}+\\mathbf{j})(6^2)\n$$\n[W1]\n$$\n\\mathbf{s}=24\\mathbf{i}-18\\mathbf{j}+18(-2\\mathbf{i}+\\mathbf{j})\n$$\n[W1]\n$$\n\\mathbf{s}=-12\\mathbf{i}\\text{ m}\n$$\n[A1]\n"
  },
  {
    "id": "M2-Q4",
    "moduleId": "M2",
    "topic": "Velocity-Time Graphs",
    "type": "Exam-Style",
    "marks": 5,
    "questionMarkdown": "\nA car travels along a straight road. It accelerates uniformly from rest to $V\\text{ m}\\,\\text{s}^{-1}$, then immediately decelerates uniformly to rest. The total time is 120 seconds and the distance travelled is 1500 m.\n\n![visual:M2-VTS]()\n\nFind $V$.\n",
    "markSchemeMarkdown": "\nThe velocity-time graph is a triangle. [M1]\n\nArea under the graph gives distance:\n$$\n1500=\\frac{1}{2}\\times120\\times V\n$$\n[M1 W1]\n$$\n1500=60V\n$$\n[W1]\n$$\nV=25\\text{ m}\\,\\text{s}^{-1}\n$$\n[A1]\n"
  },
  {
    "id": "AS2KinematicsMotionGraphsUniformAccelerationQ001",
    "moduleId": "M2",
    "topic": "Kinematics",
    "type": "Exam-Style",
    "questionMarkdown": "A car travelling at $10\\,\\mathrm{m\\,s^{-1}}$ accelerates uniformly at $5\\,\\mathrm{m\\,s^{-2}}$ until it reaches a speed of $30\\,\\mathrm{m\\,s^{-1}}$.\n\nIt travels at this speed for $5\\,\\mathrm{s}$.\n\nThe car then decelerates for $10\\,\\mathrm{s}$ until it stops.\n\n**(i)** Draw a velocity/time graph to show the motion of the car. [2]\n\n**(ii)** Find the time taken for the car to accelerate from $10\\,\\mathrm{m\\,s^{-1}}$ to $30\\,\\mathrm{m\\,s^{-1}}$. [2]\n\n**(iii)** Find the total distance travelled by the car. [4]",
    "markSchemeMarkdown": "| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | Correct velocity-time graph with speed rising from $10$ to $30$, remaining at $30$, then falling to $0$ | MW2 | 2 | Draws the three stages of motion correctly. |\n| 2 | $at = \\text{change in velocity}$ | M1 | 1 | Uses acceleration as change in velocity divided by time. |\n| 3 | $5t = 30 - 10$ |  |  | Substitution into the acceleration relation. |\n| 4 | $t = 4\\,\\mathrm{s}$ | W1 | 1 | Finds the acceleration time. |\n| 5 | Total distance $=$ area under graph | M1 | 1 | Uses the area under a velocity-time graph. |\n| 6 | $\\displaystyle \\frac{10+30}{2}\\times 4 + \\frac{5+15}{2}\\times 30$ | MW2 | 2 | Adds the trapezium and rectangle/triangle parts. |\n| 7 | $= 380\\,\\mathrm{m}$ | W1 | 1 | Final distance. |",
    "marks": 8
  },
  {
    "id": "AS2KinematicsMotionGraphsUniformAccelerationQ002",
    "moduleId": "M2",
    "topic": "Kinematics",
    "type": "Exam-Style",
    "questionMarkdown": "Towards the end of a cycle race Daniel is $x$ metres from the finish line and is cycling at a constant speed of $12\\,\\mathrm{m\\,s^{-1}}$.\n\nJohn is $20\\,\\mathrm{m}$ behind Daniel and is cycling at $10\\,\\mathrm{m\\,s^{-1}}$.\n\nJohn decides to accelerate to try to beat Daniel.\n\nJohn accelerates uniformly at $2\\,\\mathrm{m\\,s^{-2}}$.\n\nDaniel finishes the race in $T$ seconds and beats John, who finishes $1\\,\\mathrm{s}$ later.\n\nFind $T$ and $x$. [10]",
    "markSchemeMarkdown": "| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | Daniel: $x = ut$ | M1 | 1 | Uses distance equals speed times time. |\n| 2 | $12 = \\dfrac{x}{T}$ | W1 | 1 | Relates Daniel's speed to $x$ and $T$. |\n| 3 | $x = 12T$ | W1 | 1 | Expresses Daniel's remaining distance. |\n| 4 | John: $u = 10$, $a = 2$, $t = T + 1$, $s = x + 20$ | MW1, MW1 | 2 | Sets John's data and journey distance. |\n| 5 | $s = ut + \\frac12 at^2$ | M1 | 1 | Uses constant acceleration formula. |\n| 6 | $x + 20 = 10(T+1) + \\frac12(2)(T+1)^2$ | W1 | 1 | Substitutes John's values. |\n| 7 | $12T + 20 = 10T + 10 + T^2 + 2T + 1$ | M1 | 1 | Uses $x = 12T$ and expands. |\n| 8 | $T^2 = 9$ |  |  | Simplifies the equation. |\n| 9 | $T = 3\\,\\mathrm{s}$ | W1 | 1 | Takes the positive time. |\n| 10 | $x = 36\\,\\mathrm{m}$ | MW1 | 1 | Calculates Daniel's distance from the finish. |",
    "marks": 10
  },
  {
    "id": "AS2KinematicsMotionGraphsUniformAccelerationQ003",
    "moduleId": "M2",
    "topic": "Kinematics",
    "type": "Exam-Style",
    "questionMarkdown": "Sally is driving her car along a smooth straight horizontal road at $20\\,\\mathrm{m\\,s^{-1}}$ when she sees a junction $200\\,\\mathrm{m}$ ahead.\n\nShe applies the brakes and decelerates for $10\\,\\mathrm{s}$ at $1.5\\,\\mathrm{m\\,s^{-2}}$.\n\nSally then releases the brakes for $4\\,\\mathrm{s}$ and travels at a steady speed.\n\nShe brakes again so that her car comes to rest just as it reaches the junction.\n\nThis is illustrated by the velocity-time graph in Fig. 2 below.\n\n[VISUAL PLACEHOLDER: AS2KinematicsMotionGraphsUniformAccelerationQ003TikZ-001 | Source: Questions PDF p.3 | Insert from AS2_kinematics_motion_graphs_uniform_acceleration_tikz.md | Purpose: velocity-time graph in Fig. 2 for Sally's car]\n\n**(i)** Find the velocity when $t = 10$. [2]\n\n**(ii)** Find the distance travelled between $t = 0$ and $t = 10$. [3]\n\n**(iii)** Find the total time taken for the car to reach the junction. [4]",
    "markSchemeMarkdown": "| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | Acceleration $=$ gradient | M1 | 1 | Interprets acceleration from the graph. |\n| 2 | $1.5 = \\dfrac{20 - v}{10}$ |  |  | Uses the speed drop over $10$ seconds. |\n| 3 | $15 = 20 - v$ |  |  | Rearranges. |\n| 4 | $v = 5\\,\\mathrm{m\\,s^{-1}}$ | W1 | 1 | Finds the velocity at $t=10$. |\n| 5 | Alternative for part (i): $v = u + at = 20 - 1.5\\times 10 = 5\\,\\mathrm{m\\,s^{-1}}$ | M1, W1 | 2 | Official alternative using SUVAT. |\n| 6 | Distance $=$ area under graph | M1, M1 | 2 | Uses trapezium area. |\n| 7 | $\\displaystyle \\frac12(20+5)\\times 10 = 125\\,\\mathrm{m}$ | W1 | 1 | Distance from $t=0$ to $t=10$. |\n| 8 | Alternative for part (ii): $v^2 = u^2 + 2as$ | M1 | 1 | Official alternative using SUVAT. |\n| 9 | $25 = 400 - 2\\times 1.5\\times s$ | W1 | 1 | Substitutes values. |\n| 10 | $3s = 375$, so $s = 125\\,\\mathrm{m}$ | W1 | 1 | Same distance. |\n| 11 | $2^\\text{nd}$ Area $= 4\\times 5 = 20$ |  |  | Finds distance during steady speed. |\n| 12 | $3^\\text{rd}$ Area $= 200 - 20 - 125 = 55$ | M1, W1 | 2 | Finds remaining distance. |\n| 13 | $\\frac12\\times 5\\times t = 55$ | MW1 | 1 | Uses triangular area for final braking. |\n| 14 | $t = 22$ |  |  | Final braking time. |\n| 15 | Total time $= 22 + 4 + 10 = 36$ seconds | MW1 | 1 | Adds all time intervals. |",
    "marks": 9,
    "visualId": "M2-KinematicTrack"
  },
  {
    "id": "AS2KinematicsMotionGraphsUniformAccelerationQ004",
    "moduleId": "M2",
    "topic": "Kinematics",
    "type": "Exam-Style",
    "questionMarkdown": "At time $t = 0$ seconds Peter is driving along a straight horizontal road with constant speed $14\\,\\mathrm{m\\,s^{-1}}$ and passes a road sign $S$.\n\nRichard drives his car along the same road in the same direction with uniform deceleration $1\\,\\mathrm{m\\,s^{-2}}$.\n\nWhen $t = 4$, Richard passes $S$ with speed $25\\,\\mathrm{m\\,s^{-1}}$.\n\n**(i)** Sketch a velocity-time diagram showing the motion of the two cars. [3]\n\nRichard overtakes Peter at a point $X$.\n\nAt a later time Peter overtakes Richard at a point $Y$.\n\nFind:\n\n**(ii)** the values of $t$ at $X$ and $Y$; [8]\n\n**(iii)** the distance from $X$ to $Y$. [3]",
    "markSchemeMarkdown": "| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | Correct velocity-time diagram: Peter at constant $14\\,\\mathrm{m\\,s^{-1}}$; Richard begins at $t=4$ with $25\\,\\mathrm{m\\,s^{-1}}$ and decelerates | MW3 | 3 | Sketches both cars' velocities correctly. |\n| 2 | Peter: $s=d$, $u=14$, $a=0$, $t=T$ | M1, W1 | 2 | Sets Peter's displacement. |\n| 3 | Using $s=ut+\\frac12 at^2$: $d=14T$ |  |  | Peter's distance from $S$. |\n| 4 | Richard: $s=d$, $u=25$, $a=-1$, $t=T-4$ | MW1 | 1 | Sets Richard's elapsed time after passing $S$. |\n| 5 | Using $s=ut+\\frac12 at^2$: $d=25(T-4)-\\frac12(T-4)^2$ | M1, W1 | 2 | Richard's displacement from $S$. |\n| 6 | $14T = 25(T-4)-\\frac12(T-4)^2$ | M1 | 1 | Equates distances at overtaking points. |\n| 7 | $T^2 - 30T + 216 = 0$ |  |  | Simplifies the quadratic. |\n| 8 | $T = 12$ or $T = 18$ | W2 | 2 | Finds the two meeting times. |\n| 9 | When $T=12$, $d=14(12)=168\\,\\mathrm{m}$ |  |  | Distance to $X$. |\n| 10 | When $T=18$, $d=14(18)=252\\,\\mathrm{m}$ |  |  | Distance to $Y$. |\n| 11 | Distance between $X$ and $Y = 252 - 168 = 84\\,\\mathrm{m}$ | M1, W2 | 3 | Finds separation of the overtaking points. |",
    "marks": 14
  },
  {
    "id": "AS2KinematicsMotionGraphsUniformAccelerationQ005",
    "moduleId": "M2",
    "topic": "Kinematics",
    "type": "Exam-Style",
    "questionMarkdown": "The points $A$ and $B$ lie on a straight horizontal track as shown in Fig. 3 below.\n\n[VISUAL PLACEHOLDER: AS2KinematicsMotionGraphsUniformAccelerationQ005SVG-001 | Source: Questions PDF p.4 | Insert from AS2_kinematics_motion_graphs_uniform_acceleration_svg.md | Purpose: Fig. 3 showing Kathryn at A and Victoria at B on a straight track]\n\nAt time $t = 0$ seconds, Kathryn passes the point $A$ with a speed of $1\\,\\mathrm{m\\,s^{-1}}$ and jogs towards $B$ with a uniform acceleration of $0.15\\,\\mathrm{m\\,s^{-2}}$.\n\nAlso at $t = 0$, Victoria passes the point $B$, and jogs with a constant speed of $2\\,\\mathrm{m\\,s^{-1}}$ towards $A$.\n\nThe distance $AB = 90\\,\\mathrm{m}$.\n\n**(i)** Find the value of $t$ at which Kathryn and Victoria meet. [8]\n\n**(ii)** On the same diagram, sketch the displacement-time graphs for Kathryn and Victoria from $t = 0$ to the time at which they meet. [2]",
    "markSchemeMarkdown": "| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | Kathryn: $u=1$, $a=0.15$, $s=?$, $t=t$ | M1 | 1 | Sets Kathryn's data. |\n| 2 | Distance for Kathryn is $s_1 = ut+\\frac12 at^2 = t + 0.075t^2$ | W1 | 1 | Forms Kathryn's displacement. |\n| 3 | Victoria: $u=2$, $v=2$, $a=0$, $s=?$, $t=t$ |  |  | Sets Victoria's constant speed data. |\n| 4 | Distance for Victoria is $s_2 = ut+\\frac12 at^2 = 2t$ | M1, W1 | 2 | Forms Victoria's distance. |\n| 5 | $AB = 90$, so $s_1+s_2=90$ | M1 | 1 | Uses the meeting condition. |\n| 6 | $(t+0.075t^2)+(2t)=90$ | W1 | 1 | Substitutes into the meeting equation. |\n| 7 | $0.075t^2+3t-90=0$ |  |  | Simplifies. |\n| 8 | $t^2+40t-1200=0$ |  |  | Removes decimals. |\n| 9 | $(t-20)(t+60)=0$ |  |  | Factorises. |\n| 10 | $t=20$ or $-60$ | MW1 | 1 | Solves the quadratic. |\n| 11 | $t=20$ | W1 | 1 | Chooses the physically meaningful positive time. |\n| 12 | Correct displacement-time sketch: Victoria straight line from $B$ to meeting point, Kathryn increasing curved graph from $A$ to meeting point | MW2 | 2 | Sketch shows constant speed and acceleration appropriately. |",
    "marks": 10,
    "visualId": "M2-KinematicTrack"
  },
  {
    "id": "AS2KinematicsMotionGraphsUniformAccelerationQ006",
    "moduleId": "M2",
    "topic": "Kinematics",
    "type": "Exam-Style",
    "questionMarkdown": "At time $t = 0$ seconds, a freight train passes through a station with a constant velocity of $15\\,\\mathrm{m\\,s^{-1}}$.\n\nFour minutes later, an express train sets off from rest from the same station, and accelerates at $2\\,\\mathrm{m\\,s^{-2}}$ in the same direction of travel as the freight train.\n\nThe express train accelerates to a maximum velocity of $40\\,\\mathrm{m\\,s^{-1}}$ and then maintains this velocity.\n\n**(i)** On the same diagram, sketch a velocity-time graph for each of the two trains. [3]\n\n**(ii)** Find the value of $t$ at which the express train reaches its maximum velocity. [3]\n\n**(iii)** Find the value of $t$ at which the express train overtakes the freight train.\n\n[You may assume that the express train reaches its maximum velocity before it overtakes the freight train.] [5]",
    "markSchemeMarkdown": "| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | Correct sketch: freight train at constant $15\\,\\mathrm{m\\,s^{-1}}$; express begins at $t=240$, rises to $40\\,\\mathrm{m\\,s^{-1}}$, then remains constant | MW1, M1, W1 | 3 | Sketches both velocity-time graphs. |\n| 2 | Acceleration $= \\dfrac{\\text{Velocity}}{\\text{Time}}$ | M1 | 1 | Uses $a=\\Delta v/\\Delta t$. |\n| 3 | $2 = \\dfrac{40}{T}$, so $T=20$ | W1 | 1 | Finds express acceleration duration. |\n| 4 | Maximum velocity at $t=260$ | W1 | 1 | Adds the four-minute delay. |\n| 5 | Distance travelled $=$ area under graph | M1 | 1 | Uses velocity-time area. |\n| 6 | For freight: Area $=15t$ | MW1 | 1 | Freight distance from station. |\n| 7 | For express: Area $=\\frac12(40)[(t-260)+(t-240)]$ | MW1 | 1 | Express distance after start, using trapezium area. |\n| 8 | Equating: $15t = \\frac12(40)[(t-260)+(t-240)]$ | M1 | 1 | Sets equal distances for overtaking. |\n| 9 | Solving gives $t=400$ | W1 | 1 | Finds overtaking time. |",
    "marks": 11
  },
  {
    "id": "AS2KinematicsMotionGraphsUniformAccelerationQ007",
    "moduleId": "M2",
    "topic": "Kinematics",
    "type": "Exam-Style",
    "questionMarkdown": "Fig. 1 below shows the displacement-time graph of a cyclist's journey along a straight horizontal road.\n\n[VISUAL PLACEHOLDER: AS2KinematicsMotionGraphsUniformAccelerationQ007TikZ-001 | Source: Questions PDF p.6 | Insert from AS2_kinematics_motion_graphs_uniform_acceleration_tikz.md | Purpose: displacement-time graph for the cyclist's journey]\n\nFive points $O$, $A$, $B$, $C$ and $D$ are marked on the graph above corresponding to the cyclist's journey at $0$, $120$, $180$, $270$ and $312$ seconds respectively.\n\n**(i)** Find the velocity of the cyclist as he travels from $O$ to $A$. [2]\n\nThe cyclist maintains a constant velocity as he travels from $B$ to $D$.\n\n**(ii)** Find the displacement of $D$ from $O$. [4]\n\n**(iii)** Find the cyclist's average speed for the complete journey. [3]",
    "markSchemeMarkdown": "| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | $\\text{speed} = \\dfrac{D}{t}$ | M1 | 1 | Uses gradient of displacement-time graph. |\n| 2 | $\\displaystyle = \\frac{600}{120} = 5\\,\\mathrm{m\\,s^{-1}}$ | W1 | 1 | Velocity from $O$ to $A$. |\n| 3 | $\\text{speed } B\\to C = \\dfrac{600}{90} = \\dfrac{20}{3}$ | MW1 | 1 | Finds speed on the straight segment. |\n| 4 | For $B\\to D$, Distance $=v\\times t$ | M1 | 1 | Uses constant velocity from $B$ to $D$. |\n| 5 | $\\displaystyle = \\frac{20}{3}\\times 132 = 880$ | W1 | 1 | Finds magnitude of distance from $B$ to $D$. |\n| 6 | Displacement $=-280\\,\\mathrm{m}$ | MW1 | 1 | Gives displacement of $D$ from $O$. |\n| 7 | Average speed $=\\dfrac{\\text{Total distance}}{\\text{Total time}}$ | M1 | 1 | Uses average speed formula. |\n| 8 | $\\displaystyle = \\frac{600+600+280}{312}$ | M1 | 1 | Total distance includes outward and return sections. |\n| 9 | $=4.74\\,\\mathrm{m\\,s^{-1}}$ | W1 | 1 | Final average speed. |",
    "marks": 9,
    "visualId": "M2-KinematicTrack"
  },
  {
    "id": "AS2KinematicsMotionGraphsUniformAccelerationQ008",
    "moduleId": "M2",
    "topic": "Kinematics",
    "type": "Exam-Style",
    "questionMarkdown": "In two successive seconds, a car travels through $20\\,\\mathrm{m}$ and $15\\,\\mathrm{m}$ respectively.\n\nThe car is travelling with uniform deceleration.\n\n**(i)** Find the speed of the car at the start of the two seconds and its deceleration. [8]\n\n**(ii)** Find after what further time the car will come to rest. [4]",
    "markSchemeMarkdown": "| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | For $A\\to B$: $u=u$, $t=1$, $s=20$, $a=a$ |  |  | Sets first second. |\n| 2 | $S=ut+\\frac12at^2$ | M1 | 1 | Uses SUVAT displacement formula. |\n| 3 | $20=u+\\frac12a$ | W1 | 1 | Equation for the first second. |\n| 4 | For $A\\to C$: $u=u$, $t=2$, $s=35$, $a=a$ | MW1 | 1 | Sets two-second interval. |\n| 5 | $S=ut+\\frac12at^2$ | M1 | 1 | Uses SUVAT over two seconds. |\n| 6 | $35=2u+2a$ | W1, MW1 | 2 | Equation for the first two seconds. |\n| 7 | $35=2u+2a$ and $40=2u+a$ | M1 | 1 | Eliminates using twice the first equation. |\n| 8 | $-5\\,\\mathrm{m\\,s^{-2}}=a$; deceleration $5\\,\\mathrm{m\\,s^{-2}}$ | W1 | 1 | Finds acceleration and deceleration. |\n| 9 | $20=u-\\frac12\\times 5$ |  |  | Substitutes $a=-5$. |\n| 10 | $u=22.5\\,\\mathrm{m\\,s^{-1}}$ | MW1 | 1 | Finds initial speed. |\n| 11 | For rest: $u=22.5$, $v=0$, $a=-5$, $t=?$ | MW1 | 1 | Sets data for time to rest. |\n| 12 | $v=u+at$ | M1 | 1 | Uses velocity-time formula. |\n| 13 | $0=22.5-5t$ | MW1 | 1 | Substitutes values. |\n| 14 | $t=4.5\\,\\mathrm{s}$ | W1 | 1 | Time from start of the two seconds to rest. |\n| 15 | Further time $=2\\frac12$ seconds | MW1 | 1 | Subtracts the elapsed two seconds. |",
    "marks": 12
  },
  {
    "id": "AS2KinematicsMotionGraphsUniformAccelerationQ009",
    "moduleId": "M2",
    "topic": "Kinematics",
    "type": "Exam-Style",
    "questionMarkdown": "From a point $P$, a rocket is fired vertically upwards with an initial speed of $u\\,\\mathrm{m\\,s^{-1}}$.\n\n$P$ is $20\\,\\mathrm{m}$ above horizontal ground.\n\nThe rocket reaches a maximum height of $64.1\\,\\mathrm{m}$ above the ground.\n\n**(i)** Find $u$. [4]\n\n**(ii)** Find the total time it takes for the rocket to reach the ground. [5]",
    "markSchemeMarkdown": "| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | $u=u$, $v=0$, $a=-9.8$, $s=44.1$ | MW1, MW1 | 2 | Uses height gained from $20$ m to $64.1$ m. |\n| 2 | $v^2-u^2=2as$ | M1 | 1 | Uses equation without time. |\n| 3 | $-u^2=2\\times(-9.8)\\times44.1$ |  |  | Substitution. |\n| 4 | $u^2=864.36$ |  |  | Rearranged. |\n| 5 | $u=29.4\\,\\mathrm{m\\,s^{-1}}$ | W1 | 1 | Finds launch speed. |\n| 6 | For ground: $u=29.4$, $a=-9.8$, $s=-20$, $t=t$ | MW2 | 2 | Sets displacement from $P$ to ground. |\n| 7 | $s=ut+\\frac12at^2$ | M1 | 1 | Uses displacement formula. |\n| 8 | $-20=29.4t-4.9t^2$ | W1 | 1 | Substitutes. |\n| 9 | $4.9t^2-29.4t-20=0$ |  |  | Rearranges quadratic. |\n| 10 | $t=6.62$ or $-0.617$ |  |  | Solves. |\n| 11 | $t=6.62\\,\\mathrm{s}$ (3 s.f.) | W1 | 1 | Takes positive time. |",
    "marks": 9
  },
  {
    "id": "AS2KinematicsMotionGraphsUniformAccelerationQ010",
    "moduleId": "M2",
    "topic": "Kinematics",
    "type": "Exam-Style",
    "questionMarkdown": "A stone is dropped from a bridge into a river below.\n\nIt takes $3$ seconds for the stone to hit the water.\n\n**(i)** Find how far the stone has fallen when it hits the water. [3]\n\n**(ii)** Find the speed with which the stone hits the water. [3]",
    "markSchemeMarkdown": "| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | $u=0$, $a=9.8$, $t=3$, $s=s$ |  |  | Sets free-fall data. |\n| 2 | $s=ut+\\frac12at^2$ | M1 | 1 | Uses displacement formula. |\n| 3 | $s=\\frac12\\times9.8\\times9$ | W1 | 1 | Substitutes. |\n| 4 | $s=44.1\\,\\mathrm{m}$ | W1 | 1 | Distance fallen. |\n| 5 | $v=v$, $u=0$, $a=9.8$, $t=3$ |  |  | Sets data for speed. |\n| 6 | $v=u+at$ | M1, W1 | 2 | Uses velocity-time relation. |\n| 7 | $v=0+9.8\\times3=29.4\\,\\mathrm{m\\,s^{-1}}$ | W1 | 1 | Impact speed. |",
    "marks": 6
  },
  {
    "id": "AS2KinematicsMotionGraphsUniformAccelerationQ011",
    "moduleId": "M2",
    "topic": "Kinematics",
    "type": "Exam-Style",
    "questionMarkdown": "At time $t = 0$ seconds, a stone $A$ is thrown vertically upwards from ground level, with speed $u\\,\\mathrm{m\\,s^{-1}}$.\n\nThe greatest height above the ground reached by $A$ is $2.5\\,\\mathrm{m}$.\n\n**(i)** Find $u$. [3]\n\nWhen $t = 1$, a stone $B$ is thrown vertically upwards from ground level, with speed $5\\,\\mathrm{m\\,s^{-1}}$.\n\n**(ii)** Find $t$ when $A$ and $B$ collide. [6]",
    "markSchemeMarkdown": "| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | $u=u$, $a=-9.8$, $v=0$ at greatest height, $s=2.5$ |  |  | Sets data for stone A. |\n| 2 | Use $v^2=u^2+2as$ | M1 | 1 | Uses equation without time. |\n| 3 | $0=u^2-2\\times9.8\\times2.5$ | MW1 | 1 | Substitution. |\n| 4 | $u^2=49$, so $u=7\\,\\mathrm{m\\,s^{-1}}$ | W1 | 1 | Launch speed for A. |\n| 5 | A: $u=7$, $a=-9.8$, $s=s$, $t=t$ |  |  | Sets A's displacement. |\n| 6 | B: $u=5$, $a=-9.8$, $s=s$, $t=t-1$ | MW1 | 1 | Sets B's delayed time. |\n| 7 | Use $s=ut+\\frac12at^2$ | M1 | 1 | Uses same displacement at collision. |\n| 8 | For A: $s=7t-4.9t^2$ | W1 | 1 | A's displacement. |\n| 9 | For B: $s=5(t-1)-4.9(t-1)^2$ | MW1 | 1 | B's displacement. |\n| 10 | Subtract equations: $0=7t-5t+5-4.9t^2+4.9t^2-9.8t+4.9$ | M1 | 1 | Equates and subtracts. |\n| 11 | $0=-7.8t+9.9$ |  |  | Simplifies. |\n| 12 | $t=\\dfrac{33}{26}=1.27\\,\\mathrm{s}$ (3 s.f.) | W1 | 1 | Collision time. |",
    "marks": 9
  },
  {
    "id": "AS2KinematicsMotionGraphsUniformAccelerationQ012",
    "moduleId": "M2",
    "topic": "Kinematics",
    "type": "Exam-Style",
    "questionMarkdown": "A train is travelling along a straight horizontal track with an acceleration of $0.1\\,\\mathrm{m\\,s^{-2}}$.\n\nWhen the train passes a point $A$ its velocity is $5\\,\\mathrm{m\\,s^{-1}}$.\n\nWhen it passes a point $B$ its velocity is $11\\,\\mathrm{m\\,s^{-1}}$.\n\n**(i)** Find the distance from $A$ to $B$. [3]\n\nThe mass of the train is $40\\,000\\,\\mathrm{kg}$ and the resistance to its motion is $24\\,000\\,\\mathrm{N}$.\n\n**(ii)** Find the tractive force produced by the train's engine. [3]",
    "markSchemeMarkdown": "| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | $u=5\\,\\mathrm{m\\,s^{-1}}$, $v=11\\,\\mathrm{m\\,s^{-1}}$, $a=0.1\\,\\mathrm{m\\,s^{-2}}$ |  |  | Sets data. |\n| 2 | $v^2=u^2+2as$ | M1 | 1 | Uses equation without time. |\n| 3 | $11^2=5^2+2(0.1)s$ | W1 | 1 | Substitutes. |\n| 4 | $s=480\\,\\mathrm{m}$ | W1 | 1 | Distance from $A$ to $B$. |\n| 5 | Let $X$ newtons be the tractive force produced by the train's engine. |  |  | Defines unknown force. |\n| 6 | $F=ma$ | M1 | 1 | Uses Newton's second law. |\n| 7 | $X-24000=40000(0.1)$ | W1 | 1 | Resultant force equals mass times acceleration. |\n| 8 | $X=28000$ | W1 | 1 | Tractive force. |",
    "marks": 6
  },
  {
    "id": "AS2KinematicsMotionGraphsUniformAccelerationQ013",
    "moduleId": "M2",
    "topic": "Kinematics",
    "type": "Exam-Style",
    "questionMarkdown": "At time $t = 0$ seconds a ball is projected vertically upwards with speed $u\\,\\mathrm{m\\,s^{-1}}$ from a point $O$.\n\nWhen $t = 3$ the ball returns to $O$.\n\n**(i)** Find $u$. [4]\n\n**(ii)** Find the greatest height above $O$ reached by the ball. [4]",
    "markSchemeMarkdown": "| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | Using $s=ut+\\frac12at^2$ | M1 | 1 | Uses displacement formula. |\n| 2 | $0=u(3)+\\frac12(-9.8)(3)^2$ | MW1, W1 | 2 | Ball returns to $O$, so displacement is zero. |\n| 3 | $u=14.7\\,\\mathrm{m\\,s^{-1}}$ | W1 | 1 | Finds launch speed. |\n| 4 | Using $v^2=u^2+2as$ | M1 | 1 | Uses equation without time for greatest height. |\n| 5 | $0=(14.7)^2+2(-9.8)s$ | MW1, W1 | 2 | At greatest height, $v=0$. |\n| 6 | $s=11.025\\,\\mathrm{m}\\to 11.0\\,\\mathrm{m}$ (3 s.f.) | W1 | 1 | Greatest height above $O$. |",
    "marks": 8
  },
  {
    "id": "AS2KinematicsMotionGraphsUniformAccelerationQ014",
    "moduleId": "M2",
    "topic": "Kinematics",
    "type": "Exam-Style",
    "questionMarkdown": "Fig. 1 below shows an aircraft about to take off along a runway $AB$ which is $3\\,\\mathrm{km}$ long.\n\nThe aircraft starts from rest at a point $A$ and accelerates at $1.8\\,\\mathrm{m\\,s^{-2}}$ to a take-off speed of $72\\,\\mathrm{m\\,s^{-1}}$ at the point $C$.\n\n[VISUAL PLACEHOLDER: AS2KinematicsMotionGraphsUniformAccelerationQ014SVG-001 | Source: Questions PDF p.3 | Insert from AS2_kinematics_motion_graphs_uniform_acceleration_svg.md | Purpose: Fig. 1 showing the aircraft on runway AB with point C]\n\n**(i)** Find the time taken for the aircraft to accelerate from $A$ to $C$. [2]\n\n**(ii)** Find the distance $AC$. [2]\n\nThe aircraft reaches its take-off speed at $C$, but due to a technical fault the pilot has to abort take-off, and decelerates to bring the aircraft to rest at the point $B$.\n\n**(iii)** Find, in $\\mathrm{m\\,s^{-2}}$, the deceleration of the aircraft from $C$ to $B$. [3]",
    "markSchemeMarkdown": "| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | $u=0$, $v=72$, $a=1.8$ |  |  | Sets acceleration data. |\n| 2 | Using $v=u+at$ | M1 | 1 | Uses velocity-time relation. |\n| 3 | $72=0+1.8t$ |  |  | Substitutes. |\n| 4 | $t=40\\,\\mathrm{s}$ | W1 | 1 | Time from $A$ to $C$. |\n| 5 | Using $v^2=u^2+2as$ | M1 | 1 | Uses equation without time. |\n| 6 | $72^2=0+2(1.8)s$ |  |  | Substitutes. |\n| 7 | $AC=1440\\,\\mathrm{m}$ | W1 | 1 | Distance to take-off speed. |\n| 8 | distance $BC = 3000 - 1440 = 1560\\,\\mathrm{m}$ | MW1 | 1 | Remaining runway distance. |\n| 9 | $u=72$, $v=0$ |  |  | Sets braking data. |\n| 10 | Using $v^2=u^2+2as$ | M1 | 1 | Uses equation without time. |\n| 11 | $0=72^2+2(a)(1560)$ |  |  | Substitutes. |\n| 12 | $a=-1.66$ |  |  | Finds acceleration as negative. |\n| 13 | deceleration $=1.66\\,\\mathrm{m\\,s^{-2}}$ | W1 | 1 | Gives deceleration magnitude. |",
    "marks": 7,
    "visualId": "M2-KinematicTrack"
  },
  {
    "id": "AS2KinematicsMotionGraphsUniformAccelerationQ015",
    "moduleId": "M2",
    "topic": "Kinematics",
    "type": "Exam-Style",
    "questionMarkdown": "A stone is thrown vertically upwards from ground level with a speed of $20\\,\\mathrm{m\\,s^{-1}}$.\n\n**(i)** Find the maximum height above the ground reached by the stone. [3]\n\n**(ii)** Find the time taken for the stone to reach this maximum height. [2]\n\n**(iii)** Find the distance travelled by the stone during the first three seconds of its motion. [4]",
    "markSchemeMarkdown": "| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | Max height $\\Rightarrow v=0$ | MW1 | 1 | Uses zero velocity at greatest height. |\n| 2 | $v^2=u^2+2as$ | M1 | 1 | Uses equation without time. |\n| 3 | $0=(20)^2+2(-9.8)(s)$ |  |  | Substitutes. |\n| 4 | $s=20.4\\,\\mathrm{m}$ | W1 | 1 | Maximum height. |\n| 5 | $v=u+at$ | M1 | 1 | Uses velocity-time relation. |\n| 6 | $0=20+(-9.8)t$ |  |  | Substitutes. |\n| 7 | $t=2.04\\,\\mathrm{s}$ | W1 | 1 | Time to maximum height. |\n| 8 | $2.04$ seconds to max height, therefore $0.96$ seconds free fall | MW1 | 1 | Splits the first three seconds. |\n| 9 | $s=ut+\\frac12at^2$ | M1 | 1 | Uses fall distance after turning point. |\n| 10 | $s=0+\\frac12(9.8)(0.96)^2$ |  |  | Substitutes. |\n| 11 | $s=4.52$ | W1 | 1 | Distance down after maximum height. |\n| 12 | Distance $=20.4+4.52=24.9\\,\\mathrm{m}$ | MW1 | 1 | Adds up-and-down distances. |",
    "marks": 9
  },
  {
    "id": "AS2KinematicsMotionGraphsUniformAccelerationQ016",
    "moduleId": "M2",
    "topic": "Kinematics",
    "type": "Exam-Style",
    "questionMarkdown": "A stone is thrown vertically downwards from the top of a cliff at a speed of $5\\,\\mathrm{m\\,s^{-1}}$.\n\nThe top of the cliff is $250\\,\\mathrm{m}$ above horizontal ground.\n\nIf air resistance is ignored,\n\n**(i)** find the speed of the stone as it hits the ground, [2]\n\n**(ii)** find the time taken for the stone to fall to the ground. [2]\n\nThe mass of the stone is $0.2\\,\\mathrm{kg}$.\n\nIf air resistance is included as a constant force of magnitude $0.8\\,\\mathrm{N}$,\n\n**(iii)** find the acceleration of the stone. [3]",
    "markSchemeMarkdown": "| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | $v^2=u^2+2as$ | M1 | 1 | Uses equation without time. |\n| 2 | $v^2=5^2+2(9.8)(250)$ |  |  | Substitutes downward motion data. |\n| 3 | $v^2=4925$ |  |  | Calculates squared speed. |\n| 4 | $v=70.17834$; $v=70.2\\,\\mathrm{m\\,s^{-1}}$ | W1 | 1 | Impact speed. |\n| 5 | $v=u+at$ | M1 | 1 | Uses velocity-time relation. |\n| 6 | $70.2=5+9.8t$ |  |  | Substitutes. |\n| 7 | $t=6.65\\,\\mathrm{s}$ | W1 | 1 | Time to ground. |\n| 8 | Force diagram: resistance $0.8\\,\\mathrm{N}$ upward, weight $0.2g$ downward |  |  | Sets forces. |\n| 9 | $F=ma$ | M1 | 1 | Uses Newton's second law. |\n| 10 | $0.2g-0.8=0.2a$ | W1 | 1 | Resultant downward force. |\n| 11 | $a=5.8\\,\\mathrm{m\\,s^{-2}}$ | W1 | 1 | Acceleration with resistance. |",
    "marks": 7
  },
  {
    "id": "AS2KinematicsMotionGraphsUniformAccelerationQ017",
    "moduleId": "M2",
    "topic": "Kinematics",
    "type": "Exam-Style",
    "questionMarkdown": "A rocket is launched from rest at ground level and moves vertically upwards.\n\nIt rises $96\\,\\mathrm{m}$ in the first $4$ seconds of its motion.\n\nModel the rocket as a particle moving with constant acceleration.\n\n**(i)** Show that the acceleration of the rocket is $12\\,\\mathrm{m\\,s^{-2}}$. [2]\n\nThe rocket burns out when it has reached a height of $96\\,\\mathrm{m}$.\n\nIt can now be modelled as a particle moving vertically under gravity.\n\n**(ii)** Find the maximum height above the ground reached by the rocket. [5]\n\n**(iii)** Find the total time taken for the rocket to reach its maximum height from the moment it is launched. [3]",
    "markSchemeMarkdown": "| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | $u=0$, $a=?$, $s=96$, $t=4$ |  |  | Sets launch-phase data. |\n| 2 | $s=ut+\\frac12at^2$ | M1 | 1 | Uses displacement formula. |\n| 3 | $96=0+\\frac12(a)4^2$ |  |  | Substitutes. |\n| 4 | $a=12\\,\\mathrm{m\\,s^{-2}}$ | W1 | 1 | Shows the stated acceleration. |\n| 5 | Height above “burn out”: $v=u+at=0+12(4)$ |  |  | Finds speed at burnout. |\n| 6 | $v=48$ | MW1 | 1 | Burnout speed. |\n| 7 | Free fall phase: $v^2=u^2+2as$ | M1 | 1 | Uses equation without time after burnout. |\n| 8 | $0=48^2+2(-9.8)s$ | M1 | 1 | Uses $v=0$ at maximum height. |\n| 9 | $s=117.55$ | W1 | 1 | Height gained after burnout. |\n| 10 | Height $=214\\,\\mathrm{m}$ | MW1 | 1 | Adds the initial $96\\,\\mathrm{m}$. |\n| 11 | $v=u+at$ | M1 | 1 | Finds time from burnout to maximum height. |\n| 12 | $0=48+(-9.8)t$ |  |  | Substitutes. |\n| 13 | $t=4.90$ | W1 | 1 | Time after burnout. |\n| 14 | time $=8.90$ secs | MW1 | 1 | Adds the first $4$ seconds. |",
    "marks": 10
  },
  {
    "id": "M3-Q1",
    "moduleId": "M3",
    "topic": "Lift Dynamics",
    "type": "Exam-Style",
    "marks": 8,
    "questionMarkdown": "\nA woman travels in a lift. The mass of the woman is $50\\text{ kg}$ and the mass of the lift is $950\\text{ kg}$. The lift is moving upwards and has a constant deceleration of $2\\text{ m}\\,\\text{s}^{-2}$.\n\n![visual:M3-Lift]()\n\nBy modelling the cable as light and inextensible:\n\n(a) Find the tension in the cable.\n(b) Find the magnitude of the force exerted on the woman by the floor of the lift.\n",
    "markSchemeMarkdown": "\nTake upwards as positive. Since the lift is moving upwards but decelerating, $a=-2\\text{ m}\\,\\text{s}^{-2}$. [M1]\n\n**(a)** Treat lift and woman as one system:\n$$\nT-1000g=1000a\n$$\n[M1]\n$$\nT-1000(9.8)=1000(-2)\n$$\n[W1]\n$$\nT=7800\\text{ N}\n$$\n[A1]\n\n**(b)** Treat the woman alone:\n$$\nR-50g=50a\n$$\n[M1]\n$$\nR-50(9.8)=50(-2)\n$$\n[W1]\n$$\nR=390\\text{ N}\n$$\n[A1]\n"
  },
  {
    "id": "M3-Q2",
    "moduleId": "M3",
    "topic": "Inclined Planes",
    "type": "Exam-Style",
    "marks": 6,
    "questionMarkdown": "\nTake $g=10\\text{ m}\\,\\text{s}^{-2}$ in this question.\n\nA lorry of mass $6000\\text{ kg}$ is ascending a hill inclined at angle $\\theta$ to the horizontal, where $\\sin\\theta=\\frac{3}{5}$. The resistance to motion is $140000\\text{ N}$. The lorry has a deceleration of $2\\text{ m}\\,\\text{s}^{-2}$.\n\n![visual:M3-Incline]()\n\nFind the tractive force produced by the lorry's engine.\n",
    "markSchemeMarkdown": "\nResolve parallel to the slope, taking up the hill as positive.\n\nWeight component down the slope:\n$$\nmg\\sin\\theta=6000\\times10\\times\\frac{3}{5}=36000\\text{ N}\n$$\n[M1]\n\nLet the tractive force be $T$:\n$$\nT-140000-36000=6000(-2)\n$$\n[M1 W1]\n$$\nT-176000=-12000\n$$\n[W1]\n$$\nT=164000\\text{ N}\n$$\n[A1]\n"
  },
  {
    "id": "M3-Q3",
    "moduleId": "M3",
    "topic": "Connected Particles",
    "type": "Exam-Style",
    "marks": 6,
    "questionMarkdown": "\nTwo particles, P and Q, of masses $5\\text{ kg}$ and $3\\text{ kg}$ respectively, are connected by a light inextensible string. Particle P is pulled by a horizontal force of $40\\text{ N}$ along a rough horizontal plane. Particle P experiences a frictional force of $10\\text{ N}$ and particle Q experiences a frictional force of $6\\text{ N}$.\n\n![visual:M3-Connected]()\n\n(a) Find the acceleration of the particles.\n(b) Find the tension in the string.\n",
    "markSchemeMarkdown": "\n**(a)** Treat both particles as one system. Internal tension cancels.\n$$\n40-10-6=8a\n$$\n[M1 W1]\n$$\n24=8a\n$$\n$$\na=3\\text{ m}\\,\\text{s}^{-2}\n$$\n[A1]\n\n**(b)** Isolate Q:\n$$\nT-6=3a\n$$\n[M1]\n$$\nT-6=3(3)\n$$\n[W1]\n$$\nT=15\\text{ N}\n$$\n[A1]\n"
  },
  {
    "id": "M3-Q4",
    "moduleId": "M3",
    "topic": "Forces as Vectors",
    "type": "Targeted Practice",
    "marks": 6,
    "questionMarkdown": "\nA boat modelled as a particle of mass $60\\text{ kg}$ is acted on by three forces:\n\n$$\n\\mathbf{F}_1=80\\mathbf{i}+50\\mathbf{j}\n$$\n$$\n\\mathbf{F}_2=10p\\mathbf{i}+20q\\mathbf{j}\n$$\n$$\n\\mathbf{F}_3=-75\\mathbf{i}+100\\mathbf{j}\n$$\n\nThe boat accelerates at $(0.8\\mathbf{i}-1.5\\mathbf{j})\\text{ m}\\,\\text{s}^{-2}$.\n\nFind $p$ and $q$.\n",
    "markSchemeMarkdown": "\nResultant force:\n$$\n\\mathbf{R}=(80+10p-75)\\mathbf{i}+(50+20q+100)\\mathbf{j}\n$$\n[M1]\n$$\n\\mathbf{R}=(5+10p)\\mathbf{i}+(150+20q)\\mathbf{j}\n$$\n\nApply $\\mathbf{F}=m\\mathbf{a}$:\n$$\n(5+10p)\\mathbf{i}+(150+20q)\\mathbf{j}=60(0.8\\mathbf{i}-1.5\\mathbf{j})\n$$\n[W1]\n$$\n(5+10p)\\mathbf{i}+(150+20q)\\mathbf{j}=48\\mathbf{i}-90\\mathbf{j}\n$$\n[W1]\n\nEquate components:\n$$\n5+10p=48\\Rightarrow p=4.3\n$$\n[A1]\n$$\n150+20q=-90\\Rightarrow q=-12\n$$\n[A1]\n"
  },
  {
    "id": "M3-Q5",
    "moduleId": "M3",
    "topic": "Friction",
    "type": "Targeted Practice",
    "marks": 5,
    "questionMarkdown": "\nA block of mass $12\\text{ kg}$ rests on a rough horizontal plane. The coefficient of friction between the block and the plane is $0.35$.\n\n(a) Find the normal reaction.\n(b) Find the maximum possible frictional force.\n(c) Explain when this maximum value is reached.\n",
    "markSchemeMarkdown": "\n**(a)**\n$$\nR=mg=12\\times9.8=117.6\\text{ N}\n$$\n[M1 A1]\n\n**(b)**\n$$\nF_{\\text{max}}=\\mu R=0.35(117.6)=41.16\\text{ N}\n$$\n[M1 A1]\n\n**(c)** This maximum is reached when the block is on the point of slipping or is sliding. [W1]\n"
  },
  {
    "id": "M3-Q6",
    "moduleId": "M3",
    "topic": "Pulleys",
    "type": "Exam-Style",
    "marks": 7,
    "questionMarkdown": "\nTwo particles of masses $4\\text{ kg}$ and $6\\text{ kg}$ are connected by a light inextensible string passing over a smooth fixed pulley. The particles hang freely and are released from rest.\n\n![visual:M3-Pulley]()\n\n(a) Find the acceleration of the particles.\n(b) Find the tension in the string.\n",
    "markSchemeMarkdown": "\nLet the $6\\text{ kg}$ mass move downwards and the $4\\text{ kg}$ mass move upwards with acceleration $a$.\n\nFor the $6\\text{ kg}$ mass:\n$$\n6g-T=6a\n$$\n[M1]\n\nFor the $4\\text{ kg}$ mass:\n$$\nT-4g=4a\n$$\n[M1]\n\nAdd the equations:\n$$\n2g=10a\n$$\n[W1]\n$$\na=\\frac{2(9.8)}{10}=1.96\\text{ m}\\,\\text{s}^{-2}\n$$\n[A1]\n\nSubstitute into $T-4g=4a$:\n$$\nT-39.2=4(1.96)\n$$\n[M1 W1]\n$$\nT=47.04\\text{ N}\n$$\n[A1]\n"
  },
  {
    "id": "AS2ConnectedParticlesQ001",
    "moduleId": "M3",
    "topic": "Forces & Newtowns Laws",
    "type": "Exam-Style",
    "questionMarkdown": "Take $g$ to be $10\\,\\mathrm{m\\,s^{-2}}$ in this question.\n\nTwo blocks are connected by a light inextensible string. Block A has mass $m_1\\,\\mathrm{kg}$ and is held at rest on a smooth horizontal table. Block B has mass $m_2\\,\\mathrm{kg}$ and is hanging vertically. The string passes over a smooth pulley fixed at the end of the table as shown in Fig. 3 below.\n\nWhen A is released from rest, the acceleration of B downwards is $2\\,\\mathrm{m\\,s^{-2}}$.\n\n(i) Draw a diagram showing the external forces acting on A and B. [2]\n\n(ii) Show that $\\dfrac{m_1}{m_2}=4$. [5]\n\n[VISUAL PLACEHOLDER: AS2ConnectedParticlesQ001TikZ-001 | Source: Questions PDF p.2 | Insert from AS2_connected_particles_tikz.md | Purpose: source context diagram for Question 1]",
    "markSchemeMarkdown": "| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | Force diagram: reaction $R$, weight $m_1g$, tension $T$ on A; tension $T$ and weight $m_2g$ on B. | MW2 | 2 | Correct external forces on both blocks. |\n| 2 | For A: $T=2m_1$. | M1 W1 | 2 | Uses $F=ma$ with acceleration $2$.  |\n| 3 | For B: $m_2g-T=2m_2$, so $T=8m_2$. | MW1 | 1 | Uses $g=10$ and downward motion of B. |\n| 4 | $2m_1=8m_2$. | M1 | 1 | Equates the common tension. |\n| 5 | $\\dfrac{m_1}{m_2}=\\dfrac{8}{2}=4$. | W1 | 1 | Required result shown. |",
    "marks": 7,
    "visualId": "M3-Connected"
  },
  {
    "id": "S1-Q1",
    "moduleId": "S1",
    "topic": "Sampling",
    "type": "Exam-Style",
    "marks": 3,
    "questionMarkdown": "\n(a) Explain the exact difference between a census and a sample.\n(b) Give one disadvantage of using a census.\n\n![visual:S1-Sampling]()\n",
    "markSchemeMarkdown": "\n(a) A census collects data from every single member of the population. [MW1] A sample collects data from only a selected smaller group or subset of the population. [MW1]\n\n(b) A census is usually very time-consuming, expensive, or difficult to process. [W1]\n"
  },
  {
    "id": "S1-Q2",
    "moduleId": "S1",
    "topic": "Sampling & Bias",
    "type": "Exam-Style",
    "marks": 4,
    "questionMarkdown": "\nA market researcher is interested in the opinions of nurses living in Northern Ireland. To get a random sample, he questions women that he meets entering the Royal Victoria Hospital on a Monday morning after 9 am.\n\nGive two reasons why this sampling procedure is not satisfactory.\n",
    "markSchemeMarkdown": "\nAny two valid contextual points:\n\n* He only questions women, so male nurses living in Northern Ireland are ignored. [W1]\n* Sampling only at the Royal Victoria Hospital excludes nurses at other hospitals, clinics, or workplaces. [W1]\n* Monday morning after 9 am may miss nurses on night shifts, different shifts, days off, or leave. [W1]\n* He assumes everyone entering the hospital is a nurse, but they may be patients, visitors, or other staff. [W1]\n"
  },
  {
    "id": "S1-Q3",
    "moduleId": "S1",
    "topic": "Stratified Sampling & Data Types",
    "type": "Targeted Practice",
    "marks": 5,
    "questionMarkdown": "\nA sixth form has 120 AS students and 80 A2 students. A survey will ask 50 students how long they spend travelling to school each morning. The organiser wants a stratified sample by year group.\n\n![visual:S1-Stratified]()\n\n(a) Find the number of AS students and A2 students that should be selected.\n(b) State whether travel time is qualitative, quantitative discrete, or quantitative continuous data.\n(c) Give one reason why a stratified sample may be better than asking the first 50 students who arrive at school.\n",
    "markSchemeMarkdown": "\n**(a)**\nTotal population:\n$$\n120+80=200\n$$\n[M1]\n\nAS students:\n$$\n\\frac{120}{200}\\times50=30\n$$\n[A1]\n\nA2 students:\n$$\n\\frac{80}{200}\\times50=20\n$$\n[A1]\n\n**(b)** Travel time is measured, so it is quantitative continuous data. [W1]\n\n**(c)** A stratified sample preserves the correct AS/A2 proportions. Asking the first 50 arrivals may be biased because early arrivals may have different travel times from later arrivals. [W1]\n"
  },
  {
    "id": "S1-Q4",
    "moduleId": "S1",
    "topic": "Data Classification",
    "type": "Targeted Practice",
    "marks": 4,
    "questionMarkdown": "\nClassify each variable as qualitative, quantitative discrete, or quantitative continuous:\n\n(a) Type of transport used to get to school.\n(b) Number of textbooks in a student's bag.\n(c) Time taken to complete a homework task.\n(d) Favourite A level subject.\n",
    "markSchemeMarkdown": "\n(a) Qualitative. [W1]  \n(b) Quantitative discrete. [W1]  \n(c) Quantitative continuous. [W1]  \n(d) Qualitative. [W1]\n"
  },
  {
    "id": "S2-Q1",
    "moduleId": "S2",
    "topic": "Histograms",
    "type": "Exam-Style",
    "marks": 5,
    "questionMarkdown": "\nA grouped data class has interval $10<x\\leq22$ and frequency 36.\n\n![visual:S2-Histogram]()\n\n(a) Find the class width.\n(b) Find the frequency density.\n(c) Explain why frequency density is used instead of frequency as the histogram height.\n",
    "markSchemeMarkdown": "\n**(a)**\n$$\n22-10=12\n$$\n[W1]\n\n**(b)**\n$$\n\\text{Frequency Density}=\\frac{36}{12}=3\n$$\n[M1 A1]\n\n**(c)** In a histogram, area represents frequency. [W1] When class widths are unequal, frequency alone would give misleading bar heights. [W1]\n"
  },
  {
    "id": "S2-Q2",
    "moduleId": "S2",
    "topic": "Outliers & Cleaning Data",
    "type": "Targeted Practice",
    "marks": 5,
    "questionMarkdown": "\nFor a data set, $Q_1=18$ and $Q_3=34$.\n\n(a) Find the interquartile range.\n(b) Using the rule that outliers lie below $Q_1-1.5\\times\\text{IQR}$ or above $Q_3+1.5\\times\\text{IQR}$, find the lower and upper outlier limits.\n(c) State whether a value of 61 is an outlier.\n",
    "markSchemeMarkdown": "\n**(a)**\n$$\n\\text{IQR}=34-18=16\n$$\n[W1]\n\n**(b)**\nLower limit:\n$$\n18-1.5(16)=18-24=-6\n$$\n[M1 A1]\n\nUpper limit:\n$$\n34+1.5(16)=34+24=58\n$$\n[M1 A1]\n\n**(c)** Since $61>58$, 61 is an outlier. [W1]\n"
  },
  {
    "id": "S2-Q3",
    "moduleId": "S2",
    "topic": "PMCC & Regression",
    "type": "Exam-Style",
    "marks": 7,
    "questionMarkdown": "\nA researcher calculates the Product-Moment Correlation Coefficient for 12 paired observations and obtains $r=0.78$.\n\n![visual:S2-PMCC]()\n\n(a) Explain what this value indicates about the linear correlation of the data.\n\n(b) The researcher plots residuals against the independent variable and obtains the diagnostic diagram below.\n\n![visual:S2-Residual]()\n\nState, with a reason, whether a linear regression model is appropriate.\n",
    "markSchemeMarkdown": "\n**(a)** The value $r=0.78$ indicates strong positive linear correlation. [W1]\n\n**(b)** A linear regression model is not appropriate. [W1] The residual plot shows a clear curved or non-random pattern rather than random scatter around zero. [W1] This suggests a non-linear relationship, so a straight-line model is unsuitable. [W1]\n"
  },
  {
    "id": "S2-Q4",
    "moduleId": "S2",
    "topic": "Standard Deviation",
    "type": "Targeted Practice",
    "marks": 4,
    "questionMarkdown": "\nTwo classes complete the same test. Class A has mean 62 and standard deviation 4. Class B has mean 62 and standard deviation 11.\n\n![visual:S2-StdDev]()\n\nCompare the two classes.\n",
    "markSchemeMarkdown": "\nBoth classes have the same mean score of 62. [W1] Class B has the larger standard deviation, so its marks are more spread out. [W1] Class A's marks are more consistent or clustered closer to the mean. [W1] A comparison must refer to both centre and spread. [W1]\n"
  },
  {
    "id": "S2-Q5",
    "moduleId": "S2",
    "topic": "Interpolation",
    "type": "Exam-Style",
    "marks": 5,
    "questionMarkdown": "\nIn a grouped frequency table, the median lies in the class $30<x\\leq50$. The lower class boundary is 30, the class width is 20, the cumulative frequency before the class is 42, the frequency of the class is 16, and the median position is the 50th value.\n\n![visual:S2-Interpolate]()\n\nEstimate the median.\n",
    "markSchemeMarkdown": "\nThe median is $50-42=8$ values into the median class. [M1]\n\nAssuming values are evenly spread within the class:\n$$\n\\text{Median}=30+\\frac{8}{16}\\times20\n$$\n[M1 W1]\n$$\n=30+10=40\n$$\n[A1]\n\nThe estimated median is 40. [W1]\n"
  },
  {
    "id": "AS2ProductMomentCorrelationCoefficientQ001",
    "moduleId": "S2",
    "topic": "Correlation",
    "type": "Exam-Style",
    "questionMarkdown": "2 The scores in History and English of ten pupils in a school are recorded in order to explore if there may be any link between performances in the two subjects. The results are given in Table 1 below.\n\n**Table 1**\n\n| Pupil | A | B | C | D | E | F | G | H | I | J |\n|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|\n| History $x$ | 67 | 49 | 80 | 71 | 75 | 60 | 72 | 55 | 61 | 84 |\n| English $y$ | 72 | 55 | 78 | 75 | 78 | 57 | 80 | 58 | 67 | 76 |\n\nSummary values of these data are:\n\n| $n$ | $\\sum x$ | $\\sum y$ | $\\sum x^2$ | $\\sum y^2$ | $\\sum xy$ |\n|---:|---:|---:|---:|---:|---:|\n| 10 | 674 | 696 | 46542 | 49280 | 47775 |\n\n(i) Calculate the product-moment correlation coefficient for these data. [5]\n\n(ii) Comment on the value obtained in part (i). [2]",
    "markSchemeMarkdown": "| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | $r=\\dfrac{\\sum xy-\\dfrac{\\sum x\\sum y}{n}}{\\sqrt{\\left(\\sum x^2-\\dfrac{(\\sum x)^2}{n}\\right)\\left(\\sum y^2-\\dfrac{(\\sum y)^2}{n}\\right)}}$ | M1 | 1 | Uses the PMCC formula. |\n| 2 | $r=\\dfrac{47775-\\dfrac{674\\times696}{10}}{\\sqrt{\\left(46542-\\dfrac{674^2}{10}\\right)\\left(49280-\\dfrac{696^2}{10}\\right)}}$ | W1, W2 | 3 | Substitutes the summary values correctly and evaluates the denominator terms. |\n| 3 | $r=0.89447\\ldots=0.894\\ (3\\text{ s.f.})$ | W1 | 1 | Accuracy mark for the final coefficient. |\n| 4 | There appears to be a strong positive correlation between performances in History and in English. | M2 | 2 | Interprets the sign and strength in context. |",
    "marks": 7
  },
  {
    "id": "AS2ProductMomentCorrelationCoefficientQ002",
    "moduleId": "S2",
    "topic": "Correlation",
    "type": "Exam-Style",
    "questionMarkdown": "1 Thomas is investigating the correlation between the height, $x$ cm, and weight, $y$ kg, of Sixth Year students. His results are given in Table 1 below.\n\n**Table 1**\n\n| Student | A | B | C | D | E | F | G | H | I | J |\n|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|\n| Height $(x,\\text{ cm})$ | 162 | 174 | 186 | 158 | 165 | 175 | 175 | 166 | 182 | 174 |\n| Weight $(y,\\text{ kg})$ | 62 | 85 | 95 | 72 | 58 | 94 | 78 | 58 | 73 | 80 |\n\nSummary values of these data are:\n\n| $n$ | $\\sum x$ | $\\sum y$ | $\\sum x^2$ | $\\sum y^2$ | $\\sum xy$ |\n|---:|---:|---:|---:|---:|---:|\n| 10 | 1717 | 755 | 295511 | 58655 | 130384 |\n\n(i) Calculate the product-moment correlation coefficient for these data. [5]\n\n(ii) Comment on the value obtained in part (i). [1]",
    "markSchemeMarkdown": "| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | $r=\\dfrac{\\sum xy-\\dfrac{\\sum x\\sum y}{n}}{\\sqrt{\\left(\\sum x^2-\\dfrac{(\\sum x)^2}{n}\\right)\\left(\\sum y^2-\\dfrac{(\\sum y)^2}{n}\\right)}}$ | M1 | 1 | Uses the PMCC formula. |\n| 2 | $r=\\dfrac{130384-\\dfrac{1717\\times755}{10}}{\\sqrt{\\left(295511-\\dfrac{1717^2}{10}\\right)\\left(58655-\\dfrac{755^2}{10}\\right)}}$ | MW1, MW2 | 3 | Substitutes values and simplifies the components. |\n| 3 | $r=\\dfrac{750.5}{\\sqrt{702.1\\times1652.5}}$ | MW1, MW2 | 0 | This line expands the official simplification already credited above. |\n| 4 | $r=0.69675\\ldots=0.697\\ (3\\text{ sf})$ | W1 | 1 | Final value to 3 significant figures. |\n| 5 | Moderate positive correlation between height and weight. | M1 | 1 | Interprets the value in context. |",
    "marks": 6
  },
  {
    "id": "AS2ProductMomentCorrelationCoefficientQ003",
    "moduleId": "S2",
    "topic": "Correlation",
    "type": "Exam-Style",
    "questionMarkdown": "3 Horticulturist Tomás is investigating a possible correlation between the hours of sunlight, $x$ hours, and the height, $y$ cm, of a variety of gladioli. His readings are taken from a number of gardens around Northern Ireland. His summary statistics are:\n\n| $n$ | $\\sum x$ | $\\sum y$ | $\\sum x^2$ | $\\sum y^2$ | $\\sum xy$ |\n|---:|---:|---:|---:|---:|---:|\n| 15 | 458 | 287 | 14148 | 5595 | 8818 |\n\nOn closer examination of his data Tomás decides that one data pair, $(24,22)$, is an outlier and is to be ignored.  \nHe also receives two additional results $(28,17)$ and $(31,18)$.\n\n(i) Re-calculate Tomás's summary statistics. [5]\n\n(ii) Calculate the product-moment correlation coefficient for the revised data. [4]\n\n(iii) Comment on the value obtained in (ii). [1]",
    "markSchemeMarkdown": "| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | $n=15-1+2=16$ | MW1 | 1 | Updates the number of data pairs. |\n| 2 | $\\sum x=458-24+28+31=493$ | MW1 | 1 | Removes the outlier $x$ value and adds the two new $x$ values. |\n| 3 | $\\sum y=287-22+17+18=300$ | MW1 | 1 | Removes the outlier $y$ value and adds the two new $y$ values. |\n| 4 | $\\sum x^2=14148-24^2+28^2+31^2=15317$ | MW1 | 1 | Updates the squared $x$ total. |\n| 5 | $\\sum y^2=5595-22^2+17^2+18^2=5724$ | MW1 | 1 | Updates the squared $y$ total. |\n| 6 | $\\sum xy=8818-(24\\times22)+(28\\times17)+(31\\times18)=9324$ | MW1 | 1 | Updates the product total. |\n| 7 | $r=\\dfrac{\\sum xy-\\dfrac{\\sum x\\sum y}{n}}{\\sqrt{\\left(\\sum x^2-\\dfrac{(\\sum x)^2}{n}\\right)\\left(\\sum y^2-\\dfrac{(\\sum y)^2}{n}\\right)}}$ | M1 | 1 | Uses the PMCC formula for revised data. |\n| 8 | $r=\\dfrac{9324-\\dfrac{493\\times300}{16}}{\\sqrt{\\left(15317-\\dfrac{493^2}{16}\\right)\\left(5724-\\dfrac{300^2}{16}\\right)}}$ | MW1, M1 | 2 | Substitutes the revised summary statistics. |\n| 9 | $r=0.717\\ (3\\text{ s.f.})$ | W1 | 1 | Final correlation coefficient. |\n| 10 | Moderate positive correlation. | M1 | 1 | Interprets the coefficient. |",
    "marks": 10
  },
  {
    "id": "AS2ProductMomentCorrelationCoefficientQ004",
    "moduleId": "S2",
    "topic": "Correlation",
    "type": "Exam-Style",
    "questionMarkdown": "1 Sandra believes that there is a link between fitness and attitude to healthy eating. Ten university students took part in an experiment. They completed a quiz about their attitude to healthy eating and also underwent a series of fitness tests. Their scores are given in Table 1 below.\n\n**Table 1**\n\n|  |  |  |  |  |  |  |  |  |  |  |\n|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|\n| Attitude score $(x)$ | 39 | 44 | 21 | 64 | 57 | 47 | 27 | 75 | 34 | 52 |\n| Fitness score $(y)$ | 65 | 78 | 52 | 84 | 92 | 89 | 71 | 98 | 56 | 75 |\n\nThe summary statistics are:\n\n| $n$ | $\\sum x$ | $\\sum x^2$ | $\\sum y$ | $\\sum y^2$ | $\\sum xy$ |\n|---:|---:|---:|---:|---:|---:|\n| 10 | 460 | 23666 | 760 | 59860 | 36933 |\n\n(i) Calculate the product-moment correlation coefficient between attitude and fitness. [5]\n\n(ii) Comment on the value obtained in part (i). [1]",
    "markSchemeMarkdown": "| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | $r=\\dfrac{36933-\\dfrac{460\\times760}{10}}{\\sqrt{\\left(23666-\\dfrac{460^2}{10}\\right)\\left(59860-\\dfrac{760^2}{10}\\right)}}$ | M1, MW3 | 4 | Uses the PMCC formula and substitutes the summary statistics. |\n| 2 | $r=\\dfrac{1973}{\\sqrt{2506\\times2100}}$ | MW3 | 0 | This line expands the official simplification already credited above. |\n| 3 | $r=0.860$ | W1 | 1 | Final value. |\n| 4 | Moderately strong positive correlation between fitness and attitude to healthy eating. | M1 | 1 | Interprets the sign and strength in context. |",
    "marks": 6
  },
  {
    "id": "AS2ProductMomentCorrelationCoefficientQ005",
    "moduleId": "S2",
    "topic": "Correlation",
    "type": "Exam-Style",
    "questionMarkdown": "1 (a) State the effect on the product-moment correlation coefficient between two variables $x$ and $y$ if:\n\n(i) the units of $x$ are changed; [1]\n\n(ii) the origin of $x$ is changed. [1]\n\n(b) A researcher in the Department of Justice decides to investigate if there is a possible correlation between the percentage unemployed, $x$, and the percentage increase in juvenile court cases, $y$, over a period of 10 years. The information gathered is shown in Table 1 below.\n\n**Table 1**\n\n|  |  |  |  |  |  |  |  |  |  |  |\n|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|\n| % Unemployed $x$ | 6.6 | 7.2 | 7.3 | 6.7 | 7.6 | 7.1 | 8.6 | 8.2 | 7.7 | 7.6 |\n| % Increase $y$ | 2.0 | 1.8 | 2.2 | 2.5 | 2.1 | 2.2 | 3.3 | 2.9 | 2.7 | 3.0 |\n\nThe summary statistics are:\n\n| $n$ | $\\sum x$ | $\\sum x^2$ | $\\sum y$ | $\\sum y^2$ | $\\sum xy$ |\n|---:|---:|---:|---:|---:|---:|\n| 10 | 74.6 | 560 | 24.7 | 65.17 | 186.3 |\n\n(i) Calculate the product-moment correlation coefficient. [4]\n\n(ii) Comment on the value obtained in (i). [1]",
    "markSchemeMarkdown": "| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | (a)(i) no effect | MW1 | 1 | Changing the units of $x$ does not change the PMCC. |\n| 2 | (a)(ii) no effect | MW1 | 1 | Changing the origin of $x$ does not change the PMCC. |\n| 3 | $r=\\dfrac{\\sum xy-\\dfrac{\\sum x\\sum y}{n}}{\\sqrt{\\sum x^2-\\dfrac{(\\sum x)^2}{n}}\\sqrt{\\sum y^2-\\dfrac{(\\sum y)^2}{n}}}$ | M1 | 1 | Uses an equivalent PMCC formula. |\n| 4 | $r=\\dfrac{186.3-\\dfrac{(74.6)(24.7)}{10}}{\\sqrt{560-\\dfrac{(74.6)^2}{10}}\\sqrt{65.17-\\dfrac{(24.7)^2}{10}}}$ | MW2 | 2 | Substitutes the summary values. |\n| 5 | $r=\\dfrac{2.038}{\\sqrt{3.484}\\sqrt{2.161}}$ | MW2 | 0 | This line expands the official simplification already credited above. |\n| 6 | $r=0.743\\ (3\\text{ s.f.})$ | W1 | 1 | Final coefficient. |\n| 7 | Moderate positive correlation, i.e. evidence that there is a possible relationship between $x$ and $y$. | MW1 | 1 | Interprets the coefficient in context. |",
    "marks": 7
  },
  {
    "id": "AS2ProductMomentCorrelationCoefficientQ006",
    "moduleId": "S2",
    "topic": "Correlation",
    "type": "Exam-Style",
    "questionMarkdown": "1 A group of ten mature students took a “Typing for Beginners” course. Each kept a record of the hours of practice they did during the course. At the end of the course they were given a test where the number of errors was recorded.  \nThe results are given in Table 1 below.\n\n**Table 1**\n\n| Student | A | B | C | D | E | F | G | H | I | J |\n|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|\n| Hours of practice $(x)$ | 68 | 79 | 63 | 87 | 84 | 90 | 67 | 55 | 73 | 89 |\n| Number of errors $(y)$ | 30 | 19 | 32 | 16 | 17 | 13 | 34 | 34 | 22 | 16 |\n\nSummary values of these data are:\n\n| $n$ | $\\sum x$ | $\\sum y$ | $\\sum x^2$ | $\\sum y^2$ | $\\sum xy$ |\n|---:|---:|---:|---:|---:|---:|\n| 10 | 755 | 233 | 58323 | 6051 | 16725 |\n\n(i) Calculate the product-moment correlation coefficient for these data. [4]\n\n(ii) Comment on the value obtained in part (i). [2]",
    "markSchemeMarkdown": "| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | $r=\\dfrac{\\sum xy-\\dfrac{\\sum x\\sum y}{n}}{\\sqrt{\\left(\\sum x^2-\\dfrac{(\\sum x)^2}{n}\\right)\\left(\\sum y^2-\\dfrac{(\\sum y)^2}{n}\\right)}}$ | M1 | 1 | Uses the PMCC formula. |\n| 2 | $r=\\dfrac{16725-\\dfrac{755\\times233}{10}}{\\sqrt{\\left(58323-\\dfrac{755^2}{10}\\right)\\left(6051-\\dfrac{233^2}{10}\\right)}}$ | W2 | 2 | Substitutes the summary values. |\n| 3 | $r=-0.956\\ (3\\text{ s.f.})$ | W1 | 1 | Final coefficient. |\n| 4 | Strong negative correlation between hours of practice and the number of errors. | M2 | 2 | Interprets sign, strength, and context. |",
    "marks": 6
  },
  {
    "id": "AS2ProductMomentCorrelationCoefficientQ007",
    "moduleId": "S2",
    "topic": "Correlation",
    "type": "Exam-Style",
    "questionMarkdown": "1 A sample of university students took part in a test which looked into the relationship between a person's weight $(x,\\text{ kg})$ and lung capacity $(y,\\text{ litres})$. The data is given in Table 1 below.\n\n**Table 1**\n\n|  |  |  |  |  |  |  |  |  |\n|---|---:|---:|---:|---:|---:|---:|---:|---:|\n| Weight $(x,\\text{ kg})$ | 65 | 72 | 64 | 88 | 81 | 59 | 75 | 73 |\n| Lung Capacity $(y,\\text{ litres})$ | 5.1 | 5.7 | 4.9 | 4.9 | 5.4 | 5.1 | 5.8 | 6.0 |\n\n(i) Stating all summary values, find the product-moment correlation coefficient for these data. [6]\n\n(ii) Comment on the value obtained in (i). [2]",
    "markSchemeMarkdown": "Official solution not found in supplied mark scheme PDF.\n\nNote: The supplied mark scheme page labelled `S2 June 2017 Q1` is not a product-moment correlation coefficient solution. It is a binomial distribution solution about Bob arriving late for school. Therefore it does not match Question 7 in the questions PDF.",
    "marks": 8
  },
  {
    "id": "AS2ProductMomentCorrelationCoefficientQ008",
    "moduleId": "S2",
    "topic": "Correlation",
    "type": "Exam-Style",
    "questionMarkdown": "2 A sofa retailer would like to know the impact that advertising has on his sales. Over a six-month period, he keeps a record of the number of advertisements placed in the local papers and the number of sofas sold.  \nThe information is given in Table 2 below.\n\n**Table 2**\n\n| Month | 1 | 2 | 3 | 4 | 5 | 6 |\n|---|---:|---:|---:|---:|---:|---:|\n| Number of advertisements | 2 | 5 | 3 | 7 | 8 | 7 |\n| Number of sofas sold | 8 | 11 | 10 | 7 | 13 | 12 |\n\n(i) Calculate the product-moment correlation coefficient for these data. [5]\n\n(ii) What conclusions could the sofa retailer make from this value? [2]",
    "markSchemeMarkdown": "| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | $\\sum x=32$, $\\sum y=61$, $\\sum x^2=200$, $\\sum y^2=647$, $\\sum xy=338$ | MW2 | 2 | Finds the required summary values from the raw data. |\n| 2 | $r=\\dfrac{S_{xy}}{\\sqrt{S_{xx}S_{yy}}}=\\dfrac{338-\\dfrac{32\\times61}{6}}{\\sqrt{\\left(200-\\dfrac{32^2}{6}\\right)\\left(647-\\dfrac{61^2}{6}\\right)}}$ | M1 | 1 | Uses the PMCC formula with summary values. |\n| 3 | $r=0.451\\ (3\\text{ s.f.})$ | W1, W1 | 2 | Calculates and rounds the coefficient. |\n| 4 | Positive correlation but weak; suggesting other factors. Tells us nothing. | W2 | 2 | Interprets the weak positive correlation cautiously. |",
    "marks": 7
  },
  {
    "id": "AS2MeanStandardDeviationQ001",
    "moduleId": "S2",
    "topic": "Standard Deviation",
    "type": "Exam-Style",
    "questionMarkdown": "Tina is involved in a class project for Sociology.  \nA sample of match-goers at the local football ground were asked their age.  \nThe teacher constructed a histogram summarising the data.  \nTina wishes to calculate the mean and standard deviation of the ages.  \nTable 2 below shows the work that she has done so far.\n\n**Table 2**\n\n| Age (complete years) | Frequency density | Frequency |\n|---|---:|---:|\n| 0-9 | 3.2 | 32 |\n| 10-14 | 13.2 | 66 |\n| 15-19 | 13.8 |  |\n| 20-29 | 12.3 |  |\n| 30-44 | 10.2 |  |\n| 45-74 | 1.9 |  |\n\n(i) Find the remaining four frequencies. [3]\n\n(ii) Find the mean and standard deviation for the age of match-goers. [5]",
    "markSchemeMarkdown": "Official solution not found in supplied mark scheme PDF.",
    "marks": 8
  },
  {
    "id": "AS2MeanStandardDeviationQ002",
    "moduleId": "S2",
    "topic": "Standard Deviation",
    "type": "Exam-Style",
    "questionMarkdown": "The owner of a post office wishes to investigate the masses of letters that are handled at the counter.  \nHe records the masses of a sample of letters.  \nHis results are shown in Table 1 below.\n\n**Table 1**\n\n| Mass (g) | 10- | 20- | 40- | 60- | 80-120 |\n|---|---:|---:|---:|---:|---:|\n| Number of letters | 44 | 47 | 24 | 7 | 3 |\n\n(i) Find the mean and standard deviation of the masses of the letters. [5]\n\nA number of weeks later the owner repeated the experiment and found the mean and standard deviation differed slightly from his values in part (i).\n\n(ii) Briefly explain why this should not be unexpected. [1]",
    "markSchemeMarkdown": "| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | Midvalues: $15, 30, 50, 70, 100$; $n=125$, $\\sum fx = 4060$, $\\sum fx^2 = 176500$ | MW1 | 1 | Uses grouped-data midpoints and totals. |\n| 2 | $\\bar{x}=32.48 = 32.5$ (3 s.f.) | M1 W1 | 2 | Calculates the mean and rounds to 3 significant figures. |\n| 3 | $\\sigma_{n-1}=18.97\\ldots = 19.0$ (3 s.f.) | M1 W1 | 2 | Calculates sample standard deviation and rounds to 3 significant figures. |\n| 4 | Natural variability of data. | M1 | 1 | Explains why a later sample can give different statistics. |",
    "marks": 6
  },
  {
    "id": "AS2MeanStandardDeviationQ003",
    "moduleId": "S2",
    "topic": "Standard Deviation",
    "type": "Exam-Style",
    "questionMarkdown": "Paul is looking to find the mean and standard deviation of the heights of seventeen-year-olds.  \nHe takes a sample within his school and the results are given in Table 1 below.\n\n**Table 1**\n\n| Height (to nearest centimetre) | 150-159 | 160-169 | 170-179 | 180-189 |\n|---|---:|---:|---:|---:|\n| Frequency | 6 | 29 | 31 | 5 |\n\nEstimate the mean and standard deviation using these data. [5]",
    "markSchemeMarkdown": "| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | From calculator: $n=71$, $\\sum fx = 12029.5$, $\\sum fx^2 = 2042127.75$ | MW1 | 1 | Uses grouped midpoints and totals. |\n| 2 | $\\bar{x}=169.43\\ldots = 169$ cm (3 sf) | M1 W1 | 2 | Calculates and rounds the mean. |\n| 3 | $\\sigma_{n-1}=7.535\\ldots = 7.54$ cm (3 sf) | M1 W1 | 2 | Calculates and rounds the sample standard deviation. |",
    "marks": 5
  },
  {
    "id": "AS2MeanStandardDeviationQ004",
    "moduleId": "S2",
    "topic": "Standard Deviation",
    "type": "Exam-Style",
    "questionMarkdown": "All members of a youth club filled in a questionnaire which included a question about the amount of time spent watching television the previous week.\n\nThe results are given in Table 1 below.\n\n**Table 1**\n\n| Time (nearest hour) | 2-4 | 5-9 | 10-14 | 15-20 |\n|---|---:|---:|---:|---:|\n| Frequency | 16 | 38 | 42 | 9 |\n\nFind the mean and standard deviation for these data. [5]",
    "markSchemeMarkdown": "| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | From calculator: $n=105$, $\\sum fx = 975.5$, $\\sum fx^2 = 10810.25$ | M1 | 1 | Uses grouped-data totals. |\n| 2 | $\\bar{x}=9.2905=9.29$ (3 sf) | M1 W1 | 2 | Calculates and rounds the mean. |\n| 3 | $\\sigma_n=4.079\\ldots=4.08$ (3 sf) | M1 W1 | 2 | Calculates and rounds the population standard deviation. |",
    "marks": 5
  },
  {
    "id": "AS2MeanStandardDeviationQ005",
    "moduleId": "S2",
    "topic": "Standard Deviation",
    "type": "Exam-Style",
    "questionMarkdown": "Table 1 below shows the time, recorded to the nearest hour, spent watching TV in a particular week by a random sample of 60 students.\n\n**Table 1**\n\n| Time (nearest hour) | 1-10 | 11-20 | 21-25 | 26-30 | 31-35 | 36-49 |\n|---|---:|---:|---:|---:|---:|---:|\n| Frequency | 7 | 15 | 16 | 12 | 6 | 4 |\n\n(i) Find an estimate of the mean time spent watching TV by this sample of students. [3]\n\nNote: The supplied mark scheme contains a January 2013 Question 1 part (ii), but the matching question text is not visible in the supplied questions PDF page. That unmatched mark scheme entry is recorded in the solutions file.",
    "markSchemeMarkdown": "| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | Midvalues: $5.5, 15.5, 23, 28, 33, 42.5$ | MW1 | 1 | Uses grouped-data midpoints. |\n| 2 | $\\sum f = 60$, $\\sum fx = 1343$ | M1 | 1 | Forms the frequency total and weighted total. |\n| 3 | Mean $=22.4$ | W1 | 1 | Calculates the estimated mean. |",
    "marks": 3
  },
  {
    "id": "AS2MeanStandardDeviationQ006",
    "moduleId": "S2",
    "topic": "Standard Deviation",
    "type": "Exam-Style",
    "questionMarkdown": "The wingspans of a random sample of moths were recorded.  \nThe results are summarised in Table 1 below.\n\n**Table 1**\n\n| Wingspan, $w$, mm | Frequency |\n|---|---:|\n| $20 \\leq w < 40$ | 10 |\n| $40 \\leq w < 50$ | 16 |\n| $50 \\leq w < 60$ | 30 |\n| $60 \\leq w < 70$ | 36 |\n| $70 \\leq w < 80$ | 30 |\n| $80 \\leq w < 100$ | 0 |\n| $100 \\leq w < 120$ | 1 |\n\nCalculate an estimate of the:\n\n(i) mean wingspan, [3]\n\n(ii) median wingspan. [4]",
    "markSchemeMarkdown": "| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | Midpoints $x$: $30,45,55,65,75,90,110$ | M1 | 1 | Uses midpoints for the grouped wingspan classes. |\n| 2 | $n=123$, $\\sum fx=7370$, $\\bar{x}=59.91869919\\ldots = 59.9$ (3 s.f.) | MW1 W1 | 2 | Forms the weighted total and calculates the mean. |\n| 3 | Cumulative frequencies: $10,26,56,92,122,122,123$; the median is the $\\dfrac{123+1}{2}=62$nd value, which lies in the class $60\\leq w<70$ | MW1 | 1 | Builds cumulative frequencies and identifies the median class. |\n| 4 | Median lies $(62-56)$ places into the class $60\\leq w<70$, which has frequency $36$; median is $\\dfrac{6}{36}=\\dfrac16$ of the way into the class | MW1 | 1 | Locates the median within the class. |\n| 5 | Median $=60+(0.166666\\ldots\\times10)=61.6666\\ldots=61.7$ mm (3 s.f.) | M1 W1 | 2 | Interpolates and rounds the median. |",
    "marks": 7
  },
  {
    "id": "AS2MeanStandardDeviationQ007",
    "moduleId": "S2",
    "topic": "Standard Deviation",
    "type": "Exam-Style",
    "questionMarkdown": "The same 55 students take end of term examinations in Mathematics and Science.  \nTable 1 below shows a summary of the marks obtained in the Mathematics examination.\n\n**Table 1**\n\n| Marks | 1-10 | 11-20 | 21-30 | 31-40 | 41-50 |\n|---|---:|---:|---:|---:|---:|\n| Frequency | 1 | 15 | 25 | 12 | 2 |\n\n(i) Find the mean and standard deviation of these marks. [5]\n\nThe Mathematics examination was marked out of 50.  \nThese marks need to be doubled so that they can be reported as marks out of 100.\n\n(ii) Find the mean and standard deviation of these adjusted marks. [2]\n\nThe science marks are given as marks out of 100.  \nThe mean and standard deviation of the Science marks are 47.2 and 11.2 respectively.\n\n(iii) State 2 differences in the performances of the students in the two examinations. [2]",
    "markSchemeMarkdown": "| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | M.I.V.: $5\\frac12, 15\\frac12, 25\\frac12, 35\\frac12, 45\\frac12$ with frequencies $1,15,25,12,2$; $n=55$, $\\sum fx=1392.5$, $\\sum fx^2=39153.75$ | MW1 | 1 | Uses mid-interval values and forms grouped-data totals. |\n| 2 | Mean $=25.3$ (3 s.f.) | M1 W1 | 2 | Calculates and rounds the mean. |\n| 3 | S.D. $=8.42$ (3 s.f.) | M1 W1 | 2 | Calculates and rounds the standard deviation. |\n| 4 | New mean $=50.6$ (3 s.f.) | MW1 | 1 | Doubles the mean when marks are doubled. |\n| 5 | New S.D. $=16.8$ (3 s.f.) | MW1 | 1 | Doubles the standard deviation when marks are doubled. |\n| 6 | As the mean was higher in Mathematics the students on average did better in Mathematics than in Science. The marks were more spread out in Mathematics than in Science as the S.D.s shows. | MW2 | 2 | Compares centre and spread in context. |",
    "marks": 9
  },
  {
    "id": "AS2MeanStandardDeviationQ008",
    "moduleId": "S2",
    "topic": "Standard Deviation",
    "type": "Exam-Style",
    "questionMarkdown": "Table 1 below summarises the times, recorded to the nearest minute, that a physiotherapist spent with the same patient.\n\n**Table 1**\n\n| Time | 5-9 | 10-14 | 15-19 | 20-24 | 25-29 |\n|---|---:|---:|---:|---:|---:|\n| Number of sessions | 2 | 6 | 20 | $a$ | 8 |\n\nThe physiotherapist has deleted the number of sessions of between 20 and 24 minutes that he spent with the patient.  \nHe had previously calculated from the table that the mean time that he spent with the patient was 19 minutes.\n\n(i) Find $a$. [3]\n\n(ii) Find the standard deviation of the times that the physiotherapist spent with the patient. [2]",
    "markSchemeMarkdown": "| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | MIV: $7,12,17,22,27$ with frequencies $2,6,20,a,8$ | MW1 | 1 | Uses mid-interval values. |\n| 2 | $\\dfrac{14+72+340+22a+216}{36+a}=19$, so $a=14$ | MW1 W1 | 2 | Sets up the mean equation and solves for the missing frequency. |\n| 3 | $n=50$, mean $=19$, $\\sum fx^2=19350$; $\\sigma_n=\\text{S.D.}=5.10$ (3 s.f.) | M1 W1 | 2 | Calculates and rounds the standard deviation. |",
    "marks": 5
  },
  {
    "id": "AS2MeanStandardDeviationQ009",
    "moduleId": "S2",
    "topic": "Standard Deviation",
    "type": "Exam-Style",
    "questionMarkdown": "The masses of 40 objects were recorded to the nearest kilogram.  \nThe histogram in Fig. 1 below illustrates the data obtained.\n\n[VISUAL PLACEHOLDER: AS2MeanStandardDeviationQ009SVG-001 | Source: Questions PDF p.7 | Insert from AS2_mean_standard_deviation_svg.md | Purpose: web-compatible recreation of Fig. 1 histogram]\n\n[VISUAL PLACEHOLDER: AS2MeanStandardDeviationQ009TikZ-001 | Source: Questions PDF p.7 | Insert from AS2_mean_standard_deviation_tikz.md | Purpose: mathematical TikZ recreation of Fig. 1 histogram]\n\n**Fig. 1**\n\n(i) Given that the number of objects in the first group is 6, write out the frequency distribution table for the data. [5]\n\n(ii) Find an estimate for the mean mass of the 40 objects. [2]\n\n(iii) Find an estimate for their median mass. [5]",
    "markSchemeMarkdown": "| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | Mass (kg): $2$-$5$, $6$-$9$, $10$-$17$, $18$-$21$, $22$-$31$ | MW2 | 2 | Converts histogram class boundaries into recorded-to-nearest-kg groups. |\n| 2 | Frequencies: $6,9,4,6,15$ | M1 W2 | 3 | Uses frequency density $\\times$ class width. |\n| 3 | M.I.V.: $3\\frac12, 7\\frac12, 13\\frac12, 19\\frac12, 26\\frac12$ | MW1 | 1 | Uses mid-interval values. |\n| 4 | Mean $=\\dfrac{657}{40}=16.4$ kg (3 s.f.) | MW1 | 1 | Calculates the estimated mean. |\n| 5 | To find median, $\\frac12$ of the area of the histogram is below and $\\frac12$ above, so $20:20$ | MW1 | 1 | Uses half of the total frequency/area. |\n| 6 | Median group $18$-$21$; $6+9+4=19$, so require 1 more out of $18$-$21$ group, i.e. $\\frac16$ way into group | MW1 | 1 | Identifies median class and position. |\n| 7 | Median $=17.5+\\dfrac16\\times4$ | M1 MW1 | 2 | Interpolates from the lower class boundary. |\n| 8 | Median $=18.2$ kg (3 s.f.) | W1 | 1 | Rounds the median. |",
    "marks": 12
  },
  {
    "id": "AS2MeanStandardDeviationQ010",
    "moduleId": "S2",
    "topic": "Standard Deviation",
    "type": "Exam-Style",
    "questionMarkdown": "Each day a medical practice records the number of times patients missed their appointments.  \nWhen planning for the next financial year, the practice manager selected the information for the month of March for one G.P.  \nThe results are given in Table 1 below.\n\n**Table 1**\n\n| Number of missed appointments per day | 0 | 1 | 2 | 3 | 4 |\n|---|---:|---:|---:|---:|---:|\n| Number of days | 1 | 8 | 6 | 4 | 2 |\n\n(i) Find the mean and standard deviation of the number of missed appointments per day. [4]\n\nThe local health board published figures which stated that the mean number of missed appointments per G.P. in the area was 2.4 per day with a standard deviation of 0.65 per day.\n\n(ii) Suggest two factors which may have contributed to the differences between the results of the medical practice and those of the health board. [2]",
    "markSchemeMarkdown": "| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | $\\sum f=21$ | - | - | Total number of days. |\n| 2 | $\\sum fx=40$ | - | - | Weighted total of missed appointments. |\n| 3 | $\\sum fx^2=100$ | - | - | Squared weighted total. |\n| 4 | $\\bar{x}=\\dfrac{\\sum fx}{\\sum f}=\\dfrac{40}{21}=1.90$ (3 s.f.) | M1 W1 | 2 | Calculates and rounds the mean. |\n| 5 | $\\sigma_{n-1}=1.09$ (3 s.f.) or $\\sigma_n=1.06$ | M1 W1 | 2 | Calculates an accepted standard deviation. |\n| 6 | Any sensible reason: March was untypical; Health Board stats are from population data; other practices could influence values more | M2 | 2 | Gives two sensible contextual factors. |",
    "marks": 6
  },
  {
    "id": "AS2MeanStandardDeviationQ011",
    "moduleId": "S2",
    "topic": "Standard Deviation",
    "type": "Exam-Style",
    "questionMarkdown": "Pauline is analysing information about the times spent parked in a hospital car park.  \nShe has misplaced her original data but still has the cumulative frequency table, shown in Table 2 below.\n\n**Table 2**\n\n| Time (hours) | $<0.5$ | $<1.0$ | $<1.5$ | $<2.0$ | $<2.5$ | $<3.0$ |\n|---|---:|---:|---:|---:|---:|---:|\n| Cumulative frequency | 38 | 87 | 154 | 207 | 235 | 250 |\n\n(i) Find an estimate for the median time spent in the car park. [6]\n\n(ii) Find an estimate for the mean time spent in the car park. [5]",
    "markSchemeMarkdown": "| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | $\\dfrac{250}{2}=125 \\Rightarrow$ median in the $<1.5$ group | MW1 | 1 | Locates the median position and class. |\n| 2 | $125-87=38$ | W1 | 1 | Finds position inside the median class. |\n| 3 | Median $=1.0+\\dfrac{38}{67}\\times0.5$ | M1 W2 | 3 | Interpolates within the class. |\n| 4 | Median $=1.2835\\ldots=1.28$ hours (3 s.f.) | W1 | 1 | Rounds the median. |\n| 5 | Note: if $\\dfrac{250+1}{2}$ used: median $=1.2873\\ldots=1.29$ hours (3 s.f.) | - | - | Alternative accepted median convention. |\n| 6 | Mid-interval values: $0.25,0.75,1.25,1.75,2.25,2.75$ | MW1 | 1 | Uses midpoints from the cumulative classes. |\n| 7 | Frequencies: $38,49,67,53,28,15$ | MW2 | 2 | Converts cumulative frequencies to class frequencies. |\n| 8 | From calculator: $\\sum fx=327$ | - | - | Weighted total. |\n| 9 | Mean $=\\dfrac{327}{250}=1.308=1.31$ hrs (3 s.f.) | M1 W1 | 2 | Calculates and rounds the mean. |",
    "marks": 11
  },
  {
    "id": "S3-Q1",
    "moduleId": "S3",
    "topic": "Venn Diagrams & Addition Law",
    "type": "Targeted Practice",
    "marks": 5,
    "questionMarkdown": "\nFor two events A and B:\n$$\nP(A)=0.25,\\quad P(B)=0.40\n$$\n\n![visual:S3-Venn]()\n\n(a) Find $P(A\\cup B)$ if A and B are mutually exclusive.\n(b) Find $P(A\\cup B)$ if A and B are independent.\n",
    "markSchemeMarkdown": "\n**(a)** If A and B are mutually exclusive, $P(A\\cap B)=0$. [M1]\n$$\nP(A\\cup B)=0.25+0.40=0.65\n$$\n[A1]\n\n**(b)** If A and B are independent:\n$$\nP(A\\cap B)=P(A)P(B)=0.25\\times0.40=0.10\n$$\n[M1 A1]\n$$\nP(A\\cup B)=0.25+0.40-0.10=0.55\n$$\n[W1]\n"
  },
  {
    "id": "S3-Q2",
    "moduleId": "S3",
    "topic": "Two-Way Tables",
    "type": "Exam-Style",
    "marks": 5,
    "questionMarkdown": "\nIn a group of students, A represents studying Technology and B represents being male.\n\n![visual:S3-Table]()\n\nThe probabilities are:\n* $P(A)=0.60$\n* $P(B)=0.50$\n* $P(A\\cap B)=0.20$\n\n(a) Find $P(A'\\cap B')$.\n(b) Determine whether A and B are independent.\n",
    "markSchemeMarkdown": "\n**(a)**\n$$\nP(A')=1-0.60=0.40\n$$\n[M1]\n$$\nP(A'\\cap B)=P(B)-P(A\\cap B)=0.50-0.20=0.30\n$$\n[A1]\n$$\nP(A'\\cap B')=0.40-0.30=0.10\n$$\n[A1]\n\n**(b)** Test independence:\n$$\nP(A)P(B)=0.60\\times0.50=0.30\n$$\n[M1]\nBut:\n$$\nP(A\\cap B)=0.20\n$$\nSince $0.20\\neq0.30$, A and B are not independent. [W1]\n"
  },
  {
    "id": "S3-Q3",
    "moduleId": "S3",
    "topic": "Tree Diagrams",
    "type": "Exam-Style",
    "marks": 6,
    "questionMarkdown": "\nA machine makes components. On any one test, the probability that a component passes is 0.8. Two components are tested independently.\n\n![visual:S3-Tree]()\n\n(a) Find the probability that both components pass.\n(b) Find the probability that exactly one component passes.\n(c) Find the probability that at least one component passes.\n",
    "markSchemeMarkdown": "\nLet P mean pass and F mean fail. Since $P(P)=0.8$, $P(F)=0.2$. [M1]\n\n**(a)**\n$$\n0.8\\times0.8=0.64\n$$\n[A1]\n\n**(b)** Exactly one pass means PF or FP:\n$$\n(0.8\\times0.2)+(0.2\\times0.8)=0.16+0.16=0.32\n$$\n[M1 A1]\n\n**(c)** At least one pass is the complement of both failing:\n$$\n1-(0.2\\times0.2)=1-0.04=0.96\n$$\n[M1 A1]\n"
  },
  {
    "id": "S3-Q4",
    "moduleId": "S3",
    "topic": "Exhaustive Events",
    "type": "Targeted Practice",
    "marks": 4,
    "questionMarkdown": "\nEvents A and B are exhaustive. $P(A)=0.65$ and $P(B)=0.42$.\n\n(a) Find $P(A\\cap B)$.\n(b) State whether A and B are mutually exclusive, giving a reason.\n",
    "markSchemeMarkdown": "\n**(a)** Since A and B are exhaustive, $P(A\\cup B)=1$. [M1]\n$$\n1=0.65+0.42-P(A\\cap B)\n$$\n[W1]\n$$\nP(A\\cap B)=0.07\n$$\n[A1]\n\n**(b)** They are not mutually exclusive because $P(A\\cap B)=0.07\\neq0$. [W1]\n"
  },
  {
    "id": "AS2ProbabilityQ001",
    "moduleId": "S3",
    "topic": "Probability",
    "type": "Exam-Style",
    "questionMarkdown": "7  [In this question the convention $\\overline{A}$ is used to denote the event `not $A$'.]\n\nConsider the following probability tree diagram.\n\n[VISUAL PLACEHOLDER: AS2ProbabilityQ001MMD-001 | Source: Questions PDF p.2 | Insert from AS2_probability_mermaid.md | Purpose: probability tree diagram for events $A$, $\\overline{A}$, $B$ and $\\overline{B}$]\n\nIn **Fig. 1** above $x$, $y$ and $z$ are the probabilities of three events.\n\n(i) Using **Fig. 1** state the events for which $x$, $y$ and $z$ are the probabilities. [3]\n\n(ii) Given that $z = 1 - x$ and $y = 2x$, find an expression for $P(\\overline{B})$ in terms of $x$. [4]\n\n(iii) If $P(\\overline{B}) = 0.25$, find $x$. [5]",
    "markSchemeMarkdown": "| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | $x = P(A)$ | MW1 | 1 | Identifies the first branch probability. |\n| 2 | $y = P(B \\mid \\overline{A})$ | MW1 | 1 | Identifies the conditional branch from $\\overline{A}$. |\n| 3 | $z = P(\\overline{B} \\mid A)$ | MW1 | 1 | Identifies the conditional branch from $A$. |\n| 4 | $P(\\overline{B}) = P(A)P(\\overline{B}) + P(\\overline{A})P(\\overline{B})$ | M2 | 2 | Uses total probability over the two first branches. |\n| 5 | $P(\\overline{B}) = x(1-x) + (1-x)(1-2x)$ | MW1 | 1 | Substitutes $z=1-x$ and $y=2x$, so $P(\\overline{B}\\mid \\overline{A})=1-2x$. |\n| 6 | $= x-x^2+1-3x+2x^2$<br>$= x^2-2x+1$ | W1 | 1 | Simplifies the expression in $x$. |\n| 7 | $P(\\overline{B})=0.25 \\Rightarrow x^2-2x+1=\\dfrac{1}{4}$ | MW1 | 1 | Equates expression to the given probability. |\n| 8 | $4x^2-8x+3=0$ | MW1 | 1 | Rearranges to a quadratic equation. |\n| 9 | $(2x-1)(2x-3)=0$ | M1 | 1 | Factorises the quadratic. |\n| 10 | $x=\\dfrac{1}{2}$ or $\\dfrac{3}{2}$ | W1 | 1 | Finds both algebraic roots. |\n| 11 | $0 \\leq x \\leq 1 \\therefore x=0.5$ | W1 | 1 | Rejects the impossible probability value. |",
    "marks": 12
  },
  {
    "id": "AS2ProbabilityQ002",
    "moduleId": "S3",
    "topic": "Probability",
    "type": "Exam-Style",
    "questionMarkdown": "7  Consider the following Venn diagram showing two events $A$ and $B$.\n\n[VISUAL PLACEHOLDER: AS2ProbabilityQ002SVG-001 | Source: Questions PDF p.3 | Insert from AS2_probability_svg.md | Purpose: Venn diagram showing regions $w$, $x$, $y$ and $z$]\n\nIn **Fig. 1** above, $w$, $x$, $y$ and $z$ are probabilities where\n\n$$\nw + x + y + z = 1\n$$\n\nWrite down the events whose probabilities are:\n\n(i) $x + y$ [1]\n\n(ii) $w + x + y$ [1]\n\n(iii) $w$ [1]\n\n(iv) $z$ [2]\n\n(v) $\\dfrac{x}{w + x}$ [2]\n\n(vi) If $P(B \\mid A) = \\dfrac{1}{4}$, $P(A \\mid B) = \\dfrac{1}{5}$ and $P(B \\mid \\overline{A}) = \\dfrac{1}{8}$, show that $P(A) = \\dfrac{1}{9}$. [8]",
    "markSchemeMarkdown": "| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | (i) $B$ | M1 | 1 | Region $x+y$ is event $B$. |\n| 2 | (ii) $A \\cup B$ | M1 | 1 | Region $w+x+y$ is the union. |\n| 3 | (iii) $A \\cap \\overline{B}$ | M1 | 1 | Region $w$ is in $A$ only. |\n| 4 | (iv) $\\overline{A} \\cap \\overline{B}$ | M2 | 2 | Region $z$ is outside both events. |\n| 5 | (v) $B \\mid A$ | M2 | 2 | $x/(w+x)$ is the probability of $B$ given $A$. |\n| 6 | $P(B \\mid A)=\\dfrac{P(A\\cap B)}{P(A)}=\\dfrac{1}{4}$ | M1 MW1 | 2 | Uses conditional probability for $B$ given $A$. |\n| 7 | $\\dfrac{P(A\\cap B)}{P(B)}=\\dfrac{1}{5}$ | MW1 | 1 | Uses conditional probability for $A$ given $B$. |\n| 8 | $\\dfrac{P(B\\cap \\overline{A})}{P(\\overline{A})}=\\dfrac{1}{8}$ | MW1 | 1 | Uses conditional probability for $B$ given not $A$. |\n| 9 | $P(A\\cap B)=\\dfrac{P(A)}{4}=\\dfrac{P(B)}{5}$ | M1 | 1 | Expresses the intersection in two ways. |\n| 10 | $P(B\\cap \\overline{A})=P(B)-P(A\\cap B)$ | M1 | 1 | Splits $B$ into the part inside and outside $A$. |\n| 11 | $\\dfrac{\\frac{5P(A)}{4}-\\frac{P(A)}{4}}{1-P(A)}=\\dfrac{1}{8}$ | MW1 | 1 | Substitutes expressions into the third conditional statement. |\n| 12 | $8P(A)=1-P(A)$<br>$9P(A)=1$ |  | 0 | The official line continues the algebra from the previous mark. |\n| 13 | $P(A)=\\dfrac{1}{9}$ Q.E.D. | W1 | 1 | Reaches the required result. |",
    "marks": 15
  },
  {
    "id": "AS2ProbabilityQ003",
    "moduleId": "S3",
    "topic": "Probability",
    "type": "Exam-Style",
    "questionMarkdown": "6  (a) Katy opens a bag of fruit-flavoured sweets which contains 7 strawberry flavoured and 5 lemon flavoured.  \nShe lets her two friends each choose a sweet at random, and then takes one at random herself.  \nUsing a tree diagram, or otherwise, find the probability that Katy chooses a lemon flavoured sweet. [7]\n\n[VISUAL PLACEHOLDER: AS2ProbabilityQ003MMD-001 | Source: AI-proposed visual support, not present in questions PDF | Insert from AS2_probability_mermaid.md | Purpose: probability tree showing the three sweet selections without replacement]\n\n(b) $A$ and $B$ are exhaustive events such that $P(A) = 0.65$ and $P(B) = 0.42$.  \nFind $P(A \\mid B)$. [5]",
    "markSchemeMarkdown": "| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | Tree branches begin with $\\dfrac{7}{12}$ for strawberry and $\\dfrac{5}{12}$ for lemon. | M1 | 1 | Sets up first selection probabilities. |\n| 2 | After first strawberry: $\\dfrac{6}{11}$ strawberry, $\\dfrac{5}{11}$ lemon. | W1 | 1 | Correctly adjusts totals after one strawberry is removed. |\n| 3 | After first lemon: $\\dfrac{7}{11}$ strawberry, $\\dfrac{4}{11}$ lemon. | MW1 | 1 | Correctly adjusts totals after one lemon is removed. |\n| 4 | Final branches use denominators $10$ with appropriate remaining strawberry/lemon counts. | M1 M1 M1 W1 | 4 | Completes the three-stage tree. |\n| 5 | $P(\\text{Lemon})=\\left(\\dfrac{7}{12}\\times\\dfrac{6}{11}\\times\\dfrac{5}{10}\\right)+\\left(\\dfrac{7}{12}\\times\\dfrac{5}{11}\\times\\dfrac{4}{10}\\right)+\\left(\\dfrac{5}{12}\\times\\dfrac{7}{11}\\times\\dfrac{4}{10}\\right)+\\left(\\dfrac{5}{12}\\times\\dfrac{4}{11}\\times\\dfrac{3}{10}\\right)$ |  | 0 | Adds the four routes where Katy's final sweet is lemon. |\n| 6 | $P(\\text{Lemon})=\\dfrac{5}{12}$ |  | 0 | Final probability from the displayed route sum. |\n| 7 | (b) $P(A)=0.65$, $P(B)=0.42$, $P(A\\cup B)=1$ | M1 | 1 | Uses exhaustive events. |\n| 8 | $P(A\\cap B)=P(A)+P(B)-P(A\\cup B)$ | M1 | 1 | Applies the union rule. |\n| 9 | $=0.65+0.42-1=0.07$ | W1 | 1 | Calculates the intersection. |\n| 10 | $P(A\\mid B)=\\dfrac{P(A\\cap B)}{P(B)}=\\dfrac{0.07}{0.42}=\\dfrac{1}{6}\\;(=0.167\\text{ to 3 s.f.})$ | M1 W1 | 2 | Uses the conditional probability formula. |",
    "marks": 12
  },
  {
    "id": "AS2ProbabilityQ004",
    "moduleId": "S3",
    "topic": "Probability",
    "type": "Exam-Style",
    "questionMarkdown": "6  (a) Members of a sports club were asked about which flavours of fizzy drink they liked.  \n52% liked cola.  \n42% liked lemon.  \n20% did not like either cola or lemon.\n\nFind the probability that a member chosen at random likes cola given that they also like lemon. [5]\n\n(b) $A$ and $B$ are two events where $P(A) = p$, $P(B) = 0.5$ and $P(A \\cup B) = 0.8$\n\n(i) If $A$ and $B$ are mutually exclusive events, find the value of $p$. [3]\n\n(ii) If $A$ and $B$ are independent events, find the value of $p$. [3]\n\n[INTERACTIVE PLACEHOLDER: AS2ProbabilitySupportWidget-001 | Source: AI-proposed checking tool, not present in questions PDF | Insert from AS2_probability_widgets.md | Purpose: probability rule checker for union, intersection, conditional probability and independence]",
    "markSchemeMarkdown": "| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | $C \\to$ cola, $L \\to$ lemon; $P(C)=0.52$, $P(L)=0.42$ |  | 0 | Defines events and records given probabilities. |\n| 2 | $P(C\\cup L)=1-P(\\overline{C}\\cap\\overline{L})=1-0.2=0.8$ | MW1 | 1 | Uses the complement of neither cola nor lemon. |\n| 3 | $P(C\\cap L)=P(C)+P(L)-P(C\\cup L)$ | M1 | 1 | Applies the union formula. |\n| 4 | $=0.52+0.42-0.8=0.14$ | W1 | 1 | Calculates the intersection. |\n| 5 | $P(C\\mid L)=\\dfrac{P(C\\cap L)}{P(L)}$ | M1 | 1 | Uses conditional probability. |\n| 6 | $=\\dfrac{0.14}{0.42}=\\dfrac{1}{3}$ | W1 | 1 | Final conditional probability. |\n| 7 | (b)(i) $P(A)=p$, $P(B)=0.5$, $P(A\\cup B)=0.8$, mutually exclusive $\\Rightarrow P(A\\cap B)=0$ | M1 | 1 | Uses mutual exclusivity. |\n| 8 | $P(A\\cup B)=P(A)+P(B)-P(A\\cap B)$ | M1 | 1 | Applies the union rule. |\n| 9 | $0.8=p+0.5-0 \\Rightarrow p=0.3$ | W1 | 1 | Solves for $p$. |\n| 10 | (b)(ii) Independent: $P(A\\cap B)=P(A)\\times P(B)=0.5p$ | M1 | 1 | Uses independence. |\n| 11 | $0.8=p+0.5-0.5p$ | M1 | 1 | Substitutes into the union formula. |\n| 12 | $0.3=0.5p \\Rightarrow p=0.6$ | W1 | 1 | Solves for $p$. |",
    "marks": 11
  },
  {
    "id": "AS2ProbabilityQ005",
    "moduleId": "S3",
    "topic": "Probability",
    "type": "Exam-Style",
    "questionMarkdown": "6  A leisure centre offers two types of exercise class, Yoga and Zumba.  \n$Y$ is the event that a person selected at random takes part in the Yoga class.  \n$Z$ is the event that a person selected at random takes part in the Zumba class.  \nThe events $Y$ and $Z$ are independent.\n\nAlso $P(Z) = \\dfrac{2}{5}$ and $P(Y) = P(\\overline{Y} \\cap \\overline{Z})$\n\nBy setting $y = P(Y)$ and forming an equation in $y$, or otherwise, find:\n\n(i) $P(Y)$; [5]\n\n(ii) $P(\\overline{Y} \\cap Z)$; [2]\n\n(iii) Write down $P(Y \\mid Z)$. [1]",
    "markSchemeMarkdown": "| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | (i) $P(Y)=P(\\overline{Y}\\cap \\overline{Z})$ | M1 | 1 | Starts from the given equality. |\n| 2 | $y=P(\\overline{Y})\\times P(\\overline{Z})$ | M1 | 1 | Uses independence of $Y$ and $Z$, so complements are also treated independently. |\n| 3 | $y=(1-y)\\times[1-P(Z)]$ | M1 | 1 | Substitutes complements. |\n| 4 | $y=(1-y)\\times\\dfrac{3}{5}$ | MW1 | 1 | Uses $P(Z)=2/5$. |\n| 5 | $5y=3-3y$, $8y=3$, $y=\\dfrac{3}{8}$ | W1 | 1 | Solves the equation. |\n| 6 | (ii) $P(\\overline{Y}\\cap Z)=P(\\overline{Y})\\times P(Z)$ | M1 | 1 | Uses independence for complement of $Y$ and $Z$. |\n| 7 | $=\\dfrac{5}{8}\\times\\dfrac{2}{5}=\\dfrac{1}{4}$ | W1 | 1 | Final intersection probability. |\n| 8 | (iii) $\\dfrac{3}{8}$ since independent $\\Rightarrow P(Y\\mid Z)=P(Y)=\\dfrac{3}{8}$ | MW1 | 1 | Uses independence to write the conditional probability. |",
    "marks": 8
  },
  {
    "id": "AS2ProbabilityQ006",
    "moduleId": "S3",
    "topic": "Probability",
    "type": "Exam-Style",
    "questionMarkdown": "7  A mobile phone shop stocks three models of the top selling Sphere Smart phone.  \n**Table 3** below shows the number of Sphere phones of each model sold in one week, together with the length of contract chosen by each customer.\n\n**Table 3**\n\n|  | 12 month | 18 month | 24 month | Total |\n|---|---:|---:|---:|---:|\n| Sphere 220 | 15 | 18 | 17 | 50 |\n| Sphere 300 | 32 | 24 | 14 | 70 |\n| Sphere 350 | 28 | 30 | 22 | 80 |\n| Total | 75 | 72 | 53 | 200 |\n\nCustomers are selected at random for a customer satisfaction survey.\n\n$A$ is the event that a customer purchased a Sphere 220 phone.  \n$B$ is the event that a customer chose an 18 month contract.  \n$C$ is the event that a customer purchased a Sphere 300 phone.\n\nFind the values of:\n\n(i) $P(B)$; [1]\n\n(ii) $P(A \\cap B)$; [2]\n\n(iii) $P(\\overline{C} \\cup \\overline{B})$; [3]\n\n(iv) $P(A \\mid B)$. [2]\n\n(v) Express in terms of the events $A$, $B$ and $C$ that have been defined, the event that a customer purchased a Sphere 350. [2]\n\nA skin may also be purchased to protect and style the Sphere phones.  \nOf the customers who purchased the Sphere 220, 14% also purchased a skin,  \nas did 30% of the customers who purchased the Sphere 300  \nand 40% of the customers who purchased the Sphere 350\n\nFind the probability that a customer selected at random purchased:\n\n(vi) a skin; [3]\n\n(vii) a Sphere 350, given that they did purchase a skin. [3]",
    "markSchemeMarkdown": "| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | (i) $P(B)=\\dfrac{72}{200}=\\dfrac{9}{25}$ | MW1 | 1 | Reads the 18-month total from the table. |\n| 2 | (ii) $P(A\\cap B)=\\dfrac{18}{200}=\\dfrac{9}{100}$ | M1 W1 | 2 | Reads the Sphere 220 and 18-month cell. |\n| 3 | (iii) $P(\\overline{C}\\cup \\overline{B})=\\dfrac{200-24}{200}=\\dfrac{176}{200}=\\dfrac{22}{25}$ | M1 W1 W1 | 3 | Uses the complement of $C\\cap B$. |\n| 4 | (iv) $P(A\\mid B)=\\dfrac{P(A\\cap B)}{P(B)}=\\dfrac{18}{200}\\times\\dfrac{200}{72}=\\dfrac{18}{72}=\\dfrac{1}{4}$ | M1 W1 | 2 | Conditional probability using the table values. |\n| 5 | (v) $\\overline{A}\\cap\\overline{C}$ | MW2 | 2 | Sphere 350 is neither Sphere 220 nor Sphere 300. |\n| 6 | (vi) Let $S$ be the event of a skin being purchased. |  | 0 | Defines the new event. |\n| 7 | $P(S)=P(S\\mid A)P(A)+P(S\\mid C)P(C)+P(S\\mid Sp350)P(Sp350)$ | M1 | 1 | Uses total probability across the three models. |\n| 8 | $P(S)=0.14\\times0.25+0.30\\times0.35+0.4\\times0.4=0.3$ | W1 W1 | 2 | Substitutes model probabilities and skin rates. |\n| 9 | (vii) $P(Sp350\\mid S)=\\dfrac{0.16}{0.3}=0.53333333\\ldots=0.533$ (3 s.f.) | M1 W2 | 3 | Uses conditional probability with the skin total. |",
    "marks": 16
  },
  {
    "id": "AS2ProbabilityQ007",
    "moduleId": "S3",
    "topic": "Probability",
    "type": "Exam-Style",
    "questionMarkdown": "7  A biased die, in the shape of a cube, has the numbers 1, 2, 3, 4, 5 and 6 respectively on its faces.  \nWhen the die is thrown:\n\n- the probability of getting 3 is equal to the probability of getting 1;\n- the probability of getting 6 is twice the probability of getting 1;\n- the probability of getting 5 is twice the probability of getting 6;\n- the probabilities of getting 2, 4, 6 are equal.\n\n(i) When this die is thrown find the probability of getting 1. [3]\n\nWhen a biased coin is tossed the probability of getting a head is $\\dfrac{2}{3}$\n\nA trial consists of tossing the coin and throwing the die.\n\n(ii) Find the probability of getting:\n\n(a) a head and a 6; [2]\n\n(b) a tail and a prime number. [4]\n\n(iii) Find the probability, in 4 trials, of getting a head together with a 6 only once. [3]",
    "markSchemeMarkdown": "| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | Outcomes $1,2,3,4,5,6$ have probabilities $x,2x,x,2x,4x,2x$ | MW1 | 1 | Translates the biased die conditions. |\n| 2 | $12x=1$ | M1 | 1 | Uses total probability equal to 1. |\n| 3 | $x=\\dfrac{1}{12}$, therefore $P(1)=\\dfrac{1}{12}$ | W1 | 1 | Finds the probability of getting 1. |\n| 4 | (ii)(a) $P(H\\text{ and }6)=\\dfrac{2}{3}\\times\\dfrac{2}{12}$ | M1 | 1 | Multiplies independent coin and die probabilities. |\n| 5 | $=\\dfrac{1}{9}$ | W1 | 1 | Final probability. |\n| 6 | (ii)(b) $P(T)=P(T\\text{ and }2)+P(T\\text{ and }3)+P(T\\text{ and }5)$ | M1 W1 | 2 | Tail and prime outcomes $2$, $3$, $5$. |\n| 7 | $=\\dfrac{1}{3}\\times\\dfrac{2}{12}+\\dfrac{1}{3}\\times\\dfrac{1}{12}+\\dfrac{1}{3}\\times\\dfrac{4}{12}$ | MW1 | 1 | Substitutes the probabilities. |\n| 8 | $=\\dfrac{7}{36}$ | W1 | 1 | Final probability. |\n| 9 | (iii) $\\operatorname{Bin}\\left(4,\\dfrac{1}{9}\\right)$ | M1 | 1 | Recognises a binomial setting with four trials. |\n| 10 | $P=\\left(\\dfrac{1}{9}\\right)\\left(\\dfrac{8}{9}\\right)^3\\times4$ | W1 | 1 | Probability of exactly one success. |\n| 11 | $=\\dfrac{2048}{6561}$ | W1 | 1 | Final exact value. |",
    "marks": 12
  },
  {
    "id": "AS2ProbabilityQ008",
    "moduleId": "S3",
    "topic": "Probability",
    "type": "Exam-Style",
    "questionMarkdown": "5  $A$ and $B$ are two events such that:\n\n$$\nP(A \\mid B) = \\frac{1}{4}\n$$\n\n$$\nP(B \\mid A) = \\frac{1}{3}\n$$\n\nand\n\n$$\nP(B) = \\frac{4}{7}\n$$\n\n(i) Find $P(A \\cup B)$. [7]\n\n(ii) State, giving a reason:\n\n(a) whether or not $A$ and $B$ are mutually exclusive; [1]\n\n(b) whether or not $A$ and $B$ are exhaustive; [1]\n\n(c) whether or not $A$ and $B$ are independent. [1]",
    "markSchemeMarkdown": "| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | $P(A\\mid B)=\\dfrac{P(A\\cap B)}{P(B)}=\\dfrac{1}{4}$ | M1 | 1 | Uses conditional probability. |\n| 2 | $\\dfrac{P(A\\cap B)}{4/7}=\\dfrac{1}{4}$ | W1 | 1 | Substitutes $P(B)=4/7$. |\n| 3 | $P(A\\cap B)=\\dfrac{1}{7}$ | W1 | 1 | Finds the intersection. |\n| 4 | $P(B\\mid A)=\\dfrac{P(B\\cap A)}{P(A)}=\\dfrac{1/7}{P(A)}=\\dfrac{1}{3}$ | MW1 | 1 | Uses the second conditional probability. |\n| 5 | $P(A)=\\dfrac{3}{7}$ | W1 | 1 | Finds $P(A)$. |\n| 6 | $P(A\\cup B)=P(A)+P(B)-P(A\\cap B)$ | M1 | 1 | Uses the union rule. |\n| 7 | $=\\dfrac{3}{7}+\\dfrac{4}{7}-\\dfrac{1}{7}=\\dfrac{6}{7}$ | W1 | 1 | Final union probability. |\n| 8 | (ii)(a) Not mutually exclusive as $P(A\\cap B)\\ne0$ | MW1 | 1 | Intersection is non-zero. |\n| 9 | (ii)(b) Not exhaustive as $P(A\\cup B)\\ne1$ | MW1 | 1 | Union is not the whole sample space. |\n| 10 | (ii)(c) Not independent as $P(A\\cap B)\\ne P(A)\\times P(B)$ | MW1 | 1 | Independence product test fails. |",
    "marks": 10
  },
  {
    "id": "AS2ProbabilityQ009",
    "moduleId": "S3",
    "topic": "Probability",
    "type": "Exam-Style",
    "questionMarkdown": "8  A bag initially contains 2 red and 4 white balls identical in shape and size.\n\nA trial consists of selecting a ball at random:  \nif the ball is red then it is replaced and an additional red ball is added to the bag;  \nif the ball is white then it is not replaced.\n\nThree trials are carried out, one after the other.\n\n[VISUAL PLACEHOLDER: AS2ProbabilityQ009MMD-001 | Source: AI-proposed visual support, not present in questions PDF | Insert from AS2_probability_mermaid.md | Purpose: three-trial probability tree showing how replacement rules change the bag]\n\n(i) Find the probability that exactly one white ball is selected. [6]\n\n(ii) Find the probability that at least one white ball is selected. [3]\n\n(iii) Given that all three balls selected are of the same colour, find the probability that they are all red. [4]",
    "markSchemeMarkdown": "| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | (i) $P(1w)=P(wwr)+P(rwr)+P(rrw)$ |  | 0 | Lists the three routes with exactly one white. |\n| 2 | $=\\dfrac{4}{6}\\times\\dfrac{2}{5}\\times\\dfrac{1}{2}+\\dfrac{2}{6}\\times\\dfrac{4}{7}\\times\\dfrac{1}{2}+\\dfrac{2}{6}\\times\\dfrac{3}{7}\\times\\dfrac{1}{2}$ | M2 W3 | 5 | Multiplies along the three valid paths. |\n| 3 | $=\\dfrac{2}{15}+\\dfrac{2}{21}+\\dfrac{1}{14}=\\dfrac{3}{10}$ | W1 | 1 | Adds and simplifies. |\n| 4 | (ii) $1-P(\\text{all red})=1-\\dfrac{2}{6}\\times\\dfrac{3}{7}\\times\\dfrac{1}{2}$ | M1 W1 | 2 | Uses complement of no whites. |\n| 5 | $=\\dfrac{13}{14}$ | W1 | 1 | Final probability. |\n| 6 | (iii) $P(\\text{all red} \\mid \\text{all same colour})=\\dfrac{P(\\text{all red})}{P(\\text{all same colour})}$ | M1 W1 | 2 | Sets up conditional probability. |\n| 7 | $P(\\text{all same colour})=P(rrr)+P(www)$ |  | 0 | All same means all red or all white. |\n| 8 | $=\\dfrac{1}{14}+\\dfrac{4}{6}\\times\\dfrac{3}{5}\\times\\dfrac{2}{4}$ |  | 0 | Substitutes the two paths. |\n| 9 | $=\\dfrac{1}{14}+\\dfrac{1}{5}=\\dfrac{19}{70}$ | MW1 | 1 | Finds the denominator event. |\n| 10 | $\\dfrac{P(\\text{all red})}{P(\\text{all same colour})}=\\dfrac{1/14}{19/70}=\\dfrac{5}{19}$ | W1 | 1 | Final conditional probability. |",
    "marks": 13
  },
  {
    "id": "AS2ProbabilityQ010",
    "moduleId": "S3",
    "topic": "Probability",
    "type": "Exam-Style",
    "questionMarkdown": "7  At a crossroads vehicle drivers can choose to: go straight on, turn left or turn right. A traffic survey shows that of drivers approaching the crossroads from the same direction:\n\n$$\n40\\% \\text{ went straight on;}\n$$\n\n$$\n35\\% \\text{ turned left;}\n$$\n\n$$\n25\\% \\text{ turned right.}\n$$\n\nAssume that drivers choose direction independently.  \nFind the probability that of the next three vehicles approaching the crossroads:\n\n(i) all turn right; [2]\n\n(ii) all go in the same direction; [3]\n\n(iii) at least one turns left; [3]\n\n(iv) all turn left given that none turns right. [5]",
    "markSchemeMarkdown": "| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | (i) $P(r)=0.25$; $P(rrr)=0.25^3$ | M1 | 1 | Uses independence for all three turning right. |\n| 2 | $=0.0156$ (3 s.f.) | W1 | 1 | Final probability. |\n| 3 | (ii) $P(\\text{all r or all l or all s.o.})$ | M1 W1 | 2 | Adds the three same-direction possibilities. |\n| 4 | $=0.015625+0.35^3+0.4^3$ |  | 0 | Substitutes right, left and straight-on probabilities. |\n| 5 | $=0.123$ (3 s.f.) | W1 | 1 | Final probability. |\n| 6 | (iii) $P(\\text{at least 1 turns left})=1-P(\\text{no one turns left})$ | M1 | 1 | Uses complement. |\n| 7 | $P(\\text{no one turns left})=0.65^3$ | MW1 | 1 | Uses $1-0.35=0.65$. |\n| 8 | $P=1-0.65^3=0.725$ (3 s.f.) | W1 | 1 | Final probability. |\n| 9 | (iv) $P(\\text{all left}\\mid\\text{none turn right})$ | M1 | 1 | Sets up the conditional event. |\n| 10 | $=\\dfrac{0.35^3}{(1-0.25)^3}$ | MW1 | 1 | Numerator and denominator for the conditional probability. |\n| 11 | denominator $(1-0.25)^3$ | M1 W1 | 2 | Uses probability of no right turns for all three vehicles. |\n| 12 | $=0.102$ (3 s.f.) | W1 | 1 | Final probability. |",
    "marks": 13
  },
  {
    "id": "AS2ProbabilityQ011",
    "moduleId": "S3",
    "topic": "Probability",
    "type": "Exam-Style",
    "questionMarkdown": "6  (a) Exhaustive events $A$ and $B$ are such that\n\n$$\nP(B) = 0.72 \\quad \\text{and} \\quad P(B \\mid A) = 0.3\n$$\n\nFind $P(A)$. [4]\n\n(b) Children attending a summer scheme choose one or more activities.  \nThese activities include football and tennis amongst others.\n\nThe probability that a child chooses football but not tennis is $\\dfrac{2}{5}$\n\nThe probability that a child chooses tennis but not football is $\\dfrac{2}{15}$\n\nThe events “chooses football” and “chooses tennis” are independent.\n\nThe probability that a child chooses both tennis and football is $x$.\n\nFind $x$. [6]",
    "markSchemeMarkdown": "| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | (a) $P(A\\cup B)=1$ | M1 | 1 | Uses exhaustive events. |\n| 2 | $P(A\\cap B)=P(B\\mid A)\\cdot P(A)=0.3P(A)$ | M1 | 1 | Converts the conditional probability. |\n| 3 | $P(A\\cup B)=P(A)+P(B)-P(A\\cap B)$ | M1 | 1 | Applies the union rule. |\n| 4 | $1=P(A)+0.72-0.3P(A)$<br>$0.28=0.7P(A)$<br>$P(A)=0.4$ | W1 | 1 | Solves for $P(A)$. |\n| 5 | (b) Let $x$ be $P(T\\cap F)$ |  | 0 | Defines the unknown intersection. |\n| 6 | $P(F)=\\dfrac{2}{5}+x$ | MW1 | 1 | Football is football-only plus both. |\n| 7 | $P(T)=\\dfrac{2}{15}+x$ | MW1 | 1 | Tennis is tennis-only plus both. |\n| 8 | Independent $\\Rightarrow \\left(\\dfrac{2}{5}+x\\right)\\left(\\dfrac{2}{15}+x\\right)=x$ | M1 W1 | 2 | Uses independence product rule. |\n| 9 | $\\dfrac{4}{75}+\\dfrac{8}{15}x+x^2=x$ |  | 0 | Expands the equation. |\n| 10 | $x^2-\\dfrac{7}{15}x+\\dfrac{4}{75}=0$<br>$75x^2-35x+4=0$ | MW1 | 1 | Rearranges to a quadratic. |\n| 11 | $(15x-4)(5x-1)=0$ |  | 0 | Factorises the quadratic. |\n| 12 | $x=\\dfrac{4}{15}$ or $\\dfrac{1}{5}$ | W1 | 1 | Gives possible values of $x$. |",
    "marks": 10
  },
  {
    "id": "AS2ProbabilityQ012",
    "moduleId": "S3",
    "topic": "Probability",
    "type": "Exam-Style",
    "questionMarkdown": "3  A jar contains twelve marbles: 5 red, 4 green and 3 yellow.  \nTwo marbles are selected at random without replacement.\n\n[VISUAL PLACEHOLDER: AS2ProbabilityQ012MMD-001 | Source: AI-proposed visual support, not present in questions PDF | Insert from AS2_probability_mermaid.md | Purpose: two-draw marble tree showing same-colour and different-colour outcomes]\n\nFind the probability that their colours are different. [6]",
    "markSchemeMarkdown": "| Step | Official working / result | Mark code | Mark awarded | Brief annotation |\n|---:|---|---|---:|---|\n| 1 | $P(\\text{same colour})=P(RR\\text{ or }GG\\text{ or }YY)$ |  | 0 | Uses complement route through same colours. |\n| 2 | $P(RR)=\\dfrac{5}{12}\\times\\dfrac{4}{11}=\\dfrac{20}{132}$ | M1 M1 | 2 | Red then red without replacement. |\n| 3 | $P(GG)=\\dfrac{4}{12}\\times\\dfrac{3}{11}=\\dfrac{12}{132}$ |  | 0 | Green then green without replacement. |\n| 4 | $P(YY)=\\dfrac{3}{12}\\times\\dfrac{2}{11}=\\dfrac{6}{132}$ | W1 | 1 | Yellow then yellow without replacement. |\n| 5 | $P(\\text{same colour})=\\dfrac{20+12+6}{132}=\\dfrac{38}{132}=\\dfrac{19}{66}$ | M1 | 1 | Adds same-colour routes. |\n| 6 | $P(\\text{different colours})=1-P(\\text{same colour})$ | M1 | 1 | Uses complement. |\n| 7 | $P(\\text{different colours})=1-\\dfrac{19}{66}=\\dfrac{47}{66}=0.712$ (3 s.f.) | W1 | 1 | Final probability. |",
    "marks": 6
  },
  {
    "id": "S4-Q1",
    "moduleId": "S4",
    "topic": "Binomial Distribution",
    "type": "Exam-Style",
    "marks": 6,
    "questionMarkdown": "\nA factory makes porcelain picture frames. It is known that 20% of the picture frames are faulty. A random sample of 8 picture frames is taken and examined for faults. The number of faulty picture frames is denoted by $X$.\n\n![visual:S4-BinomialTree]()\n\nFind the probability that:\n\n(i) none of the picture frames inspected are faulty;\n(ii) at most one quarter of those inspected are faulty.\n",
    "markSchemeMarkdown": "\n$$\nX\\sim B(8,0.2)\n$$\n[M1]\n\n**(i)**\n$$\nP(X=0)=\\binom{8}{0}(0.2)^0(0.8)^8\n$$\n[MW1]\n$$\nP(X=0)=0.168\n$$\n[W1]\n\n**(ii)** At most one quarter of 8 means at most 2, so find $P(X\\leq2)$. [M1]\n$$\nP(X\\leq2)=P(X=0)+P(X=1)+P(X=2)\n$$\n$$\n=0.1677...+0.3355...+0.2936...\n$$\n[MW2]\n$$\n=0.797\n$$\n[W1]\n"
  },
  {
    "id": "S4-Q2",
    "moduleId": "S4",
    "topic": "Model Suitability",
    "type": "Targeted Practice",
    "marks": 4,
    "questionMarkdown": "\nA student wants to model the number of heads obtained when a fair coin is tossed 12 times.\n\n![visual:S4-BinomialConditions]()\n\n(a) State the distribution of $X$, the number of heads.\n(b) Give two reasons why the binomial model is appropriate.\n",
    "markSchemeMarkdown": "\n**(a)**\n$$\nX\\sim B(12,0.5)\n$$\n[MW1]\n\n**(b)** Any two:\n* There is a fixed number of trials, 12. [W1]\n* Each trial has two outcomes: head or not head. [W1]\n* The probability of success is constant at 0.5. [W1]\n* The trials are independent. [W1]\n"
  },
  {
    "id": "S4-Q3",
    "moduleId": "S4",
    "topic": "Inequalities",
    "type": "Exam-Style",
    "marks": 6,
    "questionMarkdown": "\nLet $X\\sim B(10,0.3)$.\n\n![visual:S4-Inequality]()\n\n(a) Write \"fewer than 3 successes\" using probability notation.\n(b) Write \"at least 3 successes\" using probability notation.\n(c) Find $P(X=2)$.\n",
    "markSchemeMarkdown": "\n**(a)** Fewer than 3 successes means:\n$$\nP(X<3)\\text{ or }P(X\\leq2)\n$$\n[W1]\n\n**(b)** At least 3 successes means:\n$$\nP(X\\geq3)\n$$\n[W1]\n\n**(c)**\n$$\nP(X=2)=\\binom{10}{2}(0.3)^2(0.7)^8\n$$\n[M1 W1]\n$$\n=45(0.09)(0.7^8)\n$$\n[W1]\n$$\n=0.233\\text{ to 3 s.f.}\n$$\n[A1]\n"
  },
  {
    "id": "S4-Q4",
    "moduleId": "S4",
    "topic": "Cumulative Probability",
    "type": "Exam-Style",
    "marks": 5,
    "questionMarkdown": "\nLet $X\\sim B(6,0.4)$.\n\nFind $P(X\\geq1)$.\n",
    "markSchemeMarkdown": "\nUse the complement:\n$$\nP(X\\geq1)=1-P(X=0)\n$$\n[M1]\n$$\nP(X=0)=\\binom{6}{0}(0.4)^0(0.6)^6\n$$\n[M1 W1]\n$$\nP(X=0)=0.046656\n$$\n$$\nP(X\\geq1)=1-0.046656=0.953344\n$$\n[W1]\n$$ \nP(X\\geq1)=0.953\n$$\n[A1]\n"
  },
  {
    "id": "S4-Q5",
    "moduleId": "S4",
    "topic": "Binomial Distribution",
    "type": "Exam-Style",
    "marks": 5,
    "questionMarkdown": "\nAt an airport, the probability that severe winds prevent landings on any particular day is 0.04. Assume days are independent. Let $X$ be the number of days in a 7-day week on which severe winds prevent landings.\n\n(a) State the distribution of $X$.\n(b) Find the probability that severe winds prevent landings on no days in the week.\n",
    "markSchemeMarkdown": "\n**(a)**\n$$\nX\\sim B(7,0.04)\n$$\n[M1]\n\n**(b)**\n$$\nP(X=0)=\\binom{7}{0}(0.04)^0(0.96)^7\n$$\n[MW1]\n$$\n=0.7514...\n$$\n[W1]\n$$\n=0.751\\text{ to 3 s.f.}\n$$\n[A1]\n"
  },
  {
    "id": "S4-Q6",
    "moduleId": "S4",
    "topic": "Binomial Model Assumptions",
    "type": "Targeted Practice",
    "marks": 4,
    "questionMarkdown": "\nA company has 8 branches. The probability that any one branch meets its weekly target is 0.72. A manager wants to model the number of branches meeting the target using a binomial distribution.\n\n(a) State one assumption needed for the binomial model to be valid.\n(b) Explain why the model may not be valid in a real company context.\n",
    "markSchemeMarkdown": "\n(a) Any valid assumption, for example:\n* The branches perform independently of one another. [W1]\n* The probability of meeting the target is the same for every branch. [W1]\n* Each branch has only two outcomes for the model: meets target or does not meet target. [W1]\n\n(b) The model may not be valid because branches may affect each other or share common conditions, such as the same advertising campaign, regional demand, staffing issues, or stock supply. [W1 W1] This means independence or constant probability may fail. [W1]\n"
  }
];
