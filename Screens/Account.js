import { View, Text, Dimensions, Image, TouchableOpacity, Pressable } from 'react-native'
import React, { useState } from 'react'
import { launchImageLibrary as _launchImageLibrary, launchCamera as _launchCamera } from 'react-native-image-picker';
import { useNavigation } from '@react-navigation/native';
import LogoutIcon from "../Assert/Logout.png";
import ChevronIcon from "../Assert/Chevron.png";
import OrderIcon from "../Assert/Chevron.png";
import MyDetailIcon from "../Assert/Chevron.png";
import MapIcon from "../Assert/Chevron.png";
import NotificationIcon from "../Assert/Chevron.png";
import HelpIcon from "../Assert/Chevron.png";
import AboutIcon from "../Assert/Chevron.png";

let launchImageLibrary = _launchImageLibrary;
let launchCamera = _launchCamera;

const Account = () => {
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
  const Checkout = [
    {
      id: 1,
      name: "Delivery",
      option: "Select Method",
      img: ChevronIcon
    },
    {
      id: 2,
      name: "Payment",
      img: ChevronIcon
    },
    {
      id: 3,
      name: "Promo Code",
      option: "Pick discount",
      img: ChevronIcon
    },
    {
      id: 4,
      name: "Total Cost",
      option: "987",
      img: ChevronIcon
    },

  ]
  return (
    <View style={{ width: width }} className="flex flex-col h-full bg-white">
      <View className="flex flex-row items-center space-x-5 px-3 py-4 w-full h-[16%] border-b-[1px] border-[#E2E2E2]">
        <TouchableOpacity onPress={openImagePicker} className="w-[64px] h-[64px] rounded-3xl">
          {selectedImage && (
            <Image className="w-full h-full object-cover rounded-[27px]"
              source={{ uri: selectedImage }}
            />
          )}
        </TouchableOpacity>
        <View className="flex flex-col space-y-1">
          <Pressable>
            <Text className="text-xl text-[#181725] font-semibold">R Prabudeva</Text>
          </Pressable>
          <Text>Prabudev@gmail.com</Text>
        </View>
      </View>
      <View className="w-full h-[68%]"></View>
      <View className="w-full h-[16%] flex flex-col justify-center px-5">
        <TouchableOpacity onPress={() => navigation.navigate("")} className="bg-[#F2F3F2] flex flex-row px-5 items-center justify-between h-[67px] rounded-2xl" >
          <Image className="w-5 h-5 object-contain" style={{ tintColor: "#53B175" }} source={LogoutIcon} />
          <Text className="text-[#53B175] font-medium text-base">Log Out</Text>
          <Image className="w-5 h-5 object-contain opacity-0" source={LogoutIcon} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Account;

