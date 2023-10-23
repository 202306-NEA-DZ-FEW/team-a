import { withTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import getAllStates from "@/lib/getAllStates";

import Container from "@/components/container";
import SignUpForm from "@/components/SignUpForm";

import PublicRouteLayout from "@/layout/PublicRouteLayout";

function SignUpPage({ _nextI18Next, t }) {
  const states = getAllStates(t);
  const { initialLocale } = _nextI18Next;
  return (
    <PublicRouteLayout>
      <Container className='my-10'>
        <main dir={initialLocale === "ar" ? "rtl" : "ltr"}>
          <SignUpForm states={states} t={t} />
        </main>
      </Container>
    </PublicRouteLayout>
  );
}

export default withTranslation(["common", "signUp", "states"])(SignUpPage);

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "signUp", "states"])),
      // Will be passed to the page component as props
    },
  };
}
