import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTab from './BottomTab';
import DetailScreen from './DetailScreen';
import ProductDetailScreen from './ProductDetailScreen';
import OrderCompleted from './OrderCompleted';
import FilterProductScreen from './FilterProductScreen';
import SplashScreen from './SplashScreen';
import GetStartScreen from './GetStartScreen';
import LoginScreen from './LoginScreen';
import MapViewScreen from './MapScreen';
import OrderScreen from './OrderScreen';

const Stack = createNativeStackNavigator();

const RoutingComponent = () => {
    const [showSplashScreen, setShowSplashScreen] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setShowSplashScreen(false)
        }, 5000);
    }, [])
    return (
        <NavigationContainer >
            {/* {showSplashScreen ?
                <Stack.Navigator>
                    <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
                </Stack.Navigator> : */}
                <Stack.Navigator initialRouteName='Bottom'>
                    <Stack.Screen name="GetStart" component={GetStartScreen} options={{ headerShown: false }} />
                    <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
                    <Stack.Screen name="Bottom" component={BottomTab} options={{ headerShown: false }} />
                    <Stack.Screen name="ProductDetail" component={ProductDetailScreen} options={{ headerShown: false, animation: "slide_from_bottom" }} />
                    <Stack.Screen name="MapScreen" component={MapViewScreen} options={{ headerShown: false, animation: "slide_from_bottom" }} />
                    <Stack.Screen name="Detail" component={DetailScreen} options={{ headerShown: false, animation: "slide_from_bottom" }} />
                    <Stack.Screen name="FilterProduct" component={FilterProductScreen} options={{ headerShown: false }} />
                    <Stack.Screen name="OrderCompleted" component={OrderCompleted} options={{ headerShown: false, animation: "slide_from_bottom" }} />
                    <Stack.Screen name="Order" component={OrderScreen} options={{ headerShown: false}} />
                </Stack.Navigator>
            {/* } */}
        </NavigationContainer>
    )
}

export default RoutingComponent;