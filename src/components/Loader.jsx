import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

export default function Loader() {
    return (
        <View style={styles.Loader}>
            <Text style={styles.LoadingText}>Loading pokemons...</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    Loader: {
        alignItems: 'center',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    LoadingText: {
        fontSize: 15,
        color: '#fff',
        fontWeight: 700,
        marginTop: '50%'
    }
})