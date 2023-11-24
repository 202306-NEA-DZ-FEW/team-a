import Image from "next/image";
import { withTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { IoCalendarOutline } from "react-icons/io5";

import { fetchCollection } from "@/lib/fetchCollection";
import fetchFirebaseDoc from "@/lib/fetchFirebaseDoc";
import fetchUserInfo from "@/lib/fetchUserInfo";

import Container from "@/components/container";
import PageCover from "@/components/PageCover";

function BlogDetails({ blog, user, t, locale }) {
  return (
    <>
      <PageCover
        title={t(`blogs:${blog.blogKey}:title`)}
        description={t(`blogs:${blog.blogKey}:description`)}
        date={t(`blogs:${blog.blogKey}:fullDate`)}
        imageURL={blog.imageUrl}
      />
      <Container
        dir={locale === "ar" ? "rtl" : "ltr"}
        className='flex flex-col gap-4 my-12'
      >
        {/* Author */}
        <div className='flex gap-2 items-center justify-start'>
          <div className='avatar'>
            <div className='w-8 rounded-full'>
              <Image
                className='w-full h-full rounded-full'
                width={100}
                height={100}
                src={user.photoURL}
                alt={user.name}
              />
            </div>
          </div>
          <span className='text-slate-600 text-sm'>
            By: <span className='link'>{user.name}</span>
          </span>
          <span className='text-slate-600 text-sm flex gap-2 items-center'>
            <IoCalendarOutline className='text-lg' />
            <span>{t(`blogs:${blog.blogKey}:fullDate`)}</span>
          </span>
        </div>
        {/* blog header */}
        <div className='flex flex-col gap-2 mb-4'>
          <h2 className='text-3xl font-bold '>
            {t(`blogs:${blog.blogKey}:title`)}
          </h2>
          <p className='tracking-wider leading-6 text-slate-500'>
            {t(`blogs:${blog.blogKey}:description`)}
          </p>
        </div>
        {/* blog info */}
        <div>
          {blog.content?.map((section) => (
            <div key={section.id} className='flex flex-col gap-2'>
              <h3 className='text-xl font-bold'>
                • {t(`blogs:${blog.blogKey}:content:${section.id}:subTitle`)}
              </h3>
              <p className='tracking-wider leading-6 text-slate-500 mb-8'>
                {t(`blogs:${blog.blogKey}:content:${section.id}:description`)}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
}

export default withTranslation(["blogs"])(BlogDetails);

export async function getStaticPaths({ locales }) {
  const blogs = await fetchCollection("blogs");
  const paths = [];

  blogs.forEach((blog) => {
    locales.forEach((locale) => {
      paths.push({
        params: { blogId: blog.id.toString() },
        locale: locale,
      });
    });
  });

  return { paths, fallback: false };
}

export async function getStaticProps({ params, locale }) {
  const { blogId } = params;
  const blog = await fetchFirebaseDoc("blogs", blogId);
  const user = await fetchUserInfo(blog.uid);
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "blogs"])),
      blog,
      user,
      locale,
    },
    revalidate: 10,
  };
}
