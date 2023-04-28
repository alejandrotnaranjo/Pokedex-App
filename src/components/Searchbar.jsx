import React from "react"
import { View, TouchableOpacity, TextInput, StyleSheet, Text } from "react-native"
import SortButton from './SortButton'
import SearchVector from '../assets/SearchVector'

export default function Searchbar (props) {

  const { onSearch } = props
  let search = "";
  
    const onChange = (e) => {
      search = e.target.value
      if (e.target.value.length === 0) {
        onSearch(null);
      } else {
        onSearch(search)
      }
    };
  
    const onClick = async () => {
      onSearch(search);
    };

    return (
        <View style={styles.Searchbar}>
            <View style={styles.Search}>
                <TouchableOpacity onPress={onClick} style={styles.Button}>
                  <SearchVector/>
                </TouchableOpacity>
                <TextInput style={styles.Input} placeholder="Search" onChangeText={onChange}/>
            </View>
            <>
              <SortButton/>
            </>
        </View>
  )
}

const styles = StyleSheet.create({
  Searchbar: {
    display: 'flex',
    paddingVertical: 10,
    paddingHorizontal: 10,
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    gap: 10
  },
  Search: {
    backgroundColor: '#FFF',
    borderRadius: 16,
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    shadowColor: 'gray',
    shadowOffset: { height: 0.5, width: 0.5 },
    shadowOpacity: 1,
    shadowRadius: 3
  },
  Button: {
    backgroundColor: 'transparent',
    marginLeft: 5,
    padding: 10
  },
  Input: {
    paddingLeft: 5,
    width: '88%'
  }
})