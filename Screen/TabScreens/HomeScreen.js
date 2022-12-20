// Import React and Component
import React from "react";
import { Button, Input } from "@rneui/base";

//Import SetupForm
import SetupForm from "../../Components/Forms/SetupForm";
//Import Welcome Card
import ProfileStatus from "../../Components/Cards/ProfileStatusCard";
import Indulge from "../../Components/Cards/IndulgeCard";
import LatestValidation from "../../Components/Cards/LatestValidationCard";

import { View, Text, SafeAreaView, StyleSheet, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { SignUpForm } from "../../Components/Forms/SignUpForm";

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "space-between" }}>
      <StatusBar style="light" />
      <ScrollView
        style={styles.scrollView}
        decelerationRate="fast"
        directionalLockEnabled={false}
        keyboardDismissMode={["on-drag", "interactive"]}
        showsVerticalScrollIndicator={false}
        indicatorStyle="black"
      >
        <ProfileStatus />
        <Indulge />

        <LatestValidation />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-around",
  },
  scrollView: {
    flex: 1,
    padding: 10,
  },
  shadowProp: {
    shadowColor: "#000000",
    shadowOffset: { width: -5, height: 8 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});
