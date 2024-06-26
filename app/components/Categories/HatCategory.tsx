import React from "react";
import { FaArrowRight } from "react-icons/fa6";

export default function ShoesCategory() {
  return (
    <div className="w-[100%] sm:w-[80%] md:w-[50%] xl:w-[45%] sm:rounded-[20px] border border-purple-300 shadow-lg transition-transform duration-200 hover:shadow-xl hover:-translate-y-2">
      <div className="flex flex-col p-5">
        <div className="flex items-center justify-between">
          <div className="flex flex-col items-start gap-5">
            <h2 className="md:text-[25px] text-[18px] font-bold text-gray-800">
              Hats
            </h2>
            <button className="sm:px-[15px] sm:py-[10px] flex items-center gap-2 border border-purple-300 px-[10px] py-[5px] rounded-full transition-colors duration-200 hover:bg-purple-300 hover:text-white">
              Shop Now <FaArrowRight />
            </button>
          </div>
          <img
            className="w-[20%] sm:w-[30%] md:w-[20%]"
            src="/hat.png"
            alt="Shoes"
          />
        </div>
      </div>
    </div>
  );
}
