import { View, Text,StatusBar, ScrollView,Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import profile from "../../assets/Image/Vector.png"
import Feather from 'react-native-vector-icons/Feather';
import { Card } from 'react-native-paper';
import booking from "../../assets/Image/booking.png"
import customer from "../../assets/Image/customer.png"
import invoice from "../../assets/Image/invoice.png"
import money from "../../assets/Image/money.png"
import scan from "../../assets/Image/scan.png"
import setting from "../../assets/Image/setting.png"
import delivered from "../../assets/Image/delivered.png"
import way from "../../assets/Image/way.png"


export default function FreetownHome({navigation}) {
  return (
    <View style={{height:"100%",backgroundColor:"#fff"}}>
    <ScrollView>
     <StatusBar barStyle="light-content" hidden={false} backgroundColor="#3498DB" translucent={true} />
     <View style={{backgroundColor:"#3498DB",height:200,borderBottomLeftRadius:30,borderBottomRightRadius:30}}>
        <View style={{flexDirection:"row",justifyContent:"space-between",marginTop:70}}>
            <View style={{flexDirection:"row"}}>
            <Text style={{fontSize:20,marginLeft:20,fontFamily:"Poppins-Bold",color:"#fff"}}>Freetown</Text>
            <Text style={{marginTop:6,marginLeft:5,fontFamily:"Poppins-SemiBold",color:"#fff"}}>(London)</Text>
            </View>
            <TouchableOpacity onPress={()=>navigation.navigate("Profile")}>
            <Image source={profile} style={{marginRight:20}}/>
            </TouchableOpacity>
        </View>
        <View style={{flexDirection:"column",justifyContent:"center",alignItems:"center",marginTop:10}}>
            <View style={{width:"90%",backgroundColor:"#fff",flexDirection:"row",borderRadius:50}}>
                <View style={{width:"90%"}}>
                    <TextInput placeholder='Search' style={{marginLeft:10,color:"#000"}} placeholderTextColor="#8C8B8B"/>
                </View>
                <Feather name="search" size={20} style={{marginTop:12,color:"#000"}}/>
            </View>
        </View>
     </View>
     <View style={{flexDirection:"column",justifyContent:"center",alignItems:"center"}}>

     <View style={{flexDirection:"row",justifyContent:"space-between",width:"95%"}}>
     <View style={{width:"50%",justifyContent:"center",alignItems:"center",flexDirection:"column",marginTop:10,marginBottom:5}}>
        <Card style={{width:"80%" , height:120,flexDirection:"row",justifyContent:"center",alignItems:"center",elevation:5,borderRadius:10}}>
        <TouchableOpacity onPress={()=>navigation.navigate("FreetownInvoice")}>
            <View style={{flexDirection:"column",alignItems:"center",justifyContent:"center",width:"100%"}}>
            <Image source={invoice}  />
            </View>
            </TouchableOpacity>
        </Card>
        <Text style={{marginTop:10,fontFamily:"Poppins-SemiBold",color:"#000"}}>Invoice</Text>
        </View>
        <View style={{width:"50%",justifyContent:"center",alignItems:"center",flexDirection:"column",marginTop:10,marginBottom:5}}>
        <Card style={{width:"80%" , height:120,flexDirection:"row",justifyContent:"center",alignItems:"center",elevation:5,borderRadius:10}}>
            <TouchableOpacity onPress={()=>navigation.navigate("Qrscan")}>
            <View style={{flexDirection:"column",alignItems:"center",justifyContent:"center",width:"100%"}}>
            <Image source={scan}  />
            </View>
            </TouchableOpacity>
        </Card>
        <Text style={{marginTop:10,fontFamily:"Poppins-SemiBold",color:"#000"}}>QR Scan</Text>
        </View>
     </View>


     <View style={{flexDirection:"row",justifyContent:"space-between",width:"95%"}}>
     <View style={{width:"50%",justifyContent:"center",alignItems:"center",flexDirection:"column",marginTop:10,marginBottom:5}}>
        <Card style={{width:"80%" , height:120,flexDirection:"row",justifyContent:"center",alignItems:"center",elevation:5,borderRadius:10}}>
        <TouchableOpacity onPress={()=>navigation.navigate("OnWayBooking")}>
            <View style={{flexDirection:"column",alignItems:"center",justifyContent:"center",width:"100%"}}>
            <Image source={way}  />
            </View>
            </TouchableOpacity>
        </Card>
        <Text style={{marginTop:10,fontFamily:"Poppins-SemiBold",color:"#000"}}>On Way</Text>
        </View>
        <View style={{width:"50%",justifyContent:"center",alignItems:"center",flexDirection:"column",marginTop:10,marginBottom:5}}>
        <Card style={{width:"80%" , height:120,flexDirection:"row",justifyContent:"center",alignItems:"center",elevation:5,borderRadius:10}}>
            <TouchableOpacity onPress={()=>navigation.navigate("Deliverd")}>
            <View style={{flexDirection:"column",alignItems:"center",justifyContent:"center",width:"100%"}}>
            <Image source={delivered}  style={{width:80,height:80}} />
            </View>
            </TouchableOpacity>
        </Card>
        <Text style={{marginTop:10,fontFamily:"Poppins-SemiBold",color:"#000"}}>Delievered</Text>
        </View>
     </View>




   
     <View style={{flexDirection:"row",justifyContent:"space-between",width:"95%"}}>
        
        <View style={{width:"50%",justifyContent:"center",alignItems:"center",flexDirection:"column",marginRight:0,marginTop:10,marginBottom:5}}>
        <Card style={{width:"80%" ,height:120,flexDirection:"row",justifyContent:"center",alignItems:"center",elevation:5,borderRadius:10}}>
        <TouchableOpacity>
        <View style={{flexDirection:"column",alignItems:"center",justifyContent:"center",width:"100%"}}>
        <Image source={setting}  />
            </View>
            </TouchableOpacity>
        </Card>
        <Text style={{marginTop:10,fontFamily:"Poppins-SemiBold",color:"#000"}}>Setting</Text>
        </View>
     </View>

     </View>

      </ScrollView>
    </View>
  )
}