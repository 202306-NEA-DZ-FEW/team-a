import { MdChevronLeft, MdChevronRight } from "react-icons/md";

import CategoryCard from "./CategoryCard";

function SliderRow({ title, categories, rowID, queryParams }) {
  const slideLeft = () => {
    const slider = document.getElementById("slider" + rowID);
    slider.scrollLeft = slider.scrollLeft - 600;
  };
  const slideRight = () => {
    const slider = document.getElementById("slider" + rowID);
    slider.scrollLeft = slider.scrollLeft + 600;
  };

  return (
    <section className='flex flex-col pt-8 gap-2 bg-black'>
      {title && (
        <h2 className='font-bold text-white text-2xl md:text-3xl text-center'>
          {title}
        </h2>
      )}
      <div className='relative flex items-center group'>
        <MdChevronLeft
          onClick={slideLeft}
          className='bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'
          size={40}
        />
        <div
          id={"slider" + rowID}
          className='w-full py-10 flex gap-8 px-8 overflow-x-scroll scroll-smooth no-scrollbar'
        >
          {categories.map((category) => (
            <CategoryCard
              key={category.dataKey}
              queryParams={queryParams}
              link={category.dataKey}
              title={category.name}
              imageUrl={category.imageURL}
            />
          ))}
        </div>
        <MdChevronRight
          onClick={slideRight}
          className='bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-20 hidden group-hover:block'
          size={40}
        />
      </div>
    </section>
  );
}

export default SliderRow;
