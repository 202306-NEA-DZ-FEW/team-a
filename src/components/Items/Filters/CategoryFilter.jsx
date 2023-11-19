import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";
import { Fragment } from "react";
import { BiCategory } from "react-icons/bi";
import { IoMdArrowDropdown } from "react-icons/io";

import getAllCategories from "@/lib/getAllCategories";

function CategoryFilter({ t, queryParams }) {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  const categories = getAllCategories(t);

  return (
    <>
      <Menu as='div' className='relative w-full flex justify-center text-left'>
        <Menu.Button className='flex items-center gap-2 w-full justify-between bg-base-200 input-sm rounded-full tracking-wider'>
          <div className='flex gap-2 items-center'>
            <BiCategory className='w-5 h-5' />
            <span>
              {queryParams.category
                ? t(`categories:${queryParams.category}`)
                : t("itemsPage:all")}
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
          <Menu.Items className='absolute max-h-52 overflow-y-scroll no-scrollbar bg-base-100 z-10 rounded-lg p-2 top-10 w-full ring-1 ring-black ring-opacity-5 focus:outline-none drop-shadow-xl'>
            <div className='py-1'>
              {categories.map(({ name, dataKey }) => (
                <Link
                  scroll={false}
                  key={dataKey}
                  href={{
                    pathname: "/items",
                    query: { ...queryParams, category: dataKey },
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
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </>
  );
}

export default CategoryFilter;
