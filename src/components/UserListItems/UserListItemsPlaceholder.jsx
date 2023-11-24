function UserListItemsPlaceholder() {
  return (
    <div className='h-screen w-full items-center flex flex-col gap-4'>
      <div className='w-full flex justify-between mb-4'>
        <div className='w-[300px] h-[30px] rounded-full bg-gray-300 animate-pulse'></div>
        <div className='w-[30px] h-[30px] rounded-full bg-gray-300 animate-pulse'></div>
      </div>
      <div className='w-full h-[90px] rounded-xl bg-gray-300 animate-pulse'></div>
      <div className='w-full h-[90px] rounded-xl bg-gray-300 animate-pulse'></div>
      <div className='w-full h-[90px] rounded-xl bg-gray-300 animate-pulse'></div>
      <div className='w-full h-[90px] rounded-xl bg-gray-300 animate-pulse'></div>
      <div className='w-full h-[90px] rounded-xl bg-gray-300 animate-pulse'></div>
    </div>
  );
}

export default UserListItemsPlaceholder;
