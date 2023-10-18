import { appWithTranslation } from "next-i18next";
import { ToastContainer } from "react-toastify";
import { Poppins } from "next/font/google";
import nextI18NextConfig from "../../next-i18next.config";

import "@/styles/globals.css";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import "react-toastify/dist/ReactToastify.css";
import Layout from "@/layout";
import { AuthContextProvider } from "@/context/AuthProvider";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["200", "300", "500", "700", "900"],
});

function MyApp({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <Layout>
        <ToastContainer />
        <main className={`${poppins.variable} font-poppins`}>
          <Component {...pageProps} />
        </main>
      </Layout>
    </AuthContextProvider>
  );
}

export default appWithTranslation(MyApp, nextI18NextConfig);
