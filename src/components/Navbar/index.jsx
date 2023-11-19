import Link from "next/link";
import { useTranslation } from "next-i18next";
import profile from "public/images/profile.svg";
import { useEffect, useState } from "react";

import { useAuth } from "@/context/AuthProvider";

import MobileMenu from "./MobileMenu";
import UserMenu from "./UserMenu";
import LanguageMenu from "../LanguageMenu";

function Navbar() {
  const { user, logOut, loading } = useAuth();
  const { i18n, t } = useTranslation();
  const [userProfile, setUserProfile] = useState(profile);

  useEffect(() => {
    setUserProfile(user?.photoURL || profile);
  }, [user]);
  return (
    <>
      {/* Navbar Starts Here */}
      <header className='no-scrollbar fixed top-0 left-0 navbar gap-24 justify-between z-50'>
        <div className='lg:block navbar-start max-w-fit'>
          {/* Navbar Logo */}
          <Link
            href='/'
            className='font-bold btn btn-ghost normal-case text-2xl'
          >
            {t("common:buttons:logo")}
          </Link>
        </div>
        <nav className='hidden lg:w-[50%] min-w-fit lg:mr-8  lg:px-4 lg:flex lg:justify-between lg:navbar-center gap-4 lg:items-center backdrop-blur-md border-2 border-white  border-opacity-25 rounded-full bg-black bg-opacity-25 text-white'>
          <div className='flex-1 h-[2.2px] bg-white' />
          {/* Navbar Navigation Links */}
          <div
            dir={i18n?.language == "ar" ? "rtl" : "ltr"}
            className='lg:flex gap-4'
          >
            <Link
              className='btn hover:btn-link transition-all duration-500 hover:translate-y-1 btn-ghost normal-case font-light tracking-wider'
              href='/'
            >
              {t("common:buttons:home")}
            </Link>

            <Link
              className='btn hover:btn-link transition-all duration-500 hover:translate-y-1 btn-ghost normal-case font-light tracking-wider'
              href='/about'
            >
              {t("common:buttons:about")}
            </Link>

            <Link
              className='btn hover:btn-link transition-all duration-500 hover:translate-y-1 btn-ghost normal-case font-light tracking-wider'
              href='/items'
            >
              {t("common:buttons:items")}
            </Link>

            <Link
              className='btn hover:btn-link transition-all duration-500 hover:translate-y-1 btn-ghost normal-case font-light tracking-wider'
              href='/blogs'
            >
              {t("common:buttons:blogs")}
            </Link>
          </div>
          {user == null
            ? null
            : user && (
                <UserMenu
                  logOut={logOut}
                  user={user}
                  userProfile={userProfile}
                  t={t}
                />
              )}
          {!loading && user === null ? (
            <Link
              href='/auth/sign-in'
              className='btn btn-secondary btn-sm rounded-full hover:px-4 transition-all duration-500 normal-case font-normal tracking-wider'
            >
              {t("common:buttons:signIn")}
            </Link>
          ) : null}
          <LanguageMenu />
        </nav>
        <MobileMenu user={user} t={t} logOut={logOut} />
      </header>
    </>
  );
}

export default Navbar;
