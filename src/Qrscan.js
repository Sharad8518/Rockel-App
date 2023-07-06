import {   AppRegistry,
    StyleSheet,
    Text,
    TouchableOpacity,
    Linking } from 'react-native'
import React from 'react'
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
import { View } from 'react-native-animatable';

export default function Qrscan() {

   const onSuccess = e => {
        Linking.openURL(e.data).catch(err =>
          console.error('An error occured', err)
        );
      };
  return (
    <QRCodeScanner
    onRead={onSuccess}
    flashMode={RNCamera.Constants.FlashMode.torch}
    // topContent={
    //   <Text style={styles.centerText}>
    //     Go to{' '}
    //     <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text> on
    //     your computer and scan the QR code.
    //   </Text>
    // }
    bottomContent={
        <View style={{flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
      <TouchableOpacity style={styles.buttonTouchable}>
        <Text style={styles.buttonText}>Done</Text>
      </TouchableOpacity>
      </View>
    }
  />
  )
}

const styles = StyleSheet.create({
    centerText: {
      flex: 1,
      fontSize: 18,
      padding: 32,
      color: '#777'
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