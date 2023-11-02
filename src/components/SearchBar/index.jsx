import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { RiSearch2Line } from "react-icons/ri";
import { useDebounce } from "use-debounce";

function SearchBar({ t, queryParams }) {
  const router = useRouter();
  const [text, setText] = useState("");
  let [query] = useDebounce(text, 600);

  useEffect(() => {
    // Update the query state when text or queryParams change
    const newQueryParams = { ...queryParams };
    if (query) {
      newQueryParams.search = query;
    } else {
      delete newQueryParams.search;
    }

    const currentURL = router.query.search || "";

    // Only update the URL if it's different from the current URL
    if (query !== currentURL) {
      router.push(
        {
          pathname: `/products`,
          query: newQueryParams,
        },
        undefined,
        { scroll: false }
      );
    }
  }, [query, queryParams, router]);

  useEffect(() => {
    // Update the text input when queryParams change
    setText(queryParams.search || "");
  }, [queryParams.search]);

  return (
    <div className='form-control md:flex-1 w-full'>
      <div className='md:max-w-xs relative w-full'>
        <RiSearch2Line className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500' />
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          type='text'
          placeholder={t("productsPage:searchPlaceHolder")}
          className='input-sm text-center rounded-xl input-bordered w-full md:max-w-xs'
        />
      </div>
    </div>
  );
}

export default SearchBar;
