import Link from "next/link";
import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { TbLanguage } from "react-icons/tb";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { HiOutlineUserCircle } from "react-icons/hi";

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
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"/about"}>About Us</Link>
            </li>
            <li>
              <Link href={"/products"}>Products</Link>
            </li>
            <li>
              <Link href={"/blogs"}>Blogs</Link>
            </li>
          </ul>
        </div>
        <div className='navbar-end mr-7'>
          {/* Avatar */}
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
                  <Menu.Item>
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
                          "block px-4 py-2 text-sm"
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
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Listings
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
                          "w-full text-sm btn btn-sm bg-cyan-800 text-white"
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
          {/* Language Filter */}
          <Menu as='div' className='text-left hidden lg:block'>
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
              <Menu.Items className='absolute right-0 z-10 mt-6 lg:mr-4 w-screen md:w-screen lg:w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
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
                          "block px-4 py-2 text-sm"
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
                          "block px-4 py-2 text-sm"
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
                          "block px-4 py-2 text-sm"
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

          {/* This is Related to Mobile View Navbar Menu */}
          <Menu as='div' className='text-left block lg:hidden'>
            <div>
              <Menu.Button className='w-full justify-center bg-white px-3 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-50 btn-circle btn-ghost'>
                <HiOutlineMenuAlt3 className='w-6 h-6' />
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
              <Menu.Items className='absolute right-0 z-10 mt-4 lg:mr-4 w-screen md:w-screen lg:w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
                <div className='py-1'>
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        href='/'
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
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
                          "block px-4 py-2 text-sm"
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
                          "block px-4 py-2 text-sm"
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
                          "block px-4 py-2 text-sm"
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

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default Navbar;
