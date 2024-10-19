import { View, ImageBackground, Dimensions, TouchableOpacity, Text } from 'react-native';
import React from 'react';
import GetStartImage from "../GroceryImage/Get.png";
import { useNavigation } from '@react-navigation/native';

const GetStartScreen = () => {
    const { width } = Dimensions.get("screen");
    const navigation = useNavigation();
    return (
        <View style={{ width: width, height: "100%" }}>
            <ImageBackground resizeMode='cover' source={GetStartImage} className="w-full h-full">
                <View className="flex flex-col space-y-4 h-full px-5 py-20 items-center justify-end">
                    <Text className="text-white text-3xl font-semibold">Welcome</Text>
                    <Text className="text-white text-3xl font-semibold">to our store</Text>
                    <Text className="text-[#FCFCFC]">Ger your groceries in as fast as one hour</Text>
                    <TouchableOpacity onPress={() => navigation.navigate("Login")} className="w-full h-14 flex-col items-center justify-center rounded-2xl bg-[#53B175]">
                        <Text className="text-white text-lg font-medium">Get Start</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    )
}

export default GetStartScreen;