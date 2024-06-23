"use client";
import Image from "next/image";
import Header from "./components/Header/Header";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import Home from "./components/Home";

export default function page() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
