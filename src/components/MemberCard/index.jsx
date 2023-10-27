import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function MemberCard({ name, github, linkedin, imageUrl }) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className='relative h-52 w-52 rounded-md overflow-hidden hover:scale-105 hover:filter-none transition duration-300'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image src={imageUrl} alt={name} layout='fill' objectFit='cover' />
      <div
        className={`absolute inset-0 bg-primary bg-opacity-40 backdrop-blur-2xl flex flex-col justify-center items-center p-4 ${
          isHovered ? "visible" : "invisible"
        }`}
      >
        <h3 className='text-white text-center font-bold text-lg mb-2'>
          {name}
        </h3>
        <div className='flex gap-2 space-x-2'>
          <Link
            href={github}
            target='_blank'
            rel='noopener noreferrer'
            className='text-white'
          >
            GitHub
          </Link>
          <Link
            href={linkedin}
            target='_blank'
            rel='noopener noreferrer'
            className='text-white'
          >
            LinkedIn
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MemberCard;
