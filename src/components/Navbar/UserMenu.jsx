import { Menu, Transition } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import { BiLogOut } from "react-icons/bi";
import { MdOutlineDashboardCustomize } from "react-icons/md";

function UserMenu({ user, logOut, t, userProfile }) {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <Menu as='div' className='relative hidden lg:block mt-1'>
      <Menu.Button className='btn btn-sm outline-dashed transition-all duration-500 ease-in-out hover:outline-double outline-[2px] btn-circle btn-ghost'>
        <div className='avatar '>
          <div className='w-8 rounded-full bg-black ring ring-primary hover:ring-offset-2 transition-all duration-500 ring-offset-transparent ring-offset-1'>
            <Image
              width={100}
              height={100}
              alt='user'
              src={userProfile}
              className=''
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
        <Menu.Items className='absolute right-0 translate-x-1/3 left-auto origin-center z-40 top-12 lg:mr-4 w-screen md:w-screen lg:w-56 rounded-xl p-2 bg-base-100 shadow-xl ring-1 ring-black ring-opacity-5 focus:outline-none font-light tracking-wider'>
          <Menu.Item>
            {({ active }) => (
              <Link
                className={classNames(
                  active ? "bg-base-200" : "text-gray-400",
                  "px-4 py-2 text-sm mb-2 rounded-md w-full flex gap-1 items-center"
                )}
                href={{
                  pathname: "/dashboard",
                  query: { user: user.uid },
                }}
              >
                <MdOutlineDashboardCustomize size={20} />
                {t("common:navbar:dashboard")}
              </Link>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <button
                className={classNames(
                  active ? "bg-base-200" : "text-gray-400",
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
