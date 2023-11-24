import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { fetchCollection } from "@/lib/fetchCollection";

import BlogsSection from "@/components/LandingPage/BlogsSection/BlogsSection";
import CausesSection from "@/components/LandingPage/CausesSection";
import HeroSection from "@/components/LandingPage/HeroSection";
import OurPartnersSection from "@/components/LandingPage/OurPartnersSection";
import PopularItemsSection from "@/components/LandingPage/PopularItemsSection";
import StatisticsSection from "@/components/LandingPage/StatisticsSection";
import Newsletter from "@/components/Newsletter";

export default function HomePage({ items, blogs, _nextI18Next }) {
  const { initialLocale } = _nextI18Next;

  return (
    <main dir={initialLocale === "ar" ? "rtl" : "ltr"}>
      <HeroSection />
      <CausesSection />
      <StatisticsSection />
      <PopularItemsSection items={items} />
      <BlogsSection blogs={blogs} />
      <OurPartnersSection />
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
