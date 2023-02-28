import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import UberEats from './SrollableScreen';

const DetailScreen = () => {
  return (
    <SafeAreaView style={styles.container} >
      <Text onPress={()=>alert('Details Screen')}>hello Details</Text>
    </SafeAreaView>
  )
}

export default DetailScreen

const styles = StyleSheet.create({
    titleText: {
        fontSize: 26,
        fontWeight: "bold",
    },
    container:{
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
    },

})