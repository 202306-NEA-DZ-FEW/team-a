function MapPlaceholder() {
  return (
    <div className='h-screen flex gap-10 max-w-5xl mx-auto items-center'>
      <div className='w-[50%] flex flex-col gap-4 items-center'>
        <div className='w-[80%] h-[25px] rounded-full bg-gray-300 animate-pulse' />
        <div className='w-[30%] h-[30px] rounded-full bg-gray-300 animate-pulse' />
        <div className='w-[80%] h-[25px] rounded-full bg-gray-300 animate-pulse' />
        <div className='w-[30%] h-[30px] rounded-full bg-gray-300 animate-pulse' />
        <div className='w-[80%] h-[25px] rounded-full bg-gray-300 animate-pulse' />
        <div className='w-[30%] h-[30px] rounded-full bg-gray-300 animate-pulse' />
      </div>
      <div className='w-[40%] h-[450px] rounded-3xl bg-gray-300 animate-pulse' />
    </div>
  );
}

export default MapPlaceholder;
