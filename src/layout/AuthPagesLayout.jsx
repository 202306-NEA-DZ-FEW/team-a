import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

import { auth } from "@/lib/firebase";

import Loader from "@/components/Loader";

function AuthPagesLayout({ children }) {
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState();
  const router = useRouter();

  // listen for user state changes
  useEffect(() => {
    const listener = onAuthStateChanged(
      auth,
      async (user) => {
        try {
          setUser(user);
        } catch (e) {
          setError(e);
        } finally {
          setLoading(false);
          if (user) {
            router.push("/");
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
  if (user) {
    return <div className='min-h-screen'></div>;
  }

  if (!user && !loading) {
    return <div className='min-h-screen'>{children}</div>;
  }

  if (error) {
    return <div className='min-h-screen'>{error.message}</div>;
  }
}

export default AuthPagesLayout;
