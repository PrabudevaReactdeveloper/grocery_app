import { Image, Text, TouchableOpacity, View } from 'react-native';
import React from 'react'
import Animated, { FadeInDown } from 'react-native-reanimated'
import { useDispatch } from 'react-redux';
import CloseIcon from "../Assert/Close.png";
import OrderFailedIcon from "../Assert/OrderFailed.png";
import { PlaceOrder } from '../Redux/UserSlice';
import ButtonComponent from './ButtonComponent';
import { useNavigation } from '@react-navigation/native';

const OrderFailed = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();
    return (
        <Animated.View entering={FadeInDown.damping(1)} className='flex flex-col items-center justify-center h-full bg-black/60 w-full absolute'>
            <View className='flex flex-col space-y-5 justify-between w-[364px] h-[600px] bg-white rounded-xl p-5'>
                <TouchableOpacity onPress={() => dispatch(PlaceOrder(0))}>
                    <Image style={{ tintColor: "#181725" }} className="w-5 h-5 object-contain" source={CloseIcon} />
                </TouchableOpacity>
                <Image className="object-contain self-center" source={OrderFailedIcon} />
                <Text className="text-[#181725] font-PoppinsSemiBold text-center text-2xl">Oops! Order Failed</Text>
                <Text className="text-[#7C7C7C] font-PoppinsMedium text-base text-center ">Something went tembly wrong.</Text>
                <View >
                    <ButtonComponent title="Please Try Again"/>
                </View>
                <TouchableOpacity onPress={() => { navigation.navigate("Home"); dispatch(PlaceOrder(0)) }}>
                    <Text className="text-[#181725] font-PoppinsMedium text-base text-center">Back to Home</Text>
                </TouchableOpacity>
            </View>
        </Animated.View>
    )
}

export default OrderFailed;