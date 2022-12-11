// Import React and Component
import React from "react";
import { Input } from "@rneui/base";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

//Import SetupForm
import SetupForm from "../../Components/Forms/SetupForm";
//Import Welcome Card
import WelcomeCard from "../../Components/Cards/WelcomeCard";

import { View, Text, SafeAreaView, StatusBar } from "react-native";
import { SignUpForm } from "../../Components/Forms/SignUpForm";

const HomeScreen = ({ navigate }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="light-content" backgroundColor="#FFFFFF" />
      <View style={{ flex: 1, padding: 16 }}>
        <WelcomeCard />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
