import React, { useState } from "react"
import { View, TouchableOpacity, Text, StyleSheet } from "react-native"
import { RadioButtonInput } from "react-native-simple-radio-button"
import { PokemonContext, actions, sortTypes } from "../context/PokemonContext"
import SortVector from '../assets/SortVector'
import CloseVector from '../assets/CloseVector'

export default function SortButton () {

  const [state, dispatch] = React.useContext(PokemonContext);

  const onIDChange = () => {
    dispatch({ type: actions.SET_SORT, sortType: sortTypes.ID })
  }

  const onNameChange = () => {
    dispatch({ type: actions.SET_SORT, sortType: sortTypes.NAME })
  };

  const [ isOpen, setIsOpen ] = useState(false)
  
  return (
    <View>
        <View>
            <TouchableOpacity onPress={() => setIsOpen(!isOpen)} style={styles.SortButton}>
              {isOpen ? <CloseVector/> : <SortVector/>}
            </TouchableOpacity>
        </View>
        <View>
          <View style={(isOpen ? styles.open : styles.closed)}>
            <View style={styles.Title}>
              <Text>Sort By:</Text>
            </View>
            <View style={styles.Section}>
             <View>
                <RadioButtonInput onChange={ onIDChange } checked={ state.currentSort === sortTypes.ID ? true : false } />
                <Text>Number</Text>
              </View>
              <View>
                <RadioButtonInput onChange={ onNameChange } checked={ state.currentSort === sortTypes.ID ? true : false } />
                <Text>Name</Text>
              </View>
             </View>
          </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  SortButton: {
    backgroundColor: '#fff',
    width: 38,
    height: 38,
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  open: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#DC0A2D',
    padding: 10,
    borderRadius: 4,
    position: 'absolute',
    zIndex: 7,
    width: 100
  },
  closed: {
    display: 'none'
  },
  Title: {},
  Section: {
    padding: 50,
    backgroundColor: '#fff'
  }
})