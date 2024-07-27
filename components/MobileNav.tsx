import React from "react";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { FaShoppingBag } from "react-icons/fa";

const links = [
  {
    name: "Home",
    path: "/",
  },

  {
    name: "Products",
    path: "/products",
  },

  {
    name: "About",
    path: "/about",
  },
];

export default function MobileNav() {
  const pathname = usePathname();
  return (
    <Sheet>
      <div className="flex gap-8">
        <SheetTrigger className="flex  justify-center items-center">
          <CiMenuFries className="text-[32px]" />
        </SheetTrigger>
      </div>
      <SheetContent className="flex flex-col">
        {/* logo */}
        <div className="mt-32 mb-40 text-center text-2xl">
          <Link href="/">
            <h1 className="text-3xl text-purple-600 font-semibold">SCARPE</h1>
          </Link>
        </div>
        {/* nav */}
        <nav className="flex flex-col text-purple-600 justify-center items-center gap-8">
          {links.map((link, index) => {
            return (
              <Link
                className={`${
                  link.path === pathname &&
                  "text-purple-600 border-b-2 border-purple-600"
                } capitalize font-medium hover:border-b-2  hover:border-purple-600 transition-all `}
                key={index}
                href={link.path}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
