import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import GameItem from "./GameItem";

//Permet d'afficher la liste des jeux
const GameList = ({ games, navigation }) => {
  if (games.length > 0) {
    return (
      <FlatList
        style={styles.gameList}
        data={games}
        keyExtractor={(game) => game.id.toString()}
        renderItem={({ item }) => {
          return <GameItem game={item} navigation={navigation} />;
        }}
      />
    );
  } else
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Aucun jeu enregistré</Text>
      </View>
    );
};

export default GameList;

const styles = StyleSheet.create({
  gameList: {
    flex: 1,
    marginHorizontal: 10,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 16,
  },
});
