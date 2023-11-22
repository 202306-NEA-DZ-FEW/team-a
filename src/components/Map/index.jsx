import Image from "next/image";

function Map() {
  return (
    <div className='min-h-screen flex flex-col justify-between items-center max-w-4xl mx-auto gap-4 p-4 lg:flex-row-reverse'>
      <figure className='w-[55%]'>
        <Image
          src='/images/dz.svg'
          alt='map illustration'
          width={800}
          height={800}
          className='w-full h-full '
          priority
        />
      </figure>

      <div className='w-[45%] text-center flex flex-col gap-2'>
        <h1 className='text-4xl font-black'>Growth Estimation</h1>
        <h1 className='text-xl md:text-2xl text-accent font-bold'>
          By the end of
        </h1>
        <h1 className='text-3xl md:text-4xl font-bold pb-4'>2030</h1>
        <h1 className='text-xl md:text-2xl text-accent font-bold'>
          We aim to help
        </h1>
        <h1 className='text-3xl md:text-4xl font-bold pb-4'>20%</h1>
        <h1 className='text-xl md:text-2xl text-accent font-bold'>
          Of this society in over
        </h1>

        <h1 className='text-3xl md:text-4xl font-bold pb-4'>53 Wilayas</h1>
      </div>
    </div>
  );
}

export default Map;
