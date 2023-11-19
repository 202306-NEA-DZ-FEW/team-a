import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { IoIosArrowDropright } from "react-icons/io";

import { formatDate, truncateString } from "@/lib/helpers";

function BlogCard({ id, title, imageUrl, createdAt, description }) {
  const { t } = useTranslation();
  const date = formatDate(createdAt, "MMM YYYY");
  const truncatedDescription = truncateString(description, 95);
  const truncatedTitle = truncateString(title, 23);
  return (
    <div className='card rounded-xl shadow-lg w-full lg:w-[50%]'>
      <figure className='relative h-[60%]'>
        <Image
          className='w-full object-cover rounded-t-xl'
          src={imageUrl}
          alt='Blog Image'
          height={400}
          width={400}
          priority
        />
      </figure>

      <div className='gap-2 flex flex-col p-6'>
        <h2 className='text-3xl lg:text-4xl font-bold mb-2'>{title}</h2>
        <p className='text-md lg:text-lg font-light mb-4' title={description}>
          {truncatedDescription}
        </p>
        <div className='flex justify-between pb-4'>
          <span>{date} </span>
          <Link
            href={`/blogs/${id}`}
            className='text-secondary hover:text-secondary font-bold flex items-center gap-2'
          >
            {t("common:buttons:readMore")}
            <IoIosArrowDropright className='text-xl' />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
