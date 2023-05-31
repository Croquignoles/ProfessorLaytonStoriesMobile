import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  TextInput,
  Image,
  Alert,
} from "react-native";
import MusicService from "../api/MusicService";
import Icon from "react-native-vector-icons/FontAwesome";

//Gestionnaire d'ajout d'une musique
const handleAddMusic = (nom, lien) => {
  MusicService.createMusic(nom, lien, (newMusic) => {
    addMusic(newMusic.nom, newMusic.lien);
    navigation.navigate("Music");
  });
};

//Écran d'ajout d'une musique
const MusicAddScreen = ({ navigation }) => {
  const [nom, setNom] = useState("");
  const [lien, setLien] = useState("");

  //Vérifie que les champs sont bien remplis avant d'ajouter la musique
  const handlePress = () => {
    if (!nom || !lien) {
      // Affiche une alerte si un champ est vide
      Alert.alert("Erreur", "Veuillez remplir tous les champs !", [
        { text: "J'ai compris" },
      ]);
      return;
    }

    handleAddMusic(nom, lien);
    navigation.navigate("Music");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.menace}>
        Vous là ! Vous êtes sur le point d'ajouter UNE MUSIQUE !
      </Text>
      <Image
        style={styles.image}
        source={{
          uri: "https://www.numerama.com/wp-content/uploads/2023/02/layton.jpg",
        }}
      />
      <TextInput
        placeholder={"Entrez le nom de votre musique"}
        style={styles.textHolder}
        onChangeText={(text) => {
          setNom(text);
        }}
      ></TextInput>
      <TextInput
        placeholder={"Entrez l'URL de votre musique"}
        style={styles.textHolder}
        onChangeText={(link) => {
          setLien(link);
        }}
      ></TextInput>
      <View style={styles.button}>
        <Button
          title="Ajouter"
          color="#8F694F"
          icon={<Icon name="arrow-right" size={15} color="white" />}
          onPress={handlePress}
        ></Button>
      </View>
    </View>
  );
};

export default MusicAddScreen;

const styles = StyleSheet.create({
  textHolder: {
    height: 45,
    margin: 10,
    borderColor: "gray",
    borderWidth: 1,
    paddingLeft: 10,
  },
  container: {
    flex: 1,
    justifyContent: "center",
  },
  menace: {
    fontSize: 25,
    textAlign: "center",
    marginBottom: 25,
  },
  image: { height: 200, width: 350, alignSelf: "center", marginBottom: 30 },
  image: { height: 200, width: 350, alignSelf: "center" },

  button: {
    width: 120,
    alignSelf: "center",
    borderRadius: 4,
    margin: 10,
  },
});
