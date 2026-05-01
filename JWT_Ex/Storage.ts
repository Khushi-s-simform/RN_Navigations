import AsyncStorage from "@react-native-async-storage/async-storage";

export const saveTokens = async (access: string, refresh: string) => {
  await AsyncStorage.setItem("accessToken", access);
  await AsyncStorage.setItem("refreshToken", refresh);
};

export const getAccessToken = () =>
  AsyncStorage.getItem("accessToken");

export const getRefreshToken = () =>
  AsyncStorage.getItem("refreshToken");

export const clearTokens = async () => {
  await AsyncStorage.clear();
};