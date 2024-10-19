
import React from 'react';
import { View, Image, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeIcon from '../GroceryImage/Shop.png';
import ExpolreIcon from '../GroceryImage/Explore.png';
import CartIcon from '../GroceryImage/Cart.png';
import FavouriteIcon from '../Assert/Favourite.png';
import AccountIcon from '../Assert/Account.png';
import HomeScreen from './HomeScreen';
import CartScreen from './CartScreen';
import AccountScreen from './AccountScreen';
import FavouriteScreen from './FavouriteScreen';
import ExploreScreen from '../Screens/ExploreScreen';
import { useSelector } from 'react-redux';
import PlaceOrderComponents from './PlaceOrderComponents';
import OrderFailed from './OrderFailed';
const Bottom = () => {
  const Tab = createBottomTabNavigator();
  const showOrder = useSelector((state) => state.User.value);
  const show = { payload } = showOrder
  console.log(show);

  const TableArray = [
    {
      name: "Home", Icon: HomeIcon, component: HomeScreen
    },
    {
      name: "Explore", Icon: ExpolreIcon, component: ExploreScreen
    },
    {
      name: "Cart", Icon: CartIcon, component: CartScreen
    },
    {
      name: "Favourite", Icon: FavouriteIcon, component: FavouriteScreen
    },
    {
      name: "Account", Icon: AccountIcon, component: AccountScreen
    },
  ]
  return (
    <>
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
        {TableArray.map((item, index) =>
          <Tab.Screen key={index}
            options={{
              tabBarShowLabel: false,
              headerShown: false,
              tabBarIcon: ({ focused }) => (
                <View className='w-full h-full items-center justify-center '>
                  <Image
                    source={item.Icon}
                    style={{
                      width: 20,
                      height: 20,
                      resizeMode: 'contain',
                      tintColor: focused ? '#53B175' : 'black',
                    }} />
                  <Text style={{ color: focused ? '#53B175' : 'black' }}>{item.name}</Text>
                </View>
              ),
            }}
            name={item.name}
            component={item.component}
          />
        )}

      </Tab.Navigator>
      {
        showOrder == 1 ? <PlaceOrderComponents /> : showOrder == 2 ? <OrderFailed /> : null
      }
    </>
  );
};
export default Bottom;
