function AddItemFormPlaceholder() {
  return (
    <div className='md:max-w-lg flex flex-col items-center gap-4 mx-auto'>
      <div className='w-[80%] h-[30px] rounded-full bg-gray-300 animate-pulse mb-6' />
      <div className='w-[100%] h-[50px] rounded-full bg-gray-300 animate-pulse' />
      <div className='w-[100%] h-[50px] rounded-full bg-gray-300 animate-pulse' />
      <div className='w-[100%] h-[50px] rounded-full bg-gray-300 animate-pulse' />
      <div className='w-[100%] h-[120px] rounded-md bg-gray-300 animate-pulse' />

      <div className='w-full flex flex-col md:flex-row gap-4'>
        <div className='w-[100%] h-[40px] rounded-md bg-gray-300 animate-pulse' />
        <div className='w-[100%] h-[40px] rounded-md bg-gray-300 animate-pulse' />
        <div className='w-[100%] h-[40px] rounded-md bg-gray-300 animate-pulse' />
      </div>
      <div className='w-full flex flex-col md:flex-row gap-4'>
        <div className='w-[100%] h-[50px] rounded-md bg-gray-300 animate-pulse' />
        <div className='w-[100%] h-[50px] rounded-md bg-gray-300 animate-pulse' />
      </div>
    </div>
  );
}

export default AddItemFormPlaceholder;
