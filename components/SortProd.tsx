"use client";
import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

const prodTypes = [
  {
    category: "Man",
    types: [
      "Sneakers",
      "Dress Shoes",
      "Loafers",
      "Boots",
      "Casual Shoes",
      "Sandals",
      "Running Shoes",
      "Work Boots",
      "Oxford Shoes",
      "Derby Shoes",
    ],
  },

  {
    category: "Women",
    types: [
      "Heels",
      "Flats",
      "Sneakers",
      "Boots",
      "Sandals",
      "Loafers",
      "Ballet Flats",
      "Wedges",
      "Espadrilles",
      "Mules",
    ],
  },

  {
    category: "Kids",
    types: [
      "Sneakers",
      "Sandals",
      "Boots",
      "Loafers",
      "Dress Shoes",
      "Casual Shoes",
      "School Shoes",
      "Running Shoes",
      "Slippers",
      "Water Shoes",
    ],
  },
];

export default function SortProd() {
  const [findKey, setFindKey] = useState<string[]>([]);
  return (
    <div className="w-full flex flex-col text-purple-600  p-5 pl-0 pr-0">
      <div className="flex border-b-2 pb-5 border-purple-600  items-center justify-between">
        <DropdownMenu>
          <Button
            onClick={() => setFindKey([])}
            className="bg-transition text-purple-600 hover:bg-purple-600 hover:text-white "
          >
            All
          </Button>
          {prodTypes.map((item, index) => {
            return (
              <div key={index} onClick={() => setFindKey(item.types)}>
                <Button className="bg-transition text-purple-600 hover:bg-purple-600 hover:text-white ">
                  {item.category}
                </Button>
              </div>
            );
          })}
        </DropdownMenu>
      </div>
      <div className="pt-5 grid grid-cols-2 gap-2 md:grid-cols-3 xl:grid-cols-5">
        {findKey &&
          findKey.map(
            (
              item:
                | string
                | number
                | bigint
                | boolean
                | React.ReactElement<
                    any,
                    string | React.JSXElementConstructor<any>
                  >
                | Iterable<React.ReactNode>
                | React.ReactPortal
                | Promise<React.AwaitedReactNode>
                | null
                | undefined,
              index: React.Key | null | undefined
            ) => {
              return <Button key={index}>{item}</Button>;
            }
          )}
      </div>
    </div>
  );
}
