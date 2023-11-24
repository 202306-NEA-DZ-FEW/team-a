import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import Spinner from "public/images/spinner.svg";
import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";

import useDeleteDoc from "@/lib/useDeleteDoc";

import UserListItem from "../UserListItem";

function UserListItems({ userItems }) {
  const [items, setItems] = useState(userItems);
  const { i18n, t } = useTranslation();
  const { deleteItem, loading } = useDeleteDoc();

  const handleDelete = async (itemId) => {
    await deleteItem(itemId);
    setItems((prevUserItems) =>
      prevUserItems.filter((item) => item.id !== itemId)
    );
  };
  const handleEdit = async (newItem) => {
    setItems((prevUserItems) =>
      prevUserItems.map((item) => {
        if (item.id === newItem.id) {
          return newItem;
        } else {
          return item;
        }
      })
    );
  };

  return (
    <div
      className='flex flex-col w-full gap-4 flex-1'
      dir={i18n?.language == "ar" ? "rtl" : "ltr"}
    >
      <div className='flex w-full justify-between'>
        <h2 className='text-3xl font-bold text-center'>
          {t("dashboard:myItems")}
        </h2>
        <Link
          href='/items/create'
          className='btn btn-sm btn-circle btn-secondary text-black bg-opacity-30 transition-all duration-500 ease-in-out hover:drop-shadow-md'
        >
          <AiOutlinePlus className='text-xl' />
        </Link>
      </div>
      <div className='flex justify-center items-center flex-wrap gap-4 '>
        {loading && (
          <div className='absolute z-30 w-full h-full flex items-center justify-center'>
            <Image
              src={Spinner}
              alt='loading'
              height={100}
              width={100}
              className='w-20 h-20'
              priority
            />
          </div>
        )}
        <div className='flex relative flex-col flex-1 gap-2 items-center justify-center'>
          {items.map((item) => (
            <UserListItem
              key={item.id}
              item={item}
              onDelete={handleDelete}
              onEdit={handleEdit}
            />
          ))}
        </div>
      </div>
      {!items.length && (
        <p className='text-xl flex-1 flex items-center justify-center font-light tracking-wide'>
          {t("common:noItemsFound")}
        </p>
      )}
    </div>
  );
}

export default UserListItems;
