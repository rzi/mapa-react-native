import React from "react";
import { SafeAreaView } from "react-navigation";
import { Text, StyleSheet } from "react-native";

const MapListScreen = ({ navigation }) => {
  return (
    <SafeAreaView forceInsert={{ top: "always" }}>
      <Text style={{ fontSize: 50 }}>MapListScreen</Text>
    </SafeAreaView>
  );
};

export default MapListScreen;
