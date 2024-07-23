import { View, StyleSheet, Text } from "react-native";
import Title from "@/components/buttons/Title";

function randomNumber(min: any, max: any, exclude: any) {
  const numberRamDom = Math.floor(Math.random() * (max - min)) + min;

  if (numberRamDom == exclude) {
    randomNumber(min, max, exclude);
  } else {
    return numberRamDom;
  }
}
function GameScreen() {
  return (
    <View style={styles.container}>
      <Title>Option Guest</Title>
      <Text>Game Screen</Text>
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  container: {
    textAlign: "center",
  },
});
