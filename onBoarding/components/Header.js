import { StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'tailwind-react-native-classnames'
import { MaterialIcons } from '@expo/vector-icons';
import { Avatar } from "@react-native-material/core";
import { StatusBar } from 'expo-status-bar';

const HeaderComponent = () => {
  return (
    
    <View style={tw`flex-row h-12 justify-between mt-3 items-center`}>
        <View style={tw`mx-3 rounded-full `}>
            <TouchableOpacity>
                <MaterialIcons name="filter-list-alt" size={35} color="black" />
            </TouchableOpacity>
        </View>
        <View>
            <Text style={tw`font-bold text-xl`}>
            Explore 
            </Text>
        </View>
        <View style={tw`mx-3`}>
            <TouchableOpacity>
                <Avatar label={'Wongani Tembo'} size={35} autoColor/>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default HeaderComponent

const styles = StyleSheet.create({})