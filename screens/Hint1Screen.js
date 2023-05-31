import React from "react";
import { StyleSheet, Text, View } from "react-native";

//Affiche le premier indice d'un énigme
const Hint1Screen = ({ route, navigation }) => {
  const { paramHint } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.title}> &#128269; Indice 1 &#128269;</Text>
      <Text style={styles.explication}>
        Vous êtes encore dans le clan des grands détectives à ce stade, vous
        avez juste un petit coup de mou ça arrive...
      </Text>
      <Text style={styles.hint}>{paramHint.content}</Text>
    </View>
  );
};

export default Hint1Screen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "500",
    marginBottom: 25,
    textAlign: "center",
  },
  explication: {
    fontStyle: "italic",
    textAlign: "center",
    marginBottom: 20,
    marginLeft: 10,
    marginRight: 10,
    fontWeight: 300,
  },
  hint: {
    backgroundColor: "#8F694F",
    color: "white",
    textAlign: "center",
    marginLeft: 30,
    marginRight: 30,
    padding: 15,
    borderRadius: 20,
    fontWeight: 400,
  },
});
