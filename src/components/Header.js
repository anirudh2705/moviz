import React from "react";
import { NavLink } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";

const Header = () => {
  const navigation = [
    {
      label: "TV shows",
      href: "Tv",
    },
    {
      label: "Movies",
      href: "Movies",
    },
  ];
  return (
    <header className="fixed top-0 w-full h-16 bg-neutral-500 bg-opacity-75">
      <div className="mx-auto container px-2 flex items-center h-full gap-10">
        <h1 className="ml-5 text-4xl bg-gradient-to-r from-orange-600 to-yellow-400  inline-block text-transparent bg-clip-text tracking-widest">
          ᴍᴏᴠɪᴢ
        </h1>

        

        <div className="ml-auto flex items-center px-4 ">
            <form className="flex items-center  text-white ">
                <input type="text" placeholder="Search" className="bg-transparent border-none outline-none" />
                <button className="text-2xl px-5">
                    <IoIosSearch />
                </button>
            </form>
            <nav className=" flex items-center gap-3  ">
          {navigation.map((nav, index) => {
            return (
              <div>
                <NavLink
                  key={nav.label}
                  to={nav.href}
                  className={({ isActive }) =>
                    `px-2 hover:text-neutral-50 ${
                      isActive && "text-neutral-50"
                    }`
                  }
                >
                  {nav.label}
                </NavLink>
              </div>
            );
          })}
        </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
