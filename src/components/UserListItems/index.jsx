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
    <div className='flex flex-col min-h-[400px] mb-6 gap-4'>
      <h1 className='text-3xl self-center'>{t("dashboard:myItems")} </h1>
      <div
        className='flex justify-center items-center flex-wrap gap-4 
    '
      >
        {items.map((item) => (
          <div
            key={item.id}
            className='flex w-11/12 flex-row gap-4 items-center justify-between rounded-full bg-gray-200 py-1 px-2 '
          >
            <Image
              src={item.image}
              alt={item.title}
              width={60}
              height={60}
              className='object-cover rounded-full'
            />
            <div className='flex-1'>
              <h3 className='text-left text-md text-neutral'>{item.title}</h3>
            </div>
            <div className='mx-2 flex items-center gap-2'>
              <div className='btn bg-transparent hover:-mt-2 hover:bg-transparent py-2 px-2'>
                <BsFillPencilFill className='text-xl text-neutral' />
              </div>
              <div className='btn bg-transparent hover:-mt-2 hover:bg-transparent py-2 px-2'>
                <RiDeleteBin6Line className='text-xl text-error' />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserListItems;
