// Import React and Component
import React from "react";
import { Input } from "@rneui/base";

//Import SetupForm
import SetupForm from "../../Components/Forms/SetupForm";
//Import Welcome Card
import ProfileStatus from "../../Components/Cards/ProfileStatusCard";
import Indulge from "../../Components/Cards/IndulgeCard";
import LatestValidation from "../../Components/Cards/LatestValidationCard";

import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  ScrollView,
} from "react-native";
import { SignUpForm } from "../../Components/Forms/SignUpForm";

const HomeScreen = ({ navigate }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
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
    height: "100%",
  },
  shadowProp: {
    shadowColor: "#000000",
    shadowOffset: { width: -5, height: 8 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});
