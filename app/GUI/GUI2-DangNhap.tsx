// LoginScreen;
import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      {/* Country and Language Select */}
      <View style={styles.languageContainer}>
        <TouchableOpacity style={styles.countrySelect}>
          <Image
            source={{ uri: "https://flagcdn.com/w320/vn.png" }}
            style={styles.flagIcon}
          />
          <Text style={styles.languageText}>Việt Nam</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.languageSelect}>
          <Text style={styles.languageText}>Tiếng Việt</Text>
        </TouchableOpacity>
      </View>

      {/* App Logo */}
      <View style={styles.logoContainer}>
        <Image
          source={{ uri: "https://via.placeholder.com/150" }}
          style={styles.logo}
        />
        <Text style={styles.appName}>bTaskee</Text>
        <Text style={styles.appSubtitle}>Dành cho Tasker</Text>
      </View>

      {/* Phone Number Input */}
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Số điện thoại</Text>
        <View style={styles.inputWrapper}>
          <Image
            source={{ uri: "https://flagcdn.com/w320/vn.png" }}
            style={styles.flagIconSmall}
          />
          <Text style={styles.countryCode}>+84</Text>
          <TextInput style={styles.textInput} placeholder="Số điện thoại" />
        </View>
        <Text style={styles.requiredText}>Thông tin bắt buộc</Text>
      </View>

      {/* Password Input */}
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Mật khẩu</Text>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.textInput}
            placeholder="Mật khẩu"
            secureTextEntry={true}
          />
          <TouchableOpacity>
            <Text style={styles.eyeIcon}>👁️</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Forgot Password and Login */}
      <View style={styles.actionsContainer}>
        <TouchableOpacity>
          <Text style={styles.forgotPassword}>Quên mật khẩu?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginButton} disabled={true}>
          <Text style={styles.loginButtonText}>Đăng nhập</Text>
        </TouchableOpacity>
      </View>

      {/* Sign Up */}
      <View style={styles.signupContainer}>
        <Text style={styles.signupText}>Bạn đã có tài khoản?</Text>
        <TouchableOpacity>
          <Text style={styles.signupLink}>Đăng ký</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 20,
    justifyContent: "space-between",
  },
  languageContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
  },
  countrySelect: {
    flexDirection: "row",
    alignItems: "center",
  },
  languageSelect: {
    flexDirection: "row",
    alignItems: "center",
  },
  flagIcon: {
    width: 25,
    height: 25,
    marginRight: 8,
  },
  languageText: {
    fontSize: 16,
    color: "#333",
  },
  logoContainer: {
    alignItems: "center",
    marginTop: 30,
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: 10,
  },
  appName: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#4A6FF0",
  },
  appSubtitle: {
    fontSize: 16,
    color: "#FF8F5C",
  },
  inputContainer: {
    marginTop: 20,
  },
  inputLabel: {
    fontSize: 16,
    color: "#333",
    marginBottom: 5,
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#CCCCCC",
    borderRadius: 8,
    padding: 10,
  },
  flagIconSmall: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
  countryCode: {
    fontSize: 16,
    color: "#333",
    marginRight: 10,
  },
  textInput: {
    flex: 1,
    fontSize: 16,
  },
  requiredText: {
    color: "red",
    fontSize: 12,
    marginTop: 5,
  },
  eyeIcon: {
    fontSize: 18,
    color: "#666",
  },
  actionsContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  forgotPassword: {
    fontSize: 14,
    color: "#4A6FF0",
    marginBottom: 20,
  },
  loginButton: {
    backgroundColor: "#E0E0E0",
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: "center",
    width: "100%",
  },
  loginButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
  },
  signupContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  signupText: {
    fontSize: 14,
    color: "#777",
    marginRight: 5,
  },
  signupLink: {
    fontSize: 14,
    color: "#4A6FF0",
    fontWeight: "bold",
  },
  footerText: {
    fontSize: 12,
    color: "#777",
    textAlign: "center",
    marginBottom: 10,
  },
});
