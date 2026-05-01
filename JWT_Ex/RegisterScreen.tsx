import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Alert } from "react-native";
import api from "./api";
import axios from "axios";

export default function RegisterScreen({ navigation }: any) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = async () => {
    try {
      console.log("Sending 👉", { username, email, password });

      await api.post('/users/register', {
        username,
        email,
        password
      });

      Alert.alert("Success", "Registered successfully");
      navigation.navigate('Login');
    } catch (e) {
      if (axios.isAxiosError(e)) {
        console.log(e.response?.data);
        Alert.alert("Error", JSON.stringify(e.response?.data?.errors));
      }
    }
  };

  return (
    <View style={styles.container}>
      <TextInput placeholder="Username" style={styles.input} onChangeText={setUsername} autoCapitalize="none"/>
      <TextInput placeholder="Email" style={styles.input} onChangeText={setEmail} />
      <TextInput placeholder="Password" style={styles.input} secureTextEntry onChangeText={setPassword} />
      <Button title="Register" onPress={register} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20 },
  input: { borderWidth: 1, marginBottom: 10, padding: 10, borderRadius: 8 },
});