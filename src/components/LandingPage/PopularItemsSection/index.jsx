import { motion } from "framer-motion";
import Link from "next/link";
import { useTranslation } from "next-i18next";

import Container from "@/components/container";
import ItemCard from "@/components/ItemCard";

function PopularItemsSection({ items }) {
  const { t } = useTranslation();

  return (
    <Container className='lg:min-h-screen flex flex-col justify-center'>
      <motion.h1
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        viewport={{ once: true }}
        className='text-3xl md:text-5xl font-bold text-center mb-20'
      >
        {t("landingPage:items")}
      </motion.h1>
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.4 }}
        viewport={{ once: true }}
        className='flex justify-center items-center flex-wrap gap-4'
      >
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
      </motion.div>
    </Container>
  );
}
export default PopularItemsSection;
