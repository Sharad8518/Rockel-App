import {   AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Animated,
    Linking,Image } from 'react-native'
import React from 'react'
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
import { showMessage } from 'react-native-flash-message';
import Feather from 'react-native-vector-icons/Feather';
import torch from "../assets/Icon/torch.png"
import torchOn from "../assets/Icon/torchOn.png"
import { useState,useEffect } from 'react';
import * as Animatable from 'react-native-animatable';

export default function Qrscan({navigation}) {

  const [goNext, setGoNext] = useState(false);
  const [result,setResult] =useState('')

   const onSuccess = e => {
        // Linking.openURL(e.data).catch(err =>
        //   console.error('An error occured', err)
        // );
        console.log('e',e.data)
        setResult(e.data)
        showMessage({
          message: 'QR find successfully.',
          type: 'success',
      });
      setGoNext(true);
      };
   
      const[torchCheck,setTorchCheck] = useState(false)

      if (goNext) {
        navigation.navigate('Successfull', ({ result: result }));
      }
    

  return (
    <QRCodeScanner
    onRead={onSuccess}
    reactivate={true}
    showMarker={true}
    flashMode={
      torchCheck === true ?
      RNCamera.Constants.FlashMode.torch
      :
      RNCamera.Constants.FlashMode.off
    }
   

    topContent={
         <>
         <View style={{width:"80%",marginTop:10}}>
          <View>
         <TouchableOpacity  onPress={()=>navigation.goBack()}>
       <Text style={{fontSize:18,fontFamily:"Poppins-SemiBold",color:"#000",marginLeft:10}}>Go Back</Text>
       </TouchableOpacity>
       </View>
       
       <View style={{flexDirection:"row",justifyContent:"space-between"}}>
        <View style={{flexDirection:"row"}}>
        <TouchableOpacity onPress={()=>navigation.goBack()}>
       <Feather name="arrow-left" size={25} style={{color:"#777"}} color="#777"/>
       </TouchableOpacity>

       <TouchableOpacity  onPress={()=>navigation.goBack()}>
       <Text style={{fontSize:18,fontFamily:"Poppins-SemiBold",color:"#000",marginLeft:10}}>Back</Text>
       </TouchableOpacity>
       </View>

       <View>
        {
            torchCheck === true ?
            <>
        <TouchableOpacity onPress={()=>setTorchCheck(false)}>
       <Image  source={torchOn} style={{width:30,height:30}}/>
       </TouchableOpacity>
            </>
            :
            <>
        <TouchableOpacity onPress={()=>setTorchCheck(true)}>
       <Image  source={torch} style={{width:30,height:30}}/>
       </TouchableOpacity>
            </>
        }
       </View>
       </View>
       </View>
      <Text style={styles.centerText}>
        Please move Your Camera
        <Text style={styles.textBold}></Text> on the QR code.
      </Text>
      </>
    }
    customMarker={
      <View style={{borderColor:"#E74C3C",borderWidth:3,width:200,height:200,borderRadius:20,overflow:"hidden"}}>
       <Animatable.View  animation="fadeOutDownBig" easing="ease-out"  delay={2000} duration={5000} style={{width:"100%",height:"100%",backgroundColor:"rgba(255, 69, 0, 0.3)",borderRadius:20,}}>
       </Animatable.View>
      </View>
    }

    bottomContent={
      <TouchableOpacity style={styles.buttonTouchable} onPress={()=>navigation.navigate("Successfull")}>
        <Text style={styles.buttonText}>OK. Got it!</Text>
      </TouchableOpacity>
    }
    
  />
  )
}

const styles = StyleSheet.create({
    centerText: {
      flex: 1,
      fontSize: 15,
      padding: 10,
      color: '#000',
      fontFamily:"Poppins-SemiBold",
      textAlign:"center"

    },
    textBold: {
      fontWeight: '500',
      color: '#000'
    },
    buttonText: {
      fontSize: 21,
      color: '#fff',
      width:100,
      height:40,
      backgroundColor:"rgb(0,122,255)",
      borderRadius:10,
      textAlign:"center",
      marginTop:5
      
    
    },
    buttonTouchable: {
      padding: 16,
      flexDirection:"row",
      alignItems:"center",
      justifyContent:"center"

    }
  });