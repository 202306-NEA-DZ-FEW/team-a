import Container from "@/components/container";
import { withTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

function Dashboard({ t, _nextI18Next }) {
  const { initialLocale } = _nextI18Next;
  return (
    <Container>
      <main dir={initialLocale === "ar" ? "rtl" : "ltr"}>{t("dashboard")}</main>
    </Container>
  );
}

export default withTranslation("dashboard")(Dashboard);

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "dashboard"])),
      // Will be passed to the page component as props
    },
  };
}
