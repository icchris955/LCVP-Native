import React from "react";
import { Text, View, Button } from "react-native";

const SearchScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Search Area!</Text>
      <Button
        title="Go to Settings"
        onPress={() => navigation.navigate("Account")}
      />
    </View>
  );
};

export default SearchScreen;
