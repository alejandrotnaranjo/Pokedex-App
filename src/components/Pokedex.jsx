import React from "react"
import { StyleSheet, ScrollView, View } from "react-native"
import Loader from './Loader'
import PokemonCard from "./PokemonCard"
import Pagination from './Pagination'
import { PokemonContext, actions } from "../context/PokemonContext"

export default function Pokedex() {

  const [ state, dispatch ] = React.useContext(PokemonContext)
  const { pokemons, page, total, loading } = state

  const lastPage = () => {
    const nextPage = Math.max(page - 1, 0)
    dispatch({ type: actions.SET_PAGE, page: nextPage })
  }

  const nextPage = () => {
    const nextPage = Math.min(page + 1, total - 1);
    dispatch({ type: actions.SET_PAGE, page: nextPage })
  };

  return (
    <>
      <Pagination page={ page + 1 } totalPages={ total } onLeftClick={ lastPage } onRightClick={ nextPage } />
      <ScrollView style={styles.Pokedex}>
        { loading ? <Loader/> : (
          <View style={styles.PokedexGrid}>
            {pokemons.map((pokemon) => {
              return <PokemonCard pokemon={pokemon} key={pokemon.name}/>
            })}
          </View>
        )}
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
  Pokedex: {
    width: '100%',
  },
  PokedexGrid: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    gap: 10,
    borderRadius: 8,
    paddingVertical: 15,
  }
})