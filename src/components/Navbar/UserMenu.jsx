import { Transition, Menu } from "@headlessui/react";
import { Fragment } from "react";
import { HiOutlineUserCircle } from "react-icons/hi";
import Link from "next/link";

function UserMenu({ user }) {
  //This is for classnames
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    <>
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
                      href='/dashboard'
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block rounded-lg px-4 py-2 text-sm"
                      )}
                    >
                      Dashboard
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={classNames(
                        active ? "bg-gray-100 text-slate-700" : "text-white",
                        "w-3/6 bg-error text-sm btn btn-sm mb-1 mt-2 hover:bg-error hover:text-black rounded-md"
                      )}
                    >
                      Sign Out
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
          <button className='btn bg-error btn-xs w-full h-full px-3 py-2 text-white rounded-md hover:bg-error hover:text-black hidden lg:block'>
            Sign In
          </button>
        </Link>
      )}
    </>
  );
}

export default UserMenu;
