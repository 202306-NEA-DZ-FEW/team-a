import { withTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import About from "@/components/About";
import Container from "@/components/container";

function AboutPage({ t, _nextI18Next }) {
  const { initialLocale } = _nextI18Next;
  return (
    <Container className='my-10'>
      <main dir={initialLocale === "ar" ? "rtl" : "ltr"}>
        <About t={t} />
      </main>
    </Container>
  );
}

export default withTranslation(["common", "about"])(AboutPage);

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "about"])),
    },
  };
}
