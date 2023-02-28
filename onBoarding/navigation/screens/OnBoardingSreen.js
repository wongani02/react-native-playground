import { Dimensions, FlatList, SafeAreaView, StatusBar, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useRef, useState } from 'react'

const {width, height} = Dimensions.get('window');
const COLORS = {primary: '#282534', white: '#fff'};

const slides = [
    {
        id: 1,
        image: require('../assets/image1.png'),
        title: 'The Best Online Store',
        subtitle: 'Lorem ipsum malawi onnect to the same wireless network as your computer.'
    },
    {
        id: 2,
        image: require('../assets/image2.png'),
        title: 'secure Payment system',
        subtitle: 'Lorem ipsum malawi onnect to the same wireless network as your computer.'
    },
    {
        id: 3,
        image: require('../assets/image3.png'),
        title: 'The Best Delivery Services',
        subtitle: 'Lorem ipsum malawi onnect to the same wireless network as your computer.'
    }
];


const Slide =({item}) =>{
    return (
        <View style={{alignItems:"center"}}>
            <Image
            source={item.image}
            style={{height:'75%',width, resizeMode:'contain'}}
            />
            <Text style={styles.textTitle}>{item.title}</Text>
            <Text style={styles.subtitleText}>{item.subtitle}</Text>
        </View>
    );
};


const OnBoardingSreen = () => {

    const [currentSlideIndex, setcurrentSlideIndex] = useState(0);
    const ref = useRef(null)
    const Footer = () =>{
        return <View style={{height: height*0.25, justifyContent:"space-between", paddingHorizontal: 20}}>
            <View style={{flexDirection:"row", justifyContent:"center", marginTop: 20}}>
                {slides.map((_, index)=>(
                    <View key={index} style={[styles.indicator, currentSlideIndex==index &&{backgroundColor: 'white', width:25}]}/>
                ))}
            </View>
            <View style={{marginBottom:20,}}>
                <TouchableOpacity onPress={''} style={[styles.btn]}>
                    <Text style={{fontWeight: "bold", fontSize: 15}}>
                        Next
                    </Text>
                </TouchableOpacity>
                <View style={{flexDirection: "row"}}>
                    <TouchableOpacity onPress={lastSlideIndex} style={[styles.btn, {backgroundColor:'transparent', borderBottomWidth: 2, borderColor: "white"}]}>
                        <Text style={{fontWeight: "bold", fontSize: 15, color: "white"}}>
                            Skip
                        </Text>
                    </TouchableOpacity>
                    <View style={{width: 15}}/>
                    <TouchableOpacity onPress={getNextSlide} style={[styles.btn]}>
                        <Text style={{fontWeight: "bold", fontSize: 15}}>
                            Next
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    }

    const updateCurrentSlideIndex = e =>{
        const contentOffsetX = e.nativeEvent.contentOffset.x;
        const currentIndex = Math.round(contentOffsetX/width)
        setcurrentSlideIndex(currentIndex)
        
    }
    const getNextSlide =()=>{
        const nextslideindex = currentSlideIndex+1;
        if (nextslideindex != slides.length){
            const offset = nextslideindex *width;
            ref?.current?.scrollToOffset({offset})
            setcurrentSlideIndex(nextslideindex)
        }
    }
    const lastSlideIndex = ()=>{
        const lastSlide = slides.length-1;
        const offset = lastSlide*width;
        ref?.current?.scrollToOffset({offset});
        setcurrentSlideIndex(lastSlide);
    }
  return (
    <SafeAreaView style={{flex:1, backgroundColor: COLORS.primary}}>
        <StatusBar backgroundColor={COLORS.primary}/>
        <FlatList
        data={slides}
        contentContainerStyle={{height: height * 0.75,}}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        horizontal
        ref={ref}
        pagingEnabled
        keyExtractor={(item)=>item.id}
        showsHorizontalScrollIndicator={false}
        renderItem={({item})=><Slide item={item}/>}
        />
        <Footer/>
    </SafeAreaView>
  )
}

export default OnBoardingSreen

const styles = StyleSheet.create({
    textTitle:{
        color: 'white',
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 20, 
        textAlign: 'center',
    },
    subtitleText:{
        color: 'white',
        fontSize: 13,
        marginTop: 10,
        maxWidth:'70%',
        textAlign: 'center',
        lineHeight:23,
    },
    indicator:{
        height: 2.5,
        width: 10,
        backgroundColor: 'gray',
        marginHorizontal: 2,
        borderRadius: 3
    },
    btn: {
        flex: 1,
        height: 50,
        borderRadius: 5,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems:'center',
    },
})