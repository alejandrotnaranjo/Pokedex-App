import React from "react";
import { PokemonProvider } from "./src/context/PokemonContext";
import { NavigationContainer } from "@react-navigation/native";
import AppStack from "./navigator/AppStack";

export default function App() {
  return (
    <PokemonProvider>
      <NavigationContainer>
        <AppStack />
      </NavigationContainer>
    </PokemonProvider>
  );
}
