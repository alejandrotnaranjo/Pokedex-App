import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native'
import { typeColor } from '../components/Colors'
import { useRoute } from '@react-navigation/native'
import ChevronLeftVector from '../assets/ChevronLeftVector'
import ChevronRightVector from '../assets/ChevronRightVector'
import WeightVector from '../assets/WeightVector'
import HeightVector from '../assets/HeightVector'
import StatsDivider from '../assets/StatsDivider'
import Divider from '../assets/Divider'

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

  const prevPage = () => setCurrentIndex(index - 1)

  const nextPage = () => setCurrentIndex(index + 1)

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

  return(
    <ScrollView style={{backgroundColor: `${themeColor}`, height: '100%', width: '100%'}}>
      <View style={styles.TitleSection}>
        <Text style={styles.TitleName}>{Capitalize(pokemon.name)}</Text>
        <Text style={styles.TitleID}>{AddZero(pokemon.id)}</Text>
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
            <View  style={{backgroundColor: `${typeColor[pokemon.type.name]}`, borderRadius: 15}}>
              <Text style={styles.TypeText}>{Capitalize(pokemon.type.name)}</Text>
            </View>
            )
          )}
        </View>
        <Text style={{color: `${themeColor}`, fontWeight: 700, marginTop: 30, fontSize: 18}}>About</Text>
        <View style={styles.Atributes}>
          <View style={styles.Atribute}>
            <View style={styles.AtributeInfo}>
              <WeightVector/>
              <Text>{pokemon.weight / 10} m</Text>
            </View>
            <Text style={styles.AtributeName}>Weight</Text>
          </View>
          <Divider/>
          <View style={styles.Atribute}>
            <View style={styles.AtributeInfo}>
              <HeightVector/>
              <Text>{pokemon.height / 10} kg</Text>
            </View>
            <Text style={styles.AtributeName}>Height</Text>
          </View>
          <Divider/>
          <View style={styles.Atribute}>
            <View style={styles.AtributeInfo}>
              <Image/>
              <View style={styles.Moves}>
                {pokemon.abilities.map(pokemon => (
                <Text style={styles.MovesText}>{Capitalize(pokemon.ability.name)}</Text>
                ))}
              </View>
            </View>
            <Text style={styles.AtributeName}>Moves</Text>
          </View>
        </View>
        <Text style={styles.PokemonAbout}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta quas fuga sed debitis maiores veritatis dicta sequi minima ad. Error exercitationem, pariatur nobis quos sit et sapiente eaque doloribus beatae.</Text>
        <Text style={{color: `${themeColor}`, marginTop: 25, fontWeight: 700, fontSize: 17}}>Base Stats</Text>
        <View style={styles.Stats}>
          <View style={styles.StatsTitles}>
            {pokemon.stats.map(pokemon => (
              <Text style={{color: `${themeColor}`, fontWeight: 700}}>{Capitalize(pokemon.stat.name)}</Text>
            ))}
          </View>
          <View style={{height: '100%'}}>
            <StatsDivider/>
          </View>
          <View style={styles.StatsInfo}>
            {pokemon.stats.map(pokemon => (
              <Text>{pokemon.base_stat < 100 ? '0' + pokemon.base_stat : pokemon.base_stat}</Text>
            ))}
          </View>
          <View style={styles.StatsBars}>
            <View style={styles.AnimatedProgress}>
            {pokemon.stats.map(pokemon => (
              <View style={{backgroundColor: '#EFEFEF', width: 210, marginTop: 5, opacity: 1}}>
                <Text style={{
                  width: `${pokemon.base_stat}%`, 
                  backgroundColor: `${themeColor}`,
                  height: 6,
                }}>
                </Text>
              </View>
            ))}
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  TitleSection: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 30,
    zIndex: 3
  },
  TitleName: {
    color: '#fff',
    fontSize: 27,
    fontWeight: 700,
  },
  TitleID: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 700,
    marginTop: 8,
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
    flexDirection: 'row',
    zIndex: 2,
    marginTop: 20
  },
  CardSection: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#FFF',
    borderRadius: 10,
    paddingTop: 30,
    paddingBottom: 40,
    paddingHorizontal: 4,
    alignItems: 'center',
    marginBottom: 10,
    zIndex: 1,
    position: 'relative',
    bottom: 40,
    marginHorizontal: 5,
  },
  Types: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
    alignItems: 'center',
    width: '100%',
    gap: 20,
    height: 32
  },
  TypeText: {
    fontSize: 15, 
    color: '#FFF',
    fontWeight: 700,
    paddingHorizontal: 14,
    height: '100%',
    paddingTop: 7,
  },
  Atributes: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly',
    marginVertical: 25
  },
  Atribute: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 20,
    gap: 10
  },
  AtributeInfo: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    height: 30,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  },
  AtributeName: {
    color: '#666666',
    textAlign: 'center',
  },
  Moves: {
    alignItems: 'center'
  },
  PokemonAbout: {
    marginHorizontal: 10,
    marginTop: 10
  },
  Stats: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    marginTop: 18
  },
  StatsTitles: {
    display: 'flex',
    alignItems: 'flex-end',
    gap: 5,
  },
  StatsInfo: {
    gap: 5
  },
  AnimatedProgress: {
    width: 240,
    gap: 11
  }
})