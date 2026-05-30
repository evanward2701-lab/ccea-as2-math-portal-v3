# S3 Statistics Evidence Reference

Source document: `S3 Statistics.docx`

Use this as module-specific evidence when expanding or checking the portal lesson and practice-bank content.

## 1. Lesson Title

S3: Probability Laws, Venn Diagrams, Two-Way Tables and Trees

## 2. Source Groups Used

S3: Probability

V1: Exam Materials

V2: Rules

Deep Research Report: Gap Fill

CCEA AS2 Mathematics Exam Requirements and Methods

## 3. Specification Focus

Demonstrate understanding of and use the addition and multiplication laws of probability.

Demonstrate understanding of and use the concepts of mutually exclusive events, exhaustive events, and statistical dependence and independence.

Calculate combined probabilities of up to three events, using tree diagrams, Venn diagrams, and two-way tables.

Note: Conditional probability formula methods are explicitly excluded from AS2 requirements.

## 4. Learning Outcomes

By the end of this lesson, you should be able to:

Organise and extract probabilities from two-set and three-set Venn diagrams.

Use two-way tables with row and column totals to find single and combined probabilities.

Distinguish clearly between mutually exclusive, exhaustive, and independent events.

Apply the addition law for the union of two events.

Test for statistical independence mathematically using the multiplication law.

Calculate combined probabilities using informal branch probabilities on tree diagrams.

## 5. Key Vocabulary

Event: A set of outcomes of interest (e.g., "rolls a 6", "studies Biology").

Sample Space: The set of all possible outcomes for an experiment.

Intersection ($A \cap B$): The event that both A and B occur.

Union ($A \cup B$): The event that A or B (or both) occur.

Complement ($A'$): The event that A does not happen.

Mutually Exclusive: Events that cannot happen at the same time.

Exhaustive Events: A set of events that covers all possible outcomes; at least one must occur.

Independent Events: One event happening does not affect the probability of the other.

## 6. Prior Knowledge

Converting confidently between fractions, decimals, and percentages.

Basic understanding of set notation.

Understanding that the sum of all probabilities in a sample space equals 1.

Constructing basic tree diagrams and multiplying along branches.

## 7. Full Theory Explanation

The Addition Law and Venn DiagramsA Venn diagram visually organises the sample space. The overlapping region between two circles represents the intersection, $A \cap B$ (A and B). The entire area covered by both circles represents the union, $A \cup B$ (A or B).To find the probability of $A \cup B$, you cannot simply add $P(A)$ and $P(B)$ together, because this would double-count the overlap. The general Addition Law accounts for this:$$P(A \cup B) = P(A) + P(B) - P(A \cap B)$$

Mutually Exclusive vs. Exhaustive EventsIf two events are mutually exclusive, they cannot happen at the same time. On a Venn diagram, their circles do not overlap. Mathematically, this means the intersection is zero:$$P(A \cap B) = 0$$If two events are exhaustive, it means there are no other possible outcomes outside of them. Together, they cover 100% of the sample space. Mathematically:$$P(A \cup B) = 1$$

Statistical Independence and the Multiplication LawTwo events are independent if the occurrence of one does not affect the probability of the other. Do not confuse this with mutually exclusive! If two events can happen at the same time, we test for independence using the Multiplication Law. Events A and B are independent if and only if:$$P(A \cap B) = P(A) \times P(B)$$If a question asks you to "determine if the events are independent", you must calculate $P(A \cap B)$ and $P(A) \times P(B)$ separately and explicitly state whether they are equal.

Two-Way TablesA two-way table organises data for two categorical variables. The interior cells show the intersections (overlaps), while the margins show the row totals and column totals. The bottom-right corner holds the grand total. When finding probabilities from a two-way table, always use the grand total as your denominator (unless restricted, which borders on A2 conditional probability and should be avoided in AS2 unless informally presented).

Tree DiagramsTree diagrams model repeated events. As you move horizontally along a path, you multiply the probabilities (the "AND" rule). If multiple paths lead to a successful overall outcome, you add the probabilities of those distinct paths together (the "OR" rule).Note from CCEA AS2 Exam Support (V1): Conditional probability is not formally required in AS2. However, only an informal knowledge in a probability tree is required—as in GCSE (for example, taking a red ball from a bag without replacement affects the probability of taking a red ball out of the same bag on a second attempt). The formal conditional probability formula is not needed until A2.

## 8. Formulae and Notation

Addition Law: $P(A \cup B) = P(A) + P(B) - P(A \cap B)$

Test for Independence: $P(A \cap B) = P(A) \times P(B)$

Mutually Exclusive Condition: $P(A \cap B) = 0$

Exhaustive Condition: $P(A \cup B) = 1$

Complement Rule: $P(A') = 1 - P(A)$

## 9. Step-by-Step Methods

### Method 1: Checking for Independence

Identify or calculate $P(A)$.

Identify or calculate $P(B)$.

Multiply them together to find $P(A) \times P(B)$.

Identify $P(A \cap B)$ directly from the given data, Venn diagram, or table cell.

Compare the two values. Conclude "Independent" if they are exactly equal, or "Not independent" if they are not.

### Method 2: Extracting Probabilities from a Two-Way Table

Locate the grand total in the bottom-right corner. This is your denominator.

For a single event $P(A)$, locate the row or column total for A.

For an intersection $P(A \cap B)$, locate the specific interior cell where column A and row B meet.

For a union $P(A \cup B)$, either use the Addition Law formula, OR manually add the relevant interior cells without double-counting.

## 10. Worked Examples with Full Written Working

### Example 1: Exhaustive Events and Addition Law Targeted PracticeEvents $A$ and $B$ are exhaustive events such that $P(A) = 0.65$ and $P(B) = 0.42$.Find $P(A \cap B)$ and determine if the events are mutually exclusive.

Step 1: Recognise the exhaustive condition. Since $A$ and $B$ are exhaustive, $P(A \cup B) = 1$.

Step 2: Apply the Addition Law.$P(A \cup B) = P(A) + P(B) - P(A \cap B)$$1 = 0.65 + 0.42 - P(A \cap B)$

Step 3: Solve for the intersection.$1 = 1.07 - P(A \cap B)$$P(A \cap B) = 0.07$

Step 4: Check mutually exclusive condition. Because $P(A \cap B) = 0.07$ (and not $0$), the events are not mutually exclusive.

Example 2: Two-Way Table Targeted PracticeA school records whether 150 students use the bus and whether they buy lunch.Bus & Lunch = 36. Bus & No Lunch = 54. Total Bus = 90.No Bus & Lunch = 24. No Bus & No Lunch = 36. Total No Bus = 60.Total Lunch = 60. Total No Lunch = 90. Grand Total = 150.Let $B$ be the event a student uses the bus. Let $L$ be the event they buy lunch.Find $P(B \cup L)$ and test whether $B$ and $L$ are independent.

Step 1: Find individual and intersection probabilities.$P(B) = \frac{90}{150} = 0.6$$P(L) = \frac{60}{150} = 0.4$$P(B \cap L) = \frac{36}{150} = 0.24$ (from the interior overlap cell)

Step 2: Find the union using the Addition Law.$P(B \cup L) = 0.6 + 0.4 - 0.24 = 0.76$

Step 3: Test for independence.$P(B) \times P(L) = 0.6 \times 0.4 = 0.24$Since $P(B \cap L) = 0.24$ and $P(B) \times P(L) = 0.24$, the events are independent.

## 11. Diagrams, Tables, or Graph Descriptions Where Useful

Diagram 1: Venn Diagram - Mutually Exclusive vs Intersecting

Where it belongs in the lesson: In the "Addition Law and Venn Diagrams" theory section.

What it should show: Two separate rectangular sample spaces side-by-side. Left space: two non-overlapping circles A and B. Right space: two overlapping circles A and B with the central intersection shaded.

Required labels: "Mutually Exclusive: $P(A \cap B) = 0$" on the left. "Intersecting: $P(A \cap B) \neq 0$" on the right.

Caption: If events are mutually exclusive, the subtraction part of the Addition Law simply becomes zero.

Misconception it helps prevent: Stops students automatically writing $P(A \cup B) = P(A) + P(B)$ for overlapping events.

Diagram 2: Anatomy of a Two-Way Table

Where it belongs in the lesson: Under the "Two-Way Tables" theory section.

What it should show: A 3x3 table grid.

Required labels: Top headers: "Event A", "Event A'". Side headers: "Event B", "Event B'". The four interior cells labelled "Intersections ($A \cap B$ etc.)". The margin totals labelled "Single Events $P(A), P(B)$". The bottom-right cell shaded heavily and labelled "Grand Total (Denominator)".

Caption: Margin totals give single-event probabilities. Interior cells give intersection (AND) probabilities.

Misconception it helps prevent: Prevents students from using a row total as the numerator for an intersection question.

Diagram 3: Probability Tree Diagram

Where it belongs in the lesson: Under the "Tree Diagrams" theory section.

What it should show: Two stages of branching (1st event, 2nd event).

Required labels: Branches labelled with probabilities. The nodes separating stages. The final outcomes at the far right with a calculation showing multiplication (e.g., $P(A) \times P(B)$).

Arrows/axes: Arrows pointing left to right along the branches. A bold note reading "Multiply along branches, Add across separate paths."

Caption: Tree diagrams efficiently map out repeated events.

Misconception it helps prevent: Prevents students from adding probabilities along a single timeline branch.

## 12. Common Traps

Confusing "Independent" with "Mutually Exclusive": These are fundamentally different. Mutually exclusive means they never overlap ($P(A \cap B) = 0$). Independent means they do overlap, but the rate of overlap perfectly matches the product of their individual probabilities ($P(A \cap B) = P(A)P(B)$).

Double-counting the Union: Calculating $P(A \cup B)$ by adding the row total and column total in a two-way table without subtracting the corner cell where they overlap.

Using Conditional Probability Formulas: V1 Exam Materials explicitly state conditional probability is not required for AS2. Do not attempt to use or quote $P(A|B) = \frac{P(A \cap B)}{P(B)}$ as your primary method in AS2 papers. Use basic branch probabilities or tables instead.

Rounding too early: Leave intermediate probabilities as exact fractions to avoid failing calculator checks at the end of the question.

## 13. Calculator Validation

When testing for independence, evaluate the fraction product $P(A) \times P(B)$ fully on your calculator and compare it directly to the exact fraction for $P(A \cap B)$. Decimals can sometimes disguise a tiny inequality (e.g., $0.333 \times 0.5 \approx 0.166$, but $1/3 \times 1/2 = 1/6$). Your calculator fraction mode proves exact independence safely.

> **⚠️ EXAM WARNING: CALCULATOR USAGE PROTOCOLCCEA strictly requires candidates to show the development of their answers to secure Method M1 and Working W1 marks. While you are fully expected to use your calculator's functions, you must not write down just the final answer. If a question provides raw data or asks for statistical/probabilistic combinations, you MUST explicitly write down the intermediate formulations or summary statistics from your calculator screen before stating your final answer. Providing a "naked" final answer directly from your calculator runs a massive risk: if you made a minor typo when entering the data, you will score zero marks for the entire question because the examiner cannot see your method.**

## 14. Exam Technique

"Show that..." or "Test whether...": When an exam question asks you to check if events are independent, stating "Yes" or "No" earns zero marks. You must explicitly calculate $P(A)P(B)$, state its value, state the value of $P(A \cap B)$, and write a concluding sentence linking the two numerical values.

Reading the wording: The word "OR" in probability almost always requires the Addition Law ($P(A \cup B)$). The word "AND" requires the intersection ($P(A \cap B)$).

Venn Sketching: If a word problem gives you a list of probabilities but no diagram, draw a quick Venn diagram in the margin. Fill in the intersection first, then work outwards to find the remaining parts of circles A and B.

> **⚠️ EXAM WARNING: THE "MULTIPLE RESPONSES" RULEIf you are unsure of how to tackle a problem and you provide two different methods or answers on your page in the hope that the examiner will select the correct one, you will be heavily penalised.Official CCEA examiner guidance dictates that if a candidate provides multiple responses clearly trying to cover all options without crossing one out, the examiner will mark all attempts and award the marks for the POOREST solution.If you restart a question or change your mind about a mathematical model or probability layout, you must decisively cross out the incorrect attempt with a single diagonal line so that only your intended, final solution remains active.**

## 15. Exam-Style Questions

Question 1 Exam-Style$A$ and $B$ are two events where $P(A) = p$, $P(B) = 0.5$ and $P(A \cup B) = 0.8$.(i) If $A$ and $B$ are mutually exclusive events, find the value of $p$.(ii) If $A$ and $B$ are independent events, find the value of $p$.

### Question 2 Targeted PracticeA group of 80 students is classified by whether they study Biology and whether they study Chemistry.

Studies Biology: 18 also study Chemistry, 22 do not study Chemistry.

Does not study Biology: 12 study Chemistry, 28 do not study Chemistry.Let $B$ be the event that a student studies Biology. Let $C$ be the event that a student studies Chemistry.One student is selected at random.(i) Find $P(B \cap C)$.(ii) Find $P(B \cup C)$.(iii) Are the events $B$ and $C$ mutually exclusive? Give a reason for your answer.(iv) Are the events $B$ and $B'$ exhaustive? Give a reason for your answer.

Question 3 Exam-StyleA biased die, in the shape of a cube, has the numbers 1, 2, 3, 4, 5 and 6 respectively on its faces.When the die is thrown, the probability of getting 3 is equal to the probability of getting 1.The probability of getting 6 is twice the probability of getting 1.The probability of getting 5 is twice the probability of getting 6.The probabilities of getting 2, 4, and 6 are equal.Find the probability of getting 1.

## 16. Full Worked Solutions

### Question 1(i) Mutually exclusive means $P(A \cap B) = 0$. M1Using the Addition Law: $P(A \cup B) = P(A) + P(B) - P(A \cap B)$$0.8 = p + 0.5 - 0$ W1$p = 0.3$ A1

(ii) Independent means $P(A \cap B) = P(A)P(B) = 0.5p$. M1Using the Addition Law: $P(A \cup B) = P(A) + P(B) - P(A \cap B)$$0.8 = p + 0.5 - 0.5p$ M1$0.3 = 0.5p$ W1$p = 0.6$ A1

Question 2First, locate the relevant totals.Total Biology ($B$) = 18 + 22 = 40. Total Chemistry ($C$) = 18 + 12 = 30. Grand Total = 80.(i) The intersection is the overlap cell (studies both):$P(B \cap C) = \frac{18}{80} = \frac{9}{40}$ MW1

(ii) Using the Addition Law: $P(B \cup C) = P(B) + P(C) - P(B \cap C)$ M1$P(B \cup C) = \frac{40}{80} + \frac{30}{80} - \frac{18}{80} = \frac{52}{80}$ W1$P(B \cup C) = \frac{13}{20}$ (or 0.65) A1

(iii) No, they are not mutually exclusive. W1Reason: $P(B \cap C) = \frac{9}{40} \neq 0$ (there are 18 students who study both). W1

(iv) Yes, they are exhaustive. W1Reason: Every student in the sample either studies Biology ($B$) or does not study Biology ($B'$), meaning $P(B \cup B') = 1$. W1

Question 3Let $P(1) = x$.$P(3) = x$.$P(6) = 2x$.Since $P(2), P(4), P(6)$ are equal, $P(2) = 2x$ and $P(4) = 2x$.Since $P(5)$ is twice $P(6)$, $P(5) = 2(2x) = 4x$. MW1 for setting up algebraic termsThe sum of all probabilities in an exhaustive sample space is 1.$P(1) + P(2) + P(3) + P(4) + P(5) + P(6) = 1$ M1$x + 2x + x + 2x + 4x + 2x = 1$$12x = 1$ W1$x = \frac{1}{12}$Therefore, $P(1) = \frac{1}{12}$. A1

## 17. Final Answers

Q1: (i) $p = 0.3$, (ii) $p = 0.6$

Q2: (i) $\frac{9}{40}$, (ii) $\frac{13}{20}$, (iii) No, overlap is not zero, (iv) Yes, covers the whole sample space.

Q3: $\frac{1}{12}$

## 18. Quick Recall Checklist

Do I know the Addition Law formula by heart?

Can I mathematically prove if two events are independent using $P(A \cap B) = P(A)P(B)$?

Do I know that "mutually exclusive" means the intersection is zero?

Do I know that "exhaustive" means the union equals 1?

Do I remember to subtract the intersection when finding an "OR" probability from a two-way table?

## 19. End-of-Lesson Summary

Probability in AS2 Mechanics and Statistics relies heavily on structural definitions. Knowing the rigid mathematical conditions for "independent", "mutually exclusive", and "exhaustive" allows you to unlock algebraic questions (like finding an unknown $p$). When faced with categorical data, two-way tables cleanly separate individual event totals from their intersections, ensuring you can apply the Addition Law safely without double-counting the overlap.

## 20. Source Gaps or Caution Notes

> **Caution - Excluded Content (Conditional Probability): The formal conditional probability formula $P(A|B) = \frac{P(A \cap B)}{P(B)}$ is explicitly excluded from the AS2 specification as a required method (reserved for A2 Module 2). While you may use informal conditional logic on branches of a tree diagram, do not use the formal algebraic notation as your primary problem-solving method in an AS2 exam.**

> **Caution - Excluded Content (Distributions & Hypothesis Testing): Module 6 focuses solely on events and probability rules. Do not apply discrete distribution tables, binomial probability calculations, or hypothesis testing to these foundational set problems.**
