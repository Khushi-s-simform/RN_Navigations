import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Button, TextInput } from "react-native";
import {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
  User,
} from "../API/UserApi";

export default function UserScreen() {
  const [users, setUsers] = useState<User[]>([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // GET
  const loadUsers = async () => {
    try {
      const data = await getUsers();
      setUsers(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  // POST
  const handleAddUser = async () => {
    try {
      const newUser = await createUser({ name, email });
      setUsers([...users, newUser]);
      setName("");
      setEmail("");
    } catch (err) {
      console.log(err);
    }
  };

  // PUT
  const handleUpdateUser = async (id: number) => {
    try {
      const updated = await updateUser(id, {
        name: "Updated Name",
        email: "updated@email.com",
      });

      setUsers(users.map(u => (u.id === id ? updated : u)));
    } catch (err) {
      console.log(err);
    }
  };

  // DELETE
  const handleDeleteUser = async (id: number) => {
    try {
      await deleteUser(id);
      setUsers(users.filter(u => u.id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View style={{ padding: 20 }}>
     <TextInput
        placeholder="Name"
        value={name}
        onChangeText={setName}
        style={{ borderWidth: 1, marginBottom: 10 }}
      />

      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={{ borderWidth: 1, marginBottom: 10 }}
      />

      <Button title="Add User" onPress={handleAddUser} />

      <FlatList
        data={users}
        keyExtractor={(item) => item.id?.toString() || Math.random().toString()}
        renderItem={({ item }) => (
          <View style={{ marginVertical: 10 }}>
            <Text>{item.name}</Text>
            <Text>{item.email}</Text>

            <Button
              title="Update"
              onPress={() => handleUpdateUser(item.id!)}
            />

            <Button
              title="Delete"
              onPress={() => handleDeleteUser(item.id!)}
            />
          </View>
        )}
      />
    </View>
  );
}