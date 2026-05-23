import { PracticeQuestion } from "@/core/types";

/**
 * Hand-authored baseline questions for early development and benchmarking.
 * These are preserved separately so re-ingestion doesn't overwrite them.
 */
export const MANUAL_QUESTIONS: PracticeQuestion[] = [
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
    "id": "M3-Q1",
    "moduleId": "M3",
    "topic": "Lift Dynamics",
    "type": "Exam-Style",
    "marks": 8,
    "questionMarkdown": "\nA woman travels in a lift. The mass of the woman is $50\\text{ kg}$ and the mass of the lift is $950\\text{ kg}$. The lift is moving upwards and has a constant deceleration of $2\\text{ m}\\,\\text{s}^{-2}$.\n\n![visual:M3-Lift]()\n\nBy modelling the cable as light and inextensible:\n\n(a) Find the tension in the cable.\n(b) Find the magnitude of the force exerted on the woman by the floor of the lift.\n",
    "markSchemeMarkdown": "\nTake upwards as positive. Since the lift is moving upwards but decelerating, $a=-2\\text{ m}\\,\\text{s}^{-2}$. [M1]\n\n**(a)** Treat lift and woman as one system:\n$$\nT-1000g=1000a\n$$\n[M1]\n$$\nT-1000(9.8)=1000(-2)\n$$\n[W1]\n$$\nT=7800\\text{ N}\n$$\n[A1]\n\n**(b)** Treat the woman alone:\n$$\nR-50g=50a\n$$\n[M1]\n$$\nR-50(9.8)=50(-2)\n$$\n[W1]\n$$\nR=390\\text{ N}\n$$\n[A1]\n"
  }
];
