import Container from "@/components/container";

function HeroSectionPlaceholder() {
  return (
    <Container>
      <div className='flex flex-col justify-between items-center lg:flex-row-reverse gap-10 lg:gap-4 lg:min-h-screen my-20 lg:my-0'>
        <div
          id='illustration'
          className='md:w-1/2 w-full h-96 rounded-xl md:px-0 bg-gray-300 animate-pulse'
        ></div>
        <div className='flex flex-col justify-start lg:w-1/2 gap-2'>
          <div className='w-96  h-6 bg-gray-300 animate-pulse rounded-full mb-8'></div>
          <div className='w-1/3 h-3 bg-gray-300 animate-pulse rounded-full'></div>
          <div className='w-1/2 h-3 bg-gray-300 animate-pulse rounded-full'></div>
          <div className='w-1/4 h-3 bg-gray-300 animate-pulse rounded-full'></div>
          <div className='w-1/5 h-3 bg-gray-300 animate-pulse rounded-full'></div>
          <div className='w-1/2 h-3 bg-gray-300 animate-pulse rounded-full'></div>
          <div className='w-1/4 h-10 bg-gray-300 animate-pulse rounded-xl mt-4'></div>
        </div>
      </div>
    </Container>
  );
}

export default HeroSectionPlaceholder;
