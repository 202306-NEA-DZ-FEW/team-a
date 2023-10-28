import Image from "next/image";
import Link from "next/link";

function CategoryCard({ imageUrl, title, link, queryParams }) {
  return (
    <Link
      scroll={false}
      key={link}
      href={{
        pathname: "/products",
        query: { ...queryParams, category: link },
      }}
    >
      <div className='card card-compact border-none w-full relative'>
        <figure className='group'>
          <Image
            src={imageUrl}
            alt={title}
            className='object-cover h-28 w-60 rounded group-hover:scale-125 group-transition-all duration-700'
            width={300}
            height={300}
            priority
          />
          <h3 className='bg-black bg-opacity-75 text-sm font-light text-white text-center absolute bottom-0 left-0 right-0 p-2 rounded'>
            {title}
          </h3>
        </figure>
      </div>
    </Link>
  );
}

export default CategoryCard;
