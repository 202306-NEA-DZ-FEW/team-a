import Image from "next/image";
import background from "public/images/stats.svg";
import { BiStats } from "react-icons/bi";
import { GiBallPyramid } from "react-icons/gi";
import { ImStatsBars } from "react-icons/im";

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
            icon={<GiBallPyramid className='text-6xl text-error' />}
            title='30k'
            description='In the course of 3 years, charities in algeria managed to provide
              up to 1200 meal per day in ramadan.'
          />
          <InfoCard
            icon={<GiBallPyramid className='text-6xl text-error' />}
            title='Comfort'
            description='we seek helping people in need to find affordable furnitures &
              appliances because everyone deserves to have a home, not just a
              house.'
          />
          <InfoCard
            icon={<ImStatsBars className='text-6xl text-error' />}
            title='Health'
            description=" Let's share believes that every human being deserves a warm
              meal whenever it's difficult."
          />
          <InfoCard
            icon={<BiStats className='text-6xl text-error' />}
            title='Fact'
            description='The acute malnutrition rate among children aged 0 to 5
              years worldwide was 10.7%.'
          />
        </div>
      </Container>
    </section>
  );
}

export default StatisticsSection;
