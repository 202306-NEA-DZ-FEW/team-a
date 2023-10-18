import Container from "@/components/container";
import { withTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

function Dashboard({ t }) {
  return <Container>{t("dashboard")}</Container>;
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
