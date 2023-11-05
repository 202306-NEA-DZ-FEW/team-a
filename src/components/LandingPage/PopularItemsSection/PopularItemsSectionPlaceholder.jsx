import Container from "@/components/container";

function PopularItemsSectionPlaceholder() {
  const fakeData = [1, 2, 3, 4];

  return (
    <Container className='flex flex-col justify-center my-10'>
      <div className='w-1/3 rounded-full h-8 self-center mb-14 bg-gray-300 animate-pulse' />
      <div className='flex justify-center items-center flex-wrap gap-4'>
        {fakeData.map((d) => (
          <div
            key={d}
            className='h-64 w-52 rounded-3xl bg-gray-300 animate-pulse'
          />
        ))}
      </div>
    </Container>
  );
}

export default PopularItemsSectionPlaceholder;
