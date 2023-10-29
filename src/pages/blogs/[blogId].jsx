import Image from "next/image";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { IoCalendarOutline } from "react-icons/io5";

import { fetchCollection } from "@/lib/fetchCollection";
import fetchFirebaseDoc from "@/lib/fetchFirebaseDoc";
import fetchUserInfo from "@/lib/fetchUserInfo";
import formatDate from "@/lib/formatDate";

import Container from "@/components/container";
import PageCover from "@/components/PageCover";

function BlogDetails({ blog, user }) {
  const date = formatDate(blog.createdAt);
  return (
    <>
      <PageCover
        title={blog.title}
        description={blog.description}
        date={date}
        imageURL={blog.imageUrl}
      />
      <Container className='flex flex-col gap-4 my-12'>
        {/* Author */}
        <div className='flex gap-4 items-center justify-start'>
          <figure className='w-10 h-10'>
            <Image
              className='w-full h-full rounded-full'
              width={100}
              height={100}
              src={user.photoURL}
              alt={user.name}
            />
          </figure>
          <span className='text-slate-600 text-sm'>
            By: <span className='link'>{user.name}</span>
          </span>
          <span className='text-slate-600 text-sm flex gap-2 items-center'>
            <IoCalendarOutline className='text-lg' />
            <span>{date}</span>
          </span>
        </div>
        {/* blog header */}
        <div className='flex flex-col gap-2 mb-4'>
          <h2 className='text-3xl font-bold '>{blog.title}</h2>
          <p className='tracking-wider leading-6 text-slate-700'>
            {blog.description}
          </p>
        </div>
        {/* blog info */}
        <div>
          {blog.content?.map((section) => (
            <div key={section.id} className='flex flex-col gap-2'>
              <h3 className='text-xl font-bold'>• {section.subTitle}</h3>
              <p className='tracking-wider leading-6 text-slate-700 mb-8'>
                {section.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
}

export default BlogDetails;

export async function getStaticPaths() {
  const blogs = await fetchCollection("blogs");
  const paths = blogs.map((blog) => ({
    params: { blogId: blog.id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params, locale }) {
  const { blogId } = params;
  const blog = await fetchFirebaseDoc("blogs", blogId);
  const user = await fetchUserInfo(blog.uid);
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      blog,
      user,
    },
    revalidate: 10,
  };
}
