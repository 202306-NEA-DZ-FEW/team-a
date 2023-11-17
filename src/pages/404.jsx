import Link from "next/link";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function NotFoundPage() {
  return (
    <main className='h-screen w-full flex flex-col justify-center items-center gap-10 bg-base-100 px-8'>
      {/*<Image src={notFound} width={400} height={400} alt='404'*/}
      <div className='text-center flex flex-col gap-2'>
        <h1>D&apos;OH! LOST?</h1>
        <p>Don&apos;t be a lone wondrer</p>
        <p>
          Let me help you teleport, here is the button to take you back home
        </p>
      </div>

      <Link href='/'>Go Home</Link>
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
