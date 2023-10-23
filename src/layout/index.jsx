import { Poppins } from "next/font/google";
import NextTopLoader from "nextjs-toploader";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["200", "300", "500", "700", "900"],
});

export default function Layout({ children, initialLocale }) {
  return (
    <main
      className={`${poppins.variable} font-poppins`}
      dir={initialLocale === "ar" ? "rtl" : "ltr"}
    >
      <Navbar />
      {children}
      <NextTopLoader color='#6658F8' showSpinner={false} />
      <Footer />
    </main>
  );
}
