import { Menu, Transition } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import profile from "public/images/profile.svg";
import { Fragment } from "react";
import { BiLogOut } from "react-icons/bi";

function UserMenu({ user, logOut, t }) {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <Menu as='div' className='relative hidden lg:block'>
      <Menu.Button className='btn btn-sm outline-dashed transition-all duration-500 ease-in-out hover:outline-double outline-[2px] btn-circle btn-ghost'>
        <div className='avatar'>
          <div className='w-8 rounded-full ring ring-primary hover:ring-offset-1 transition-all duration-500 ring-offset-base-100 ring-offset-2'>
            <Image
              width={100}
              height={100}
              alt='user'
              src={user.photoURL ? user.photoURL : profile}
            />
          </div>
        </div>
      </Menu.Button>
      <Transition
        as={Fragment}
        enter='transition ease-out duration-100'
        enterFrom='transform opacity-0 scale-95'
        enterTo='transform opacity-100 scale-100'
        leave='transition ease-in duration-75'
        leaveFrom='transform opacity-100 scale-100'
        leaveTo='transform opacity-0 scale-95'
      >
        <Menu.Items className='absolute right-0 translate-x-1/3 left-auto origin-center z-40 mt-6 lg:mr-4 w-screen md:w-screen lg:w-56 rounded-3xl p-2 bg-white shadow-xl ring-1 ring-black ring-opacity-5 focus:outline-none font-light tracking-wider'>
          <Menu.Item>
            {({ active }) => (
              <Link
                className={classNames(
                  active ? "bg-gray-200 text-gray-900" : "text-gray-700",
                  "block px-4 py-2 text-sm my-2 rounded-md"
                )}
                href={{
                  pathname: "/dashboard",
                  query: { user: user.uid },
                }}
              >
                {t("common:navbar:dashboard")}
              </Link>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <button
                className={classNames(
                  active ? "bg-gray-200 text-gray-900" : "text-gray-700",
                  "px-4 py-2 text-sm mb-2 rounded-md w-full flex gap-1 items-center"
                )}
                onClick={logOut}
              >
                <BiLogOut size={20} />
                {t("common:buttons:signOut")}
              </button>
            )}
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

export default UserMenu;
