import moment from "moment/moment";
import Image from "next/image";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import addCollection from "@/lib/addCollection";
import { blogs } from "@/lib/blogs";
import fetchFirebaseCollection from "@/lib/fetchFirebaseCollection";
import fetchFirebaseDoc from "@/lib/fetchFirebaseDoc";

import Container from "@/components/container";
import PageCover from "@/components/PageCover";

function BlogDetails({ blog }) {
  return (
    <>
      {/* <button onClick={()=>addCollection(blogs,"blogs")}> generate blogs</button> */}
      <PageCover
        title={blog?.title}
        description={blog?.description}
        date='29/10/2023'
        imageURL={blog?.imageUrl}
      />
      <Container>
        {/* <h1 className="text-3xl font-bold ">{blog?.title}</h1>
        <p>{blog?.description}</p>
        <div className='flex flex-col justify-center items-center gap-8 p-20'>
          <p className='mb-6'>
           {blog?.content}
          </p>
        </div> */}
      </Container>
    </>
  );
}

export default BlogDetails;

export async function getStaticPaths() {
  const blogs = await fetchFirebaseCollection("blogs");
  const paths = blogs.map((blog) => ({
    params: { blogId: blog.id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params, locale }) {
  const { blogId } = params;
  const blog = await fetchFirebaseDoc("blogs", blogId);
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      blog,
    },
    revalidate: 10,
  };
}
