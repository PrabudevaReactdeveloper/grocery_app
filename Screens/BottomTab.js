
import React from 'react';
import Animated, { View, Image, TouchableOpacity, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Assert/Shop.png';
import ExpolreIcon from '../Assert/Search.png';
import Cart from '../Assert/Cart.png';
import FavouriteIcon from '../Assert/Favourite.png';
import AccountIcon from '../Assert/Account.png';
import HomeScreen from './HomeScreen';
import CartScreen from './CartScreen';
import Account from './Account';
import Favourite from './Favourite';
import Expore from './Expore';
const BottomTab = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          height: 60,
          width: '100%',
          alignItems: 'center',
          backgroundColor: "white",
          opacity: 1,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          elevation: 10,
          justifyContent: "space-between",
        },
      }}
      initialRouteName={"Home"}
      shifting={false}
      labeled={false}
    >
      <Tab.Screen
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View className='w-full h-full items-center justify-center '>
              <Image
                source={Home}
                style={{
                  width: 20,
                  height: 20,
                  resizeMode: 'contain',
                  tintColor: focused ? '#53B175' : 'black',
                }} />
              <Text style={{ color: focused ? '#53B175' : 'black' }}>Shop</Text>
            </View>
          ),
        }}
        name="Home"
        component={HomeScreen}
      />

      <Tab.Screen
        options={{
          tabBarColor: 'red',
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View className='w-full h-full items-center justify-center  gap-1'>
              <Image
                source={ExpolreIcon}
                style={{
                  width: 20,
                  height: 20,
                  resizeMode: 'contain',
                  tintColor: focused ? '#53B175' : 'black',
                }} />
              <Text style={{ color: focused ? '#53B175' : 'black', }}>Expolre</Text>
            </View>
          ),
        }}
        name="Explore"
        component={Expore}
      />
      <Tab.Screen
        options={{
          tabBarColor: 'red',
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View className='w-full h-full items-center justify-center '>
              <Image
                source={Cart}
                style={{
                  width: 20,
                  height: 20,
                  resizeMode: 'contain',
                  tintColor: focused ? '#53B175' : 'black',
                }} />
              <Text style={{ color: focused ? '#53B175' : 'black', }}>Cart</Text>
            </View>
          ),
        }}
        name="Cart"
        component={CartScreen}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View className='w-full h-full items-center justify-center'>

              <Image
                source={FavouriteIcon}
                style={{
                  width: 20,
                  height: 20,
                  resizeMode: 'contain',
                  tintColor: focused ? '#53B175' : 'black',
                }} />
              <Text style={{ color: focused ? '#53B175' : 'black', }}>Favourite</Text>
            </View>
          ),
        }}
        name="Favourite"
        component={Favourite}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View className='w-full h-full items-center justify-center'>
              <Image
                source={AccountIcon}
                style={{
                  width: 20,
                  height: 20,
                  resizeMode: 'contain',
                  tintColor: focused ? '#53B175' : 'black',
                }} />
              <Text style={{ color: focused ? '#53B175' : 'black' }}>Account</Text>
            </View>
          ),
        }}
        name="Account"
        component={Account}
      />
    </Tab.Navigator>
  );
};
export default BottomTab;


{/* <Tab.Screen
options={{
  headerShown: false,
  tabBarIcon: ({ focused }) => (
    <View className="w-[85%] h-[60px] items-center justify-center absolute rounded-full">
      <Image className="w-full h-full rounded-full object-contain"
        source={Cart} x
      />
    </View>
  ),
}}
name="InitialLocationScreen"
component={HomeScreen}
/> */}