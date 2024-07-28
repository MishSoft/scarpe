import React from "react";
import { FaShoppingBag } from "react-icons/fa";

export default function SummerItem() {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-[300px]">
        <div className="relative cursor-pointer bg-no-repeat rounded bg-center bg-cover bg-[url(https://t3.ftcdn.net/jpg/06/12/00/18/360_F_612001823_TkzT0xmIgagoDCyQ0yuJYEGu8j6VNVYT.jpg)] w-[300px] h-[300px]">
          <FaShoppingBag className="text-[30px] absolute right-0 m-5 text-white" />
        </div>
        <div className="flex flex-col items-center mt-5 gap-2">
          <h2 className="text-xl">Product name</h2>
          <span className="text-xl">Price: 300₾</span>
        </div>
      </div>
    </>
  );
}
