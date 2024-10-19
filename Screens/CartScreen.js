



import { View, Text, Dimensions, TouchableOpacity, Image, FlatList, Pressable, Alert } from 'react-native';
import React from 'react';
import PlusIcon from "../Assert/Plus.png";
import MinusIcon from "../Assert/Minus.png";
import CloseIcon from "../Assert/Close.png";
import { useDispatch, useSelector } from 'react-redux';
import { decrementQuantity, incrementQuantity, RemoveTheCart } from '../Redux/CartSlice';
import { responsiveScreenHeight } from 'react-native-responsive-dimensions';
import { PlaceOrder } from '../Redux/UserSlice';

const CartScreen = () => {
    const { width } = Dimensions.get("screen");
    const dispatch = useDispatch();
    const UseData = useSelector((state) => state.CartScreenReducer);
    const TotalAmount = () => {
        let temp = 0
        let TotalCount = UseData.forEach(element => {
            temp += Number(element.price) * element.quantity
        });
        // console.log(TotalCount);
        return temp
    }
    // console.log(UseData);

    return (
        <View style={{ width: width, height: "100%" }} className="flex-1 bg-white">
            <View className="flex flex-col items-center justify-center border-b-2 border-[#E2E2E2] h-[10%] shadow-lg">
                <Text className="text-black text-xl font-bold font-PoppinsSemiBold">My Cart</Text>
            </View>
            <FlatList horizontal={false} showsVerticalScrollIndicator={false} className="h-[80%]"
                data={UseData}
                renderItem={({ item, index }) => (
                    <View key={index} style={{ height: responsiveScreenHeight(15) }} className="flex flex-row items-center px-3 py-2 justify-between border-b-2  border-[#E2E2E2]">
                        <View className="flex flex-col items-center justify-center w-[30%] h-full">
                            <Image className="w-full h-full object-center" source={item.img} />
                        </View>
                        <View className=" flex flex-row items-center justify-between space-y-3 w-[70%] h-full px-3">
                            <View className=" flex flex-col space-y-3">
                                <Text className="text-lg text-black font-PoppinsSemiBold">{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</Text>
                                <Text>{item.pieces} Kg</Text>
                                <View className="flex flex-row  items-center space-x-3">
                                    <TouchableOpacity onPress={() => dispatch(decrementQuantity(item))} className="border-[1px] p-3 border-[#B3B3B3] rounded-xl" >
                                        <Image style={{ tintColor: "#7C7C7C" }} className="w-5 h-5" source={MinusIcon} />
                                    </TouchableOpacity>
                                    <Text className="text-lg text-black font-PoppinsSemiBold">{item.quantity}</Text>
                                    <TouchableOpacity onPress={() => {
                                        if (item.quantity < item.pieces) {
                                            dispatch(incrementQuantity(item))
                                        }
                                        else {
                                            Alert.alert("Grocery stack not there")
                                        }
                                    }} className="border-[1px] p-3 border-[#B3B3B3] rounded-xl">
                                        <Image style={{ tintColor: "#7C7C7C" }} className="w-5 h-5" source={PlusIcon} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View className=" flex flex-col  items-center justify-between h-full">
                                <TouchableOpacity onPress={() => dispatch(RemoveTheCart(item))}>
                                    <Image style={{ tintColor: "#7C7C7C" }} className="w-5 h-5" source={CloseIcon} />
                                </TouchableOpacity>
                                <Text className="text-lg text-black font-PoppinsSemiBold">₹ {item.quantity * item.price}</Text>
                            </View>
                        </View>

                    </View>
                )}
            />
            <View className="h-[10%] flex flex-col justify-center px-5 relative">
                <Pressable onPress={() => {
                    dispatch(PlaceOrder(1)); console.log(PlaceOrder(1));

                }} className="bg-[#53B175] flex flex-row items-center justify-center space-x-5 h-[67px] bottom-1 rounded-xl px-3" >
                    <Text className="text-white font-bold text-base font-PoppinsSemiBold"> Go to Checkout</Text>
                    <Text className="text-white font-bold text-base absolute right-5 font-PoppinsSemiBold">{TotalAmount()}</Text>
                </Pressable>
            </View>
        </View>



    )
}

export default CartScreen;