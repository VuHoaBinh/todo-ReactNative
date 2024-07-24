import { View, StyleSheet, Text } from "react-native";
import Title from "@/components/buttons/Title";
import { useState, useEffect } from "react";
import NumberGuess from "@/components/buttons/NumberGuess";
import PrimaryButton from "@/components/buttons/PrimaryButton";

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({ number, gameOver }) {
  let initialScreen = randomNumber(minBoundary, maxBoundary, number);
  const [currentScreenGuess, setCurrentScreenGuess] = useState(initialScreen);

  // function plusNumber(number: any) {
  //   return parseInt(number) + 1;
  // }
  // function minusNumber(number: any) {
  //   return parseInt(number) - 1;
  // }
  function randomNumber(min: any, max: any, exclude: any) {
    const numberRamDom = Math.floor(Math.random() * (max - min)) + min;

    if (numberRamDom == exclude) {
      randomNumber(min, max, exclude);
    } else {
      return numberRamDom;
    }
  }

  function nextNumber(number: any) {
    if (number == "lower") {
      maxBoundary = currentScreenGuess - 1;
    } else {
      minBoundary = currentScreenGuess + 1;
    }
    let newNumberGuess = randomNumber(
      minBoundary,
      maxBoundary,
      currentScreenGuess
    );
    setCurrentScreenGuess(newNumberGuess);
  }

  useEffect(() => {
    if (currentScreenGuess == number) {
      gameOver();
    }
  }, [currentScreenGuess, number, gameOver]);

  return (
    <View style={styles.container}>
      <Title>Option Guest</Title>
      <NumberGuess>{currentScreenGuess}</NumberGuess>
      <Text>Game Screen</Text>
      <View>
        <PrimaryButton onPress={nextNumber.bind(this, "greater")}>
          +
        </PrimaryButton>
        <PrimaryButton onPress={nextNumber.bind(this, "lower")}>
          -
        </PrimaryButton>
      </View>
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  container: {
    textAlign: "center",
  },
});
