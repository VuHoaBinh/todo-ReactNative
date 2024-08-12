import { Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeTab from "@/tab/HomeTab";
import SettingTab from "@/tab/SettingTab";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function ExpenseOverview() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeTab} />
      <Tab.Screen name="Settings" component={SettingTab} />
    </Tab.Navigator>
  );
}

function NewScreens() {
  return (
    <View>
      <StatusBar style="light" />
      <NavigationContainer independent={true}>
        <Stack.Navigator>
          <Stack.Screen name="ExpenseOverview" component={ExpenseOverview} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

export default NewScreens;
