import React, { useEffect, useLayoutEffect } from "react";
import {
  Image,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";
import FlashScreen from "./screens/FlashScreen";
import SplashHomeScreen from "./screens/SplashHomeScreen";

export default function App() {
  return (
    <TailwindProvider>

      {/* <FlashScreen /> */}
      <SplashHomeScreen />
    
    </TailwindProvider>
  );
}
