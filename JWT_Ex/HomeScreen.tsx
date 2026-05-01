import React, { useContext, useState } from "react";
import { View, Text, Button } from "react-native";
import { AuthContext } from "./authContext";
import api from "./api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getAccessToken } from "./Storage";
export default function HomeScreen() {
  const [data, setData] = useState<any>(null);
  const { logout } = useContext(AuthContext);

  async function fetchapi() {
    try {
      const res = await api.get('/users/current-user');
      console.log("API DATA ", res.data);

      setData(res.data.data); 
    } catch (error) {
      console.log("ERROR ", error);
    }
  }

  async function changeAccToken() {
    try {
        const changedtoken = AsyncStorage.setItem("accessToken" , "cheiufhijr")
    } catch (error) {
        console.log(error);
        
    }
  }

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Welcome</Text>

      <Button title="Logout" onPress={logout} />
      <Button title="Fetch User" onPress={fetchapi} />

      {data && (
        <View style={{ marginTop: 20 }}>
          <Text>Username: {data.username}</Text>
          <Text>Email: {data.email}</Text>
        </View>
      )}

      <Button title="change access token" onPress={changeAccToken} />
    </View>
  );
}