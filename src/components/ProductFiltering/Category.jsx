import Image from "next/image";

function CategoryCard({ imageUrl, title }) {
  return (
    <main>
      <div className='card card-compact border-none w-full relative'>
        <figure style={{ height: "100px", width: "200px" }} className='group'>
          <Image
            src={imageUrl}
            alt={title}
            layout='fill'
            objectFit='cover'
            className='rounded'
          />
          <h2 className='opacity-0 group-hover:opacity-70 bg-black bg-opacity-75 text-white text-center absolute bottom-0 left-0 right-0 p-2 rounded'>
            {title}
          </h2>
        </figure>
      </div>
    </main>
  );
}

export default CategoryCard;
