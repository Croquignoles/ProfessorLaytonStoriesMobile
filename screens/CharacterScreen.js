import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import CharacterService from "../api/CharacterService";
import CharacterList from "../components/CharacterList";

//Affiche tous les personnages, clicables
const CharacterScreen = ({ navigation }) => {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    CharacterService.fetchFromApi(
      "https://enschubachertavardpls.azurewebsites.net/api/charactersapi"
    ).then((characters) => setCharacters(characters));
  }, []);

  return (
    <View style={styles.container}>
      <CharacterList characters={characters} navigation={navigation} />
    </View>
  );
};

export default CharacterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
