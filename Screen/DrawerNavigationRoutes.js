// // Import React
// import React from "react";

// // Import Navigators from React Navigation
// import { createStackNavigator } from "@react-navigation/stack";
// import { createDrawerNavigator } from "@react-navigation/drawer";

// // Import Screens
// import HomeScreen from "./TabScreens/HomeScreen";
// import SettingsScreen from "./TabScreens/SettingsScreen";
// import CustomSidebarMenu from "../../lcvp/Components/CustomSidebarMenu";
// import NavigationDrawerHeader from "../../lcvp/Components/NavigationDrawerHeader";

// const Stack = createStackNavigator();
// const Drawer = createDrawerNavigator();

// const HomeScreenStack = ({ navigation }) => {
//   return (
//     <Stack.Navigator initialRouteName="HomeScreen">
//       <Stack.Screen
//         name="HomeScreen"
//         component={HomeScreen}
//         options={{
//           title: "Home", //Set Header Title
//           headerLeft: () => (
//             <NavigationDrawerHeader navigationProps={navigation} />
//           ),
//           headerStyle: {
//             backgroundColor: "#000000", //Set Header color
//           },
//           headerTintColor: "#FFFFFF", //Set Header text color
//           headerTitleStyle: {
//             fontWeight: "bold", //Set Header text style
//           },
//         }}
//       />
//     </Stack.Navigator>
//   );
// };

// const SettingScreenStack = ({ navigation }) => {
//   return (
//     <Stack.Navigator
//       initialRouteName="SettingsScreen"
//       screenOptions={{
//         headerLeft: () => (
//           <NavigationDrawerHeader navigationProps={navigation} />
//         ),
//         headerStyle: {
//           backgroundColor: "#307ecc", //Set Header color
//         },
//         headerTintColor: "#FFFFFF", //Set Header text color
//         headerTitleStyle: {
//           fontWeight: "bold", //Set Header text style
//         },
//       }}
//     >
//       <Stack.Screen
//         name="SettingsScreen"
//         component={SettingsScreen}
//         options={{
//           title: "Settings", //Set Header Title
//         }}
//       />
//     </Stack.Navigator>
//   );
// };

// const DrawerNavigatorRoutes = () => {
//   return (
//     <Drawer.Navigator
//       screenOptions={{
//         activeTintColor: "#cee1f2",
//         color: "#cee1f2",
//         itemStyle: { marginVertical: 5, color: "white" },
//         labelStyle: {
//           color: "#d8d8d8",
//         },
//         headerShown: false,
//       }}
//       drawerContent={CustomSidebarMenu}
//     >
//       <Drawer.Screen
//         name="homeScreenStack"
//         options={{ drawerLabel: "Home Screen" }}
//         component={HomeScreenStack}
//       />
//       <Drawer.Screen
//         name="settingScreenStack"
//         options={{ drawerLabel: "Setting Screen" }}
//         component={SettingScreenStack}
//       />
//     </Drawer.Navigator>
//   );
// };

// export default DrawerNavigatorRoutes;
