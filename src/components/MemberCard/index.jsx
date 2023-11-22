import Image from "next/image";
import Link from "next/link";

function MemberCard({ name, github, linkedin, imageUrl }) {
  return (
    <div className='card rounded-3xl group'>
      <figure className='relative h-64 w-52 rounded-3xl'>
        <Image
          src={imageUrl}
          alt={name}
          fill
          priority
          className='group-hover:scale-110 saturate-0 group-hover:saturate-100 object-cover w-full h-full duration-500'
        />
      </figure>
      <div className='absolute bottom-[5%] flex flex-col gap-1 px-2'>
        <h3 className='text-white font-bold'>{name}</h3>
        <div className='flex gap-2'>
          <Link
            href={github}
            target='_blank'
            rel='noopener noreferrer'
            className='text-white border border-white rounded-full text-sm px-2 h-6 hover:bg-black hover:bg-opacity-30  '
          >
            GitHub
          </Link>
          <Link
            href={linkedin}
            target='_blank'
            rel='noopener noreferrer'
            className='text-white border border-white rounded-full text-sm px-2 h-6 hover:bg-black hover:bg-opacity-30 '
          >
            LinkedIn
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MemberCard;
