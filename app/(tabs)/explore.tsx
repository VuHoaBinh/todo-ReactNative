// DistrictSelectionScreen;
import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import CheckBox from "@react-native-community/checkbox";

export default function TabTwoScreen() {
  const [selectedDistricts, setSelectedDistricts] = useState({});
  const districts = [
    "Quận 5",
    "Quận 6",
    "Quận 7",
    "Quận 8",
    "Quận 9",
    "Quận 10",
    "Quận 11",
    "Quận 12",
    "Bình Thạnh",
    "Bình Tân",
    "Bình Chánh",
    "Tân Bình",
    "Tân Phú",
    "Nhà Bè",
    "Củ Chi",
    "Hóc Môn",
    "Thủ Đức",
    "Gò Vấp",
    "Cần Giờ",
    "Phú Nhuận",
  ];

  const handleDistrictChange = (district) => {
    setSelectedDistricts({
      ...selectedDistricts,
      [district]: !selectedDistricts[district],
    });
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <Text style={styles.headerText}>Bạn muốn làm việc ở quận nào?</Text>

      {/* Districts List */}
      <View style={styles.districtsContainer}>
        {districts.map((district, index) => (
          <View key={index} style={styles.districtItem}>
            <CheckBox
              value={selectedDistricts[district] || false}
              onValueChange={() => handleDistrictChange(district)}
              tintColors={{ true: "#4A6FF0", false: "#CCCCCC" }}
            />
            <Text style={styles.districtText}>{district}</Text>
          </View>
        ))}
      </View>

      {/* Action Buttons */}
      <View style={styles.actionButtons}>
        <TouchableOpacity style={styles.backButton}>
          <Text style={styles.backButtonText}>Quay lại</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.continueButton}>
          <Text style={styles.continueButtonText}>Tiếp tục</Text>
        </TouchableOpacity>
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
  districtsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  districtItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
    width: "45%",
  },
  districtText: {
    marginLeft: 10,
    fontSize: 16,
    color: "#4A4A4A",
  },
  actionButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
  },
  backButton: {
    backgroundColor: "#FFFFFF",
    borderColor: "#FF6F61",
    borderWidth: 1,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  backButtonText: {
    color: "#FF6F61",
    fontSize: 16,
  },
  continueButton: {
    backgroundColor: "#CCCCCC",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  continueButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
  },
});
