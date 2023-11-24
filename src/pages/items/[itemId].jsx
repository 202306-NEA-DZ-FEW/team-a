import dynamic from "next/dynamic";
import { withTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { fetchCollection } from "@/lib/fetchCollection";
import fetchFirebaseDoc from "@/lib/fetchFirebaseDoc";
import { fetchItemsByCategory } from "@/lib/fetchItemsByCategory";
import fetchUserInfo from "@/lib/fetchUserInfo";
import { getLocationName } from "@/lib/helpers";

import Container from "@/components/container";
import ItemDetailsCardPlaceholder from "@/components/ItemDetailsCard/ItemDetailsCardPlaceholder";
import ItemsCarouselPlaceholder from "@/components/ItemsCarousel/ItemsCarouselPlaceholder";

const DynamicItemDetailsCard = dynamic(
  () => import("@/components/ItemDetailsCard"),
  {
    loading: () => <ItemDetailsCardPlaceholder />,
  }
);
const DynamicItemsCarousel = dynamic(
  () => import("@/components/ItemsCarousel"),
  {
    loading: () => <ItemsCarouselPlaceholder />,
  }
);

function ItemDetails({ t, item, userInfo, relatedItems, locale }) {
  const translatedLocation = t(`states:${item.location}`);
  const loctionName = getLocationName(translatedLocation);
  return (
    <>
      <section className='lg:flex lg:min-h-screen lg:justify-center lg:items-center'>
        <DynamicItemDetailsCard
          title={item.title}
          description={item.description}
          location={loctionName}
          listingType={t(`addItem:${item.listingType}`)}
          category={t(`categories:${item.category}`)}
          createdAt={item.createdAt}
          images={item.images}
          username={userInfo.name}
          email={userInfo.email}
          phone={userInfo.phone}
        />
      </section>
      <h1 className='font-bold text-3xl m-4 text-center'>
        {t("itemsPage:relatedItems")}
      </h1>
      <Container className='flex justify-center items-center gap-4 py-8'>
        {relatedItems.length ? (
          <DynamicItemsCarousel t={t} items={relatedItems} />
        ) : (
          <p dir={locale === "ar" ? "rtl" : "ltr"}>
            {t(`itemsPage:noRelatedItems`)}...
          </p>
        )}
      </Container>
    </>
  );
}
export default withTranslation("common")(ItemDetails);

export async function getStaticPaths({ locales }) {
  const items = await fetchCollection("items");
  const paths = [];

  items.forEach((item) => {
    locales.forEach((locale) => {
      paths.push({
        params: { itemId: item.id.toString() },
        locale: locale,
      });
    });
  });
  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps({ params, locale }) {
  const { itemId } = params;
  const item = await fetchFirebaseDoc("items", itemId);
  if (!item) {
    return {
      notFound: true,
    };
  }
  const relatedItems = await fetchItemsByCategory("items", item.category);
  const filteredItems = relatedItems.filter((item) => item.id !== itemId);
  const userInfo = await fetchUserInfo(item.uid);

  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "addItem",
        "common",
        "categories",
        "itemsPage",
        "states",
        "signUp",
      ])),
      item,
      userInfo,
      relatedItems: filteredItems,
      locale,
    },
    revalidate: 10,
  };
}
