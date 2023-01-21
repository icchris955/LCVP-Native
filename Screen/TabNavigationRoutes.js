// Import React
import React from "react";
// Import TabNavigation icons
import Ionicons from "@expo/vector-icons/Ionicons";
// Import Navigators from React Navigation
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Import Screens
import HomeScreenStack from "./TabScreens/HomeStack";
import SettingScreenStack from "./TabScreens/SettingScreenStack";
import CartScreen from "./TabScreens/applications";
import SearchScreen from "./TabScreens/SearchScreen";
// import CustomSidebarMenu from "../../lcvp/Components/CustomSidebarMenu";
// import NavigationDrawerHeader from "../../lcvp/Components/NavigationDrawerHeader";

const Tab = createBottomTabNavigator();

const TabNavigationRoutes = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = focused ? "grid" : "grid-outline";
          } else if (route.name === "Account") {
            iconName = focused ? "person" : "person-outline";
          } else if (route.name === "Browse") {
            iconName = focused ? "search" : "search-outline";
          } else if (route.name === "Credit") {
            iconName = focused ? "card" : "card-outline";
          }
          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#000000",
        tabBarInactiveTintColor: "gray",
        headerShown: false,
        headerStyle: {
          color: "white",
        },
        animationEnabled: true,
        cardStyle: { backgroundColor: "transparent" },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreenStack} />
      <Tab.Screen
        name="Credit"
        component={CartScreen}
        options={{
          tabBarBadge: 3,
          tabBarBadgeStyle: { backgroundColor: "red", color: "#FFFFFF" },
        }}
      />
      <Tab.Screen name="Browse" component={SearchScreen} />
      <Tab.Screen name="Account" component={SettingScreenStack} />
    </Tab.Navigator>
  );
};

export default TabNavigationRoutes;
