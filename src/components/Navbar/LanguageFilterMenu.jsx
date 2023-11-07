import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";
import { Fragment } from "react";
import { TbLanguage } from "react-icons/tb";

function LanguageFilterMenu({ currentPath }) {
  //This is for classnames
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    <Menu as='div' className='text-left hidden lg:block'>
      <div>
        <Menu.Button className='btn btn-sm outline-dashed transition-all duration-500 ease-in-out hover:outline-double outline-[2px] btn-circle btn-ghost'>
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
        <Menu.Items className='absolute right-0 z-40 mt-6 lg:mr-4 w-screen md:w-screen lg:w-56 rounded-3xl p-2 bg-white shadow-xl ring-1 ring-black ring-opacity-5 focus:outline-none font-light tracking-wider'>
          <Menu.Item>
            {({ active }) => (
              <Link
                href={currentPath}
                locale='en'
                className={classNames(
                  active ? "bg-gray-200 text-gray-900" : "text-gray-700",
                  "block px-4 py-2 text-sm my-2 rounded-md"
                )}
              >
                <span className='fi fi-gb rounded mr-2'></span> English
              </Link>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <Link
                href={currentPath}
                locale='fr'
                className={classNames(
                  active ? "bg-gray-200 text-gray-900" : "text-gray-700",
                  "block px-4 py-2 text-sm mb-2 rounded-md"
                )}
              >
                <span className='fi fi-fr rounded mr-2'></span> Français
              </Link>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <Link
                href={currentPath}
                locale='ar'
                className={classNames(
                  active ? "bg-gray-200 text-gray-900" : "text-gray-700",
                  "block px-4 py-2 text-sm mb-2 rounded-md"
                )}
              >
                <span className='fi fi-sa rounded mr-2'></span> العربية
              </Link>
            )}
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

export default LanguageFilterMenu;
