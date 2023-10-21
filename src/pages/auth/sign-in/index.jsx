import Image from "next/image";
import { withTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import login from "public/images/team_1.svg";

import Container from "@/components/container";
import SignInForm from "@/components/SignInForm";

function SignInPage({ t, _nextI18Next }) {
  const { initialLocale } = _nextI18Next;
  return (
    <Container>
      <main
        className='md:flex md:justify-between md:items-center my-20 md:min-h-screen md:my-0'
        dir={initialLocale === "ar" ? "rtl" : "ltr"}
      >
        <SignInForm t={t} />
        <figure className='hidden md:flex md:w-[60%]'>
          <Image src={login} alt='login' className='object-cover' />
        </figure>
      </main>
    </Container>
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
