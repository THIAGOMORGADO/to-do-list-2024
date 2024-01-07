

import { NavigationContainer } from "@react-navigation/native"
import { AppRooutes } from "./src/Routes";
import { ThemeProvider } from "styled-components";

import { Roboto_400Regular, Roboto_500Medium, Roboto_700Bold, useFonts } from "@expo-google-fonts/roboto"

import theme from "./src/global/theme";
import { StatusBar } from "react-native";
import { useEffect, useState } from "react";

import { SpashScreen } from './src/pages/SplashScreen'

export default function App() {
  const [loading, setLoading] = useState(false)

  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });

  useEffect(() => {
    setTimeout(() => {
      setLoading(true)
    }, 5000)

  }, [loading])

  if (!fontsLoaded) {
    return null;
  }

  if (!loading) {
    return <SpashScreen />
  }

  return (

    <ThemeProvider theme={theme}>
      <StatusBar barStyle="light-content" backgroundColor="#222" />
      <NavigationContainer >

        <AppRooutes />

      </NavigationContainer>
    </ThemeProvider>

  );
}
