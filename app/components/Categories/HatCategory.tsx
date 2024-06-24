import React from "react";
import { FaArrowRight } from "react-icons/fa6";
export default function HatCategory() {
  return (
    <div className=" w-[100%] sm:w-[80%] md:w-[50%] xl:w-[45%] sm:rounded-[20px] bg-purple-100">
      <div className="flex flex-col">
        <div className="flex items-center justify-center">
          <div className="flex flex-col items-center  gap-5">
            <h2 className="md:text-[25px] text-[18px] font-bold">Hats</h2>
            <button className="sm:pl-[15px] sm:pr-[15px] sm:pt-[10px] sm:gap-5 sm:pb-[10px] flex ml-[10px] items-center border border-purple-300 pl-[10px] pr-[10px] pt-[5px] pb-[5px] rounded-[50px]">
              Shop Now
              <FaArrowRight />
            </button>
          </div>
          <img
            className="w-[70%] sm:w-[60%] md:w-[50%]"
            src="/hat.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
