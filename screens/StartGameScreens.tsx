import PrimaryButton from "@/components/buttons/PrimaryButton";
import { TextInput, View, StyleSheet } from "react-native";

function StartGameScreen() {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <View style={styles.button}>
        <PrimaryButton>Confirm</PrimaryButton>
        <PrimaryButton>Reset</PrimaryButton>
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
