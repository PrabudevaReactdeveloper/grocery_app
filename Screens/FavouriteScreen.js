



import { View, Text, Dimensions, TouchableOpacity, Image, Pressable, ScrollView, Modal, Alert } from 'react-native';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { responsiveScreenHeight } from 'react-native-responsive-dimensions';
import ChevronIcon from "../Assert/Chevron.png";
import { AddtoCart } from '../Redux/CartSlice';
import { PlaceOrder } from '../Redux/UserSlice';

const FavouriteScreen = ({ navigation }) => {
    const { width } = Dimensions.get("screen");
    const FavouriteData = useSelector((state) => state.FavoriteScreenReducer);
    // console.log(FavouriteData);
    const dispatch = useDispatch();
    return (
        <>
            <View style={{ width: width, height: "100%" }} className="flex-1 justify-between bg-white">
                <View className="flex flex-col items-center justify-center border-b-2 border-[#E2E2E2] h-[10%] shadow-lg">
                    <Text className="text-[#181725] text-xl font-PoppinsSemiBold">Favorite</Text>
                </View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    {FavouriteData.map((item, index) =>
                        <View key={index} style={{ height: responsiveScreenHeight(12) }} className="flex flex-row items-center px-3 py-2 justify-between border-b-2  border-[#E2E2E2]">
                            <View className="flex flex-col items-center justify-center w-[30%] h-full">
                                <Image className="w-full h-full object-contain" source={item.img} />
                            </View>
                            <View className=" flex flex-row items-center justify-between space-y-2 w-[70%] h-full px-3">
                                <View className=" flex flex-col space-y-1">
                                    <Text className="text-lg text-[#181725] font-PoppinsSemiBold">{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</Text>
                                    <Text>{item.pieces} kg</Text>
                                </View>
                                <View className="flex flex-row items-center space-x-2">
                                    <Text className="text-sm text-[#181725] font-PoppinsMedium">₹ {item.price}</Text>
                                    <TouchableOpacity onPress={() => {
                                        dispatch(AddtoCart(item)); navigation.navigate("Cart")
                                    }}>
                                        <Image style={{ tintColor: "#181725" }} className="w-6 h-6" source={ChevronIcon} />
                                    </TouchableOpacity>
                                </View>
                            </View>

                        </View>
                    )}
                </ScrollView>

                <View className="h-[10%] flex flex-col justify-center px-5">
                    {/* <Pressable onPress={() => { dispatch(AddtoCart()); navigation.navigate("Cart") }} className="bg-[#53B175] flex flex-row items-center justify-center space-x-5 h-[67px] bottom-1 rounded-xl px-3" >
                        <Text className="text-white font-bold text-base font-PoppinsSemiBold"> Add All To Cart</Text>
                    </Pressable> */}
                    <Pressable onPress={() => {
                        dispatch(PlaceOrder(2)); console.log(PlaceOrder(2));

                    }} className="bg-[#53B175] flex flex-row items-center justify-center space-x-5 h-[67px] bottom-1 rounded-xl px-3" >
                        <Text className="text-white font-bold text-base font-PoppinsSemiBold"> Add All To Cart</Text>
                    </Pressable>
                </View>
            </View>
        </>

    )
}

export default FavouriteScreen