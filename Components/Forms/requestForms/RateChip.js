import React from "react";
import { View, StyleSheet } from "react-native";
import { Chip } from "@rneui/themed";

const Chips = ({ rate }) => {
  return (
    <>
      <View style={styles.contentView}>
        <Chip
          title={rate}
          icon={{
            name: "Percent",
            type: "material",
            size: 20,
            color: "white",
          }}
          containerStyle={{ marginVertical: 15 }}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  contentView: {
    flex: 1,
    marginTop: 20,
  },
});

export default Chips;
