import { View, Text, Dimensions, FlatList, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { ExploreData } from '../ProductData/ExploreData';
import SearchPage from '../Constant/SearchPage';
import { useNavigation } from '@react-navigation/native';


const ExploreScreen = () => {
    const { width } = Dimensions.get("window");
    const nav = useNavigation();

    return (
        <View style={{ width: width }} className="flex flex-col space-y-5 p-5 h-full bg-white">
            <Text className="text-center font-bold text-lg text-black font-PoppinsSemiBold">Find Products</Text>
            <SearchPage />
            <FlatList showsVerticalScrollIndicator={false} numColumns={2} columnWrapperStyle={{ gap: 10 }} contentContainerStyle={{ gap: 10, paddingBottom: 20 }} data={ExploreData}
                renderItem={({ item }) =>
                    <TouchableOpacity onPress={() => nav.navigate("FilterProduct", { item })} style={{ backgroundColor: item.color, borderColor: item.borderColor }} className="flex flex-col border-[1px] items-center justify-center space-y-5  flex-1 p-3 rounded-2xl h-48">
                        <Image source={item.image} />
                        <Text className="text-lg text-[#181725] text-center font-medium font-PoppinsSemiBold">{item.name}</Text>
                    </TouchableOpacity>
                }
                keyExtractor={(item) => item.id}
            />
        </View>
    )
}

export default ExploreScreen;