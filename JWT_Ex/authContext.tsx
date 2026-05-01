import React, { createContext, useEffect, useState } from "react";
import api from "./api";
import { saveTokens, getAccessToken, getRefreshToken, clearTokens } from "./Storage";

interface AuthType {
  user: any;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

export const AuthContext = createContext<AuthType>({} as AuthType);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const checkAuth = async () => {
    const access = await getAccessToken();
    const refresh = await getRefreshToken();

    try {
      if (access) {
        setUser({});
      } else if (refresh) {
        const res = await api.post("/users/refresh-token", {
          refreshToken: refresh,
        });

        await saveTokens(res.data.data.accessToken, refresh);
        setUser({});
      }
    } catch {
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  const login = async (email: string, password: string) => {
    const res = await api.post("/users/login", { email, password });

    const { accessToken, refreshToken, user } = res.data.data;

    await saveTokens(accessToken, refreshToken);
    setUser(user);
  };

  const logout = async () => {
    await clearTokens();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};