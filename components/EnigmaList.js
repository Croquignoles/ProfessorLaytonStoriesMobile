import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import EnigmaItem from "./EnigmaItem";

//Permet l'affichage de toutes les enigmes
const EnigmaList = ({ enigmas, navigation }) => {
  if (enigmas.length > 0)
    return (
      <FlatList
        data={enigmas}
        style={styles.list}
        keyExtractor={(enigma) => enigma.id.toString()}
        renderItem={({ item }) => {
          return <EnigmaItem enigma={item} navigation={navigation} />;
        }}
      />
    );
  else
    return (
      <View>
        <Text>Rien à enquêter !</Text>
      </View>
    );
};

export default EnigmaList;

const styles = StyleSheet.create({
  list: {
    flex: 1,
    alignContent: "flex-start",
  },
});
