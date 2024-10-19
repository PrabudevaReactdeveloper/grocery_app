import { View, Text, TextInput, Image } from 'react-native'
import React from 'react';
import Search from "../GroceryImage/SearchIcon.png";


const SearchPage = () => {
    return (
        <View className="w-full h-[50px] border-[#F2F3F2] flex flex-row items-center rounded-md px-3 justify-between bg-[#F2F3F2] mt-3">
            <View className="w-[10%] flex flex-col items-center justify-center h-full">
                <Image source={Search} />
            </View>
            <TextInput  className="w-[90%] font-PoppinsMedium" placeholderTextColor="#7C7C7C" placeholder="Search Store" />
        </View>
    )
}

export default SearchPage