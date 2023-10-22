import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { useEffect, useState } from "react";

import { useAuth } from "@/context/AuthProvider";

import LanguageFilterMenu from "./LanguageFilterMenu";
import MobileMenu from "./MobileMenu";
import UserMenu from "./UserMenu";

function Navbar() {
  const { user, logOut } = useAuth();
  const { i18n, t } = useTranslation();
  const router = useRouter();
  const [currentPath, setCurrentPath] = useState("/");

  useEffect(() => {
    // Get the current path
    const currentPath = router.asPath;
    setCurrentPath(currentPath);
  }, [router]);

  return (
    <>
      {/* Navbar Starts Here */}
      <div className='navbar bg-white'>
        <div className='navbar-start ml-7'>
          {/* Navbar Logo */}
          <Link href='/'>
            <p className='font-bold text-2xl'>{t("common:navbar:logo")}</p>
          </Link>
        </div>
        <div
          dir={i18n?.language == "ar" ? "rtl" : "ltr"}
          className='navbar-center hidden lg:block'
        >
          {/* Navbar Navigation Links */}
          <ul className='menu menu-horizontal gap-2 px-1 mx-1 text-black'>
            <li>
              <Link className='hover:bg-primary hover:text-white' href='/'>
                {t("common:navbar:home")}
              </Link>
            </li>
            <li>
              <Link className='hover:bg-primary hover:text-white' href='/about'>
                {t("common:navbar:about")}
              </Link>
            </li>
            <li>
              <Link
                className='hover:bg-primary hover:text-white'
                href='/products'
              >
                {t("common:navbar:products")}
              </Link>
            </li>
            <li>
              <Link className='hover:bg-primary hover:text-white' href='/blogs'>
                {t("common:navbar:blogs")}
              </Link>
            </li>
          </ul>
        </div>
        <div className='navbar-end mr-7'>
          {/* Language Filter */}
          <LanguageFilterMenu currentPath={currentPath} />
          {/* Avatar/Sign-in Button */}
          <UserMenu user={user} logOut={logOut} t={t} />
          {/* This is Related to Mobile View Navbar Menu */}
          <MobileMenu user={user} t={t} currentPath={currentPath} />
        </div>
      </div>
      {/* Navbar Ends Here */}
    </>
  );
}

export default Navbar;
