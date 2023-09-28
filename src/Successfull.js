import { View, Text, StatusBar, TouchableOpacity, ActivityIndicator } from 'react-native'
import React ,{useState,useEffect}from 'react'
import Feather from 'react-native-vector-icons/Feather';
import { useMutation, useQuery } from '@apollo/client';
import { QUERY_GET_ALL_INVOICE_FREETOWN, QUERY_GET_ALL_INVOICE_ON_WAY, QUERY_GET_INVOICE_BY_ID,QUERY_GET_USER_BY_ID } from './Graphql/Query';
import { MUTATION_EDIT_INVOICE } from './Graphql/Mutation';
import { showMessage } from 'react-native-flash-message';
import AsyncStorage from  "@react-native-async-storage/async-storage"

export default function Successfull({ navigation, route }) {

  const [userId, setUserId] = useState();

  useEffect(() => {
    AsyncStorage.getItem('userId').then(id => setUserId(id), []);
  })

  const { data: userData, loading: userLoading } = useQuery(QUERY_GET_USER_BY_ID, {
    variables: {
      "userId": `${userId}`,
    }
  })
  console.log("data", data)

  const { result } = route.params;

  const { data, loading } = useQuery(QUERY_GET_INVOICE_BY_ID, {
    variables: {
      "invoiceId": `${result}`,
    }
  })

  console.log("data", data)

  const [editInvoice, { loading: invoiceLoding }] = useMutation(MUTATION_EDIT_INVOICE, {
    refetchQueries: [
      QUERY_GET_INVOICE_BY_ID,
      "getInvoiceById",
      QUERY_GET_ALL_INVOICE_FREETOWN,
      "getInvoiceFreetown",
      QUERY_GET_ALL_INVOICE_ON_WAY,
      "getInvoiceOnWay"
     


    ]
  })

  function handleClick() {
    if (userData && userData.getLondonById.role === "warehouse_london") {
      editInvoice({
        variables: {
          "editInvoiceInput": {
            "invoiceId": `${data && data.getInvoiceById.id}`,
            "status": "Warehouse_London"
          },
        }
      })
      showMessage({
        message: "Update Successfully",
        type: "success",
      });
      navigation.navigate("Home");
    } else {
      editInvoice({
        variables: {
          "editInvoiceInput": {
            "invoiceId": `${data && data.getInvoiceById.id}`,
            "status": "Freetown_London"
          },
        }
      })
      showMessage({
        message: "Update Successfully",
        type: "success",
      });
      navigation.navigate("FreetownHome");
    }
  }




  return (
    <View style={{ flexDirection: "column", alignItems: "center", backgroundColor: "#fff", height: "100%" }}>
      {

        loading ?
          <View style={{ flexDirection: "column", alignItems: "center", justifyContent: "center", marginTop: 100 }}>
            <ActivityIndicator size="large" color="#000" />
            <Text>Please Wait Loading</Text>
          </View>
          :
          <>
            <View style={{ backgroundColor: "#3498DB", height: 200, borderBottomLeftRadius: 30, borderBottomRightRadius: 30, width: "100%" }}>
              <StatusBar barStyle="light-content" hidden={false} backgroundColor="#3498DB" translucent={true} />
              <View style={{ flexDirection: "column", justifyContent: "center", alignItems: "center", marginTop: 70 }}>
                <View style={{ flexDirection: "row", width: "90%", justifyContent: "center", alignItems: "center" }}>
                  <Text style={{ fontSize: 19, fontFamily: "Poppins-SemiBold", color: "#fff", marginTop: 50 }}>Scan Successfully</Text>
                </View>
              </View>
            </View>
            <Text style={{ marginTop: 20, fontFamily: "Poppins-SemiBold", color: "#000" }}>Do you want to update status to </Text>
            <Text style={{ fontFamily: "Poppins-SemiBold", color: "#3498DB" }}>Load to container</Text>
            {
              data && data.getInvoiceById === null ?
                <View style={{ width: "80%", flexDirection: "row", alignItems: "center", justifyContent: "center", height: 50, marginTop: 15, }}>
                  <Text style={{ color: "red" }}>Data Failed Scan Again</Text>
                </View>

                :
                <View style={{ width: "80%", flexDirection: "row", alignItems: "center", justifyContent: "center", backgroundColor: "#2ECC71", height: 50, marginTop: 15, borderRadius: 10 }}>
                  <TouchableOpacity onPress={() => handleClick()}>
                    <View style={{ width: "100%", flexDirection: "row", alignItems: "center", justifyContent: "center", backgroundColor: "#2ECC71", height: 50, borderRadius: 10 }}>
                      <View style={{ width: "100%", flexDirection: "row", alignItems: "center", justifyContent: "center", backgroundColor: "#2ECC71", height: 50, borderRadius: 10 }}>
                        <Text style={{ fontSize: 17, color: "#fff", fontFamily: "Poppins-SemiBold" }}>Update Status</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
            }
            <View style={{ width: "80%", flexDirection: "row", alignItems: "center", justifyContent: "center", backgroundColor: "#1ABC9C", height: 50, marginTop: 15, borderRadius: 10 }}>
              <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                <View style={{ width: "100%", flexDirection: "row", alignItems: "center", justifyContent: "center", backgroundColor: "#1ABC9C", height: 50, borderRadius: 10 }}>
                  <View style={{ width: "100%", flexDirection: "row", alignItems: "center", justifyContent: "center", backgroundColor: "#1ABC9C", height: 50, borderRadius: 10 }}>
                    <Text style={{ fontSize: 17, color: "#fff", fontFamily: "Poppins-SemiBold" }}>Scan Again</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>

            <View style={{ width: "80%", flexDirection: "row", alignItems: "center", justifyContent: "center", backgroundColor: "#9B59B6", height: 50, marginTop: 15, borderRadius: 10 }}>
              <Text style={{ fontSize: 17, color: "#fff", fontFamily: "Poppins-SemiBold" }}>Update by Id</Text>
            </View>


            <View style={{ flexDirection: "row", width: "80%", justifyContent: "space-between", marginTop: 30 }}>
              <Text style={{ color: "#3498DB", fontFamily: "Poppins-SemiBold" }}>Booking No :</Text>
              <Text style={{ color: "#000", fontFamily: "Poppins-SemiBold" }}>{data && data.getInvoiceById.bookingNo}</Text>
            </View>

            <View style={{ flexDirection: "row", width: "80%", justifyContent: "space-between", marginTop: 10 }}>
              <Text style={{ color: "#3498DB", fontFamily: "Poppins-SemiBold" }}>Invoice No :</Text>
              <Text style={{ color: "#000", fontFamily: "Poppins-SemiBold" }}>{data && data.getInvoiceById.invoiceNumber}</Text>
            </View>
            
            <View style={{ position: "absolute", bottom: 0 }}>
              <View style={{ width: 300, backgroundColor: "#E74C3C", height: 50, marginBottom: 1, flexDirection: "row", justifyContent: "center", alignItems: "center", borderRadius: 10 }}>
                <Text style={{ fontSize: 17, color: "#fff", fontFamily: "Poppins-SemiBold" }}>Cancel</Text>
              </View>

            </View>
          </>
      }
    </View>
  )
}