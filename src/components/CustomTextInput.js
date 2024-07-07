import React from "react";
import { TextInput, Text, StyleSheet, View } from "react-native";

const CustomTextInput = ({
  text,
  onChange,
  label,
  multiline,
  numberOfLines,
}) => {
  const styles = StyleSheet.create({
    textInputWrapper: {
      marginTop: 20,
      gap: 10,
    },
    input: {
      borderWidth: 2,
      borderColor: "#ddd",
      padding: 20,
    },
  });

  return (
    <View style={styles.textInputWrapper}>
      <Text>{label}</Text>
      <TextInput
        multiline={multiline}
        numberOfLines={numberOfLines}
        style={styles.input}
        placeholder={label}
        onChange={onChange}
        defaultValue={text}
      />
    </View>
  );
};

export default CustomTextInput;
