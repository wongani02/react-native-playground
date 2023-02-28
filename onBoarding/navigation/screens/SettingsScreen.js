import { TouchableOpacity,StyleSheet, Text, View, FlatList,ScrollView, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'tailwind-react-native-classnames'


const data = [
  {
    id: "1",
    first_name: "Wongani",
    image: require('../../assets/images/underland.jpg'),
  },
  {
    id: "2",
    first_name: "Wongani",
    image: require('../../assets/images/underland.jpg'),
  },
  {
    id: "3",
    first_name: "Wongani",
    image: require('../../assets/images/other_words_for_home.jpg')
  },
  {
    id: "4",
    first_name: "Wongani",
    image: require('../../assets/images/the_metropolist.jpg')
  },
  {
    id: "5",
    first_name: "Wongani",
    image: require('../../assets/images/the_tiny_dragon.jpg')
  },
]

const SettingsScreen = () => {
  return (
    <View style={styles.container}>
        <Text onPress={()=>alert("this is the settings screen")}>hello world</Text>
    </View>
  )
}

export default SettingsScreen

const styles = StyleSheet.create({
    titleText: {
        fontSize: 26,
        fontWeight: "bold",
        color:'black'
    },
    container:{
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
    },

})