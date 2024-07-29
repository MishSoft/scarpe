"use client";
import React from "react";

import Link from "next/link";
import { Button } from "./ui/button";


// Icon
import { FaShoppingBag } from "react-icons/fa";


// Component
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import Cart from "./Cart";
import UserButton from "./UserButton";

export default function Header() {
  return (
    <header className="py-8 xl:py-12 text-purple-600">
      <div className="container mx-auto flex justify-between items-center">
        {/* logo */}
        <Link href="/">
          <h1 className="text-3xl font-semibold">SCARPE</h1>
        </Link>

        {/* Desktop nav & Cart nav */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Cart />
          <UserButton/>
        </div>

        {/* mobile nav &  Cart nav */}
        <div className="xl:hidden flex items-center gap-8">
          <Cart />
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
