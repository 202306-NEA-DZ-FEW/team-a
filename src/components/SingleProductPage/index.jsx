import Image from "next/image";
import { useState } from "react";
import { IoMdContact } from "react-icons/io";
import { LuPhone } from "react-icons/lu";
import { MdAlternateEmail } from "react-icons/md";

function SingleProductCard({
  title,
  description,
  location,
  listingType,
  category,
  images,
  ceatedAt,
  username,
  email,
  phone,
}) {
  const [selectedImage, setSelectedImage] = useState(images[0]);
  /*  const handleChange = (newImageUrl) => {
    setSelectedImage(newImageUrl);
  }; */
  const onClick = (src) => {
    // find image by it's src
    const image = images.find((image) => image === src);
    // set the state to the found image
    setSelectedImage(image);
  };

  return (
    <div className='card lg:card-side shadow-2xl m-8 overflow-hidden'>
      <figure className='w-full  md:h-[500px] md:w-1/2 relative'>
        <Image
          height={300}
          width={300}
          priority
          id='productImg'
          src={selectedImage}
          className='w-full h-full object-cover'
          alt=''
        />
        <div className='absolute top-[100px] left-[10px]  flex flex-col gap-2 justify-center'>
          {images.map((src) => (
            <figure
              key={src}
              className='gap-4 overflow-hidden w-[80px] h-[80px]'
            >
              <Image
                src={src}
                alt='img'
                height={500}
                width={500}
                priority
                onClick={() => onClick(src)}
                className='hover:cursor-pointer h-full w-full my-2'
              />
            </figure>
          ))}
        </div>
      </figure>
      <div
        id='CardContent'
        className='card-body bg-black text-gray-100 md:w-1/2'
      >
        <h1 className='card-title text-3xl'>{title}</h1>
        <span className='text-gray-400 text-sm font-light'>{location}</span>
        <div className='flex gap-2 items-center'>
          <span className='badge badge-outline'>{category}</span>
          <span className='badge badge-outline'>{listingType}</span>
        </div>
        <p className='text-lg font-light mt-8'>{description}</p>
        <p></p>
        <div className='user-details flex flex-col mt-10'>
          <h2 className='text-xl font-semibold mb-4 border-b-4 border-b-primary self-start'>
            Contact Credentials
          </h2>
          <p className='flex items-center gap-2 text-gray-400 font-semibold'>
            <IoMdContact />
            Name & Surname:
            <span className='font-normal'>{username}</span>
          </p>
          <p className='flex items-center gap-2 text-gray-400 font-semibold'>
            <LuPhone />
            Phone:
            <span className='font-normal'>{phone}</span>
          </p>
          <p className='flex items-center gap-2 text-gray-400 font-semibold'>
            <MdAlternateEmail />
            Email:
            <span className='font-normal'>{email}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SingleProductCard;
