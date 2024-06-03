import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  UserCredential,
  getAuth,
  Auth,
} from "firebase/auth";
import { app } from "./firebaseConfig";
import { createContext, useContext, useEffect, useState, useMemo } from "react";

type User = {
  name: string;
  email: string;
  token: string;
  picture: string | null;
};

type AuthContextType = {
  user: User | null;
  signUp: (email: string, password: string) => Promise<User | null>;
  signIn: (email: string, password: string) => Promise<User | null>;
  signInWithProvider: (providerId: string) => Promise<User | null>;
  signOut: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

async function mapUserCredentialToUser(userCredential: UserCredential): Promise<User> {
  return {
    name: userCredential.user.displayName!,
    email: userCredential.user.email!,
    token: await userCredential.user.getIdToken(),
    picture: userCredential.user.photoURL,
  };
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [auth, setAuth] = useState<Auth | null>(null);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    try {
      const auth = getAuth(app);
      setAuth(auth);
      const unsubscribe = onAuthStateChanged(auth, async (_user) => {
        if (_user) {
          const user = await mapUserCredentialToUser({ user: _user } as UserCredential);
          setUser(user);
        } else {
          setUser(null);
        }
      });

      return () => unsubscribe();
    } catch (error) {
      console.error("Error setting up auth state change:", error);
    }
  }, []);

  const signUp = useMemo(
    () => async (email: string, password: string) => {
      try {
        const userCredential = await createUserWithEmailAndPassword(auth!, email, password);
        const user = await mapUserCredentialToUser(userCredential);
        setUser(user);
        return user;
      } catch (error) {
        console.error("Error signing up:", error);
        throw error;
      }
    },
    [auth]
  );

  const signIn = useMemo(
    () => async (email: string, password: string) => {
      try {
        const userCredential = await signInWithEmailAndPassword(auth!, email, password);
        const user = await mapUserCredentialToUser(userCredential);
        setUser(user);
        return user;
      } catch (error) {
        console.error("Error signing in:", error);
        throw error;
      }
    },
    [auth]
  );

  const signInWithProvider = useMemo(
    () => async (providerName: string) => {
      const providerData = ALL_PROVIDERS.find((provider) => provider.name === providerName);
      if (!providerData) throw new Error("Invalid provider");

      const provider = new providerData!.providerMethod!();
      try {
        const userCredential = await signInWithPopup(auth!, provider);
        const user = await mapUserCredentialToUser(userCredential);
        setUser(user);
        return user;
      } catch (error) {
        console.error("Error signing in with provider:", error);
        throw error;
      }
    },
    [auth]
  );

  const signOut = useMemo(
    () => async () => {
      try {
        await auth?.signOut();
        setUser(null);
      } catch (error) {
        console.error("Error signing out:", error);
        throw error;
      }
    },
    [auth]
  );

  return (
    <AuthContext.Provider value={{ user, signUp, signIn, signInWithProvider, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

const ALL_PROVIDERS = [
  {
    id: "password",
    name: "password",
  },
  {
    id: "google.com",
    name: "google",
    providerMethod: GoogleAuthProvider,
  },
  {
    id: "facebook.com",
    name: "facebook",
    providerMethod: FacebookAuthProvider,
  },
];

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
