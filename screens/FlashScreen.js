import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import LogoComponent from "../components/LogoComponent";

const FlashScreen = () => {

    // const navigate = useNavigate()

  return (
    <View className="" style={{ flex: 1 }}>
     
     <LogoComponent />

      <View style={{ flex: 1 }} className="relative">
        <Image
          className="w-full"
          source={require("../assets/images/Bottom.png")}
        />

        <TouchableOpacity onPress={()=>alert('You pressed')}>
          <Image
            source={require("../assets/images/Arrow.png")}
            className="absoulte w-20 h-20 -top-[182px] left-[146px] z-10 "
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FlashScreen;
