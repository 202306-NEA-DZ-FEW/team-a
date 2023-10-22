import { appWithTranslation } from "next-i18next";
import { ToastContainer } from "react-toastify";

import "@/styles/globals.css";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import "react-toastify/dist/ReactToastify.css";

import { AuthContextProvider } from "@/context/AuthProvider";
import Layout from "@/layout";

import nextI18NextConfig from "../../next-i18next.config";

function MyApp({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <Layout>
        <ToastContainer />
        <Component {...pageProps} />
      </Layout>
    </AuthContextProvider>
  );
}

export default appWithTranslation(MyApp, nextI18NextConfig);
