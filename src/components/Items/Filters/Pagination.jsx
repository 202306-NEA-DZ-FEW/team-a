import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";

function Pagination({ page, pageSize, totalItems, queryParams, totalPages }) {
  const router = useRouter();
  const { i18n, t } = useTranslation();
  const hasPrev = pageSize * (parseInt(page) - 1) > 0;
  const hasNext = pageSize * (parseInt(page) - 1) + pageSize < totalItems;

  const handleChangePage = (type) => {
    type === "prev"
      ? router.push(
          {
            pathname: `/items`,
            query: { ...queryParams, page: page - 1 },
          },
          undefined,
          { scroll: false }
        )
      : router.push(
          {
            pathname: `/items`,
            query: { ...queryParams, page: page + 1 },
          },
          undefined,
          { scroll: false }
        );
  };

  return (
    <div
      className={`flex items-center ${
        i18n?.language === "ar" ? "flex-row-reverse" : ""
      } justify-center md:justify-between flex-wrap gap-4`}
    >
      <div className='flex gap-4'>
        <button
          className='btn btn-sm btn-secondary text-black rounded-xl bg-opacity-40 normal-case font-normal tracking-wide'
          disabled={!hasPrev}
          onClick={() => handleChangePage("prev")}
        >
          <BiLeftArrow /> {t("common:buttons:prevButton")}
        </button>
        <button
          className='btn btn-sm btn-secondary text-black rounded-xl bg-opacity-40 normal-case font-normal tracking-wide'
          disabled={!hasNext}
          onClick={() => handleChangePage("next")}
        >
          {t("common:buttons:nextButton")} <BiRightArrow />
        </button>
      </div>
      <div>
        <p className='font-normal opacity-50 text-sm tracking-wide'>
          {t("itemsPage:page")}: {page} {t("itemsPage:of")} {totalPages}
        </p>
      </div>
    </div>
  );
}

export default Pagination;
