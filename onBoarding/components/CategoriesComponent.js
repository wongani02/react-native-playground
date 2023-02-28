import { FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'

const CategoriesComponent = ({data}) => {
    const numberOfColumns = 2;
  return (
    <View style={tw`px-4 pb-56`}>
      <Text style={tw`my-4 text-lg font-bold`}>Browse Categories</Text>
      <View>
        <FlatList
        data={data}
        keyExtractor={(item)=>item.id}
        numColumns={numberOfColumns}
        showsVerticalScrollIndicator={false}
        nestedScrollEnabled
        contentContainerStyle={{paddingBottom:50}}
        renderItem={({item})=>(
            <TouchableOpacity style={[tw`w-40 border h-16 mr-2 mt-2 rounded justify-center`, {backgroundColor: item.color}]}>
                <View style={tw`justify-center`}>
                    <Text style={tw`text-center  text-white font-bold`}>{item.title}</Text>
                </View>
            </TouchableOpacity>
        )}
        />
      </View>
        <ScrollView></ScrollView>      
    </View>
  )
}

export default CategoriesComponent

const styles = StyleSheet.create({})