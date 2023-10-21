import Image from "next/image";
import { useTranslation } from "next-i18next";
import mepi from "public/images/mepi1.png";
import { BsFillPencilFill } from "react-icons/bs";
import { RiDeleteBin6Line } from "react-icons/ri";

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
      <div
        className='flex justify-center items-center flex-wrap gap-4 
    '
      >
        {items.map((item) => (
          <div
            key={item.id}
            className='flex w-full flex-row gap-2 items-center justify-between rounded-full bg-gray-200 py-1 px-2 '
          >
            <Image
              src={item.image}
              alt={item.title}
              width={60}
              height={60}
              className='object-cover rounded-full'
            />
            <div className='flex-1'>
              <h3 className='text-left text-md md:text-lg'>{item.title}</h3>
            </div>
            <div className='btn-group px-2'>
              <button className='btn btn-square btn-ghost btn-sm'>
                <BsFillPencilFill className='text-xl' />
              </button>
              <button className='btn btn-square btn-ghost btn-sm'>
                <RiDeleteBin6Line className='text-xl text-error' />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserListItems;
