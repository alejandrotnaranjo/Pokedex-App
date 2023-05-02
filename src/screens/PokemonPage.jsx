import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { typeColor } from '../components/Colors'
import { useRoute } from '@react-navigation/native'
import ChevronLeftVector from '../assets/ChevronLeftVector'
import ChevronRightVector from '../assets/ChevronRightVector'

export default PokemonPage = () => {

  const [pokemon, setPokemon] = useState(null);
  const route = useRoute();
  const [currentIndex, setCurrentIndex] = useState(route.params.id);
  const index = parseInt(currentIndex);

  let url = (`https://pokeapi.co/api/v2/pokemon/${index}`);
  
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setPokemon(data)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [])
  
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

  function Capitalize(name){
    return name.charAt(0).toUpperCase() + name.slice(1);
  }

  return(
    <View style={{backgroundColor: `${themeColor}`}}>
      <View style={styles.TitleSection}>
        <Text style={styles.TitleName}>{Capitalize(pokemon.name)}</Text>
        <Text style={styles.TitleID}>#{pokemon.id}</Text>
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
        <View style={styles.Types}>
          {pokemon.types.map(pokemon => (
            <View style={{backgroundColor: `${typeColor[pokemon.type.name]}`, borderRadius: 15}}>
              <Text style={styles.TypeText} key={pokemon.name}>{pokemon.type.name}</Text>
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
              <Text>{pokemon.height / 10}</Text>
            </View>
            <Text>Height</Text>
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
  PokemonPage: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column' 
  },
  TitleSection: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 30,
  },
  TitleName: {
    color: '#fff',
    fontSize: 26,
    fontWeight: 700
  },
  TitleID: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 700
  },
  PokemonImage: {
    height: 200,
    width: 200
  },
  ImageSection: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row'
  },
  CardSection: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#FFF',
    borderRadius: 10,
    paddingTop: 30,
    paddingBottom: 40,
    paddingHorizontal: 4,
    marginHorizontal: 5,
    alignItems: 'center'
  },
  Types: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
    alignItems: 'center',
    width: '100%',
    gap: 10
  },
  TypeText: {
    fontSize: 14, 
    color: '#FFF',
    fontWeight: 700,
    paddingHorizontal: 14,
    height: 32,
  }
})