import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  let Links = [
    { name: "Home", ling: "/" },
    { name: "Profile", ling: "/Profiles" },
    { name: "Galleri", ling: "/Galleries" },
    { name: "Kontak", ling: "/Conatcts" },
  ];

  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <header className="fixed backdrop-blur-sm shadow-sm left-0 top-0 w-full z-10 ease-in duration-300">
      <div className="container">
        <div className="flex justify-between items-center p-2 lg:p-2 text-warna-black">
          <Link href="/">
            <h1 className="font-bold text-warna-green text-xl ">ISTEK-AK Press</h1>
          </Link>
          <ul className="hidden sm:flex gap-10  transition-all ease-in-out duration-300">
            {Links.map((link) => (
              <li className=" text-warna-slate font-normal text-sm hover:text-warna-green">
                <Link href={link.ling}>{link.name}</Link>
              </li>
            ))}
          </ul>

          {/* /// mobile Button ///*/}
          <div onClick={handleNav} className="block sm:hidden z-10 my-auto">
            {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
          </div>

          {/* // mobile menu/// */}
          <div
            className={
              nav
                ? "sm:hidden absolute  bg-warna-white shadow-lg rounded-lg max-w[250px] w-40 right-4 top-full transition-all ease-in-out duration-300"
                : "sm:hidden absolute bg-warna-white shadow-lg rounded-lg max-w[250px] w-full right-[-100%] top-full transition-all ease-in-out duration-300"
            }
          >
            <ul>
              {Links.map((link) => (
                <li className="p-4 text-base rounded flex justify-center hover:bg-warna-green hover:text-warna-white">
                  <Link href={link.ling}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
