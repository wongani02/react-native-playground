import { StyleSheet, Text, TouchableOpacity, View, Image, TextInput, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView, withSafeAreaInsets } from 'react-native-safe-area-context'
import tw from 'tailwind-react-native-classnames'
import { MaterialIcons } from '@expo/vector-icons';
import { Avatar } from "@react-native-material/core";
import HeaderComponent from '../../components/Header';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import BookRow from '../../components/bookRow';
import AdsCourousel from '../../components/adsCorousel';
import AdBannerSingle from '../../components/adsBannerSingle';


const data = [
  {
    id: "1",
    first_name: "Wongani",
    image: require('../../assets/images/underland.jpg'),
  },
  {
    id: "2",
    first_name: "Wongani",
    image: require('../../assets/images/the_tiny_dragon.jpg'),
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

const Ads = [
  {
    id: 1,
    title: "The Remarried Empress",
    description: "Read it for free on Malawi ebooks",
    image: require("../../assets/images/books.jpg"),
  },
  {
    id: 2,
    title: "Can they Trust their Friendship?",
    description: "Beacuse life is always black or white, it's gray",
    image: require("../../assets/images/plenty.jpg"),
  },
  {
    id: 3,
    title: "Study",
    description: "wanna read and gain knowledge",
    image: require("../../assets/images/study.jpg"),
  },
  {
    id: 4,
    title: "Coffee and Read",
    description: "Read it for free on Malawi ebooks",
    image: require("../../assets/images/coffee.jpg"),
  },
]

const HomeScreen = () => {
  const navigation =useNavigation();
  return (
    <SafeAreaView style={tw`bg-white mt-1 `}>
      {/* header */}
       <View style={tw`flex-row px-4 py-3`}>
        <Text style={tw`flex-1 text-2xl font-bold`}>Good Evening!</Text>
        <Image style={tw`w-10 h-10 rounded-full`} source={require('../../assets/images/muller.jpg')}/>
       </View>

       {/* search */}
       <View style={tw`px-5`}>
          <View style={tw`flex-row items-center bg-gray-100 border border-white rounded-full px-5`}>
            <Ionicons style={{opacity: 0.5}} name="md-search-sharp" size={24} color="black" />
            <TextInput
            style={[tw` h-12 w-full`]}
            placeholder="Search books, poetry, stories etc"
            />
          </View>
       </View>

       {/* content */}
       <ScrollView
       contentContainerStyle={{
        paddingBottom:130,
       }}
       >
        <AdsCourousel
        ads={Ads}
        />
        <BookRow
        rowTitle={'Featured'}
        description="A frequent cause of the error is that the application entry file path is incorrect."
        books={data}
        />
        
        <BookRow
        rowTitle={'Recommended for you'}
        description="A frequent cause of the error is that the application entry file path is incorrect."
        books={data}
        />
        <AdBannerSingle/>
        <BookRow
        rowTitle={'Trending'}
        description="A frequent cause of the error is that the application entry file path is incorrect."
        books={data}
        />
       </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})