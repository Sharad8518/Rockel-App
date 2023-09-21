import { View, Text } from 'react-native'
import { AuthContext } from '../context/AuthContext'
import React ,{useContext,useEffect,useState}from 'react'
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
import AddCustomer from '../AddCustomer'
import AddInvoice from '../AddInvoice'
import FreetownLogin from '../Freetown/FreetownLogin'
import FreetownHome from '../Freetown/FreetownHome'
import FreetownInvoice from '../Freetown/FreetownInvoice'
import InvoiceDetail from '../InvoiceDetail'
import EditCustomer from '../EditCustomer'
import AddBooking from '../AddBooking'
import PendingBooking from '../PendingBooking'
import AddCollectionBoy from '../AddCollectionBoy'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useQuery } from '@apollo/client'
import { QUERY_GET_USER_BY_ID } from '../Graphql/Query'


const Stack =  createNativeStackNavigator();
export default function AuthStack() {

  const { check, userInfo} = useContext(AuthContext);

  const [userId, setUserId] = useState();

  useEffect(() => {
    AsyncStorage.getItem('userId').then(id => setUserId(id), []);
  })

  const{data,loading}  =useQuery(QUERY_GET_USER_BY_ID,{
    variables:{
      "userId": `${userId}`,
    }
  })
  console.log("data",data)

  return (
    <NavigationContainer >
    <Stack.Navigator screenOptions={{ headerShown: false, gestureEnabled: true, gestureDirection: 'horizontal' }}  >
      {
          userInfo ?
          <>
          {
            
            data && data.getLondonById.role  === "WareHouse_London" ?
            <>
            <Stack.Screen name="Home" component={Home} /> 
            </>
            :
            <>
            <Stack.Screen name="FreetownHome" component={FreetownHome} />
            </>
          }
          <Stack.Screen name="Invoice" component={Invoice} /> 
          <Stack.Screen name="Payment" component={Payment} /> 
          <Stack.Screen name="Customer" component={Customer} /> 
          <Stack.Screen name="Booking" component={Booking} /> 
          <Stack.Screen name="Qrscan" component={Qrscan} /> 
          <Stack.Screen name="Profile" component={Profile} /> 
          <Stack.Screen name="Successfull" component={Successfull} /> 
          <Stack.Screen name="AddCustomer" component={AddCustomer} /> 
          <Stack.Screen name="AddInvoice" component={AddInvoice} /> 
          <Stack.Screen name="AddBooking" component={AddBooking} />
          <Stack.Screen name="PendingBooking" component={PendingBooking} />
          <Stack.Screen name="AddCollectionBoy" component={AddCollectionBoy} />


         
         
          <Stack.Screen name="FreetownInvoice" component={FreetownInvoice} />
          <Stack.Screen name="InvoiceDetail" component={InvoiceDetail} />
          <Stack.Screen name="EditCustomer" component={EditCustomer} />
          </>
          :
          <>
       <Stack.Screen name="SignUp" component={SignUp} />  
       <Stack.Screen name="FreetownLogin" component={FreetownLogin} />
       </>
      }
  
 
</Stack.Navigator>
</NavigationContainer>
  )
}