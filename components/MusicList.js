import { React } from "react";
import { Text, View, StyleSheet, FlatList, Image } from "react-native";
import MusicItem from "./MusicItem";

//Affiche la liste de toutes les musiques sous forme de vidéo et offre la possibilité d'en ajouter
const MusicList = ({ musics, navigation, fetchMusics }) => {
  if (musics.length > 0)
    return (
      <View style={styles.container}>
        <View>
          <FlatList
            data={musics}
            keyExtractor={(music) => music.id.toString()}
            renderItem={({ item }) => {
              return (
                <MusicItem
                  music={item}
                  navigation={navigation}
                  fetchMusics={fetchMusics}
                />
              );
            }}
          />
        </View>
      </View>
    );
  else
    return (
      <View>
        <Text style={styles.text}>
          Rien à écouter pour l'instant ... &#128148;{" "}
        </Text>
        <Image
          style={styles.image}
          source={{
            uri: "https://images.wikia.com/layton/images/9/9a/Hershel_Brutally_Beaten.PNG",
          }}
        />
      </View>
    );
};

export default MusicList;

const styles = StyleSheet.create({
  containerWeb: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
  },
  container: {
    flex: 1,
    marginTop: 10,
  },
  text: {
    fontSize: 18,
    textAlign: "center",
    marginTop: 200,
    fontWeight: 300,
  },
  image: { height: 150, width: 250, alignSelf: "center", margin: 20 },

  button: {
    width: 120,
    alignSelf: "center",
    borderRadius: 4,
    margin: 10,
  },
});
