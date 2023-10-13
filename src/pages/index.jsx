import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import BlogsSection from "@/components/LandingPage/BlogsSection/BlogsSection";
import CausesSection from "@/components/LandingPage/CausesSection";
import HeroSection from "@/components/LandingPage/HeroSection";
import OurPartnersSection from "@/components/LandingPage/OurPartnersSection";
import PopularItemsSection from "@/components/LandingPage/PopularItemsSection";
import StatisticsSection from "@/components/LandingPage/StatisticsSection";

import Layout from "@/layout/Layout";

export default function HomePage(props) {
  const { t } = useTranslation();
  const { initialLocale } = props._nextI18Next;

  return (
    <Layout initialLocale={initialLocale}>
      {/* <p className='text-3xl font-futuraBlack'>{t("test")}</p> */}
      <HeroSection t={t} />
      <hr />
      <CausesSection />
      <StatisticsSection />
      <PopularItemsSection />
      <hr />
      <BlogsSection />
      <hr />
      <OurPartnersSection />
    </Layout>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "landingPage"])),
      // Will be passed to the page component as props
    },
  };
}
