import { FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import { AntDesign } from '@expo/vector-icons';
import BookCover from './BookCover';

const BookRow = ({id, rowTitle, description, books}) => {
  return (
    <View style={tw`bg-white px-4 py-6`}>
      <View style={tw`flex-row `}>
        <View style={tw`flex-1 pr-4`}>
            <Text style={tw`text-2xl font-bold`}>{rowTitle}</Text>
            <Text style={tw`text-xs text-gray-400`}>{description}</Text>
        </View>
        <View>
            <TouchableOpacity>
                <AntDesign style={{opacity: 0.5}} name="arrowright" size={24} color="black" />
                <Text style={tw`text-xs text-gray-500`}>see all</Text>
            </TouchableOpacity>
        </View>
      </View>
      <View>
        <FlatList
        horizontal
        data={books}
        keyExtractor={(item)=>item.id}
        snapToAlignment='end'
        pagingEnabled
        contentContainerStyle={{paddingRight:150}}
        showsHorizontalScrollIndicator={false}
        renderItem={({item})=>(
            <BookCover
            title={item.first_name}
            image={item.image}
            />
        )}
        />
      </View>
      <View>
        
      </View>
    </View>

  )
}

export default BookRow

const styles = StyleSheet.create({})