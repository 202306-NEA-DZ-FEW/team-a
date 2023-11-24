function UserProfilePlaceholder() {
  return (
    <div className='flex flex-col w-full md:flex-row gap-8 justify-center md:items-start items-center'>
      <section className='flex flex-col gap-8 md:gap-1 items-center justify-between w-full md:flex-row animate-pulse'>
        <div className='md:w-[120px] w-full self-start flex md:flex-col flex-row gap-2'>
          <div className='w-[100px] self-start h-[100px] rounded-full bg-gray-300 animate-pulse'></div>
          <div>
            <div className='w-[100px] my-2 self-start h-[10px] rounded-full bg-gray-300 animate-pulse'></div>
            <div className='w-[80px] self-start h-[10px] rounded-full bg-gray-300 animate-pulse'></div>
          </div>
        </div>
        <div className='w-[80%] h-[110px] rounded-xl bg-gray-300 animate-pulse'></div>
      </section>
    </div>
  );
}

export default UserProfilePlaceholder;
