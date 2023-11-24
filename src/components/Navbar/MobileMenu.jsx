import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { BiLogOut } from "react-icons/bi";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";

function MobileMenu({ user, t, logOut }) {
  const [open, setopen] = useState(false);
  const [currentPath, setCurrentPath] = useState("/");
  const router = useRouter();
  useEffect(() => {
    // Get the current path
    const currentPath = router.asPath;
    setCurrentPath(currentPath);
  }, [router]);

  const handleClick = () => {
    setopen(false);
  };
  return (
    <nav className='lg:hidden no-scrollbar navbar-end z-50 no-scrollbar'>
      <button
        onClick={() => setopen(!open)}
        className='z-50 justify-center px-3 py-2 text-sm font-semibold btn-circle btn-ghost'
      >
        {open ? (
          <HiOutlineX className={`${open ? "text-white" : ""} w-6 h-6`} />
        ) : (
          <HiOutlineMenuAlt3
            className={`${open ? "text-white" : ""} w-6 h-6`}
          />
        )}
      </button>
      <div
        className={`${
          open ? "flex" : "hidden"
        } flex-col z-40 fixed justify-center w-screen h-screen bg-neutral top-0 left-0`}
      >
        <div className='w-full flex justify-center gap-4 items-center mt-10 '>
          <Link
            onClick={handleClick}
            href={currentPath}
            locale='en'
            className='font-light p-2 transition-all duration-500 hover:-translate-y-1 text-xl text-white'
          >
            <span className='fi fi-gb rounded text-4xl'></span>
          </Link>
          <Link
            onClick={handleClick}
            href={currentPath}
            locale='fr'
            className='font-light p-2 transition-all duration-500 hover:-translate-y-1 text-xl text-white'
          >
            <span className='fi fi-fr rounded text-4xl'></span>
          </Link>
          <Link
            onClick={handleClick}
            href={currentPath}
            locale='tr'
            className='font-light p-2 transition-all duration-500 hover:-translate-y-1 text-xl text-white'
          >
            <span className='fi fi-tr rounded text-4xl'></span>
          </Link>
          <Link
            onClick={handleClick}
            href={currentPath}
            locale='ar'
            className='font-light p-2 transition-all duration-500 hover:-translate-y-1 text-xl text-white'
          >
            <span className='fi fi-dz rounded text-4xl'></span>
          </Link>
        </div>
        {user && (
          <Link
            onClick={handleClick}
            className='py-8 text-center transition-all duration-500 hover:translate-x-1 normal-case font-light text-5xl text-white tracking-wider'
            href='/'
          >
            {t("common:navbar:dashboard")}
          </Link>
        )}
        <Link
          onClick={handleClick}
          className='py-8 text-center transition-all duration-500 hover:translate-x-1 normal-case font-light text-5xl text-white tracking-wider'
          href='/'
        >
          {t("common:buttons:home")}
        </Link>
        <Link
          onClick={handleClick}
          className='py-8 text-center transition-all duration-500 hover:translate-x-1 normal-case font-light text-5xl text-white tracking-wider'
          href='/about'
        >
          {t("common:buttons:about")}
        </Link>
        <Link
          onClick={handleClick}
          className='py-8 text-center transition-all duration-500 hover:translate-x-1 normal-case font-light text-5xl text-white tracking-wider'
          href='/items'
        >
          {t("common:buttons:items")}
        </Link>
        <Link
          onClick={handleClick}
          className='py-8 text-center transition-all duration-500 hover:translate-x-1 normal-case font-light text-5xl text-white tracking-wider'
          href='/blogs'
        >
          {t("common:buttons:blogs")}
        </Link>
        {!user && (
          <Link
            href='/auth/sign-in'
            onClick={handleClick}
            className='btn mt-10 btn-active rounded-3xl normal-case font-normal tracking-wider w-[80%] self-center'
          >
            Login
          </Link>
        )}
        {user && (
          <button
            onClick={logOut}
            className='btn text-white text-xl normal-case font-light btn-ghost tracking-wider w-[80%] self-center'
          >
            <BiLogOut size={30} />
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}

export default MobileMenu;
