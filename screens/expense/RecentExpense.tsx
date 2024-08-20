import { useContext } from "react";
import ExpenseOutput from "../../tab/ExpenseOutput";
import { ExpenseContext } from "@/store/redux-Expense/ExpenseContext";

function RecentExpenses() {
  const expensesCtx = useContext(ExpenseContext);

  const recentExpenses = expensesCtx.expenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate() - 7
    );

    return expense.date >= date7DaysAgo && expense.date <= today;
  });

  return (
    <ExpenseOutput expenses={recentExpenses} expensesPeriod="Last 7 Days" />
  );
}

export default RecentExpenses;
