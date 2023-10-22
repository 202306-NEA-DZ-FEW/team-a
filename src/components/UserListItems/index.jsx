import { useTranslation } from "next-i18next";
import mepi from "public/images/mepi1.png";

import UserListItem from "../UserListItem";

function UserListItems() {
  const { t } = useTranslation();
  const items = [
    { id: 1, title: "Produdddddddddd1", image: mepi },
    { id: 2, title: "Product 2", image: mepi },
    { id: 3, title: "Product 3", image: mepi },
    { id: 4, title: "Product 4", image: mepi },
  ];
  return (
    <div className='flex flex-col w-full gap-4'>
      <h2 className='text-3xl font-bold text-center'>
        {t("dashboard:myItems")}{" "}
      </h2>
      <div className='flex justify-center items-center flex-wrap gap-4 '>
        {items.map((item) => (
          <UserListItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default UserListItems;
