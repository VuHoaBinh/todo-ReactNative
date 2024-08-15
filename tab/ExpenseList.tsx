import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";

function renderExpenseItem(itemData: any) {
  // const date = itemData.item.date.toLocaleDateString();
  const date = itemData.item.date;

  return (
    <Pressable>
      <View style={styles.expenseItem}>
        <View>
          <Text style={[styles.textBase, styles.description]}>
            {itemData.item.decription}
          </Text>
          <Text style={styles.textBase}>
            {`${date.getFullYear()} - ${
              date.getMonth() + 1
            } - ${date.getDate()}`}
          </Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={styles.amount}>${itemData.item.amount.toFixed(2)}</Text>
        </View>
      </View>
    </Pressable>
  );
}

function ExpensesList({ expenses }: any) {
  return (
    <FlatList
      data={expenses}
      renderItem={renderExpenseItem}
      keyExtractor={(item) => item.id}
    />
  );
}

export default ExpensesList;

const styles = StyleSheet.create({
  expenseItem: {
    padding: 12,
    marginVertical: 8,
    backgroundColor: "#3e04c3",
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 6,
    elevation: 3,
    shadowColor: "#39324a",
    shadowRadius: 4,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
  },
  textBase: {
    color: "#e4d9fd",
  },
  description: {
    fontSize: 16,
    marginBottom: 4,
    fontWeight: "bold",
  },
  amountContainer: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
  },
  amount: {
    color: "#3e04c3",
    fontWeight: "bold",
  },
});
