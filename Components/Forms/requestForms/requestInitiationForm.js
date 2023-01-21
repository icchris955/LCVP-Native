import React, { useState, useRef } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
  Text,
} from "react-native";
import {
  SelectList,
  MultipleSelectList,
} from "react-native-dropdown-select-list";

import { Icon, Input } from "@rneui/themed";
import Sliders from "./Slider";
import Chips from "./RateChip";

function RequestForm() {
  const [loanCategory, setloanCategory] = useState("");
  const [loanType, setloanType] = useState("");
  const input = React.createRef();

  const data = [
    { key: "1", value: "Home Loan", disabled: true },
    { key: "2", value: "Appliances" },
    { key: "3", value: "Cameras" },
    { key: "4", value: "Computers", disabled: true },
    { key: "5", value: "Vegetables" },
    { key: "6", value: "Diary Products" },
    { key: "7", value: "Drinks" },
  ];
  const LoanCat = [
    { key: 1, value: "Business Loan" },
    { key: 2, value: "Personal Loan" },
  ];
  return (
    <View>
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          alignSelf: "center",
          marginBottom: 15,
        }}
      >
        Make New Request{" "}
      </Text>
      <Text style={styles.label}>Loan Categories </Text>
      <SelectList
        data={LoanCat}
        setSelected={setloanCategory}
        dropdownStyles={{ backgroundColor: "white" }}
        boxStyles={styles.dropdown}
        inputStyles={{ fontSize: 16 }}
        arrowicon={<Icon name="arrow-drop-down" size={20} color="#000000" />}
        closeicon={<Icon name="arrow-drop-up" size={20} color="#000000" />}
      />
      <Text style={styles.label}>Loan Type </Text>
      <SelectList
        data={data}
        setSelected={setloanType}
        dropdownStyles={{ backgroundColor: "white" }}
        boxStyles={styles.dropdown}
        inputStyles={{ fontSize: 16 }}
        arrowicon={<Icon name="arrow-drop-down" size={20} color="#000000" />}
        closeicon={<Icon name="arrow-drop-up" size={20} color="#000000" />}
      />
      <Input
        placeholder="Loan Amount"
        focus
        shake
        inputContainerStyle={styles.input}
        containerStyle={styles.inputContainer}
      />
      <Sliders />
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
        }}
      >
        Rate:
      </Text>
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
        }}
      >
        Payment Period:
      </Text>
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
        }}
      >
        Monthly Installments
      </Text>
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
        }}
      >
        Total Payments
      </Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    padding: 20,
  },
  subHeader: {},
  label: {
    color: "#000000",
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    backgroundColor: "#000000",
    borderRadius: 4,
    padding: 12,
    marginBottom: 20,
    color: "#ffffff",
  },
  select: {
    backgroundColor: "#ffffff",
    borderRadius: 4,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#000000",
    borderRadius: 4,
    padding: 12,
    marginVertical: 30,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    textAlign: "center",
  },
  dropdown: {
    backgroundColor: "#ffffff",
    fontSize: 15,
    marginBottom: 20,
  },
  dropdownlist: {
    backgroundColor: "#ffffff",
    marginBottom: 20,
  },
  input: {
    backgroundColor: "#ffffff",
    paddingHorizontal: 5,
    width: "100%",
  },
  inputContainer: {
    padding: 0,
    width: "100%",
  },
});
export default RequestForm;
