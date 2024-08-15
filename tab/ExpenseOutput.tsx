import { StyleSheet, View } from "react-native";

import ExpensesList from "./ExpenseList";
import ExpensesSummary from "./ExpenseSumary";

export const DUMMY_EXPRESS = [
  {
    id: "e1",
    decription: "A pair of shoes",
    amount: 59.99,
    date: new Date("10-2-2024"),
  },
  {
    id: "e2",
    decription: "A pair of trousers",
    amount: 89.99,
    date: new Date("10-2-2024"),
  },
  {
    id: "e3",
    decription: "Some banana",
    amount: 5.99,
    date: new Date("10-2-2024"),
  },
  {
    id: "e4",
    decription: "A book",
    amount: 9.99,
    date: new Date("10-2-2024"),
  },
  {
    id: "e5",
    decription: "Computer",
    amount: 19.99,
    date: new Date("10-2-2024"),
  },
];

function ExpensesOutput({ expenses, expensesPeriod }: any) {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={DUMMY_EXPRESS} periodName={expensesPeriod} />
      <ExpensesList expenses={DUMMY_EXPRESS} />
    </View>
  );
}

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#2d0689",
  },
});
