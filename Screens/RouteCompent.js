import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTab from '../Screens/BottomTab';
import DetailScreen from '../Screens/DetailScreen';
import ProductDetailScreen from '../Screens/ProductDetailScreen';
import CartScreen from './CartScreen';
import OrderCompleted from './OrderCompleted';

const Stack = createNativeStackNavigator();

const RouteCompent = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Bottom" component={BottomTab} options={{ headerShown: false, animation: "slide_from_bottom" }} />
                <Stack.Screen name="ProductDetail" component={ProductDetailScreen} options={{ headerShown: false, animation: "slide_from_bottom" }} />
                <Stack.Screen name="Detail" component={DetailScreen} options={{ headerShown: false, animation: "slide_from_bottom" }} />
                {/* <Stack.Screen name="Cart" component={CartScreen} options={{ headerShown: false }} /> */}
                <Stack.Screen name="OrderCompleted" component={OrderCompleted} options={{ headerShown: false, animation: "slide_from_bottom" }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RouteCompent;