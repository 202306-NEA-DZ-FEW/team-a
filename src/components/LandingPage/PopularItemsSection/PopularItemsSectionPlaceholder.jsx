function PopularItemsSectionPlaceholder() {
  return (
    <div className='flex max-w-6xl flex-col flex-wrap gap-8 justify-center items-center mx-auto w-full min-h-screen p-8'>
      <div className='w-[300px] h-[30px] rounded-full bg-gray-300 animate-pulse mb-8'></div>
      <div className='w-full flex flex-wrap justify-center items-center gap-6 text-center'>
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className='flex-1 min-w-[250px] flex-grow-0 h-80 bg-gray-300 animate-pulse rounded-2xl'
          ></div>
        ))}
      </div>
    </div>
  );
}

export default PopularItemsSectionPlaceholder;
