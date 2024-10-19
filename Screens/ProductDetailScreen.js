import { View, Text, Dimensions, Image, TouchableOpacity, Pressable } from 'react-native';
import React from 'react';
import { useRoute } from "@react-navigation/native";
import Back from "../Assert/Back.png";
import Upload from "../Assert/Upload.png";
import Favourite from "../Assert/Favourite.png";
import { useDispatch, useSelector } from 'react-redux';
import { AddtoCart, decrementQuantity, incrementQuantity } from '../Redux/CartSlice';
import { AddToFavoriteCart } from '../Redux/FavoriteSlice';
import PlusIcon from "../Assert/Plus.png";
import MinusIcon from "../Assert/Minus.png";
import CloseIcon from "../Assert/Close.png";

const ProductDetailScreen = ({ navigation }) => {
    const route = useRoute()
    const data = route.params?.item;
    const { width } = Dimensions.get("screen");
    const dispatch = useDispatch();
    const CartData = useSelector((state) => state.CartScreenReducer);
    const FavouriteData = useSelector((val) => val.FavoriteScreenReducer);
    console.log(FavouriteData?.name);


    return (
        <View style={{ width: width, height: "100%" }} className="relative bg-white">
            <View className="w-full flex flex-row items-center justify-between absolute z-40 top-5 px-3">
                <Pressable onPress={() => navigation.goBack()}>
                    <Image style={{ tintColor: "#000000" }} className="w-5 h-5" source={Back} />
                </Pressable>
                <Image style={{ tintColor: "#000000" }} className="w-5 h-5" source={Upload} />
            </View>
            <View style={{ width: width, height: "50%" }} className="flex flex-col items-center justify-center">
                <Image className="w-[65%] h-[65%] object-contain " source={data.img} />
            </View>
            <View style={{ width: width, height: "50%" }} className="p-5">
                <View className="flex flex-col space-y-3 h-full">
                    <View className="flex flex-row space-x-3 justify-between">
                        <Text className="text-xl text-black font-PoppinsSemiBold">{data.name.charAt(0).toUpperCase() + data.name.slice(1)}</Text>
                        <TouchableOpacity onPress={() => { dispatch(AddToFavoriteCart(data)); navigation.navigate("Favourite") }}>
                            {FavouriteData.some((item) => item.name == data.name) ?
                                <Image style={{ tintColor: "#FF0000" }} className="w-5 h-5" source={Favourite} /> :
                                <Image style={{ tintColor: "#000000" }} className="w-5 h-5" source={Favourite} />}
                        </TouchableOpacity>
                    </View>
                    <Text className="text-lg font-PoppinsSemiBold">₹ {data.pieces}</Text>
                    <Text className="text-base font-PoppinsLight leading-6">{data.description}</Text>
                    {CartData.some((item) => item.name == data.name) ?
                        <View className="p-3 rounded-3xl border-2 border-[#E2E2E2] bg-[#E2E2E2]">
                            <Text className="text-white text-center">Add To Basket</Text>
                        </View> :
                        <TouchableOpacity onPress={() => { dispatch(AddtoCart(data)); navigation.navigate("Cart") }} className="p-3 rounded-3xl border-2 border-[#53B175] bg-[#53B175]">
                            <Text  className="text-white text-center font-PoppinsSemiBold">Add To Basket</Text>
                        </TouchableOpacity>}
                </View>
            </View>
        </View>
    )
}

export default ProductDetailScreen;