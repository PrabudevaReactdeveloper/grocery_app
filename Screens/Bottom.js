
import React, { useEffect, useRef } from 'react';
import Animated, { View, Image, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeIcon from '../GroceryImage/Shop.png';
import ExpolreIcon from '../GroceryImage/Explore.png';
import CartIcon from '../GroceryImage/Cart.png';
import FavouriteIcon from '../Assert/Favourite.png';
import AccountIcon from '../Assert/Account.png';
import HomeScreen from './HomeScreen';
import CartScreen from './CartScreen';
import Account from './AccountScreen';
import FavouriteScreen from '../ProductData/FavouriteScreen';
import ExploreScreen from './ExploreScreen';
import * as Animatable from 'react-native-animatable';

const Bottom = () => {
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
      route: "Account", label: "Account", Icon: AccountIcon, component1: Account
    },
  ]
  const animate1 = { 0: { scale: .5,translateY:0}, 1: { scale: 1.2,translateY:-24} }
  const animate2 = { 0: { scale: 1.2 ,translateY:-24}, 1: { scale: 1,translateY:0 } }

  
  const TabButton = (props) => {
    const { item, onPress, accessibilityStates } = props;
    console.log(props);
    const focused = accessibilityStates.selected
    const viewRef = useRef(null)
    useEffect(() => {
      if (focused) {
        viewRef.current.animate(animate1)
      }
      else {
        viewRef.current.animate(animate2)
      }
    }, [focused])
    return (
      <TouchableOpacity onPress={onPress} activeOpacity={1} className='w-[20%] h-full items-center justify-center'>
        <Animatable.View ref={viewRef} duration={2000} className='w-[50px] h-[50px] rounded-full bg-red-700 items-center justify-center'>
          <Animatable.View style={{...StyleSheet.absoluteFillObject}}/>
          <Image
            source={item.Icon}
            style={{
              width: 20,
              height: 20,
              resizeMode: 'contain',
              tintColor: focused ? '#53B175' : 'black',

            }} />
        </Animatable.View>
      </TouchableOpacity>
    )
  }
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          height: 60,
          width: '100%',
          alignItems: 'center',
          backgroundColor: "red",
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
  );
};
export default Bottom;



// import React from 'react';
// import  { View, Image, TouchableOpacity, Text } from 'react-native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Home from '../GroceryImage/Shop.png';
// import ExpolreIcon from '../GroceryImage/Explore.png';
// import Cart from '../GroceryImage/Cart.png';
// import FavouriteIcon from '../Assert/Favourite.png';
// import AccountIcon from '../Assert/Account.png';
// import HomeScreen from './HomeScreen';
// import CartScreen from './CartScreen';
// import Account from './Account';
// import Favourite from './FavouriteScreen';
// import Expore from '../Screens/ExploreScreen';
// const BottomTab = () => {
//   const Tab = createBottomTabNavigator();
//   return (
//     <Tab.Navigator
//       screenOptions={{
//         tabBarShowLabel: false,
//         tabBarHideOnKeyboard: true,
//         tabBarStyle: {
//           height: 60,
//           width: '100%',
//           alignItems: 'center',
//           backgroundColor: "white",
//           opacity: 1,
//           borderTopLeftRadius: 10,
//           borderTopRightRadius: 10,
//           elevation: 10,
//           justifyContent: "space-between",
//         },
//       }}
//       initialRouteName={"Home"}
//       shifting={false}
//       labeled={false}
//     >
//       <Tab.Screen
//         options={{
//           tabBarShowLabel: false,
//           headerShown: false,
//           tabBarIcon: ({ focused }) => (
//             <View className='w-full h-full items-center justify-center '>
//               <Image
//                 source={Home}
//                 style={{
//                   width: 20,
//                   height: 20,
//                   resizeMode: 'contain',
//                   tintColor: focused ? '#53B175' : 'black',
//                 }} />
//               <Text style={{ color: focused ? '#53B175' : 'black' }}>Shop</Text>
//             </View>
//           ),
//         }}
//         name="Home"
//         component={HomeScreen}
//       />

//       <Tab.Screen
//         options={{
//           tabBarColor: 'red',
//           headerShown: false,
//           tabBarIcon: ({ focused }) => (
//             <View className='w-full h-full items-center justify-center  gap-1'>
//               <Image
//                 source={ExpolreIcon}
//                 style={{
//                   width: 20,
//                   height: 20,
//                   resizeMode: 'contain',
//                   tintColor: focused ? '#53B175' : 'black',
//                 }} />
//               <Text style={{ color: focused ? '#53B175' : 'black', }}>Expolre</Text>
//             </View>
//           ),
//         }}
//         name="Explore"
//         component={Expore}
//       />
//       <Tab.Screen
//         options={{
//           tabBarColor: 'red',
//           headerShown: false,
//           tabBarIcon: ({ focused }) => (
//             <View className='w-full h-full items-center justify-center '>
//               <Image
//                 source={Cart}
//                 style={{
//                   width: 20,
//                   height: 20,
//                   resizeMode: 'contain',
//                   tintColor: focused ? '#53B175' : 'black',
//                 }} />
//               <Text style={{ color: focused ? '#53B175' : 'black', }}>Cart</Text>
//             </View>
//           ),
//         }}
//         name="Cart"
//         component={CartScreen}
//       />
//       <Tab.Screen
//         options={{
//           headerShown: false,
//           tabBarIcon: ({ focused }) => (
//             <View className='w-full h-full items-center justify-center'>

//               <Image
//                 source={FavouriteIcon}
//                 style={{
//                   width: 20,
//                   height: 20,
//                   resizeMode: 'contain',
//                   tintColor: focused ? '#53B175' : 'black',
//                 }} />
//               <Text style={{ color: focused ? '#53B175' : 'black', }}>Favourite</Text>
//             </View>
//           ),
//         }}
//         name="Favourite"
//         component={Favourite}
//       />
//       <Tab.Screen
//         options={{
//           headerShown: false,
//           tabBarIcon: ({ focused }) => (
//             <View className='w-full h-full items-center justify-center'>
//               <Image
//                 source={AccountIcon}
//                 style={{
//                   width: 20,
//                   height: 20,
//                   resizeMode: 'contain',
//                   tintColor: focused ? '#53B175' : 'black',
//                 }} />
//               <Text style={{ color: focused ? '#53B175' : 'black' }}>Account</Text>
//             </View>
//           ),
//         }}
//         name="Account"
//         component={Account}
//       />
//     </Tab.Navigator>
//   );
// };
// export default BottomTab;

