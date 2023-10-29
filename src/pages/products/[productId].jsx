import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import fetchFirebaseCollection from "@/lib/fetchFirebaseCollection";
import fetchFirebaseDoc from "@/lib/fetchFirebaseDoc";

import Container from "@/components/container";

function ProductDetails({ productId }) {
  return (
    <Container>
      <div>
        {productId}
        {/*  <h1>{product.title}</h1>
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
        </div> */}
      </div>
    </Container>
  );
}

export default ProductDetails;

export async function getStaticPaths() {
  const products = await fetchFirebaseCollection("items");

  const paths = products.map((product) => ({
    params: { productId: product.id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params, locale }) {
  const { productId } = params;
  const product = fetchFirebaseDoc("items", productId);

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      productId,
    },
    revalidate: 10,
  };
}
