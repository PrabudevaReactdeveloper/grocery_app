import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import PlusIcon from "../Assert/Plus.png";
import MinusIcon from "../Assert/Minus.png";
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { RemoveTheCart } from '../Redux/CartSlice';

const ProductCard = (props) => {
    const nav = useNavigation();
    const CartData = useSelector((state) => state.CartScreenReducer);
    const dispatch = useDispatch();

    return (
        <View className="mt-4">
            <FlatList horizontal showsHorizontalScrollIndicator={false}
                data={props.data}
                renderItem={({ item, index }) => (
                    <TouchableOpacity onPress={() => nav.navigate("ProductDetail", { item })} activeOpacity={0.7} key={index} className="mr-3 border-2 border-[#E3E3E3] rounded-2xl h-[248px] w-[180px]">
                        <View className="w-full h-[50%] flex flex-col items-center justify-center">
                            <Image className="w-[60%] h-[60%] object-contain rounded-t-2xl" source={item.img} />
                        </View>
                        <View className="flex flex-col justify-between space-y-1 h-[50%] p-2">
                            <Text style={{ fontFamily: "Poppins-SemiBold" }} className="text-lg text-black">{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</Text>
                            <Text style={{ fontFamily: "Poppins-SemiBold" }} className="text-base text-black">{item.pieces}</Text>
                            <View className="flex flex-row items-center justify-between">
                                <Text style={{ fontFamily: "Poppins-Medium" }} className="text-base text-black font-normal">₹ {item.price}</Text>
                                {CartData.some((val) => val.name == item.name) ?
                                    <TouchableOpacity onPress={() => dispatch(RemoveTheCart(item))} className="bg-[#53B175] p-2 rounded-lg">
                                        <Image tintColor="#ffffff" className="w-5 h-5 object-contain" source={MinusIcon} />
                                    </TouchableOpacity> :
                                    <View  className="bg-[#53B175] p-2 rounded-lg">
                                        <Image className="w-5 h-5 object-contain" source={PlusIcon} />
                                    </View>}
                            </View>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

export default ProductCard;