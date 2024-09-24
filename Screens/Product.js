import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { fruits } from "../Screens/P";
import { responsiveScreenHeight, responsiveScreenWidth,} from "react-native-responsive-dimensions";
import Plus from "../Assert/Plus.png";
import { useNavigation } from '@react-navigation/native';

const Product = () => {
    const nav = useNavigation();
    return (
        <View className="mt-4">
            <FlatList horizontal showsHorizontalScrollIndicator={false}
                data={fruits}
                renderItem={({ item, index }) => (
                    <TouchableOpacity onPress={() => nav.navigate("ProductDetail", { item })} activeOpacity={0.7} key={index} className="border-2 border-[#E3E3E3] mr-3 rounded-2xl" style={{ height: responsiveScreenHeight(25), width: responsiveScreenWidth(43) }}>
                        <Image className="w-full h-[50%] object-contain" source={{ uri: item.img }} />
                        <View className="p-2 flex flex-col space-y-1">
                            <Text className="text-lg text-black font-semibold">{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</Text>
                            <Text>{item.pieces}</Text>
                            <View className="flex flex-row items-center justify-between">
                                <Text>₹ {item.price}</Text>
                                <View className="bg-[#53B175] p-2 rounded-lg">
                                    <Image className="w-5 h-5 object-contain" source={Plus} />
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

export default Product;