import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'

const BookCover = ({id, title, image}) => {
  return (
    <TouchableOpacity style={tw`pt-3`}>
        <View style={tw`h-32 w-24 mr-2 bg-gray-300`}>
            <Image
            source={image}
            style={tw`h-32 w-24`}
            />
        </View>
    </TouchableOpacity>
  )
}

export default BookCover

const styles = StyleSheet.create({})