// Import React and Component
import React from "react";

import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { FAB, ListItem, Avatar, Icon, Button } from "@rneui/themed";
import TouchableScale from "react-native-touchable-scale";
import LinearGradient from "react-native-linear-gradient";

const list = [
  {
    name: "Preferences",
    icon: "settings",
    route: "Vice President",
  },
  {
    name: "My Dashboard",
    icon: "recent-actors",
    route: "Vice Chairman",
  },
  {
    name: "Languages",
    icon: "language",
    route: "Vice Chairman",
  },
  {
    name: "Privacy & Security",
    icon: "security",
    route: "Vice Chairman",
  },
  {
    name: "Tell a Friend",
    icon: "people",
    route: "Vice Chairman",
  },
];

const Profile = ({ userName }) => {
  return (
    <View
      style={{
        width: "100%",
        margin: 50,
      }}
    >
      <ListItem
        Component={TouchableScale}
        friction={90} //
        tension={100} // These props are passed to the parent component (here TouchableScale)
        activeScale={0.95} //
        containerStyle={[
          { borderRadius: 20, borderColor: "#FFFFFF" },
          styles.shadowProp,
        ]}
      >
        <Avatar
          size={50}
          rounded
          source={{
            uri: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=100",
          }}
        />
        <ListItem.Content>
          <ListItem.Title style={{ color: "black", fontWeight: "bold" }}>
            <Text> Chris Jackson</Text>
          </ListItem.Title>
          <ListItem.Subtitle style={{ color: "black" }}>
            <Text>View Profile</Text>
          </ListItem.Subtitle>
        </ListItem.Content>
        <ListItem.Chevron color="black" />
      </ListItem>
    </View>
  );
};

const SettingsList = () => {
  return list.map((l, i) => (
    <TouchableOpacity style={{ width: "100%" }}>
      <ListItem
        key={i}
        bottomDivider
        containerStyle={{ backgroundColor: "transparent" }}
      >
        <Icon name={l.icon} />
        <ListItem.Content>
          <ListItem.Title>{l.name}</ListItem.Title>
        </ListItem.Content>
        <ListItem.Chevron color="black" />
      </ListItem>
    </TouchableOpacity>
  ));
};

const SettingsScreen = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          alignItems: "flex-start",
          padding: 18,
        }}
      >
        <View
          style={{
            flex: 1,
            alignItems: "center",
          }}
        >
          <Profile />
          <SettingsList />
        </View>
      </View>
      <Button
        buttonStyle={{
          backgroundColor: "black",
          borderWidth: 2,
          borderColor: "white",
          borderRadius: 30,
          justifyContent: "center",
        }}
        containerStyle={{
          width: 150,
          marginHorizontal: 50,
          marginVertical: 10,
          alignSelf: "center",
        }}
        titleStyle={{ fontWeight: "bold" }}
      >
        <Icon
          name="exit-to-app"
          color="white"
          style={{ alignSelf: "flex-start" }}
        />
        Sign Out
      </Button>
      <Text
        style={{
          fontSize: 18,
          textAlign: "center",
          color: "grey",
        }}
      >
        InProgress
      </Text>
      <FAB
        visible={true}
        size="large"
        placement="right"
        color="skyblue"
        style={[styles.shadowProp, styles.floatingButton]}
        icon={{
          name: "contact-support",
          color: "#FFFFFF",
          size: 29,
        }}
        loadingProps={{ animating: true }}
        loadingStyle={{}}
        onPress={() => alert("click")}
      />
    </SafeAreaView>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  floatingButton: {
    padding: 0,
  },
  shadowProp: {
    shadowColor: "#000000",
    shadowOffset: { width: -5, height: 8 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
});
