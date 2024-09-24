import { View, Text, Dimensions, Image, TouchableOpacity, Pressable } from 'react-native';
import React from 'react';
import { useRoute } from "@react-navigation/native";
import Back from "../Assert/Back.png";
import Upload from "../Assert/Upload.png";
import { useDispatch } from 'react-redux';
import { AddtoCart } from '../Redux/CartSlice';

const ProductDetailScreen = ({ navigation }) => {
    const route = useRoute()
    const data = route.params?.item;
    const { width, height } = Dimensions.get("screen");
    const dispatch = useDispatch();
    
    return (
        <View style={{ width: width, height: height }} className="relative bg-[#F2F3F2]">
            <View className="w-full flex flex-row items-center justify-between absolute z-40 top-5 px-3">
                <Pressable onPress={() => navigation.goBack()}>
                    <Image style={{ tintColor: "#000000" }} className="w-5 h-5" source={Back} />
                </Pressable>
                <Image style={{ tintColor: "#000000" }} className="w-5 h-5" source={Upload} />
            </View>
            <View style={{ width: width, height: height * 0.40 }} className="flex flex-col items-center justify-center">
                <Image className="w-full h-full object-contain rounded-b-2xl" source={{ uri: data.img }} />
            </View>
            <View style={{ width: width, height: height * 0.60 }} className="p-5">
                <View className="flex flex-col space-y-3 ">
                    <Text className="text-lg text-black font-semibold">{data.name.charAt(0).toUpperCase() + data.name.slice(1)}</Text>
                    <Text>₹ {data.pieces}</Text>
                    <View>

                    </View>
                    <TouchableOpacity onPress={() => { dispatch(AddtoCart(data)); navigation.navigate("Cart") }} className="p-3 rounded-3xl border-2 border-[#53B175] bg-[#53B175]">
                        <Text className="text-white text-center">Add To Basket</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default ProductDetailScreen;