import { View, Text, Dimensions, ScrollView, Image, TextInput, Pressable, Alert, FlatList } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import Carot from "../Assert/Carot.jpg";
import Plus from "../Assert/Plus.png";
import Swiper from 'react-native-swiper';
import Banner1 from "../GroceryImage/Banner1.png";
// import Banner2 from "../GroceryImage/Banner2.png";
import Banner3 from "../GroceryImage/Banner3.png";
import axios from 'axios';
import ProductTitle from './ProductTitle';
import Product from './Product';
import SearchPage from '../Constant/SearchPage';

const HomeScreen = ({ navigation }) => {
    const { width } = Dimensions.get("window");
    // useEffect(() => {
    //     FetchTheData();
    // }, [])
    // const [data, setData] = useState([]);
    // // const [data1, setData1] = useState(null);
    // const FetchTheData = async () => {
    //     axios.get("https://node-service-app-ifox3xnafa-el.a.run.app/products/all/null?limit=50&offset=0")
    //         .then((response) => {
    //             if (response.status == 200) {
    //                 setData(response.data);
    //                 // setData1(`https://storage.googleapis.com/p4uconsole/Products/310/${response.data[0].thumbnail_url}`);

    //             }
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         })
    // }
    const Exclusive = [
        {
            name: "Name"
        },
        {
            name: "Name"
        },
        {
            name: "Name"
        },
        {
            name: "Name"
        },
        {
            name: "Name"
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
    const Item = ({ name, cost, id, thum, item }) => (
        <View className="w-44 h-60 flex flex-col space-y-2 mr-3 rounded-xl border-2 shadow border-[#E2E2E2] p-3">
            <Image className="w-full h-[50%] object-contain rounded-lg" source={{ uri: `https://storage.googleapis.com/p4uconsole/Products/${id}/${thum}` }} />
            <Text>{name}</Text>
            <Text>$ {cost}</Text>
            <View className="flex flex-col items-end">
                <Pressable onPress={() => navigation.navigate("Detail", { item })} className="bg-[#53B175] p-2 rounded-lg">
                    <Image className="w-5 h-5 object-contain" source={Plus} />
                </Pressable>
            </View>
        </View>
    );
    return (
        <View style={{ width: width, height: "100%" }}>
            <View className="flex flex-col space-y-3 p-3 bg-white">
                <View className="w-full items-center justify-center">
                    <Image className="w-10 h-10" source={Carot} />
                </View>
                <SearchPage />
                <ScrollView showsVerticalScrollIndicator={false} className="flex flex-col space-y-5 h-[86%]">
                    <View className="h-28 rounded-xl">
                        <Swiper showsButtons={false}>
                            {BannerImage.map((item, index) =>
                                <Image key={index} className="w-full h-full object-contain rounded-lg" source={item.img} />
                            )}

                        </Swiper>
                    </View>
                    <View className="flex flex-col space-y-3">
                        <ProductTitle title="Exclusive Offer" />
                        <Product />
                    </View>
                    {/* <View className="flex flex-col space-y-3">
                        <ProductTitle title="Best Selling" />
                        <View className="flex flex-row flex-wrap space-x-5 items-center justify-between ">
                            <FlatList horizontal showsHorizontalScrollIndicator={false}
                                data={data}
                                renderItem={({ item }) => <Item name={item.name.length > 15 ? item.name.substring(0, 15) + "..." : item.name} cost={item.cost} id={item.id} thum={item.thumbnail_url} item={item} />}
                                keyExtractor={item => item.id}
                            />
                        </View>

                    </View> */}
                    <View className="flex flex-col space-y-3">
                        <ProductTitle title="Groceries" />
                        <View className="w-full flex flex-row items-center justify-between">
                            <ScrollView horizontal showsHorizontalScrollIndicator={false} className="flex flex-row space-x-4">
                                {Exclusive.map((item, index) =>
                                    <View key={index} className="w-60 h-[105px] rounded-xl border-2 p-3">
                                        <Text>{item.name}</Text>
                                    </View>)}
                            </ScrollView>
                        </View>
                    </View>
                    <View className="flex flex-col space-y-3">
                        <View className="w-full flex flex-row items-center justify-between">
                            <ScrollView horizontal showsHorizontalScrollIndicator={false} className="flex flex-row space-x-4">
                                {Exclusive.map((item, index) =>
                                    <View key={index} className="w-44 h-60 rounded-xl border-2 p-3">
                                        <Text>{item.name}</Text>
                                    </View>)}
                            </ScrollView>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}

export default HomeScreen;

