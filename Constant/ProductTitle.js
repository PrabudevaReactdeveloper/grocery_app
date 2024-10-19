import { View, Text } from 'react-native';
import React from 'react';

const ProductTitle = ({ title }) => {
    return (
        <View className="w-full flex flex-row items-center justify-between">
            <Text className="text-[#181725] font-PoppinsSemiBold text-xl">{title}</Text>
            <Text className="text-[#53B175] font-PoppinsSemiBold text-base ">See all</Text>
        </View>
    )
}

export default ProductTitle;