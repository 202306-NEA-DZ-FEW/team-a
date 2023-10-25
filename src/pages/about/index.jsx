import { serverSideTranslations } from "next-i18next/serverSideTranslations";

function AboutPage() {
  return <div>AboutPage</div>;
}

export default AboutPage;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
