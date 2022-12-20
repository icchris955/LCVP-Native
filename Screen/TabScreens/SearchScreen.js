import React from "react";
import { Text, View, Button, SafeAreaView } from "react-native";

const SearchScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Button
          title="Go to Settings"
          onPress={() => navigation.navigate("Account")}
        />
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontSize: 20,
              textAlign: "center",
              marginBottom: 16,
            }}
          >
            Browse Screen
            {"\n\n"}
            Coming Soon
            {"\n\n"}
            Browse through All Loan Categories & Review requirements, conditions
            and interest rates.
          </Text>
        </View>
        <Text
          style={{
            fontSize: 18,
            textAlign: "center",
            color: "grey",
          }}
        >
          InProgress
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default SearchScreen;
