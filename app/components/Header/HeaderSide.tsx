import React from "react";

export default function HeaderSide() {
  return (
    <div className="flex flex-col items-center gap-10 mt-20">
      <p className="text-center md:text-[30px] flex font-semibold text-[25px]">
        Discover the Elegance of Modern Fashion
      </p>
      <p className="text-[18px] md:max-w-[700px] md:text-[20px] text-center">
        Experience the sophistication and functionality of contemporary design,
        where luxury meets innovation in every garment for ultimate style and
        comfort.
      </p>

      <div className="w-full flex md:max-w-[80%] items-center justify-center">
        <img
          src="https://t3.ftcdn.net/jpg/01/21/81/86/360_F_121818673_6EID5iF76VCCc4aGOLJkd94Phnggre3o.jpg"
          alt=""
        />
      </div>
    </div>
  );
}
