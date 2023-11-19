import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { IoIosArrowDropright } from "react-icons/io";

import { formatDate, truncateString } from "@/lib/helpers";

function HorizontalCard({ title, description, imageUrl, createdAt, id }) {
  const { t } = useTranslation();
  const date = formatDate(createdAt, "MMM YYYY");
  const truncatedDescription = truncateString(description, 200);
  return (
    <div className='card lg:card-side bg-base-100 shadow-xl h-full lg:h-[26rem]'>
      <figure className=' lg:w-[45%]'>
        <Image
          height={400}
          width={400}
          priority
          src={imageUrl}
          alt='Blog Image'
          className='w-full h-full'
        />
      </figure>
      <div className='card-body lg:w-[35%] p-6 lg:p-10 gap-4'>
        <h2 className='card-title text-2xl lg:text-3xl' title={title}>
          {title}
        </h2>
        <p
          className=' text-md lg:text-xl tracking-wide font-light'
          title={description}
        >
          {truncatedDescription}
        </p>
        <div className='card-actions flex gap-2 justify-between'>
          <span>{date}</span>
          <Link
            href={`/blogs/${id}`}
            className='text-secondary font-bold flex items-center gap-2'
          >
            {t("common:buttons:readMore")}

            <IoIosArrowDropright className='text-xl' />
          </Link>
        </div>
      </div>
    </div>
  );
}
export default HorizontalCard;
