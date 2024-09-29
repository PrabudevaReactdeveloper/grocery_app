import { View, Text, ImageBackground } from 'react-native';
import React, { useEffect } from 'react';
import SplashScreenImage from "../Assert/splashScreen.png";

const SplashScreen = () => {
    return (
        <View className="w-full h-full">
            <ImageBackground resizeMode='cover' source={SplashScreenImage} className="w-full h-full">
            </ImageBackground>
        </View>
    )
}

export default SplashScreen