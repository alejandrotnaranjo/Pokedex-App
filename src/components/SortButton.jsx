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
            <View style={styles.TitleSection}>
              <Text style={styles.SortTitle}>Sort by:</Text>
            </View>
            <View style={styles.MenuSection}>
              <View style={styles.ButtonSection}>
                <RadioButtonInput
                onChange={onIDChange}
                checked={state.currentSort === sortTypes.ID ? true : false} 
                buttonOuterColor="red"
                buttonInnerColor="red"
                buttonSize={6}
                />
                <Text style={styles.FilterName}>Number</Text>
              </View>
              <View style={styles.ButtonSection}>
                <RadioButtonInput
                onChange={onNameChange}
                checked={state.currentSort === sortTypes.ID ? true : false} 
                buttonOuterColor="red"
                buttonInnerColor="red"
                buttonSize={6}
                />
                <Text style={styles.FilterName}>Name</Text>
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
    alignItems: 'center',
    shadowColor: 'gray',
    shadowOffset: { height: 0.5, width: 0.5 },
    shadowOpacity: 1,
    shadowRadius: 2
  },
  open: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#DC0A2D',
    padding: 10,
    position: 'absolute',
    width: 120,
    right: 10,
    borderRadius: 12,
    shadowColor: 'gray',
    shadowOffset: { height: 0.5, width: 0.5 },
    shadowOpacity: 0.7,
    shadowRadius: 2
  },
  closed: {
    display: 'none'
  },
  TitleSection: {
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 20
  },
  SortTitle: {
    fontWeight: 700,
    color: '#fff',
    fontSize: 14
  },
  MenuSection: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    gap: 5,
    shadowColor: 'gray',
    shadowOffset: { height: 0.5, width: 0.5 },
    shadowOpacity: 1,
    shadowRadius: 2
  },
  ButtonSection: {
    display: 'flex',
    flexDirection: 'row',
    gap: 3,
    alignItems: 'flex-start'
  },
  FilterName: {
    fontSize: 14,
    fontWeight: 400,
  }
})