import { View, Text, Dimensions, TextInput, TouchableOpacity, Image, Pressable, Button, Alert } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import ChevronIcon from "../Assert/Chevron.png";
import FrameIcon from "../Assert/Frame.png";
import auth from '@react-native-firebase/auth';

const LoginScreen = ({ navigation }) => {
    const { width } = Dimensions.get("window");
    const [mobileNumber, setMobileNumber] = useState(0);
    const [showOtp, setShowOtp] = useState(false);
    const onChangeNavigate = () => {
        setShowOtp(true);
        signInWithPhoneNumber()
    }
    const [confirm, setConfirm] = useState(null);
    const [code, setCode] = useState('');

    // Handle login
    function onAuthStateChanged(user) {
        if (user) {
            // Some Android devices can automatically process the verification code (OTP) message, and the user would NOT need to enter the code.
            // Actually, if he/she tries to enter it, he/she will get an error message because the code was already used in the background.
            // In this function, make sure you hide the component(s) for entering the code and/or navigate away from this screen.
            // It is also recommended to display a message to the user informing him/her that he/she has successfully logged in.
        }
    }

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
    }, []);

    // Handle the button press
    async function signInWithPhoneNumber() {
        if (mobileNumber.length == 10) {
            const confirmation = await auth().signInWithPhoneNumber(mobileNumber);
            setConfirm(confirmation);
        }
        else {
            Alert.alert("Invaild Mobile Number")
        }
    }

    async function confirmCode() {
        if (code) {
            try {
                await confirm.confirm(code);
            } catch (error) {
                console.log('Invalid code.');
            }
            navigation.navigate("Bottom")
        }
        else {
            Alert.alert("Code")
        }
    }

    return (
        <View className="h-full" style={{ width: width }}>
            {showOtp ?
                <View className="flex flex-col justify-between  space-y-3 h-full  bg-white p-5 py-5">
                    <View className="flex flex-col space-y-5">
                        <TouchableOpacity onPress={() => setShowOtp(false)} className="py-3">
                            <Image tintColor="#000000" source={FrameIcon} />
                        </TouchableOpacity>
                        <Text  className="text-2xl font-PoppinsSemiBold text-black">
                            Enter Verification code
                        </Text>
                        <View className="flex flex-col space-y-3">
                            <Text  className="text-base font-PoppinsMedium text-black">
                                Code
                            </Text>
                            <TextInput keyboardType='numeric' maxLength={6} className="border-2 h-12 rounded-md w-full px-3 font-PoppinsSemiBold" value={code} onChangeText={(text) => setCode(text)} />
                        </View>
                    </View>
                    <View className="flex flex-row items-center justify-between space-x-2">
                        <TouchableOpacity>
                            <Text  className="text-base font-semibold text-[#53B175] font-PoppinsSemiBold">
                                Resend Code
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => confirmCode()} className="w-14 h-14 flex-col items-center justify-center rounded-full bg-[#53B175]">
                            <Image className="w-5 h-5" tintColor="#FFFFFF" source={ChevronIcon} />
                        </TouchableOpacity>
                    </View>
                </View> :

                <View className="flex flex-col h-full  bg-gray-100">
                    <View className="flex flex-col h-[65%] space-y-3 p-3">
                    </View>
                    {!confirm ?
                        <View className="flex flex-col justify-center h-[35%] space-y-5 p-5 border-2 shadow-2xl bg-white border-white  rounded-t-3xl">
                            <Text  className="text-lg text-black font-PoppinsSemiBold"> Mobile Number </Text>
                            <View className="w-full flex flex-row space-x-1 items-center justify-start border-2 h-12 rounded-md  bg-white border-gray-300">
                                <View className="w-[12%] h-full flex flex-col items-center justify-center bg-gray-300 border-gray-200">
                                    <Text  className="text-sm  text-black font-PoppinsMedium">+91</Text>
                                </View>
                                <TextInput className="font-PoppinsMedium" keyboardType='numeric' maxLength={10} placeholder='Enter a Mobile Number' value={mobileNumber} onChangeText={(text) => setMobileNumber(text)} />
                            </View>
                            {mobileNumber.length == 10 ?
                                <Pressable onPress={() => onChangeNavigate()} className="flex flex-col items-center justify-center bg-[#8344FF] border-[#8344FF] border-2 h-12 rounded-full  cursor-pointer">
                                    <Text className="text-white text-base font-PoppinsSemiBold">SEND OTP</Text>
                                </Pressable> : <Pressable className="flex flex-col items-center justify-center bg-[#8344FF] border-[#8344FF]  h-12 rounded-full opacity-50" />}
                        </View> : null}
                </View>
            }
        </View>
    )
}

export default LoginScreen


