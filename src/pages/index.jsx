import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Layout from "@/layout/Layout";
import HeroSection from "@/components/LandingPage/HeroSection";
import CausesSection from "@/components/LandingPage/CausesSection";
import StatisticsSection from "@/components/LandingPage/StatisticsSection";
import PopularItemsSection from "@/components/LandingPage/PopularItemsSection";
import BlogsSection from "@/components/LandingPage/BlogsSection/BlogsSection";
import OurPartnersSection from "@/components/LandingPage/OurPartnersSection";

export default function HomePage(props) {
  const { t } = useTranslation();
  const { initialLocale } = props._nextI18Next;

  return (
    <Layout initialLocale={initialLocale}>
      {/* <p className='text-3xl font-futuraBlack'>{t("test")}</p> */}
      <HeroSection t={t} />
      <CausesSection />
      <StatisticsSection />
      <PopularItemsSection />
      <BlogsSection />
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
