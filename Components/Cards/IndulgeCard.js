import * as React from "react";
import { Card } from "@rneui/base";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import { LinearProgress, ListItem, Icon, Button } from "@rneui/themed";

const Listelem = ({ label, progress, icon, variant }) => {
  return (
    <ListItem.Swipeable
      leftContent={(reset) => (
        <Button
          title="Info"
          onPress={() => reset()}
          icon={{ name: "info", color: "white" }}
          buttonStyle={{ minHeight: "100%" }}
        />
      )}
      rightContent={(reset) => (
        <Button
          title="Ignore"
          onPress={() => reset()}
          icon={{ name: "delete", color: "white" }}
          buttonStyle={{ minHeight: "100%", backgroundColor: "red" }}
        />
      )}
      containerStyle={styles.listItem}
    >
      <Icon name={icon} size={20} color="#000000" raised />
      <ListItem.Content>
        <ListItem.Title>{label}</ListItem.Title>
      </ListItem.Content>
      <LinearProgress
        style={{ marginVertical: 10, width: 70, color: "black" }}
        value={progress}
        color="#000000"
        variant={variant}
      />
    </ListItem.Swipeable>
  );
};

export default Indulge = () => {
  return (
    <Card
      containerStyle={[styles.shadowProp, styles.card]}
      wrapperStyle={styles.card}
    >
      <Card.Title style={{ fontSize: 18, padding: 0, marginBottom: 10 }}>
        Indulge (Recommended)
      </Card.Title>
      <Card.Divider />
      <ScrollView style={styles.CardList}>
        <Listelem
          label="Mortgage "
          progress={1}
          icon="home-work"
          variant="determinate"
        />
        <Listelem label="Construction Loan " icon="foundation" progress={0} />
        <Listelem label="Home Equity " progress={1} icon="local-mall" />
      </ScrollView>
    </Card>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 18,
    fontWeight: "600",
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
  listItem: {
    paddingTop: 0,
    marginVertical: 0,
    height: 60,
  },
  CardList: {
    height: 170,
  },
});
