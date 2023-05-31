import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Button,
  Alert,
} from "react-native";
import { WebView } from "react-native-webview";
import MusicService from "../api/MusicService";

//Permet d'afficher une musique
const MusicItem = ({ music, navigation, fetchMusics }) => {
  //Permet de supprimer une musique
  const eraseMusic = (id) => {
    MusicService.deleteMusic(id).then(() => fetchMusics());
  };

  //Gère la suppression d'une musique en ouvrant une alerte pour l'utilisateur
  const handleDeleteMusic = () => {
    Alert.alert(
      "Confirmation",
      "Êtes-vous sûr de vouloir supprimer cette musique ?",
      [
        {
          text: "Annuler",
          style: "cancel",
        },
        {
          text: "Supprimer",
          style: "destructive",
          onPress: () => {
            eraseMusic(music.id);
          },
        },
      ],
      { cancelable: false }
    );
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.containerWeb}
        onPress={() => {
          navigation.navigate("Music", { musicId: music.id });
        }}
      >
        <Text style={styles.text}>{music.name}</Text>
      </TouchableOpacity>
      <WebView
        style={{ width: 320, height: 230, alignSelf: "center" }}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        source={{ uri: music.url }}
      />
      <View style={styles.button}>
        <Button
          title="SUPPRIMER &#10060;	"
          color="#AB8D6C"
          onPress={handleDeleteMusic}
        ></Button>
      </View>
    </View>
  );
};

export default MusicItem;

const styles = StyleSheet.create({
  containerWeb: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
  },
  container: {
    flex: 1,
  },
  text: {
    fontSize: 18,
  },
  image: { height: 75, width: 75 },

  button: {
    width: 120,
    alignSelf: "center",
    borderRadius: 4,
    margin: 10,
  },
});
