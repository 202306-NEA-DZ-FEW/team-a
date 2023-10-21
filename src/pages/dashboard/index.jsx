import { withTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Container from "@/components/container";
import UserListItems from "@/components/UserListItems";
import UserProfile from "@/components/UserProfile";

function Dashboard({ t, _nextI18Next }) {
  const { initialLocale } = _nextI18Next;
  return (
    <Container className='flex flex-col justify-center gap-8'>
      <main dir={initialLocale === "ar" ? "rtl" : "ltr"}>{t("dashboard")}</main>
      <UserProfile />
      <UserListItems />
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
