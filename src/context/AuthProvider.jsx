import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import {
  collection,
  doc,
  getDoc,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { toast } from "react-toastify";

import {
  auth,
  db,
  facebookProvider,
  githubProvider,
  googleProvider,
} from "@/lib/firebase";

import Loader from "@/components/Loader";

const AuthContext = createContext({});

export const useAuth = () => useContext(AuthContext);

export function AuthContextProvider({ children }) {
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState();

  // listen for user state changes
  useEffect(() => {
    const listener = onAuthStateChanged(
      auth,
      async (user) => {
        try {
          setUser(user);
        } catch (e) {
          setError(e);
        }
      },
      setError
    );
    return () => {
      listener();
    };
  }, []);

  //Sign up with Credentials
  const signUp = useCallback(async (email, password, userInfo) => {
    setLoading(true);
    setError(undefined);
    try {
      const router = require("next/router").default;
      const user = await createUserWithEmailAndPassword(auth, email, password);
      // Reference to the "users" collection
      const usersCollectionRef = collection(db, "users");
      // Add a new document with the user's UID as the document ID
      await setDoc(doc(usersCollectionRef, user.user.uid), {
        uid: user.user.uid,
        photoURL: user.user.photoURL,
        ...userInfo,
        role: "user",
        date: serverTimestamp(),
      });
      setUser(user.user);
      toast.success(`Hi ${userInfo.name}, Thank you for joining us! 😍`, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 1500,
      });
      // redirect user to their profile page
      router.push({
        pathname: "/dashboard",
        query: { user: user.user.uid },
      });
    } catch (err) {
      setError(err);
      if (err.code === "auth/email-already-in-use") {
        toast.error("this email is already in use", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 1500,
        });
      } else {
        toast.error(err.code, {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 1500,
        });
      }
    } finally {
      setLoading(false);
    }
  }, []);

  // sign in with facebook
  const signInWithFacebook = useCallback(async () => {
    setLoading(true);
    setError(undefined);
    try {
      const router = require("next/router").default;
      const user = await signInWithPopup(auth, facebookProvider);
      // Reference to the "users" collection
      const usersCollectionRef = collection(db, "users");

      // Create a reference to the user's document based on their UID
      const userDocRef = doc(usersCollectionRef, user.user.uid);
      // Check if the user's document already exists
      const userDocSnapshot = await getDoc(userDocRef);

      if (userDocSnapshot.exists()) {
        // User document exists, display "Welcome back" message and return
        toast.success(`Welcome back, ${user.user.displayName}! 😊`, {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 1500,
        });
        setUser(user.user);
        // redirect user to their profile page
        router.push({
          pathname: "/dashboard",
          query: { user: user.user.uid },
        });
      } else {
        // if the user is new add them to our database
        // Add a new document with the user's UID as the document ID
        await setDoc(doc(usersCollectionRef, user.user.uid), {
          uid: user.user.uid,
          photoURL: user.user.photoURL,
          name: user.user.displayName,
          phone: user.user.phoneNumber,
          email: user.user.email,
          role: "user",
          date: serverTimestamp(),
        });
        setUser(user);
        toast.success(
          `Hi ${user.user.displayName}, Thank you for joining us! 😍`,
          {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 1500,
          }
        );
        // redirect user to their profile page
        router.push({
          pathname: "/dashboard",
          query: { user: user.user.uid },
        });
      }
    } catch (err) {
      setError(err);
      toast.error(err.code, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 1500,
      });
    } finally {
      setLoading(false);
    }
  }, []);

  // sign in with google
  const signInWithGoogle = useCallback(async () => {
    setLoading(true);
    setError(undefined);
    try {
      const router = require("next/router").default;
      const user = await signInWithPopup(auth, googleProvider);
      // Reference to the "users" collection
      const usersCollectionRef = collection(db, "users");

      // Create a reference to the user's document based on their UID
      const userDocRef = doc(usersCollectionRef, user.user.uid);
      // Check if the user's document already exists
      const userDocSnapshot = await getDoc(userDocRef);

      if (userDocSnapshot.exists()) {
        // User document exists, display "Welcome back" message and return
        toast.success(`Welcome back, ${user.user.displayName}! 😊`, {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 1500,
        });
        setUser(user.user);
        // redirect user to their profile page
        router.push({
          pathname: "/dashboard",
          query: { user: user.user.uid },
        });
      } else {
        // if the user is new add them to our database
        // Add a new document with the user's UID as the document ID
        await setDoc(doc(usersCollectionRef, user.user.uid), {
          uid: user.user.uid,
          photoURL: user.user.photoURL,
          name: user.user.displayName,
          phone: user.user.phoneNumber,
          email: user.user.email,
          role: "user",
          date: serverTimestamp(),
        });
        setUser(user);
        toast.success(
          `Hi ${user.user.displayName}, Thank you for joining us! 😍`,
          {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 1500,
          }
        );
        // redirect user to their profile page
        router.push({
          pathname: "/dashboard",
          query: { user: user.user.uid },
        });
      }
    } catch (err) {
      setError(err);
      toast.error(err.code, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 1500,
      });
    } finally {
      setLoading(false);
    }
  }, []);
  // sign in with github
  const signInWithGithub = useCallback(async () => {
    setLoading(true);
    setError(undefined);
    try {
      const router = require("next/router").default;
      const user = await signInWithPopup(auth, githubProvider);

      // Reference to the "users" collection
      const usersCollectionRef = collection(db, "users");

      // Create a reference to the user's document based on their UID
      const userDocRef = doc(usersCollectionRef, user.user.uid);
      // Check if the user's document already exists
      const userDocSnapshot = await getDoc(userDocRef);

      if (userDocSnapshot.exists()) {
        // User document exists, display "Welcome back" message and return
        toast.success(`Welcome back, ${user.user.displayName}! 😊`, {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 1500,
        });
        setUser(user.user);

        // redirect user to their profile page
        router.push({
          pathname: "/dashboard",
          query: { user: user.user.uid },
        });
      } else {
        // if the user is new add them to our database
        // Add a new document with the user's UID as the document ID
        await setDoc(doc(usersCollectionRef, user.user.uid), {
          uid: user.user.uid,
          photoURL: user.user.photoURL,
          name: user.user.displayName,
          phone: user.user.phoneNumber,
          email: user.user.email,
          role: "user",
          date: serverTimestamp(),
        });
        setUser(user);
        toast.success(
          `Hi ${user.user.displayName}, Thank you for joining us! 😍`,
          {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 1500,
          }
        );
        // redirect user to their profile page
        router.push({
          pathname: "/dashboard",
          query: { user: user.user.uid },
        });
      }
    } catch (err) {
      setError(err);
      toast.error(err.code, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 1500,
      });
    } finally {
      setLoading(false);
    }
  }, []);

  //Sign in with Credentials
  const signIn = useCallback(async (email, password) => {
    const router = require("next/router").default;
    setLoading(true);
    setError(undefined);
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      setUser(user.user);
      toast.success(
        `Hi ${user.displayName ?? user.user.email}, Welcome back! 😍`,
        {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 1500,
        }
      );
      // redirect user to their profile page
      router.push({
        pathname: "/dashboard",
        query: { user: user.user.uid },
      });
    } catch (err) {
      setError(err);
      if (err.code === "auth/invalid-login-credentials") {
        toast.error("Wrong password or email! 😥", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 1500,
        });
      }
      if (err.code === "auth/too-many-requests") {
        toast.error("you have tried many times please try again later! 😥", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 1500,
        });
      } else {
        toast.error(err.code, {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 1500,
        });
      }
    } finally {
      setLoading(false);
    }
  }, []);

  // Sign out
  const logOut = useCallback(async () => {
    setLoading(true);
    setError(undefined);
    try {
      await auth.signOut();
      setUser(null);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, []);

  // send reset password to email
  const resetPassword = useCallback(async (email) => {
    setLoading(true);
    setError(undefined);
    try {
      await sendPasswordResetEmail(auth, email);
      toast.success(`Reset password link sent to ${email} ✅`, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 1500,
      });
    } catch (err) {
      setError(err);
      toast.error(err.code, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 1500,
      });
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        error,
        user,
        setUser,
        signUp,
        signIn,
        logOut,
        signInWithFacebook,
        signInWithGoogle,
        signInWithGithub,
        resetPassword,
      }}
    >
      {loading ? <Loader /> : children}
    </AuthContext.Provider>
  );
}
