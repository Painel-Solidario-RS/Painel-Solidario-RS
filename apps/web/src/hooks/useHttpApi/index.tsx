import axios from "axios";
import { useAuth } from "../useAuth";

const API_URL = import.meta.env.VITE_API_URL;

export const useHttpApi = () => {
  const auth = useAuth();

  const get = async (path: string) => {
    const response = await axios.get(`${API_URL}${path}`, {
      headers: {
        Authorization: `Bearer ${auth.user?.token}`,
      },
    });
    console.log(response.data);
  };

  return { get };
};
