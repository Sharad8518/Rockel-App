import { View, Text ,StatusBar,TouchableOpacity } from 'react-native'
import React from 'react'
import Feather from 'react-native-vector-icons/Feather';

export default function Successfull({navigation}) {
  return (
    <View style={{flexDirection:"column",alignItems:"center",backgroundColor:"#fff",height:"100%"}}>
        <View style={{backgroundColor:"#3498DB",height:200,borderBottomLeftRadius:30,borderBottomRightRadius:30,width:"100%"}}>
     <StatusBar barStyle="light-content" hidden={false} backgroundColor="#3498DB" translucent={true} />
       <View style={{flexDirection:"column",justifyContent:"center",alignItems:"center",marginTop:70}}>
       <View style={{flexDirection:"row",width:"90%",justifyContent:"center",alignItems:"center"}}>
         <Text style={{fontSize:19,fontFamily:"Poppins-SemiBold",color:"#fff",marginTop:50}}>Scan Successfully</Text>
       </View>
       </View>
  </View>

   <Text style={{marginTop:20,fontFamily:"Poppins-SemiBold",color:"#000"}}>Do you want to update status to </Text>
   <Text style={{fontFamily:"Poppins-SemiBold",color:"#3498DB"}}>Load to container</Text>

   <View style={{width:"80%",flexDirection:"row",alignItems:"center",justifyContent:"center",backgroundColor:"#2ECC71",height:50,marginTop:15,borderRadius:10}}>
       <Text style={{fontSize:17,color:"#fff",fontFamily:"Poppins-SemiBold"}}>Update Status</Text>
   </View>

   <View style={{width:"80%",flexDirection:"row",alignItems:"center",justifyContent:"center",backgroundColor:"#1ABC9C",height:50,marginTop:15,borderRadius:10}}>
       <Text style={{fontSize:17,color:"#fff",fontFamily:"Poppins-SemiBold"}}>Scan Again</Text>
   </View>

   <View style={{width:"80%",flexDirection:"row",alignItems:"center",justifyContent:"center",backgroundColor:"#9B59B6",height:50,marginTop:15,borderRadius:10}}>
       <Text style={{fontSize:17,color:"#fff",fontFamily:"Poppins-SemiBold"}}>Update by Id</Text>
   </View>  

   
   <View style={{position:"absolute",bottom:0}}>
     <View style={{width:300,backgroundColor:"#E74C3C",height:50,marginBottom:1,flexDirection:"row",justifyContent:"center",alignItems:"center",borderRadius:10}}>
        <Text style={{fontSize:17,color:"#fff",fontFamily:"Poppins-SemiBold"}}>Cancel</Text>
     </View>

   </View>

    </View>
  )
}