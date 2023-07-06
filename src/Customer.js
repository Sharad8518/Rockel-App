import { View, Text,StatusBar,TouchableOpacity, ScrollView,Image } from 'react-native'
import React from 'react'
import Feather from 'react-native-vector-icons/Feather';
import { Card } from 'react-native-paper';
import addCus from "../assets/Image/addCus.png"
import allCus from "../assets/Image/allCus.png"

export default function Customer({navigation}) {
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

<View style={{flexDirection:"row",justifyContent:"space-between",width:"95%"}}>
   <View style={{width:"50%",justifyContent:"center",alignItems:"center",flexDirection:"column",marginTop:10,marginBottom:5}}>
   <Card style={{width:"80%" , height:120,flexDirection:"row",justifyContent:"center",alignItems:"center",elevation:5,borderRadius:10}}>
       <TouchableOpacity>
       <View style={{flexDirection:"column",alignItems:"center",justifyContent:"center",width:"100%"}}>
       <Image source={addCus}/>
       </View>
       </TouchableOpacity>
   </Card>
   <Text style={{marginTop:10,fontFamily:"Poppins-SemiBold",color:"#000"}}>Add Customer</Text>
   </View>
   <View style={{width:"50%",justifyContent:"center",alignItems:"center",flexDirection:"column",marginRight:0,marginTop:10,marginBottom:5}}>
   <Card style={{width:"80%" ,height:120,flexDirection:"row",justifyContent:"center",alignItems:"center",elevation:5,borderRadius:10}}>
   <TouchableOpacity>
   <View style={{flexDirection:"column",alignItems:"center",justifyContent:"center",width:"100%"}}>
   <Image source={allCus}  />
   </View>
   </TouchableOpacity>
   </Card>
   <Text style={{marginTop:10,fontFamily:"Poppins-SemiBold",color:"#000"}}>All Customer</Text>
   </View>
</View>
</View>
</ScrollView>

    </View>
  )
}