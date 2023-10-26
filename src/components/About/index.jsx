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
          <h1 className='text-5xl font-futuraBlack'>Who we are</h1>
          <p className='text-start p-4'>
            At Unify, we&apos;re more than just a team of developers; we&apos;re
            a family united by a shared passion for coding and a deep commitment
            towards our best. Driven by a collective spirit, we thrive on
            challenges and continuously push boundaries to deliver excellence.
            We&apos;re not just building code; we&apos;re building connections
            within the community. Our journey is marked by collaboration,
            learning, and a genuine love for what we do. We&apos;re here to
            innovate, inspire, and leave a lasting mark on the world of coding.
          </p>
        </div>
      </div>
    </Container>
  );
}

export default About;
