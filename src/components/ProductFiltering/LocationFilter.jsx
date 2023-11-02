import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";
import { Fragment } from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { IoMdArrowDropdown } from "react-icons/io";

import getAllStates from "@/lib/getAllStates";

function LocationFilter({ t, queryParams }) {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  //This is to test the LocationFilter
  const states = getAllStates(t);

  return (
    <>
      <Menu
        as='div'
        className='relative w-full md:w-52 flex justify-center text-left'
      >
        <Menu.Button className='flex items-center gap-2 w-full justify-between bg-white px-3 py-2 text-sm font-semibold btn-sm rounded-xl text-gray-900 hover:bg-gray-50 btn-primary'>
          <div className='flex gap-2 items-center'>
            <HiOutlineLocationMarker className='w-5 h-5' />
            <span>{t("productsPage:location")}</span>
          </div>
          <IoMdArrowDropdown />
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
          <Menu.Items className='absolute max-h-52 overflow-y-scroll bg-white z-10 rounded-lg top-10 w-full md:w-52'>
            <div className='py-1'>
              {states.map(({ name, dataKey }) => (
                <Link
                  scroll={false}
                  key={dataKey}
                  href={{
                    pathname: "/products",
                    query: { ...queryParams, location: dataKey },
                  }}
                >
                  <Menu.Item>
                    {({ active }) => (
                      <p
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm my-2"
                        )}
                      >
                        {name}
                      </p>
                    )}
                  </Menu.Item>
                </Link>
              ))}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </>
  );
}

export default LocationFilter;
