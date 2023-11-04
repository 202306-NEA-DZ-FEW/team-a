import { withTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import getAllStates from "@/lib/getAllStates";

import Container from "@/components/Container";
import SignUpForm from "@/components/SignUpForm";

import AuthPagesLayout from "@/layout/AuthPagesLayout";

function SignUpPage({ _nextI18Next, t }) {
  const states = getAllStates(t);
  const { initialLocale } = _nextI18Next;
  return (
    <AuthPagesLayout>
      <Container className='my-10'>
        <main dir={initialLocale === "ar" ? "rtl" : "ltr"}>
          <SignUpForm states={states} t={t} />
        </main>
      </Container>
    </AuthPagesLayout>
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
