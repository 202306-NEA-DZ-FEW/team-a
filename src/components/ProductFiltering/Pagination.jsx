import { useRouter } from "next/router";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";

function Pagination({ page, pageSize, totalItems, queryParams, totalPages }) {
  const router = useRouter();

  const hasPrev = pageSize * (parseInt(page) - 1) > 0;
  const hasNext = pageSize * (parseInt(page) - 1) + pageSize < totalItems;

  const handleChangePage = (type) => {
    type === "prev"
      ? router.push(
          {
            pathname: `/products`,
            query: { ...queryParams, page: page - 1 },
          },
          undefined,
          { scroll: false }
        )
      : router.push(
          {
            pathname: `/products`,
            query: { ...queryParams, page: page + 1 },
          },
          undefined,
          { scroll: false }
        );
  };

  return (
    <div className='flex items-center justify-between'>
      <div className='flex gap-4'>
        <button
          className='btn btn-sm normal-case font-normal tracking-wide'
          disabled={!hasPrev}
          onClick={() => handleChangePage("prev")}
        >
          <BiLeftArrow /> Previous
        </button>
        <button
          className='btn btn-sm normal-case font-normal tracking-wide'
          disabled={!hasNext}
          onClick={() => handleChangePage("next")}
        >
          Next <BiRightArrow />
        </button>
      </div>
      <div>
        <p className='font-normal opacity-50 text-sm tracking-wide'>
          page: {page} of {totalPages}
        </p>
      </div>
    </div>
  );
}

export default Pagination;
