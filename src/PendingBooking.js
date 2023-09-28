import { View, Text, TouchableOpacity, StatusBar, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Card } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';
import { useQuery } from '@apollo/client';
import { QUERY_GET_BOOKING_STATUS_PENDING } from './Graphql/Query';
import Moment from 'react-moment';
export default function PendingBooking({ navigation }) {

    const { data, loading } = useQuery(QUERY_GET_BOOKING_STATUS_PENDING)

    console.log("data", data)


    return (
        <View style={{ backgroundColor: "#fff", height: "100%" }}>
            <ScrollView>
                <View style={{ backgroundColor: "#3498DB", height: 200, borderBottomLeftRadius: 30, borderBottomRightRadius: 30 }}>
                    <StatusBar barStyle="light-content" hidden={false} backgroundColor="#3498DB" translucent={true} />
                    <View style={{ flexDirection: "column", justifyContent: "center", alignItems: "center", marginTop: 70 }}>
                        <View style={{ flexDirection: "row", width: "90%" }}>
                            <TouchableOpacity onPress={() => navigation.goBack()}>
                                <Feather name="arrow-left" size={25} style={{ color: "#fff" }} />
                            </TouchableOpacity>
                            <Text style={{ fontSize: 18, fontFamily: "Poppins-SemiBold", color: "#fff", marginLeft: 10 }}>Pending Booking</Text>
                        </View>
                    </View>
                </View>

                <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                    <Card style={{ width: "90%", height: 50, marginTop: 10, marginBottom: 10, elevation: 5, borderRadius: 10 }}>
                        <View style={{ flexDirection: "row", width: "100%" }}>
                            <View style={{ width: "90%" }}>
                                <TextInput placeholder='Booking No..' style={{ marginLeft: 10, color: "#000" }} placeholderTextColor="#95A5A6" />
                            </View>
                            <Feather name="search" size={20} style={{ marginTop: 13, color: "#000" }} />
                        </View>
                    </Card>
                </View>

                <View style={{ flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                    {
                        data && data.getBookingStatusPending.slice().reverse().map(item => {
                            return (
                                <Card style={{ width: "90%", marginTop: 10, marginBottom: 10, elevation: 5, borderRadius: 10, marginBottom: 10 }}>
                                    <View style={{ flexDirection: "row", width: "100%", justifyContent: "space-between", }}>
                                        <View style={{ width: "90%", height: "100%" }}>
                                            <Text style={{ marginLeft: 10, color: "#34495E", fontSize: 12, marginTop: 7, fontFamily: "Poppins-SemiBold" }}>#554455544</Text>
                                            <View style={{ flexDirection: "row", marginLeft: 10 }}>
                                                <Text style={{ fontSize: 11, fontFamily: "Poppins-SemiBold", color: "#2980B9" }}>Pickup Date : </Text>
                                                <Text style={{ fontSize: 11, fontFamily: "Poppins-SemiBold", color: "#34495E" }}><Moment element={Text} format='DD-MM-YYYY'>{item.pickUpDate}</Moment> </Text>
                                            </View>
                                            <View style={{ flexDirection: "row", marginLeft: 10 }}>
                                                <Text style={{ fontSize: 11, fontFamily: "Poppins-SemiBold", color: "#2980B9" }}>Pickup Time : </Text>
                                                <Text style={{ fontSize: 11, fontFamily: "Poppins-SemiBold", color: "#34495E" }}><Moment element={Text} format="hh:mm:ss A">{item.pickUpTime}</Moment> </Text>
                                            </View>
                                            <View style={{ flexDirection: "row", marginLeft: 10, width: "70%" }}>
                                                <Text style={{ fontSize: 11, fontFamily: "Poppins-SemiBold", color: "#2980B9" }}>Pickup Address : </Text>
                                                <Text style={{ fontSize: 11, fontFamily: "Poppins-SemiBold", color: "#34495E" }}>{item.allocation}</Text>
                                            </View>

                                            <View style={{ flexDirection: "row", marginLeft: 10, width: "90%", marginBottom: 5 }}>
                                                <Text style={{ fontSize: 11, fontFamily: "Poppins-SemiBold", color: "#2980B9" }}>Notes : </Text>
                                                <Text style={{ fontSize: 11, fontFamily: "Poppins-SemiBold", color: "#34495E" }}>{item.notes}</Text>
                                            </View>
                                        </View>
                                        {/* <View style={{width:"50%"}}>
                        <Text style={{marginLeft:10,color:"#34495E",fontSize:12,marginTop:7,fontFamily:"Poppins-SemiBold"}}>06 Jul 2023, 10:50AM</Text>
                        <Text style={{fontSize:11,marginLeft:10,fontFamily:"Poppins-SemiBold",color:"#2ECC71"}}>Complete</Text>
                        <Text style={{marginLeft:10,color:"#34495E",fontSize:8,marginTop:0,fontFamily:"Poppins-Medium"}}>06 Jul 2023, 10:50AM</Text>
                        <View style={{flexDirection:"column",width:"60%",justifyContent:"center",alignItems:"center",backgroundColor:"#1ABC9C",marginLeft:10,height:25,borderRadius:50,marginTop:1}}>
                           <Text style={{color:"#fff",fontSize:12}}>View Detail</Text>
                            </View>
                        </View> */}
                                    </View>

                                    {
                                        item.collectionBoyId === null ?
                                        <View style={{ width: "100%", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>

                                        <View style={{ width: "95%", flexDirection: "row", alignItems: "center", justifyContent: "center", backgroundColor: "#3498DB", height: 40, marginBottom: 10, borderRadius: 10 }}>
                                            <TouchableOpacity onPress={()=>navigation.navigate("AddCollectionBoy",{bookingId:item.id})}>
                                                <View style={{ width: "100%", flexDirection: "row", alignItems: "center", justifyContent: "center", height: 40, marginBottom: 10, borderRadius: 10 }}>
                                                    <View style={{width:"100%",flexDirection: "row", alignItems: "center", justifyContent: "center",}}>
                                                    <Text style={{ color: "#fff", fontFamily: "Poppins-SemiBold", marginTop: 10, fontSize: 12 }}>Add Collection Boy</Text>
                                                    </View>
                                                </View>
                                            </TouchableOpacity>
                                        </View>

                                    </View>
                                        :
                                       <>
                                       <View style={{ width: "90%",marginBottom:10 }}>
                                       <View style={{ flexDirection: "row", marginLeft: 10, width: "90%", }}>
                                                <Text style={{ fontSize: 11, fontFamily: "Poppins-SemiBold", color: "#2980B9" }}>Collection Boy Id : </Text>
                                                <Text style={{ fontSize: 11, fontFamily: "Poppins-SemiBold", color: "#34495E" }}>{item.collectionBoyuniqueId}</Text>
                                            </View>
                                            <View style={{ flexDirection: "row", marginLeft: 10, width: "90%", }}>
                                                <Text style={{ fontSize: 11, fontFamily: "Poppins-SemiBold", color: "#2980B9" }}>Collection Name : </Text>
                                                <Text style={{ fontSize: 11, fontFamily: "Poppins-SemiBold", color: "#34495E" }}>{item.collectionName}</Text>
                                            </View>

                                       </View>
                                       </>
                                    }
                                   
                                </Card>
                            )
                        })
                    }
                </View>
            </ScrollView>
        </View>
    )
}