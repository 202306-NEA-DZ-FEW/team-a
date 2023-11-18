import { useTranslation } from "next-i18next";
import { FaHandHoldingWater } from "react-icons/fa";
import { LuHeartHandshake } from "react-icons/lu";
import { RiGraduationCapFill } from "react-icons/ri";

import Container from "@/components/container";

import InfoCard from "../InfoCard";

function CausesSection() {
  const { t } = useTranslation();

  return (
    <div className='lg:min-h-screen my-20 p-10 bg-opacity-20 backdrop-filter backdrop-blur-md bg-slate-300 rounded-lg shadow-2xl border border-slate-50/10'>
      <Container className='flex flex-col flex-wrap justify-center lg:min-h-screen my-20 lg:my-0'>
        <h1 className='text-3xl md:text-5xl pb-4 font-bold text-center'>
          {t("landingPage:causes:title")}
        </h1>
        <div className='flex flex-col justify-center items-start gap-4 text-center p-6 md:flex-row'>
          <InfoCard
            className='w-[300px] h-[300px] pt-4 px-4 flex flex-col flex-1 items-center gap-4 bg-white rounded-xl shadow-2xl border border-slate-50/10'
            icon={<RiGraduationCapFill className='text-6xl text-error' />}
            title={t("landingPage:causes:education:title")}
            description={t("landingPage:causes:education:description")}
          />

          <InfoCard
            className='w-[300px] h-[300px] pt-4 px-4 flex flex-col flex-1 items-center gap-4 bg-white rounded-xl shadow-2xl border border-slate-50/10'
            icon={<LuHeartHandshake className='text-6xl text-error' />}
            title={t("landingPage:causes:solidarity:title")}
            description={t("landingPage:causes:solidarity:description")}
          />
          <InfoCard
            className='w-[300px] h-[300px] pt-4 px-4 flex flex-col flex-1 items-center gap-4 bg-white rounded-xl shadow-2xl border border-slate-50/10'
            icon={<FaHandHoldingWater className='text-6xl text-error' />}
            title={t("landingPage:causes:health:title")}
            description={t("landingPage:causes:health:description")}
          />
        </div>
      </Container>
    </div>
  );
}

export default CausesSection;
