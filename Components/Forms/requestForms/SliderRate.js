import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Slider, Text, Icon } from "@rneui/themed";

const value = null;

const SliderRate = () => {
  const [value, setValue] = useState(0);
  const interpolate = (start, end) => {
    let k = (value - 0) / 10; // 0 =>min  && 10 => MAX
    return Math.ceil((1 - k) * start + k * end) % 256;
  };

  const color = () => {
    let r = interpolate(255, 0);
    let g = interpolate(0, 255);
    let b = interpolate(0, 0);
    return `rgb(${r},${g},${b})`;
  };

  return (
    <>
      <Text style={styles.subHeader}>Rate: {value} %</Text>

      <View style={[styles.contentView]}>
        <Slider
          value={value}
          onValueChange={setValue}
          maximumValue={30}
          minimumValue={0}
          step={1}
          allowTouchTrack
          trackStyle={{ height: 10, backgroundColor: "transparent" }}
          thumbStyle={{ height: 2, width: 10, backgroundColor: "transparent" }}
          thumbProps={{
            children: (
              <Icon
                name="alarm-plus"
                type="material-community"
                size={10}
                reverse
                containerStyle={{ bottom: 19, right: 16 }}
                raised
                solid
                color="#000000"
              />
            ),
          }}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  contentView: {
    padding: 10,
    width: "100%",
    justifyContent: "center",
    alignItems: "stretch",
  },
  subHeader: {
    color: "#000000",
    fontSize: 16,
  },
});

export default SliderRate;
