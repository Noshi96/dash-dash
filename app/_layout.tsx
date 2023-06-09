import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';
import { createContext, useEffect } from 'react';
import { useColorScheme } from 'react-native';
import { extendTheme, NativeBaseProvider } from 'native-base';

const LinearGradient = require('expo-linear-gradient').LinearGradient

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  return (
    <>
      {/* Keep the splash screen open until the assets have loaded. In the future, we should just support async font loading with a native version of font-display. */}
      {!loaded && <SplashScreen />}
      {loaded && <RootLayoutNav />}
    </>
  );
}

const config = {
  useSystemColorMode: false,
  initialColorMode: 'dark',
  dependencies: {
    'linear-gradient': LinearGradient,
  }
};

const customTheme = extendTheme({ config });
const color = 'violet';
export const Theme = createContext({color: color})

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <NativeBaseProvider theme={customTheme}>
      <Theme.Provider value={{color: color}}>
        <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
          <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
            <Stack.Screen name="gameFinder" options={{ presentation: 'modal' }} />
          </Stack>
        </ThemeProvider>
      </Theme.Provider>

    </NativeBaseProvider>
  );
}
