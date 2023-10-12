function ProductsPage({ data }) {
  return <div>{data}</div>;
}

export default ProductsPage;

export async function getServerSideProps() {
  const data = "ProductsPage";
  return {
    props: {
      data,
    },
  };
}
