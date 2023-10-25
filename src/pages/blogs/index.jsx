import { serverSideTranslations } from "next-i18next/serverSideTranslations";

function BlogsPage() {
  return <div>BlogsPage</div>;
}

export default BlogsPage;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
