import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import HeroSection from "@/components/LandingPage/HeroSection";
import CausesSection from "@/components/LandingPage/CausesSection";
import StatisticsSection from "@/components/LandingPage/StatisticsSection";
import PopularItemsSection from "@/components/LandingPage/PopularItemsSection";
import BlogsSection from "@/components/LandingPage/BlogsSection/BlogsSection";
import OurPartnersSection from "@/components/LandingPage/OurPartnersSection";

export default function HomePage(props) {
  const { initialLocale } = props._nextI18Next;

  return (
    <>
      {/* <p className='text-3xl font-futuraBlack'>{t("test")}</p> */}
      <HeroSection />
      <CausesSection />
      <StatisticsSection />
      <PopularItemsSection />
      <BlogsSection />
      <OurPartnersSection />
    </>
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
