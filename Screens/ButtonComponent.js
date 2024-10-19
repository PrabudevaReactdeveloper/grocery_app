import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const ButtonComponent = (props) => {
    const navigation = useNavigation();

    return (
        <View>
            <TouchableOpacity onPress={() => navigation.navigate(props.route)} className="bg-[#53B175] flex flex-col items-center justify-center h-[67px] rounded-xl" >
                <Text  className="text-white font-bold text-base font-PoppinsSemiBold">{props.title}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ButtonComponent;