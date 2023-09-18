import { View, Text,Image, TextInput, StatusBar, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import logo from "../assets/Image/mobile.png"
import Feather from 'react-native-vector-icons/Feather';
import { Checkbox,Card } from 'react-native-paper';
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';
import { useState } from 'react';

export default function SignUp({navigation}) {

  const { loginHandel  } = useContext(AuthContext);
  const[username,setUserName] =useState("")
  const[password,setPassword] =useState("")
  return (
    <View style={{ backgroundColor: "#fff", height: "100%" }}>
        <ScrollView>
    <StatusBar barStyle="dark-content" hidden={false} backgroundColor="#fff" translucent={true} />

    <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
      <Image source={logo} style={{ width: 250, height: 250, marginTop: 50 }} />
    </View>
    <View style={{ flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
      <Text style={{ marginTop: 20, fontSize: 20, fontWeight: "700", color: "#34495E",fontFamily:"Poppin-Bold" }}>Warehouse (London) Login</Text>
    </View> 
    <View style={{ flexDirection: "column", justifyContent: "center", alignItems: "center", marginTop: 20 }}>

      <Card style={{width:"80%",marginTop:5,height:50,elevation:5,borderRadius:10}}>
        <TextInput placeholder='Username' style={{marginLeft:5,color:"#000"}} value={username}  placeholderTextColor="#95A5A6" onChangeText={(e)=>setUserName(e)}/>
      </Card>
      
      <Card style={{width:"80%",marginTop:15,height:50,elevation:5,borderRadius:10}}>
        <TextInput placeholder='Password' style={{marginLeft:5,color:"#000"}} value={password}  placeholderTextColor="#95A5A6" onChangeText={(e)=>setPassword(e)}/>
      </Card>
    

    </View>
    <View style={{ flexDirection: "row",justifyContent:"center",alignItems:"center" }}>
     
    </View>
    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
      <View style={{ width: "40%", backgroundColor: "#3498DB", flexDirection: "column", alignItems: "center", justifyContent: "center", height: 45, marginTop: 30, borderRadius: 10 }}>
        <TouchableOpacity onPress={()=>loginHandel(username,password)}>
        <View style={{width:"50%", backgroundColor: "#3498DB", flexDirection: "column", alignItems: "center", justifyContent: "center", borderRadius: 50}}>
        <Text style={{ color: "#fff",fontFamily:"Poppins-SemiBold" }}>Login</Text>
        </View>
        </TouchableOpacity>
      </View>
    </View>
  
    <View style={{flexDirection:"row",justifyContent:"center",alignItems:"center",marginTop:12}}>
      <TouchableOpacity onPress={()=>navigation.navigate("FreetownLogin")}>
      <Text  style={{fontFamily:"Poppins-SemiBold",color:"#3498DB"}}>Freetown (London) Login </Text>
      </TouchableOpacity>
    </View>

    </ScrollView>
  </View>
  )
}