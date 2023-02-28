import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'

const AdsCourousel = ({ads}) => {
  return (
    <View style={tw`py-3 mt-4 pl-4`}>
        <FlatList
        data={ads}
        horizontal
        keyExtractor={(item)=>item.id}
        snapToAlignment='start'
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        renderItem={({item})=>(
            <TouchableOpacity>
                <View style={tw`mr-2 w-72`}>
                    <View style={tw`mb-4`}>
                        <Text numberOfLines={1} style={tw`text-xl font-bold pb-1`}>{item.title}</Text>
                        <Text style={tw`text-gray-400 text-xs`}>{item.description}</Text>
                    </View>
                    <View>
                        <Image style={tw`w-72 h-36 `} source={item.image}/>
                    </View>
                </View>
            </TouchableOpacity>
        )}
        />
      
    </View>
  )
}

export default AdsCourousel

const styles = StyleSheet.create({})