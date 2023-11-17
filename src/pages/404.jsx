import Image from "next/image";
import Link from "next/link";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import notFound from "public/images/404.svg";

export default function NotFoundPage() {
  return (
    <main className='h-screen w-full flex flex-col justify-center items-center gap-10 bg-base-100 px-8'>
      <Image src={notFound} width={400} height={400} alt='404' />
      <div className='text-center flex flex-col gap-2 text-sm font-light tracking-wider'>
        <h1 className='md:text-4xl text-3xl font-bold tracking-wide'>
          D&apos;OH! LOST?
        </h1>
        <p>Don&apos;t be a lone wondrer</p>
        <p>
          Let me help you teleport, here is the button to take you back home
        </p>
      </div>

      <Link className='btn btn-sm btn-primary bg-opacity-40 rounded-' href='/'>
        Go Home
      </Link>
    </main>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
