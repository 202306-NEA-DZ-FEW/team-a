import { useTranslation } from "next-i18next";

import BlogCard from "@/components/BlogCard";
import Container from "@/components/container";

function BlogsSection({ blogs }) {
  const { t } = useTranslation();
  return (
    <Container className='lg:min-h-screen my-20 lg:my-0 flex flex-col justify-center'>
      <h1 className='text-3xl md:text-5xl font-bold text-center mb-12'>
        {t("landingPage:blogs")}
      </h1>
      <div className='flex justify-center items-center flex-wrap gap-8'>
        {blogs.map((blog) => (
          <BlogCard key={blog.id} {...blog} />
        ))}
        {!blogs.length && <p>Coming soon...</p>}
      </div>
    </Container>
  );
}

export default BlogsSection;
