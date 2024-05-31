import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_PUBLIC_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_PUBLIC_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PUBLIC_PROJECT_ID,
};

export const app = initializeApp(firebaseConfig);
