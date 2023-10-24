import Image from "next/image";
import { useTranslation } from "next-i18next";
import Spinner from "public/images/spinner.svg";
import { useState } from "react";

import addCollection from "@/lib/addCollection";
import createItemsData from "@/lib/items";
import useDeleteDoc from "@/lib/useDeleteDoc";

import UserListItem from "../UserListItem";

function UserListItems({ userItems, userData }) {
  const itemsData = createItemsData(userData.uid);
  const [items, setItems] = useState(userItems);
  const { t } = useTranslation();
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
    <div className='flex flex-col w-full gap-4'>
      <h2 className='text-3xl font-bold text-center'>
        {t("dashboard:myItems")}{" "}
      </h2>
      <button onClick={() => addCollection(itemsData)} className='btn'>
        Generate testing data
      </button>
      <div className='flex justify-center items-center flex-wrap gap-4 '>
        {loading && (
          <div className='absolute w-full h-full flex items-center justify-center'>
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
  );
}

export default UserListItems;
