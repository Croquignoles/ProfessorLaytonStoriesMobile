import React from "react";
import { StyleSheet, Text, View } from "react-native";

//Affiche le deuxième indice d'une énigme
const Hint2Screen = ({ route, navigation }) => {
  const { paramHint } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.title}> &#128549; Indice 2 &#128549; </Text>
      <Text style={styles.explication}>
        C'est la panique on dirait, vous nous avez habitué à mieux tout de même
        !
      </Text>
      <Text style={styles.hint}>{paramHint.content}</Text>
    </View>
  );
};

export default Hint2Screen;

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
