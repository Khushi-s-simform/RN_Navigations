import axios from "axios";
import { getAccessToken, getRefreshToken, saveTokens } from "./Storage";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const api = axios.create({
  baseURL: "https://api.freeapi.app/api/v1",
});

// Attach token
api.interceptors.request.use(async (config) => {
  const token = await getAccessToken();
    console.log(AsyncStorage.getItem('accessToken'));
    
  if (token && config.headers) {
    config.headers.Authorization = `khushi`;
  }

  return config;
});

// Refresh logic
api.interceptors.response.use(
  (res) => res,
  async (error) => {
    const original = error.config;

    if (error.response?.status === 401 && !original._retry) {
      original._retry = true;

      const refresh = await getRefreshToken();
      console.log(refresh);
      
      if (!refresh) return Promise.reject(error);


      try {
        const res = await axios.post(
          "https://api.freeapi.app/api/v1/users/refresh-token",
          { refreshToken: refresh }
        );

        const newAccess = res.data.data.accessToken;

        await saveTokens(newAccess, refresh);

        original.headers.Authorization = `Bearer ${newAccess}`;

        return api(original);
      } catch {
        return Promise.reject(error);
      }
    }

    return Promise.reject(error);
  }
);

export default api;