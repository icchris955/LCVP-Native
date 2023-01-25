import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Button,
  StatusBar,
  ScrollView,
} from "react-native";
import { LinearProgress, ListItem, Icon } from "@rneui/themed";
import TouchableScale from "react-native-touchable-scale";

import RequestForm from "../../Components/Forms/requestForms/requestInitiationForm";

const CartItem = ({ icon, label }) => {
  return (
    <TouchableScale
      style={styles.MainContainer}
      activeScale={0.9}
      friction={50} //
      tension={100}
    >
      <Icon name={icon} size={50} color="#000000" />

      <View
        style={[
          styles.shadowProp,
          {
            width: "100%",
            borderRadius: 50,
          },
        ]}
      >
        <ListItem.Title
          style={{ alignSelf: "center", fontWeight: "bold", fontSize: 11 }}
        >
          {label}
        </ListItem.Title>
        <ListItem
          containerStyle={{
            padding: 3,
          }}
        >
          <Icon name="star" size={15} color="#ffd700" />
          <ListItem.Content>
            <ListItem.Title style={{ fontSize: 13 }}>20%</ListItem.Title>
          </ListItem.Content>
        </ListItem>
        <ListItem containerStyle={{ padding: 5 }}>
          <Icon name="schedule" size={15} />
          <ListItem.Content>
            <ListItem.Title style={{ fontSize: 13 }}>5 Years</ListItem.Title>
          </ListItem.Content>
        </ListItem>
      </View>
    </TouchableScale>
  );
};

const CartScreen = ({ navigation }) => {
  const items = [
    { icon: "house", label: "Morgage" },
    { icon: "money", label: "Personal Overdraft" },
    { icon: "directions-car", label: "Car" },
    { icon: "payments", label: "School Fees" },
    { icon: "add-business", label: "Startup" },
  ];

  return (
    <View style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#000000" />
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          alignSelf: "center",
          marginTop: 30,
          marginBottom: 10,
        }}
      >
        Recently Reviewed
      </Text>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 10,
        }}
        style={{
          height: "25%",
        }}
      >
        {items.map((item) => (
          <CartItem key={item.label} icon={item.icon} label={item.label} />
        ))}
      </ScrollView>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          height: "75%",
          padding: 30,
        }}
      >
        <RequestForm />
      </ScrollView>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingVertical: 0,
  },
  MainContainer: {
    backgroundColor: "#ffffff",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 0.5,
    borderColor: "#051336",
    marginHorizontal: 10,
    width: 130,
    height: 120,
    padding: 8,
    borderRadius: 3,
    shadowOffset: {
      width: -2,
      height: -1,
    },
  },
  shadowProp: {
    shadowColor: "#000000",
    shadowOffset: { width: 1, height: 6 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});
