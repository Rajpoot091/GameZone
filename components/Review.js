import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { globalstyles } from "../styles/global";

export default function Review({ navigation }) {
  return (
    <View style={globalstyles.container}>
      {/* <Text style={globalstyles.titleText}>Review Screen</Text> */}
      <Text style={globalstyles.titleText}>
        Name: {navigation.getParam("name")}
      </Text>
      <Text style={globalstyles.titleText}>
        Rating:
        {navigation.getParam("rating")}
      </Text>
      <Text style={globalstyles.titleText}>
        ID: {navigation.getParam("key")}
      </Text>
    </View>
  );
}
