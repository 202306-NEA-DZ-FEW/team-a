import Image from "next/image";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { fetchCollection } from "@/lib/fetchCollection";
import fetchFirebaseDoc from "@/lib/fetchFirebaseDoc";
import fetchUserInfo from "@/lib/fetchUserInfo";

import Container from "@/components/container";

function ProductDetails({ product, userInfo }) {
  return (
    <Container>
      <div className='flex flex-col gap-4'>
        <h1 className='text-start font-black'>{product.title}</h1>
        <span>{product.date}</span>
        <span>{product.location}</span>
        <p>{product.description}</p>
        <div className=''>
          <h3 className=''>{product.listingType}</h3>
          <h3 className=''>{product.category}</h3>
        </div>
        <div>
          {product.images.map((image) => (
            <figure key={image}>
              <Image src={image} alt={image} height={400} width={400} />
            </figure>
          ))}
        </div>
        <div>
          <h1>{userInfo.name}</h1>
          <h1>{userInfo.location}</h1>
          <h1>{userInfo.email}</h1>
          <h1>{userInfo.phone}</h1>
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
  const userInfo = await fetchUserInfo(product.uid);
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      product,
      userInfo,
    },
    revalidate: 10,
  };
}
