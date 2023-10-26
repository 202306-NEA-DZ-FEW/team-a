import { withTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import getAllCategories from "@/lib/getAllCategories";
import getAllStates from "@/lib/getAllStates";

import AddItem from "@/components/AddItem";
import Container from "@/components/container";

function CreateProductPage({ t, _nextI18Next }) {
  const categories = getAllCategories(t);
  const states = getAllStates(t);
  const { initialLocale } = _nextI18Next;
  return (
    <Container className='my-10'>
      <main dir={initialLocale === "ar" ? "rtl" : "ltr"}>
        <AddItem states={states} categories={categories} t={t} />
      </main>
    </Container>
  );
}

export default withTranslation(["common", "addItem", "states", "categories"])(
  CreateProductPage
);

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "common",
        "addItem",
        "states",
        "categories",
      ])),
    },
  };
}
