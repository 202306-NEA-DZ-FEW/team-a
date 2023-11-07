import Link from "next/link";
import { withTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { fetchCollection } from "@/lib/fetchCollection";
import getAllCategories from "@/lib/getAllCategories";

import Carousel from "@/components/Carousel";
import ProductCard from "@/components/ProductCard";
import ClearFilterButton from "@/components/ProductFiltering/ClearFilterButton";
import LocationFilter from "@/components/ProductFiltering/LocationFilter";
import SliderRow from "@/components/ProductFiltering/SliderRow";
import SearchBar from "@/components/SearchBar";

function ProductsPage({ t, items, queryParams }) {
  const categories = getAllCategories(t);
  return (
    <main className='mb-10'>
      {/* This is Categories Section */}
      <div className='relative md:h-[75vh] h-[80vh] overflow-x-hidden w-full'>
        <Carousel t={t} items={categories} queryParams={queryParams} />
      </div>
      <SliderRow categories={categories} title={t("productsPage:all")} />
      {/* This is for Searchbar & Product Filtering */}
      <div className='flex flex-col md:flex-row gap-4 justify-between items-center px-10 mt-16'>
        <SearchBar t={t} queryParams={queryParams} />
        <LocationFilter t={t} queryParams={queryParams} />
        <Link
          href='/products/create'
          className='btn w-full md:w-40 bg-red-500 text-white hover:bg-green-900 btn-sm px-4 rounded-xl'
        >
          {t("common:buttons:addItem")}
        </Link>
        <ClearFilterButton t={t} />
      </div>
      {/* Section for Product Cards */}
      <h1
        className='text-2xl w-full font-semibold text-center my-16'
        id='products'
      >
        {t("productsPage:productsList")}
      </h1>
      <div className='flex flex-wrap gap-4 items-center justify-center w-full'>
        {items.map((item) => (
          <Link
            key={item.id}
            href={{
              pathname: `/products/${item.id}`,
            }}
          >
            <ProductCard
              title={item.title}
              listingType={t(`addItem:${item.listingType}`)}
              category={t(`categories:${item.category}`)}
              location={t(`states:${item.location}`)}
              imageUrl={item.images[0]}
            />
          </Link>
        ))}
      </div>
    </main>
  );
}

export default withTranslation("ProductsPage")(ProductsPage);

export async function getServerSideProps({ locale, query }) {
  const queryParams = query;
  const items = await fetchCollection("items", queryParams);
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "common",
        "states",
        "productsPage",
        "categories",
        "addItem",
      ])),
      items,
      queryParams,
    },
  };
}
