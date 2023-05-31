import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import EnigmaScreen from "../screens/EnigmaScreen";
import EnigmaDetailsScreen from "../screens/EnigmaDetailsScreen";
import Hint1Screen from "../screens/Hint1Screen";
import Hint2Screen from "../screens/Hint2Screen";
import Hint3Screen from "../screens/Hint3Screen";
import SolutionScreen from "../screens/SolutionScreen";

//Gestionnaire de navigation pour les énigmes, les indices et les solutions

const EnigmaStack = createNativeStackNavigator();

const EnigmaStackNavigator = () => {
  return (
    <EnigmaStack.Navigator initialRouteName="EnigmaStack">
      <EnigmaStack.Screen
        name="Enigma"
        component={EnigmaScreen}
        options={{ title: "Énigmes" }}
      ></EnigmaStack.Screen>
      <EnigmaStack.Screen
        name="EnigmaDetails"
        component={EnigmaDetailsScreen}
        options={{ title: "Énoncé de l'énigme" }}
      ></EnigmaStack.Screen>
      <EnigmaStack.Screen
        name="Hint1"
        component={Hint1Screen}
        options={{ title: "Indice 1" }}
      ></EnigmaStack.Screen>
      <EnigmaStack.Screen
        name="Hint2"
        component={Hint2Screen}
        options={{ title: "Indice 2" }}
      ></EnigmaStack.Screen>
      <EnigmaStack.Screen
        name="Hint3"
        component={Hint3Screen}
        options={{ title: "Indice 3" }}
      ></EnigmaStack.Screen>
      <EnigmaStack.Screen
        name="Solution"
        component={SolutionScreen}
        options={{ title: "Solution" }}
      ></EnigmaStack.Screen>
    </EnigmaStack.Navigator>
  );
};

export default EnigmaStackNavigator;
