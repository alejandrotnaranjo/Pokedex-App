import React from "react";
import { StyleSheet, View, SafeAreaView } from "react-native";
import { PokemonProvider } from "./src/context/PokemonContext";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import AppStack from "./navigator/AppStack";

export default function App() {
  return (
    <SafeAreaView style={styles.App}>
      <StatusBar style="auto" />
      <PokemonProvider>
        <NavigationContainer>
          <AppStack />
        </NavigationContainer>
      </PokemonProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  App: {
    backgroundColor: "#fff",
    height: "100%",
    width: "100%",
  },
});
