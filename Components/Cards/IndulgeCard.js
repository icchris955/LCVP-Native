import * as React from "react";
import { Card } from "@rneui/base";
import { StyleSheet } from "react-native";
import { ListItem, Avatar } from "@rneui/themed";

export default Indulge = (props) => {
  return (
    <Card
      containerStyle={[styles.shadowProp, styles.card]}
      wrapperStyle={styles.card}
    >
      <Card.Title>Indulge</Card.Title>
      <Card.Divider />
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
    shadowOffset: { width: 5, height: 8 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});
