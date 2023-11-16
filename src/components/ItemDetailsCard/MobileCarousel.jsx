import Image from "next/image";
import { PiCaretLeftLight, PiCaretRightLight } from "react-icons/pi";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      className='btn btn-circle bg-white bg-opacity-25 text-2xl z-30 absolute left-2 top-1/2'
      onClick={onClick}
    >
      <PiCaretLeftLight />
    </button>
  );
};
const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      className='btn btn-circle bg-white bg-opacity-25 text-2xl z-30 absolute right-2 top-1/2'
      onClick={onClick}
    >
      <PiCaretRightLight />
    </button>
  );
};

function MobileCarousel({ images }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    centerMode: true,
    centerPadding: "0",
    variableWidth: false,
    adaptiveHeight: true,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      {images.map((src) => (
        <figure key={src} className='w-full h-[400px] relative'>
          <Image
            src={src}
            alt='product'
            placeholder='blur'
            blurDataURL='public/images/blur.jpg'
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            fill
            className='object-cover w-full h-full'
          />
        </figure>
      ))}
    </Slider>
  );
}

export default MobileCarousel;
