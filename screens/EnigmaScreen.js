import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import EnigmaService from "../api/EnigmaService";
import EnigmaList from "../components/EnigmaList";

//Affiche la liste des énigmes
const EnigmaScreen = ({ navigation }) => {
  const [enigmas, setEnigmas] = useState([]);
  useEffect(() => {
    EnigmaService.fetchFromApi(
      "https://enschubachertavardpls.azurewebsites.net/api/enigmasapi"
    ).then((enigmas) => setEnigmas(enigmas));
  }, []);

  return (
    <View style={styles.container}>
      <EnigmaList enigmas={enigmas} navigation={navigation} />
    </View>
  );
};

export default EnigmaScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
