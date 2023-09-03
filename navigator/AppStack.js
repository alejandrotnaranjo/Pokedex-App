import React from "react";
import Homepage from "../src/screens/Homepage";
import PokemonPage from "../src/screens/PokemonPage";
import { createStackNavigator } from "@react-navigation/stack";

export default function AppStack() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Homepage} />
      <Stack.Screen name="PokemonPage" component={PokemonPage} />
    </Stack.Navigator>
  );
}
