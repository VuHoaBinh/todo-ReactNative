// OTPScreen;
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";

export default function TabTwoScreen() {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [timer, setTimer] = useState(30);

  useEffect(() => {
    const interval = setInterval(() => {
      if (timer > 0) {
        setTimer(timer - 1);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [timer]);

  const handleOtpChange = (value: any, index: any) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Text style={styles.backButtonText}>{"<"}</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Kích hoạt tài khoản</Text>
      </View>

      {/* Illustration */}
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: "https://cdn-icons-png.freepik.com/512/4170/4170629.png",
          }}
          style={styles.illustrationImage}
        />
      </View>

      {/* Greeting and Instructions */}
      <Text style={styles.greetingText}>Xin chào Nguyễn Bảo Thành</Text>
      <Text style={styles.instructionText}>
        MÃ KÍCH HOẠT đã gửi đến số điện thoại 823993811 của bạn qua tin nhắn.
        Vui lòng nhập MÃ KÍCH HOẠT vào bên dưới!
      </Text>

      {/* OTP Input */}
      <View style={styles.otpContainer}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            style={styles.otpInput}
            keyboardType="numeric"
            maxLength={1}
            value={digit}
            onChangeText={(value) => handleOtpChange(value, index)}
          />
        ))}
      </View>

      {/* Timer */}
      <Text style={styles.timerText}>Mã OTP sẽ xuất hiện trong {timer}s</Text>

      {/* Activation Button */}
      <TouchableOpacity style={styles.activateButton}>
        <Text style={styles.activateButtonText}>Kích hoạt</Text>
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
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  illustrationImage: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
  greetingText: {
    fontSize: 18,
    color: "#333",
    fontWeight: "bold",
    textAlign: "center",
  },
  instructionText: {
    fontSize: 14,
    color: "#777",
    textAlign: "center",
    marginVertical: 10,
  },
  otpContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 20,
  },
  otpInput: {
    borderWidth: 1,
    borderColor: "#CCCCCC",
    borderRadius: 8,
    padding: 10,
    fontSize: 18,
    textAlign: "center",
    width: 50,
    height: 50,
  },
  timerText: {
    fontSize: 14,
    color: "#FF8F5C",
    textAlign: "center",
  },
  activateButton: {
    backgroundColor: "#4A6FF0",
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: "center",
    width: "100%",
    marginTop: 20,
  },
  activateButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});
