import React from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"; // install @hookform/resolvers (not @hookform/resolvers/yup)
import * as yup from "yup";

const schema = yup.object().shape({
  title: yup
    .string()
    .required("Required")
    .min(3, "Too short")
    .max(30, "Too long"),
  content: yup.string(),
  language: yup.string().required("Required"),
});

const defaultValues = {
  title: "",
  content: "",
  language: "java",
};

const SignUpForm = () => {
  const { control, handleSubmit, errors, setValue, reset, getValues, watch } =
    useForm({
      resolver: yupResolver(schema),
    });

  const watchShowLanguage = watch("language", false);

  const onSubmit = (data) => alert(JSON.stringify(data));

  return (
    <View style={styles.container}>
      <Text>Example React Native Hook Form</Text>
      <View style={styles.content}>
        <Controller
          control={control}
          render={({ onChange, onBlur, value }) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Title"
            />
          )}
          name="title"
          defaultValue={defaultValues.title}
        />
        {errors?.title?.message && (
          <Text style={styles.error}>{errors.title.message}</Text>
        )}
        <Controller
          control={control}
          render={({ onChange, onBlur, value }) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Content"
            />
          )}
          name="content"
          defaultValue={defaultValues.content}
        />
        {errors?.content?.message && (
          <Text style={styles.error}>{errors.content.message}</Text>
        )}
        <Controller
          control={control}
          render={({ value }) => (
            <View style={styles.picker}>
              <Picker
                selectedValue={value}
                onValueChange={(itemValue) => setValue("language", itemValue)}
              >
                <Picker.Item label="Java" value="java" />
                <Picker.Item label="JavaScript" value="js" />
                <Picker.Item label="Html" value="html" />
              </Picker>
            </View>
          )}
          name="language"
          defaultValue={defaultValues.language}
        />
        {errors?.language?.message && (
          <Text style={styles.error}>{errors.language.message}</Text>
        )}
        {watchShowLanguage && getValues("language") === "js" ? (
          <Text>{`https://www.w3schools.com/js/default.asp`}</Text>
        ) : null}
        <Button onPress={() => reset(defaultValues)} title="Clear" />
        <Button
          onPress={handleSubmit(onSubmit)}
          title="Submit"
          color="#841584"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  content: {
    marginVertical: 20,
  },
  input: {
    backgroundColor: "#f2f2f2",
    marginBottom: 8,
    borderRadius: 6,
    paddingHorizontal: 16,
    fontSize: 16,
  },
  picker: {
    backgroundColor: "#f2f2f2",
    marginBottom: 10,
    borderRadius: 6,
  },
  error: {
    color: "#ff0000",
    fontSize: 9,
    marginBottom: 8,
    marginLeft: 6,
  },
});

export default SignUpForm;
