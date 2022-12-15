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
            Settings Screen
            {"\n\n"}
            Coming Soon
            {"\n\n"}
            Includes Personal Configurations
          </Text>
        </View>
        <Text
          style={{
            fontSize: 18,
            textAlign: "center",
            color: "grey",
          }}
        >
          InProgress
        </Text>
        <Text
          style={{
            fontSize: 16,
            textAlign: "center",
            color: "grey",
          }}
        ></Text>
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
