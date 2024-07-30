import React from "react";
import { FlatList, Text, View, StyleSheet } from "react-native";
import { CATEGORIES } from "@/app/data/dummy-data"; // Adjust the path as necessary

export default function CategoriesScreen() {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Hello world</Text>
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return <Text style={styles.item}>{item.title}</Text>;
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  item: {
    fontSize: 18,
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#ccc",
    borderRadius: 5,
    textAlign: "center",
  },
});
