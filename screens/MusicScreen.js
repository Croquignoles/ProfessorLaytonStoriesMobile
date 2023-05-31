import React, { useEffect, useState } from "react";
import { Button, StyleSheet, SafeAreaView } from "react-native";
import MusicService from "../api/MusicService";
import MusicList from "../components/MusicList";

//Affichage de toutes les musiques avec une webview
const MusicScreen = ({ navigation }) => {
  const [musics, setMusics] = useState([]);

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      fetchMusics();
    });
    return unsubscribe;
  }, [navigation]);

  //Récupère la liste des musiques
  const fetchMusics = () => {
    MusicService.fetchFromApi(
      "https://enschubachertavardpls.azurewebsites.net/api/musicsapi"
    ).then((musics) => setMusics(musics));
  };

  const addMusic = (nom, lien) => {
    MusicService.createMusic(nom, lien).then(() => fetchMusics());
  };

  return (
    <SafeAreaView style={styles.container}>
      <Button
        title="AJOUTER UNE MUSIQUE &#127911;			"
        color="#8F694F"
        width="100"
        style={styles.button}
        onPress={() => {
          navigation.navigate("AddMusic", { addMusic });
        }}
      ></Button>
      <MusicList
        musics={musics}
        navigation={navigation}
        fetchMusics={fetchMusics}
      />
    </SafeAreaView>
  );
};

export default MusicScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    width: 12,
    alignSelf: "center",
    borderRadius: 4,
    margin: 10,
  },
});
