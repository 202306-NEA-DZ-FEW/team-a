import { serverSideTranslations } from "next-i18next/serverSideTranslations";

function CreateProductPage() {
  return <div>CreateProductPage</div>;
}

export default CreateProductPage;

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
