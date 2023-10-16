import React from "react";
import { Transition, Menu } from "@headlessui/react";
import Link from "next/link";
import { Fragment } from "react";
import { HiOutlineX, HiOutlineMenuAlt3 } from "react-icons/hi";
import {} from "react-icons/hi";

function MobileMenu({ user }) {
  return (
    <>
      {user ? (
        // User is Signed-in
        <Menu as='div' className='text-left block lg:hidden'>
          <div>
            <Menu.Button className='w-full justify-center bg-white px-3 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-50 btn-circle btn-ghost'>
              {({ open }) =>
                //I used the Built-In state from Headless UI to harmonize between the two icons down below
                open ? (
                  <HiOutlineX className='w-6 h-6' />
                ) : (
                  <HiOutlineMenuAlt3 className='w-6 h-6' />
                )
              }
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
                  <Link
                    href='/dashboard'
                    className='block px-4 py-2 mb-2 text-center text-lg'
                  >
                    Dashboard
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link
                    href='/'
                    className='block px-4 py-2 mb-2 text-center text-lg'
                  >
                    Home
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link
                    href='/about'
                    className='block px-4 py-2 mb-2 text-center text-lg'
                  >
                    About
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link
                    href='/products'
                    className='block px-4 py-2 mb-2 text-center text-lg'
                  >
                    Products
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link
                    href='/blogs'
                    className='block px-4 py-2 mb-2 text-center text-lg'
                  >
                    Blogs
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <div className='flex justify-around'>
                    <Link
                      href='#'
                      locale='en'
                      className='block px-4 py-2 text-md my-2'
                    >
                      <span className='fi fi-gb text-md rounded mr-1'></span>{" "}
                      English
                    </Link>
                    <Link
                      href='#'
                      locale='fr'
                      className='block px-4 py-2 text-md my-2'
                    >
                      <span className='fi fi-fr text-md rounded mr-1'></span>{" "}
                      French
                    </Link>
                    <Link
                      href='#'
                      locale='ar'
                      className='block px-4 py-2 text-md my-2'
                    >
                      <span className='fi fi-sa rounded text-md mr-1'></span>{" "}
                      Arabic
                    </Link>
                  </div>
                </Menu.Item>
                <Menu.Item>
                  <Link
                    href='/'
                    className='block px-4 py-2 mb-2 text-center text-lg'
                  >
                    <button className='btn bg-error my-2 text-white btn-sm w-2/4 rounded-md'>
                      Sign Out
                    </button>
                  </Link>
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      ) : (
        // User is Signed-out
        <Menu as='div' className='text-left block lg:hidden'>
          <div>
            <Menu.Button className='w-full justify-center bg-white px-3 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-50 btn-circle btn-ghost'>
              {({ open }) =>
                //I used the Built-In state from Headless UI to harmonize between the two icons down below

                open ? (
                  <HiOutlineX className='w-6 h-6' />
                ) : (
                  <HiOutlineMenuAlt3 className='w-6 h-6' />
                )
              }
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
                  <Link
                    href='/'
                    className='block px-4 py-2 mb-2 text-center text-lg'
                  >
                    Home
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link
                    href='/about'
                    className='block px-4 py-2 mb-2 text-center text-lg'
                  >
                    About
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link
                    href='/products'
                    className='block px-4 py-2 mb-2 text-center text-lg'
                  >
                    Products
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link
                    href='/blogs'
                    className='block px-4 py-2 mb-2 text-center text-lg'
                  >
                    Blogs
                  </Link>
                </Menu.Item>
                <div className='flex justify-around'>
                  <Link
                    href='#'
                    locale='en'
                    className='block px-4 py-2 text-md my-2'
                  >
                    <span className='fi fi-gb text-md rounded mr-1'></span>{" "}
                    English
                  </Link>
                  <Link
                    href='#'
                    locale='en'
                    className='block px-4 py-2 text-md my-2'
                  >
                    <span className='fi fi-fr text-md rounded mr-1'></span>{" "}
                    French
                  </Link>
                  <Link
                    href='#'
                    locale='en'
                    className='block px-4 py-2 text-md my-2'
                  >
                    <span className='fi fi-sa rounded text-md mr-1'></span>{" "}
                    Arabic
                  </Link>
                </div>
                <Menu.Item>
                  <Link
                    href='/auth/sign-in'
                    className='block px-4 py-2 mb-2 text-center text-lg'
                  >
                    <button className='btn bg-error text-white btn-sm w-2/4 rounded-md'>
                      Sign In
                    </button>
                  </Link>
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      )}
    </>
  );
}

export default MobileMenu;
