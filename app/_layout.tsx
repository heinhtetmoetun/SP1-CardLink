// app/_layout.tsx
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { ActivityIndicator, Image, StatusBar, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import "react-native-reanimated";
import "./globals.css"; // Tailwind styles


const BRAND_BLUE = "#213BBB";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Nunito: require("../assets/fonts/Nunito-Regular.ttf"),
    // Add more weights if you use them:
    // NunitoBold: require("../assets/fonts/Nunito-Bold.ttf"),
    // NunitoSemiBold: require("../assets/fonts/Nunito-SemiBold.ttf"),
  });

  if (!fontsLoaded) {
    // Branded splash while fonts load
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#ffffff",
          alignItems: "center",
          justifyContent: "center",
          paddingHorizontal: 24,
        }}
      >
        <Image
          source={require("../assets/images/icon.png")}
          style={{ width: 72, height: 72, marginBottom: 16, borderRadius: 12 }}
          resizeMode="contain"
        />
        <ActivityIndicator size="large" color={BRAND_BLUE} />
        <StatusBar barStyle="dark-content" />
      </View>
    );
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar barStyle="light-content" />
      <Stack
        screenOptions={{
          animation: "none", // disable sliding transition globally
          headerShown: false, // you’re rendering your own headers in each screen
        }}
      />
    </GestureHandlerRootView>
  );
}
