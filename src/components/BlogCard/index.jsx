import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "next-i18next";

function BlogCard({ title, imageUrl, date, description }) {
  const { t } = useTranslation();
  return (
    <div className='card bg-white rounded-xl shadow-lg w-64'>
      <div className='relative'>
        <Image
          className='w-full relative object-cover h-44 rounded-tr-2xl rounded-tl-2xl p-1'
          src={imageUrl}
          alt='Blog Image'
          height={400}
          width={400}
        />
        <span className='absolute left-1 bottom-1 text-white bg-primary px-2 py-1'>
          {date}
        </span>
      </div>

      <div className='p-3 gap-1 flex flex-col'>
        <h2 className='text-lg font-bold mb-2'>{title}</h2>
        <p className='text-sm font-light mb-4'>{description}</p>
        <div className='flex justify-end'>
          <Link
            href='/blogs'
            className='text-secondary/[.8] hover:text-secondary font-bold'
          >
            {t("common:buttons:readMore")}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
