import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "next-i18next";

import { formatDate } from "@/lib/helpers";

export default function BlogsCard({ index, blog }) {
  const { i18n, t } = useTranslation();
  const date = formatDate(blog.createdAt);
  return (
    <>
      <div
        className={`flex flex-col gap-10 justify-center items-center  ${
          index % 2 === 0 ? "lg:flex-row-reverse" : "lg:flex-row"
        } `}
        dir={i18n?.language === "ar" ? "rtl" : "ltr"}
      >
        <div className='relative lg:flex-1'>
          <figure className='relative w-80 h-60 lg:w-[100%] lg:h-80'>
            <Image
              src={blog.imageUrl}
              alt={blog.title}
              fill
              priority
              sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
              className='object-cover w-full h-full rounded-2xl'
            />
          </figure>

          <span className='absolute bottom-0 left-0 bg-primary text-white p-2 text-sm lg:hidden'>
            {date}
          </span>
        </div>
        <div className='flex flex-col lg:flex-1 gap-4'>
          <div>
            <h2 className='font-bold text-2xl'>{blog.title}</h2>
            <span className='my-1 text-sm text-gray-600 font-light hidden lg:block'>
              {date}
            </span>
          </div>

          <p>
            {blog.description.slice(0, 210)}
            {blog.description.length > 210 ? " ..." : ""}
          </p>
          <Link href={`/blogs/${blog.id}`}>
            <div>
              <button className='btn bg-black text-white btn-sm'>
                {t("common:buttons:readMore")}
              </button>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
