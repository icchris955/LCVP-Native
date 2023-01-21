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
import { Picker } from "@react-native-picker/picker";
import { Icon } from "@rneui/themed";

function InitiationForm() {
  const pickerRef = useRef();

  function open() {
    pickerRef.current.focus();
  }

  function close() {
    pickerRef.current.blur();
  }
  const [selectedLanguage, setSelectedLanguage] = useState();
  const [selected, setSelected] = useState("");

  const data = [
    { key: "1", value: "Mobiles", disabled: true },
    { key: "2", value: "Appliances" },
    { key: "3", value: "Cameras" },
    { key: "4", value: "Computers", disabled: true },
    { key: "5", value: "Vegetables" },
    { key: "6", value: "Diary Products" },
    { key: "7", value: "Drinks" },
  ];

  return (
    <View style={styles.formContainer}>
      <Text style={styles.label}>Name:</Text>
      <TextInput style={styles.input} />

      <Text style={styles.label}>Email:</Text>
      <TextInput style={styles.input} />

      <Text style={styles.label}>Password:</Text>
      <TextInput style={styles.input} secureTextEntry={true} />
      {/* <Picker
      <Text style={styles.label}>Country:</Text>
        ref={pickerRef}
        selectedValue={selectedLanguage}
        onValueChange={(itemValue, itemIndex) => setSelectedLanguage(itemValue)}
        style={styles.select}
        mode={"dropdown"}
      >
        <Picker.Item label="United States" value="US" />
        <Picker.Item label="Canada" value="CA" />
        <Picker.Item label="Mexico" value="MX" />
      </Picker> */}
      <Text style={styles.label}>Vegetable:</Text>
      <SelectList
        data={data}
        setSelected={setSelected}
        dropdownStyles={{ backgroundColor: "white" }}
        boxStyles={styles.dropdown}
        inputStyles={{ fontSize: 16 }}
        arrowicon={<Icon name="arrow-drop-down" size={20} color="#000000" />}
        closeicon={<Icon name="arrow-drop-up" size={20} color="#000000" />}
      />
      <Text style={styles.label}>I dont know:</Text>
      <MultipleSelectList
        setSelected={(val) => setSelected(val)}
        data={data}
        save="value"
        onSelect={() => alert(selected)}
        label="Categories"
        boxStyles={styles.dropdown}
        inputStyles={{ fontSize: 16 }}
        dropdownStyles={styles.dropdownlist}
        arrowicon={<Icon name="arrow-drop-down" size={20} color="#000000" />}
        closeicon={<Icon name="arrow-drop-up" size={20} color="#000000" />}
      />
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
});

export default InitiationForm;
