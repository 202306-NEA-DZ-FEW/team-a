import Link from "next/link";
import { useTranslation } from "next-i18next";

import Container from "@/components/container";
import ItemCard from "@/components/ItemCard";

function PopularItemsSection({ items }) {
  const { t } = useTranslation();

  return (
    <Container className='lg:min-h-screen my-20 flex flex-col justify-center'>
      <h1 className='text-3xl md:text-5xl font-bold text-center mb-14'>
        {t("landingPage:items")}
      </h1>
      <div className='flex justify-center items-center flex-wrap gap-4'>
        {items.map((item) => (
          <Link
            key={item.id}
            href={{
              pathname: `/items/${item.id}`,
            }}
          >
            <ItemCard
              key={item.id}
              title={item.title}
              listingType={t(`addItem:${item.listingType}`)}
              category={t(`categories:${item.category}`)}
              location={t(`states:${item.location}`)}
              imageUrl={item.images[0]}
            />
          </Link>
        ))}
        {!items.length && <p>{t("common:buttons:noItemsFound")}</p>}
      </div>
    </Container>
  );
}
export default PopularItemsSection;
