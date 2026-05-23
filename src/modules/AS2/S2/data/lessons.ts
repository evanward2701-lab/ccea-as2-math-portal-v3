import { Module } from '@/core/types';

const S2_CONTENT = `
## 1. Lesson Title
**S2: Data Presentation and Interpretation**

## 2. Specification Focus
* Interpret diagrams for single-variable data, including histograms where area represents frequency.
* Interpret measures of central tendency and variation.
* Use standard deviation and variance for populations and samples.
* Clean data and recognise or interpret outliers.
* Interpret scatter diagrams and regression lines.
* Calculate and interpret the product-moment correlation coefficient, PMCC.
* Understand when a linear model is not appropriate.

## 3. Learning Outcomes
By the end of this lesson, you should be able to:
* Interpret and complete histograms using frequency density.
* Estimate values from grouped data using interpolation.
* Compare centre and spread using mean, median, quartiles, range, interquartile range, variance, and standard deviation.
* Identify outliers using a stated rule.
* Interpret scatter diagrams, regression lines, PMCC, and residual plots.
* Explain why correlation does not imply causation.

## 4. Key Vocabulary
* **Frequency Density:** Frequency divided by class width.
* **Histogram:** A diagram where area represents frequency.
* **Median:** The middle value.
* **Quartiles:** Values splitting ordered data into quarters.
* **Interquartile Range:** $Q_3-Q_1$.
* **Outlier:** A value that appears unusually far from the rest of the data, according to a stated rule.
* **Variance:** A measure of average squared spread.
* **Standard Deviation:** A measure of typical spread from the mean.
* **PMCC:** A measure of strength and direction of linear correlation.
* **Residual:** The difference between an observed value and the value predicted by a regression line.

## 5. Prior Knowledge
* Averages and spread from GCSE statistics.
* Drawing and interpreting graphs.
* Substitution into formulae.
* Using calculator statistical functions where allowed by the teacher.

## 6. Full Theory Explanation

### HISTOGRAMS
In a histogram, area represents frequency. The vertical axis is frequency density:
$$
\\text{Frequency Density}=\\frac{\\text{Frequency}}{\\text{Class Width}}
$$
So:
$$
\\text{Frequency}=\\text{Class Width}\\times\\text{Frequency Density}
$$

![visual:S2-Histogram]()

### INTERPOLATION IN GROUPED DATA
When estimating a median, quartile, or percentile from grouped data, assume the data is evenly distributed within the class interval.

![visual:S2-Interpolate]()

> **Visual placeholder:** Add a grouped cumulative-frequency style interpolation strip showing lower boundary, upper boundary, class width, and target position.

### VARIANCE AND STANDARD DEVIATION
Standard deviation measures spread. A larger standard deviation means the data values are more spread out.

* Use the population version when the data is the whole population.
* Use the sample version when the data is being used to estimate a wider population.

![visual:S2-StdDev]()

### OUTLIERS AND CLEANING DATA
Outliers may be genuine extreme values, recording errors, or values from a different population. If an outlier rule is stated, apply that rule exactly.

Common rule:
$$
\\text{Outlier below}=Q_1-1.5\\times\\text{IQR}
$$
$$
\\text{Outlier above}=Q_3+1.5\\times\\text{IQR}
$$

Cleaning data means correcting errors, removing impossible values, or deciding whether an outlier should be retained.

### SCATTER DIAGRAMS, REGRESSION, AND PMCC
A scatter diagram shows the relationship between two variables. PMCC, $r$, measures the strength and direction of linear correlation:
$$
-1\\leq r\\leq1
$$

* $r$ close to 1: strong positive linear correlation.
* $r$ close to -1: strong negative linear correlation.
* $r$ close to 0: weak or no linear correlation.

![visual:S2-PMCC]()

Correlation does not imply causation. A strong correlation may be caused by a hidden third variable or by coincidence.

![visual:S2-Scatter]()

### RESIDUALS
Residuals help check whether a linear regression model is appropriate. A random scatter of residuals around zero supports a linear model. A curved pattern suggests a non-linear model would be better.

![visual:S2-Residual]()

## 7. Formulae and Notation
* $\\text{Frequency Density}=\\frac{\\text{Frequency}}{\\text{Class Width}}$
* $\\text{Frequency}=\\text{Class Width}\\times\\text{Frequency Density}$
* $\\text{IQR}=Q_3-Q_1$
* Outlier limits: $Q_1-1.5\\text{IQR}$ and $Q_3+1.5\\text{IQR}$
* PMCC:
$$
r=\\frac{n\\sum xy-\\sum x\\sum y}{\\sqrt{\\left(n\\sum x^2-(\\sum x)^2\\right)\\left(n\\sum y^2-(\\sum y)^2\\right)}}
$$

## 8. Step-by-Step Methods

### Method A: Histograms
1. Find each class width.
2. Use frequency density = frequency divided by class width.
3. Draw bars with widths matching the class intervals.
4. Use area to recover missing frequencies.

### Method B: Outliers
1. Find $Q_1$ and $Q_3$.
2. Calculate IQR.
3. Calculate lower and upper outlier limits.
4. Compare data values with the limits.
5. Interpret any outliers in context.

### Method C: PMCC Interpretation
1. Check the sign of $r$ for direction.
2. Check the size of $|r|$ for strength.
3. State that it measures linear correlation.
4. Avoid claiming causation unless the context justifies it.

## 9. Worked Examples

### Example 1: Histogram Frequency

**Question:**
A histogram class has interval $20<x\\leq35$ and frequency density 4. Find the frequency.

**Solution:**
Class width is $35-20=15$:
$$
\\text{Frequency}=15\\times4=60
$$

> **Final Answer:** 60.

### Example 2: PMCC

**Question:**
A data set has $r=-0.86$. Interpret this value.

**Solution:**
The value is close to -1, so it shows a strong negative linear correlation. As one variable increases, the other tends to decrease.

## 10. Common Traps
* **Using bar chart logic on histograms:** Histogram area, not height alone, represents frequency.
* **Ignoring class width:** Unequal classes need frequency density.
* **Calling correlation causation:** PMCC does not prove cause.
* **Using a regression line outside the data range:** Extrapolation is unreliable.
* **Ignoring residual patterns:** A high PMCC can still hide a non-linear relationship.

## 11. Exam Technique
* Use the exact outlier rule given in the question.
* When interpreting PMCC, include strength, direction, and linear.
* For regression, mention whether interpolation or extrapolation is being used.
* In histogram questions, label frequency density clearly.

## 12. Quick Recall Checklist
* Can I find frequency density?
* Can I recover frequency from histogram area?
* Can I calculate IQR and outlier limits?
* Can I interpret standard deviation?
* Can I interpret PMCC?
* Can I explain a residual plot?

## 13. End-of-Lesson Summary
Data presentation is about choosing and interpreting the right statistical summary. Histograms handle grouped continuous data, measures of spread compare variation, and PMCC/regression analyse linear relationships while reminding us not to overclaim causation.

## 14. Source Gaps or Caution Notes
> **Caution - Calculator dependence:** This portal should teach interpretation and method. It should not become a calculator-button guide.
`;

export const S2_MODULE: Module = {
  id: "S2",
  title: "Data Presentation",
  type: "Statistics",
  overview: "This module focuses on techniques for presenting and interpreting data, including histograms, measures of central tendency and variation, and correlation.",
  learningOutcomes: [
    { id: "AS2-DPI-LO001", text: "interpret diagrams for single-variable data, including understanding that area in a histogram represents frequency and connections to probability distributions" },
    { id: "AS2-DPI-LO002", text: "interpret measures of central tendency and variation, including standard deviation and variance" },
    { id: "AS2-DPI-LO003", text: "calculate standard deviation and variance of a population or sample, including from summary statistics" },
    { id: "AS2-DPI-LO004", text: "interpret scatter diagrams and regression lines for bivariate data, including recognition of scatter diagrams that include distinct sections of the population, excluding calculations involving regression lines" },
    { id: "AS2-DPI-LO005", text: "demonstrate understanding of informal interpretation of correlation" },
    { id: "AS2-DPI-LO006", text: "calculate and interpret the product-moment correlation coefficient" },
    { id: "AS2-DPI-LO007", text: "demonstrate understanding that correlation does not imply causation" },
    { id: "AS2-DPI-LO008", text: "recognise and interpret possible outliers in data sets and statistical diagrams" },
    { id: "AS2-DPI-LO009", text: "select or critique data presentation techniques in the context of a statistical problem" },
    { id: "AS2-DPI-LO010", text: "clean data, including dealing with missing data, errors and outliers" }
  ],
  lessons: [
    {
      id: "S2-Lesson",
      title: "Data Presentation",
      visualId: "S2-Histogram",
      type: "Statistics",
      content: S2_CONTENT,
      loIds: [
        "AS2-DPI-LO001", "AS2-DPI-LO002", "AS2-DPI-LO003", "AS2-DPI-LO004", 
        "AS2-DPI-LO005", "AS2-DPI-LO006", "AS2-DPI-LO007", "AS2-DPI-LO008", 
        "AS2-DPI-LO009", "AS2-DPI-LO010"
      ]
    }
  ]
};
