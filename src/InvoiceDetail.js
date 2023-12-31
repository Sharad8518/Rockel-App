import { View, Text, StatusBar, ScrollView, TouchableOpacity, TextInput, Image } from 'react-native'
import React from 'react'
import Feather from 'react-native-vector-icons/Feather';
import { Card } from 'react-native-paper';
import Moment from 'react-moment';
import { useState } from 'react';



export default function InvoiceDetail({ navigation, route }) {

    const { data } = route.params;

    console.log("data", data)

    let count = 1;

  


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
                            <Text style={{ fontSize: 18, fontFamily: "Poppins-SemiBold", color: "#fff", marginLeft: 10 }}>Invoice  Detail</Text>
                        </View>
                    </View>
                </View>

                <View style={{ flexDirection: "column", justifyContent: "center", alignItems: "center" }}>

                    <Card style={{ width: "95%", marginTop: 10, marginBottom: 10, elevation: 5, borderRadius: 10 }}>
                        <View style={{ flexDirection: "row", width: "100%", justifyContent: "space-between" }}>
                            <View style={{ width: "60%", flexDirection: "column", }}>
                                <Text style={{ marginLeft: 10, color: "#34495E", fontSize: 12, marginTop: 7, fontFamily: "Poppins-SemiBold" }}>#{data && data.invoiceNumber}</Text>
                                <View style={{ flexDirection: "row", marginLeft: 10, width: "50%" }}>
                                    <Text style={{ fontSize: 11, fontFamily: "Poppins-SemiBold", color: "#2980B9" }}>Recipient : </Text>
                                    <Text style={{ fontSize: 11, fontFamily: "Poppins-SemiBold", color: "#34495E" }}>{data && data.recipientName}</Text>
                                </View>
                                <View style={{ flexDirection: "row", marginLeft: 10, width: "50%" }}>
                                    <Text style={{ fontSize: 11, fontFamily: "Poppins-SemiBold", color: "#2980B9" }}>Email : </Text>
                                    <Text style={{ fontSize: 11, fontFamily: "Poppins-SemiBold", color: "#34495E" }}>{data && data.email}</Text>
                                </View>
                                <View style={{ flexDirection: "row", marginLeft: 10, width: "50%" }}>
                                    <Text style={{ fontSize: 11, fontFamily: "Poppins-SemiBold", color: "#2980B9" }}>Phone 1 : </Text>
                                    <Text style={{ fontSize: 11, fontFamily: "Poppins-SemiBold", color: "#34495E" }}>{data && data.phoneOne} </Text>

                                </View>
                                <View style={{ flexDirection: "row", marginLeft: 10, width: "50%" }}>
                                    <Text style={{ fontSize: 11, fontFamily: "Poppins-SemiBold", color: "#2980B9" }}>Phone 2 : </Text>
                                    <Text style={{ fontSize: 11, fontFamily: "Poppins-SemiBold", color: "#34495E" }}>{data && data.phoneTwo} </Text>

                                </View>

                                <View style={{ flexDirection: "row", marginLeft: 10, width: "50%" }}>
                                    <Text style={{ fontSize: 11, fontFamily: "Poppins-SemiBold", color: "#2980B9" }}>Address 1 : </Text>
                                    <Text style={{ fontSize: 11, fontFamily: "Poppins-SemiBold", color: "#34495E" }} numberOfLines={5}>{data && data.addressOne}</Text>
                                </View>
                                <View style={{ flexDirection: "row", marginLeft: 10, width: "50%" }}>
                                    <Text style={{ fontSize: 11, fontFamily: "Poppins-SemiBold", color: "#2980B9" }}>Address 2 : </Text>
                                    <Text style={{ fontSize: 11, fontFamily: "Poppins-SemiBold", color: "#34495E" }} numberOfLines={5}>{data && data.addressTwo}</Text>
                                </View>


                            </View>
                            <View style={{ width: "40%" }}>
                                <Text style={{ marginLeft: 10, color: "#34495E", fontSize: 10, marginTop: 7, fontFamily: "Poppins-SemiBold" }}><Moment element={Text} format='DD MMM YYYY'>{data && data.createdDateTime}</Moment> , <Moment element={Text} format='hh:mm A'>{data && data.createdDateTime}</Moment> </Text>
                                <Text style={{ fontSize: 11, marginLeft: 10, fontFamily: "Poppins-SemiBold", color: "#F1C40F" }}>{data && data.status}</Text>
                                <Text style={{ marginLeft: 10, color: "#34495E", fontSize: 8, marginTop: 0, fontFamily: "Poppins-Medium" }}><Moment element={Text} format='DD MMM YYYY'>{data && data.createdDateTime}</Moment> , <Moment element={Text} format='hh:mm A'>{data && data.createdDateTime}</Moment> </Text>

                            </View>





                        </View>

                        {
                            data && data.items.map(listItem => {
                                return (
                                    <View style={{ marginTop: 10 ,marginBottom:10}}>
                                       
                                        <Text style={{ fontFamily: "Poppins-SemiBold", marginLeft: 10, color: "#2980B9" }}>{count++}</Text>
                                        <View style={{ width: "100%", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                                        <View style={{width:"90%",height:1,backgroundColor:"#000"}}></View>
                                            <View style={{ width: "90%", flexDirection: "row" }}>
                                                <Text style={{ fontSize: 11, fontFamily: "Poppins-SemiBold", color: "#2980B9" }}>Item Id : </Text>
                                                <Text style={{ fontSize: 11, fontFamily: "Poppins-SemiBold", color: "#34495E" }} numberOfLines={5}>{data && data.addressOne}</Text>

                                            </View>

                                            <View style={{ width: "90%", flexDirection: "row" }}>
                                                <Text style={{ fontSize: 11, fontFamily: "Poppins-SemiBold", color: "#2980B9" }}>Item ItemType : </Text>
                                                <Text style={{ fontSize: 11, fontFamily: "Poppins-SemiBold", color: "#34495E" }} numberOfLines={5}>{data && data.addressOne}</Text>

                                            </View>

                                            <View style={{ width: "90%", flexDirection: "row" }}>
                                                <Text style={{ fontSize: 11, fontFamily: "Poppins-SemiBold", color: "#2980B9" }}>Item Description : </Text>
                                                <Text style={{ fontSize: 11, fontFamily: "Poppins-SemiBold", color: "#34495E" }} numberOfLines={5}>{data && data.addressOne}</Text>

                                            </View>

                                            <View style={{ width: "90%", flexDirection: "row" }}>
                                                <Text style={{ fontSize: 11, fontFamily: "Poppins-SemiBold", color: "#2980B9" }}>Item Height : </Text>
                                                <Text style={{ fontSize: 11, fontFamily: "Poppins-SemiBold", color: "#34495E" }} numberOfLines={5}>{data && data.addressOne}</Text>
                                            </View>

                                            <View style={{ width: "90%", flexDirection: "row" }}>
                                                <Text style={{ fontSize: 11, fontFamily: "Poppins-SemiBold", color: "#2980B9" }}>Item Length : </Text>
                                                <Text style={{ fontSize: 11, fontFamily: "Poppins-SemiBold", color: "#34495E" }} numberOfLines={5}>{data && data.addressOne}</Text>

                                            </View>

                                            <View style={{ width: "90%", flexDirection: "row" }}>
                                                <Text style={{ fontSize: 11, fontFamily: "Poppins-SemiBold", color: "#2980B9" }}>Item Weight
                                                    : </Text>
                                                <Text style={{ fontSize: 11, fontFamily: "Poppins-SemiBold", color: "#34495E" }} numberOfLines={5}>{data && data.addressOne}</Text>

                                            </View>

                                            <View style={{ width: "90%", flexDirection: "row" }}>
                                                <Text style={{ fontSize: 11, fontFamily: "Poppins-SemiBold", color: "#2980B9" }}>Item Quantity

                                                    : </Text>
                                                <Text style={{ fontSize: 11, fontFamily: "Poppins-SemiBold", color: "#34495E" }} numberOfLines={5}>{data && data.addressOne}</Text>

                                            </View>

                                            <View style={{ width: "90%", flexDirection: "row" }}>
                                                <Text style={{ fontSize: 11, fontFamily: "Poppins-SemiBold", color: "#2980B9" }}>Item Cost

                                                    : </Text>
                                                <Text style={{ fontSize: 11, fontFamily: "Poppins-SemiBold", color: "#34495E" }} numberOfLines={5}>{data && data.addressOne}</Text>

                                            </View>

                                        </View>



                                    </View>
                                )


                            })




                        }
                        
                        {
                         data && data.status === "Delivered" ?
                         <Image source={{ uri: `https://byaahlagan-profile-image.s3.us-east-2.amazonaws.com/${data && data.imgQR}` }} style={{ width: 120, height: 120, marginBottom: 10, marginLeft: 10 }} />
                         :
                        <></>
                        }



                    </Card>



                </View>
            </ScrollView>
        </View>
    )
}