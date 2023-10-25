import { serverSideTranslations } from "next-i18next/serverSideTranslations";

function BlogDetails({ blogId }) {
  return <div>BlogDetails | {blogId}</div>;
}

export default BlogDetails;

export async function getStaticPaths() {
  const paths = [
    {
      params: {
        blogId: "1",
      },
    },
    {
      params: {
        blogId: "2",
      },
    },
  ];

  return { paths, fallback: false };
}

export async function getStaticProps({ locale, params }) {
  const { blogId } = params;
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      blogId,
    },
  };
}
