import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "next-i18next";

export default function BlogsCard({ index, blog }) {
  const { i18n, t } = useTranslation();
  return (
    <>
      <div
        className={`flex flex-col gap-6 justify-center items-center bg-gray-200 p-6 px-4 ${
          index % 2 === 0 ? "lg:flex-row-reverse" : "lg:flex-row"
        } `}
        dir={i18n?.language === "ar" ? "rtl" : "ltr"}
      >
        <div className='relative'>
          <Image
            src={blog.img}
            alt={blog.title}
            width={300}
            height={100}
            className='object-cover rounded-2xl'
          />
          <span
            className={`absolute bottom-0 left-0 bg-primary text-white p-2 text-sm lg:hidden`}
          >
            {blog.date}
          </span>
        </div>
        <div className='flex flex-col gap-2 px-10 lg:w-2/4 md:w-2/4'>
          <h2 className='font-bold'>{blog.title}</h2>
          <p>
            {blog.description.slice(0, 210)}
            {blog.description.length > 210 ? " ..." : ""}
          </p>
          <Link href={`/blog/${blog.id}`}>
            <div>
              <button className='btn btn-primary'>
                {t("common:buttons:readMore")}
              </button>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
