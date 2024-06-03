import { useNavigate } from "react-router-dom";
import DonationsImage from "../../assets/donations.svg";
import SheltersImage from "../../assets/shelters.svg";
import HelpImage from "../../assets/needs.svg";
import { useEffect, useMemo } from "react";
import { useAuth } from "../../hooks/useAuth";

export const useWelcome = () => {
  const auth = useAuth();

  const navigate = useNavigate();

  const services = useMemo(() => {
    return [
      {
        title: "Doações",
        image: DonationsImage,
      },
      {
        title: "Abrigos",
        image: SheltersImage,
      },
      {
        title: "Ajuda",
        image: HelpImage,
      },
    ];
  }, []);

  useEffect(() => {
    if (auth.user) {
      navigate("/dashboard");
    }
  }, [auth.user, navigate]);

  return {
    signIn: () => {
      if (auth.user) {
        navigate("/dashboard");
      } else {
        navigate("/login");
      }
    },
    signUp: () => {
      navigate("/register");
    },
    services,
  };
};
