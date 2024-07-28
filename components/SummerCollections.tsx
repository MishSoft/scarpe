import { Badge } from "@/components/ui/badge";

import React from "react";
import { FaShoppingBag } from "react-icons/fa";
import SummerItem from "./SummerItem";

export default function SummerCollections() {
  return (
    <div className="container mx-auto mt-36">
      <div className="flex flex-col text-slate-600 items-center gap-6">
        <div className="border p-5 text-[12px] tracking-[2px]">
          BEST FASHION DETAILS
        </div>
        <h2 className="text-3xl text-center">NEW SUMMER COLLECTION</h2>
      </div>
      {/* badge products section */}
      <div className="flex gap-10 justify-center items-center mt-10 flex-wrap">
        <SummerItem />
        <SummerItem />
        <SummerItem />
        <SummerItem />
      </div>
    </div>
  );
}
