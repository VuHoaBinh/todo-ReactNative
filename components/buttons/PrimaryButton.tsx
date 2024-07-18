import { Text, View, StyleSheet, Pressable } from "react-native";

function PrimaryButton({ children }) {
  function pressedButton() {
    console.log("hahah");
  }
  return (
    <View>
      <Pressable
        style={({ pressed }) =>
          pressed ? [styles.button, styles.press] : styles.button
        }
        onPress={pressedButton}
        android_ripple={{ color: "green" }}
      >
        <Text style={styles.title}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  title: {
    color: "#FFFFFF",
    backgroundColor: "red",
    borderRadius: 4,
    shadowColor: "white",
    padding: 10,
    margin: 10,
    shadowOffset: { width: 2, height: 2 }, // size of shadow
  },
  button: {
    color: "pink",
  },
  press: {
    opacity: 0.75,
  },
});
