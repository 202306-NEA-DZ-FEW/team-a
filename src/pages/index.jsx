import dynamic from "next/dynamic";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { fetchCollection } from "@/lib/fetchCollection";

import BlogsSectionPlaceholder from "@/components/LandingPage/BlogsSection/BlogsSectionPlaceholder";
import CausesSectionPlaceholder from "@/components/LandingPage/CausesSection/CausesSectionPlaceholder";
import HeroSectionPlaceholder from "@/components/LandingPage/HeroSection/HeroSectionPlaceholder";
import OurPartnersSectionPlaceholder from "@/components/LandingPage/OurPartnersSection/OurPartnersSectionPlaceholder";
import PopularItemsSectionPlaceholder from "@/components/LandingPage/PopularItemsSection/PopularItemsSectionPlaceholder";
import StatisticsSectionPlaceholder from "@/components/LandingPage/StatisticsSection/StatisticsSectionPlaceholder";
import Newsletter from "@/components/Newsletter";

const DynamicHeroSection = dynamic(
  () => import("@/components/LandingPage/HeroSection"),
  {
    loading: () => <HeroSectionPlaceholder />,
  }
);
const DynamicCausesSection = dynamic(
  () => import("@/components/LandingPage/CausesSection"),
  {
    loading: () => <CausesSectionPlaceholder />,
  }
);
const DynamicStatisticsSection = dynamic(
  () => import("@/components/LandingPage/StatisticsSection"),
  {
    loading: () => <StatisticsSectionPlaceholder />,
  }
);
const DynamicPopularItemsSection = dynamic(
  () => import("@/components/LandingPage/PopularItemsSection"),
  {
    loading: () => <PopularItemsSectionPlaceholder />,
  }
);
const DynamicBlogsSection = dynamic(
  () => import("@/components/LandingPage/BlogsSection"),
  {
    loading: () => <BlogsSectionPlaceholder />,
  }
);
const DynamicOurPartnersSection = dynamic(
  () => import("@/components/LandingPage/OurPartnersSection"),
  {
    loading: () => <OurPartnersSectionPlaceholder />,
  }
);

export default function HomePage({ items, blogs, _nextI18Next }) {
  const { initialLocale } = _nextI18Next;

  return (
    <main dir={initialLocale === "ar" ? "rtl" : "ltr"}>
      <DynamicHeroSection />
      <DynamicCausesSection />
      <DynamicStatisticsSection />
      <DynamicPopularItemsSection items={items} />
      <DynamicBlogsSection blogs={blogs} />
      <DynamicOurPartnersSection />
      <Newsletter />
    </main>
  );
}

export async function getStaticProps({ locale }) {
  const items = await fetchCollection("items");
  const blogs = await fetchCollection("blogs");
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "common",
        "landingPage",
        "states",
        "categories",
        "addItem",
        "newsletter",
        "signIn",
        "blogs",
      ])),
      items: items.slice(0, 5),
      blogs: blogs.slice(0, 3),
    },
    revalidate: 30,
  };
}
