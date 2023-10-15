import Link from "next/link";
import { useState } from "react";
import { TbLanguage } from "react-icons/tb";
import { LiaSignInAltSolid } from "react-icons/lia";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import {
  HiOutlineUserCircle,
  HiOutlineMenuAlt3,
  HiOutlineX,
} from "react-icons/hi";

function Navbar() {
  //This is a variable to test whether the User is Signed-In or Signed-out
  const user = { id: 1 };
  //This is a State for Mobile Menu Icon
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // Function that toggles an X Icon when the Mobile Menu is Clicked
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <>
      {/* Navbar Starts Here */}
      <div className='navbar bg-white'>
        <div className='navbar-start ml-7'>
          {/* Navbar Logo */}
          <Link href={"/"}>
            <p className='font-bold text-2xl text-black'>Unify.</p>
          </Link>
        </div>
        <div className='navbar-center hidden lg:block'>
          {/* Navbar Navigation Links */}
          <ul className='menu menu-horizontal px-1 mx-1 text-black'>
            <li>
              <Link className='hover:bg-cyan-800 hover:text-white' href={"/"}>
                Home
              </Link>
            </li>
            <li>
              <Link
                className='hover:bg-cyan-800 hover:text-white'
                href={"/about"}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                className='hover:bg-cyan-800 hover:text-white'
                href={"/products"}
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                className='hover:bg-cyan-800 hover:text-white'
                href={"/blogs"}
              >
                Blogs
              </Link>
            </li>
          </ul>
        </div>
        <div className='navbar-end mr-7'>
          {/* Language Filter */}
          <Menu as='div' className='text-left hidden lg:block mr-1'>
            <div>
              <Menu.Button className='w-full justify-center bg-white px-3 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-50 btn-circle btn-ghost'>
                <TbLanguage className='w-6 h-6' />
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter='transition ease-out duration-100'
              enterFrom='transform opacity-0 scale-95'
              enterTo='transform opacity-100 scale-100'
              leave='transition ease-in duration-75'
              leaveFrom='transform opacity-100 scale-100'
              leaveTo='transform opacity-0 scale-95'
            >
              <Menu.Items className='absolute right-0 z-10 mt-6 lg:mr-4 w-screen md:w-screen lg:w-56 origin-top-right rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
                <div className='py-1'>
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        href='#'
                        locale='en'
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm my-2"
                        )}
                      >
                        <span className='fi fi-gb rounded mr-2'></span> English
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        href='/'
                        locale='fr'
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm mb-2"
                        )}
                      >
                        <span className='fi fi-fr rounded mr-2'></span> Français
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        href='/'
                        locale='ar'
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm mb-2"
                        )}
                      >
                        <span className='fi fi-sa rounded mr-2'></span> العربية
                      </Link>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
          {/* Avatar/Sign-in Button */}
          {user ? (
            //Code for when the User is Signed-In
            <Menu as='div' className='text-left hidden lg:block'>
              <div>
                <Menu.Button className='w-full justify-center bg-white px-3 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-50 btn-circle btn-ghost'>
                  <HiOutlineUserCircle className='w-6 h-6' />
                </Menu.Button>
              </div>

              <Transition
                as={Fragment}
                enter='transition ease-out duration-100'
                enterFrom='transform opacity-0 scale-95'
                enterTo='transform opacity-100 scale-100'
                leave='transition ease-in duration-75'
                leaveFrom='transform opacity-100 scale-100'
                leaveTo='transform opacity-0 scale-95'
              >
                <Menu.Items className='absolute right-0 z-10 mt-6 lg:mr-4 w-screen md:w-screen lg:w-56 origin-top-right rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
                  <div className='py-2 text-center mx-4'>
                    <Menu.Item className='mb-1'>
                      {({ active }) => (
                        <Link
                          href='#'
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block rounded px-4 py-2 text-sm"
                          )}
                        >
                          Dashboard
                        </Link>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          href='#'
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm rounded mb-1"
                          )}
                        >
                          Settings
                        </Link>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          href='#'
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm rounded mb-2"
                          )}
                        >
                          My Items
                        </Link>
                      )}
                    </Menu.Item>

                    <Menu.Item>
                      {({ active }) => (
                        <button
                          type='submit'
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "w-full text-sm btn btn-sm bg-cyan-800 text-white mb-1"
                          )}
                        >
                          Sign out
                        </button>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          ) : (
            //Code for When the User is Signed-out
            <Link href={"/auth/sign-in"}>
              <button className='btn btn-ghost px-1 py-2 btn-outline border-primary btn-sm hover:bg-cyan-800 hover:text-white hidden lg:block'>
                Sign-In{" "}
                <LiaSignInAltSolid className='w-4 h-4 inline-flex mb-1' />
              </button>
            </Link>
          )}

          {/* This is Related to Mobile View Navbar Menu */}
          {user ? (
            //User is Signed-in
            <Menu as='div' className='text-left block lg:hidden'>
              <div>
                <Menu.Button
                  onClick={toggleMobileMenu}
                  className='w-full justify-center bg-white px-3 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-50 btn-circle btn-ghost'
                >
                  {isMobileMenuOpen ? (
                    //Displays the X Icon when Mobile Menu is Clicked

                    <HiOutlineX className='w-6 h-6' />
                  ) : (
                    <HiOutlineMenuAlt3 className='w-6 h-6' />
                  )}
                </Menu.Button>
              </div>

              <Transition
                as={Fragment}
                enter='transition ease-out duration-100'
                enterFrom='transform opacity-0 scale-95'
                enterTo='transform opacity-100 scale-100'
                leave='transition ease-in duration-75'
                leaveFrom='transform opacity-100 scale-100'
                leaveTo='transform opacity-0 scale-95'
              >
                <Menu.Items className='absolute right-0 z-10 lg:mr-4 w-screen md:w-screen divide-y divide-black lg:w-56 origin-top-right rounded-md bg-white focus:outline-none py-2'>
                  <div className='py-1'>
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          href='/'
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 mb-2 text-center text-lg"
                          )}
                        >
                          Dashboard
                        </Link>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          href='/'
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 mb-2 text-center text-lg"
                          )}
                        >
                          Home
                        </Link>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          href='/about'
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 mb-2 text-center text-lg"
                          )}
                        >
                          About
                        </Link>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          href='/products'
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 mb-2 text-center text-lg"
                          )}
                        >
                          Products
                        </Link>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          href='/blogs'
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 mb-2 text-center text-lg"
                          )}
                        >
                          Blogs
                        </Link>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          ) : (
            //User is Signed-out
            <Menu as='div' className='text-left block lg:hidden'>
              <div>
                <Menu.Button
                  onClick={toggleMobileMenu}
                  className='w-full justify-center bg-white px-3 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-50 btn-circle btn-ghost'
                >
                  {isMobileMenuOpen ? (
                    //Displays the X Icon when Mobile Menu is Open
                    <HiOutlineX className='w-6 h-6' />
                  ) : (
                    <HiOutlineMenuAlt3 className='w-6 h-6' />
                  )}
                </Menu.Button>
              </div>

              <Transition
                as={Fragment}
                enter='transition ease-out duration-100'
                enterFrom='transform opacity-0 scale-95'
                enterTo='transform opacity-100 scale-100'
                leave='transition ease-in duration-75'
                leaveFrom='transform opacity-100 scale-100'
                leaveTo='transform opacity-0 scale-95'
              >
                <Menu.Items className='absolute right-0 z-10 lg:mr-4 w-screen md:w-screen lg:w-56 origin-top-right rounded-md bg-white focus:outline-none py-2'>
                  <div className='py-1'>
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          href='/'
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 mb-2 text-center text-lg"
                          )}
                        >
                          Home
                        </Link>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          href='/about'
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 mb-2 text-center text-lg"
                          )}
                        >
                          About
                        </Link>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          href='/products'
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 mb-2 text-center text-lg"
                          )}
                        >
                          Products
                        </Link>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          href='/blogs'
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 mb-2 text-center text-lg"
                          )}
                        >
                          Blogs
                        </Link>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          href='/'
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 mb-2 text-center text-lg"
                          )}
                        >
                          <button className='btn bg-cyan-800 text-white btn-sm w-2/4 rounded-md'>
                            Sign-In <LiaSignInAltSolid className='w-4 h-4' />
                          </button>
                        </Link>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          )}
        </div>
      </div>
      {/* Navbar Ends Here */}
    </>
  );
}

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default Navbar;
