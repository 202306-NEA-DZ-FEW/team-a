import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function NotFoundPage() {
  return <>404</>;
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
