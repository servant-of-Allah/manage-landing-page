import React, { useState } from "react";

import { logo, hamburger, close } from "../constants/index";
import { navLinks } from "../constants/data";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-8 justify-between items-center navbar">
      <img src={logo} className="z-40" alt="logo" />

      <ul className="list-none sm:flex md:gap-8 gap-6 hidden items-center">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-rubik font-normal cursor-pointer text-[16px] 
                       hover:text-primary`}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className="md:block hidden">
        <button
          type="button"
          className="bg-primary hover:bg-opacity-[0.7] font-semiBold text-hover px-6 py-3 rounded-full shadow-md shadow-red-400"
        >
          Get Started
        </button>
      </div>

      <div className="sm:hidden flex items-center">
        <img
          src={toggle ? close : hamburger}
          alt="menu"
          className="w-[28px] h-[28px] object-contain cursor-pointer z-40"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } bg-white absolute inset-x-6 top-[120px] z-50 p-4 justify-center rounded-md shadow`}
        >
          <ul className="list-none sm:hidden flex flex-col gap-7 items-center p-6">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`text-secondary hover:text-primary font-rubik font-semiBold cursor-pointer text-[16px]`}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {toggle ? (
        <div className="absolute inset-0 z-30 bg-gray-500 bg-opacity-[0.28]"></div>
      ) : null}
    </nav>
  );
};

export default Navbar;
