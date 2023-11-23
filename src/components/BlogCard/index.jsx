import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { IoIosArrowDropright } from "react-icons/io";

import { formatDate } from "@/lib/helpers";

function BlogCard({ id, title, imageUrl, createdAt }) {
  const { t } = useTranslation();
  const date = formatDate(createdAt, "MMM YYYY");
  return (
    <div className='card rounded-xl bg-base-100 shadow-lg h-full w-full'>
      <figure className='relative overflow-hidden h-96'>
        <Image
          className='w-full h-full object-cover rounded-t-2xl'
          src={imageUrl}
          alt='Blog Image'
          height={400}
          width={400}
          priority
        />
      </figure>
      <div className='flex p-6 flex-1 gap-4 flex-col justify-between items-'>
        <h2 className='text-2xl lg:text-3xl text-start font-bold w-full'>
          {title}
        </h2>
        <div className='flex justify-between items-center py-4'>
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
