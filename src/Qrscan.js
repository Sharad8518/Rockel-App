import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Animated,
  Easing,
  Dimensions,
  Linking, Image
} from 'react-native'
import React, { useRef } from 'react'
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
import { showMessage } from 'react-native-flash-message';
import Feather from 'react-native-vector-icons/Feather';
import torch from "../assets/Icon/torch.png"
import torchOn from "../assets/Icon/torchOn.png"
import { useState, useEffect } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';

export default function Qrscan({ navigation }) {

  const [goNext, setGoNext] = useState(false);
  const [result, setResult] = useState('')

  const onSuccess = e => {
    // Linking.openURL(e.data).catch(err =>
    //   console.error('An error occured', err)
    // );
    console.log('e', e.data)
    setResult(e.data)
    showMessage({
      message: 'QR find successfully.',
      type: 'success',
    });
    setGoNext(true);
  };

  const [torchCheck, setTorchCheck] = useState(false)

  if (goNext) {
    navigation.navigate('Successfull', ({ result: result }));
  }
  const animatedValue = useRef(new Animated.Value(0)).current;
  const [isTop, setIsTop] = useState(true);

  const startAnimation = toValue => {
    Animated.timing(animatedValue, {
      toValue,
      duration: 1000,
      easing: Easing.linear,
      useNativeDriver: true
    }).start(() => {
      setIsTop(!isTop);
    })
  }

  useEffect(() => {
    startAnimation(isTop ? 1 : 0);
  }, [isTop]);

  const translateY = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, Dimensions.get('window').height - 620],
    extrapolate: 'clamp'
  })

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
          <View style={{ width: "80%", marginTop: 0 }}>
          

            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
              <View style={{ flexDirection: "row" }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <Feather name="arrow-left" size={25} style={{ color: "#777" }} color="#777" />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <Text style={{ fontSize: 18, fontFamily: "Poppins-SemiBold", color: "#000", marginLeft: 10 }}>Back</Text>
                </TouchableOpacity>
              </View>

              <View>
                {
                  torchCheck === true ?
                    <>
                      <TouchableOpacity onPress={() => setTorchCheck(false)}>
                        <Image source={torchOn} style={{ width: 30, height: 30 }} />
                      </TouchableOpacity>
                    </>
                    :
                    <>
                      <TouchableOpacity onPress={() => setTorchCheck(true)}>
                        <Image source={torch} style={{ width: 30, height: 30 }} />
                      </TouchableOpacity>
                    </>
                }
              </View>
            </View>
          </View>
          <Text  style={{color:"#000",marginTop:10,marginBottom:20}}>
            Please move Your Camera
            <Text style={styles.textBold}></Text> on the QR code.
          </Text>
        </>
      }
      customMarker={
        <View style={styles.container}>
          <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <View style={{ width: 40, height: 40, borderLeftColor: "#E74C3C", borderLeftWidth: 2, borderTopColor: "#E74C3C", borderTopWidth: 2, marginLeft: 5, borderRadius: 5 }}>
            </View>
            <View style={{ width: 40, height: 40, borderRightColor: "#E74C3C", borderRightWidth: 2, borderTopColor: "#E74C3C", borderTopWidth: 2, marginRight: 5, borderRadius: 5 }}>
            </View>

          </View>
          <View style={{ flexDirection: "row", justifyContent: "space-between", position: "absolute", bottom: 0 }}>
            <View style={{ width: 200, flexDirection: "row", justifyContent: "space-between" }}>
              <View style={{ width: 40, height: 40, borderBottomColor: "#E74C3C", borderBottomWidth: 2, borderLeftColor: "#E74C3C", borderLeftWidth: 2, borderRadius: 5 }}>
              </View>
              <View style={{ width: 40, height: 40, borderBottomColor: "#E74C3C", borderBottomWidth: 2, borderRightColor: "#E74C3C", borderRightWidth: 2, marginRight: 5, marginBottom: 5, borderRadius: 5 }}>
              </View>
            </View>
          </View>
          <Animated.View style={[styles.square, { transform: [{ translateY }] }]}>
            <LinearGradient colors={['rgba(255, 148, 112, 0.3)', 'rgba(255, 148, 112, 0.0)',]} style={{ height: 70 }}  >
            </LinearGradient>
          </Animated.View>
        </View>
      }

    
    />
  )
}

const styles = StyleSheet.create({
  container: {
    width: 200,
    height: 200,
    overflow: "hidden"
  },
  square: {
    width: 200,
    height: 70,
    borderTopColor: "#E74C3C",
    borderTopWidth: 2

  }
});