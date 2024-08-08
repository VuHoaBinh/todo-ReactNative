import React from "react";
import {
  FlatList,
  Text,
  View,
  StyleSheet,
  Pressable,
  Button,
} from "react-native";
import { CATEGORIES } from "@/app/data/dummy-data";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealOverviewScreen from "./MealOverviewScreen";
import DetailMeal from "./DetailMeal";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const CategoryList = ({ navigation }: any) => {
  return (
    <FlatList
      numColumns={2}
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => {
        return (
          <View style={styles.gridItem}>
            <Pressable
              onPress={function handler() {
                navigation.navigate("MealOverviewScreen", { id: item.id });
              }}
              style={({ pressed }) => [
                {
                  backgroundColor: pressed ? "#dddddd" : item.color,
                },
                styles.pressable,
              ]}
            >
              <Text style={[styles.item, { backgroundColor: item.color }]}>
                {item.title}
              </Text>
            </Pressable>
          </View>
        );
      }}
    />
  );
};

export default function CategoriesScreen() {
  return (
    <View style={styles.screen}>
      <NavigationContainer independent={true}>
        <Drawer.Navigator initialRouteName="User">
          <Drawer.Screen name="Feed" component={CategoryList} />
          <Drawer.Screen name="Article" component={CategoryList} />
        </Drawer.Navigator>
        {/* <Stack.Navigator
          screenOptions={{
            title: "Categories",
            headerStyle: { backgroundColor: "#880000" },
            headerTintColor: "white",
            contentStyle: { backgroundColor: "#FF0000" },
          }}
        >
          <Stack.Screen name="Categories" component={CategoryList} />
          <Stack.Screen
            name="MealOverviewScreen"
            component={MealOverviewScreen}
            options={{ title: "Meal Overview Screen" }}
          />
          <Stack.Screen
            name="DetailMeal"
            component={DetailMeal}
            options={{
              title: "Detail Meal Screen",
            }}
          />
        </Stack.Navigator> */}
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    width: "40%",
    height: "40%",
    borderRadius: 8,
    elevation: 4, // shadow for Android
  },
  screen: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  item: {
    padding: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
  pressable: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    minHeight: 100,
  },
});
