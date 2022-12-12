// Import React and Component
import React from "react";
import { StatusBar } from "react-native";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import { FAB } from "@rneui/themed";

const SettingsScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" backgroundColor="#000000" />
      <View style={{ flex: 1, padding: 16 }}>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontSize: 20,
              textAlign: "center",
              marginBottom: 16,
            }}
          >
            Example of Splash, Login and Sign Up in React Native
            {"\n\n"}
            This is the Settings Screen
          </Text>
        </View>
        <Text
          style={{
            fontSize: 18,
            textAlign: "center",
            color: "grey",
          }}
        >
          Splash, Login and Register Example{"\n"}React Native
        </Text>
        <Text
          style={{
            fontSize: 16,
            textAlign: "center",
            color: "grey",
          }}
        >
          www.aboutreact.com
        </Text>
      </View>
      <FAB
        visible={true}
        size="large"
        placement="right"
        color="skyblue"
        style={[styles.shadowProp, styles.floatingButton]}
        icon={{
          name: "contact-support",
          color: "#FFFFFF",
          size: 29,
        }}
        loadingProps={{ animating: true }}
        loadingStyle={{}}
        onPress={() => alert("click")}
      />
    </SafeAreaView>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  floatingButton: {
    padding: 0,
  },
});
