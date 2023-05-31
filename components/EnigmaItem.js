import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import EnigmaService from "../api/EnigmaService";

//Permet l'affichage d'une enigme
const EnigmaItem = ({ enigma, navigation }) => {
  if (enigma.id == 1) {
    urlImg = "0167.jpg";
  } else if (enigma.id == 2) {
    urlImg = "0237.jpg";
  } else if (enigma.id == 3) {
    urlImg = "0364.jpg";
  }
  let fulluri = EnigmaService.getImageUriByName(urlImg);
  return (
    <View>
      <TouchableOpacity
        style={styles.container}
        onPress={() => {
          navigation.navigate("EnigmaDetails", { paramEnigma: enigma });
        }}
      >
        <Image style={styles.image} source={{ uri: fulluri }} />
        <Text style={styles.text}>{enigma.name}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default EnigmaItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    margin: 15,
  },
  text: {
    marginLeft: 10,
    fontSize: 18,
  },
  image: { height: 75, width: 75 },
});
