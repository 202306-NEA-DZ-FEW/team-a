import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { useEffect, useState } from "react";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { BsShareFill } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";

import LanguageMenu from "../LanguageMenu";

function Footer() {
  const { i18n, t } = useTranslation();
  const router = useRouter();
  const [currentPath, setCurrentPath] = useState("/");
  useEffect(() => {
    // Get the current path
    const currentPath = router.asPath;
    setCurrentPath(currentPath);
  }, [router]);

  return (
    <div className='bg-neutral py-10 px-6 text-white w-full'>
      <div className='grid grid-cols-1 justify-items-center md:grid-cols-5 gap-4'>
        <div className='col-span-1'>
          <Link href='/'>
            <h2 className='font-bold text-2xl text-white'>
              {t("common:buttons:logo")}
            </h2>
          </Link>
        </div>
        <div
          dir={i18n?.language === "ar" ? "rtl" : "ltr"}
          className='col-span-1 '
        >
          <ul className='flex flex-col items-center md:items-start gap-4'>
            <Link href='/about'>
              <li className='hover:underline'>{t("common:buttons:about")}</li>
            </Link>
            <Link href='/blogs'>
              <li className='hover:underline'>{t("common:buttons:blogs")}</li>
            </Link>
            <Link href='/items'>
              <li className='hover:underline'>
                {t("common:footer:listedItems")}
              </li>
            </Link>
          </ul>
        </div>
        <div className='col-span-1'>
          <ul className='flex flex-col items-center gap-4'>
            <li className=''>{t("common:footer:contactUs")}</li>
            <div className='flex gap-3 text-3xl mt-2 '>
              <Link href='https://www.facebook.com' target='_blank'>
                <AiFillFacebook className='opacity-70 hover:opacity-100' />
              </Link>
              <Link href='https://www.instagram.com' target='_blank'>
                <FaInstagram className='opacity-70 hover:opacity-100' />
              </Link>
              <Link href='https://www.linkedin.com' target='_blank'>
                <AiFillLinkedin className='opacity-70 hover:opacity-100' />
              </Link>
              <Link href='https://www.google.com' target='_blank'>
                <BsShareFill className='opacity-70 hover:opacity-100' />
              </Link>
            </div>
          </ul>
        </div>
        <div
          dir={i18n?.language === "ar" ? "rtl" : "ltr"}
          className='col-span-1'
        >
          <ul className='flex flex-col items-center md:items-start'>
            <li className=''>{t("common:footer:address")}</li>
            <li className=''>{t("common:footer:street")}</li>
            <li className=''>{t("common:footer:city")}</li>
          </ul>
        </div>
        <div className='col-span-1'>
          <LanguageMenu currentPath={currentPath} bottom={true} />
        </div>
      </div>
    </div>
  );
}

export default Footer;
