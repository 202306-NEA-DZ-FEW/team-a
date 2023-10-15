import Image from "next/image";
import background from "public/images/stats.svg";
import { BiStats } from "react-icons/bi";
import { ImStatsBars } from "react-icons/im";
import { MdOutlineQueryStats } from "react-icons/md";
import { TfiStatsUp } from "react-icons/tfi";

import Container from "@/components/container";

import InfoCard from "../InfoCard";

function StatisticsSection() {
  return (
    <section className='md:min-h-screen'>
      <div
        id='background'
        className='min-h-[80%] bg-primary flex flex-col items-center '
      >
        <Image src={background} alt='background' className='opacity-10' />
      </div>
      <Container id='stats'>
        <div className='flex flex-col mx-8 justify-center items-start text-center p-6 md:flex-row bg-white  rounded-3xl shadow-xl transform -translate-y-40'>
          <InfoCard
            icon={<TfiStatsUp className='text-6xl text-error' />}
            title='30k'
            description='In the course of 3 years, charities in algeria managed to provide
              up to 1200 meal per day in ramadan; an average of 30.000 meals served in one month.'
          />
          <InfoCard
            icon={<MdOutlineQueryStats className='text-6xl text-error' />}
            title='200'
            description='50 to 200 orphans per state had been equipped with essential school supplies this school year, ensuring they have the tools they need to thrive in their education.'
          />
          <InfoCard
            icon={<ImStatsBars className='text-6xl text-error' />}
            title='25k'
            description='Over 25.000 refugees had been hosted in Algeria for the last 5 years, which many needed clothing, as well as a shelter.'
          />
          <InfoCard
            icon={<BiStats className='text-6xl text-error' />}
            title='Fact'
            description='The acute malnutrition rate among children aged 0 to 5 years worldwide was 10.7%.'
          />
        </div>
      </Container>
    </section>
  );
}

export default StatisticsSection;
