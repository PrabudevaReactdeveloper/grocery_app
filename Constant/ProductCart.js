import { Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const ProductCart = (props) => {
    const nav = useNavigation();
    return (
        <TouchableOpacity  style={{ backgroundColor: props.color, borderColor: props.borderColor }} className="flex flex-col border-2 items-center justify-center space-y-5  flex-1 p-3 rounded-2xl h-48">
            <Image source={props.image} />
            <Text className="text-lg text-[#181725] text-center font-PoppinsMedium">{props.name}</Text>
        </TouchableOpacity>
    )
}

export default ProductCart