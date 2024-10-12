// CitySelectionScreen;
import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";

export default function TabTwoScreen() {
  const cities = [
    "Hồ Chí Minh",
    "Hà Nội",
    "Đà Nẵng",
    "Bình Dương",
    "Đồng Nai",
    "Cần Thơ",
    "Hải Phòng",
    "Lâm Đồng",
    "Khánh Hòa",
    "Quảng Nam",
    "Thừa Thiên Huế",
    "Hưng Yên",
    "Nghệ An",
    "Long An",
  ];

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <Text style={styles.headerText}>Bạn muốn làm việc ở thành phố nào?</Text>

      {/* Illustration */}
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: "https://cdn-icons-png.freepik.com/512/4170/4170629.png",
          }}
          style={styles.illustrationImage}
        />
      </View>

      {/* Cities List */}
      <View style={styles.citiesContainer}>
        {cities.map((city, index) => (
          <TouchableOpacity key={index} style={styles.cityButton}>
            <Text style={styles.cityButtonText}>{city}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 20,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#4A4A4A",
    textAlign: "center",
    marginVertical: 20,
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  illustrationImage: {
    width: 150,
    height: 150,
    resizeMode: "contain",
  },
  citiesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  cityButton: {
    backgroundColor: "#F0F0F0",
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 10,
    width: "45%",
    alignItems: "center",
  },
  cityButtonText: {
    color: "#4A4A4A",
    fontSize: 16,
  },
});
