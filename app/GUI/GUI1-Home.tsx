// Home
import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Text style={styles.backButtonText}>{"<"}</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Đăng ký</Text>
      </View>

      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: "https://cdn-icons-png.freepik.com/512/4170/4170629.png",
          }}
          style={styles.illustrationImage}
        />
      </View>

      <Text style={styles.mainText}>
        Hãy biến thời gian rảnh thành thu nhập!
      </Text>

      <TouchableOpacity style={styles.registerButton}>
        <Text style={styles.buttonText}>Đăng ký</Text>
      </TouchableOpacity>

      <View style={styles.footer}>
        <Text style={styles.haveAccountText}>Bạn đã có tài khoản?</Text>
      </View>
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginText}>Đăng nhập</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F4FF",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 50,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 20,
    position: "absolute",
    top: 40,
  },
  backButton: {
    marginRight: 10,
  },
  backButtonText: {
    fontSize: 24,
    color: "#555",
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#4A4A4A",
    textAlign: "center",
  },
  imageContainer: {
    marginTop: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  illustrationImage: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
  mainText: {
    fontSize: 18,
    color: "#4A4A4A",
    textAlign: "center",
    paddingHorizontal: 30,
    marginVertical: 20,
  },
  registerButton: {
    backgroundColor: "#4A6FF0",
    width: "80%",
    paddingVertical: 15,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  loginButton: {
    width: "80%",
    paddingVertical: 15,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#4A6FF0",
    borderWidth: 2,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  haveAccountText: {
    fontSize: 14,
    color: "#777",
    marginRight: 5,
  },
  loginText: {
    fontSize: 14,
    color: "#4A6FF0",
    fontWeight: "bold",
  },
});
