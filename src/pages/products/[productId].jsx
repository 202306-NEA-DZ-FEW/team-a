function ProductDetails({ productId }) {
  return <div>You are looking at the product number {productId}</div>;
}

export default ProductDetails;

export async function getServerSideProps(context) {
  const { productId } = context.query;

  return {
    props: {
      productId,
    },
  };
}
