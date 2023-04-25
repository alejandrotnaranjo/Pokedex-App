import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Pokeball from '../assets/Pokeball'

export default function Navbar()  {
  return (
    <View style={styles.Navbar}>
      <Pokeball/>
      <Text style={styles.Title}>Pokédex</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  Navbar: {
    height: 70,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 15,
  },
  Title: {
    color: 'white',
    fontSize: 34,
    marginLeft: 10,
    fontWeight: 700,
  }
})