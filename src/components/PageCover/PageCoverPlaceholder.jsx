function PageCoverPlaceholder() {
  return (
    <div className='w-screen h-screen flex items-center justify-center'>
      <div className='w-[50%] flex flex-col gap-8'>
        <div className='w-[50%] h-[30px] mx-auto rounded-full bg-gray-300 animate-pulse' />
        <div className='flex flex-col gap-2 items-center'>
          <div className='w-[70%] h-[10px] rounded-full bg-gray-300 animate-pulse' />
          <div className='w-[78%] h-[10px] rounded-full bg-gray-300 animate-pulse' />
          <div className='w-[68%] h-[10px] rounded-full bg-gray-300 animate-pulse' />
          <div className='w-[72%] h-[10px] rounded-full bg-gray-300 animate-pulse' />
          <div className='w-[75%] h-[10px] rounded-full bg-gray-300 animate-pulse' />
          <div className='w-[65%] h-[10px] rounded-full bg-gray-300 animate-pulse' />
          <div className='w-[72%] h-[10px] rounded-full bg-gray-300 animate-pulse' />
          <div className='w-[68%] h-[10px] rounded-full bg-gray-300 animate-pulse' />
          <div className='w-[20%] h-[10px] rounded-full bg-gray-300 animate-pulse' />
        </div>
      </div>
    </div>
  );
}

export default PageCoverPlaceholder;
