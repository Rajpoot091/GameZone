import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { globalstyles } from "../styles/global";

export default function About() {
  return (
    <View style={globalstyles.container}>
      <Text style={globalstyles.titleText}>About Screen</Text>
    </View>
  );
}
