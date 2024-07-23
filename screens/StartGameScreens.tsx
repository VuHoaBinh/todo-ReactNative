import { useState } from "react";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import { TextInput, View, StyleSheet, Alert } from "react-native";

function StartGameScreen() {
  const [enterNumber, setEnterNumber] = useState("");

  function onChangeEnterNumberHandle(enterNumber: string) {
    setEnterNumber(enterNumber);
  }

  function onResetNumberHandle() {
    setEnterNumber("");
  }

  function submitEnterNumber() {
    const intEnterNumber = parseInt(enterNumber);

    if (intEnterNumber <= 0 || isNaN(intEnterNumber) || intEnterNumber > 99) {
      Alert.alert("wrong number", "Plz input number between 1 to 99", [
        {
          text: "cancel",
          style: "cancel",
          onPress: onResetNumberHandle,
        },
        { text: "OK", onPress: () => console.log("OK Pressed") },
      ]);
      return;
    }
    console.log("oke oke");
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={onChangeEnterNumberHandle}
        value={enterNumber}
      />
      <View style={styles.button}>
        <PrimaryButton onPress={submitEnterNumber}>Confirm</PrimaryButton>
        <PrimaryButton onPress={onResetNumberHandle}>Reset</PrimaryButton>
      </View>
    </View>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  textInput: {
    justifyContent: "center",
    alignItems: "center",
    color: "#FFFFFF",
    borderBottomColor: "red",
    borderBottomWidth: 2,
    marginVertical: 8,
    width: 50,
    height: 50,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  container: {
    display: "flex",
    alignItems: "center",
  },
  button: {
    flexDirection: "row",
  },
});
