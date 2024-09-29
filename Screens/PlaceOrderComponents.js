import { FlatList, Image, Pressable, Text, TouchableOpacity, View } from 'react-native';
import React from 'react'
import CloseIcon from "../Assert/Close.png";
import ChevronIcon from "../Assert/Chevron.png";
import ButtonComponent from './ButtonComponent';
import Animated, { FadeInDown } from 'react-native-reanimated';


const PlaceOrderComponents = ({ setShowOrder }) => {
    const Checkout = [
        {
            id: 1,
            name: "Delivery",
            option: "Select Method",
            img: ChevronIcon
        },
        {
            id: 2,
            name: "Payment",
            img: ChevronIcon
        },
        {
            id: 3,
            name: "Promo Code",
            option: "Pick discount",
            img: ChevronIcon
        },
        {
            id: 4,
            name: "Total Cost",
            option: "987",
            img: ChevronIcon
        },

    ]
    return (

        <View className="w-full rounded-t-3xl z-50  py-5 -bottom-0 h-[500px] bg-red-600 shadow-xl absolute">
            <View className="flex flex-col h-full px-5">
                <View className=" flex flex-row items-center justify-between py-2">
                    <Text className="text-lg text-black font-semibold">Checkout</Text>
                    <TouchableOpacity onPress={() => setShowOrder(false)}>
                        <Image style={{ tintColor: "#181725" }} className="w-5 h-5" source={CloseIcon} />
                    </TouchableOpacity>
                </View>
                <FlatList data={Checkout} keyExtractor={(item) => item.id} renderItem={({ item }) => (
                    <View className="flex flex-row items-center justify-between py-4 border-b-[1px] border-[#E2E2E2] ">
                        <Text className="text-[#7C7C7C] font-semibold">{item.name}</Text>
                        <Pressable className="flex flex-row items-center space-x-3">
                            <Text className="text-[#181725] font-semibold">{item.option}</Text>
                            <Image className="w-5 h-5" source={item.img} />
                        </Pressable>
                    </View>
                )}>
                </FlatList>
                <View className="flex flex-col py-4">
                    <Text>By placing an order you agree to your Terms And Conditions</Text>
                </View>
                <ButtonComponent title="Place Order" route="OrderCompleted" />
            </View>
        </View>
    )
}

export default PlaceOrderComponents;
