import * as React from "react";
import { Card } from "@rneui/base";
import { View, Image, Text, StyleSheet } from "react-native";
import { Avatar, Chip } from "@rneui/themed";

export default Indulge = (props) => {
  return (
    <Card
      containerStyle={[styles.shadowProp, styles.card]}
      wrapperStyle={styles.card}
    >
      <Card.Title>Indulge</Card.Title>

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
              uri: "https://avatars0.githubusercontent.com/u/32242596?s=460&u=1ea285743fc4b083f95d6ee0be2e7bb8dcfc676e&v=4",
            }}
          >
            <Avatar.Accessory size={23} />
          </Avatar>
          <Text style={{ marginTop: 15 }}>Pranshu Chittora</Text>
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
