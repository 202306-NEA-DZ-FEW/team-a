import { motion } from "framer-motion";
import Image from "next/image";
import { withTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { fetchCollection } from "@/lib/fetchCollection";

import BlogsCard from "@/components/BlogsCard";

function BlogsPage({ blogs, t }) {
  return (
    <>
      <header className='relative w-full lg:h-[80vh] h-[60vh] bg-primary overflow-hidden'>
        <div className='absolute h-full w-full flex flex-col items-center justify-center gap-6 px-4 text-center text-white z-30'>
          <motion.p
            className='text-xl uppercase font-semibold'
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.5 }}
          >
            {t("common:latestBlogs")}
          </motion.p>
          <motion.h1
            className='text-4xl font-bold'
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.6 }}
          >
            {t("blogs:blogsAndResources")}
          </motion.h1>
          <motion.p
            className='text-xl w-full lg:w-1/2'
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.7 }}
          >
            {t("blogs:blogsHeader")}
          </motion.p>
        </div>
        <div className='absolute w-full h-full flex justify-center -bottom-[20%] z-0 ease-[cubic-bezier(.75,-0.5,0,1.75)]'>
          <Image
            src='/images/blogsillustration.svg'
            alt='Header'
            height={600}
            width={600}
            priority
            className='w-full h-full object-cover opacity-[80%] z-0'
          />
        </div>
      </header>
      <div className='flex flex-col gap-10 px-4 md:px-28 py-20'>
        {blogs.map((blog, index) => (
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            key={blog.id}
          >
            <BlogsCard blog={blog} index={index} {...blog} />
          </motion.div>
        ))}
      </div>
    </>
  );
}

export default withTranslation(["blogs"])(BlogsPage);

export async function getStaticProps({ locale }) {
  const blogs = await fetchCollection("blogs");
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "blogs"])),
      blogs,
    },
    revalidate: 30,
  };
}
