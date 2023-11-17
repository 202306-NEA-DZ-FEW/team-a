import { motion as m } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import box from "public/images/newsletterBox.svg";
import { useEffect, useState } from "react";
import Confetti from "react-confetti";

export default function Success() {
  const [pieces, setPieces] = useState(200);
  const { i18n, t } = useTranslation();
  const router = useRouter();
  const [LOADED, setLoaded] = useState(false);

  const stopConfetti = () => {
    setLoaded(true);
    setTimeout(() => {
      setPieces(0);
    }, 3000);
  };

  useEffect(() => {
    stopConfetti();
  }, []);
  return (
    <m.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className='flex justify-center items-center h-screen'
    >
      <div
        className='bg-base-100 shadow-xl rounded-lg p-2 md:px-20 md:py-10 text-gray-700 flex flex-col justify-center items-center'
        dir={i18n?.language === "ar" ? "rtl" : "ltr"}
      >
        <Image
          src={box}
          alt='newsletterImage'
          className='w-[270px] h-[270px]'
        />
        <h1 className='text-xl font-bold md:text-2xl pb-4 '>
          ✨{t("newsletter:successTitle")}✨
        </h1>
        <p className='text-lg text-center text-gray-500'>
          {t("newsletter:successDescription")} {router.query.email}.
        </p>
        <div className='flex flex-col md:flex-row justify-center items-center gap-2 pt-2'>
          <span className='text-gray-600'>
            {t("newsletter:signUpInvitation")}
          </span>{" "}
          <Link href='/auth/sign-up' className='btn btn-primary'>
            {t("signUp:signUpButton")}
          </Link>
        </div>
      </div>
      {LOADED && <Confetti gravity={0.2} numberOfPieces={pieces} />}
    </m.main>
  );
}
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "common",
        "newsletter",
        "signUp",
      ])),
    },
    revalidate: 30,
  };
}
