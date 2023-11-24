import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import partners from "@/lib/partners";

import Container from "@/components/container";

function OurPartnersSection() {
  const autoplaySettings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnFocus: false,
    pauseOnHover: false,
    speed: 4000,
    autoplaySpeed: 4000,
    cssEase: "linear",

    responsive: [
      {
        breakpoint: 980, // from 820 px wide and down
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 860,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };

  const { t } = useTranslation();
  return (
    <Container className='text-center mt-24 flex flex-col items-center justify-center gap-10'>
      <motion.h1
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
        className='text-3xl md:text-5xl font-bold'
      >
        {t("landingPage:partners")}
      </motion.h1>
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.4 }}
        viewport={{ once: true }}
        className='w-full justify-center items-center flex flex-col gap-2'
      >
        <Slider {...autoplaySettings} className='max-w-[95%] overflow-hidden'>
          {partners[0].map((part) => (
            <div key={part.name}>
              <Image
                src={part.image}
                alt={part.name}
                width={120}
                height={120}
                className='object-cover w-32 bg-black/5 px-1 rounded-md'
              />
            </div>
          ))}
        </Slider>
        <Slider
          {...autoplaySettings}
          rtl={true}
          className='max-w-[95%] overflow-hidden'
        >
          {partners[1].map((part2) => (
            <div key={part2.name}>
              <Image
                src={part2.image}
                alt={part2.name}
                width={120}
                height={120}
                className='object-cover w-32 bg-black/5 px-1 rounded-md'
              />
            </div>
          ))}
        </Slider>
      </motion.div>
    </Container>
  );
}

export default OurPartnersSection;
