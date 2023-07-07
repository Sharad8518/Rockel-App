import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './src/navigation/AuthStack';
import FlashMessage from "react-native-flash-message";
import { AuthProvider } from './src/context/AuthContext';



export default function App() {  

  
 
  return (
  <AuthProvider>
  <AuthStack/>
  <FlashMessage position="bottom" />
  </AuthProvider>
  )
}
