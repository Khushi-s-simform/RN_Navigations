import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

type Props = {
  name: string;
  theme : string ;
  onChangeName: (name: string) => void;
};

export default function ProfileUI({ name, onChangeName , theme}: Props) {
  const [newName, setNewName] = useState('');
 

  return (
    <View style={{ padding: 20 }}>
      <Text>Profile Screen</Text>
      <Text>theme : {theme}</Text>
      <Text>Current Name: {name}</Text>


      <TextInput
        placeholder="Enter new name"
        value={newName}
        onChangeText={setNewName}
        style={{ borderWidth: 1, marginVertical: 10 }}
      />

      <Button title="Update Name" onPress={() => onChangeName(newName)} />
    </View>
  );
}