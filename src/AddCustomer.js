import { View, Text,StatusBar,TouchableOpacity, ScrollView,Image } from 'react-native'
import React ,{useState}from 'react'
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Card,TextInput } from 'react-native-paper';
import DropDownPicker from 'react-native-dropdown-picker';
import { useMutation, useQuery } from '@apollo/client';
import { MUTATION_CUSTOMER } from './Graphql/Mutation';
import { QUERY_ALL_CUSTOMER } from './Graphql/Query';
import { showMessage } from 'react-native-flash-message';

export default function AddCustomer({navigation}) {

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
      {label: 'Apple', value: 'apple'},
      {label: 'Banana', value: 'banana'}
    ]);

    const[fName,setFName] =useState("")
    const[lName,setLName] =useState("")
    const[company,setCompany] =useState("")
    const[email,setEmail] =useState("")
    const[phone1,setPhone1] =useState("")
    const[phone2,setPhone2] =useState("")
    const[address1,setAddress1] =useState("")
    const[address2,setAddress2] =useState("")
    const[postCode,setPostCode] =useState("")
    const[webPage,SetWebPage] =useState("")
    const[notes,setNotes] =useState("")

   const[createCustomer] = useMutation(MUTATION_CUSTOMER);
   function handleClick(){
    createCustomer({
    variables:{
      "customerInput": {
        "area": `${value}`,
        "company": `${company}`,
        "email": `${email}`,
        "fName": `${fName}`,
        "notes": `${notes}`,
        "lName": `${lName}`,
        "phoneOne": `${phone1}`,
        "postCode": `${postCode}`,
        "addressOne": `${address1}`,
        "addresstwo": `${address2}`,
        "phoneTwo": `${phone2}`,
        "webPage": `${webPage}`,
      }
    }
    })
    setFName("")
    setLName("")
    setCompany("")
    setEmail("")
    setPhone1("")
    setPhone2("")
    setAddress1("")
    setAddress2("")
    setPostCode("")
    SetWebPage("")
    setNotes("")
    setValue(null)
    showMessage({
      message: "Customer Add Successfully",
      type: "success",
    });
    navigation.navigate("Customer")
   }

  // const{data,loading} =  useQuery(QUERY_ALL_CUSTOMER)
  
  // console.log("data",data)

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
       <Text style={{fontSize:18,fontFamily:"Poppins-SemiBold",color:"#fff",marginLeft:10}}>Add Customer</Text>
       </View>
       </View>
  </View>

    <View style={{flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
        <View style={{width:"90%",marginTop:10}}>
        <TextInput
      mode="outlined"
      label="First Name"
      placeholder="First Name"
      onChangeText={(e)=>setFName(e)}
      value={fName}
    />
    </View>

    <View style={{width:"90%",marginTop:10}}>
        <TextInput
      mode="outlined"
      label="Last Name"
      placeholder="Last Name"
  style={{fontFamily:"Poppins-SemiBold"}}
onChangeText={(e)=>setLName(e)}
value={lName} 
    />
    </View>

    <View style={{width:"90%",marginTop:10}}>
        <TextInput
      mode="outlined"
      label="Company"
      placeholder="Company"
      onChangeText={(e)=>setCompany(e)}
      value={company}
      />
    </View>

    <View style={{width:"90%",marginTop:10}}>
        <TextInput
      mode="outlined"
      label="Email"
      placeholder="Email"
      onChangeText={(e)=>setEmail(e)}
      value={email}
    />
    </View>

    <View style={{width:"90%",marginTop:10}}>
        <TextInput
      mode="outlined"
      label="Phone 1"
      placeholder="Phone 1"
      keyboardType = 'numeric'
      value={phone1}
      onChangeText={(e)=>setPhone1(e)}
    />
    </View>

    <View style={{width:"90%",marginTop:10}}>
        <TextInput
      mode="outlined"
      label="Phone 2"
      placeholder="Phone 2"
      keyboardType = 'numeric'
      onChangeText={(e)=>setPhone2(e)}
      value={phone2}
    />
    </View>

    <View style={{width:"90%",marginTop:10}}>
        <TextInput
      mode="outlined"
      label="Address 1"
      placeholder="Address 1"
      multiline={true}
      numberOfLines={4}
      onChangeText={(e)=>setAddress1(e)}
      value={address1}
      
    />
    </View>

    <View style={{width:"90%",marginTop:10}}>
        <TextInput
      mode="outlined"
      label="Address 2"
      placeholder="Address 2"
      multiline={true}
      numberOfLines={4}
      value={address2}
      onChangeText={(e)=>setAddress2(e)}/>
    </View>

    <View style={{width:"90%",marginTop:10}}>
        <TextInput
      mode="outlined"
      label="Post Code"
      placeholder="Post Code"
      keyboardType = 'numeric'
      onChangeText={(e)=>setPostCode(e)}
      value={postCode}/>
    </View>

    <View style={{width:"90%",marginTop:10}}>
        <TextInput
      mode="outlined"
      label="Web Page"
      placeholder="Web Page"
      onChangeText={(e)=>SetWebPage(e)}
      value={webPage}/>
    </View>

    <View style={{width:"90%",marginTop:10}}>
        <TextInput
      mode="outlined"
      label="Notes"
      placeholder="Notes"
      multiline={true}
      numberOfLines={4}
      onChangeText={(e)=>setNotes(e)}
      value={notes}
    />
    </View>

    
    <View style={{width:"90%",marginTop:10}}>
      <Text style={{marginBottom:5,fontFamily:"Poppins-SemiBold",color:"#000"}}>Area</Text>
    <DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      placeholder="Select Area"
    />
    </View>


    <View style={{width:"90%",marginTop:15,flexDirection:"row",alignItems:"center",justifyContent:"center",}}>
    <View style={{width:"50%",backgroundColor:"#3498DB",flexDirection:"row",alignItems:"center",justifyContent:"center",height:50,marginBottom:10,borderRadius:10}}>
        <TouchableOpacity onPress={()=>handleClick()}>
        <View style={{flexDirection:"row",alignItems:"center",justifyContent:"center",width:"100%",height:"100%"}}>
            <View style={{flexDirection:"row",alignItems:"center",justifyContent:"center",width:"100%",height:"100%"}}>
       <Text style={{fontSize:20,color:"#fff",fontFamily:"Poppins-SemiBold"}}>Add</Text>
       </View>
       </View>
       </TouchableOpacity>
    </View>
    </View>


    </View>


  </ScrollView>
    </View>
  )
}