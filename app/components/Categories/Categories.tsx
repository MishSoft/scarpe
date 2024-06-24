import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import ShoesCategory from "./ShoesCategory";
import HatCategory from "./HatCategory";
export default function Categories() {
  return (
    <div className="flex flex-col mt-10">
      <h2 className="ml-[10px] xl:ml-[25px] text-[30px] font-semibold">
        Categories
      </h2>
      <div className="md:flex md:justify-around  md:flex-wrap md:flex-row flex flex-col items-center pt-[10px] gap-[50px]">
        <ShoesCategory />
        <HatCategory />
        <ShoesCategory />
        <ShoesCategory />
        <ShoesCategory />
        <ShoesCategory />
      </div>
    </div>
  );
}
