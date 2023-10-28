import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import BlogsCard from "@/components/BlogsCard";
import Container from "@/components/container";
import fetchFirebaseCollection from "@/lib/fetchFirebaseCollection";

function BlogsPage({ blogs }) {
  return (
    <Container className='mt-6'>
      {blogs.map((blog, index) => (
        <BlogsCard key={blog.id} blog={blog} index={index} />
      ))}
    </Container>
  );
}

export default BlogsPage;

export async function getStaticProps({ locale }) {
  const blogs = await fetchFirebaseCollection("blogs");
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      blogs,
    },
    revalidate: 30,
  };
}
