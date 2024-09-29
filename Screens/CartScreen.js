



import { View, Text, Dimensions, TouchableOpacity, Image, FlatList, Pressable } from 'react-native';
import React, { useRef, useState } from 'react';
import PlusIcon from "../Assert/Plus.png";
import MinusIcon from "../Assert/Minus.png";
import CloseIcon from "../Assert/Close.png";
import { useDispatch, useSelector } from 'react-redux';
import { decrementQuantity, incrementQuantity, RemoveTheCart } from '../Redux/CartSlice';
import { responsiveScreenHeight } from 'react-native-responsive-dimensions';
import PlaceOrderComponents from './PlaceOrderComponents';

const CartScreen = () => {
    const { width } = Dimensions.get("screen");
    const dispatch = useDispatch();
    const UseData = useSelector((state) => state.CartScreenReducer);
    const [showOrder, setShowOrder] = useState(false);

    const handleAnimation = () => {
        setShowOrder(!showOrder)
    };
    return (
        <>
            <View style={{ width: width, height: "100%" }} className="flex-1 bg-white">
                <View className="flex flex-col items-center justify-center border-b-2 border-[#E2E2E2] h-[10%] shadow-lg">
                    <Text className="text-black text-2xl font-bold">My Cart</Text>
                </View>
                <FlatList horizontal={false} showsVerticalScrollIndicator={false} className="h-[80%]"
                    data={UseData}
                    renderItem={({ item, index }) => (
                        <View key={index} style={{ height: responsiveScreenHeight(15) }} className="flex flex-row items-center px-3 py-2 justify-between border-b-2  border-[#E2E2E2]">
                            <View className="flex flex-col items-center justify-center w-[25%] h-full">
                                <Image className="w-full h-[60px] object-contain" source={ item.img } />
                            </View>
                            <View className=" flex flex-row items-center justify-between space-y-3 w-[75%] h-full px-3">
                                <View className=" flex flex-col space-y-3">
                                    <Text className="text-lg text-black font-semibold">{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</Text>
                                    <Text>{item.pieces}</Text>
                                    <View className="flex flex-row  items-center space-x-3">
                                        <TouchableOpacity onPress={() => dispatch(decrementQuantity(item))} className="border-[1px] p-3 border-[#B3B3B3] rounded-xl" >
                                            <Image style={{ tintColor: "#7C7C7C" }} className="w-5 h-5" source={MinusIcon} />
                                        </TouchableOpacity>
                                        <Text className="text-lg text-black font-semibold">{item.quantity}</Text>
                                        <TouchableOpacity onPress={() => dispatch(incrementQuantity(item))} className="border-[1px] p-3 border-[#B3B3B3] rounded-xl" >
                                            <Image style={{ tintColor: "#7C7C7C" }} className="w-5 h-5" source={PlusIcon} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <View className=" flex flex-col  items-center justify-between h-full">
                                    <TouchableOpacity onPress={() => dispatch(RemoveTheCart(item))}>
                                        <Image style={{ tintColor: "#7C7C7C" }} className="w-5 h-5" source={CloseIcon} />
                                    </TouchableOpacity>
                                    <Text className="text-lg text-black font-semibold">₹ {item.price}</Text>
                                </View>
                            </View>

                        </View>
                    )}
                // keyExtractor={((item) => item.quantity)}
                />
                <View className="h-[10%] flex flex-col justify-center px-5">
                    <Pressable onPress={() => handleAnimation()} className="bg-[#53B175] flex flex-col items-center justify-center h-14 bottom-1 rounded-3xl" >
                        <Text className="text-white font-bold text-base"> Go to Checkout</Text>
                    </Pressable>
                </View>
            </View>
            {
                showOrder ? <PlaceOrderComponents setShowOrder={setShowOrder}/> : null
            }
            {/* {showOrder ?
                <View className="absolute  w-full rounded-t-3xl z-50 px-4 py-4 bottom-0 h-[450px] bg-red-700 shadow-xl">
                    <View className="flex flex-col justify-between h-full">
                        <View className=" flex flex-row items-center justify-between">
                            <Text className="text-lg text-black font-semibold">Checkout</Text>
                            <TouchableOpacity onPress={() => setShowOrder(false)}>
                                <Image style={{ tintColor: "#7C7C7C" }} className="w-5 h-5" source={CloseIcon} />
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity onPress={() => nav.navigate("OrderCompleted")} className="bg-[#53B175] flex flex-col items-center justify-center h-14 rounded-3xl" >
                            <Text className="text-white font-bold text-base">Place Order</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                : null} */}
        </>

    )
}

export default CartScreen;