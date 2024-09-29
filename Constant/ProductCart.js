import { View, Text, Image, Dimensions } from 'react-native'
import React from 'react'

const ProductCart = (props) => {
    const { width } = Dimensions.get("window");

    return (
        <View style={{ backgroundColor: props.color, borderColor: props.borderColor}} className="flex flex-col items-center justify-center space-y-5 border flex-1 p-3 rounded-2xl h-48">
            <Image source={props.image} />
            <Text className="text-lg text-[#181725] text-center font-medium">{props.name}</Text>
        </View>
    )
}

export default ProductCart