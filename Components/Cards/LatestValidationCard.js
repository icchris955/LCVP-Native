/**
 * Index Card that show 
 */

import * as React from "react";
import { Card } from "@rneui/base";
import { View, Button, Text, StyleSheet } from "react-native";
import { Avatar, Chip, LinearProgress } from "@rneui/themed";

export default LatestValidation = (props) => {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    let subs = true;
    if (progress < 1 && progress !== 0) {
      setTimeout(() => {
        if (subs) {
          setProgress(progress + 0.1);
        }
      }, 100);
    }
    return () => {
      subs = false;
    };
  }, [progress]);
  return (
    <Card
      containerStyle={[styles.shadowProp, styles.card]}
      wrapperStyle={styles.card}
    >
      <Card.Title>Latest Validation</Card.Title>

      <Card.Divider />
      <View
        style={{
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text>Determinate Variant </Text>
        <LinearProgress
          style={{ marginVertical: 10 }}
          value={progress}
          color="green"
          variant="determinate"
        />

        <Button
          disabled={progress > 0}
          onPress={() => {
            setProgress(0.00001);
          }}
          title={"Start Progress"}
          containerStyle={{ margin: 10 }}
        />
        <Button
          disabled={progress === 0}
          onPress={() => {
            setProgress(0);
          }}
          title={"Restart"}
          containerStyle={{ margin: 10 }}
        />
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
