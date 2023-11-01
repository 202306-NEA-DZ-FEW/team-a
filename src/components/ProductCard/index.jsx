import Image from "next/image";
import { MdShareLocation } from "react-icons/md";

function ProductCard({ title, location, listingType, imageUrl, category }) {
  return (
    <div className='card rounded-3xl group'>
      <figure className='relative h-64 w-52 rounded-3xl'>
        <Image
          src={imageUrl}
          alt={title}
          fill
          priority
          className='group-hover:scale-110 saturate-100 group-hover:blur-[2px] hover:saturate-50 brightness-[0.73] object-cover w-full h-full duration-500'
        />
      </figure>
      <div className='absolute bottom-[5%] flex flex-col px-3'>
        <h3 className='text-white text-md font-bold'>{title}</h3>
        <h5 className='text-sm text-white mb-1'>{category}</h5>
        <div className='flex items-center gap-1 p-0 w-full'>
          <span className='badge badge-md flex gap-1 text-white border-opacity-30 bg-black bg-opacity-25'>
            {location}
            <span>
              <MdShareLocation />
            </span>
          </span>
          <span className='badge badge-md text-white border-white border-opacity-30 bg-black bg-opacity-25'>
            {listingType}
          </span>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
