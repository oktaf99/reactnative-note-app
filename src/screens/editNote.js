import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const editNote = ({ navigation, route }) => {
  const [updatedTitle, setUpdatedTitle] = useState(route.params.note.title);
  const [updatedDesc, setUpdateDesc] = useState(route.params.note.desc);

  const handleSave = () => {
    // Update the note in your database or storage
    navigation.goBack();
  };

  const handleCancel = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Edit Note</Text>
      <TextInput
        style={styles.input}
        value={updatedTitle}
        onChangeText={(text) => setUpdatedTitle(text)}
        placeholder="Title"
      />
      <TextInput
        style={styles.input}
        value={updatedDesc}
        onChangeText={(text) => setUpdateDesc(text)}
        placeholder="Description"
        multiline={true}
        numberOfLines={4}
      />
      <View style={styles.buttons}>
        <Button title="Save" onPress={handleSave} />
        <Button title="Cancel" onPress={handleCancel} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginBottom: 10,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default editNote;