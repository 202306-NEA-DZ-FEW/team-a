import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

import { auth } from "@/lib/firebase";

import Loader from "@/components/Loader";

import NotFoundPage from "@/pages/404";

function ProtectedLayout({ children }) {
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState();
  const router = useRouter();

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
          if (!user) {
            router.push("/auth/sign-in");
          }
        }
      },
      setError
    );
    return () => {
      listener();
    };
  }, [router]);

  if (loading) {
    return <Loader />;
  }
  if (!user) {
    return <div className='min-h-screen'></div>;
  }

  if (user && !loading) {
    return <div className='min-h-screen'>{children}</div>;
  }

  if (error) {
    return (
      <div className='min-h-screen'>
        <NotFoundPage />
      </div>
    );
  }
}

export default ProtectedLayout;
