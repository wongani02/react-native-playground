import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons';

//screens
import HomeScreen from './screens/HomeScreen'
import DetailScreen from './screens/DetailScreen'
import SettingsScreen from './screens/SettingsScreen'
import SearchScreen from './screens/SearchScreen'

const homeName = 'Home';
const detailName = 'Library';
const searchName = 'Search';
const settingsName = 'Events';

const Tab = createBottomTabNavigator();

const ContainerComponent = () => {
  return (
    
        <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({route})=>({
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'grey',
            tabBarLabelStyle: {paddingBottom: 10, fontSize: 10 },
            tabBarStyle:{ padding:10, height: 60},
            tabBarIcon: ({focused, color, size})=>{
                let iconName;
                let rn = route.name;

                if (rn==homeName){
                    iconName = focused?'home':'home-outline'
                }else if (rn == searchName){
                    iconName = focused? 'search':'search-outline'
                }else if (rn == detailName) {
                    iconName = focused?'library':'library-outline'
                }else if (rn == settingsName){
                    iconName = focused?'calendar':'calendar-outline'
                    return <Ionicons name={iconName} size={size} color={color} />
                }
                return <Ionicons name={iconName} size={size} color={color} />
            }
        })}
        
        >
            <Tab.Screen name={homeName} options={{headerShown:false}} component={HomeScreen}/>
            <Tab.Screen name={searchName} options={{headerShown:false}} component={SearchScreen}/>           
            <Tab.Screen name={settingsName} options={{headerShown:false}} component={SettingsScreen}/>
            <Tab.Screen name={detailName} options={{headerShown:false}} component={DetailScreen}/>
        </Tab.Navigator>
    
  )
}

export default ContainerComponent

const styles = StyleSheet.create({})