import Link from "next/link";

export default function CarouselItem({
  t,
  name,
  dataKey,
  imageURL,
  description,
  queryParams,
}) {
  return (
    <div
      className='item w-20 h-20 rounded-2xl lg:rounded-3xl lg:w-[220px] lg:h-80 shadow-2xl absolute z-10 lg:top-[50%] top-[80%] lg:-translate-y-[22%] lg:translate-x-[0%] -translate-x-[170%] bg-blend-overlay bg-black bg-opacity-20'
      style={{ backgroundImage: `url(${imageURL})` }}
    >
      <div className='content absolute z-10 top-[50%] left-[5%] lg:max-w-md text-white -translate-y-[50%] hidden'>
        <h1 className='text-4xl font-bold my-4 name'>{name}</h1>
        <p className='text-lg font-light mb-4 des'>
          {description ? description : ""}
        </p>
        <Link
          className='btn btn-sm bg-white text-black hover:bg-slate-50'
          scroll={false}
          href={{
            pathname: "/items",
            query: { ...queryParams, category: dataKey },
          }}
        >
          {t("itemsPage:seeMore")}
        </Link>
      </div>
    </div>
  );
}
