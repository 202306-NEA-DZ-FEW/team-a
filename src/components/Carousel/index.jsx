import { MdChevronLeft, MdChevronRight } from "react-icons/md";

import CarouselItem from "./CarouselItem";

export default function Carousel({ items, queryParams }) {
  const nextItem = () => {
    let lists = document.querySelectorAll(".item");
    document.getElementById("slide").appendChild(lists[0]);
  };

  const prevItem = () => {
    let lists = document.querySelectorAll(".item");
    document.getElementById("slide").prepend(lists[lists.length - 1]);
  };

  return (
    <div className='group'>
      <div id='slide' className='max-w-fit'>
        {items.map((item) => (
          <CarouselItem
            key={item.dataKey}
            {...item}
            queryParams={queryParams}
          />
        ))}
      </div>
      <div className='absolute px-8 z-50 lg:bottom-12 bottom-[10%] justify-between w-full flex gap-4 lg:justify-center'>
        <button
          className='btn btn-circle bg-white hover:bg-slate-50 border-none items-center justify-center lg:hidden lg:group-hover:flex'
          onClick={prevItem}
        >
          <MdChevronLeft size={40} />
        </button>
        <button
          className='btn btn-circle bg-white hover:bg-slate-50 border-none items-center justify-center lg:hidden lg:group-hover:flex'
          onClick={nextItem}
        >
          <MdChevronRight size={40} />
        </button>
      </div>
    </div>
  );
}
