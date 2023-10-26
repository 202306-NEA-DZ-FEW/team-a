import Image from "next/image";
import illustration from "public/images/about.svg";

import Container from "@/components/container";

function About({ t }) {
  return (
    <Container>
      <div className='flex flex-col justify-center items-center md:flex-row-reverse gap-4  min-h-screen'>
        <div id='illustration' className='md:w-1/2 p-6 m-2'>
          <Image src={illustration} alt='hero illustration' />
        </div>
        <div
          id='text'
          className='flex flex-col justify-center items-center  p-2 md:w-1/2 gap-2'
        >
          <h1 className='text-5xl font-futuraBlack'>{t("about:title")}</h1>
          <p className='text-start p-4'>{t("about:description")}</p>
        </div>
      </div>
    </Container>
  );
}

export default About;
