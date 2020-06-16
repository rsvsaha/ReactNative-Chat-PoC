import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './src/Screens/HomeScreen/HomeScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LocationSceen from './src/Screens/LocationScreen/LocationScreen';
import ChatScreen from './src/Screens/ChatScreen/ChatScreen';
import RegistrationScreen from './src/Screens/RegistrationScreen/RegistrationScreen';
import LoginScreen from './src/Screens/LoginScreen/LoginScreen';

const Stack = createStackNavigator();


export default function App() {
  return (
    
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} options={{headerShown:false}}></Stack.Screen>
        <Stack.Screen name="Registration" component={RegistrationScreen} options={{headerShown:false}}></Stack.Screen>
        <Stack.Screen name="Home" component={HomeScreen}></Stack.Screen>
        <Stack.Screen name="Location" component={LocationSceen}></Stack.Screen>
        <Stack.Screen name="Chat" component={ChatScreen}></Stack.Screen>
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
