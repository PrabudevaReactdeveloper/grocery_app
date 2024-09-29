import { View, Text, Dimensions, Image, TextInput, FlatList } from 'react-native';
import React from 'react';
import Search from "../GroceryImage/Search.png";
import { ExploreData } from '../ProductData/ExploreData';
import ProductCart from '../Constant/ProductCart';


const Explore = () => {
    const { width } = Dimensions.get("window");

    return (
        <View style={{ width: width }} className="flex flex-col space-y-5 p-5  h-full">
            <View className="flex flex-col space-y-3 h-[15%] bg-red-800">
                <Text className="text-center font-bold text-lg text-black">Find Products</Text>
                <View className="w-full h-[50px]  flex flex-row items-center rounded-md px-3 justify-between bg-red-500">
                    <View className="w-[10%] flex flex-col items-center justify-center h-full">
                        <Image style={{ tintColor: "#000000" }} className="w-5 h-5 object-contain" source={Search} />
                    </View>
                    <TextInput className="w-[90%] text-[#7C7C7C]" placeholder="Search Store" />
                </View>
            </View>
            <View className="h-[85%]">
                <FlatList showsVerticalScrollIndicator={false} numColumns={2} columnWrapperStyle={{ gap: 10 }} contentContainerStyle={{ gap: 10, paddingBottom: 20 }} data={ExploreData}
                    renderItem={({ item }) => <ProductCart color={item.color} image={item.image} name={item.name} borderColor={item.borderColor} />}
                    keyExtractor={(item) => item.id}
                />
            </View>
        </View>
    )
}

export default Explore;