import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import GameService from "../api/GameService";

//Permet l'affichage des détails d'un jeu
const GameDetailItem = ({ game }) => {
  let fulluri = GameService.getImageUriByName(game.urlImage1);
  return (
    <View>
      <Image style={styles.image} source={{ uri: fulluri }} />
      <Text style={[{ textAlign: "center" }]}>{game.description}</Text>
    </View>
  );
};

//Affiche les détails d'un jeu, avec un affichage adapté pour la date
const GameDetailScreen = ({ route, navigation }) => {
  const { paramGame } = route.params;
  return (
    <View style={styles.container}>
      <Text style={[{ alignSelf: "center", fontSize: 20 }]}>
        {" "}
        {paramGame.title}
      </Text>
      <Text
        style={[{ alignSelf: "center", fontSize: 13, fontStyle: "italic" }]}
      >
        Date de sortie : {paramGame.releaseDate.toString().split("T")[0]}
      </Text>
      <GameDetailItem game={paramGame} />
    </View>
  );
};

export default GameDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  image: {
    alignSelf: "center",
    width: 250,
    height: 250,
    margin: 30,
  },
  description: { fontSize: 22, marginBottom: 10 },
  descriptionText: {
    fontSize: 16,
    marginLeft: 15,
    marginRight: 15,
  },
  spinnerContainer: {
    flex: 1,
    justifyContent: "center",
  },
});
