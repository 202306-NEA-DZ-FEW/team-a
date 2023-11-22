import { MdChevronLeft, MdChevronRight } from "react-icons/md";

import CarouselItem from "./CarouselItem";

export default function Carousel({ t, items, queryParams }) {
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
            key={item.id}
            {...item}
            t={t}
            queryParams={queryParams}
          />
        ))}
      </div>
      <div className='absolute px-2 z-50 lg:translate-x-20 lg:top-[88%] top-[82%] justify-between w-full flex gap-4 lg:justify-center'>
        <button
          className='btn btn-circle bg-white text-black bg-opacity-50 hover:bg-slate-50 border-none items-center justify-center lg:hidden lg:group-hover:flex'
          onClick={prevItem}
        >
          <MdChevronLeft size={40} />
        </button>
        <button
          className='btn btn-circle bg-white text-black bg-opacity-50 hover:bg-slate-50 border-none items-center justify-center lg:hidden lg:group-hover:flex'
          onClick={nextItem}
        >
          <MdChevronRight size={40} />
        </button>
      </div>
    </div>
  );
}
