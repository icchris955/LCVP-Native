import * as React from "react";
import { Card } from "@rneui/base";
import { View, Image, Text, StyleSheet } from "react-native";
import { Avatar, Chip } from "@rneui/themed";

export default ProfileStatus = (props) => {
  return (
    <Card
      containerStyle={[styles.shadowProp, styles.card]}
      wrapperStyle={styles.card}
    >
      <Card.Title style={{ fontSize: 18, padding: 0, marginBottom: 10 }}>
        Profile Status
      </Card.Title>

      <Card.Divider />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View
          style={[
            {
              alignItems: "center",
            },
            styles.ShadowProp,
          ]}
        >
          <Avatar
            size={80}
            rounded
            source={{
              uri: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=100",
            }}
          >
            <Avatar.Accessory size={23} />
          </Avatar>
          <Text style={{ marginTop: 15 }}>Chris Jackson</Text>
        </View>
        <View styles={{}}>
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
            title="Insured"
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
    borderColor: "#FFFFFF",
    marginVertical: 10,
  },
  shadowProp: {
    shadowColor: "#000000",
    shadowOffset: { width: -5, height: 8 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});
