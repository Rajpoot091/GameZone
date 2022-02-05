import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Button,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { globalstyles } from "../styles/global";

export default function Home({ navigation }) {
  const [Review, getReview] = useState([
    { name: "Asad", rating: "4", key: "1" },
    { name: "Bilal", rating: "2", key: "2" },
    { name: "Zain", rating: "5", key: "3" },
    { name: "Shehzad", rating: "4", key: "4" },
    { name: "Hassan", rating: "4", key: "5" },
    { name: "Junaid", rating: "4", key: "6" },
    { name: "Ali", rating: "4", key: "7" },
  ]);
  // const pressHandler = () => {
  //   navigation.navigate("ReviewDetails");
  // };
  return (
    <View style={globalstyles.container}>
      <FlatList
        data={Review}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("ReviewDetails", item)}
          >
            <Text style={globalstyles.titleText}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
