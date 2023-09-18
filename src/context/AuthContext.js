/* eslint-disable no-sequences */
/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React, { createContext, useState, useEffect } from 'react';
import { Keyboard } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { showMessage } from "react-native-flash-message";
import { useMutation } from '@apollo/client';
import { MUTATION_LOGIN_LONDON } from '../Graphql/Mutation';

export const AuthContext = createContext();



export const AuthProvider = ({ children }) => {

   

     const [bucketItem, setBucketItem] = useState([])
     const [vendorId,setVendorId] =useState()
     const [vendorType,setVendorType] =useState()
     const [venderName,setVendorName] =useState()
     const [useDiscount,setUserDiscount]=useState()

     const[check,setCheck] =useState("")

     

     const addCartHandler = (id, serviceName, servicePrice,vendorId,type,bhrapDiscount
        ,venderName ) => {
       setVendorId(vendorId)
       setVendorName(venderName)
      setUserDiscount(bhrapDiscount)
       setVendorType(type)
        setBucketItem(bucketItem => [...bucketItem, {
                serviceId: `${id}`,
                serviceName: `${serviceName}`,
                servicePrice: `${servicePrice}`,
               
            }]);
        }
      
        const cartRemove = (itemId) => {
            setBucketItem(current => current.filter(data => {
                return data.serviceId !== itemId
            }))
        }

     
    const [loginError, setLoginError] = useState(false);
    const [userInfo, setUserInfo] = useState();
    const [emptyError, setEmptyError] = useState(false);

    const [breakIf, setBreakIf] = useState(true)

    const [splashLoading, setSplashLoading] = useState(false)
    const[londonStattLogin,{data:userData}] = useMutation(MUTATION_LOGIN_LONDON)

    console.log("userData",userData)

    const loginHandel = async (username,password) => {
        Keyboard.dismiss();
        if(username === "" || password === ""){
       alert("Username & Password Empty")
        }else{
            londonStattLogin({
            variables:{
                "userName": `${username}`,
                "password": `${password}`
            }

            })
        }
        
       


        // if (parseInt(InputOTP) === parseInt(getOtp)) {
        //     setEmptyError(false);
        //     setBreakIf(true);
        //     setLoginError(false);
        //     userOtpLogin({
        //         variables: {
        //             "contact": `${getContact}`
        //         }
        //     });
        // } else {
        //     showMessage({
        //         message: "OTP not matched!!!",
        //         type: "danger",
        //     });
          
        // }

        



    }
    if (userData && breakIf) {
        AsyncStorage.setItem('userId', userData.londonStattLogin.londonId);
        AsyncStorage.setItem('userToken', userData.londonStattLogin.londonToken);
        setUserInfo(userData.londonStattLogin.londonToken);
        setBreakIf(false);
    }

    const isLoggedIn = async () => {
        try {
            setSplashLoading(true)
            let userInfo = await AsyncStorage.getItem('userToken');

            if (userInfo) {
                setUserInfo(userInfo)
            }
            setSplashLoading(false)
        } catch (e) {
            setSplashLoading(false)
        }
    }


    useEffect(() => {
        isLoggedIn();
    }, [])

  

    // console.log("Token", userData)
    // console.log("setToken", userInfo)



    const logOut = async () => {
        await setUserInfo();
        await AsyncStorage.removeItem('userToken');
        await AsyncStorage.removeItem('userId');
    }

    

    return (
        <AuthContext.Provider value={{
            loginHandel,
            check,
            // // userLoginLoading,
            userInfo,
            // // loginError,
            // splashLoading,
            // addCartHandler,
            // bucketItem,
            // emptyError,
            // vendorId,
            // vendorType,
            // venderName,
            // useDiscount,
            // setBucketItem,
            // cartRemove,
            // isLoggedIn,
            logOut,
         

           
          

        }}>
            {children}
        </AuthContext.Provider>
    );
}