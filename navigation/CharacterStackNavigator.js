import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CharacterScreen from "../screens/CharacterScreen";
import CharacterDetailsScreen from "../screens/CharacterDetailsScreen";

//Gestionnaire de navigation pour les personnages

const CharacterStack = createNativeStackNavigator();

const CharacterStackNavigator = () => {
  return (
    <CharacterStack.Navigator initialRouteName="CharacterStack">
      <CharacterStack.Screen
        name="Character"
        component={CharacterScreen}
        options={{ title: "Personnages" }}
      ></CharacterStack.Screen>
      <CharacterStack.Screen
        name="CharacterDetails"
        component={CharacterDetailsScreen}
        options={{ title: "Description du personnage" }}
      ></CharacterStack.Screen>
    </CharacterStack.Navigator>
  );
};

export default CharacterStackNavigator;
