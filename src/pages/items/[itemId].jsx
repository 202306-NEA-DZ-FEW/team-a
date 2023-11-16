import { withTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { fetchCollection } from "@/lib/fetchCollection";
import fetchFirebaseDoc from "@/lib/fetchFirebaseDoc";
import { fetchItemsByCategory } from "@/lib/fetchItemsByCategory";
import fetchUserInfo from "@/lib/fetchUserInfo";
import { getLocationName } from "@/lib/helpers";

import Container from "@/components/container";
import ItemDetailsCard from "@/components/ItemDetailsCard";

import ItemsCarousel from "../../components/ItemsCarousel";

function ItemDetails({ t, item, userInfo, relatedItems }) {
  const translatedLocation = t(`states:${item.location}`);
  const loctionName = getLocationName(translatedLocation);
  return (
    <>
      <section className='lg:flex lg:min-h-screen lg:justify-center lg:items-center'>
        <ItemDetailsCard
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
      <Container className='flex justify-center items-center gap-4 m-4'>
        <ItemsCarousel t={t} items={relatedItems} />
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
    fallback: false,
  };
}

export async function getStaticProps({ params, locale }) {
  const { itemId } = params;
  const item = await fetchFirebaseDoc("items", itemId);
  const relatedItems = await fetchItemsByCategory("items", item.category);
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
      relatedItems,
    },
    revalidate: 10,
  };
}
