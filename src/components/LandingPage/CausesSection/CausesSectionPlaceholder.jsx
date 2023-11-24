function CausesSectionPlaceholder() {
  return (
    <div className='flex flex-col flex-wrap gap-8 justify-center items-center bg-base-100 w-full min-h-screen p-8'>
      <div className='w-[300px] h-[30px] rounded-full bg-gray-300 animate-pulse mb-8'></div>
      <div className='w-full flex flex-wrap justify-center items-center gap-6 text-center'>
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className='flex-1 min-w-[300px] h-96 flex-grow bg-gray-300 animate-pulse rounded-2xl'
          ></div>
        ))}
      </div>
    </div>
  );
}

export default CausesSectionPlaceholder;
