import { View, Text, TextInput, Image } from 'react-native'
import React from 'react';
import Search from "../Assert/Search.png";


const SearchPage = () => {
    return (
        <View className="w-full h-[50px]  flex flex-row items-center rounded-md px-3 justify-between bg-[#F2F3F2] mt-3">
            <View className="w-[10%] flex flex-col items-center justify-center h-full">
                <Image className="w-5 h-5 object-contain" source={Search} />
            </View>
            <TextInput className="w-[90%]" placeholder="Search Store" />
        </View>
    )
}

export default SearchPage