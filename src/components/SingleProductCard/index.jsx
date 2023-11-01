import Image from "next/image";
import { useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { IoMdContact } from "react-icons/io";
import { LuPhone } from "react-icons/lu";
import { MdAlternateEmail } from "react-icons/md";

import MobileCarousel from "./MobileCarousel";

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
  const getListingTypeColor = (listingType) => {
    switch (listingType) {
      case "Donate":
        return "text-green-500";
      case "Exchange":
        return "text-blue-500";
      case "Request":
        return "text-red-500";

      default:
        return "";
    }
  };
  return (
    <div className='flex flex-col lg:flex-row lg:shadow-2xl lg:max-w-5xl lg:mx-auto xl:px-0 lg:rounded-3xl bg-white'>
      <div className='lg:hidden'>
        <MobileCarousel images={images} />
      </div>
      <figure className='w-full h-[520px] relative hidden lg:block flex-1'>
        <Image
          width={500}
          height={500}
          priority
          id='productImg'
          src={selectedImage}
          className='w-full h-full object-cover lg:rounded-tl-3xl lg:lg:rounded-bl-3xl'
          alt=''
        />

        <div className='w-full absolute bottom-[5%] px-4 h-fit flex flex-row gap-4 items-end justify-center'>
          {images.map((src) => (
            <figure key={src} className='gap-4 w-16 h-16'>
              <Image
                src={src}
                alt='img'
                height={100}
                width={100}
                priority
                onClick={() => onClick(src)}
                className={`${
                  selectedImage === src ? "ring-4" : "opacity-50"
                } hover:cursor-pointer h-full w-full rounded-xl object-cover`}
              />
            </figure>
          ))}
        </div>
      </figure>
      <div id='CardContent' className='card-body text-gray-950 flex-1'>
        <h1 className='card-title text-3xl'>{title}</h1>
        <span className='flex gap-1 text-gray-400 text-sm font-light'>
          <CiLocationOn className='text-xl' /> {location}
        </span>
        <div className='flex gap-2 items-center'>
          <span className='badge badge-outline text-primary/80 '>
            {category}
          </span>
          <span
            className={`badge badge-outline ${getListingTypeColor(
              listingType
            )}`}
          >
            {listingType}
          </span>
        </div>
        <p className='text-lg font-light mt-8'>{description}</p>
        <p></p>
        <div className='user-details flex flex-col mt-10'>
          <h2 className='text-xl font-semibold mb-4 border-b-4 border-b-primary self-start'>
            Contact Credentials
          </h2>
          <p className='flex items-center gap-2 text-primary font-semibold'>
            <IoMdContact />
            Name & Surname:
            <span className='font-normal text-gray-950'>{username}</span>
          </p>
          <p className='flex items-center gap-2 text-primary font-semibold'>
            <LuPhone />
            Phone:
            <span className='font-normal text-gray-950'>{phone}</span>
          </p>
          <p className='flex items-center gap-2 text-primary font-semibold'>
            <MdAlternateEmail />
            Email:
            <span className='font-normal text-gray-950'>{email}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SingleProductCard;
