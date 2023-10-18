import Link from "next/link";
import LanguageFilterMenu from "./LanguageFilterMenu";
import UserMenu from "./UserMenu";
import MobileMenu from "./MobileMenu";
import { useTranslation } from "next-i18next";

function Navbar() {
  const user = {};
  const { t } = useTranslation();
  // {t("landingPage:heroSectionText")}
  return (
    <>
      {/* Navbar Starts Here */}
      <div className='navbar bg-white'>
        <div className='navbar-start ml-7'>
          {/* Navbar Logo */}
          <Link href={"/"}>
            <p className='font-bold text-2xl text-black'>
              {t("common:navbar:logo")}
            </p>
          </Link>
        </div>
        <div className='navbar-center hidden lg:block'>
          {/* Navbar Navigation Links */}
          <ul className='menu menu-horizontal gap-2 px-1 mx-1 text-black'>
            <li>
              <Link className='hover:bg-primary hover:text-white' href={"/"}>
                {t("common:navbar:home")}
              </Link>
            </li>
            <li>
              <Link
                className='hover:bg-primary hover:text-white'
                href={"/about"}
              >
                {t("common:navbar:about")}
              </Link>
            </li>
            <li>
              <Link
                className='hover:bg-primary hover:text-white'
                href={"/products"}
              >
                {t("common:navbar:products")}
              </Link>
            </li>
            <li>
              <Link
                className='hover:bg-primary hover:text-white'
                href={"/blogs"}
              >
                {t("common:navbar:blogs")}
              </Link>
            </li>
          </ul>
        </div>
        <div className='navbar-end mr-7'>
          {/* Language Filter */}
          <LanguageFilterMenu />
          {/* Avatar/Sign-in Button */}
          <UserMenu user={user} t={t} />
          {/* This is Related to Mobile View Navbar Menu */}
          <MobileMenu user={user} t={t} />
        </div>
      </div>
      {/* Navbar Ends Here */}
    </>
  );
}

export default Navbar;
