import { serverSideTranslations } from "next-i18next/serverSideTranslations";

function ProductDetails({ productId }) {
  return <div>product number | {productId}</div>;
}

export default ProductDetails;

export async function getStaticPaths() {
  const paths = [
    {
      params: {
        productId: "1",
      },
    },
    {
      params: {
        productId: "2",
      },
    },
  ];

  return { paths, fallback: false };
}

export async function getStaticProps({ params, locale }) {
  const { productId } = params;

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      productId,
    },
  };
}
