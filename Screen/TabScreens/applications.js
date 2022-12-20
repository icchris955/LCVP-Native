import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Button,
  StatusBar,
  SafeAreaView,
  ScrollView,
  Pressable,
} from "react-native";
import { LinearProgress, ListItem, Icon } from "@rneui/themed";
import TouchableScale from "react-native-touchable-scale";

const CartItem = ({ icon, label }) => {
  return (
    <TouchableScale
      style={styles.MainContainer}
      activeScale={0.9}
      friction={50} //
      tension={100}
    >
      <Icon name={icon} size={70} color="#000000" />

      <View
        style={[
          styles.shadowProp,
          {
            width: "100%",
            borderRadius: 15,
            borderRadius: 20,
            borderColor: "#FFFFFF",
          },
        ]}
      >
        <ListItem.Title
          style={{ alignSelf: "center", fontWeight: "bold", fontSize: 15 }}
        >
          {label}
        </ListItem.Title>
        <ListItem
          containerStyle={{
            padding: 5,
          }}
        >
          <Icon name="star" size={20} />
          <ListItem.Content>
            <ListItem.Title>20%</ListItem.Title>
          </ListItem.Content>
        </ListItem>
        <ListItem containerStyle={{ padding: 5 }}>
          <Icon name="schedule" size={20} />
          <ListItem.Content>
            <ListItem.Title>5 Years</ListItem.Title>
          </ListItem.Content>
        </ListItem>
      </View>
    </TouchableScale>
  );
};

const CartScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" backgroundColor="#000000" />
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          alignSelf: "center",
          marginVertical: 10,
        }}
      >
        Requests
      </Text>
      <ScrollView
        horizontal={true}
        contentContainerStyle={{
          flex: 1,
          flexDirection: "row",
          alignItems: "space-around",
          alignContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        <CartItem icon={"house"} label="Morgage" />
        <CartItem icon={"money"} label="Personal Overdraft" />
      </ScrollView>
      <Text
        style={{
          fontSize: 20,
          textAlign: "center",
          marginBottom: 16,
        }}
      >
        Inquiry Screen
        {"\n\n"}
        Coming Soon
        {"\n\n"}
        Includes Application Interactive Application Form
      </Text>
      <Button title="Go Home" onPress={() => navigation.navigate("Home")} />
    </SafeAreaView>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  MainContainer: {
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 0.5,
    borderColor: "#051336",
    marginHorizontal: 20,
    width: 160,
    padding: 2,
    borderRadius: 3,
    shadowOffset: {
      width: -2,
      height: -1,
    },
  },
  shadowProp: {
    shadowColor: "#000000",
    shadowOffset: { width: 5, height: 8 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});
