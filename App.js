import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './src/navigation/AuthStack';
import FlashMessage from "react-native-flash-message";
import { AuthProvider } from './src/context/AuthContext';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

export default function App() {  

  const client = new ApolloClient({
    uri: 'https://seashell-app-wjdmj.ondigitalocean.app/graphql',
    cache: new InMemoryCache()
  });
 
  return (
    <ApolloProvider client={client}>
  <AuthProvider>
  <AuthStack/>
  <FlashMessage position="bottom" />
  </AuthProvider>
  </ApolloProvider>
  )
}
