import Image from "next/image";
import { MdShareLocation } from "react-icons/md";

import { getLocationName, truncateString } from "@/lib/helpers";

function ItemCard({ title, location, listingType, imageUrl, category }) {
  const locationName = getLocationName(location);
  const truncatedCategory = truncateString(category, 15);
  const truncateState = truncateString(locationName, 6);

  return (
    <div className='card rounded-3xl group'>
      <figure className='relative h-64 w-52 rounded-3xl'>
        <Image
          src={imageUrl}
          alt={title}
          width={200}
          height={200}
          placeholder='blur'
          blurDataURL='public/images/blur.jpg'
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          className='group-hover:scale-110 saturate-100 group-hover:blur-[2px] hover:saturate-50 brightness-[0.73] object-cover w-full h-full duration-500'
        />
      </figure>
      <div className='absolute bottom-[5%] flex flex-col px-3 w-52'>
        <h3 className='text-white text-lg font-bold capitalize'>{title}</h3>
        <span className='text-sm text-white pl-1 font-light mb-1'>
          {truncatedCategory}
        </span>
        <div className='flex items-center gap-1 p-0 w-full'>
          <span className='badge badge-md font-light flex gap-1 text-white border-opacity-30 bg-black bg-opacity-25'>
            {truncateState}
            <span>
              <MdShareLocation />
            </span>
          </span>
          <span className='badge badge-md font-light text-white border-white border-opacity-30 bg-black bg-opacity-25'>
            {listingType}
          </span>
        </div>
      </div>
    </div>
  );
}

export default ItemCard;
