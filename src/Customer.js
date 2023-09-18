import { View, Text,StatusBar,TouchableOpacity, ScrollView,Image,ActivityIndicator } from 'react-native'
import React from 'react'
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Card } from 'react-native-paper';
import addCus from "../assets/Image/addCus.png"
import allCus from "../assets/Image/allCus.png"
import { useMutation, useQuery } from '@apollo/client';
import { QUERY_ALL_CUSTOMER } from './Graphql/Query';
import { MUTATION_DELETE_CUSTOMER } from './Graphql/Mutation';
import { useState } from 'react';

export default function Customer({navigation}) {

  const{data,loading} = useQuery(QUERY_ALL_CUSTOMER)

  console.log(data,"data")

 const[deleteCustomer,{loading:deleteLoading}] = useMutation(MUTATION_DELETE_CUSTOMER,{
  refetchQueries:[
    QUERY_ALL_CUSTOMER,
    "getAllCustomer"
  ]
 })

 const[customerId,setCustomerId] = useState()

  function handleDelete(id){
    setCustomerId(id)
    deleteCustomer({
     variables:{
      "customerId": `${id}`
     }

    })
  }

  return (
    <View style={{backgroundColor:"#fff",height:"100%"}}>
        <ScrollView>
        <StatusBar barStyle="light-content" hidden={false} backgroundColor="#3498DB" translucent={true} />
       <View style={{backgroundColor:"#3498DB",height:200,borderBottomLeftRadius:30,borderBottomRightRadius:30}}>
       
       <View style={{flexDirection:"column",justifyContent:"center",alignItems:"center",marginTop:70}}>
       <View style={{flexDirection:"row",width:"90%"}}>
         <TouchableOpacity onPress={()=>navigation.goBack()}>
       <Feather name="arrow-left" size={25} style={{color:"#fff"}}/>
       </TouchableOpacity>
       <Text style={{fontSize:18,fontFamily:"Poppins-SemiBold",color:"#fff",marginLeft:10}}>Customer</Text>
       </View>
       </View>
  </View>


  <View style={{flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
    {
      loading ?
      <View style={{flexDirection:"column",justifyContent:"center",alignItems:"center",marginTop:20}}>
        <ActivityIndicator color="#000" size="large"/>
        <Text style={{color:"#777",fontFamily:"Poppins-Medium",fontSize:12}}>Please wait Loading</Text>
        </View>
      :
      <>
        {
       data && data.getAllCustomer.map(item=>{
        return(
<Card style={{width:"95%",height:100,marginTop:10,marginBottom:5,elevation:3,borderRadius:15}}>
      <View style={{flexDirection:"row",justifyContent:"space-between",height:"100%"}}>
        <View style={{width:"70%",height:"100%",flexDirection:"column"}}>
          <View style={{width:"100%",marginTop:10,marginLeft:15,flexDirection:"row"}}>
          <Text  style={{color:"#2980B9",fontFamily:"Poppins-SemiBold",fontSize:12}}>Name : </Text>
          <Text  style={{color:"#34495E",fontFamily:"Poppins-SemiBold",fontSize:12}} numberOfLines={1}>{item.fName} {item.lName} </Text>
          </View>
          <View style={{width:"100%",marginTop:3,marginLeft:15,flexDirection:"row"}}>
          <Text  style={{color:"#2980B9",fontFamily:"Poppins-SemiBold",fontSize:12}}>Email : </Text>
          <Text  style={{color:"#34495E",fontFamily:"Poppins-SemiBold",fontSize:12}} numberOfLines={1}>{item.email} </Text>
          </View>

          <View style={{width:"100%",marginTop:3,marginLeft:15,flexDirection:"row"}}>
          <Text  style={{color:"#2980B9",fontFamily:"Poppins-SemiBold",fontSize:12}}>Phone : </Text>
          <Text  style={{color:"#34495E",fontFamily:"Poppins-SemiBold",fontSize:12}} numberOfLines={1}>{item.phoneOne}</Text>
          </View>
        </View>
        <View style={{width:"30%",height:"100%",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
          <TouchableOpacity onPress={()=>navigation.navigate("EditCustomer",{customer:item})}>
          <View style={{width:"90%",backgroundColor:"#66FC87",height:30,borderRadius:50,flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
            <View style={{width:"100%",height:30,borderRadius:50,flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
            <FontAwesome name="pencil" size={15} color="#fff"/>
              <Text style={{marginLeft:5,fontFamily:"Poppins-SemiBold",marginTop:5,color:"#fff",fontSize:12}}>Edit</Text>
              </View>
          </View>
          </TouchableOpacity>
          {
                item.id === customerId && deleteLoading ?
                <View style={{width:"90%",backgroundColor:"#E74C3C",height:30,marginTop:6,borderRadius:50,flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
                <ActivityIndicator size="small" color="#fff"/>
                </View>
                :
                <TouchableOpacity onPress={()=>handleDelete(item.id)}>
                <View style={{width:"90%",backgroundColor:"#E74C3C",height:30,marginTop:6,borderRadius:50,flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
                <View style={{width:"100%",height:30,borderRadius:50,flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
                <FontAwesome name="trash-o" size={15} color="#fff"/>
                <Text style={{marginLeft:5,fontFamily:"Poppins-SemiBold",marginTop:5,color:"#fff",fontSize:12}}>Delete</Text>
              </View>
              </View>
              </TouchableOpacity>
          }
        </View>
      </View>
    </Card>
        )
       })
    }
      </>
    }
</View>
</ScrollView>
   
   <View style={{position:"absolute",bottom:0,height:60,width:"100%"}}>
    <View style={{width:"100%",flexDirection:"row",justifyContent:"flex-end"}}>
    <TouchableOpacity onPress={()=>navigation.navigate("AddCustomer")}>
      <View style={{backgroundColor:"#E74C3C",width:50,height:50,marginRight:10,flexDirection:"column",alignItems:"center",justifyContent:"center",borderRadius:50}} >
       <Feather name="plus" size={25} color="#fff"/>
      </View>
      </TouchableOpacity>
      

    </View>

   </View>
    </View>
  )
}