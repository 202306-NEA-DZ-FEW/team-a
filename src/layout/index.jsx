import { Poppins } from "next/font/google";
import Link from "next/link";
import NextTopLoader from "nextjs-toploader";
import { BiMoon } from "react-icons/bi";
import { MdOutlineLightMode } from "react-icons/md";
import { TbCircleChevronsUp } from "react-icons/tb";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["200", "300", "500", "700", "900"],
  fallback: ["Poppins", "sans-serif"],
  preload: true,
});

export default function Layout({ children, initialLocale }) {
  return (
    <main
      className={`${poppins.variable} font-poppins relative`}
      dir={initialLocale === "ar" ? "rtl" : "ltr"}
    >
      <Navbar />
      {children}
      <NextTopLoader color='#6658F8' showSpinner={false} />
      <Footer />
      <div className='fixed z-50 right-2 bottom-2'>
        <Link href='#'>
          <TbCircleChevronsUp className='swap-on w-8 h-8' />
        </Link>
        <label className='swap swap-rotate'>
          {/* this hidden checkbox controls the state */}
          <input type='checkbox' className='theme-controller' value='light' />

          {/* sun icon */}
          <MdOutlineLightMode className='swap-on fill-accent w-8 h-8' />

          {/* moon icon */}
          <BiMoon className='swap-off fill-current w-8 h-8' />
        </label>
      </div>
    </main>
  );
}
