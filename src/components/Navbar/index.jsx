import Link from "next/link";
import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { TbLanguage } from "react-icons/tb";
import { HiOutlineUserCircle } from "react-icons/hi2";
function Navbar() {
  return (
    <>
      {/* Navbar Starts Here */}
      <div className='navbar bg-white'>
        <div className='navbar-start ml-7'>
          {/* Navbar Logo */}
          <Link href={"/"}>
            <p className='font-bold'>Unify.</p>
          </Link>
        </div>
        <div className='navbar-center hidden lg:block'>
          {/* Navbar Navigation Links */}
          <ul className='menu menu-horizontal px-1'>
            <li>
              <Link href={""}>Home</Link>
            </li>
            <li>
              <Link href={""}>About Us</Link>
            </li>
            <li>
              <Link href={""}>Products</Link>
            </li>
            <li>
              <Link href={""}>Blogs</Link>
            </li>
          </ul>
        </div>
        <div className='navbar-end mr-7'>
          {/* Avatar */}
          <div className='dropdown dropdown-end'>
            <button
              type='button'
              tabIndex={0}
              className='btn btn-ghost btn-circle avatar hidden md:hidden lg:block hover:bg-white transform scale-100 hover:scale-110 transition-transform duration-200 ease-in-out'
            >
              <HiOutlineUserCircle className='h-6 w-6' />
            </button>
            <ul
              tabIndex={0}
              className='z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52 mt-4'
            >
              <li>
                <Link href={""} className='justify-center'>
                  Profile
                </Link>
              </li>
              <li className='divide-y divide-gray-200'>
                <Link className='justify-center' href={""}>
                  Settings
                </Link>
              </li>
              <span className='divider p-0 m-0'></span>
              <li>
                <Link className='justify-center' href={""}>
                  Logout
                </Link>
              </li>
            </ul>
          </div>
          <div className='dropdown dropdown-end hidden lg:block'>
            <button
              type='button'
              tabIndex={0}
              className='btn btn-ghost btn-circle avatar hidden md:hidden lg:block hover:bg-white transform scale-100 hover:scale-110 transition-transform duration-200 ease-in-out'
            >
              <TbLanguage className='w-6 h-6' />
            </button>
            <ul
              tabIndex={0}
              className='z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52 mt-4'
            >
              <li>
                <Link className='justify-center pt-2 pb-2' href='/' locale='en'>
                  <span className='fi fi-gb rounded'></span> English
                </Link>
              </li>
              <li>
                <Link
                  className=' justify-center pt-2 pb-2'
                  href='/'
                  locale='fr'
                >
                  <span className='fi fi-fr rounded'></span> Français
                </Link>
              </li>
              <li>
                <Link className='justify-center pt-2 pb-2' href='/' locale='ar'>
                  <span className='fi fi-sa rounded'></span> العربية
                </Link>
              </li>
            </ul>
          </div>
          {/* This is Related to Mobile View Navbar Menu */}
          <div className='dropdown dropdown-end lg:hidden'>
            <label tabIndex={0} className='btn btn-ghost btn-circle'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h16M4 18h7'
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className='menu menu-md dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box'
            >
              <li>
                <Link href={""} className='flex justify-between'>
                  Dashboard{" "}
                  <span>
                    <FaUserCircle className='h-5 w-6' />
                  </span>
                </Link>
              </li>
              <hr />
              <li>
                <Link href={""}>Home</Link>
              </li>
              <li>
                <Link href={""}>About Us</Link>
              </li>
              <li>
                <Link href={""}>Products</Link>
              </li>
              <li>
                <Link href={""}>Blogs</Link>
              </li>
              <li>
                <select className='select select-sm w-full'>
                  <option disabled selected>
                    Select a language
                  </option>
                  <option>
                    {" "}
                    <Link href='/' locale='en'>
                      <span className='fi fi-gb'></span> English
                    </Link>
                  </option>
                  <option>
                    {" "}
                    <Link href='/' locale='fr'>
                      <span className='fi fi-fr'></span> Français
                    </Link>
                  </option>
                  <option>
                    {" "}
                    <Link href='/' locale='ar'>
                      <span className='fi fi-sa'></span> العربية
                    </Link>
                  </option>
                </select>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Navbar Ends Here */}

      {/* For later Use */}
      {/* <Container className='text-center'>
        <Link href='/' locale='en'>
          <span className='fi fi-gb'></span> English
        </Link>
        <Link href='/' locale='fr'>
          <span className='fi fi-fr'></span> Français
        </Link>
        <Link href='/' locale='ar'>
          <span className='fi fi-sa'></span> العربية
        </Link>
      </Container> */}
    </>
  );
}

export default Navbar;
