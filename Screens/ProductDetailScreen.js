import { View, Text, Dimensions, Image, TouchableOpacity, Pressable } from 'react-native';
import React from 'react';
import { useRoute } from "@react-navigation/native";
import Back from "../Assert/Back.png";
import Upload from "../Assert/Upload.png";
import Favourite from "../Assert/Favourite.png";
import { useDispatch } from 'react-redux';
import { AddtoCart } from '../Redux/CartSlice';

const ProductDetailScreen = ({ navigation }) => {
    const route = useRoute()
    const data = route.params?.item;
    const { width, height } = Dimensions.get("screen");
    const dispatch = useDispatch();

    return (
        <View style={{ width: width, height: "100%" }} className="relative bg-white">
            <View className="w-full flex flex-row items-center justify-between absolute z-40 top-5 px-3">
                <Pressable onPress={() => navigation.goBack()}>
                    <Image style={{ tintColor: "#000000" }} className="w-5 h-5" source={Back} />
                </Pressable>
                <Image style={{ tintColor: "#000000" }} className="w-5 h-5" source={Upload} />
            </View>
            <View style={{ width: width, height: "40%" }} className="flex flex-col items-center justify-center">
                <Image className="object-contain " source={data.img} />
            </View>
            <View style={{ width: width, height: "60%" }} className="p-5 bg-white">
                <View className="flex flex-col space-y-3 h-full justify-between">
                    <View className="flex flex-row space-x-3 justify-between">
                        <Text className="text-lg text-black font-semibold">{data.name.charAt(0).toUpperCase() + data.name.slice(1)}</Text>
                        <TouchableOpacity onPress={() => { dispatch(AddtoCart(data)); navigation.navigate("Favourite") }} >
                            <Image style={{ tintColor: "#000000" }} className="w-5 h-5" source={Favourite} />
                        </TouchableOpacity>
                    </View>
                    <Text>₹ {data.pieces}</Text>
                    <View>
                        <Text>{data.description}</Text>
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