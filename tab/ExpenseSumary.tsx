import { View, Text, StyleSheet } from "react-native";

function ExpensesSummary({ expenses, periodName }: any) {
  const expensesSum = expenses.reduce((sum: any, expense: any) => {
    return sum + expense.amount;
  }, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.period}>{periodName}</Text>
      <Text style={styles.sum}>${expensesSum.toFixed(2)}</Text>
    </View>
  );
}

export default ExpensesSummary;

const styles = StyleSheet.create({
  container: {
    padding: 8,
    backgroundColor: "#e4d9fd",
    borderRadius: 6,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  period: {
    fontSize: 12,
    color: "#5721d4",
  },
  sum: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#3e04c3",
  },
});
