import Image from "next/image";
import { BsFillPencilFill } from "react-icons/bs";
import { RiDeleteBin6Line } from "react-icons/ri";

import EditItemForm from "./EditItemForm";

function UserListItem({ item, onDelete, onEdit }) {
  return (
    <div className='flex w-full flex-row gap-2 transition-all duration-500 ease-in-out cursor-pointer  hover:drop-shadow-xl hover:translate-x-1 items-center justify-between rounded-2xl bg-white drop-shadow-md p-2'>
      <Image
        src={item.images[0]}
        alt={item.title}
        width={500}
        height={500}
        priority
        className='object-cover rounded-xl w-20 h-20'
      />
      <div className='flex-1'>
        <h3 className='text-left text-md md:text-2xl tracking-wider font-light'>
          {item.title}
        </h3>
      </div>
      <div>
        <button
          onClick={() => document.getElementById(item.id).showModal()}
          className='btn group btn-square btn-ghost btn-sm'
        >
          <BsFillPencilFill className='text-gray-400 text-xl transition-all duration-500 ease-in-out group-hover:text-gray-800' />
        </button>
        <button className='btn group btn-square btn-ghost btn-sm'>
          <RiDeleteBin6Line
            className='text-red-400 text-xl transition-all duration-500 ease-in-out group-hover:text-red-600'
            onClick={() => onDelete(item.id)}
          />
        </button>
      </div>
      <EditItemForm item={item} onEdit={onEdit} />
    </div>
  );
}

export default UserListItem;
