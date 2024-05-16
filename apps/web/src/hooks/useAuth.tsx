import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

const USER_API = "http://localhost:3000";

type User = {
  name: string;
  email: string;
};

type AuthContextType = {
  token: string | null;
  user: User | null;
  login: (email: string, password: string) => Promise<string>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

type AuthProviderProps = {
  children: React.ReactNode;
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      return;
    }

    const decoded = jwtDecode(token);
    if (!decoded) {
      return;
    }

    setToken(token);
    setUser(decoded as User);
  }, []);

  const login = async (email: string, password: string) => {
    const response = await axios.post(`${USER_API}/auth/login`, {
      email,
      password,
    });

    const token = response.headers["x-auth-token"];
    if (!token) {
      return "";
    }

    const decoded = jwtDecode(token);
    if (!decoded) {
      return "";
    }

    setToken(token);
    setUser(decoded as User);

    localStorage.setItem("token", token);

    return token;
  };

  return (
    <AuthContext.Provider value={{ token, user, login }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within a AuthProvider");
  }
  return context;
};
