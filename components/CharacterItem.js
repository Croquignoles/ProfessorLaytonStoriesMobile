import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import CharacterService from "../api/CharacterService";

//Permet l'affichage d'un personnage
const CharacterItem = ({ character, navigation }) => {
  let fulluri = CharacterService.getImageUriByName(
    character.firstName + "1.jpg"
  );

  return (
    <View>
      <TouchableOpacity
        style={styles.container}
        onPress={() => {
          navigation.navigate("CharacterDetails", {
            paramCharacter: character,
          });
        }}
      >
        <Image style={styles.image} source={{ uri: fulluri }} />
        <Text style={styles.text}>
          {character.firstName} {character.lastName}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CharacterItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 25,
  },
  text: {
    marginLeft: 10,
    fontSize: 18,
  },
  image: { height: 75, width: 75 },
});
