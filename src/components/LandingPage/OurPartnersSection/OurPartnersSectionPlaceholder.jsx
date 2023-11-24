import Container from "@/components/container";

function OurPartnersSectionPlaceholder() {
  const arrayOne = [1, 2, 3, 4, 5, 6];

  return (
    <Container className='text-center mt-24 flex flex-col items-center justify-center gap-10'>
      <div className='w-[300px] h-[35px] rounded-full bg-gray-300 animate-pulse mb-8'></div>
      <div className='flex gap-4 max-w-4xl overflow-hidden'>
        {arrayOne.map((i) => (
          <div
            key={i}
            className='w-[180px] h-[75px] rounded-md bg-gray-300 animate-pulse'
          ></div>
        ))}
      </div>
      <div className='flex gap-4 max-w-4xl overflow-hidden'>
        {arrayOne.map((i) => (
          <div
            key={i}
            className='w-[180px] h-[75px] rounded-md bg-gray-300 animate-pulse'
          ></div>
        ))}
      </div>
    </Container>
  );
}

export default OurPartnersSectionPlaceholder;
