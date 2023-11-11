import { motion as m } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import box from "public/images/newsletterBox.svg";
import { useEffect, useState } from "react";
import Confetti from "react-confetti";

export default function Success() {
  const [pieces, setPieces] = useState(200);
  const router = useRouter();
  const stopConfetti = () => {
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
      className='flex justify-center items-center m-9'
    >
      <div className='bg-white shadow-xl rounded-lg p-2 md:px-20 md:py-10 text-gray-700 flex flex-col justify-center items-center'>
        <Image
          src={box}
          alt='newsletterImage'
          className='w-[270px] h-[270px]'
        />
        <h1 className='text-xl font-bold md:text-2xl pb-4 '>
          ✨Thank you for subscribing ✨
        </h1>
        <p className='text-lg text-center text-gray-500'>
          You will receive our updates and latest blogs on {router.query.email}.
        </p>
        <div className='flex flex-col md:flex-row justify-center items-center gap-2 pt-2'>
          <span className='text-gray-600'>
            You want to join our Unify family?
          </span>{" "}
          <Link href='/auth/sign-up' className='btn btn-primary'>
            Sign up
          </Link>
        </div>
      </div>
      <Confetti gravity={0.2} numberOfPieces={pieces} />
    </m.main>
  );
}
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
    revalidate: 30,
  };
}
