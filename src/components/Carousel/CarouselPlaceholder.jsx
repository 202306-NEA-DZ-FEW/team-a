function CarouselPlaceholder() {
  return (
    <div className='w-full h-full flex items-center justify-center'>
      <div className='w-[95%] p-8 flex flex-col lg:flex-row justify-between h-[90%] animate-pulse mx-auto rounded-2xl'>
        <div className='lg:w-[40%] w-full mt-20'>
          <div className='w-[80%] h-[50px] bg-gray-300 animate-pulse rounded-full mt-20'></div>
          <div className='w-[100px] h-[40px] bg-gray-300 animate-pulse rounded-full mt-4'></div>
        </div>
        <div className='flex gap-4 mt-auto lg:w-[60%] w-full items-center justify-center'>
          <div className='lg:w-[50%] lg:h-[320px] w-[50px] h-[50px] bg-gray-300 animate-pulse rounded-xl mt-4'></div>
          <div className='lg:w-[50%] lg:h-[320px] w-[50px] h-[50px] bg-gray-300 animate-pulse rounded-xl mt-4'></div>
          <div className='lg:w-[50%] lg:h-[320px] w-[50px] h-[50px] bg-gray-300 animate-pulse rounded-xl mt-4'></div>
        </div>
      </div>
    </div>
  );
}

export default CarouselPlaceholder;
