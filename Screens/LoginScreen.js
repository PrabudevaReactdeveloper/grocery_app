import { View, Text, Dimensions, Image, TextInput, Pressable, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react';
import Logo from "../Assert/zomato.jpg"
import Indian from "../Assert/Indian.png"

const LoginScreen = ({ navigation }) => {
    const { width, height } = Dimensions.get("window");
    // const posY = useRef(0);
    // function HandleScroll(event) {
    //     posY.current = event.nativeEvent.contentOffset.y;
    //     // console.log('PosY:' + posY.current);
    // }
    return (
        <View style={{ width: width, height: height }}>
            <ScrollView>
                <View style={{ width: width, height: height * 0.35 }}>
                    <Image className="w-full h-full object-contain" source={Logo} />
                </View>
                <View style={{ width: width, height: height * 0.65 }} className="p-5">
                    <View className="flex flex-col gap-5">
                        <View className="flex flex-col items-center justify-center">
                            <Text className="text-2xl text-black font-bold italic">
                                India's #1 Food Delivery
                            </Text>
                            <Text className="text-2xl text-black self-center font-bold italic">
                                and Dining App
                            </Text>
                        </View>
                        <View>
                            <Text className="text-base text-gray-500 self-center font-normal italic">
                                Log in or sign up
                            </Text>
                        </View>
                        <View className="flex flex-row items-center justify-between">
                            <View className="border-2 w-[18%] flex flex-col items-center justify-center  px-2 rounded-md border-[#D3D3D3] h-12" >
                                <Image className="w-7 h-6 object-contain" source={Indian} />
                            </View>
                            <View className="flex flex-row items-center w-[80%] h-12 border-2 px-2 rounded-md border-[#D3D3D3]">
                                <Text>+91</Text>
                                <TextInput maxLength={10} keyboardType='numeric' numberOfLines={1} className="  w-[90%] " placeholder='Enter Phone Number' />
                            </View>
                        </View>
                        <View className="flex flex-col">
                            <Pressable onPress={() =>
                                navigation.navigate('Bottom')
                            } className="h-12 rounded-md flex flex-col items-center justify-center bg-[#DC3543]">
                                <Text className="text-white text-xl font-medium italic">Continue</Text>
                            </Pressable>
                        </View>
                        <View className="flex flex-row items-center justify-between">
                            <Text className="border-b-[1px] border-[#D3D3D3] w-[47%]">
                            </Text>
                            <Text className="text-base   text-gray-500 self-center font-normal italic">
                                or
                            </Text>
                            <Text className="border-b-[1px] border-[#D3D3D3] w-[47%]">  </Text>
                        </View>
                        <View className="flex flex-row items-center justify-center">
                            <View className="flex flex-col items-center justify-center w-12 h-12 border-2 mx-3 rounded-full">
                            </View>
                            <View className="flex flex-col items-center justify-center w-12 h-12 border-2 mx-3 rounded-full">
                            </View>
                        </View>
                        <View className="flex flex-col gap-3 items-center justify-between">
                            <Text className="text-base   text-gray-500 self-center font-normal italic">
                                By continuing,you agree to our
                            </Text>
                            <Text className="text-base   text-gray-500 self-center font-normal italic">
                                terms of service Privacy Policy Content Policy
                            </Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default LoginScreen;