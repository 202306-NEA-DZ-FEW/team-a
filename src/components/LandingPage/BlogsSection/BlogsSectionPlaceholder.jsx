function BlogsSectionPlaceholder() {
  return (
    <div className='flex max-w-6xl flex-col flex-wrap gap-8 justify-center items-center mx-auto w-full min-h-screen p-8'>
      <div className='flex justify-between w-full'>
        <div className='w-[300px] h-[35px] rounded-full bg-gray-300 animate-pulse mb-8'></div>
        <div className='w-[120px] h-[40px] rounded-full bg-gray-300 animate-pulse mb-8'></div>
      </div>
      <div className='w-full flex flex-wrap justify-center items-center gap-6 text-center'>
        <div className='flex-1 min-w-full flex-grow-0 h-80 bg-gray-300 animate-pulse rounded-2xl'></div>

        {[2, 3].map((i) => (
          <div
            key={i}
            className='flex-1 min-w-[300px] h-80 bg-gray-300 animate-pulse rounded-2xl'
          ></div>
        ))}
      </div>
    </div>
  );
}

export default BlogsSectionPlaceholder;
