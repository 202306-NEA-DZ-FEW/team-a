function HeroSectionPlaceholder() {
  return (
    <div className='h-screen w-full items-center gap-2 p-10 flex'>
      <div className='w-[40%] flex flex-col gap-4'>
        <div className='bg-gray-300 animate-pulse w-[80%] h-[40px] rounded-full'></div>
        <div className='bg-gray-300 animate-pulse w-[60%] h-[40px] rounded-full'></div>
        <div className='bg-gray-300 animate-pulse w-[90%] h-[10px] rounded-full'></div>
        <div className='bg-gray-300 animate-pulse w-[80%] h-[10px] rounded-full'></div>
        <div className='bg-gray-300 animate-pulse w-[60%] h-[10px] rounded-full'></div>
        <div className='bg-gray-300 animate-pulse w-[150px] h-[48px] rounded-full mt-2'></div>
      </div>
      <div className='w-[60%] rounded-xl bg-gray-300 animate-pulse h-full'></div>
    </div>
  );
}

export default HeroSectionPlaceholder;
