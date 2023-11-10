import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import profile from "public/images/profile.svg";
import { useEffect, useState } from "react";

import { useAuth } from "@/context/AuthProvider";

import LanguageFilterMenu from "./LanguageFilterMenu";
import MobileMenu from "./MobileMenu";
import UserMenu from "./UserMenu";

function Navbar() {
  const { user, logOut, loading } = useAuth();
  const { i18n, t } = useTranslation();
  const router = useRouter();
  const [currentPath, setCurrentPath] = useState("/");
  const [userProfile, setUserProfile] = useState(profile);

  useEffect(() => {
    setUserProfile(user?.photoURL || profile);
  }, [user]);

  useEffect(() => {
    // Get the current path
    const currentPath = router.asPath;
    setCurrentPath(currentPath);
  }, [router]);

  return (
    <>
      {/* Navbar Starts Here */}
      <header className='no-scrollbar backdrop-blur-sm bg-white bg-opacity-40 sticky top-0 left-0 navbar gap-24 justify-between 2xl:px-32 xl:px-28 px-10 z-50'>
        <div className='lg:block navbar-start max-w-fit'>
          {/* Navbar Logo */}
          <Link
            href='/'
            className='font-bold btn btn-ghost normal-case text-2xl'
          >
            {t("common:buttons:logo")}
          </Link>
        </div>
        <nav className='hidden w-full flex-1 lg:flex lg:navbar-end gap-4 lg:items-center'>
          <div className='w-1/6 h-[2.2px] bg-black' />
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
              href='/products'
            >
              {t("common:buttons:products")}
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
              className='btn btn-active btn-sm rounded-full hover:px-4 transition-all duration-500 normal-case font-normal tracking-wider'
            >
              {t("common:buttons:signIn")}
            </Link>
          ) : null}
          <LanguageFilterMenu currentPath={currentPath} />
        </nav>
        <MobileMenu
          user={user}
          t={t}
          currentPath={currentPath}
          logOut={logOut}
        />
      </header>
    </>
  );
}

export default Navbar;
