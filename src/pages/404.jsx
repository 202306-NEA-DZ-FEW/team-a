import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import bg from "public/images/404-bg.svg";
import astroMan from "public/images/astro-man.svg";
import { IoArrowBackOutline } from "react-icons/io5";

import { Planet, Rocket } from "@/components/icons";

export default function NotFoundPage() {
  const { t } = useTranslation();
  return (
    <main className='h-screen relative w-full flex flex-col justify-center items-center gap-10 bg-base-100 px-8'>
      <Image
        src={astroMan}
        width={400}
        height={400}
        alt='404'
        className='md:w-40 w-28 absolute z-20 animate-float -bottom-14 md:left-[30%] left-[10%]'
      />
      <Image
        src={bg}
        width={500}
        height={500}
        alt='404 bg'
        className='absolute opacity-30 top-0 left-0 w-screen h-screen z-0 object-cover'
      />
      <div className='text-center text-current relative items-center flex z-30 flex-col gap-4 text-sm font-light tracking-wider'>
        <Planet className='w-32 h-5w-32 fill-current animate-spin' />
        <Rocket className='w-20 fill-current h-20 absolute -top-24 left-[20%]' />
        <h1 className='text-9xl mb-4 font-bold'>404</h1>
        <h3 className='md:text-4xl text-3xl font-bold tracking-wide'>
          {t("404:pageNotFound")}
        </h3>
        <p>{t("404:pageDescription")}</p>
        <Link
          className='btn btn-sm btn-primary text-current font-light bg-opacity-40 rounded-'
          href='/'
        >
          <IoArrowBackOutline />
          {t("404:returnHome")}
        </Link>
      </div>
    </main>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "404"])),
    },
  };
}
