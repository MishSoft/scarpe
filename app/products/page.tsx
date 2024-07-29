"use client";
import SortProd from "@/components/SortProd";
import React, { useState } from "react";

export default function page() {
  const [product, setProduct] = useState<string[] | boolean>(false);
  return (
    <div className="container mx-auto">
      {/* Product sort */}
      <SortProd />

      {/* Products */}
      <div>{product || "Nothing"}</div>
    </div>
  );
}
