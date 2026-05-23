import { Module } from '@/core/types';

const S3_CONTENT = `
## 1. Lesson Title
**S3: Probability Laws, Venn Diagrams, Two-Way Tables and Trees**

## 2. Specification Focus
* Use the language of probability, including event, complement, union, and intersection.
* Use Venn diagrams and two-way tables.
* Understand mutually exclusive and exhaustive events.
* Understand independent events.
* Use addition and multiplication laws for probability.
* Use tree diagrams for combined probabilities.

## 3. Learning Outcomes
By the end of this lesson, you should be able to:
* Use notation such as $A'$, $A\\cup B$, and $A\\cap B$.
* Complete and interpret Venn diagrams and two-way tables.
* Apply the addition law for two events.
* Test whether events are mutually exclusive or independent.
* Use tree diagrams to calculate combined probabilities.
* Recognise when events are exhaustive.

## 4. Key Vocabulary
* **Event:** A set of outcomes.
* **Complement:** The event not occurring, written $A'$.
* **Union:** $A\\cup B$, meaning A or B or both.
* **Intersection:** $A\\cap B$, meaning both A and B.
* **Mutually Exclusive:** Events that cannot happen at the same time.
* **Exhaustive:** Events that cover all possible outcomes.
* **Independent:** One event does not affect the probability of the other.
* **Tree Diagram:** A branching diagram for multi-stage probability.

## 5. Prior Knowledge
* Fractions, decimals, and percentages.
* Reading tables.
* Basic set notation.

## 6. Full Theory Explanation

### BASIC PROBABILITY RULES
Probabilities lie between 0 and 1:
$$
0\\leq P(A)\\leq1
$$
For a complement:
$$
P(A')=1-P(A)
$$

### ADDITION LAW
For two events:
$$
P(A\\cup B)=P(A)+P(B)-P(A\\cap B)
$$
If events are mutually exclusive, $P(A\\cap B)=0$, so:
$$
P(A\\cup B)=P(A)+P(B)
$$

![visual:S3-DynamicVenn]()

![visual:S3-Venn]()

### EXHAUSTIVE EVENTS
If events are exhaustive, their union covers the whole sample space:
$$
P(A\\cup B)=1
$$

### INDEPENDENCE
Events A and B are independent if:
$$
P(A\\cap B)=P(A)P(B)
$$
This test is often the cleanest way to prove whether two events are independent.

### TWO-WAY TABLES
Two-way tables organise probabilities or frequencies by two categories. Complete missing row totals, column totals, and the grand total before answering probability questions.

<!-- Conditional probability is explicitly excluded from AS2 core, so S3-ConditionalTable is banked but not injected into S3_CONTENT. -->

![visual:S3-Table]()

### TREE DIAGRAMS
Tree diagrams show stages of an experiment. Multiply along branches and add separate successful paths.

![visual:S3-Tree]()

![visual:S3-TreeEngine]()

> **Visual placeholder:** Add a two-stage tree showing multiply-along-branches and add-endpoints colour coding.

## 7. Formulae and Notation
* $P(A')=1-P(A)$
* $P(A\\cup B)=P(A)+P(B)-P(A\\cap B)$
* Mutually exclusive: $P(A\\cap B)=0$
* Exhaustive: $P(A\\cup B)=1$
* Independent: $P(A\\cap B)=P(A)P(B)$
* Tree diagrams: multiply along branches and add separate paths.

## 8. Step-by-Step Methods

### Method A: Venn Diagrams
1. Put the intersection into the overlap first.
2. Subtract the overlap from each event total.
3. Fill the outside region using the total probability of 1.
4. Answer from the completed diagram.

### Method B: Two-Way Tables
1. Fill the given cell values.
2. Use row totals and column totals to complete missing cells.
3. Check the grand total.
4. Use the relevant cell or total for the probability required.

### Method C: Tree Diagrams
1. Fill probabilities on each branch.
2. Use complements where probabilities are missing.
3. Multiply along each route.
4. Add routes that satisfy the event required.

## 9. Worked Examples

### Example 1: Exhaustive Events

**Question:**
Events A and B are exhaustive. $P(A)=0.65$ and $P(B)=0.42$. Find $P(A\\cap B)$.

**Solution:**
Since A and B are exhaustive, $P(A\\cup B)=1$.
$$
1=0.65+0.42-P(A\\cap B)
$$
$$
P(A\\cap B)=0.07
$$

> **Final Answer:** $0.07$.

### Example 2: Independence Test

**Question:**
$P(A)=0.4$, $P(B)=0.5$, and $P(A\\cap B)=0.2$. Are A and B independent?

**Solution:**
$$
P(A)P(B)=0.4\\times0.5=0.2
$$
This equals $P(A\\cap B)$, so the events are independent.

## 10. Common Traps
* **Adding overlapping probabilities twice:** Use the addition law.
* **Confusing mutually exclusive and independent:** Mutually exclusive events cannot happen together. Independent events can happen together without affecting each other's probability.
* **Forgetting complements:** If $P(A)=0.7$, then $P(A')=0.3$.
* **Leaving two-way tables incomplete:** Complete the structure before calculating.

## 11. Exam Technique
* Quote the rule you are using before substituting numbers.
* For independence, show both $P(A\\cap B)$ and $P(A)P(B)$.
* For tree diagrams, write endpoint products clearly.
* Use exact fractions where possible unless decimals are clearly easier.

## 12. Quick Recall Checklist
* Can I use $A'$, $A\\cup B$, and $A\\cap B$?
* Can I apply the addition law?
* Can I test for independence?
* Can I complete a Venn diagram?
* Can I complete a two-way table?
* Can I use a tree diagram to multiply paths and add outcomes?

## 13. End-of-Lesson Summary
Probability questions often become straightforward once the structure is represented clearly. Venn diagrams, two-way tables, and tree diagrams organise the sample space so that addition, multiplication, complements, and independence tests can be applied accurately.

## 14. Source Gaps or Caution Notes
> **Caution - Conditional probability and Bayes:** The evidence references flag formal conditional probability formula methods and Bayes-style reverse probability as beyond the intended AS2 core. Keep the core lesson focused on addition laws, independence, Venn diagrams, two-way tables, and tree diagrams.
`;

export const S3_MODULE: Module = {
  id: "S3",
  title: "Probability",
  type: "Statistics",
  overview: "This module covers the fundamental laws of probability, including Venn diagrams, tree diagrams, and two-way tables.",
  learningOutcomes: [
    { id: "AS2-PROB-LO001", text: "demonstrate understanding of and use the addition and multiplication laws" },
    { id: "AS2-PROB-LO002", text: "demonstrate understanding of and use the concepts of mutually exclusive events, exhaustive events and statistical dependence and independence" },
    { id: "AS2-PROB-LO003", text: "calculate combined probabilities of up to three events, using tree diagrams, Venn diagrams and two-way tables" }
  ],
  lessons: [
    {
      id: "S3-Lesson",
      title: "Probability",
      visualId: "S3-Tree",
      type: "Statistics",
      content: S3_CONTENT,
      loIds: ["AS2-PROB-LO001", "AS2-PROB-LO002", "AS2-PROB-LO003"]
    }
  ]
};
