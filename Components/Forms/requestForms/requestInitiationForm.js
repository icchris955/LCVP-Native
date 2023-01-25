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
import { Dialog, Icon, Input } from "@rneui/themed";

import Sliders from "./Slider";
import SliderRate from "./SliderRate";
import RequestTable from "./RequestTable";
import Chips from "./RateChip";

function RequestForm() {
  const [loanCategory, setloanCategory] = useState("");
  const [loanType, setloanType] = useState("");
  const input = React.createRef();

  const data = [
    { key: "1", value: "Home Equity" },
    { key: "2", value: "Mortgage" },
    { key: "3", value: "School Fees" },
    { key: "4", value: "Car Loan" },
    { key: "5", value: "Personal Overdraft" },
    { key: "6", value: "Renovation Loan" },
    { key: "7", value: "Construction Loan", disabled: true },
  ];
  const LoanCat = [
    { key: 1, value: "Business Loan" },
    { key: 2, value: "Personal Loan" },
  ];
  const [visible1, setVisible1] = useState(false);
  const toggleDialog1 = () => {
    setVisible1(!visible1);
  };
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
        keyboardAppearance="dark"
        inputMode="Numeric"
        shake
        inputContainerStyle={styles.input}
        containerStyle={styles.inputContainer}
      />
      <Sliders />
      <SliderRate />
      <RequestTable />
      {/* <Text
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
      </Text> */}
      <TouchableOpacity style={styles.button} onPress={toggleDialog1}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
      <Dialog isVisible={visible1} onBackdropPress={toggleDialog1}>
        <Dialog.Title
          title=""
          titleStyle={{ textAlign: "center", color: "green" }}
          overlayStyle={{ borderRadius: 50, backgroundColor: "green" }}
        />
        <Icon name="done" type="material" color="green" size={100} />
        <Text style={{ color: "green", textAlign: "center" }}>
          Submitted Successfuly
        </Text>
      </Dialog>
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
