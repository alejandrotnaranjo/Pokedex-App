import React from 'react'
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native'
import LeftVector from '../assets/LeftVector'
import RightVector from '../assets/RightVector'

export default function Pagination(props) {
  const { onLeftClick, onRightClick, page, totalPages } = props
  return (
    <View style={styles.Pagination}>
      <TouchableOpacity style={styles.Button} onPress={ onLeftClick }>
        <LeftVector/>
      </TouchableOpacity>
      <View>
        <Text style={styles.PagesInfo}>{page} / {totalPages}</Text>
      </View>
      <TouchableOpacity style={styles.Button} onPress={ onRightClick }>
        <RightVector/>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    Pagination: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        width: '100%',
        gap: 10
    },
    PagesInfo: {
      color: '#fff',
      fontSize: 15,
      fontWeight: 700
    },
    Button: {
        backgroundColor: 'white',
        borderRadius: '50%',
        marginHorizontal: 8,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 36,
        height: 36,
        shadowColor: 'gray',
        shadowOffset: { height: 0.5, width: 0.5 },
        shadowOpacity: 1,
        shadowRadius: 2
    }
})