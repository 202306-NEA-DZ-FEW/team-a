import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";

export default function BlogsCard({
  title,
  index,
  imageUrl,
  description,
  id,
  blogKey,
}) {
  const { i18n, t } = useTranslation();
  return (
    <>
      <div
        className={`card bg-base-100 gap-4 shadow-xl h-full lg:h-[26rem]  ${
          index % 2 === 0 ? "lg:flex-row-reverse" : "lg:flex-row"
        } `}
        dir={i18n?.language === "ar" ? "rtl" : "ltr"}
      >
        <figure className=' lg:w-[45%] lg:h-full h-96 rounded-xl p-4'>
          <Image
            height={400}
            width={400}
            priority
            src={imageUrl}
            alt='Blog Image'
            className='w-full h-full object-cover rounded-xl'
          />
        </figure>
        <div className='card-body lg:w-[35%] p-6 lg:p-8 gap-4'>
          <h2 className='card-title text-2xl lg:text-3xl' title={title}>
            {t(`blogs:${blogKey}:title`)}
          </h2>
          <p
            className=' text-md lg:text-xl tracking-wide font-light'
            title={description}
          >
            {t(`blogs:${blogKey}:description`)}
          </p>
          <div className='card-actions flex gap-2 justify-between'>
            <span> {t(`blogs:${blogKey}:shortDate`)}</span>
            <Link
              href={`/blogs/${id}`}
              className='text-secondary font-bold flex items-center gap-2'
            >
              {t("common:buttons:readMore")}
              {i18n.language !== "ar" ? (
                <IoIosArrowDropright className='text-xl' />
              ) : (
                <IoIosArrowDropleft className='text-xl' />
              )}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
