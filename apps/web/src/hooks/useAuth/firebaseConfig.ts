import { FirebaseApp, initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_PUBLIC_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_PUBLIC_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PUBLIC_PROJECT_ID,
  appId: import.meta.env.VITE_FIREBASE_PUBLIC_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_PUBLIC_MEASUREMENT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_PUBLIC_MESSAGING_SENDER_ID,
};

const app: FirebaseApp = initializeApp(firebaseConfig);
export { app };
