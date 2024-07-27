import React from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

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

export default function Nav() {
  const pathname = usePathname();
  return (
    <nav className="flex gap-8">
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
  );
}
