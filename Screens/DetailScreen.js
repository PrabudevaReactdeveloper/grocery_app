import { View, Text, Dimensions, Image, Button, TouchableOpacity, Pressable } from 'react-native';
import React from 'react';
import { useRoute } from "@react-navigation/native";
import Swiper from 'react-native-swiper';
import Back from "../Assert/Back.png";
import Upload from "../Assert/Upload.png";

const DetailScreen = ({ navigation }) => {
    const route = useRoute()
    const data = route.params?.item;
    const { width, height } = Dimensions.get("screen");

    return (
        <View style={{ width: width, height: height }} className="relative bg-[#F2F3F2]">
            <View className="w-full flex flex-row items-center justify-between absolute z-40  top-5 px-2">
                <Pressable onPress={() => navigation.goBack()}>
                    <Image style={{ tintColor: "#000000" }} className="w-5 h-5" source={Back} />
                </Pressable>
                <Image style={{ tintColor: "#000000" }} className="w-5 h-5" source={Upload} />
            </View>
            <View style={{ width: width, height: height * 0.40 }} className="flex flex-col">
                <Swiper showsButtons={false}>
                    {JSON.parse(data.pictures_url).map((item, index) =>
                        <Image key={index} className="w-full h-full object-bottom rounded-b-2xl" source={{ uri: `https://storage.googleapis.com/p4uconsole/Products/${data.id}/${item}` }} />
                    )}
                </Swiper>
            </View>
            <View style={{ width: width, height: height * 0.60 }} className="p-5">
                <View className="flex flex-col space-y-3 ">
                    <Text>{data.name}</Text>
                    <Text>{data.cost}</Text>
                    <Text>{data.description}</Text>
                    <TouchableOpacity className="p-3 rounded-3xl border-2 border-[#53B175] bg-[#53B175]">
                        <Text className="text-white text-center">Add To Basket</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default DetailScreen;