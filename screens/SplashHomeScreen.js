import { View, Text, Image, ImageBackground } from 'react-native'
import React from 'react'
import LogoComponent from '../components/LogoComponent'

const SplashHomeScreen = () => {
  return (
    <View className="flex-1 bg-black border-2 relative border-red-400 " >

  <View className="absolute  top-2/4  right-50 -translate-y-2/4 -translate-x-2/4 z-10 bg-white">
  <LogoComponent  />

  </View>

        {/* </View> */}
       <View style={{flex:1}} className="bg-red-900 justify-end ">
        <Image className="w-full object-scale-down  border-2 border-red-50" source={require("../assets/images/largeSlientImage.png")} />
        </View>
    </View>
  )
}

export default SplashHomeScreen