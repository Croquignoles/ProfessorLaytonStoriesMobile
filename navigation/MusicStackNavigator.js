import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MusicScreen from "../screens/MusicScreen";
import MusicAddScreen from "../screens/MusicAddScreen";

//Gestionnaire de navigation pour les musiques

const MusicStack = createNativeStackNavigator();

const MusicStackNavigator = () => {
  return (
    <MusicStack.Navigator initialRouteName="MusicStack">
      <MusicStack.Screen
        name="Music"
        component={MusicScreen}
        options={{ title: "Musiques" }}
      ></MusicStack.Screen>
      <MusicStack.Screen
        name="AddMusic"
        component={MusicAddScreen}
        options={{ title: "Ajouter une musique" }}
      ></MusicStack.Screen>
    </MusicStack.Navigator>
  );
};

export default MusicStackNavigator;
