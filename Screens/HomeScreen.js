import { View, Text, Dimensions, ScrollView, Image, Pressable, FlatList, TouchableOpacity, PermissionsAndroid, } from 'react-native';
import React, { useEffect, useState } from 'react';
import Carot from "../Assert/Carot.jpg";
import Plus from "../Assert/Plus.png";
import Swiper from 'react-native-swiper';
import Banner1 from "../GroceryImage/Banner1.png";
import Banner3 from "../GroceryImage/Banner3.png";
import MapIcon from "../GroceryImage/DeliceryAddress.png";
import NotificationIcon from "../GroceryImage/BellIcon.png";
import ProductTitle from '../Constant/ProductTitle';
import ProductCard from '../Constant/ProductCard';
import SearchPage from '../Constant/SearchPage';
import Image1 from "../GroceryImage/Home/1.png";
import Image2 from "../GroceryImage/Home/2.png";
import { fruits, fruits1 } from '../ProductData/fruits';
import { useNavigation } from '@react-navigation/native';
import { VegetablesData } from '../ProductData/VegetablesData';
import axios from 'axios';
import Geolocation from '@react-native-community/geolocation';

const HomeScreen = () => {
    const { width } = Dimensions.get("window");
    const Exclusive = [

        {
            img: Image2,
            name: "Rice",
            color: "#e5f4ea"

        },
        {
            img: Image1,
            name: "Pulses",
            color: "#fef2e4"
        },
    ]
    const BannerImage = [
        {
            img: Banner1
        },

        {
            img: Banner3
        }
    ]
    const nav = useNavigation();
    const [CurrentLoc, setCurrentLoc] = useState(null)
    useEffect(() => {
        requestCameraPermission()
        nav.addListener('focus', () => {
            Geolocation.getCurrentPosition(info => {
                autoFillAddress(info.coords.latitude, info.coords.longitude)
            })

        });
    }, [])

    const requestCameraPermission = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,

            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                console.log('Location Granted');
            } else {
                console.log('Location Denied');
            }
        } catch (err) {
            console.warn(err);
        }

    };
    const autoFillAddress = (lat, lon) => {
        axios
            .get(
                `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lon}&key=${'AIzaSyCiRNNQPE1ceuB59YI7LY7lNygWMkJpOjc'}&result_type=street_address&location_type=ROOFTOP`,
            )
            .then(getResponse => {
                if (getResponse.status == 200) {
                    if (getResponse.data.results.length > 0) {
                        setCurrentLoc(getResponse.data.results[0].formatted_address)
                    } else {
                        console.log('Marked area is not valid. Kindly mark the valid area.');
                    }
                }
            })
            .catch(getError => {
                console.log(getError.message);
            });
    };
    return (
        <View style={{ width: width, height: "100%" }}>
            <View className="w-full flex flex-row items-center justify-between px-3 h-[50px] bg-[#F2F3F2]">
                <View className="flex flex-row items-center space-x-3">
                    <TouchableOpacity onPress={() => nav.navigate("MapScreen")}>
                        <Image source={MapIcon} />
                    </TouchableOpacity>
                    <Text>{CurrentLoc}</Text>
                </View>
                <View className="flex flex-row items-center space-x-3">
                    <Image source={NotificationIcon} />
                </View>
            </View>
            <View className="flex flex-col space-y-3 p-3 bg-white">
                {/* <SearchPage /> */}
                <ScrollView showsVerticalScrollIndicator={false} className="flex flex-col space-y-5 h-[95%]">
                    <View className="h-28 rounded-xl">
                        <Swiper showsButtons={false}>
                            {BannerImage.map((item, index) =>
                                <Image key={index} className="w-full h-full object-contain rounded-lg" source={item.img} />
                            )}
                        </Swiper>
                    </View>
                    <View className="flex flex-col space-y-3">
                        <ProductTitle title="Exclusive Offer" />
                        <ProductCard data={fruits} />
                    </View>
                    <View className="flex flex-col space-y-3">
                        <ProductTitle title="Exclusive Offer" />
                        <ProductCard data={VegetablesData} />
                    </View>
                    <View className="flex flex-col space-y-3">
                        <ProductTitle title="Groceries" />
                        <View className="w-full flex flex-row items-center justify-between">
                            <ScrollView horizontal showsHorizontalScrollIndicator={false} className="flex flex-row space-x-4">
                                {Exclusive.map((item, index) =>
                                    <View style={{ backgroundColor: item.color, borderColor: item.color }} key={index} className="flex flex-row items-center  space-x-5 bg w-60 h-[105px] rounded-xl border-2 p-3">
                                        <Image key={index} className=" object-contain rounded-lg" source={item.img} />
                                        <Text className="text-[#3E423F] font-semibold text-xl">{item.name}</Text>
                                    </View>)}
                            </ScrollView>
                        </View>
                    </View>
                    <View className="flex flex-col space-y-3">
                        <ProductTitle title="Meat Offer" />
                        <ProductCard data={fruits1} />
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}

export default HomeScreen;

