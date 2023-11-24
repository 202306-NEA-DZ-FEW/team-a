import Image from "next/image";
import { useTranslation } from "next-i18next";
import CountUp from "react-countup";
function Map() {
  const { i18n, t } = useTranslation();
  return (
    <div className='min-h-screen flex flex-col justify-between items-center max-w-5xl mx-auto mb-10 gap-4 p-4 lg:flex-row-reverse'>
      <figure className='w-[55%]'>
        <Image
          src='/images/dz.svg'
          alt='map illustration'
          width={800}
          height={800}
          className='w-full h-full '
          priority
        />
      </figure>
      <div className='w-[45%] text-center flex flex-col gap-4'>
        <h1 className='text-4xl font-black'>{t("about:growthEstimation")}</h1>
        <div
          className={`flex ${
            i18n.language === "tr" ? "flex-col-reverse" : "flex-col"
          } gap-2`}
        >
          <p className='text-xl md:text-2xl text-accent font-bold'>
            {t("about:bytheEndOf")}
          </p>
          <p className='text-3xl md:text-4xl font-bold'>
            <CountUp duration={7} start={2000} end={t("about:year")} />
          </p>
        </div>
        <div
          className={`flex ${
            i18n.language === "tr" ? "flex-col-reverse" : "flex-col"
          } gap-2`}
        >
          <p className='text-xl md:text-2xl text-accent font-bold'>
            {t("about:helpAim")}
          </p>

          <p className='text-3xl md:text-4xl font-bold'>
            <CountUp duration={7} end={t("about:percentage")} /> %
          </p>
        </div>
        <div
          className={`flex ${
            i18n.language === "tr" ? "flex-col-reverse" : "flex-col"
          } gap-2`}
        >
          <p className='text-xl md:text-2xl text-accent font-bold'>
            {t("about:ofSociety")}
          </p>

          <p
            dir={i18n.language === "ar" ? "rtl" : "ltr"}
            className='text-3xl md:text-4xl font-bold'
          >
            <CountUp duration={7} end={t("about:stateNumber")} />{" "}
            {t("about:states")}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Map;
