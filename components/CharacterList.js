import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import CharacterItem from "./CharacterItem";

//Permet l'affichage de tous les personnages
const CharacterList = ({ characters, navigation }) => {
  if (characters.length > 0) {
    return (
      <FlatList
        style={styles.characterList}
        data={characters}
        keyExtractor={(character) => character.id.toString()}
        renderItem={({ item }) => {
          return <CharacterItem character={item} navigation={navigation} />;
        }}
      />
    );
  } else
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Aucun personnage !</Text>
      </View>
    );
};

export default CharacterList;

const styles = StyleSheet.create({
  characterList: {
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
