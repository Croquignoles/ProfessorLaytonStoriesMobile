import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import GameDetailScreen from "../screens/GameDetailScreen";

//Gestionnaire de navigation pour la page d'accueil et les jeux

const HomeStack = createNativeStackNavigator();

const HomeStackNavigator = () => (
  <HomeStack.Navigator initialRouteName="HomeStack">
    <HomeStack.Screen
      name="Home"
      component={HomeScreen}
      options={{ title: "Jeux Professeur Layton©" }}
    ></HomeStack.Screen>
    <HomeStack.Screen
      name="GameDetail"
      component={GameDetailScreen}
      options={{ title: "Description du jeu" }}
    ></HomeStack.Screen>
  </HomeStack.Navigator>
);

export default HomeStackNavigator;
