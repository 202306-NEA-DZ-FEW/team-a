import { useTranslation } from "next-i18next";
import { FaHandHoldingWater } from "react-icons/fa";
import { LuHeartHandshake } from "react-icons/lu";
import { RiGraduationCapFill } from "react-icons/ri";

import Container from "@/components/container";

import InfoCard from "../InfoCard";

function CausesSection() {
  const { t } = useTranslation();
  return (
    <Container className='flex flex-col justify-center lg:min-h-screen my-20 lg:my-0'>
      <h1 className='text-3xl md:text-5xl font-bold text-center'>
        {t("landingPage:causes:title")}
      </h1>
      <div className='flex flex-col justify-center items-start gap-4 text-center p-6 md:flex-row'>
        <InfoCard
          icon={<RiGraduationCapFill className='text-6xl text-error' />}
          title={t("landingPage:causes:education:title")}
          description={t("landingPage:causes:education:description")}
        />

        <InfoCard
          icon={<LuHeartHandshake className='text-6xl text-error' />}
          title={t("landingPage:causes:solidarity:title")}
          description={t("landingPage:causes:solidarity:description")}
        />
        <InfoCard
          icon={<FaHandHoldingWater className='text-6xl text-error' />}
          title={t("landingPage:causes:health:title")}
          description={t("landingPage:causes:health:description")}
        />
      </div>
    </Container>
  );
}

export default CausesSection;
