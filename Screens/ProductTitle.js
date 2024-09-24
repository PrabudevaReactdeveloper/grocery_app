import { View, Text } from 'react-native';
import React from 'react';

const ProductTitle = ({ title }) => {
    return (
        <View className="w-full flex flex-row items-center justify-between">
            <Text className="text-[#181725] font-semibold text-2xl font-Poppins-Black">{title}</Text>
            <Text className="text-[#53B175] font-semibold text-base font-Poppins-Blackr">See all</Text>
        </View>
    )
}

export default ProductTitle;