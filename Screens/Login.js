import { View, Text, Dimensions, TextInput, Pressable } from 'react-native'
import React, { useState } from 'react'

const Login = ({ navigation }) => {
    const { width } = Dimensions.get("window");
    const [mobileNumber, setMobileNumber] = useState(null)
    return (
        <View className="h-full" style={{ width: width }}>
            <View className="flex flex-col h-full space-y-3  bg-gray-100">
                <View className="flex flex-col h-[65%] space-y-3 p-3">
                </View>
                <View className="flex flex-col justify-center h-[35%] space-y-3 p-5 border-2 shadow-2xl bg-white border-white  rounded-t-3xl">
                    <Text>
                        Mobile Number
                    </Text>
                    <View className="w-full flex flex-row space-x-1 items-center justify-start border-2 h-12 rounded-md  bg-white border-gray-300">
                        <View className="w-[12%] h-full flex flex-col items-center justify-center bg-gray-300 border-gray-200">
                            <Text className="text-sm  text-black">+91</Text>
                        </View>
                        <TextInput keyboardType='numeric' maxLength={10} placeholder='Enter a Mobile Number' value={mobileNumber} onChangeText={(text) => setMobileNumber(text)} />
                    </View>
                    {mobileNumber?.length == 10 ?
                        <Pressable onPress={() => navigation.navigate("Bottom")} className="flex flex-col items-center justify-center bg-[#8344FF] border-[#8344FF] border-2 h-12 rounded-full  cursor-pointer">
                            <Text className="text-white text-base">SEND OTP</Text>
                        </Pressable> :
                        <Pressable className="flex flex-col items-center justify-center bg-[#8344FF] border-[#8344FF] border-2 h-12 rounded-full opacity-50">
                            <Text className="text-white text-base">Send OTP</Text>
                        </Pressable>}
                </View>
            </View>
        </View>
    )
}

export default Login