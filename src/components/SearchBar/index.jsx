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
    <div className='relative rounded-full border'>
      <RiSearch2Line className='absolute right-3 translate-y-1/2 transform text-gray-500' />
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        type='text'
        placeholder={t("productsPage:searchPlaceHolder")}
        className='border-none input-sm rounded-full input-bordered input bg-gray-50 outline-none font-light normal-case w-full'
      />
    </div>
  );
}

export default SearchBar;
