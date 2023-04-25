import React from "react";
import { StyleSheet, View } from "react-native";
import Homepage from './src/pages/Homepage'
import { PokemonProvider } from "./src/context/PokemonContext";

export default function App(){
  return(
    <View style={styles.App}>
      <PokemonProvider>
        <Homepage/>
      </PokemonProvider>
    </View>
  )
}

const styles = StyleSheet.create({
  App: {
    backgroundColor: '#fff',
    height: '100%'
  }
})