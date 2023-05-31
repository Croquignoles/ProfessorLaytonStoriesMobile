import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import GameService from "../api/GameService";

//Permet d'afficher un jeu
const GameItem = ({ game, navigation }) => {
  let fulluri = GameService.getImageUriByName(game.urlImage1);
  return (
    <View>
      <TouchableOpacity
        style={styles.container}
        onPress={() => {
          navigation.navigate("GameDetail", { paramGame: game });
        }}
      >
        <Image style={styles.image} source={{ uri: fulluri }} />
        <Text style={styles.text}>{game.title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default GameItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 25,
  },
  text: {
    marginLeft: 10,
    fontSize: 16,
  },
  image: { height: 75, width: 75 },
});
