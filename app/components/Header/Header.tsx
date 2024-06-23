import React from "react";
import Navigation from "./Navigation";
import HeaderSide from "./HeaderSide";

export default function Header() {
  return (
    <div className="p-5">
      <Navigation />
      <HeaderSide />
    </div>
  );
}
