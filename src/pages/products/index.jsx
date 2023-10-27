import { withTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { RiSearch2Line } from "react-icons/ri";

import { fetchFirestoreData } from "@/lib/fetchFireStoreItems";

import ProductCard from "@/components/ProductCard";
import CategoryCard from "@/components/ProductFiltering/Category";
import LocationFilter from "@/components/ProductFiltering/LocationFilter";

function ProductsPage({ t, items }) {
  return (
    <main className='mb-10'>
      {/* This is Categories Section */}
      <div className='grid lg:grid-cols-5 md:grid-cols-5 grid-cols-2 gap-4 mx-5 my-10 justify-center'>
        <CategoryCard />
      </div>
      {/* This is for Searchbar & Product Filtering */}
      <div className='flex flex-col md:flex-row gap-4 justify-between items-center px-10 mt-16'>
        <div className='form-control md:flex-1 w-full'>
          <div className='md:max-w-xs relative w-full'>
            <RiSearch2Line className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500' />

            <input
              type='text'
              placeholder='Search Product'
              className='input-sm text-center rounded-xl input-bordered w-full md:max-w-xs'
            />
          </div>
        </div>
        <LocationFilter t={t} />
        <button className='btn w-full md:w-40 bg-red-500 text-white hover:bg-green-900 btn-sm px-4 rounded-xl'>
          Add Item
        </button>
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
            imageUrl={item.imageUrl[1]}
          />
        ))}
      </div>
    </main>
  );
}

export default withTranslation("ProductsPage")(ProductsPage);

export async function getServerSideProps({ locale }) {
  const items = await fetchFirestoreData("items");
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "common",
        "states",
        "ProductsPage",
      ])),
      items,
    },
  };
}
