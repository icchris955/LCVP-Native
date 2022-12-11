import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { Card } from "@rneui/base";

ProductItem = () => {
  return (
    <TouchableOpacity>
      <Card
        title="Peter"
        // @ts-ignore
        titleNumberOfLines={2}
        image={{ uri: image.src }}
        containerStyle={styles.card}
      >
        <Text></Text>
      </Card>
    </TouchableOpacity>
  );
};

export default ProductItem;
