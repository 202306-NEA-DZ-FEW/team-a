import Link from "next/link";
import Container from "../container";
import Logo from "./Logo";
import { FaUserCircle } from "react-icons/fa";
function Navbar() {
  return (
    <>
      <div className='navbar bg-white'>
        <div className='navbar-start'>
          <Link href={"/"}>
            <Logo />
          </Link>
        </div>
        <div className='navbar-center hidden lg:block'>
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
        <div className='navbar-end'>
          <div className='dropdown dropdown-end'>
            <label
              tabIndex={0}
              className='btn btn-ghost btn-circle avatar hidden md:hidden lg:block'
            >
              <div className='w-10 rounded-full'>
                <img src='https://avatar.iran.liara.run/public/88' />
              </div>
            </label>
            <ul
              tabIndex={0}
              className='mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52'
            >
              <li>
                <a className='justify-between'>
                  Profile
                  <span className='badge'>New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
          {/* This is for Mobile View Navbar Menu */}
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
              className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
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
            </ul>
          </div>
        </div>
      </div>

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
