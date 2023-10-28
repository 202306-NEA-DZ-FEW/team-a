import Link from "next/link";

export default function CarouselItem({
  name,
  dataKey,
  imageURL,
  description,
  queryParams,
}) {
  return (
    <div
      className='item w-20 h-20 lg:w-[200px] lg:h-1/2 shadow-2xl absolute z-10 lg:top-[50%] top-[80%] lg:-translate-y-[40%] lg:translate-x-[-30%] -translate-x-[170%] bg-blend-overlay bg-black bg-opacity-20'
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
            pathname: "/products",
            query: { ...queryParams, category: dataKey },
          }}
        >
          See more
        </Link>
      </div>
    </div>
  );
}
