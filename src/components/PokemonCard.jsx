import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function PokemonCard(props) {
    const { pokemon } = props
    const navigation = useNavigation()

    function Capitalize(name){
        return name.charAt(0).toUpperCase() + name.slice(1);
    }

    function AddZero(){
        if (pokemon.id < 10) {
          return '#00' + pokemon.id
        } else if (pokemon.id >= 10 && pokemon.id < 100) {
            return '#0' + pokemon.id
        }
        return '#' + pokemon.id
    }

    return (
        <TouchableOpacity onPress={() => navigation.navigate("PokemonPage", { id: pokemon.id })}>
            <View style={styles.CardContainer}>
                <LinearGradient colors={['white', '#d5d5d5']} style={styles.PokemonCard}>
                    <View style={styles.PokemonIDSection}>
                        <Text style={styles.PokemonID}>{AddZero(pokemon.id)}</Text>
                    </View>
                    <View>
                        <Image style={styles.PokemonImage} src={pokemon.sprites.other['official-artwork'].front_default}/>
                    </View>
                    <View>
                        <Text style={styles.PokemonName}>{Capitalize(pokemon.name)}</Text>
                    </View>
                </LinearGradient>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    CardContainer: {
        shadowColor: '#ababab',
        shadowOffset: { height: 1, width: 1 },
        shadowOpacity: 1,
        shadowRadius: 3
    },
    PokemonCard: {
        display: 'flex',
        borderRadius: 10,
        flexDirection: 'column',
        width: 118,
        height: 140,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 10,
    },
    PokemonIDSection: {},
    PokemonID: {
        fontSize: 13,
        marginLeft: 60,
        color: '#666',
        fontWeight: 400
    },
    PokemonImage: {
        width: 80,
        height: 80,
    },
    PokemonName: {
        fontSize: 13,
        fontWeight: 400
    }
})