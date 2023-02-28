import { SafeAreaView, ScrollView, TouchableOpacity,StatusBar, StyleSheet, Text,TextInput, View, Animated } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import { Ionicons } from '@expo/vector-icons';
import CategoriesComponent from '../../components/CategoriesComponent';


const categories = [
    {
        id:1,
        title: 'Fiction',
        color: '#34344A',
        books: [],
    },
    {
        id:2,
        title: 'Romantic',
        color: '#35CE8D',
        books: [],
    },
    {
        id:3,
        title: 'Educational',
        color: '#E24E1B',
        books: [],
    },
    {
        id:4,
        title: 'Spiritual',
        color: '#654236',
        books: [],
    },
    {
        id:5,
        title: 'Series',
        color: '#EF6F6C',
        books: [],
    },
    {
        id:6,
        title: 'Stories',
        color: '#465775',
        books: [],
    },
    {
        id:7,
        title: 'Thriller',
        color: '#310D20',
        books: [],
    },
    {
        id:8,
        title: 'Mystery',
        color: '#171219',
        books: [],
    },
    {
        id:9,
        title: 'Authors',
        color: '#7D83FF',
        books: [],
    },
    {
        id:10,
        title: 'Documentary',
        color: '#F6C28B',
        books: [],
    },
    {
        id:11,
        title: 'Desertations',
        color: '#1282A2',
        books: [],
    },
    {
        id:12,
        title: 'Adventure',
        color: '#042A2B',
        books: [],
    },
    {
        id:13,
        title: 'Humor',
        color: '#5EB1BF',
        books: [],
    },
    {
        id:14,
        title: 'Poetry',
        color: '#D84727',
        books: [],
    },
    {
        id:15,
        title: 'Technology',
        color: '#3D405B',
        books: [],
    },
    {
        id:16,
        title: 'Fantasy',
        color: '#E07A5F',
        books: [],
    },
]

const SearchScreen = () => {

    let AnimatedHeaderValue = new Animated.Value(0);
    const Header_Max_Height = 60;
    const HeaderMinHeight = 0; 

    const animatedHeaderHeight = AnimatedHeaderValue.interpolate({
        inputRange: [0, Header_Max_Height-HeaderMinHeight],
        outputRange: [Header_Max_Height, HeaderMinHeight],
        extrapolate: 'clamp',
    })

  return (
    <SafeAreaView style={[tw``, {backgroundColor:'#ffffff'}]}>
        <StatusBar backgroundColor={'black'}/>
        
        {/* header */}
       <Animated.View 
       style={[tw`flex-row px-4 py-2`, {
        height: animatedHeaderHeight
            }
        ]}
       >
            <Text style={tw`flex-1 text-2xl font-bold`}>Search</Text>
       </Animated.View>

        {/* search */}
        <View style={tw`px-5 mt-2 pb-1`}>
          <View style={tw`flex-row items-center bg-gray-100 border rounded-full px-5`}>
            <Ionicons style={{opacity: 0.5}} name="md-search-sharp" size={24} color="black" />
            <TextInput
            style={[tw` h-10 w-full`]}
            placeholder="Search books, poetry, stories etc"
            />
          </View>
       </View>

       {/* body content */}
       <View style={[tw``, {backgroundColor: '#ffffff'}]}>
        <ScrollView 
        scrollEventThrottle={20}
        onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {y: AnimatedHeaderValue}}}],
            {useNativeDriver: false}
        )}
        nestedScrollEnabled={true}
        >
            <CategoriesComponent data={categories}/>
            {/* {categories.map((item)=>(
                <TouchableOpacity style={[tw`w-40 h-16 mr-2 mt-2 rounded justify-center`, {backgroundColor: item.color}]}>
                <View style={tw`justify-center`}>
                    <Text style={tw`text-center  text-white font-bold`}>{item.title}</Text>
                </View>
                </TouchableOpacity>
            ))} */}
        </ScrollView>
       </View>


    </SafeAreaView>
  )
}

export default SearchScreen

const styles = StyleSheet.create({})