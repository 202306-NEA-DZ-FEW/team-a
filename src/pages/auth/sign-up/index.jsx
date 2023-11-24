import { motion } from "framer-motion";
import Image from "next/image";
import { withTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import getAllStates from "@/lib/getAllStates";

import SignUpForm from "@/components/SignUpForm";
import SignupMethods from "@/components/SignupMethods";

import AuthPagesLayout from "@/layout/AuthPagesLayout";

function SignUpPage({ _nextI18Next, t }) {
  const states = getAllStates(t);
  const { initialLocale } = _nextI18Next;
  const signUpMethodsAnim = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };
  return (
    <AuthPagesLayout>
      <main
        className='flex justify-between min-h-screen'
        dir={initialLocale === "ar" ? "rtl" : "ltr"}
      >
        <figure className='relative hidden lg:block md:w-[60%] max-h-full flex-shrink-0'>
          <Image
            src='/images/signin.jpg'
            priority
            alt='test'
            width={2000}
            height={2000}
            className='object-cover saturate-0 w-full min-h-screen max-h-[820px]'
          />
          <motion.div
            variants={signUpMethodsAnim}
            initial='hidden'
            animate='visible'
            className='absolute flex-col gap-4 shadow-xl backdrop-blur-sm bg-opacity-25 hover:bg-opacity-50 transition-all duration-500 ease-in-out border-2 border-white border-opacity-20 top-[45%] left-[30%] bg-base-100 rounded-xl w-[40%] h-[22%] flex items-center justify-center'
          >
            <h3 className='text-center font-bold text-2xl'>
              {t("signUp:signUpMethod")}
            </h3>
            <SignupMethods />
          </motion.div>
        </figure>
        <div className='flex shadow-2xl py-4 flex-col min-h-screen mx-auto w-full p-4 md:px-20 lg:px-8'>
          <div className='navbar'></div>
          <SignUpForm states={states} t={t} />
        </div>
      </main>
    </AuthPagesLayout>
  );
}

export default withTranslation(["common", "signUp", "states"])(SignUpPage);

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "signUp", "states"])),
      // Will be passed to the page component as props
    },
  };
}
