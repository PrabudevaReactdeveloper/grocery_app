import { View, Text, Dimensions, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { useRoute } from "@react-navigation/native";
import FilterIcon from "../GroceryImage/FilterIcon.png";
import BackIcon from "../GroceryImage/BackIcon.png";
import { useDispatch } from 'react-redux';

const FilterScreen = ({ navigation }) => {
    const route = useRoute()
    const FilterData = route.params.item;
    const { width } = Dimensions.get("screen");
    return (
        <View style={{ width: width, height: "100%" }}>
            <View className="flex flex-row items-center justify-between h-[8%] px-5 border-b-2">
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image className="object-contain" source={BackIcon} />
                </TouchableOpacity>
                <Text className="text-[#181725] font-bold text-2xl">{FilterData.name}</Text>
                <TouchableOpacity>
                    <Image className="object-contain" source={FilterIcon} />
                </TouchableOpacity>
            </View>
            <View className="flex flex-col space-y-4 bg-red-900 h-[92%] px-5">
                
            </View>
        </View>
    )
}

export default FilterScreen