import dynamic from "next/dynamic";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import BlogsSectionPlaceholder from "@/components/LandingPage/BlogsSection/BlogsSectionPlaceholder";
import CausesSection from "@/components/LandingPage/CausesSection";
import HeroSectionPlaceholder from "@/components/LandingPage/HeroSection/HeroSectionPlaceholder";
import PopularItemsSectionPlaceholder from "@/components/LandingPage/PopularItemsSection/PopularItemsSectionPlaceholder";
import StatisticsSection from "@/components/LandingPage/StatisticsSection";

const DynamicHeroSection = dynamic(
  () => import("@/components/LandingPage/HeroSection"),
  {
    loading: () => <HeroSectionPlaceholder />,
  }
);
const DynamicPopularItemsSection = dynamic(
  () => import("@/components/LandingPage/PopularItemsSection"),
  {
    loading: () => <PopularItemsSectionPlaceholder />,
  }
);
const DynamicBlogsSection = dynamic(
  () => import("@/components/LandingPage/BlogsSection/BlogsSection"),
  {
    loading: () => <BlogsSectionPlaceholder />,
  }
);
const DynamicOurPartnersSection = dynamic(
  () => import("@/components/LandingPage/OurPartnersSection"),
  {
    loading: () => <BlogsSectionPlaceholder />,
  }
);

export default function HomePage(props) {
  const { initialLocale } = props._nextI18Next;

  return (
    <main dir={initialLocale === "ar" ? "rtl" : "ltr"}>
      <DynamicHeroSection />
      <CausesSection />
      <StatisticsSection />
      <DynamicPopularItemsSection />
      <DynamicBlogsSection />
      <DynamicOurPartnersSection />
    </main>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "landingPage"])),
    },
  };
}
