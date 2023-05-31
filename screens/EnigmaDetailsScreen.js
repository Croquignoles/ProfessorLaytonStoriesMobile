import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import EnigmaService from "../api/EnigmaService";
import HintService from "../api/HintService";
import SolutionService from "../api/SolutionService";

//Permet l'affichage des détails d'une énigme
const EnigmaDetailItem = ({ enigma }) => {
  return (
    <View>
      <Text style={[{ textAlign: "center", margin: 10 }]}>
        {enigma.content}
      </Text>
    </View>
  );
};

//Affichage le détail d'une énigme avec la possibilité d'avoir les indices et ou la solution
const EnigmaDetailsScreen = ({ route, navigation }) => {
  const [hints, setHints] = useState([]);
  useEffect(() => {
    HintService.fetchFromApi(
      "https://enschubachertavardpls.azurewebsites.net/api/hintsapi"
    ).then((hints) => setHints(hints));
  }, []);
  const [solution, setSolution] = useState([]);
  useEffect(() => {
    SolutionService.fetchFromApi(
      "https://enschubachertavardpls.azurewebsites.net/api/solutionapi"
    ).then((solution) => setSolution(solution));
  }, []);

  const { paramEnigma } = route.params;
  if (paramEnigma.id == 1) {
    urlImg = "0167.jpg";
  } else if (paramEnigma.id == 2) {
    urlImg = "0237.jpg";
  } else if (paramEnigma.id == 3) {
    urlImg = "0364.jpg";
  }
  let fulluri = EnigmaService.getImageUriByName(urlImg);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{paramEnigma.name}</Text>
      <EnigmaDetailItem enigma={paramEnigma} />
      <Image style={styles.image} source={{ uri: fulluri }} />
      <View style={styles.hints}>
        <View style={styles.button}>
          <Button
            title="Indice 1 "
            color="#8F694F"
            onPress={() => {
              navigation.navigate("Hint1", {
                paramHint: hints[3 * (paramEnigma.id - 1)],
              });
            }}
          ></Button>
        </View>
        <View style={styles.button}>
          <Button
            title="Indice 2"
            color="#8F694F"
            onPress={() => {
              navigation.navigate("Hint2", {
                paramHint: hints[3 * (paramEnigma.id - 1) + 1],
              });
            }}
          ></Button>
        </View>
        <View style={styles.button}>
          <Button
            title="Indice 3"
            color="#8F694F"
            onPress={() => {
              navigation.navigate("Hint3", {
                paramHint: hints[3 * (paramEnigma.id - 1) + 2],
              });
            }}
          ></Button>
        </View>
      </View>
      <View style={styles.solution}>
        <Button
          title="Solution"
          color="black"
          onPress={() => {
            navigation.navigate("Solution", {
              paramSolution: solution[paramEnigma.id - 1],
            });
          }}
        ></Button>
      </View>
    </View>
  );
};

export default EnigmaDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },
  hints: {
    flexDirection: "row",
    marginTop: 25,
    alignSelf: "center",
  },
  button: {
    marginLeft: 15,
    marginRight: 15,
  },
  image: {
    alignSelf: "center",
    width: 200,
    height: 150,
    marginTop: 10,
    borderRadius: 20,
  },
  title: {
    fontSize: 25,
    fontWeight: "500",
    marginBottom: 15,
    textAlign: "center",
  },
  solution: {
    alignSelf: "center",
    width: 100,
    fontWeight: "500",
    marginTop: 35,
    textAlign: "center",
  },
});
