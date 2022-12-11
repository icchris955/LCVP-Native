import React from "react";

import { StatusBar } from "react-native";

// Import Navigators from React Navigation
import { createStackNavigator } from "@react-navigation/stack";

//Import Screen
import SettingsScreen from "./SettingsScreen";

const Stack = createStackNavigator();

const SettingScreenStack = ({ navigation }) => {
  return (
    <Stack.Navigator
      initialRouteName="SettingsScreen"
      screenOptions={{
        headerShown: false,
      }}
    >
      
        
        <Stack.Screen
          name="SettingsScreen"
          component={SettingsScreen}
          options={{
            headerShown: false,
            title: "Settings", //Set Header Title
          }}
        />
      
    </Stack.Navigator>
  );
};
export default SettingScreenStack;
