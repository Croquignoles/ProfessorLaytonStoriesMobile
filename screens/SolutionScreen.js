import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

//Affiche la solution d'une énigme
const SolutionScreen = ({ route, navigation }) => {
  const { paramSolution } = route.params;
  let fulluri =
    "https://enschubachertavardpls.azurewebsites.net/img/solution/" +
    paramSolution.urlImg;
  return (
    <View style={styles.container}>
      <Text style={styles.title}> &#128161; Solution &#128161; </Text>
      <Text style={styles.explication}>
        Que vous souhaitiez savoir si vous aviez raison ou que vous aillez
        abandonné, vous pouvez être fier de votre travail d'enquêteur !
      </Text>
      <Text style={styles.prank}>
        Non c'est faux, si vous avez abandonné vous êtes NUL.
      </Text>
      <Image style={styles.image} source={{ uri: fulluri }} />
      <Text style={styles.hint}>{paramSolution.content}</Text>
    </View>
  );
};

export default SolutionScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    justifyContent: "center",
  },
  image: {
    alignSelf: "center",
    width: 200,
    height: 150,
    marginBottom: 20,
    borderRadius: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "500",
    marginBottom: 25,
    textAlign: "center",
  },
  explication: {
    textAlign: "center",
    marginLeft: 10,
    marginRight: 10,
    fontWeight: 400,
  },
  prank: {
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
