import Image from "next/image";
import { useTranslation } from "next-i18next";
// import Carousel from "@/components/Carousel"
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import partner from "@/lib/partner";

import Container from "@/components/container";

function OurPartnersSection() {
  const autoplaySettings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    // speed: 2000,
    autoplaySpeed: 1500,
    // cssEase: "linear",
    adaptiveHeight: true,
    centerPadding: "0px",
    centerMode: true,
    initialSlide: 0,

    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const rtlSettings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    // cssEase: "linear",
    rtl: true,
    adaptiveHeight: true,
    centerPadding: "0px",
    centerMode: true,
    initialSlide: 0,

    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const { t } = useTranslation();
  return (
    <Container className='text-center my-20'>
      <h1 className='text-3xl font-poppins mb-20 font-bold '>
        {t("landingPage:partners")}
      </h1>
      <div className='mb-4'>
        <Slider {...autoplaySettings}>
          {partner.map((part) => (
            <div key={part.name} className='shadow-xl'>
              <Image
                src={part.image}
                alt={part.name}
                // width={130}
                // height={130}
                // priority
                // placeholder='blur'
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                // fill
                className='object-cover w-full h-full'
              />
            </div>
          ))}
        </Slider>
      </div>
      <div className='mb-4'>
        <Slider {...rtlSettings}>
          {partner.map((part) => (
            <div key={part.name} className='shadow-xl'>
              <Image
                src={part.image}
                alt={part.name}
                // width={130}
                // height={130}
                // priority
                sizes='(max-width: 768px) 80vw, (max-width: 1200px) 50vw, 33vw'
                // fill
                className='object-cover w-full h-full'
              />
            </div>
          ))}
        </Slider>
      </div>
    </Container>
  );
}

export default OurPartnersSection;
