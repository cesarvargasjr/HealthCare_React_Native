import React from 'react';
import { LogBox } from 'react-native';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { ToastStyles } from './src/components/Toast';
import { AuthProvider } from './src/contexts/Auth';
import { PatientProvider } from './src/contexts/Patient';
import Routes from './src/routes/app.routes';
import colors from './src/utils/colors';
import {
  Nunito_400Regular,
  Nunito_600SemiBold,
  Nunito_700Bold,
  Nunito_800ExtraBold,
  useFonts,
} from '@expo-google-fonts/nunito';

// Ignore all warnings
LogBox.ignoreAllLogs(true);

export default function App() {

  const [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_600SemiBold,
    Nunito_700Bold,
    Nunito_800ExtraBold,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={colors.white} barStyle='dark-content' />
      <ToastStyles>
        <AuthProvider>
          <PatientProvider>
            <Routes />
          </PatientProvider>
        </AuthProvider>
      </ToastStyles>
    </NavigationContainer>
  );
}