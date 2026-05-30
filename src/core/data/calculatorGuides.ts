import { CalculatorStep } from "../components/CalculatorMastery";

export const CALCULATOR_GUIDES: Record<string, { model?: string; steps: CalculatorStep[] }> = {
  "binomial-pd": {
    model: "Casio fx-991EX ClassWiz",
    steps: [
      { key: "MENU", description: "Open the main menu" },
      { key: "7", description: "Select Distribution (Menu 7)" },
      { key: "4", description: "Select Binomial PD (4)" },
      { key: "2", description: "Choose Variable (2)" },
      { key: "x, N, p", description: "Enter your values", extraInfo: "x = successful trials, N = total trials, p = probability" },
      { key: "=", description: "Press equals to calculate" }
    ]
  },
  "binomial-cd": {
    model: "Casio fx-991EX ClassWiz",
    steps: [
      { key: "MENU", description: "Open the main menu" },
      { key: "7", description: "Select Distribution (Menu 7)" },
      { key: "▼", description: "Scroll down to next page" },
      { key: "1", description: "Select Binomial CD (1)" },
      { key: "2", description: "Choose Variable (2)" },
      { key: "x, N, p", description: "Enter your values", extraInfo: "Calculates P(X ≤ x)" },
      { key: "=", description: "Press equals to calculate" }
    ]
  },
  "normal-cd": {
    model: "Casio fx-991EX ClassWiz",
    steps: [
      { key: "MENU", description: "Open the main menu" },
      { key: "7", description: "Select Distribution (Menu 7)" },
      { key: "2", description: "Select Normal CD (2)" },
      { key: "Lower, Upper, \u03C3, \u03BC", description: "Enter the bounds and parameters", extraInfo: "Use -10000 for lower bound if calculating P(X < a)" },
      { key: "=", description: "Press equals to calculate" }
    ]
  }
};
