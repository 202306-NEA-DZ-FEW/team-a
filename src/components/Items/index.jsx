import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { BsBoxSeam } from "react-icons/bs";
import { IoAddCircleOutline } from "react-icons/io5";
import { MdFilterList } from "react-icons/md";

import CategoryFilter from "./Filters/CategoryFilter";
import ClearFilterButton from "./Filters/ClearFilterButton";
import ListingTypeFilter from "./Filters/ListingTypeFilter";
import LocationFilter from "./Filters/LocationFilter";
import Pagination from "./Filters/Pagination";
import ItemCard from "../ItemCard";
import SearchBar from "../SearchBar";

function Items({
  t,
  queryParams,
  totalItems,
  items,
  page,
  totalPages,
  pageSize,
}) {
  const router = useRouter();
  const [searchText, setSearchText] = useState(queryParams.search || "");

  useEffect(() => {
    if (!queryParams.search) {
      setSearchText("");
    }
  }, [queryParams.search]);

  const handleClearFilters = async () => {
    router.push(
      {
        pathname: "/items",
        query: undefined,
      },
      undefined,
      { scroll: false }
    );
  };
  return (
    <div className='flex flex-col lg:flex-row px-8 gap-8 mt-10 items-start min-h-[80vh]'>
      <div className='lg:w-[30%] h-full w-full bg-white drop-shadow-lg p-4 rounded-xl flex gap-6 flex-col'>
        <h3 className='flex gap-2 items-center text-2xl tracking-wide lg:mb-8'>
          <MdFilterList /> {t("itemsPage:filters")}
        </h3>
        <LocationFilter t={t} queryParams={queryParams} />
        <CategoryFilter t={t} queryParams={queryParams} />
        <ListingTypeFilter t={t} queryParams={queryParams} />

        <ClearFilterButton t={t} handleClearFilters={handleClearFilters} />
      </div>
      <div className='flex flex-col gap-8 flex-1'>
        <div className='bg-white drop-shadow-lg flex flex-wrap gap-2 rounded-xl p-4 justify-between'>
          <h1
            className='flex gap-2 items-center text-xl tracking-wide flex-1 min-w-fit '
            id='products'
          >
            <BsBoxSeam />
            {t("itemsPage:itemsList")}
            <span className='opacity-70'> | {totalItems}</span>
          </h1>
          <SearchBar
            t={t}
            queryParams={queryParams}
            searchText={searchText}
            setSearchText={setSearchText}
          />
          <Link
            placeholder='dasda'
            href='/items/create'
            className='btn btn-sm rounded-full normal-case font-normal'
          >
            <IoAddCircleOutline size={20} />
            {t("common:buttons:addItem")}
          </Link>
        </div>
        <div className='bg-white drop-shadow-lg rounded-xl p-4 flex flex-col gap-4 lg:min-h-[300px] justify-between'>
          <div className='flex flex-wrap gap-4 items-center justify-center md:justify-start w-full'>
            {items.map((item) => (
              <Link
                key={item.id}
                href={{
                  pathname: `/items/${item.id}`,
                }}
              >
                <ItemCard
                  title={item.title}
                  listingType={t(`addItem:${item.listingType}`)}
                  category={t(`categories:${item.category}`)}
                  location={t(`states:${item.location}`)}
                  imageUrl={item.images[0]}
                />
              </Link>
            ))}
            {!items.length && <p>{t("common:buttons:noItemsfound")}</p>}
          </div>
          <Pagination
            totalItems={totalItems}
            page={page}
            queryParams={queryParams}
            totalPages={totalPages}
            pageSize={pageSize}
          />
        </div>
      </div>
    </div>
  );
}

export default Items;
