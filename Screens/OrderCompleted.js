import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import TickIcon from "../GroceryImage/Group6872.png";
import ButtonComponent from './ButtonComponent';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { PlaceOrder } from '../Redux/UserSlice';


const OrderCompleted = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  return (
    <View className="w-full h-full px-5 py-5 flex flex-col justify-between">
      <View />
      <View className="flex flex-col  items-center">
        <Image className="object-contain" source={TickIcon} />
        <Text className="text-[#181725] font-PoppinsSemiBold text-2xl">Your Order has been </Text>
        <Text className="text-[#181725] font-PoppinsSemiBold text-2xl">accepted</Text>
        <Text  className="text-[#7C7C7C] font-PoppinsMedium text-base text-center mt-5">Your Items has been Placed and is on</Text>
        <Text  className="text-[#7C7C7C] font-PoppinsMedium text-base text-center"> it's way to being processed</Text>
      </View>
      <View className="flex flex-col space-y-3">
        <ButtonComponent title="Track Order" route="OrderCompleted" />
        <TouchableOpacity onPress={() => {
          navigation.navigate("Home");
          dispatch(PlaceOrder(0))
        }}
          className="flex flex-col items-center justify-center h-14 rounded-3xl" >
          <Text  className="text-[#181725] font-PoppinsMedium text-base">Back to Home</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default OrderCompleted;