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
        <Carousel items={categories} queryParams={queryParams} />
      </div>
      <SliderRow categories={categories} title='All categories' />
      {/* This is for Searchbar & Product Filtering */}
      <div className='flex flex-col md:flex-row gap-4 justify-between items-center px-10 mt-16'>
        <SearchBar queryParams={queryParams} />
        <LocationFilter t={t} queryParams={queryParams} />
        <Link
          href='/products/create'
          className='btn w-full md:w-40 bg-red-500 text-white hover:bg-green-900 btn-sm px-4 rounded-xl'
        >
          Add Item
        </Link>
        <ClearFilterButton />
      </div>
      {/* Section for Product Cards */}
      <h1
        className='text-2xl w-full font-semibold text-center my-16'
        id='products'
      >
        Products List
      </h1>
      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 mt-10 place-items-center gap-y-4'>
        {items.map((item) => (
          <ProductCard
            id={item.id}
            key={item.id}
            title={item.title}
            description={item.description}
            location={item.location}
            imageUrl={item.images[0]}
          />
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
        "ProductsPage",
        "categories",
      ])),
      items,
      queryParams,
    },
  };
}
