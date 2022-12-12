// Import React and Component
import React, { useState, useEffect } from "react";
import {
  ActivityIndicator,
  View,
  StyleSheet,
  Image,
  StatusBar,
  SafeView,
} from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";

const SplashScreen = ({ navigation }) => {
  //State for ActivityIndicator animation
  const [animating, setAnimating] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setAnimating(false);
      //Check if user_id is set or not
      //If not then send for Authentication
      //else send to Home Screen
      AsyncStorage.getItem("user_id").then((value) =>
        navigation.replace(
          value === null ? "DrawerNavigationRoutes" : "DrawerNavigationRoutes"
        )
      );
    }, 5000);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <Image
        source={require("../assets/splash.png")}
        style={{ width: "60%", resizeMode: "contain", margin: 10 }}
      />
      <ActivityIndicator
        animating={animating}
        color="#00ff00"
        size="large"
        style={styles.activityIndicator}
      />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "#FFFFFF",
  },
  activityIndicator: {
    alignItems: "center",
    height: 80,
    marginVertical: 100,
  },
});
