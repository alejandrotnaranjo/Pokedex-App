import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

export default function Loader() {
    return (
        <View style={styles.Loader}>
            <Text style={styles.LoadingText}>Loading Pokemons...</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    Loader: {
        alignItems: 'center',
    },
    LoadingText: {
        fontWeight: 700,
        color: '#fff'
    }
})