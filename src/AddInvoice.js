import { View, Text, StatusBar, TouchableOpacity, ScrollView, Image, StyleSheet, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Card, TextInput, useTheme } from 'react-native-paper';
import DropDownPicker from 'react-native-dropdown-picker';
import { useMutation, useQuery } from '@apollo/client';
import { MUTATION_ADD_INVOICE } from './Graphql/Mutation';

export default function AddInvoice() {

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: 'Apple', value: 'apple' },
    { label: 'Banana', value: 'banana' }
  ]);
  const theme = useTheme();
  const { colors } = theme;

  const itemIdGen = Math.floor(1000 + Math.random() * 9000);

  const [formValues3, setFormValues3] = useState([{ itemId: itemIdGen, itemType: "", itemDescription: "", height: "", length: "", weight: "", quantity: "", costPerItem: "" }]);
  let addFormFields = () => {
    setFormValues3([...formValues3, { itemId: itemIdGen, itemType: "", itemDescription: "", length: "", weight: "", quantity: "", costPerItem: "" }]);
  };

  let handleChange = (e, i, nameValue) => {
    let newFormValues = [...formValues3];
    newFormValues[i][nameValue] = e;
    setFormValues3(newFormValues);
  };

  let removeFormFields = (i) => {
    let newFormValues = [...formValues3];
    newFormValues.splice(i, 1);
    setFormValues3(newFormValues);
  };

  const [recipientName, setRecipentName] = useState("")
  const [email, setEmail] = useState("")
  const [phone1, setPhone1] = useState("")
  const [phone2, setPhone2] = useState("")
  const [phone3, setPhone3] = useState("")
  const [address1, setAddress1] = useState("")
  const [address2, setAddress2] = useState("")
  const [customerId, setCustomerId] = useState("")
  const [containerId, setContainerId] = useState("")
  const [totalCost, setTotalCost] = useState("")

  const customerIdGen = Math.floor(1000 + Math.random() * 9000);
  const containerIdGen = Math.floor(1000 + Math.random() * 9000);
  const invoiceNimber = Math.floor(1000 + Math.random() * 9000);

  const [createInvoice, { loading }] = useMutation(MUTATION_ADD_INVOICE)

  function handleClick() {
    createInvoice({
      variables: {
        "invoiceInput": {
          "addressOne": `${address1}`,
          "addressTwo": `${address2}`,
          "containerUniqueId": `${containerIdGen}`,
          "customerUniqueId": `${customerIdGen}`,
          "email": `${email}`,
          "invoiceNumber": `${invoiceNimber}`,
          "items": formValues3,
          "phoneOne": `${phone1}`,
          "phoneThree": `${phone3}`,
          "phoneTwo": `${phone2}`,
          "recipientName": `${recipientName}`,
          "totalCost": `${totalCost}`
        }
      }
    })
    showMessage({
      message: "Invoice Add Successfully",
      type: "success",
    });
    navigation.navigate("Invoice")
  }


  return (
    <View style={{ backgroundColor: "#fff", height: "100%" }}>
      <ScrollView>
        <StatusBar barStyle="light-content" hidden={false} backgroundColor="#3498DB" translucent={true} />
        <View style={{ backgroundColor: "#3498DB", height: 200, borderBottomLeftRadius: 30, borderBottomRightRadius: 30 }}>

          <View style={{ flexDirection: "column", justifyContent: "center", alignItems: "center", marginTop: 70 }}>
            <View style={{ flexDirection: "row", width: "90%" }}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Feather name="arrow-left" size={25} style={{ color: "#fff" }} />
              </TouchableOpacity>
              <Text style={{ fontSize: 18, fontFamily: "Poppins-SemiBold", color: "#fff", marginLeft: 10 }}>Add Invoice</Text>
            </View>
          </View>
        </View>

        <View style={{ flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
          <View style={{ width: "90%", marginTop: 10 }}>
            <TextInput
              mode="outlined"
              label="Recipient Name"
              placeholder="Recipient Name"
              onChangeText={(e) => setRecipentName(e)}
              value={recipientName}/>
          </View>

          <View style={{ width: "90%", marginTop: 10 }}>
            <TextInput
              mode="outlined"
              label="Email"
              placeholder="Email"
              onChangeText={(e) => setEmail(e)}
              value={email}/>
          </View>


          <View style={{ width: "90%", marginTop: 10 }}>
            <TextInput
              mode="outlined"
              label="Phone 1"
              placeholder="Phone 1"
              onChangeText={(e) => setPhone1(e)}
              value={phone1}

            />
          </View>

          <View style={{ width: "90%", marginTop: 10 }}>
            <TextInput
              mode="outlined"
              label="Phone 2"
              placeholder="Phone 2"
              onChangeText={(e) => setPhone2(e)}
              value={phone2}
            />
          </View>


          <View style={{ width: "90%", marginTop: 10 }}>
            <TextInput
              mode="outlined"
              label="Phone 3"
              placeholder="Phone 3"
              onChangeText={(e) => setPhone3(e)}
              value={phone3}
            />
          </View>

          <View style={{ width: "90%", marginTop: 10 }}>
            <TextInput
              mode="outlined"
              label="Address 1"
              placeholder="Address 1"
              multiline={true}
              numberOfLines={4}
              onChangeText={(e) => setAddress1(e)}
              value={address1}
            />
          </View>

          <View style={{ width: "90%", marginTop: 10 }}>
            <TextInput
              mode="outlined"
              label="Address 2"
              placeholder="Address 2"
              multiline={true}
              numberOfLines={4}
              onChangeText={(e) => setAddress2(e)}
              value={address2}
            />
          </View>

          <View style={{ width: "90%", marginTop: 12 }}>
            <Text style={{ marginBottom: 5, fontFamily: "Poppins-SemiBold", color: "#000" }}>Country</Text>
            <DropDownPicker
              open={open}
              value={value}
              items={items}
              setOpen={setOpen}
              setValue={setValue}
              setItems={setItems}
              placeholder="Select Country"
            />
          </View>

          <View style={{ width: "90%", marginTop: 10 }}>
            <TextInput
              mode="outlined"
              label="Customer Id"
              placeholder="Customer Id"
              onChangeText={(e) => setCustomerId(e)}
              value={customerId}/>
          </View>

          <View style={{ width: "90%", marginTop: 10 }}>
            <TextInput
              mode="outlined"
              label="Container Id"
              placeholder="Container Id"
              onChangeText={(e) => setContainerId(e)}
              value={containerId}/>
          </View>

          <View style={{ width: "90%", marginTop: 10 }}>
            <TextInput
              mode="outlined"
              label="Total Cost"
              placeholder="Total Cost"
              onChangeText={(e) => setTotalCost(e)}
              value={totalCost}/>
          </View>

          <View style={{ width: "100%", marginTop: 10, flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
            <Text style={{ fontSize: 18, fontFamily: "Poppins-SemiBold", color: "#000" }}>Add Item</Text>
            <View style={{ width: "95%" }}>
              {
                formValues3.map((input, key) => (

                  <View style={{ backgroundColor: "#D9D9D9", flexDirection: "column", alignItems: "center", justifyContent: "center", borderRadius: 10, marginTop: 15 }}>
                    <View style={{ width: "95%", marginTop: 5 }}>
                      <Text style={{ fontFamily: "Poppins-SemiBold", color: "#000" }}>Item Type</Text>
                      <View style={{ width: "100%", flexDirection: "column", justifyContent: "center", alignItems: "center", marginTop: 3 }}>

                        <TextInput placeholder='Item Type' style={{ width: "100%", padding: 1, height: 35, borderColor: "#000", borderWidth: 1 }} onChangeText={(text) => handleChange(text, key, 'itemType')} value={input.itemType} underlineColor="transparent" theme={{ ...theme, colors: { ...colors, primary: 'transparent' } }} />

                      </View>
                    </View>
                    <View style={{ width: "95%", marginTop: 5 }}>
                      <Text style={{ fontFamily: "Poppins-SemiBold", color: "#000" }}>Item Description</Text>
                      <View style={{ width: "100%", flexDirection: "row", justifyContent: "center", alignItems: "center", marginTop: 3, borderRadius: 15 }}>
                        <TextInput placeholder='Item Description' style={{ width: "100%", padding: 1, height: 60, borderColor: "#000", borderWidth: 1 }} underlineColor="transparent" theme={{ ...theme, colors: { ...colors, primary: 'transparent' } }} multiline={true}
                          numberOfLines={4}
                          onChangeText={(text) => handleChange(text, key, 'itemDescription')} value={input.itemDescription}
                        />
                      </View>
                    </View>

                    <View style={{ flexDirection: "row", justifyContent: "space-between", width: "95%" }}>
                      <View style={{ width: "50%", marginTop: 5 }}>
                        <Text style={{ fontFamily: "Poppins-SemiBold", color: "#000" }}>Height</Text>
                        <View style={{ width: "95%", flexDirection: "column", justifyContent: "center", alignItems: "center", marginTop: 3 }}>

                          <TextInput placeholder='Height' style={{ width: "100%", padding: 1, height: 35, borderColor: "#000", borderWidth: 1 }} underlineColor="transparent" theme={{ ...theme, colors: { ...colors, primary: 'transparent' } }} onChangeText={(text) => handleChange(text, key, 'height')} value={input.height} />

                        </View>
                      </View>

                      <View style={{ width: "50%", marginTop: 5 }}>
                        <Text style={{ fontFamily: "Poppins-SemiBold", color: "#000" }}>Length</Text>
                        <View style={{ width: "98%", flexDirection: "column", justifyContent: "center", alignItems: "center", marginTop: 3 }}>

                          <TextInput placeholder='Length' style={{ width: "100%", padding: 1, height: 35, borderColor: "#000", borderWidth: 1 }} underlineColor="transparent" theme={{ ...theme, colors: { ...colors, primary: 'transparent' } }} onChangeText={(text) => handleChange(text, key, 'length')} value={input.length} />

                        </View>
                      </View>



                    </View>

                    <View style={{ flexDirection: "row", justifyContent: "space-between", width: "95%" }}>
                      <View style={{ width: "100%", marginTop: 5 }}>
                        <Text style={{ fontFamily: "Poppins-SemiBold", color: "#000" }}>Weight</Text>
                        <View style={{ width: "95%", flexDirection: "column", justifyContent: "center", alignItems: "center", marginTop: 3 }}>

                          <TextInput placeholder='Height' style={{ width: "100%", padding: 1, height: 35, borderColor: "#000", borderWidth: 1 }} underlineColor="transparent" theme={{ ...theme, colors: { ...colors, primary: 'transparent' } }} onChangeText={(text) => handleChange(text, key, 'weight')} value={input.weight} />

                        </View>
                      </View>
                    </View>

                    <View style={{ flexDirection: "row", justifyContent: "space-between", width: "95%" }}>
                      <View style={{ width: "50%", marginTop: 5 }}>
                        <Text style={{ fontFamily: "Poppins-SemiBold", color: "#000" }}>Quantity</Text>
                        <View style={{ width: "95%", flexDirection: "column", justifyContent: "center", alignItems: "center",marginTop:3}}>

                          <TextInput placeholder='Quantity' style={{ width: "100%", padding: 1, height: 35, borderColor: "#000", borderWidth: 1 }} underlineColor="transparent" theme={{ ...theme, colors: { ...colors, primary: 'transparent' } }}
                            onChangeText={(text) => handleChange(text, key, 'quantity')} value={input.quantity}

                          />

                        </View>
                      </View>

                      <View style={{ width: "50%", marginTop: 5 }}>
                        <Text style={{ fontFamily: "Poppins-SemiBold", color: "#000" }}>Cost Per Item</Text>
                        <View style={{ width: "98%", flexDirection: "column", justifyContent: "center", alignItems: "center", marginTop: 3}}>

                          <TextInput placeholder='Cost Per Item' style={{ width: "100%", padding: 1, height: 35, borderColor: "#000", borderWidth: 1 }} underlineColor="transparent" theme={{ ...theme, colors: { ...colors, primary: 'transparent' } }} onChangeText={(text) => handleChange(text, key, 'costPerItem')} value={input.costPerItem} />

                        </View>
                      </View>



                    </View>


                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", marginBottom: 10 }}>
                      <TouchableOpacity onPress={addFormFields}>
                        <View style={{ width: 130, backgroundColor: "#000", height: 45, marginTop: 10, borderRadius: 10, flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                          <Feather name="plus" color="#fff" size={25} />
                          <Text style={{ color: "#fff" }}>Add More</Text>
                        </View>
                      </TouchableOpacity>

                      {
                        formValues3.length === 1 ? <Text></Text> :
                          <TouchableOpacity onPress={() => removeFormFields(key)}>
                            <View style={{ width: 130, backgroundColor: "#000", height: 45, marginTop: 10, borderRadius: 10, flexDirection: "row", alignItems: "center", justifyContent: "center", marginLeft: 5 }}>
                              <Feather name="minus" color="#fff" size={25} />
                              <Text style={{ color: "#fff" }}>Less</Text>
                            </View>
                          </TouchableOpacity>
                      }

                    </View>

                  </View>


                  //   {/* <View style={styles.inputContainer}>
                  //     <TextInput placeholder="Picture" keyboardType="number-pad" placeholderTextColor="black" style={styles.input} onChangeText={(text) => handleChange(text, key, 'picture')} value={input.picture} />
                  //   </View> */}

                  //   <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginBottom: 15, marginTop: 10 }}>
                  //     <TouchableOpacity onPress={addFormFields}>
                  //       <View
                  //         style={styles.nextBtn}>
                  //         <Text>Add More</Text>
                  //       </View>
                  //     </TouchableOpacity>
                  //     {
                  //       formValues3.length === 1 ? <Text></Text> :
                  //         <TouchableOpacity onPress={() => removeFormFields(key)}>
                  //           <View >
                  //            <Text>Less</Text>
                  //           </View>
                  //         </TouchableOpacity>
                  //     }


                ))}
            </View>

          </View>
          <View style={{ width: "90%", marginTop: 15, flexDirection: "row", alignItems: "center", justifyContent: "center", }}>
            {
              loading ?
                <View style={{ flexDirection: "row", alignSelf: "center", justifyContent: "flex-end" }}>
                  <ActivityIndicator size="large" color="#000" />
                </View>

                :
                <>
                  <View style={{ width: "50%", backgroundColor: "#3498DB", flexDirection: "row", alignItems: "center", justifyContent: "center", height: 50, marginBottom: 10, borderRadius: 10 }}>
                    <TouchableOpacity onPress={() => handleClick()} >
                      <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", width: "100%", height: "100%" }}>
                        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", width: "100%", height: "100%" }}>
                          <Text style={{ fontSize: 20, color: "#fff", fontFamily: "Poppins-SemiBold" }}>Add</Text>
                        </View>
                      </View>
                    </TouchableOpacity>
                  </View>
                </>

            }

          </View>
        </View>


      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  FormHeading: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
    marginVertical: 10,
    marginTop: 20,
    fontWeight: 'bold'
  },

  textBox: {
    fontSize: 15,
    borderColor: 'skyblue',
    borderBottomWidth: 2,
    padding: 10,
    marginVertical: 15,
    color: '#11A05F'
  },

  mainCardView: {
    marginTop: 20,
    borderRadius: 20,
    marginHorizontal: 20,
    backgroundColor: '#bdc3c7'
  },

  inputContainer: {
    marginTop: 10,
    marginHorizontal: 30
  },
  chooseBox: {
    width: 200,
    height: 40,
    backgroundColor: "#2ecc71",
    marginTop: 10,
    marginLeft: 25
  },
  chooseBox2: {
    width: 310,
    height: 40,
    backgroundColor: "#3498db",
    marginTop: 5,
    marginLeft: 25,
    marginBottom: 20
  },

  input: {
    color: '#000',
    paddingLeft: 30,
    borderColor: '#000',
    borderBottomWidth: 2,
    flex: 1,
    fontSize: 12,
    marginBottom: 10
  },
  flatBox: {
    width: 80,
    height: 80,
    backgroundColor: "#fff",
    flexDirection: "row",
    borderRadius: 20,
    marginTop: 5,
    marginLeft: 10,
  },
  imgStyle: {
    width: 74,
    height: 74,
    borderRadius: 20,
    marginTop: 3,
    marginLeft: 3
  },
  Mainbox: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },

  inputIcon: { marginTop: 15, position: 'absolute' },

  pickerChoosing: {
    flex: 1,
    borderColor: '#fff',
    borderBottomWidth: 2,
    marginTop: 8,
    color: '#11A05F',
    marginHorizontal: 30
  },
});
