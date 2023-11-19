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
      <Menu as='div' className='relative w-full flex justify-center text-left'>
        <Menu.Button className='flex items-center gap-2 w-full justify-between bg-base-200 input-sm rounded-full tracking-wider'>
          <div className='flex gap-2 items-center'>
            <HiOutlineLocationMarker className='w-5 h-5' />
            <span>
              {queryParams.location
                ? t(`states:${queryParams.location}`)
                : t("itemsPage:location")}
            </span>
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
          <Menu.Items className='absolute max-h-52 no-scrollbar p-2 overflow-y-scroll bg-base-100 z-10 rounded-lg top-10 w-full ring-1 ring-black ring-opacity-5 focus:outline-none drop-shadow-xl'>
            {states.map(({ name, dataKey }) => (
              <Link
                scroll={false}
                key={dataKey}
                href={{
                  pathname: "/items",
                  query: { ...queryParams, location: dataKey },
                }}
              >
                <Menu.Item>
                  {({ active }) => (
                    <p
                      className={classNames(
                        active ? "bg-base-200" : "text-gray-500",
                        "block px-4 py-2 tracking-wider my-2 rounded-md"
                      )}
                    >
                      {name}
                    </p>
                  )}
                </Menu.Item>
              </Link>
            ))}
          </Menu.Items>
        </Transition>
      </Menu>
    </>
  );
}

export default LocationFilter;
