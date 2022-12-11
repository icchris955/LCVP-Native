import * as React from "react";
import { Card } from "@rneui/base";
import { View, Image, Text, StyleSheet } from "react-native";
import { Avatar, Chip } from "@rneui/themed";

export default WelcomeCard = () => {
  return (
    <Card containerStyle={(styles.shadowProp, styles.card)} wrapperStyle={{}}>
      <Card.Title>Profile Status</Card.Title>
      <Card.Divider />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            alignItems: "center",
            alignContent: "space-between",
          }}
        >
          <Avatar
            size={100}
            rounded
            source={{
              uri: "https://avatars0.githubusercontent.com/u/32242596?s=460&u=1ea285743fc4b083f95d6ee0be2e7bb8dcfc676e&v=4",
            }}
          >
            <Avatar.Accessory size={23} />
          </Avatar>
          <Text>Pranshu Chittora</Text>
        </View>
        <View styles={styles.shadowProp}>
          <Chip
            title="Verified"
            color="#000000"
            icon={{
              name: "check",
              type: "font-awesome",
              size: 20,
              color: "green",
            }}
            containerStyle={{ marginVertical: 5 }}
          />
          <Chip
            title="Beneficiary"
            color="#000000"
            icon={{
              name: "star",
              type: "font-awesome",
              size: 20,
              color: "green",
            }}
            containerStyle={{ marginVertical: 5 }}
          />
          <Chip
            title="Secured"
            color="#000000"
            icon={{
              name: "shield",
              type: "font-awesome",
              size: 20,
              color: "green",
            }}
            containerStyle={{ marginVertical: 5 }}
          />
        </View>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 13,
  },
  card: {
    backgroundColor: "white",
    borderRadius: 20,
    marginVertical: 10,
  },
  shadowProp: {
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});
