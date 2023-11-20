import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import { BiDonateHeart } from "react-icons/bi";

import { Triangles, Xhorizontal, Xvertical } from "@/components/icons";
function HeroSection() {
  const { t } = useTranslation();
  return (
    <>
      <div className='flex flex-col items-center lg:flex-row-reverse lg:min-h-screen'>
        <figure className='relative w-full lg:w-[55%] h-1/2 lg:h-screen'>
          <Image
            src='/images/hero-image.png'
            alt='hero image'
            width={4928}
            height={3264}
            placeholder='blur'
            blurDataURL='blur.jpg'
            className='w-full h-full object-cover overflow-auto'
            priority
          />

          <Triangles className='absolute top-[15%] left-[-10%] fill-current w-[16%] lg:block hidden opacity-75 z-0' />
          <Xvertical className='absolute bottom-[6%] right-[5%] w-[2%] lg:block hidden z-0' />
        </figure>
        <div
          id='text'
          className='flex flex-col py-8 justify-center w-full lg:w-[45%] lg:gap-6 gap-4 px-6 lg:h-screen z-10'
        >
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
            className='mb-10 btn lg:self-start lg:min-w-fit text-current bg-opacity-50  rounded-full flex items-center btn-secondary'
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.7 }}
          >
            {t("common:buttons:donate")}
            <span className='text-lg'>
              <BiDonateHeart />
            </span>
          </motion.button>
          <motion.div
            className='relative w-full rounded-2xl bg-opacity-50 ring-4 ring-white ring-opacity-20 bg-secondary flex lg:flex-row lg:justify-between flex-col items-center py-8 gap-4 px-4 z-10'
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 1 }}
          >
            <p className='flex items-center  gap-2 text-xs font-light'>
              <span className='text-lg font-black'>30k+</span>
              {t("landingPage:hero:stat1")}
            </p>
            <p className='flex items-center  gap-2 text-xs font-light'>
              <span className='text-lg font-black'>200+</span>
              {t("landingPage:hero:stat2")}
            </p>
            <p className='flex items-center gap-2 text-xs font-light'>
              <span className='text-lg font-black'>25k+</span>
              {t("landingPage:hero:stat3")}
            </p>
            <Xhorizontal className='absolute -top-2 left-7 fill-current w-36' />
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
