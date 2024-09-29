import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import TickIcon from "../Assert/Group 6872.png";
import ButtonComponent from './ButtonComponent';
import { useNavigation } from '@react-navigation/native';


const OrderCompleted = () => {
  const navigation = useNavigation();

  return (
    <View className="w-full h-full p-5 flex flex-col justify-between">
      <View className="flex flex-col space-y-5 items-center"/>
      <View className="flex flex-col space-y-5 items-center">
        <Image className="w-[150px] h-[150px] object-cover" source={TickIcon} />
        <Text className="text-[#181725] font-semibold text-2xl">Your Order has been accepted</Text>
        <Text className="text-[#7C7C7C] font-semibold text-base text-center">Your Items has been Placed and is on it's way to being processed</Text>
      </View>
      <View className="flex flex-col space-y-3">
        <ButtonComponent title="Track Order" route="OrderCompleted" />
        <TouchableOpacity onPress={() => navigation.navigate("Home")} className="flex flex-col items-center justify-center h-14 rounded-3xl" >
          <Text className="text-[#181725] font-medium text-base">Back to Home</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default OrderCompleted;