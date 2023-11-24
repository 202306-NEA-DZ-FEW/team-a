import { motion } from "framer-motion";
import { useTranslation } from "next-i18next";
import edu from "public/images/edu.jpg";
import health from "public/images/health.jpg";
import solidarity from "public/images/solidarity.jpg";

import CausesCard from "../CausesCard";

function CausesSection() {
  const { t } = useTranslation();
  const causes = [
    {
      id: 1,
      title: t("landingPage:causes:education:title"),
      description: t("landingPage:causes:education:description"),
      img: edu.src,
    },
    {
      id: 2,
      title: t("landingPage:causes:solidarity:title"),
      description: t("landingPage:causes:solidarity:description"),
      img: solidarity.src,
    },
    {
      id: 3,
      title: t("landingPage:causes:health:title"),
      description: t("landingPage:causes:health:description"),
      img: health.src,
    },
  ];
  return (
    <div className='flex flex-col flex-wrap gap-8 justify-center items-center bg-base-100 w-full min-h-screen p-8'>
      <motion.h2
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
        className='text-3xl py-10 md:text-5xl gap-4 font-black text-center'
      >
        {t("landingPage:causes:title")}
      </motion.h2>
      <div className='w-full flex flex-wrap justify-center items-center gap-6 text-center'>
        {causes.map((cause) => (
          <CausesCard key={cause.id} {...cause} />
        ))}
      </div>
    </div>
  );
}

export default CausesSection;
