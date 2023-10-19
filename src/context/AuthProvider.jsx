import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import Image from "next/image";
import Spinner from "public/images/spinner.svg";
import profilePlaceholder from "public/images/profile.svg";
import React, { createContext, useContext, useEffect, useState } from "react";

import { auth } from "@/lib/firebase";

const AuthContext = createContext({});

export const useAuth = () => useContext(AuthContext);

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({
          email: user.email,
          uid: user.uid,
          photoURL: user.photoURL || profilePlaceholder,
        });
      } else {
        setUser(null);
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const signUp = (email, password, userInfo) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (res) => {
        // set userInfo to database here
      })
      .catch((error) => {
        console.log(error.code);
      });
  };

  const signIn = (email, password) => {
    signInWithEmailAndPassword(auth, email, password).then(() => {
      // check user
    });
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        signUp,
        signIn,
      }}
    >
      {loading ? (
        <div className='flex justify-center items-center h-screen'>
          <Image src={Spinner} alt='loading' height={100} width={100} />
        </div>
      ) : (
        children
      )}
    </AuthContext.Provider>
  );
}
