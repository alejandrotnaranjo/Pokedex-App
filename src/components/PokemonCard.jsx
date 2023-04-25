import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

export default function PokemonCard(props) {
    const {pokemon} = props
    return (
        <View style={ styles.PokemonCard }>
            <View style={styles.PokemonIDSection}>
                <Text style={styles.PokemonID}>#{pokemon.id}</Text>
            </View>
            <View>
                <Image style={styles.PokemonImage} src={pokemon.sprites.other['official-artwork'].front_default}/>
            </View>
            <View>
                <Text>{pokemon.name}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    PokemonCard: {
        display: 'flex',
        backgroundColor: '#eee',
        borderRadius: 8,
        flexDirection: 'column',
        width: 128,
        height: 140,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 5,
    },
    PokemonIDSection: {
        display: 'flex',
    },
    PokemonID: {},
    PokemonImage: {
        width: 80,
        height: 80,
    },
})