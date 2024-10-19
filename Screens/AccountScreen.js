import { View, Text, Dimensions, Image, TouchableOpacity, Pressable, FlatList } from 'react-native'
import React, { useState } from 'react'
import { launchImageLibrary as _launchImageLibrary, launchCamera as _launchCamera } from 'react-native-image-picker';
import { useNavigation } from '@react-navigation/native';
import LogoutIcon from "../Assert/Logout.png";
import ChevronIcon from "../Assert/Chevron.png";
import OrderIcon from "../GroceryImage/Vector.png";
import MyDetailIcon from "../GroceryImage/MyDetailsIcon.png";
import MapIcon from "../GroceryImage/DeliceryAddress.png";
import NotificationIcon from "../GroceryImage/BellIcon.png";
import HelpIcon from "../GroceryImage/HelpIcon.png";
import AboutIcon from "../GroceryImage/AboutIcon.png";
import PromoCordIcon from "../GroceryImage/PromoCordIcon.png";
import PaymentIcon from "../GroceryImage/Vectoricon.png";

let launchImageLibrary = _launchImageLibrary;
let launchCamera = _launchCamera;

const AccountScreen = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openImagePicker = () => {
    const options = {
      mediaType: 'photo',
      includeBase64: false,
      // maxHeight: 1000,
      // maxWidth: 1000,
    };

    launchImageLibrary(options, handleResponse);
  };

  const handleCameraLaunch = () => {
    const options = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };

    launchCamera(options, handleResponse);
  };

  const handleResponse = (response) => {
    if (response.didCancel) {
      console.log('User cancelled image picker');
    } else if (response.error) {
      console.log('Image picker error: ', response.error);
    } else {
      let imageUri = response.uri || response.assets?.[0]?.uri;
      setSelectedImage(imageUri);
    }
  };
  const { width } = Dimensions.get("window");
  const navigation = useNavigation();
  const SettingsArray = [
    {
      id: 1,
      name: "Order",
      img1: OrderIcon,
      img: ChevronIcon,
      route:"Order"
    },
    {
      id: 2,
      name: "My Details",
      img1: MyDetailIcon,
      img: ChevronIcon
    },
    {
      id: 3,
      name: "Delivery Address",
      img1: MapIcon,
      img: ChevronIcon
    },
    {
      id: 4,
      name: "Payment Methods",
      img1: PaymentIcon,
      img: ChevronIcon
    },
    {
      id: 5,
      name: "Promo Card",
      img1: PromoCordIcon,
      img: ChevronIcon
    },
    {
      id: 6,
      name: "Notifications",
      img1: NotificationIcon,
      img: ChevronIcon
    },
    {
      id: 7,
      name: "Helps",
      img1: HelpIcon,
      img: ChevronIcon
    },
    {
      id: 8,
      name: "Abouts",
      img1: AboutIcon,
      img: ChevronIcon
    },

  ]
  return (
    <View style={{ width: width }} className="flex flex-col h-full bg-white">
      <View className="flex flex-row items-center space-x-5 px-5 py-4 w-full h-[15%] border-b-[1px] border-[#E2E2E2]">
        <TouchableOpacity onPress={openImagePicker} className={`w-[64px] h-[64px] ${selectedImage?"":"border-2"} rounded-full  border-[#E2E2E2]`}>
          {selectedImage && (
            <Image className="w-full h-full object-cover rounded-full"
              source={{ uri: selectedImage }}
            />
          )}
        </TouchableOpacity>
        <View className="flex flex-col space-y-1">
          <Pressable>
            <Text  className="text-xl text-[#181725] font-PoppinsSemiBold">R Prabudeva</Text>
          </Pressable>
          <Text  className="font-PoppinsMedium">Prabudev@gmail.com</Text>
        </View>
      </View>
      <View className="w-full h-[70%]">
        <FlatList showsVerticalScrollIndicator={false}
          data={SettingsArray}
          keyExtractor={(item) => item.id}
          renderItem={({ item, index }) => (
            <View key={index} className="flex flex-row items-center justify-between py-4 border-b-[1px] border-[#E2E2E2] px-5">
              <View key={index} className="flex flex-row items-center space-x-4">
                <Image source={item.img1} />
                <Text  className="text-[#181725] font-PoppinsSemiBold">{item.name}</Text>
              </View>
              <TouchableOpacity onPress={()=>navigation.navigate(item.route)} className="flex flex-row items-center space-x-3">
                <Image className="w-5 h-5 object-contain" source={item.img} />
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
      <View className="w-full h-[15%] flex flex-col justify-center px-5">
        <TouchableOpacity className="bg-[#F2F3F2] flex flex-row px-5 items-center justify-between h-[67px] rounded-2xl" >
          <Image className="w-5 h-5 object-contain" style={{ tintColor: "#53B175" }} source={LogoutIcon} />
          <Text className="text-[#53B175] font-PoppinsSemiBold text-base">Log Out</Text>
          <Image className="w-5 h-5 object-contain opacity-0" source={LogoutIcon} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default AccountScreen;

