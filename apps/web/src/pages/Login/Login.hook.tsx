import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

export const useLogin = () => {
  const auth = useAuth();

  const navigate = useNavigate();

  return {
    signInWithFacebook: async () => {
      await auth.signInWithProvider("facebook");
      navigate("/dashboard");
    },
    signInWithGoogle: async () => {
      await auth.signInWithProvider("google");
      navigate("/dashboard");
    },
    signInWithEmailAndPassword: async (email: string, password: string) => {
      await auth.signIn(email, password);
      navigate("/dashboard");
    },
  };
};
