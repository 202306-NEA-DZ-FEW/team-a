import Image from "next/image";
import { BsFillPencilFill } from "react-icons/bs";
import { RiDeleteBin6Line } from "react-icons/ri";

function UserListItem({ item }) {
  return (
    <div className='flex w-full flex-row gap-2 items-center justify-between rounded-full bg-gray-200 py-1 px-2 '>
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
  );
}

export default UserListItem;
