import { View, Text, TextInput, Image, FlatList, TouchableOpacity, ScrollView, PermissionsAndroid } from 'react-native'
import React, { useEffect, useRef, useState } from 'react';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import Search from "../GroceryImage/SearchIcon.png";
import Truck from "../GroceryImage/Truck.png";
import MapViewDirections from 'react-native-maps-directions';
import Geolocation from '@react-native-community/geolocation';
import axios from 'axios';

const MapScreen = ({ navigation }) => {
    const GroceryShopArray = [
        {
            id: 1,
            name: "Restaurants"
        },
        {
            id: 2,
            name: "Restaurants"
        },
        {
            id: 3,
            name: "Restaurants"
        },
        {
            id: 4,
            name: "Restaurants"
        },
        {
            id: 5,
            name: "Restaurants"
        },
    ]
    const origin = { latitude: 37.3318456, longitude: -122.0296002 };
    const destination = { latitude: 37.771707, longitude: -122.4053769 };
    const [current_latitude, set_current_latitude] = useState('');
    const [current_longitude, set_current_longitude] = useState('');
    const latRef = useRef('');
    const lonRef = useRef('');
    const getOneTimeLocation = () => {
        // Geolocation.setRNConfiguration({
        //     enableHighAccuracy: false,
        //     timeout: 5000,
        //     maximumAge: 10000,
        //     forceRequestLocation: true,
        //     showLocationDialog: true,
        //     skipPermissionRequests: true,
        //     authorizationLevel: 'auto',
        //     enableBackgroundLocationUpdates: true,
        //     locationProvider: 'auto',
        // });
        // try {
        //     Geolocation.getCurrentPosition(position => {
        //         console.log(position.coords.latitude);
        //         latRef.current = position.coords.latitude;
        //         lonRef.current = position.coords.longitude;
        //         set_current_latitude(position.coords.latitude);
        //         set_current_longitude(position.coords.latitude);
        //         set_load_map(true);
        //         autoFillAddress(position.coords.latitude, position.coords.longitude);
        //     });
        // } catch (error) {
        //     Alert.alert('Error:' + error.message);
        // }
    };
    const [CurrentLoc, setCurrentLoc] = useState(null)
    useEffect(() => {
        requestCameraPermission()
        navigation.addListener('focus', () => {
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
        <View className="flex-1 flex flex-col  relative">
            <View className="flex flex-col items-center justify-center">
                <View className="w-[93%] h-[50px] border-white flex flex-row items-center justify-center space-x-2 rounded-xl px-2  bg-white absolute top-[20px] z-50">
                    <Image source={Search} />
                    <TextInput className="w-[90%] font-PoppinsMedium" placeholderTextColor="#7C7C7C" placeholder="Search Store" />
                </View>
            </View>
            <View className="w-full  flex flex-row items-center justify-center space-x-2 absolute top-[85px] z-50 px-2">
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {GroceryShopArray.map((item, _) =>
                        <TouchableOpacity key={item.id} className="h-[50px] border-white rounded-xl p-4  mx-2 bg-white">
                            <Text>{item.name}</Text>
                        </TouchableOpacity>
                    )}
                </ScrollView>
            </View>

            <MapView className="h-screen"
                initialRegion={{
                    latitude: 37.3318456,
                    longitude: -122.0296002,
                    latitudeDelta: 0,
                    longitudeDelta: 0,
                }}
                provider={PROVIDER_GOOGLE}
                zoomEnabled={true}
                onPress={coordinate => {
                    latRef.current = coordinate.nativeEvent.coordinate.latitude;
                    set_current_latitude(
                        coordinate.nativeEvent.coordinate.latitude,
                    );
                    lonRef.current =
                        coordinate.nativeEvent.coordinate.longitude;
                    set_current_longitude(
                        coordinate.nativeEvent.coordinate.longitude,
                    );
                    autoFillAddress(
                        coordinate.nativeEvent.coordinate.latitude,
                        coordinate.nativeEvent.coordinate.longitude,
                    );
                }}
                onRegionChangeComplete={e => console.log(e)}
                onMarkerDragEnd={coordinate => {
                    latRef.current = coordinate.nativeEvent.coordinate.latitude;
                    set_current_latitude(
                        coordinate.nativeEvent.coordinate.latitude,
                    );
                    lonRef.current =
                        coordinate.nativeEvent.coordinate.longitude;
                    set_current_longitude(
                        coordinate.nativeEvent.coordinate.longitude,
                    );
                    autoFillAddress(
                        coordinate.nativeEvent.coordinate.latitude,
                        coordinate.nativeEvent.coordinate.longitude,
                    );
                }}
                moveOnMarkerPress={true}
            >
                <Marker draggable={true}
                    coordinate={{
                        latitude: 37.3318456,
                        longitude: -122.0296002,
                    }} pinColor='#0000FF' onDragEnd={(e) => console.log(e.nativeEvent.coordinate)}
                >
                    <Image className="w-5 h-5 object-contain" source={Truck} />
                </Marker>
                <MapViewDirections
                    origin={origin}
                    destination={destination}
                    apikey="AIzaSyCiRNNQPE1ceuB59YI7LY7lNygWMkJpOjc"
                    strokeWidth={10}
                    strokeColor="hotpink"
                    mode='BICYCLING'
                // waypoints={(e)=>console.log(e)}

                />
            </MapView>
        </View>
    )
}

export default MapScreen