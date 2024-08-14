import { MEALS } from "@/app/data/dummy-data";
import { FavoritesContext } from "@/store/context/Favorites-context";
import { useContext } from "react";
import {
  FlatList,
  Image,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useSelector } from "react-redux";

function FavoritesScreen() {
  // const FavoritesMealCtx = useContext(FavoritesContext);
  const FavoritesMealRedux = useSelector(
    (state: any) => state.FavoritesRedux.ids
  );
  const filterIDMealFavorites = MEALS.filter((item) =>
    FavoritesMealRedux.includes(item.title)
  );
  if (filterIDMealFavorites.length === 0) {
    return (
      <View style={styles.centered}>
        <Text>No favorite meals found. Start adding some!</Text>
      </View>
    );
  }
  return (
    <ScrollView>
      <View>
        <FlatList
          key={2}
          data={filterIDMealFavorites}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            return (
              <View style={styles.mealItem}>
                <Pressable>
                  <View style={styles.container}>
                    <View>
                      <Image
                        source={{ uri: item.imageUrl }}
                        style={styles.image}
                      />
                      <Text style={styles.title}>{item.title}</Text>
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

export default FavoritesScreen;
const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
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
