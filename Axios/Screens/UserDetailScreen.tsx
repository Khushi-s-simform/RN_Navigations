import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { RouteProp, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "../Navigation/AppNavigator";

type RouteProps = RouteProp<RootStackParamList, "UserDetail">;

export default function UserDetailScreen() {
  const route = useRoute<RouteProps>();
  const { user } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{user.name}</Text>

      <Text style={styles.label}>Email:</Text>
      <Text style={styles.value}>{user.email}</Text>

      <Text style={styles.label}>Phone:</Text>
      <Text style={styles.value}>{user.phone}</Text>

      <Text style={styles.label}>Website:</Text>
      <Text style={styles.value}>{user.website}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },

  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 20,
  },

  label: {
    fontSize: 16,
    fontWeight: "600",
    marginTop: 10,
  },

  value: {
    fontSize: 16,
    color: "#333",
  },
});