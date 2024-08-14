import { MEALS } from "@/app/data/dummy-data";
import { addFavorite, removeFavorite } from "@/store/redux/reducer";
// import { FavoritesContext } from "@/store/context/Favorites-context";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useContext, useEffect } from "react";
import { Image, Text, View, StyleSheet, ScrollView } from "react-native";
import { useDispatch, useSelector } from "react-redux";

function DetailMeal({ route, navigation }: any) {
  const catID = route.params.id; // name
  const detailID = MEALS.find((item) => item.title === catID); // []
  // const FavoritesMealctx = useContext(FavoritesContext);
  const FavoritesMealRedux = useSelector(
    (state: any) => state.FavoritesRedux.ids
  ); // use state
  const dispatch = useDispatch(); // sent state to redux

  const isMealFavorite = FavoritesMealRedux.includes(catID);

  function handlerChangeStateContext() {
    if (isMealFavorite) {
      // FavoritesMealRedux.removeFavorite(catID);
      dispatch(removeFavorite({ id: catID }));
    } else {
      // FavoritesMealRedux.addFavorite(catID);
      dispatch(addFavorite({ id: catID }));
    }
  }

  useEffect(() => {
    if (detailID) {
      navigation.setOptions({
        title: detailID.title,
        headerRight: () => {
          return (
            <Ionicons
              name={isMealFavorite ? "star" : "star-outline"}
              color="white"
              size={24}
              onPress={handlerChangeStateContext}
              style={({ press }: any) => press && styles.press}
            />
          );
        },
      });
    } else {
      navigation.setOptions({
        title: "Meals",
        headerRight: () => {
          return (
            <Ionicons
              name={isMealFavorite ? "star" : "star-outline"}
              color="white"
              size={24}
              onPress={handlerChangeStateContext}
              style={({ press }: any) => press && styles.press}
            />
          );
        },
      });
    }
  }, [navigation, detailID, handlerChangeStateContext, isMealFavorite]);

  if (!detailID) {
    return (
      <View style={styles.centered}>
        <Text>Meal not found!</Text>
      </View>
    );
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image source={{ uri: detailID.imageUrl }} style={styles.image} />
        <Text style={styles.title}>{detailID.title}</Text>
        <View style={styles.details}>
          <Text style={styles.detailItems}>{detailID.duration}</Text>
          <Text style={styles.detailItems}>{detailID.complexity}</Text>
          <Text style={styles.detailItems}>{detailID.affordability}</Text>
        </View>
        <Text style={styles.title}>Ingredients</Text>
        <View style={{ padding: 30 }}>
          {detailID.ingredients.map((item) => (
            <View key={item} style={styles.subtitle}>
              <Text>{item}</Text>
            </View>
          ))}
        </View>
        <Text style={styles.title}>Steps</Text>
        <View style={{ padding: 30 }}>
          {detailID.steps.map((item) => (
            <View key={item} style={styles.subtitle}>
              <Text>{item}</Text>
            </View>
          ))}
        </View>
        <View style={{ paddingBottom: 80 }}></View>
      </View>
    </ScrollView>
  );
}

export default DetailMeal;

const styles = StyleSheet.create({
  press: { opacity: 0.2 },
  container: {
    // padding: 16,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    marginVertical: 8,
    textAlign: "center",
    color: "white",
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
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  subtitle: {
    borderRadius: 8,
    padding: 8,
    margin: 2,
    backgroundColor: "#d470a2",
  },
});
