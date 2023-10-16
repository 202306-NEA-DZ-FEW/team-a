import Link from "next/link";
import LanguageFilterMenu from "./LanguageFilterMenu";
import UserMenu from "./UserMenu";
import MobileMenu from "./MobileMenu";

function Navbar() {
  const user = { id: 1, name: "Farouk the Legend", imageUrl: "url" };
  return (
    <>
      {/* Navbar Starts Here */}
      <div className='navbar bg-white'>
        <div className='navbar-start ml-7'>
          {/* Navbar Logo */}
          <Link href={"/"}>
            <p className='font-bold text-2xl text-black'>Unify.</p>
          </Link>
        </div>
        <div className='navbar-center hidden lg:block'>
          {/* Navbar Navigation Links */}
          <ul className='menu menu-horizontal px-1 mx-1 text-black'>
            <li>
              <Link className='hover:bg-cyan-800 hover:text-white' href={"/"}>
                Home
              </Link>
            </li>
            <li>
              <Link
                className='hover:bg-cyan-800 hover:text-white'
                href={"/about"}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                className='hover:bg-cyan-800 hover:text-white'
                href={"/products"}
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                className='hover:bg-cyan-800 hover:text-white'
                href={"/blogs"}
              >
                Blogs
              </Link>
            </li>
          </ul>
        </div>
        <div className='navbar-end mr-7'>
          {/* Language Filter */}
          <LanguageFilterMenu />
          {/* Avatar/Sign-in Button */}
          <UserMenu user={user} />
          {/* This is Related to Mobile View Navbar Menu */}
          <MobileMenu user={user} />
        </div>
      </div>
      {/* Navbar Ends Here */}
    </>
  );
}

export default Navbar;
