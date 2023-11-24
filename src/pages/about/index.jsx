import dynamic from "next/dynamic";
import { withTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import teamMembers from "@/lib/teamMembers";

import Container from "@/components/container";
import MapPlaceholder from "@/components/Map/MapPlaceholder";
import PageCoverPlaceholder from "@/components/PageCover/PageCoverPlaceholder";
import TeamMembersPlaceholder from "@/components/TeamMembers/TeamMembersPlaceholder";

const DynamicPageCover = dynamic(() => import("@/components/PageCover"), {
  loading: () => <PageCoverPlaceholder />,
});
const DynamicTeamMembers = dynamic(() => import("@/components/TeamMembers"), {
  loading: () => <TeamMembersPlaceholder />,
});
const DynamicMap = dynamic(() => import("@/components/Map"), {
  loading: () => <MapPlaceholder />,
});

function AboutPage({ t, _nextI18Next }) {
  const { initialLocale } = _nextI18Next;
  const team = teamMembers(t);
  return (
    <>
      <DynamicPageCover
        title={t("about:title")}
        description={t("about:description")}
        imageURL='https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      />
      <Container dir={initialLocale === "ar" ? "rtl" : "ltr"} className='my-20'>
        <DynamicTeamMembers t={t} team={team} />
      </Container>
      <DynamicMap t={t} />
    </>
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
