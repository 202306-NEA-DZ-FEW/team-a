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
        className='md:flex md:justify-between md:items-center min-h-screen '
        dir={initialLocale === "ar" ? "rtl" : "ltr"}
      >
        <SignInForm t={t} />
        <div className='gap-4 lg:flex flex-col md:w-[50%] md:min-h-screen items-center justify-center hidden'>
          <figure className='w-full min-h-screen relative'>
            <Image
              src='/images/sign_in.svg'
              priority
              alt='test'
              width={1080}
              height={1080}
              className='object-cover'
            />
          </figure>
        </div>
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
