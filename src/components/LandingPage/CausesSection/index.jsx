import { motion } from "framer-motion";
import { useTranslation } from "next-i18next";
import edu from "public/images/edu.jpg";
import health from "public/images/health.jpg";
import solidarity from "public/images/solidarity.jpg";
import { FaHandHoldingWater } from "react-icons/fa";
import { LuHeartHandshake } from "react-icons/lu";
import { RiGraduationCapFill } from "react-icons/ri";

import Container from "@/components/container";

import InfoCard from "../InfoCard";

function CausesSection() {
  const { t } = useTranslation();
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <Container className='flex flex-col flex-wrap gap-8 justify-center lg:min-h-screen lg:my-0'>
      <motion.h1
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
        className='text-3xl md:text-5xl gap-4 font-bold text-center'
      >
        {t("landingPage:causes:title")}
      </motion.h1>
      <motion.div
        variants={container}
        initial='hidden'
        whileInView='visible'
        className='w-full flex flex-wrap justify-center items-center gap-6 text-center'
      >
        <motion.div
          variants={item}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className='flex-1 min-w-[31%] h-96 flex-grow flex justify-center intems-center bg-opacity-20 backdrop-filter backdrop-blur-md bg-slate-300 border border-slate-500/10 rounded-xl shadow-2xl overflow-hidden'
        >
          <InfoCard
            className='w-full h-full'
            icon={<RiGraduationCapFill className='text-6xl text-white' />}
            title={t("landingPage:causes:education:title")}
            description={t("landingPage:causes:education:description")}
            bgImage={`linear-gradient(rgba(114, 173, 132, 0.64), #508c62, url(${edu.src})`}
          />
        </motion.div>
        <motion.div
          variants={item}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className='flex-1 min-w-[31%] h-96 flex-grow flex justify-center intems-center bg-opacity-20 backdrop-filter backdrop-blur-md bg-slate-300 border border-slate-500/10 rounded-xl shadow-2xl overflow-hidden'
        >
          <InfoCard
            className='w-full h-full '
            icon={<LuHeartHandshake className='text-6xl text-white' />}
            title={t("landingPage:causes:solidarity:title")}
            description={t("landingPage:causes:solidarity:description")}
            bgImage={`linear-gradient(rgba(114, 173, 132, 0.64),#508c62, url(${solidarity.src})`}
          />
        </motion.div>
        <motion.div
          variants={item}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className='flex-1 min-w-[31%] h-96 flex-grow flex justify-center intems-center bg-opacity-20 backdrop-filter backdrop-blur-md bg-slate-300 border border-slate-500/10 rounded-xl shadow-2xl overflow-hidden'
        >
          <InfoCard
            className='w-full h-full'
            icon={<FaHandHoldingWater className='text-6xl text-white' />}
            title={t("landingPage:causes:health:title")}
            description={t("landingPage:causes:health:description")}
            bgImage={`linear-gradient(rgba(114, 173, 132, 0.64),#508c62, url(${health.src})`}
          />
        </motion.div>
      </motion.div>
    </Container>
  );
}

export default CausesSection;
