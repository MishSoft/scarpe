import React from "react";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { FaShoppingBag } from "react-icons/fa";

export default function Cart({ product }: any) {
  return (
    <Sheet>
      <div className="flex gap-8">
        <SheetTrigger className="flex  justify-center items-center">
          <FaShoppingBag className="text-[20px]" />
        </SheetTrigger>
      </div>
      <SheetContent className="flex flex-col">
        {/* logo */}
        <div className="mt-32 mb-40 text-center text-2xl">
          <h1 className="text-3xl text-purple-600 font-semibold">Cart</h1>
        </div>
        {/* nav */}
        <div className="flex flex-col text-purple-600 justify-center items-center gap-8">
          {product || "It's empty yet!"}
        </div>
      </SheetContent>
    </Sheet>
  );
}
