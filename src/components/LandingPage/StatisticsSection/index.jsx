import Image from "next/image";
import background from "public/images/stats.svg";
import { BiStats } from "react-icons/bi";
import { ImStatsBars } from "react-icons/im";
import { MdOutlineQueryStats } from "react-icons/md";
import { TfiStatsUp } from "react-icons/tfi";
import { useTranslation } from "next-i18next";

import Container from "@/components/container";

import InfoCard from "../InfoCard";

function StatisticsSection() {
  const { t } = useTranslation();
  return (
    <section className='lg:min-h-screen my-20 lg:my-0'>
      <div id='background' className='bg-primary flex flex-col items-center '>
        <Image src={background} alt='background' className='opacity-10' />
      </div>
      <Container id='stats'>
        <div className='flex flex-col mx-4 md:mx-8 justify-center items-start text-center md:p-6 p-4 md:flex-row bg-white  rounded-3xl shadow-xl transform md:-translate-y-40 -translate-y-24'>
          <InfoCard
            icon={<TfiStatsUp className='text-6xl text-error' />}
            title={t("landingPage:statistics:meals:title")}
            description={t("landingPage:statistics:meals:description")}
          />
          <InfoCard
            icon={<MdOutlineQueryStats className='text-6xl text-error' />}
            title={t("landingPage:statistics:orphans:title")}
            description={t("landingPage:statistics:orphans:description")}
          />
          <InfoCard
            icon={<ImStatsBars className='text-6xl text-error' />}
            title={t("landingPage:statistics:refugees:title")}
            description={t("landingPage:statistics:refugees:description")}
          />
          <InfoCard
            icon={<BiStats className='text-6xl text-error' />}
            title={t("landingPage:statistics:fact:title")}
            description={t("landingPage:statistics:fact:description")}
          />
        </div>
      </Container>
    </section>
  );
}

export default StatisticsSection;
