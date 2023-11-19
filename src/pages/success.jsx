import { motion as m } from "framer-motion";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import bell from "public/images/bell.png";
import chat from "public/images/chat.png";
import leter from "public/images/leter.png";
import like from "public/images/like.png";
import { useEffect, useState } from "react";
import Confetti from "react-confetti";

export default function Success() {
  const [pieces, setPieces] = useState(200);
  const { i18n, t } = useTranslation();
  const router = useRouter();
  const [LOADED, setLoaded] = useState(false);

  const anime = {
    initial: {
      y: [Math.random() * -35, Math.random() * 35],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  };

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
      className='flex relative justify-center bg-blend-overlay items-center h-screen overflow-hidden bg-gradient-to-tr from-base-200 to-info'
    >
      <div
        className='bg-black gap-4 bg-opacity-20 backdrop-blur-lg z-20 shadow-xl ring-4 ring-slate-100 ring-opacity-25 rounded-3xl p-2 md:p-4 w-[85%] h-[50%] lg:w-[60%] xl:w-[50%] md:[65%] flex flex-col justify-center items-center'
        dir={i18n?.language === "ar" ? "rtl" : "ltr"}
      >
        <h1 className='md:text-4xl text-white text-xl w-full text-center font-bold'>
          ✨{t("newsletter:successTitle")}✨
        </h1>
        <p className='text-lg text-center text-gray-200'>
          {t("newsletter:successDescription")} {router.query.email}.
        </p>
        <div className='flex mt-4 flex-col justify-center items-center gap-2 pt-2'>
          <span className='text-gray-200'>
            {t("newsletter:signUpInvitation")}
          </span>{" "}
          <Link
            href='/auth/sign-up'
            className='btn px-6 btn-sm rounded-xl btn-secondary text-black'
          >
            {t("signUp:signUpButton")}
          </Link>
        </div>
      </div>
      <div className='absolute w-[85%] h-[50%] lg:w-[60%] xl:w-[50%] md:[65%] z-0'>
        <motion.div
          className='absolute -right-32 -bottom-28'
          animate={["initial"]}
          variants={anime}
        >
          <Image src={bell} alt='bell' height={200} width={200} />
        </motion.div>
        <motion.div
          className='absolute -right-20 -top-36'
          animate={["initial"]}
          variants={anime}
        >
          <Image src={chat} alt='bell' height={300} width={300} />
        </motion.div>
        <motion.div
          className='absolute left-0 -bottom-40'
          animate={["initial"]}
          variants={anime}
        >
          <Image src={leter} alt='bell' height={200} width={200} />
        </motion.div>
        <motion.div
          className='absolute -left-16 -top-24'
          animate={["initial"]}
          variants={anime}
        >
          <Image src={like} alt='bell' height={150} width={150} />
        </motion.div>
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
