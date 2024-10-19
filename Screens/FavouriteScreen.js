



import { View, Text, Dimensions, TouchableOpacity, Image, FlatList, Pressable } from 'react-native';
import React from 'react';
import PlusIcon from "../Assert/Plus.png";
import MinusIcon from "../Assert/Minus.png";
import CloseIcon from "../Assert/Close.png";
import { useDispatch, useSelector } from 'react-redux';
import { responsiveScreenHeight } from 'react-native-responsive-dimensions';
import { DecrementFavoriteQuantity, IncremenFavoriteQuantity, RemoveFavoriteCart } from '../Redux/FavoriteSlice';

const FavouriteScreen = () => {
    const { width } = Dimensions.get("screen");
    const FavouriteData = useSelector((val) => val.FavoriteScreenReducer);

    return (
        <>
            <View style={{ width: width, height: "100%" }} className="flex-1 bg-yellow-700">
                <View className="flex flex-col items-center justify-center border-b-2 border-[#E2E2E2] h-[10%] shadow-lg">
                    <Text className="text-black text-2xl font-PoppinsSemiBold">My Favorite</Text>
                </View>

                {/* <FlatList horizontal={false} showsVerticalScrollIndicator={false} className="h-[80%]"
                    data={FavouriteData}
                    renderItem={({ item1, index }) => (
                        <View key={index} style={{ height: responsiveScreenHeight(15) }} className="flex flex-row items-center px-3 py-2 justify-between bg-yellow-700 border-b-2  border-[#E2E2E2]">
                            <View className="flex flex-col items-center justify-center w-[30%] h-full">
                                <Image className="w-full h-full object-center" source={item1.img} />
                            </View>
                            <View className=" flex flex-row items-center justify-between space-y-3 w-[75%] h-full px-3">
                                <View className=" flex flex-col space-y-3">
                                    <Text className="text-lg text-black font-semibold">{item1.name}</Text>
                                    <Text>{item1.pieces}</Text>
                                    <View className="flex flex-row  items-center space-x-3">
                                        <TouchableOpacity onPress={() => dispatch(DecrementFavoriteQuantity(item1))} className="border-[1px] p-3 border-[#B3B3B3] rounded-xl" >
                                            <Image style={{ tintColor: "#7C7C7C" }} className="w-5 h-5" source={MinusIcon} />
                                        </TouchableOpacity>
                                        <Text className="text-lg text-black font-semibold">{item1.quantity}</Text>
                                        <TouchableOpacity onPress={() => dispatch(IncremenFavoriteQuantity(item1))} className="border-[1px] p-3 border-[#B3B3B3] rounded-xl" >
                                            <Image style={{ tintColor: "#7C7C7C" }} className="w-5 h-5" source={PlusIcon} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <View className=" flex flex-col  items-center justify-between h-full">
                                    <TouchableOpacity onPress={() => dispatch(RemoveFavoriteCart(item1))}>
                                        <Image style={{ tintColor: "#7C7C7C" }} className="w-5 h-5" source={CloseIcon} />
                                    </TouchableOpacity>
                                    <Text className="text-lg text-black font-semibold">₹ {item1.price}</Text>
                                </View>
                            </View>
                        </View>
                    )}
                /> */}
                <View className="h-[10%] flex flex-col justify-center px-5">
                    <Pressable className="bg-[#53B175] flex flex-col items-center justify-center h-14 bottom-1 rounded-3xl" >
                        <Text className="text-white font-bold text-base font-PoppinsSemiBold"> Go to Checkout</Text>
                    </Pressable>
                </View>
            </View>

        </>

    )
}

export default FavouriteScreen