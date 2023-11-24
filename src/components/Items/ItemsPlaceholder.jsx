function ItemsPlaceholder() {
  return (
    <div className='flex flex-col lg:flex-row py-24 px-8 gap-8 items-start min-h-screen'>
      <div className='lg:w-[30%] h-[350px] w-full rounded-xl bg-gray-300 animate-pulse'></div>
      <div className='flex flex-col gap-8 flex-1 w-full'>
        <div className='rounded-xl h-[80px] w-[full] bg-gray-300 animate-pulse'></div>
        <div className='rounded-xl w-[full] flex flex-wrap p-4 gap-4'>
          <div className='w-[200px] h-[250px] rounded-xl bg-gray-300 animate-pulse'></div>
          <div className='w-[200px] h-[250px] rounded-xl bg-gray-300 animate-pulse'></div>
          <div className='w-[200px] h-[250px] rounded-xl bg-gray-300 animate-pulse'></div>
          <div className='w-[200px] h-[250px] rounded-xl bg-gray-300 animate-pulse'></div>
        </div>
      </div>
    </div>
  );
}

export default ItemsPlaceholder;
