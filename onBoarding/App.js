import { StatusBar } from 'expo-status-bar';
import { AsyncStorage, SafeAreaView ,StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// import OnBoardingSreen from './navigation/screens/OnBoardingSreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import AsyncStorage from 'rea'
import { useEffect, useState } from 'react';
import ContainerComponent from './navigation/container';
import UberEats from './navigation/screens/SrollableScreen';
import DetailScreen from './navigation/screens/DetailScreen';
import TrialScreen from './navigation/screens/trialScreen';
import StickyBottonTab from './navigation/screens/StickyBottonTab';

export default function App() {

  const Stack = createNativeStackNavigator();
  const [isAppFirstLaunched, setIsAppFirstLaunched] = useState(null)

  useEffect(()=>{

  }, [])

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Container'>
        <Stack.Screen name='Container' component={ContainerComponent} options={{
            headerShown: false,
          }}/>
        <Stack.Screen name='Trial' component={TrialScreen} options={{
            headerShown: false,
          }}/>  
      </Stack.Navigator>
    </NavigationContainer>
    
  );
    
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
