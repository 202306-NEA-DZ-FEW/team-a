import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { BiDonateHeart } from "react-icons/bi";

import { Waves, Xhorizontal, Xvertical } from "@/components/icons";
function HeroSection() {
  const { t } = useTranslation();
  const router = useRouter();
  return (
    <>
      <div className='flex flex-col items-center lg:flex-row-reverse lg:min-h-screen'>
        <figure className='relative w-full lg:w-[55%] h-1/2 lg:h-screen'>
          <Image
            src='/images/hero-image.png'
            alt='hero image'
            width={1080}
            height={1080}
            placeholder='blur'
            blurDataURL='blur.jpg'
            className='w-full h-full object-cover overflow-auto'
            priority
          />

          <Waves className='absolute top-[10%] left-[-10%] fill-current w-[16%] lg:block hidden opacity-75 z-0' />
          <Xvertical className='absolute bottom-[8%] right-[6%] w-[2%] lg:block hidden z-0' />
        </figure>
        <div
          id='text'
          className='flex flex-col py-10 w-full lg:w-[45%] gap-2 px-6 lg:h-screen z-10'
        >
          <div className='flex h-full justify-center flex-col gap-6'>
            <motion.h2
              className='text-4xl lg:text-5xl font-black capitalize'
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
            >
              {t("landingPage:hero:title")}
              <span className='text-accent'>
                {" "}
                {t("landingPage:hero:titleHighlight")}
              </span>
            </motion.h2>
            <motion.p
              className='text-start font-light text-md md:text-xl'
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.5 }}
            >
              {t("landingPage:hero:description")}
            </motion.p>
            <motion.button
              className='btn lg:self-start lg:min-w-fit text-current bg-opacity-50  rounded-full flex items-center btn-secondary'
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.7 }}
              onClick={() => router.push("/items/create")}
            >
              {t("common:buttons:donate")}
              <span className='text-lg'>
                <BiDonateHeart />
              </span>
            </motion.button>
          </div>
          <motion.div
            className='relative w-full justify-start xl:justify-evenly self-end rounded-2xl bg-opacity-50 ring-4 ring-white ring-opacity-20 bg-secondary flex flex-wrap items-center my-4 py-8 gap-4 px-4 z-10'
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 1 }}
          >
            <p className='flex lg:w-40 items-center  gap-2 text-xs font-light'>
              <span className='text-xl font-black'>30k+</span>
              {t("landingPage:hero:stat1")}
            </p>
            <p className='flex lg:w-40 items-center  gap-2 text-xs font-light'>
              <span className='text-xl font-black'>200+</span>
              {t("landingPage:hero:stat2")}
            </p>
            <p className='flex lg:w-40 items-center gap-2 text-xs font-light'>
              <span className='text-xl font-black'>25k+</span>
              {t("landingPage:hero:stat3")}
            </p>
            <Xhorizontal className='absolute -top-3 left-7 fill-current w-40' />
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
