import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
import type { Budget } from "../types/Types";


interface BudgetContextType {
  budgets: Budget[];
  addBudget: (budget: Budget) => void;
}

const BudgetContext = createContext<BudgetContextType | undefined>(undefined);

export const BudgetProvider = ({ children }:  { children: ReactNode }) => {
  const [budgets, setBudgets] = useState<Budget[]>([]);

  const addBudget = (budget: Budget) => {
    setBudgets((prev) => [...prev, budget]);
  };

  return (
    <BudgetContext.Provider value={{ budgets, addBudget }}>
      {children}
    </BudgetContext.Provider>
  );
};

export const useBudgetContext = () => {
  const context = useContext(BudgetContext);
  if (!context) throw new Error("useBudgetContext must be used within BudgetProvider");
  return context;
};