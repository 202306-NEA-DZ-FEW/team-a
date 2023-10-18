import SignInForm from "@/components/SignInForm";
import Container from "@/components/container";
import { withTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

function SignInPage({ t }) {
  return (
    <Container>
      {t("signIn")}
      <SignInForm />
      {/* Ilustration here */}
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
