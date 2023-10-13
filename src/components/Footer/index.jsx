import Link from "next/link";
import { useTranslation } from "next-i18next";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { BsShareFill } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";

function Footer() {
  const { t } = useTranslation();
  return (
    <div className='bg-primary p-6 text-white fixed bottom-0 w-full'>
      <div className='grid grid-cols-1 justify-items-center md:grid-cols-4 gap-4'>
        <div className='col-span-1'>
          <Link href='/'>
            <div className='text-2xl'>Logo</div>
          </Link>
        </div>

        <div className='col-span-1 '>
          <ul className='flex flex-col items-center md:items-start'>
            <Link href='/about'>
              <li className='hover:underline'>About Us</li>
            </Link>
            <Link href='/blogs'>
              <li className='hover:underline'>Blogs</li>
            </Link>
            <Link href='/products'>
              <li className='hover:underline'>Listed Items</li>
            </Link>
          </ul>
        </div>

        <div className='col-span-1'>
          <ul className='flex flex-col items-center'>
            <li className='hover:underline'>Contact Us</li>
            <div className='flex gap-3 text-3xl mt-2 '>
              <AiFillFacebook className='opacity-70 hover:opacity-100' />
              <FaInstagram className='opacity-70 hover:opacity-100' />
              <AiFillLinkedin className='opacity-70 hover:opacity-100' />
              <BsShareFill className='opacity-70 hover:opacity-100' />
            </div>
          </ul>
        </div>

        <div className='col-span-1'>
          <ul className='flex flex-col items-center md:items-start'>
            <li className='hover:underline'>Adress</li>
            <li className='hover:underline'>Street 01,17</li>
            <li className='hover:underline'>City, Country</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
