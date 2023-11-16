import dynamic from "next/dynamic";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { fetchCollection } from "@/lib/fetchCollection";

import BlogsSectionPlaceholder from "@/components/LandingPage/BlogsSection/BlogsSectionPlaceholder";
import CausesSection from "@/components/LandingPage/CausesSection";
import HeroSectionPlaceholder from "@/components/LandingPage/HeroSection/HeroSectionPlaceholder";
import PopularItemsSectionPlaceholder from "@/components/LandingPage/PopularItemsSection/PopularItemsSectionPlaceholder";
import StatisticsSection from "@/components/LandingPage/StatisticsSection";
import Newsletter from "@/components/Newsletter";

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

export default function HomePage({ items, blogs, _nextI18Next }) {
  const { initialLocale } = _nextI18Next;

  return (
    <main dir={initialLocale === "ar" ? "rtl" : "ltr"}>
      <DynamicHeroSection />
      <CausesSection />
      <StatisticsSection />
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
      ])),
      items: items.slice(0, 5),
      blogs: blogs.slice(0, 4),
    },
    revalidate: 30,
  };
}
