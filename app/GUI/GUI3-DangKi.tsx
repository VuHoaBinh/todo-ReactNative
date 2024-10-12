// RegisterScreen;
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  CheckBox,
  ScrollView,
} from "react-native";

export default function TabTwoScreen() {
  const [isSelected, setSelection] = useState(false);
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          {/* Back Icon */}
          <Text style={styles.backButtonText}>{"<"}</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Đăng ký</Text>
      </View>

      {/* Full Name */}
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Họ và tên</Text>
        <TextInput style={styles.textInput} placeholder="Nguyễn Văn A" />
      </View>

      {/* Gender Selection */}
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>
          Giới tính{" "}
          <Text style={styles.requiredText}>(Thông tin bắt buộc)</Text>
        </Text>
        <View style={styles.genderContainer}>
          <TouchableOpacity style={styles.genderOption}>
            <Text>Nam</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.genderOption}>
            <Text>Nữ</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* ID/CCCD */}
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Số CMND/CCCD</Text>
        <TextInput
          style={styles.textInput}
          placeholder="123456789"
          keyboardType="number-pad"
        />
      </View>

      {/* Phone Number */}
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Số điện thoại</Text>
        <View style={styles.inputWrapper}>
          <Image
            source={{ uri: "https://flagcdn.com/w320/vn.png" }}
            style={styles.flagIconSmall}
          />
          <Text style={styles.countryCode}>+84</Text>
          <TextInput
            style={styles.textInput}
            placeholder="0987654321"
            keyboardType="number-pad"
          />
        </View>
      </View>

      {/* Password */}
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Mật khẩu (để đăng nhập lần sau)</Text>
        <Text style={styles.passwordHint}>
          Mật khẩu phải chứa 6-12 ký tự và không có khoảng cách
        </Text>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.textInput}
            placeholder="Ít nhất 6 ký tự"
            secureTextEntry={true}
          />
          <TouchableOpacity>
            <Text style={styles.eyeIcon}>👁️</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Referral Code */}
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>
          Mã giới thiệu (nếu có) <Text style={styles.optionalIcon}>?</Text>
        </Text>
        <TextInput style={styles.textInput} placeholder="Mã giới thiệu" />
      </View>

      {/* Terms and Conditions */}
      <View style={styles.termsContainer}>
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
        />
        <Text style={styles.termsText}>
          Tôi đồng ý với{" "}
          <Text style={styles.termsLink} onPress={() => Linking.openURL("#")}>
            Điều kiện sử dụng và chính sách bảo mật
          </Text>{" "}
          của bTaskee
        </Text>
      </View>

      {/* Continue Button */}
      <TouchableOpacity style={styles.continueButton} disabled={!isSelected}>
        <Text style={styles.continueButtonText}>Tiếp tục</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 30,
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
  },
  inputContainer: {
    marginTop: 20,
  },
  inputLabel: {
    fontSize: 16,
    color: "#333",
    marginBottom: 5,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#CCCCCC",
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
  },
  requiredText: {
    color: "red",
    fontSize: 12,
  },
  genderContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 5,
  },
  genderOption: {
    marginRight: 20,
    flexDirection: "row",
    alignItems: "center",
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
  passwordHint: {
    fontSize: 12,
    color: "#777",
    marginBottom: 5,
  },
  eyeIcon: {
    fontSize: 18,
    color: "#666",
  },
  termsContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  checkbox: {
    marginRight: 10,
  },
  termsText: {
    fontSize: 14,
    color: "#333",
  },
  termsLink: {
    color: "#4A6FF0",
  },
  continueButton: {
    backgroundColor: "#E0E0E0",
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: "center",
    width: "100%",
    marginTop: 30,
  },
  continueButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
  },
});
