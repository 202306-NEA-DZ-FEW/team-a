import { motion } from "framer-motion";
import Link from "next/link";
import { useTranslation } from "next-i18next";

import BlogCard from "@/components/BlogCard";
import HorizontalCard from "@/components/BlogCard/HorizontalCard";
import Container from "@/components/container";

function BlogsSection({ blogs }) {
  const { t } = useTranslation();
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <Container className='lg:min-h-screen my-20 lg:my-0 flex flex-col justify-center'>
      <div></div>
      <motion.div
        className='flex flex-col lg:flex-row items-center justify-between mb-12 lg:mb-16 gap-y-8'
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
      >
        <h2 className='text-3xl md:text-5xl font-bold'>Our Latest Blogs</h2>
        <Link
          className='btn btn-secondary rounded-full btn-md w-[45%] lg:w-[15%] text-current bg-opacity-50'
          href='/blogs'
        >
          Read More
        </Link>
      </motion.div>

      <motion.div
        className='grid grid-cols-3 gap-6 lg:gap-8 '
        variants={container}
        initial='hidden'
        whileInView='visible'
      >
        <motion.div
          className='col-span-3'
          variants={item}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        >
          {blogs.length && <HorizontalCard {...blogs[0]} />}
        </motion.div>
        <motion.div
          className='col-span-3 flex flex-col lg:flex-row gap-x-8'
          variants={item}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        >
          {blogs.slice(1, 3).map((blog) => (
            <BlogCard key={blog.id} {...blog} />
          ))}
          {!blogs.length && <p>{t("common:buttons:noItemsfound")}</p>}
        </motion.div>
      </motion.div>
    </Container>
  );
}

export default BlogsSection;
