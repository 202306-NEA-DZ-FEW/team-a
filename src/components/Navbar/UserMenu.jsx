import Image from "next/image";
import Link from "next/link";
import profile from "public/images/profile.svg";

function UserMenu({ user, logOut, t }) {
  return (
    <div id='menu' className='dropdown dropdown-end flex cursor-pointer'>
      <div tabIndex={0} className='avatar'>
        <div className='w-8 rounded-full ring ring-primary hover:ring-offset-1 transition-all duration-500 ring-offset-base-100 ring-offset-2'>
          <Image
            width={100}
            height={100}
            alt='user'
            src={user.photoURL ? user.photoURL : profile}
          />
        </div>
      </div>
      <div
        tabIndex={0}
        className='mt-12 z-[1] p-2 shadow-xl menu menu-sm dropdown-content bg-white rounded-box w-52'
      >
        <Link
          className='btn btn-sm btn-ghost normal-case font-light w-full'
          href={{
            pathname: "/dashboard",
            query: { user: user.uid },
          }}
        >
          {t("common:navbar:dashboard")}
        </Link>
        <button
          className='btn btn-sm btn-ghost normal-case font-light w-full'
          onClick={logOut}
        >
          {t("common:buttons:signOut")}
        </button>
      </div>
    </div>
  );
}

export default UserMenu;
