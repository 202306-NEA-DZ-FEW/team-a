import Image from "next/image";
import { withTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import SignInForm from "@/components/SignInForm";

import AuthPagesLayout from "@/layout/AuthPagesLayout";

function SignInPage({ t, _nextI18Next }) {
  const { initialLocale } = _nextI18Next;
  return (
    <AuthPagesLayout>
      <main
        className='flex justify-between min-h-screen'
        dir={initialLocale === "ar" ? "rtl" : "ltr"}
      >
        <div className='flex shadow-2xl flex-col min-h-screen mx-auto w-full p-4 md:px-20 lg:px-8'>
          <div className='navbar'></div>
          <SignInForm t={t} />
        </div>
        <figure className='hidden max-h-full lg:block md:w-[60%] relative flex-shrink-0 saturate-0'>
          <Image
            src='/images/signin.jpg'
            priority
            alt='test'
            width={2000}
            height={2000}
            className='object-cover w-full  min-h-screen max-h-[820px]'
          />
        </figure>
      </main>
    </AuthPagesLayout>
  );
}

export default withTranslation("signIn")(SignInPage);

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "signIn"])),
      // Will be passed to the page component as props
    },
  };
}
