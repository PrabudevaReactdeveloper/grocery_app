
import React, { useEffect, useRef, useState } from 'react';
import { Image, TouchableOpacity, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeIcon from '../GroceryImage/Shop.png';
import ExpolreIcon from '../GroceryImage/Explore.png';
import CartIcon from '../GroceryImage/Cart.png';
import FavouriteIcon from '../Assert/Favourite.png';
import AccountIcon from '../Assert/Account.png';
import HomeScreen from './HomeScreen';
import CartScreen from './CartScreen';
import FavouriteScreen from './FavouriteScreen';
import ExploreScreen from './ExploreScreen';
import * as Animatable from 'react-native-animatable';
import { useSelector } from 'react-redux';
import PlaceOrderComponents from './PlaceOrderComponents';
import AccountScreen from './AccountScreen';

const BottomTab = () => {
  const Tab = createBottomTabNavigator();
  const TableArray = [
    {
      route: "Home", label: "Home", Icon: HomeIcon, component1: HomeScreen
    },
    {
      route: "Explore", label: "Explore", Icon: ExpolreIcon, component1: ExploreScreen
    },
    {
      route: "Cart", label: "Cart", Icon: CartIcon, component1: CartScreen
    },
    {
      route: "Favourite", label: "Favourite", Icon: FavouriteIcon, component1: FavouriteScreen
    },
    {
      route: "Account", label: "Account", Icon: AccountIcon, component1: AccountScreen
    },
  ]

  const animate1 = { 0: { scale: 1.2, translateY: 0 }, 1: { scale: 1.2, translateY: -20 } }
  const animate2 = { 0: { scale: 1.2, }, 1: { scale: 1.2, } }

  const TabButton = (props) => {
    const { item, onPress, accessibilityState } = props;
    const focused = accessibilityState.selected;
    const viewRef = useRef(null);
    useEffect(() => {
      if (focused) {
        viewRef.current.animate(animate1);
      } else {
        viewRef.current.animate(animate2);
      }
    }, [focused])
    return (
      <TouchableOpacity onPress={() => onPress()} activeOpacity={1} className='w-[20%] bg-white shadow-2xl items-center justify-center'>
        <Animatable.View ref={viewRef} duration={500} className='w-[45px] h-[45px] rounded-full bg-[#53B175] shadow-2xl border-[#53B175] border-2 items-center justify-center'>
          <Animatable.View style={{ ...StyleSheet.absoluteFillObject }} />
          <Image source={item.Icon}
            style={{
              width: 20,
              height: 20,
              resizeMode: 'contain',
              tintColor: focused ? '#ffffff' : 'black',

            }} />
          {/* <Animatable.Text ref={textRef}>
            {item.label}
          </Animatable.Text> */}
        </Animatable.View>
      </TouchableOpacity>
    )
  }

  const showOrder = useSelector((state) => state.User.value);

  return (
    <>
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          tabBarHideOnKeyboard: false,
          tabBarStyle: {
            height: 60,
            width: '100%',
            alignItems: 'center',
            opacity: 1,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            elevation: 10,
            justifyContent: "space-between",
          },
        }}
        initialRouteName={"Home"}

      >
        {TableArray.map((item, index) =>
          <Tab.Screen key={index}
            name={item.route}
            component={item.component1}
            options={{
              tabBarShowLabel: false,
              headerShown: false,
              tabBarButton: (props) => <TabButton {...props} item={item} />
            }}
          />
        )}
      </Tab.Navigator>
      {
        showOrder ? <PlaceOrderComponents /> : null
      }
    </>
  );
};
export default BottomTab;

