import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import GameService from "../api/GameService";
import GameList from "../components/GameList";

//Affichage de la page d'accueil, c'est aussi la liste des jeux (clicables)
const HomeScreen = ({ navigation }) => {
  const [games, setGames] = useState([]);
  useEffect(() => {
    GameService.fetchFromApi(
      "https://enschubachertavardpls.azurewebsites.net/api/gamesapi"
    ).then((games) => setGames(games));
  }, []);
  return (
    <View style={styles.container}>
      <GameList games={games} navigation={navigation} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
