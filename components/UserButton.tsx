import React from "react";
import { FaRegUser } from "react-icons/fa";
import { Button } from "./ui/button";
import Link from "next/link";

export default function UserButton() {
  return (
    <Link href="/signin">
      <FaRegUser className="text-[20px]" />
    </Link>
  );
}
