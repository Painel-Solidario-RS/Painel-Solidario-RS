import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_PUBLIC_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_PUBLIC_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PUBLIC_PROJECT_ID,
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
