import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Button,
  StatusBar,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const CartItem = ({ icon }) => {
  return (
    <View style={styles.MainContainer}>
      <TouchableOpacity>
        <Icon name={icon} size={100} color="#900" />
        <Text>Service Title</Text>
      </TouchableOpacity>
      <View>
        <Text>Delivery Time</Text>
        <Text>Service Fee</Text>
        <Text>Appointment</Text>
      </View>
    </View>
  );
};

const CartScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <StatusBar barStyle="dark-content" backgroundColor="#000000" />
      <Text>Cart!</Text>
      <CartItem icon={"car"} />
      <Button title="Go Home" onPress={() => navigation.navigate("Home")} />
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  MainContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5F9EE",
    borderWidth: 0.5,
    borderColor: "#051336",
    marginBottom: 10,
    width: 150,
    marginHorizontal: 5,
    padding: 2,
    borderRadius: 3,
    shadowOffset: {
      width: -2,
      height: -1,
    },
  },
});
