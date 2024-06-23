import React, { useState } from "react";
import { FaBagShopping } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { IoMenu, IoClose } from "react-icons/io5";

export default function Navigation() {
  const [changeNavIcon, setChangeNavIcon] = useState(false);
  return (
    <div className="flex relative items-center justify-between">
      <h2 className="text-[30px] text-purple-600 font-semibold ">Scarpe</h2>

      <ul className="hidden md:flex items-center gap-10">
        <li className="cursor-pointer p-2 hover:bg-purple-300 rounded-[50px] duration-200 transitin-colors">
          Home
        </li>
        <li className="cursor-pointer p-2 hover:bg-purple-300 rounded-[50px] duration-200 transitin-colors">
          Shop
        </li>
        <li className="cursor-pointer p-2 hover:bg-purple-300 rounded-[50px] duration-200 transitin-colors">
          Categories
        </li>
        <li className="cursor-pointer p-2 hover:bg-purple-300 rounded-[50px] duration-200 transitin-colors">
          Blog
        </li>
      </ul>

      <div className="hidden md:flex items-center gap-[12px]">
        <div className=" cursor-pointer w-[50px] h-[50px] flex items-center justify-center bg-purple-100 rounded-[50px]">
          <FaBagShopping size={20} color="rgb(168 85 247)" />
        </div>
        <button className="flex cursor-pointer rounded-[50px] items-center gap-[12px] p-[12px] bg-purple-500 text-white">
          Get Started <FaArrowRight />
        </button>
      </div>
      <div
        onClick={() => setChangeNavIcon(!changeNavIcon)}
        className="flex md:hidden cursor-pointer hover:bg-purple-50 duration-200 transition-colors hover:text-purple-400 text-purple-500 items-center bg-purple-100 rounded-[50px] justify-center w-[40px] h-[40px]"
      >
        {changeNavIcon ? <IoClose size={24} /> : <IoMenu size={24} />}
      </div>
      {/* Hidden menu */}
      {changeNavIcon && (
        <div className="md:hidden top-20 rounded-lg w-[100%] sm:w-[50%] shadow-md pt-5 pb-5 right-0 bg-white absolute">
          <ul className="flex flex-col items-center gap-2 cursor-pointer">
            <li className="p-2 hover:bg-purple-100 w-[90%] text-center">
              Home
            </li>
            <li className="p-2 hover:bg-purple-100 w-[90%] text-center">
              Shop
            </li>
            <li className="p-2 hover:bg-purple-100 w-[90%] text-center">
              Categories
            </li>
            <li className="p-2 hover:bg-purple-100 w-[90%] text-center">
              Blog
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
