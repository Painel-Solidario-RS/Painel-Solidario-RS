import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

export const useRegister = () => {
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
    signUpWithEmailAndPassword: async (email: string, password: string) => {
      await auth.signUp(email, password);
      navigate("/dashboard");
    },
  };
};
