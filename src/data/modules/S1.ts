import { Module } from '../../types';

const S1_CONTENT = `
## 1. Lesson Title
**S1: Statistical Sampling, Data Types and Inference**

## 2. Specification Focus
* Understand and use the terms population and sample.
* Use samples to make informal inferences about populations.
* Understand sampling techniques, including simple random sampling and stratified sampling.
* Select or critique sampling techniques in context.
* Distinguish between qualitative, quantitative, discrete, and continuous data.

## 3. Learning Outcomes
By the end of this lesson, you should be able to:
* Define population, sample, census, and sampling frame.
* Explain why a sample may be used instead of a census.
* Describe how to take a simple random sample.
* Calculate proportional stratified sample sizes.
* Classify data as qualitative, quantitative discrete, or quantitative continuous.
* Explain sampling bias using context from the question.

## 4. Key Vocabulary
* **Population:** The whole group being investigated.
* **Sample:** A smaller group selected from the population.
* **Census:** Data collected from every member of the population.
* **Sampling Frame:** A complete list of all members of the population.
* **Simple Random Sample:** A sample where every member has an equal chance of being selected.
* **Stratified Sample:** A sample formed by splitting the population into groups and sampling proportionally from each.
* **Qualitative Data:** Non-numerical category data.
* **Quantitative Data:** Numerical data.
* **Discrete Data:** Counted values.
* **Continuous Data:** Measured values that can take any value in a range.
* **Bias:** Systematic unfairness in data collection.

## 5. Prior Knowledge
* Fractions, ratios, and percentages.
* Rounding to whole numbers.
* Interpreting worded contexts.

## 6. Full Theory Explanation

### POPULATIONS, SAMPLES, AND CENSUSES
A statistical investigation begins with a population. A census collects data from every member of the population, while a sample collects data from only part of it.

A census can be accurate, but it is often slow, expensive, or impractical. A sample is faster, but it must be selected carefully to avoid bias.

### INFORMAL INFERENCE
A sample can be used to make an informal inference about a population. For example, if 30% of a representative sample prefer option A, it may be reasonable to estimate that about 30% of the population prefer option A.

Different samples can give different results because of sampling variation.

### DATA TYPES
![visual:S1-Tree]()

![visual:S1-TaxonomyDecision]()

* **Qualitative:** category data, such as favourite subject.
* **Quantitative discrete:** counted numerical data, such as number of siblings.
* **Quantitative continuous:** measured numerical data, such as time, height, or mass.

### SIMPLE RANDOM SAMPLING
A simple random sample needs a complete sampling frame. Number each member and use random numbers to select the sample.

### STRATIFIED SAMPLING
Stratified sampling preserves the structure of the population by sampling proportionally from each group.

![visual:S1-StratifiedSampler]()

![visual:S1-Stratified]()

### BIAS AND CRITIQUE
Bias occurs when the sample is not representative. To explain bias well, name who is missing, who is over-represented, or why the selected group might behave differently from the target population.

![visual:S1-Sampling]()

> **Visual placeholder:** Add a before-and-after diagram comparing a biased convenience sample with a proportional stratified sample.

## 7. Formulae and Notation
* Stratified sample size:
$$
\\text{Group sample size}=\\frac{\\text{Group population size}}{\\text{Total population size}}\\times\\text{Overall sample size}
$$

## 8. Step-by-Step Methods

### Method A: Simple Random Sample
1. Define the population.
2. Obtain a complete sampling frame.
3. Number all members from 1 to $N$.
4. Generate random numbers.
5. Select the corresponding members, ignoring repeats or invalid numbers.

### Method B: Stratified Sampling
1. Identify each stratum and its size.
2. Identify the total population and required sample size.
3. Apply the stratified sample formula to each group.
4. Round carefully if necessary.
5. Check that the group samples add to the required total.

### Method C: Critiquing a Sample
1. Identify the target population.
2. Identify the actual group sampled.
3. State who is excluded or over-represented.
4. Link the bias to the variable being measured.

## 9. Worked Examples

### Example 1: Stratified Sampling

**Question:**
A college has 300 students: 180 study Mathematics and 120 do not. A sample of 40 students is needed, stratified by whether they study Mathematics.

**Solution:**
Mathematics:
$$
\\frac{180}{300}\\times40=24
$$
Non-Mathematics:
$$
\\frac{120}{300}\\times40=16
$$

> **Final Answer:** 24 Mathematics students and 16 non-Mathematics students.

### Example 2: Data Types and Bias

**Question:**
A school wants to estimate the mean number of hours its sixth-form students spend on independent study. It surveys 30 students at an after-school study club.

**Solution:**
Hours of study is quantitative continuous data. The sample is biased because study-club students are likely to study more than the general sixth-form population.

## 10. Common Traps
* **Saying a census means asking lots of people:** It means every member of the population.
* **Giving generic bias answers:** Always link bias to the context.
* **Confusing discrete and continuous data:** Counted values are discrete. Measured values are continuous.
* **Forgetting sampling frame:** A some random sample needs a complete list.

## 11. Exam Technique
* When asked to criticise a sample, write in full sentences.
* Use the words population, sample, representative, and bias accurately.
* In stratified sampling, show the formula substitution.
* If rounding causes totals not to match, adjust sensibly and explain.

## 12. Quick Recall Checklist
* Can I define population, sample, census, and sampling frame?
* Can I describe a simple random sample?
* Can I calculate a stratified sample size?
* Can I classify data types?
* Can I explain bias in context?

## 13. End-of-Lesson Summary
Sampling is the foundation of statistical investigation. A good sample can support informal inference, but a biased or badly selected sample can lead to misleading conclusions.

## 14. Source Gaps or Caution Notes
> **Caution - Formal hypothesis testing:** Hypothesis testing, p-values, critical regions, and significance levels are not part of this AS2 lesson block.
`;

export const S1_MODULE: Module = {
  id: "S1",
  title: "Statistical Sampling, Data Types and Inference",
  type: "Statistics",
  overview: "This module introduces basic statistical concepts, including populations, sampling techniques, data classification, and informal inference.",
  learningOutcomes: [
    { id: "AS2-SAMP-LO001", text: "demonstrate understanding of and use the terms population and sample" },
    { id: "AS2-SAMP-LO002", text: "use samples to make informal inferences about the population" },
    { id: "AS2-SAMP-LO003", text: "demonstrate understanding of and use sampling techniques, including simple random sampling and stratified sampling" },
    { id: "AS2-SAMP-LO004", text: "select or critique sampling techniques in the context of solving a statistical problem, including understanding that different samples can lead to different conclusions about the population" }
  ],
  lessons: [
    {
      id: "S1-Lesson",
      title: "Statistical Sampling, Data Types and Inference",
      visualId: "S1-Sampling",
      type: "Statistics",
      content: S1_CONTENT,
      loIds: ["AS2-SAMP-LO001", "AS2-SAMP-LO002", "AS2-SAMP-LO003", "AS2-SAMP-LO004"]
    }
  ]
};
