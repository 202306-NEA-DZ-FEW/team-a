import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";
import { Fragment } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { TbSitemap } from "react-icons/tb";

function ListingTypeFilter({ t, queryParams }) {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  const listingTypes = ["exchangeButton", "requestButton", "donationButton"];

  return (
    <>
      <Menu as='div' className='relative w-full flex justify-center text-left'>
        <Menu.Button className='flex items-center gap-2 w-full justify-between bg-base-200 input-sm rounded-full tracking-wider'>
          <div className='flex gap-2 items-center'>
            <TbSitemap className='w-5 h-5' />
            <span>
              {queryParams.listingType
                ? t(`addItem:${queryParams.listingType}`)
                : t("addItem:listingType")}
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
          <Menu.Items className='absolute max-h-52 overflow-y-scroll p-2 no-scrollbar bg-base-100 z-10 rounded-lg top-10 w-full ring-1 ring-base-300 ring-opacity-5 focus:outline-none drop-shadow-xl'>
            <div className='py-1'>
              {listingTypes.map((type) => (
                <Link
                  scroll={false}
                  key={type}
                  href={{
                    pathname: "/items",
                    query: { ...queryParams, listingType: type },
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
                        {t(`addItem:${type}`)}
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

export default ListingTypeFilter;
