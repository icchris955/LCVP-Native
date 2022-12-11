import React from "react";

// Import Navigators from React Navigation
import { createStackNavigator } from "@react-navigation/stack";

//Import Screens
import HomeScreen from "./HomeScreen";

const Stack = createStackNavigator();

const HomeScreenStack = ({ navigation }) => {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: "LCVP", //Set Header Title
          headerStyle: {
            backgroundColor: "#000000", //Set Header color
          },
          headerTintColor: "#FFFFFF", //Set Header text color
          headerTitleStyle: {
            fontWeight: "bold", //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  );
};
export default HomeScreenStack;
