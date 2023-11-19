import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { IoIosArrowDropright } from "react-icons/io";

import { formatDate } from "@/lib/helpers";

function BlogCard({ id, title, imageUrl, createdAt }) {
  const { t } = useTranslation();
  const date = formatDate(createdAt, "MMM YYYY");
  return (
    <div className='card rounded-xl bg-base-100 shadow-lg w-full lg:w-[50%]'>
      <figure className='relative h-full overflow-hidden'>
        <Image
          className='w-full object-cover rounded-t-2xl'
          src={imageUrl}
          alt='Blog Image'
          height={400}
          width={400}
          priority
        />
      </figure>

      <div className='gap-2 flex flex-col justify-center p-6'>
        <h2 className='text-2xl lg:text-3xl font-bold mb-4'>{title}</h2>
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
