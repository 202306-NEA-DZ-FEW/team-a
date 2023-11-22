import { useRouter } from "next/router";
import { useEffect } from "react";
import { RiSearch2Line } from "react-icons/ri";
import { useDebounce } from "use-debounce";

function SearchBar({ t, queryParams, searchText, setSearchText }) {
  const router = useRouter();
  let [query] = useDebounce(searchText, 300);

  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };

  useEffect(() => {
    const newQueryParams = { ...queryParams };
    if (query) {
      newQueryParams.search = query;
      delete newQueryParams.page;
      const currentURL = router.query.search || "";

      if (query !== currentURL) {
        router.push(
          {
            pathname: "/items",
            query: newQueryParams,
          },
          undefined,
          { scroll: false }
        );
      }
    } else {
      delete newQueryParams.search;
      router.push(
        {
          pathName: "/items",
          query: { ...newQueryParams },
        },
        undefined,
        { scroll: false }
      );
    }
  }, [query]);

  return (
    <div className='relative rounded-full border-base-300'>
      <RiSearch2Line className='absolute right-3 translate-y-1/2 transform text-gray-500' />
      <input
        value={searchText}
        onChange={handleSearch}
        type='text'
        placeholder={t("itemsPage:searchPlaceHolder")}
        className='border-none input-sm rounded-full input-bordered input bg-base-200 outline-none font-light normal-case w-full'
      />
    </div>
  );
}

export default SearchBar;
