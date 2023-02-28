import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import { FontAwesome } from '@expo/vector-icons';

const AdBannerSingle = () => {
  return (
    <View style={tw`w-full px-4 bg-gray-100 py-3`}>
        <View>
            <Text style={tw`text-xl font-bold`}>Completed Stories</Text>
            <Text style={tw`text-xs text-gray-400`}>Binge from start to finish</Text>
        </View>
        <View style={tw`mt-4`}>
            <TouchableOpacity style={tw`flex-row`}>
                <View style={tw`px-4`}>
                    <Image
                    style={tw`w-32 h-40 mb-6`}
                    source={require('../assets/images/the_tiny_dragon.jpg')}
                    />
                </View>
                <View style={tw`flex-1`}>
                     <Text 
                     numberOfLines={1}
                    style={tw`text-lg font-bold`}
                    >My twin is may mate</Text>
                     <Text style={tw`text-xs text-gray-500 mt-3`} numberOfLines={2}>"Nelly we can fight this " ash says. "Yeah i know but Messi is pretty much the goat now"  Ronaldo's words.</Text>
                     <View style={tw`pt-6`}>
                        
                        <Text> <FontAwesome name="list" size={18} color="gray" /> 24 Chapters</Text>
                     </View>
                </View>

            </TouchableOpacity>
        </View>
    </View>
  )
}

export default AdBannerSingle

const styles = StyleSheet.create({})