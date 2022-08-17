import React from 'react';
import { StatusBar } from 'react-native';
import { AppLoading } from 'expo';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';
import {
  Nunito_Regular400,
  Nunito_SemiBold600,
  Nunito_Bold700,
  Nunito_ExtraBold800,
  useFonts,
} from '@expo-google-fonts/nunito';

export default function App() {

  // let [fontsLoaded] = useFonts({
  //   Nunito_Regular400,
  //   Nunito_SemiBold600,
  //   Nunito_Bold700,
  //   Nunito_ExtraBold800,
  // });

  // if (!fontsLoaded) {
  //   return <AppLoading />;
  // } else {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#888BF0" barStyle="#FF0000" />
      <Routes />
    </NavigationContainer>
  );
}
// };