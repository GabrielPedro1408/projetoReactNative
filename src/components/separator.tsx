import { View, Text, StyleSheet} from 'react-native'
import React from 'react'

export const separator = () => {
  return (
    <View style={styles.separator}></View>
  )
}

const styles = StyleSheet.create({
    separator:{
        flex:4,
        backgroundColor: '#aaaaaaff',
        height:2,
        width: '100%',
        marginVertical:5,
    }
});