import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { typeColor } from '../components/Colors'
import { useRoute } from '@react-navigation/native'
import { ChevronLeftVector } from '../assets/ChevronLeftVector'
import { ChevronRightVector } from '../assets/ChevronRightVector'

export default PokemonPage = () => {

  const [pokemon, setPokemon] = useState(null);
  const {id} = useRoute();
  const [currentIndex, setCurrentIndex] = useState(id);
  const index = parseInt(currentIndex);

  let url = (`https://pokeapi.co/api/v2/pokemon/${currentIndex}`);
  
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setPokemon(data)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [id, url])
  
  if (!pokemon) {
    return null;
  }
  
  const themeColor = typeColor[pokemon.types[0].type.name];

  const prevPage = () => {
    setCurrentIndex(index - 1)
  }

  const nextPage = () => {
    setCurrentIndex(index + 1)
  }

  return(
    <View style={styles.PokemonPage}>
      <View style={styles.TitleSection}>
        <Text>{pokemon.name}</Text>
        <Text>{pokemon.id}</Text>
      </View>
      <View style={styles.ImageSection}>
        <TouchableOpacity onPress={prevPage}>
          <ChevronLeftVector/>
        </TouchableOpacity>
        <View>
          <Image style={styles.PokemonImage} src={pokemon.sprites.other["official-artwork"].front_default}/>
        </View>
        <TouchableOpacity onPress={nextPage}>
          <ChevronRightVector/>
        </TouchableOpacity>
      </View>
      <View style={styles.CardSection}>
        <View>
          {pokemon.types.map(pokemon => (
            <View style={{backgroundColor: `${typeColor[pokemon.type.name]}`}}>
              <Text>{pokemon.type.name}</Text>
            </View>
            )
          )}
        </View>
        <Text style={{color: `${themeColor}`}}>About</Text>
        <View style={styles.Atributes}>
          <View>
            <View>
              <Image/>
              <Text>{pokemon.weight / 10}</Text>
            </View>
            <Text>Weight</Text>
          </View>
          <Image/>
          <View>
            <View>
              <Image/>
              <Text>{pokemon.weight / 10}</Text>
            </View>
            <Text>Weight</Text>
          </View>
          <Image/>
          <View>
            <View>
              <Image/>
              <Text>{pokemon.weight / 10}</Text>
            </View>
            <Text>Weight</Text>
          </View>
        </View>
        <Text>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta quas fuga sed debitis maiores veritatis dicta sequi minima ad. Error exercitationem, pariatur nobis quos sit et sapiente eaque doloribus beatae.</Text>
        <Text>Base Stats</Text>
        <View>
          <View>
            <Text>HP</Text>
            <Text>ATK</Text>
            <Text>DEF</Text>
            <Text>SATK</Text>
            <Text>SDEF</Text>
            <Text>SPD</Text>
          </View>
          <View>
            <Image/>
          </View>
          <View>
            <Text>{pokemon.stats[0].base_stat}</Text>
            <Text>{pokemon.stats[1].base_stat}</Text>
            <Text>{pokemon.stats[2].base_stat}</Text>
            <Text>{pokemon.stats[3].base_stat}</Text>
            <Text>{pokemon.stats[4].base_stat}</Text>
            <Text>{pokemon.stats[5].base_stat}</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  PokemonPage: {},
  PokemonImage: {
    height: 200
  }
})