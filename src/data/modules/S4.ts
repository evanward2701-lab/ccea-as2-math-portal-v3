import { Module } from '../../types';

const S4_CONTENT = `
## 1. Lesson Title
**S4: Statistical Distributions - Discrete Probability and the Binomial Model**

## 2. Specification Focus
* Understand discrete probability distributions.
* Use probability distribution tables.
* Recognise and use the binomial distribution.
* Calculate exact and cumulative binomial probabilities.
* Interpret inequalities such as at most, fewer than, at least, and more than.
* Check whether a binomial model is appropriate.

## 3. Learning Outcomes
By the end of this lesson, you should be able to:
* Identify a discrete random variable.
* Complete and interpret a probability distribution.
* State the four conditions for a binomial distribution.
* Use notation $X\\sim B(n,p)$.
* Calculate exact probabilities using the binomial formula.
* Calculate cumulative probabilities by summing exact probabilities.
* Translate wording into probability inequalities.

## 4. Key Vocabulary
* **Random Variable:** A variable whose value depends on chance.
* **Discrete Random Variable:** A random variable taking separate countable values.
* **Probability Distribution:** A table or rule giving probabilities for each possible value.
* **Binomial Distribution:** A model for the number of successes in a fixed number of independent trials.
* **Trial:** One repetition of an experiment.
* **Success:** The outcome being counted.
* **Failure:** The outcome not being counted.
* **Cumulative Probability:** Probability of a range of values.

## 5. Prior Knowledge
* Basic probability.
* Combinations notation $\\binom{n}{x}$.
* Powers and calculator arithmetic.
* Inequality language.

## 6. Full Theory Explanation

### DISCRETE PROBABILITY DISTRIBUTIONS
A discrete probability distribution lists possible values of a random variable and their probabilities. The probabilities must add to 1.

### THE BINOMIAL MODEL
A binomial model is suitable only if all four conditions are met:

1. There is a fixed number of trials, $n$.
2. Each trial has exactly two outcomes: success or failure.
3. The probability of success, $p$, is constant.
4. The trials are independent.

![visual:S4-BinomialConditions]()

![visual:S4-BinomialEngine]()

Use notation:
$$
X\\sim B(n,p)
$$

![visual:S4-BinomialTree]()

<!-- Normal Approximation is an A2 topic. S4-ContinuityCorrection and S4-NormalStandardizer are banked but not injected. -->

### EXACT BINOMIAL PROBABILITIES
For $X\\sim B(n,p)$:
$$
P(X=x)=\\binom{n}{x}p^x(1-p)^{n-x}
$$

### CUMULATIVE PROBABILITIES AND INEQUALITIES
Translate wording carefully:

* **At most 2:** $X\\leq2$
* **Fewer than 2:** $X<2$, so $X\\leq1$
* **At least 2:** $X\\geq2$
* **More than 2:** $X>2$, so $X\\geq3$

![visual:S4-Inequality]()

![visual:S4-InequalityTranslator]()

For cumulative probabilities, add the relevant exact probabilities.

### MODEL SUITABILITY
Before using the binomial distribution, check the context. If trials affect one another, if $p$ changes, or if there are more than two outcomes, the binomial model may not be appropriate.

> **Visual placeholder:** Add a decision-flow table: fixed trials, two outcomes, constant probability, independent trials, then use binomial.

### DISCRETE VERSUS CONTINUOUS MODELS
The binomial model is discrete because it counts successes. A normal distribution is continuous and should not be used unless specifically part of a later or extension topic.

![visual:S4-Normal]()

## 7. Formulae and Notation
* $X\\sim B(n,p)$
* $P(X=x)=\\binom{n}{x}p^x(1-p)^{n-x}$
* $P(X\\leq r)=P(X=0)+P(X=1)+\\cdots+P(X=r)$
* $P(X\\geq r)=1-P(X\\leq r-1)$

## 8. Step-by-Step Methods

### Method A: Checking the Binomial Model
1. Identify the trial.
2. Check that the number of trials is fixed.
3. Check that there are only two outcomes.
4. Check that $p$ is constant.
5. Check that trials are independent.
6. Write $X\\sim B(n,p)$.

### Method B: Exact Probability
1. Identify $n$, $p$, and $x$.
2. Substitute into the binomial formula.
3. Calculate carefully.
4. Round appropriately.

### Method C: Cumulative Probability
1. Translate the wording into an inequality.
2. List the exact values required.
3. Add the relevant exact probabilities.
4. Consider using the complement if it is shorter.

## 9. Worked Examples

### Example 1: Faulty Frames

**Question:**
A factory makes frames. 20% are faulty. A random sample of 8 frames is taken. Let $X$ be the number of faulty frames.

(a) Find the probability none are faulty.
(b) Find the probability at most two are faulty.

**Solution:**
$$
X\\sim B(8,0.2)
$$

(a)
$$
P(X=0)=\\binom{8}{0}(0.2)^0(0.8)^8=0.168
$$

(b)
$$
P(X\\leq2)=P(X=0)+P(X=1)+P(X=2)
$$
$$
=0.1677...+0.3355...+0.2936...=0.7969...
$$

> **Final Answer:** (a) $0.168$, (b) $0.797$.

### Example 2: Model Suitability

**Question:**
A card is drawn from a pack, not replaced, and then another card is drawn. Is a binomial model suitable for counting red cards?

**Solution:**
No. Although there are two outcomes and a fixed number of trials, the probability of success changes after the first draw because the card is not replaced. The trials are not independent.

## 10. Common Traps
* **Misreading inequalities:** At most, fewer than, at least, and more than mean different things.
* **Forgetting the complement method:** $P(X\\geq1)=1-P(X=0)$.
* **Using binomial when trials are dependent:** Without replacement usually changes probabilities.
* **Not defining success:** State what $X$ counts.
* **Rounding too early:** Keep more accuracy during cumulative sums.

## 11. Exam Technique
* Always state the distribution, such as $X\\sim B(8,0.2)$.
* Show the inequality translation before calculating cumulative probabilities.
* Mention model conditions when the question asks whether a binomial model is appropriate.
* Use 3 significant figures unless otherwise instructed.

## 12. Quick Recall Checklist
* Can I state the four binomial conditions?
* Can I write $X\\sim B(n,p)$?
* Can I use the binomial formula?
* Can I translate at most, fewer than, at least, and more than?
* Can I use complements for shorter calculations?
* Can I explain why a binomial model may not fit?

## 13. End-of-Lesson Summary
The binomial distribution models the number of successes in a fixed number of independent trials with constant probability. The main exam skills are checking suitability, translating wording into inequalities, and calculating exact or cumulative probabilities accurately.

## 14. Source Gaps or Caution Notes
> **Caution - Hypothesis testing and normal approximation:** These should not be built into this AS2 lesson unless deliberately added as extension material.
`;

export const S4_MODULE: Module = {
  id: "S4",
  title: "Distributions",
  type: "Statistics",
  overview: "This module introduces discrete probability distributions, focusing on the binomial distribution and its applications.",
  learningOutcomes: [
    { id: "AS2-DIST-LO001", text: "demonstrate understanding of and use the binomial distribution as an example of a discrete probability distribution" },
    { id: "AS2-DIST-LO002", text: "calculate probabilities using the binomial distribution" },
    { id: "AS2-DIST-LO003", text: "link binomial probabilities to the binomial expansion and tree diagrams" }
  ],
  lessons: [
    {
      id: "S4-Lesson",
      title: "Distributions",
      visualId: "S4-BinomialTree",
      type: "Statistics",
      content: S4_CONTENT,
      loIds: ["AS2-DIST-LO001", "AS2-DIST-LO002", "AS2-DIST-LO003"]
    }
  ]
};
