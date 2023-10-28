import Image from "next/image";
import Link from "next/link";

function CategoryCard({ imageUrl, title, link, queryParams }) {
  return (
    <div
      className='card w-60 h-40 card-compact border-none relative rounded-3x'
      aria-label={title}
    >
      <Link
        scroll={false}
        key={link}
        href={{
          pathname: "/products",
          query: { ...queryParams, category: link },
        }}
      >
        <figure className='w-56 h-40 relative rounded-3xl shadow-xl'>
          <Image
            src={imageUrl}
            alt={title}
            className='object-cover hover:scale-125 transition-all duration-700'
            fill
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            priority
          />
          <h3 className='text-white text-center absolute bottom-[10%] px-2 py-1 w-[90%] text-md card-bordered rounded-xl bg-black bg-opacity-30'>
            {title}
          </h3>
        </figure>
      </Link>
    </div>
  );
}

export default CategoryCard;
