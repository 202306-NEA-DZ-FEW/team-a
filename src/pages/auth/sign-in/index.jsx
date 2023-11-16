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
        className='flex justify-between py-16 lg:py-0 items-center min-h-screen'
        dir={initialLocale === "ar" ? "rtl" : "ltr"}
      >
        <SignInForm t={t} />
        <figure className='hidden lg:block md:w-[50%] xl:w-[50%] relative flex-shrink-0'>
          <Image
            src='/images/signIn.svg'
            priority
            alt='test'
            width={2000}
            height={2000}
            className='object-cover w-full h-full'
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
