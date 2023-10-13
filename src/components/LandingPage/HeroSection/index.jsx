/* import HeroText from "./HeroText"; */
import Image from "next/image";
import illustration from "public/images/hero.svg";

import Container from "@/components/container";

function HeroSection() {
  return (
    <Container>
      {/*  <HeroText text={t("landingPage:heroSectionText")} /> */}
      <div className='flex flex-col justify-center items-center md:flex-row-reverse gap-4  min-h-screen'>
        <div id='illustration' className='md:w-1/2 p-6 m-2'>
          <Image src={illustration} alt='hero illustration' />
        </div>
        <div
          id='text'
          className='flex flex-col justify-center items-center  p-2 md:w-1/2 gap-2'
        >
          <h1 className='text-5xl font-futuraBlack'>let&apos;s share</h1>
          <p className='text-start p-8'>
            Welcome to Let&apos;s Share! Where everything you may not need is
            someone else&apos;s necessity. From clothing to furniture, we are
            here to be the link between you and people in need. Together, we can
            make a significant difference in the lives of those who require a
            helping hand. Join us in spreading warmth, kindness, and hope.
            Let&apos;s create a community bound by the spirit of giving and
            compassion, one item at a time.
          </p>
          <button className='text-base btn btn-primary py-2 px-4 text-white font-bold hover:bg-green-900'>
            Donate now
          </button>
        </div>
      </div>
    </Container>
  );
}

export default HeroSection;
