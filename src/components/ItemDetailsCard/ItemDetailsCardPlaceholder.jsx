function ItemDetailsCardPlaceholder() {
  return (
    <div className='lg:w-[850px] flex w-[100%] mx-auto h-[400px] lg:rounded-2xl animate-pulse'>
      <div className='w-[40%] lg:block hidden h-full bg-gray-300 animate-pulse lg:rounded-2xl'></div>
      <div className='w-[60%] p-4 lg:flex lg:ml-4 hidden h-full lg:rounded-2xl flex-col gap-4'>
        <div className='w-[50%] mt-4 h-[20px] rounded-full bg-gray-300 animate-pulse'></div>
        <div className='w-[60%] mt-4 h-[15px] rounded-full bg-gray-300 animate-pulse'></div>
        <div className='w-[60%] mt-10 h-[10px] rounded-full bg-gray-300 animate-pulse'></div>
        <div className='w-[60%] mt-4 h-[10px] rounded-full bg-gray-300 animate-pulse'></div>
        <div className='w-[60%] mt-4 h-[10px] rounded-full bg-gray-300 animate-pulse'></div>
      </div>
    </div>
  );
}

export default ItemDetailsCardPlaceholder;
