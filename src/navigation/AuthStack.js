import { View, Text } from 'react-native'
import { AuthContext } from '../context/AuthContext'
import React ,{useContext}from 'react'
import SignUp from "../SignUp"
import Home from '../Home'
import Invoice from '../Invoice'
import Payment from '../Payment'
import Customer from '../Customer'
import Booking from '../Booking'
import Qrscan from '../Qrscan'
import Profile from '../Profile'
import Successfull from '../Successfull'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



const Stack =  createNativeStackNavigator();
export default function AuthStack() {

  const { check, } = useContext(AuthContext);

  return (
    <NavigationContainer >
    <Stack.Navigator screenOptions={{ headerShown: false, gestureEnabled: true, gestureDirection: 'horizontal' }}  >
  <Stack.Screen name="SignUp" component={SignUp} />  
  <Stack.Screen name="Home" component={Home} /> 
  <Stack.Screen name="Invoice" component={Invoice} /> 
  <Stack.Screen name="Payment" component={Payment} /> 
  <Stack.Screen name="Customer" component={Customer} /> 
  <Stack.Screen name="Booking" component={Booking} /> 
  <Stack.Screen name="Qrscan" component={Qrscan} /> 
  <Stack.Screen name="Profile" component={Profile} /> 
  <Stack.Screen name="Successfull" component={Successfull} /> 
</Stack.Navigator>
</NavigationContainer>
  )
}