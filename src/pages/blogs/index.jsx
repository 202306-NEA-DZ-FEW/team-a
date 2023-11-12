import { useTranslation } from "next-i18next";
import { withTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { fetchCollection } from "@/lib/fetchCollection";

import BlogsCard from "@/components/BlogsCard";
import Container from "@/components/container";

function BlogsPage({ blogs }) {
  const { t } = useTranslation();
  return (
    <Container className='flex flex-col gap-10 min-h-screen justify-center py-16'>
      <h1 className='text-4xl font-bold text-center'>{t("blogs:allBlogs")} </h1>
      {blogs.map((blog, index) => (
        <BlogsCard key={blog.id} blog={blog} index={index} />
      ))}
    </Container>
  );
}

export default withTranslation("blogs")(BlogsPage);

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
