import React from "react";
import { SafeAreaView } from "react-navigation";
import { Text, StyleSheet } from "react-native";
import Map from "../components/Map";

const MapScreen = ({ navigation }) => {
  return (
    <SafeAreaView forceInsert={{ top: "always" }}>
      <Map />
    </SafeAreaView>
  );
};

export default MapScreen;
