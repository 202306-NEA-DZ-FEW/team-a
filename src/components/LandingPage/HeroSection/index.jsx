import Image from "next/image";
import { useTranslation } from "next-i18next";
import illustration from "public/images/hero.svg";

import Container from "@/components/Container";

function HeroSection() {
  const { t } = useTranslation();
  return (
    <Container>
      <div className='flex flex-col justify-between items-center lg:flex-row-reverse gap-10 lg:gap-4 lg:min-h-screen my-20 lg:my-0'>
        <div id='illustration' className='w-96 md:px-0 px-8'>
          <Image src={illustration} alt='hero illustration' />
        </div>
        <div
          id='text'
          className='flex flex-col justify-start lg:w-1/2 lg:gap-8 gap-4'
        >
          <h1 className='text-3xl md:text-5xl font-bold'>
            {t("landingPage:hero:title")}
          </h1>
          <p className='text-start font-light text-md md:text-lg'>
            {t("landingPage:hero:description")}
          </p>
          <button className='btn btn-primary self-start'>
            {t("common:buttons:donate")}
          </button>
        </div>
      </div>
    </Container>
  );
}

export default HeroSection;
