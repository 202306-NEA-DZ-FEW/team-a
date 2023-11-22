import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import background from "public/images/stats.svg";
import { BiStats } from "react-icons/bi";
import { ImStatsBars } from "react-icons/im";
import { MdOutlineQueryStats } from "react-icons/md";
import { TfiStatsUp } from "react-icons/tfi";

import Container from "@/components/container";

import StatisticsCard from "../StatisticsCard";

function StatisticsSection() {
  const { t } = useTranslation();
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2.5]);
  const translateY = useTransform(scrollYProgress, [0, 1], [-80, -300]);
  return (
    <motion.section className='lg:min-h-screen overflow-hidden'>
      <div
        id='background'
        className='bg-primary flex flex-col justify-center items-center pt-10'
      >
        <Image src={background} alt='background' className='opacity-70' />
      </div>
      <Container id='stats'>
        <motion.div
          style={{
            scale: scale,
            translateY: translateY,
          }}
          className='flex flex-col mx-2 md:mx-8 justify-center items-start text-center md:p-6 p-4 md:flex-row bg-base-100 rounded-3xl shadow-2xl border-slate-500/10'
        >
          <StatisticsCard
            icon={<TfiStatsUp className='text-6xl text-error' />}
            title={t("landingPage:statistics:meals:title")}
            description={t("landingPage:statistics:meals:description")}
          />
          <StatisticsCard
            icon={<MdOutlineQueryStats className='text-6xl text-error' />}
            title={t("landingPage:statistics:orphans:title")}
            description={t("landingPage:statistics:orphans:description")}
          />
          <StatisticsCard
            icon={<ImStatsBars className='text-6xl text-error' />}
            title={t("landingPage:statistics:refugees:title")}
            description={t("landingPage:statistics:refugees:description")}
          />
          <StatisticsCard
            icon={<BiStats className='text-6xl text-error' />}
            title={t("landingPage:statistics:fact:title")}
            description={t("landingPage:statistics:fact:description")}
          />
        </motion.div>
      </Container>
    </motion.section>
  );
}

export default StatisticsSection;
