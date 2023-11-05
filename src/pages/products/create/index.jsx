import { withTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import getAllCategories from "@/lib/getAllCategories";
import getAllStates from "@/lib/getAllStates";

import AddItemForm from "@/components/AddItemForm";
import Container from "@/components/container";

function CreateProductPage({ t, _nextI18Next }) {
  const categories = getAllCategories(t);
  const states = getAllStates(t);
  const { initialLocale } = _nextI18Next;
  return (
    <Container className='my-20'>
      <main dir={initialLocale === "ar" ? "rtl" : "ltr"}>
        <AddItemForm
          t={t}
          initialLocale={initialLocale}
          states={states}
          categories={categories}
        />
      </main>
    </Container>
  );
}

export default withTranslation(["common", "addItem", "states", "categories"])(
  CreateProductPage
);

export async function getStaticProps({ locale }) {
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
