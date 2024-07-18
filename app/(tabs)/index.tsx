import { Image, StyleSheet, View, Text } from "react-native";

import { StatusBar } from "expo-status-bar";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import StartGameScreen from "@/screens/StartGameScreens";

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/assets/images/partial-react-logo.png")}
          style={styles.reactLogo}
        />
      }
    >
      <View>
        <Text style={styles.title}>Hello World!</Text>
        <StatusBar style="auto" />
        <StartGameScreen />
      </View>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  title: {
    color: "#FFFFFF",
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
