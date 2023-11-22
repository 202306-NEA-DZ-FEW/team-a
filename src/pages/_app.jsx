import { appWithTranslation } from "next-i18next";
import { ThemeProvider } from "next-themes";
import { ToastContainer } from "react-toastify";

import "../styles/globals.css";
import "../styles/carousel.css";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import "react-toastify/dist/ReactToastify.css";

import { AuthContextProvider } from "@/context/AuthProvider";
import Layout from "@/layout";

import nextI18NextConfig from "../../next-i18next.config";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider defaultTheme='system'>
      <AuthContextProvider>
        <Layout>
          <ToastContainer />
          <Component {...pageProps} />
        </Layout>
      </AuthContextProvider>
    </ThemeProvider>
  );
}

export default appWithTranslation(MyApp, nextI18NextConfig);
