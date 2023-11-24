import Image from "next/image";
import { useTranslation } from "next-i18next";
import { useEffect, useState } from "react";
import { IoMdContact } from "react-icons/io";
import { IoCalendarOutline } from "react-icons/io5";
import { LuPhone } from "react-icons/lu";
import { MdAlternateEmail, MdShareLocation } from "react-icons/md";

import { formatDate } from "@/lib/helpers";

import MobileCarousel from "./MobileCarousel";

function ItemDetailsCard({
  title,
  description,
  location,
  listingType,
  category,
  images,
  createdAt,
  username,
  email,
  phone,
}) {
  const { i18n, t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const date = formatDate(createdAt);
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
      case "للتبرع":
        return "text-green-500";
      case "Don":
        return "text-green-500";
      case "Exchange":
        return "text-blue-500";
      case "للتبادل":
        return "text-blue-500";
      case "Échange":
        return "text-blue-500";
      case "Request":
        return "text-red-500";
      case "للطلب":
        return "text-red-500";
      case "Demande":
        return "text-red-500";
      default:
        return "";
    }
  };

  useEffect(() => {
    setSelectedImage(images[0]);
  }, [images]);

  return (
    <div className='flex flex-col lg:h-[520px] lg:flex-row lg:shadow-2xl lg:max-w-5xl lg:mx-auto xl:px-0 lg:rounded-3xl bg-base-100'>
      <div className='lg:hidden'>
        <MobileCarousel images={images} />
      </div>
      <figure className='w-[600px] h-full relative hidden lg:block flex-1'>
        <Image
          width={500}
          height={500}
          id='productImg'
          placeholder='blur'
          blurDataURL='public/images/blur.jpg'
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
                placeholder='blur'
                blurDataURL='public/images/blur.jpg'
                onClick={() => onClick(src)}
                className={`${
                  selectedImage === src ? "ring-4" : "opacity-50"
                } hover:cursor-pointer h-full w-full rounded-xl object-cover`}
              />
            </figure>
          ))}
        </div>
      </figure>
      <div id='CardContent' className='card-body flex-1'>
        <h1 className='card-title text-3xl capitalize'>{title}</h1>
        <div className='flex gap-2 items-center'>
          <span className='flex gap-1 text-gray-400 text-sm font-light items-center'>
            <MdShareLocation className='text-xl' /> {location}
          </span>
          <span className='flex gap-1 text-gray-400 text-sm font-light items-center'>
            <IoCalendarOutline className='text-lg' />
            <span>{date}</span>
          </span>
        </div>
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
        <div
          className='user-details flex flex-col mt-10'
          dir={i18n?.language == "ar" ? "rtl" : "ltr"}
        >
          <h2 className='text-xl font-semibold mb-4 border-b-4 border-b-primary self-start'>
            {t("itemsPage:contactCredentials")}
          </h2>
          <p className='flex items-center gap-2 text-primary font-semibold'>
            <IoMdContact />
            {t("signUp:nameLabel")}
            <span className='font-normal text-gray-500'>{username}</span>
          </p>
          <p className='flex items-center gap-2 text-primary font-semibold'>
            <LuPhone />
            {t("signUp:phoneLabel")}
            <span className='font-normal text-gray-500'>{phone}</span>
          </p>
          <p className='flex items-center gap-2 text-primary font-semibold'>
            <MdAlternateEmail />
            {t("signUp:emailLabel")}
            <span className='font-normal text-gray-500'>{email}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ItemDetailsCard;
