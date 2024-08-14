import { FlatList, Text } from "react-native";

function renderExpenseItem(itemData: any) {
  return <Text>{itemData.item.description}</Text>;
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
