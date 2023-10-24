import Image from "next/image";
import { BsFillPencilFill } from "react-icons/bs";
import { RiDeleteBin6Line } from "react-icons/ri";

function UserListItem({ item, onDelete }) {
  return (
    <div className='flex w-full flex-row gap-2 items-center justify-between rounded-full bg-gray-200 py-1 px-2 '>
      <Image
        src={item.images[0]}
        alt={item.title}
        width={500}
        height={500}
        className='object-cover rounded-full w-20 h-20'
      />
      <div className='flex-1'>
        <h3 className='text-left text-md md:text-lg'>{item.title}</h3>
      </div>
      <div className='btn-group px-2'>
        <button
          onClick={() => document.getElementById("my_modal_2").showModal()}
          className='btn btn-square btn-ghost btn-sm'
        >
          <BsFillPencilFill className='text-xl' />
        </button>
        <button className='btn btn-square btn-ghost btn-sm'>
          <RiDeleteBin6Line
            className='text-xl text-error'
            onClick={() => onDelete(item.id)}
          />
        </button>
      </div>
    </div>
  );
}

export default UserListItem;
