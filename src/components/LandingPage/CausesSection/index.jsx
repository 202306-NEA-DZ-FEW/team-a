import { FaHandHoldingWater } from "react-icons/fa";
import { IoHelpBuoy } from "react-icons/io5";
import { LuHeartHandshake } from "react-icons/lu";
import { useTranslation } from "next-i18next";
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
          icon={<IoHelpBuoy className='text-6xl text-error' />}
          title={t("landingPage:causes:warmth:title")}
          description={t("landingPage:causes:warmth:description")}
        />

        <InfoCard
          icon={<LuHeartHandshake className='text-6xl text-error' />}
          title={t("landingPage:causes:comfort:title")}
          description={t("landingPage:causes:comfort:description")}
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
