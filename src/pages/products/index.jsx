import { serverSideTranslations } from "next-i18next/serverSideTranslations";

function ProductsPage({ data }) {
  return <div>{data}</div>;
}

export default ProductsPage;

export async function getServerSideProps({ locale }) {
  const data = "ProductsPage";
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      data,
    },
  };
}
