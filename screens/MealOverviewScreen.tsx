import { MEALS, CATEGORIES } from "@/app/data/dummy-data";
import { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Pressable,
  Image,
  Platform,
  ScrollView,
} from "react-native";

function MealOverviewScreen({ route, navigation }: any) {
  // valiable props must 'route'
  const catID = route.params.id;

  const filterIDinMeal = MEALS.filter((item) => {
    return item.categoryIds.indexOf(catID) >= 0;
  });

  useEffect(() => {
    const filterCategory = CATEGORIES.find((item) => {
      return item.id === catID;
    });

    navigation.setOptions({
      title: filterCategory ? filterCategory.title : "Meals",
    });
  }, [navigation, catID]);
  return (
    <ScrollView>
      <View>
        <FlatList
          key={2}
          data={filterIDinMeal}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            return (
              <View style={styles.mealItem}>
                <Pressable
                  onPress={function handler() {
                    console.log("a", item.title);
                    navigation.navigate("DetailMeal", { id: item.title });
                  }}
                >
                  <View style={styles.container}>
                    <View>
                      <Image
                        source={{ uri: item.imageUrl }}
                        style={styles.image}
                      />
                      <Text style={styles.title}>{item.title}</Text>
                    </View>
                    <View style={styles.details}>
                      <Text style={styles.detailItems}>{item.duration}</Text>
                      <Text style={styles.detailItems}>{item.complexity}</Text>
                      <Text style={styles.detailItems}>
                        {item.affordability}
                      </Text>
                    </View>
                  </View>
                </Pressable>
              </View>
            );
          }}
        />
      </View>
    </ScrollView>
  );
}

export default MealOverviewScreen;

const styles = StyleSheet.create({
  container: {
    borderRadius: 18,
    overflow: "hidden",
  },
  mealItem: {
    borderRadius: 18,
    margin: 16,
    backgroundColor: "white",
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  text: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 25,
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    margin: 8,
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    justifyContent: "center",
  },
  detailItems: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});
