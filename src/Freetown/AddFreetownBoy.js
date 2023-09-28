import { View, Text, TouchableOpacity, StatusBar, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Card } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';
import { useMutation, useQuery } from '@apollo/client';
import Moment from 'react-moment';

import { showMessage } from 'react-native-flash-message';
import { QUERY_GET_ALL_FREETOWN_COLLECTION_BOY, QUERY_GET_ALL_INVOICE, QUERY_GET_ALL_INVOICE_ON_WAY, QUERY_GET_FREETOWN_INVOICE, QUERY_GET_INVOICE_BY_ID } from '../Graphql/Query';
import { MUTATION_EDIT_INVOICE } from '../Graphql/Mutation';

export default function AddFreetownBoy({navigation,route}) {

    const { invoiceId } = route.params;

    const { data, loading } = useQuery(QUERY_GET_ALL_FREETOWN_COLLECTION_BOY)

    console.log("data", data)
    const [state, setState] = useState(false)
    const [clickId, setClickId] = useState()

    function handleClick(id) {
        setClickId(id)
        setState(true)
    }

    //  const[editBooking] = useMutation(MUTATION_UPDATE_BOOKING,{
    //   refetchQueries:[
    //       QUERY_GET_BOOKING_STATUS_PENDING,
    //       "getBookingStatusPending"
    //   ]
    //  })

    const [editInvoice, { loading: invoiceLoding }] = useMutation(MUTATION_EDIT_INVOICE, {
        refetchQueries: [
          QUERY_GET_INVOICE_BY_ID,
          "getInvoiceById",
          QUERY_GET_ALL_INVOICE,
         QUERY_GET_FREETOWN_INVOICE,
         "getInvoiceFreetown",
         QUERY_GET_ALL_INVOICE_ON_WAY,
         "getInvoiceOnWay",
         
        ]
      })

    function handleAdd(id, fName, lName, UniqueId) {
             let fullName = fName +" "+lName;
             editInvoice({
                variables: {
                    "editInvoiceInput": {
                      "invoiceId": `${invoiceId}`,
                      "status": "On_Way",
                      "collectionBoyFreetownId":`${id}`,
                      "collectionBoyFreetownName":`${fullName}`,
                      "collectionBoyFreetownUniqueId":`${UniqueId}`,
                    },
                  }

             })

             showMessage({
                      message: " Add Successfully",
                      type: "success",
                     });
                     navigation.goBack()



        //   editBooking({
        //   variables:{
        //       "editBookingInput": {
        //           "bookingId":`${bookingId}`,
        //           "collectionBoyuniqueId": `${UniqueId}`,
        //           "collectionBoyId":`${id}`,
        //           "collectionName": `${fullName}`
        //         }
        //   }
        //   })
        //   showMessage({
        //       message: " Add Successfully",
        //       type: "success",
        //     });
        //     navigation.navigate("PendingBooking")





    }

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
                            <Text style={{ fontSize: 18, fontFamily: "Poppins-SemiBold", color: "#fff", marginLeft: 10 }}>Collection Boy</Text>
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
                        data && data.getAllFreetownCollectionBoy.map(item => {

                            return (
                                <Card style={{ width: "90%", marginTop: 10, marginBottom: 10, elevation: 5, borderRadius: 10, marginBottom: 10 }}>
                                    <TouchableOpacity onPress={() => handleClick(item.id)}>
                                        <View style={{ flexDirection: "row", width: "100%", justifyContent: "space-between", }}>
                                            <View style={{ width: "90%", height: "100%", marginTop: 10 }}>
                                                <View style={{ flexDirection: "row", marginLeft: 10 }}>
                                                    <Text style={{ fontSize: 11, fontFamily: "Poppins-SemiBold", color: "#2980B9" }}>Collection Boy Id : </Text>
                                                    <Text style={{ fontSize: 11, fontFamily: "Poppins-SemiBold", color: "#34495E" }}>{item.uniqueId} </Text>
                                                </View>

                                                <View style={{ flexDirection: "row", marginLeft: 10 }}>
                                                    <Text style={{ fontSize: 11, fontFamily: "Poppins-SemiBold", color: "#2980B9" }}>Name : </Text>
                                                    <Text style={{ fontSize: 11, fontFamily: "Poppins-SemiBold", color: "#34495E" }}> {item.fName} {item.lName}</Text>
                                                </View>
                                                <View style={{ flexDirection: "row", marginLeft: 10 }}>
                                                    <Text style={{ fontSize: 11, fontFamily: "Poppins-SemiBold", color: "#2980B9" }}>Phone No : </Text>
                                                    <Text style={{ fontSize: 11, fontFamily: "Poppins-SemiBold", color: "#34495E" }}>{item.phone} </Text>
                                                </View>

                                                <View style={{ flexDirection: "row", marginLeft: 10, marginBottom: 10 }}>
                                                    <Text style={{ fontSize: 11, fontFamily: "Poppins-SemiBold", color: "#2980B9" }}>Email Id : </Text>
                                                    <Text style={{ fontSize: 11, fontFamily: "Poppins-SemiBold", color: "#34495E" }}>{item.email} </Text>
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
                                            item.id === clickId && state === true ?
                                                <>
                                                    <View style={{ width: "100%", flexDirection: "row", justifyContent: "space-between", marginTop: 10 }}>

                                                        <View style={{ width: "40%", flexDirection: "row", alignItems: "center", justifyContent: "center", backgroundColor: "#e74c3c", height: 40, marginBottom: 10, borderRadius: 10, marginLeft: 10 }}>
                                                            <TouchableOpacity onPress={() => setState(false)} >
                                                                <View style={{ width: "100%", flexDirection: "row", alignItems: "center", justifyContent: "center", height: 40, marginBottom: 10, borderRadius: 10 }}>
                                                                    <View style={{ width: "100%", flexDirection: "row", alignItems: "center", justifyContent: "center", }}>
                                                                        <Text style={{ color: "#fff", fontFamily: "Poppins-SemiBold", marginTop: 10, fontSize: 12 }}>Cancel</Text>
                                                                    </View>
                                                                </View>
                                                            </TouchableOpacity>
                                                        </View>

                                                        <View style={{ width: "40%", flexDirection: "row", alignItems: "center", justifyContent: "center", backgroundColor: "#2ecc71", height: 40, marginBottom: 10, borderRadius: 10, marginRight: 10 }}>
                                                            <TouchableOpacity onPress={() => handleAdd(item.id, item.fName, item.lName, item.uniqueId)}>
                                                                <View style={{ width: "100%", flexDirection: "row", alignItems: "center", justifyContent: "center", height: 40, marginBottom: 10, borderRadius: 10 }}>
                                                                    <View style={{ width: "100%", flexDirection: "row", alignItems: "center", justifyContent: "center", }}>
                                                                        <Text style={{ color: "#fff", fontFamily: "Poppins-SemiBold", marginTop: 10, fontSize: 12 }}>Add </Text>
                                                                    </View>
                                                                </View>
                                                            </TouchableOpacity>
                                                        </View>

                                                    </View>
                                                </>
                                                :
                                                <>

                                                </>



                                        }
                                    </TouchableOpacity>
                                </Card>

                            )
                        })
                    }
                </View>
            </ScrollView>
        </View>
    )
}