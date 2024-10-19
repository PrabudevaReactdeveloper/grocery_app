// import { FlatList, Image, Pressable, Text, TouchableOpacity, View } from 'react-native';
// import React from 'react'
// import CloseIcon from "../Assert/Close.png";
// import ChevronIcon from "../Assert/Chevron.png";
// import ButtonComponent from './ButtonComponent';


// const PlaceOrderComponents = ({ setShowOrder }) => {
//     const Checkout = [
//         {
//             id: 1,
//             name: "Delivery",
//             option: "Select Method",
//             img: ChevronIcon
//         },
//         {
//             id: 2,
//             name: "Payment",
//             img: ChevronIcon
//         },
//         {
//             id: 3,
//             name: "Promo Code",
//             option: "Pick discount",
//             img: ChevronIcon
//         },
//         {
//             id: 4,
//             name: "Total Cost",
//             option: "987",
//             img: ChevronIcon
//         },

//     ]
//     return (

//         <View className="w-full rounded-t-3xl z-50  py-5 -bottom-3 h-[500px] bg-red-600 shadow-xl absolute">
//             <View className="flex flex-col h-full px-5">
//                 <View className=" flex flex-row items-center justify-between py-2">
//                     <Text className="text-lg text-black font-semibold">Checkout</Text>
//                     <TouchableOpacity onPress={() => setShowOrder(false)}>
//                         <Image style={{ tintColor: "#181725" }} className="w-5 h-5" source={CloseIcon} />
//                     </TouchableOpacity>
//                 </View>
//                 <FlatList data={Checkout} keyExtractor={(item) => item.id} renderItem={({ item }) => (
//                     <View className="flex flex-row items-center justify-between py-4 border-b-[1px] border-[#E2E2E2] ">
//                         <Text className="text-[#7C7C7C] font-semibold">{item.name}</Text>
//                         <Pressable className="flex flex-row items-center space-x-3">
//                             <Text className="text-[#181725] font-semibold">{item.option}</Text>
//                             <Image className="w-5 h-5" source={item.img} />
//                         </Pressable>
//                     </View>
//                 )}>
//                 </FlatList>
//                 <View className="flex flex-col py-4">
//                     <Text>By placing an order you agree to your Terms And Conditions</Text>
//                 </View>
//                 <ButtonComponent title="Place Order" route="OrderCompleted" />
//             </View>
//         </View>
//     )
// }

// export default PlaceOrderComponents;


import { FlatList, Image, Pressable, Text, TouchableOpacity, View } from 'react-native';
import React from 'react'
import CloseIcon from "../Assert/Close.png";
import ChevronIcon from "../Assert/Chevron.png";
import CardIcon from "../GroceryImage/card.png";
import ButtonComponent from './ButtonComponent';
import Animated, { FadeIn, FadeInDown } from 'react-native-reanimated'
import { useDispatch, useSelector } from 'react-redux';
import { PlaceOrder } from '../Redux/UserSlice';


const PlaceOrderComponents = () => {
    const dispatch = useDispatch();
    const UseData = useSelector((state) => state.CartScreenReducer);
    console.log(UseData);

    const TotalAmount = () => {
        let temp = 0
        let TotalCount = UseData.forEach(element => {
            temp += Number(element.price) * element.quantity
        });
        console.log(TotalCount);
        return temp
    }
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
            img1: CardIcon,
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
            option: "₹" + TotalAmount(),
            img: ChevronIcon
        },

    ]

    return (

        <Animated.View entering={FadeInDown.damping(2)} className='flex flex-col justify-end h-full bg-black/60 w-full absolute'>
            <View className="flex flex-col h-[60%] bg-white rounded-t-3xl py-5">
                <View className=" flex flex-row items-center justify-between border-b-2 border-[#E2E2E2] px-5 py-3 pb-5">
                    <Text className="text-2xl text-[#181725] font-PoppinsSemiBold">Checkout</Text>
                    <TouchableOpacity onPress={() => dispatch(PlaceOrder(0))}>
                        <Image style={{ tintColor: "#181725" }} className="w-5 h-5" source={CloseIcon} />
                    </TouchableOpacity>
                </View>
                <FlatList showsVerticalScrollIndicator={false} data={Checkout} keyExtractor={(item) => item.id} renderItem={({ item }) => (
                    <View className="flex flex-row items-center justify-between py-4 border-b-[1px] border-[#E2E2E2] px-5">
                        <Text className="text-[#7C7C7C] font-PoppinsMedium">{item.name}</Text>
                        <Pressable className="flex flex-row items-center space-x-3">
                            <Text className="text-[#181725] font-PoppinsMedium">{item.option}</Text>
                            {item.img1 != null ?
                                <Image className="w-5 h-5" source={item.img1} /> : null}
                            <Image className="w-5 h-5" source={item.img} />
                        </Pressable>
                    </View>
                )}>
                </FlatList>
                <View className="flex flex-col px-5 py-4">
                    <Text className="text-base leading-7 text-[#7C7C7C] font-PoppinsLight">By placing an order you agree to your</Text>
                    <Text className="text-base text-[#181725] leading-7 font-PoppinsSemiBold">Terms And Conditions</Text>
                </View>
                <View className="flex flex-col px-5">
                    <ButtonComponent title="Place Order" route="OrderCompleted" />
                </View>
            </View>
        </Animated.View>
    )
}

export default PlaceOrderComponents;
