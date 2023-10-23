import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";

import { auth } from "@/lib/firebase";

import Loader from "@/components/Loader";

import { useAuth } from "@/context/AuthProvider";

function PublicRouteLayout({ children }) {
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState();
  const { logOut } = useAuth();

  // listen for user state changes
  useEffect(() => {
    setLoading(true);
    const listener = onAuthStateChanged(
      auth,
      async (user) => {
        try {
          setUser(user);
        } catch (e) {
          setError(e);
        } finally {
          setLoading(false);
        }
      },
      setError
    );
    return () => {
      listener();
    };
  }, []);

  if (loading) {
    return <Loader />;
  }
  if (user && !loading) {
    return (
      <div className='min-h-screen flex flex-col gap-20 justify-center items-center'>
        <h1 className='text-4xl font- text-center'>
          You&apos;re already logged in
        </h1>
        <button onClick={logOut} className='btn btn-error'>
          Log out
        </button>
      </div>
    );
  }

  if (!user) {
    return <div className='min-h-screen'>{children}</div>;
  }

  if (error) {
    return <div className='min-h-screen'>{error.message}</div>;
  }
}

export default PublicRouteLayout;
