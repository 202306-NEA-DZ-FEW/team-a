import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment, useEffect, useState } from "react";
import { TbLanguage } from "react-icons/tb";

function LanguageMenu({ bottom }) {
  const [currentPath, setCurrentPath] = useState("/");
  const router = useRouter();
  useEffect(() => {
    // Get the current path
    const currentPath = router.asPath;
    setCurrentPath(currentPath);
  }, [router]);

  //This is for classnames
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    <Menu
      as='div'
      className={`relative text-left ${bottom ? "block" : "hidden"} lg:block`}
    >
      <div>
        <Menu.Button className='btn btn-sm text-white outline-dashed transition-all duration-500 ease-in-out hover:outline-double outline-[2px] btn-circle btn-ghost'>
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
        <Menu.Items
          className={`absolute ${
            bottom ? "bottom-12" : "top-12"
          } z-40 right-0 translate-x-10 w-56 rounded-xl p-2 bg-base-100 shadow-xl ring-1 ring-black ring-opacity-5 focus:outline-none font-light tracking-wider`}
        >
          <Menu.Item>
            {({ active }) => (
              <Link
                scroll={false}
                href={currentPath}
                locale='en'
                className={classNames(
                  active ? "bg-base-200" : "text-gray-400",
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
                scroll={false}
                href={currentPath}
                locale='fr'
                className={classNames(
                  active ? "bg-base-200" : "text-gray-400",
                  "block px-4 py-2 text-sm my-2 rounded-md"
                )}
              >
                <span className='fi fi-fr rounded mr-2'></span> Français
              </Link>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <Link
                scroll={false}
                href={currentPath}
                locale='tr'
                className={classNames(
                  active ? "bg-base-200" : "text-gray-400",
                  "block px-4 py-2 text-sm mb-2 rounded-md"
                )}
              >
                <span className='fi fi-tr rounded mr-2'></span> Türkçe
              </Link>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <Link
                scroll={false}
                href={currentPath}
                locale='ar'
                className={classNames(
                  active ? "bg-base-200" : "text-gray-400",
                  "block px-4 py-2 text-sm mb-2 rounded-md"
                )}
              >
                <span className='fi fi-dz rounded mr-2'></span> العربية
              </Link>
            )}
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

export default LanguageMenu;
