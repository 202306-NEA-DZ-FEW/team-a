import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { RiSearch2Line } from "react-icons/ri";
import { useDebounce } from "use-debounce";

function SearchBar({ queryParams }) {
  const router = useRouter();
  const [text, setText] = useState("");
  const [query] = useDebounce(text, 300);

  useEffect(() => {
    if (!query) {
      router.push(`/products`);
    } else {
      router.push({
        pathName: `/products`,
        query: { ...queryParams, search: query },
      });
    }
  }, [query, router, queryParams]);
  return (
    <>
      <div className='form-control md:flex-1 w-full'>
        <div className='md:max-w-xs relative w-full'>
          <RiSearch2Line className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500' />

          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            type='text'
            placeholder='Search Product'
            className='input-sm text-center rounded-xl input-bordered w-full md:max-w-xs'
          />
        </div>
      </div>
    </>
  );
}

export default SearchBar;
