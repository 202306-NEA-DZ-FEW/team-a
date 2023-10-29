import Image from "next/image";
import Link from "next/link";
import { MdLocationOn } from "react-icons/md";

function ProductCard({ id, title, location, description, imageUrl }) {
  return (
    <Link href={`/products/${id}`}>
      <div className='card w-52 bg-white shadow-xl'>
        <Image
          src={imageUrl}
          alt='Shoes'
          height={400}
          width={400}
          className='h-44 p-1 object-cover rounded-tr-2xl rounded-tl-2xl'
          priority
        />
        <div className='p-3 flex flex-col gap-1'>
          <div className='flex items-center'>
            <MdLocationOn className='text-2xl text-error' />
            <span className='text-md font-light'>{location}</span>
          </div>
          <h2 className='text-lg font-bold '>{title}</h2>
          <p className='text-sm font-light'>{description}</p>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
