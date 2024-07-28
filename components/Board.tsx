import React from "react";
import Image from "next/image";

export default function Board() {
  return (
    <div className="container mx-auto">
      {/* image */}
      <div className="flex flex-col items-center">
        <Image
          src="/image.jpg"
          width={300}
          height={300}
          alt="Image"
          className="md:w-[400px] md:h-[400px]"
        />
        <p className="text-center md:max-w-[40rem] text-2xl text-slate-600 font-normal md:text-4xl">
          Gorgeous fashion collection for the awesome 2017 summer season of the
          cannes festival
        </p>
      </div>
    </div>
  );
}
