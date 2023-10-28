import { withTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { fetchCollection } from "@/lib/fetchCollection";
import getAllCategories from "@/lib/getAllCategories";

import ProductCard from "@/components/ProductCard";
import CategoryCard from "@/components/ProductFiltering/Category";
import ClearFilterButton from "@/components/ProductFiltering/ClearFilterButton";
import LocationFilter from "@/components/ProductFiltering/LocationFilter";
import SearchBar from "@/components/SearchBar";

function ProductsPage({ t, items, queryParams }) {
  const categories = getAllCategories(t);
  return (
    <main className='mb-10'>
      {/* This is Categories Section */}
      <div className='grid lg:grid-cols-5 md:grid-cols-5 grid-cols-2 gap-4 mx-5 my-10 justify-center'>
        {categories.map((category) => (
          <CategoryCard
            queryParams={queryParams}
            link={category.dataKey}
            key={category.dataKey}
            title={category.name}
            imageUrl={category.imageURL}
          />
        ))}
      </div>
      {/* This is for Searchbar & Product Filtering */}
      <div className='flex flex-col md:flex-row gap-4 justify-between items-center px-10 mt-16'>
        <SearchBar queryParams={queryParams} />
        <LocationFilter t={t} queryParams={queryParams} />
        <button className='btn w-full md:w-40 bg-red-500 text-white hover:bg-green-900 btn-sm px-4 rounded-xl'>
          Add Item
        </button>
        <ClearFilterButton />
      </div>

      {/* Section for Product Cards */}
      <h1 className='text-2xl w-full font-semibold text-center my-16'>
        Products List
      </h1>
      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 mt-10 place-items-center gap-y-4'>
        {items.map((item) => (
          <ProductCard
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
