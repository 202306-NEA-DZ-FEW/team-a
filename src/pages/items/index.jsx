import { withTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { fetchCollectionWithQuery } from "@/lib/fetchCollectionWithQuery";
import getAllCategories from "@/lib/getAllCategories";

import Carousel from "@/components/Carousel";
import Items from "@/components/Items";
import Wheel from "@/components/Wheel";

function ItemsPage({
  t,
  items,
  queryParams,
  totalItems,
  totalPages,
  page,
  pageSize,
}) {
  const categories = getAllCategories(t);
  return (
    <main>
      <div className='relative h-screen overflow-x-hidden w-full'>
        <Carousel t={t} items={categories} queryParams={queryParams} />
        <div className='absolute lg:bottom-10 lg:left-[5%] bottom-1 left-[50%] overflow-hidden z-50  flex items-center justify-center'>
          <Wheel />
        </div>
      </div>
      <Items
        t={t}
        queryParams={queryParams}
        items={items}
        page={page}
        pageSize={pageSize}
        totalItems={totalItems}
        totalPages={totalPages}
      />
    </main>
  );
}

export default withTranslation("itemsPage")(ItemsPage);

export async function getServerSideProps({ locale, query }) {
  const queryParams = query;
  const page = Number(query.page) || 1;
  const pageSize = 4;
  const { items, totalPages, totalItems } = await fetchCollectionWithQuery(
    "items",
    queryParams,
    4,
    page
  );
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "common",
        "states",
        "itemsPage",
        "categories",
        "addItem",
      ])),
      items,
      page,
      totalPages,
      totalItems,
      pageSize,
      queryParams,
    },
  };
}
