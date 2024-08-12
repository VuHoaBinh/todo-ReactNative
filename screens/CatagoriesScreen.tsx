import React from "react";
import { FlatList, Text, View, StyleSheet, Pressable } from "react-native";
import { CATEGORIES } from "@/app/data/dummy-data";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealOverviewScreen from "./MealOverviewScreen";
import DetailMeal from "./DetailMeal";
import { createDrawerNavigator } from "@react-navigation/drawer";
import FavoritesScreen from "./FavoritesScreen";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
// import FavoritesContextProvider from "@/store/context/Favorites-context";
import { Provider } from "react-redux";
import { store } from "@/store/redux/store";
import NewScreens from "./NewScreens";

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

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#351401" },
        headerTintColor: "white",
        sceneContainerStyle: { backgroundColor: "#3f2f25" },
        drawerContentStyle: { backgroundColor: "#351401" },
        drawerInactiveTintColor: "white",
        drawerActiveTintColor: "#351401",
        drawerActiveBackgroundColor: "#e4baa1",
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={CategoryList}
        options={{
          title: "All Categories",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="list" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="star" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="NewScreens"
        component={NewScreens}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="laptop" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default function CategoriesScreen() {
  return (
    <View style={styles.screen}>
      <StatusBar style="light" />
      <Provider store={store}>
        {/* <FavoritesContextProvider> */}
        <NavigationContainer independent={true}>
          <Stack.Navigator
            screenOptions={{
              title: "Categories",
              headerStyle: { backgroundColor: "#880000" },
              headerTintColor: "white",
              contentStyle: { backgroundColor: "#FF0000" },
            }}
          >
            <Stack.Screen
              name="DrawerNavigator"
              component={DrawerNavigator}
              options={{
                headerShown: false,
              }}
            />
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
          </Stack.Navigator>
        </NavigationContainer>
        {/* </FavoritesContextProvider> */}
      </Provider>
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
