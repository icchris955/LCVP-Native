import React from "react";
import { View, StyleSheet } from "react-native";

const CreditCard = () => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.cardNumberContainer}>
        <View style={styles.cardNumber}>
          <View style={styles.cardNumberDigits}>
            <Text style={styles.cardNumberText}>1234</Text>
            <Text style={styles.cardNumberText}>5678</Text>
            <Text style={styles.cardNumberText}>9012</Text>
            <Text style={styles.cardNumberText}>3456</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: 300,
    height: 200,
    backgroundColor: "white",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
  cardNumberContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  cardNumber: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    borderRadius: 10,
    padding: 20,
  },
  cardNumberDigits: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cardNumberText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default CreditCard;
