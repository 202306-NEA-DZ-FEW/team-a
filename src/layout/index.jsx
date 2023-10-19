import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import NextTopLoader from "nextjs-toploader";

export default function Layout({ children, initialLocale }) {
  // Put Header or Footer around the children element
  // Example
  return (
    <>
      <Navbar />
      <main dir={initialLocale === "ar" ? "rtl" : "ltr"}>
        {children}
        <NextTopLoader color='#6658F8' showSpinner={false} />
      </main>
      <Footer />
    </>
  );
}
