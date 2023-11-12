import Link from "next/link";
import { withTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { BsBoxSeam } from "react-icons/bs";
import { IoAddCircleOutline } from "react-icons/io5";
import { MdFilterList } from "react-icons/md";

import { fetchCollection } from "@/lib/fetchCollection";
import getAllCategories from "@/lib/getAllCategories";

import Carousel from "@/components/Carousel";
import ProductCard from "@/components/ProductCard";
import CategoryFilter from "@/components/ProductFiltering/CategoryFilter";
import ClearFilterButton from "@/components/ProductFiltering/ClearFilterButton";
import ListingTypeFilter from "@/components/ProductFiltering/ListingTypeFilter";
import LocationFilter from "@/components/ProductFiltering/LocationFilter";
import SearchBar from "@/components/SearchBar";

function ProductsPage({ t, items, queryParams }) {
  const categories = getAllCategories(t);
  return (
    <main className='pb-10'>
      {/* This is Categories Section */}
      <div className='relative md:h-[75vh] h-[80vh] overflow-x-hidden w-full'>
        <Carousel t={t} items={categories} queryParams={queryParams} />
      </div>
      <div className='flex flex-col lg:flex-row px-8 gap-8 mt-8 items-start'>
        <div className='lg:w-[30%] lg:min-h-[360px] w-full bg-white drop-shadow-lg p-4 rounded-xl flex gap-6 flex-col'>
          <h3 className='flex gap-2 items-center text-2xl tracking-wide lg:mb-8'>
            <MdFilterList /> Filters
          </h3>
          <LocationFilter t={t} queryParams={queryParams} />
          <CategoryFilter t={t} queryParams={queryParams} />
          <ListingTypeFilter t={t} queryParams={queryParams} />

          <ClearFilterButton t={t} />
        </div>
        <div className='flex flex-col gap-8 flex-1'>
          <div className='bg-white drop-shadow-lg flex flex-wrap gap-2 rounded-xl p-4 justify-between'>
            <h1
              className='flex gap-2 items-center text-xl tracking-wide flex-1 min-w-fit '
              id='products'
            >
              <BsBoxSeam />
              {t("productsPage:productsList")}
            </h1>
            <SearchBar t={t} queryParams={queryParams} />
            <Link
              placeholder='dasda'
              href='/products/create'
              className='btn btn-sm rounded-full normal-case font-normal'
            >
              <IoAddCircleOutline size={20} />
              {t("common:buttons:addItem")}
            </Link>
          </div>
          <div className='bg-white drop-shadow-lg rounded-xl p-4 flex flex-wrap gap-4 items-center justify-start w-full'>
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
            {!items.length && <p>No items found...</p>}
          </div>
        </div>
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
