import SIgnUpFrom from "@/components/SIgnUpFrom";
import Container from "@/components/container";
import { withTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

function SignUpPage({ t, _nextI18Next }) {
  const { initialLocale } = _nextI18Next;
  return (
    <Container>
      <main dir={initialLocale === "ar" ? "rtl" : "ltr"}>
        {t("signUp")}
        <SIgnUpFrom />
      </main>
    </Container>
  );
}

export default withTranslation("signUp")(SignUpPage);

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "signUp"])),
      // Will be passed to the page component as props
    },
  };
}
