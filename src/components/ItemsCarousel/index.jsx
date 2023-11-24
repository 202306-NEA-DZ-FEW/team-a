import Link from "next/link";
import { PiCaretLeftLight, PiCaretRightLight } from "react-icons/pi";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ItemCard from "../ItemCard";

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      className='btn btn-circle bg-white bg-opacity-25 text-2xl z-30 absolute lg:left-4 left-2 top-1/2'
      onClick={onClick}
    >
      <PiCaretLeftLight />
    </button>
  );
};
const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      className='btn btn-circle bg-white bg-opacity-25 text-2xl z-30 absolute lg:right-4 right-2 top-1/2'
      onClick={onClick}
    >
      <PiCaretRightLight />
    </button>
  );
};

function ItemsCarousel({ t, items }) {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    draggable: true,
    variableWidth: true,
    centerPadding: "0px",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    centerMode: true,
    adaptiveHeight: true,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          infinite: true,
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: true,
          variableWidth: true,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 920,
        settings: {
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          centerMode: true,
          variableWidth: true,
          initialSlide: 0,
        },
      },
    ],
  };
  return (
    <Slider {...settings} className='w-full whitespace-pre-wrap '>
      {items.map((item) => (
        <Link
          key={item.id}
          href={{
            pathname: `/items/${item.id}`,
          }}
          className='mx-3'
        >
          <ItemCard
            title={item.title}
            listingType={t(`addItem:${item.listingType}`)}
            category={t(`categories:${item.category}`)}
            location={t(`states:${item.location}`)}
            imageUrl={item.images[0]}
          />
        </Link>
      ))}
    </Slider>
  );
}

export default ItemsCarousel;
