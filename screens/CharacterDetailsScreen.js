import React from "react";
import { StyleSheet, View, Text, Image, ScrollView } from "react-native";
import CharacterService from "../api/CharacterService";

//Permet l'affichage des détails d'un personnage
const CharacterDetailItem = ({ character }) => {
  let fulluri = CharacterService.getImageUriByName(character.urlImage1);
  if (character.isBadGuy) {
    return (
      <View>
        <Text style={styles.name}>
          {" "}
          {character.firstName} {character.lastName} (&#128520;)
        </Text>
        <Image style={styles.image} source={{ uri: fulluri }} />
        <Text style={styles.descriptionText}>{character.description}</Text>
      </View>
    );
  } else {
    return (
      <View>
        <Text style={styles.name}>
          {" "}
          {character.firstName} {character.lastName} (&#128519;)
        </Text>
        <Image style={styles.image} source={{ uri: fulluri }} />
        <Text style={styles.descriptionText}>{character.description}</Text>
      </View>
    );
  }
};

//Affiche les détails d'un personnage
const CharacterDetailsScreen = ({ route, navigation }) => {
  const { paramCharacter } = route.params;
  return (
    <ScrollView style={styles.container}>
      <CharacterDetailItem character={paramCharacter} />
    </ScrollView>
  );
};

export default CharacterDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: 300,
    height: 200,
    alignSelf: "center",
    margin: 20,
  },
  name: {
    margin: 15,
    textAlign: "center",
    fontSize: 26,
  },
  type: {
    fontSize: 14,
  },
  description: {
    fontSize: 22,
    marginBottom: 10,
  },
  descriptionText: {
    fontSize: 14,
    marginLeft: 15,
    marginRight: 15,
    textAlign: "center",
  },
});
