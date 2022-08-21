import { View, Text, Image } from 'react-native'
import React from 'react'

const LogoComponent = () => {
  return (
    <View
    style={{ flex: 2 }}
    className="flex space-y-2 items-center justify-center mt-6"
  >
    <Image source={require("../assets/images/vector.png")} className="" />

    <Image source={require("../assets/images/Logo.png")} className="" />
    <Image
      className="-ml-3"
      source={require("../assets/images/EncryptedMessagingWallet.png")}
    />
  </View>
  )
}

export default LogoComponent