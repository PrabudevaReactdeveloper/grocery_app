import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTab from '../Screens/BottomTab';
import DetailScreen from '../Screens/DetailScreen';
import ProductDetailScreen from '../Screens/ProductDetailScreen';
import CartScreen from './CartScreen';
import OrderCompleted from './OrderCompleted';
import Login from './Login';
import SplashScreen from './SplashScreen';

const Stack = createNativeStackNavigator();

const RouteCompent = () => {
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
                    <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
                    <Stack.Screen name="Bottom" component={BottomTab} options={{ headerShown: false }} />
                    <Stack.Screen name="ProductDetail" component={ProductDetailScreen} options={{ headerShown: false, animation: "slide_from_bottom" }} />
                    <Stack.Screen name="Detail" component={DetailScreen} options={{ headerShown: false, animation: "slide_from_bottom" }} />
                    {/* <Stack.Screen name="Cart" component={CartScreen} options={{ headerShown: false }} /> */}
                    <Stack.Screen name="OrderCompleted" component={OrderCompleted} options={{ headerShown: false, animation: "slide_from_bottom" }} />
                </Stack.Navigator>
                {/* } */}
        </NavigationContainer>
    )
}

export default RouteCompent;