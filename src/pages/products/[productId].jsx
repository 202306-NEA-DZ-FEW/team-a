import Image from "next/image";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { fetchCollection } from "@/lib/fetchCollection";
import fetchFirebaseDoc from "@/lib/fetchFirebaseDoc";

import Container from "@/components/container";

function ProductDetails({ product }) {
  return (
    <Container>
      <div>
        <h1>{product.title}</h1>
        <span>{product.date}</span>
        <span>{product.location}</span>
        <p>{product.description}</p>
        <span>{product.listingType}</span>
        <span>{product.category}</span>
        <div>
          {product.images.map((image) => (
            <figure key={image}>
              <Image src={image} alt={image} height={400} width={400} />
            </figure>
          ))}
        </div>
      </div>
    </Container>
  );
}

export default ProductDetails;

export async function getStaticPaths() {
  const products = await fetchCollection("items");

  const paths = products.map((product) => ({
    params: { productId: product.id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params, locale }) {
  const { productId } = params;
  const product = await fetchFirebaseDoc("items", productId);

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      product,
    },
    revalidate: 10,
  };
}
