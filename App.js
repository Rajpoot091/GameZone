import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import Navigator from "./routes/DrawerStack";

export default function App() {
  let getFonts = () => {
    Font.loadAsync({
      "Nunito-Regular": require("./assets/fonts/Nunito-Regular.ttf"),
      "Nunito-Bold": require("./assets/fonts/Nunito-Bold.ttf"),
    });
  };
  const [fontsLoaded, getFontsLoaded] = useState(false);

  if (!fontsLoaded) {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => getFontsLoaded(true)}
        onError={console.warn}
      />
    );
  }
  return (
    <View style={styles.container}>
      <Navigator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
  Text: {
    fontFamily: "Nunito-Bold",
    fontSize: 40,
  },
  Text1: {
    fontFamily: "Nunito-Regular",
    fontSize: 40,
  },
});
