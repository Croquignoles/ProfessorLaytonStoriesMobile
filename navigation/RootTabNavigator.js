import React from "react";
import { StatusBar } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStackNavigator from "./HomeStackNavigator";
import CharacterStackNavigator from "./CharacterStackNavigator";
import MusicStackNavigator from "./MusicStackNavigator";
import EnigmaStackNavigator from "./EnigmaStackNavigator";

//Création de la barre de navigation en bas de l'écran

const Tab = createBottomTabNavigator();

const RootTabNavigator = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#4f2900" />
      <Tab.Navigator
        screenOptions={({ route }) => ({
          // Icons will be different if the tab is focused
          tabBarIcon: ({ focused, color, size }) => {
            const icons = {
              Home: "home",
              Personnages: "person",
              Musiques: "musical-notes-sharp",
              Énigmes: "bulb",
            };
            return (
              <Ionicons
                name={icons[route.name] || "home"}
                size={25}
                color={color}
              />
            );
          },
          // Hiding tab navigator header to show only stack header
          headerShown: false,
        })}
      >
        <Tab.Screen name="Jeux" component={HomeStackNavigator}></Tab.Screen>
        <Tab.Screen
          name="Personnages"
          component={CharacterStackNavigator}
        ></Tab.Screen>
        <Tab.Screen
          name="Musiques"
          component={MusicStackNavigator}
        ></Tab.Screen>
        <Tab.Screen
          name="Énigmes"
          component={EnigmaStackNavigator}
        ></Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default RootTabNavigator;
