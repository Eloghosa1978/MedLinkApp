import { onAuthStateChanged, type User } from "firebase/auth";
import { type ReactNode, useEffect, useState } from "react";
import { auth } from "../firebaseConfig";
import type { MongoUser, OnboardingPayload } from "../auth.types";
import axios from "axios";
import { AuthContext } from "./AuthContext";

interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [firebaseUser, setFirebaseUser] = useState<User | null>(null);
  const [mongoUser, setMongoUser] = useState<MongoUser | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const syncUserWithBackend = async (
    profileData?: OnboardingPayload,
    explicitUser?: User,
  ): Promise<MongoUser | null> => {
    if (!auth.currentUser && !explicitUser) return null;
    const activeUser = explicitUser || auth.currentUser;
    const tokenString = await activeUser?.getIdToken();
    const config = {
      headers: {
        Authorization: `Bearer ${tokenString}`,
      },
    };

    if (!profileData) {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/auth/user",
          config,
        );
        setMongoUser(response.data.user);
        setLoading(false);
        return response.data.user;
      } catch (err: unknown) {
        if (axios.isAxiosError(err)) {
          if (err.response?.status === 404) {
            setMongoUser(null);
            setLoading(false);
            return null;
          }
        }
        return null;
      }
    } else {
      try {
        const response = await axios.post(
          "http://localhost:5000/api/auth/user",
          profileData,
          config,
        );
        setMongoUser(response.data.user);
        setLoading(false);
        return response.data.user;
      } catch (err) {
        console.error(err);
      }
    }

    return null;
  };

  useEffect(() => {
    const unsuscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        setMongoUser(null);
        setFirebaseUser(null);
        setLoading(false);
      } else {
        setFirebaseUser(user);
        syncUserWithBackend();
      }
    });

    return () => unsuscribe();
  }, []);

  return (
    <>
      <AuthContext.Provider
        value={{ firebaseUser, mongoUser, loading, syncUserWithBackend }}
      >
        {children}
      </AuthContext.Provider>
    </>
  );
};

export default AuthProvider;
