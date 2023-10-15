import Link from "next/link";
import { useTranslation } from "next-i18next";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { BsShareFill } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { TbLanguage } from "react-icons/tb";

function Footer() {
  const { t } = useTranslation();
  return (
    <div className='bg-neutral py-10 px-6 text-white fixed bottom-0 w-full'>
      <div className='grid grid-cols-1 justify-items-center md:grid-cols-5 gap-4'>
        <div className='col-span-1'>
          <Link href='/'>
            <div className='text-2xl text-white font-bold'>Unify.</div>
          </Link>
        </div>

        <div className='col-span-1 '>
          <ul className='flex flex-col items-center md:items-start gap-4'>
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
          <ul className='flex flex-col items-center gap-4'>
            <li className=''>Contact Us</li>
            <div className='flex gap-3 text-3xl mt-2 '>
              <Link href='https://www.facebook.com' target='_blank'>
                <AiFillFacebook className='opacity-70 hover:opacity-100' />
              </Link>
              <Link href='https://www.instagram.com' target='_blank'>
                <FaInstagram className='opacity-70 hover:opacity-100' />
              </Link>
              <Link href='https://www.linkedin.com' target='_blank'>
                <AiFillLinkedin className='opacity-70 hover:opacity-100' />
              </Link>
              <Link href='https://www.google.com' target='_blank'>
                <BsShareFill className='opacity-70 hover:opacity-100' />
              </Link>
            </div>
          </ul>
        </div>

        <div className='col-span-1'>
          <ul className='flex flex-col items-center md:items-start'>
            <li className=''>Adress</li>
            <li className=''>Street 01,17</li>
            <li className=''>City, Country</li>
          </ul>
        </div>

        <div className='col-span-1'>
          <div className='dropdown dropdown-top dropdown-end'>
            <label
              tabIndex={0}
              className='btn hover:bg-transparent  bg-neutral text-white'
            >
              <TbLanguage className='text-xl' />
            </label>
            <ul
              tabIndex={0}
              className='dropdown-content z-[1] menu text-black shadow bg-base-100 rounded-md w-32'
            >
              <li>
                <Link href='/' locale='en' className='block px-4 py-2 '>
                  <span className='fi fi-gb'></span> English
                </Link>
              </li>
              <li>
                <Link href='/' locale='fr' className='block px-4 py-2'>
                  <span className='fi fi-fr'></span> Français
                </Link>
              </li>
              <li>
                <Link href='/' locale='ar' className='block px-4 py-2 '>
                  <span className='fi fi-sa '></span> العربية
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
