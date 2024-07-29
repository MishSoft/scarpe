import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Input } from "@/components/ui/input";

export default function page() {
  return (
    <div className="container flex items-center pb-10 justify-center mx-auto">
      <div className="  flex-col gap-8  flex items-center justify-center">
        <h2 className="text-4xl">Registration</h2>
        <form className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="flex flex-col">
            <label htmlFor="name" className="pb-2">
              Name
            </label>
            <div className=" w-[300px] h-[35px] ">
              <Input
                className=" outline-none rounded border-2 focus:border-purple-600 pl-2 w-full h-full"
                type="text"
                id="name"
                name="name"
                placeholder="Joe"
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label htmlFor="lastname" className="pb-2">
              Lastname
            </label>
            <div className=" w-[300px] h-[35px] ">
              <Input
                className=" outline-none rounded border-2 focus:border-purple-600 pl-2 w-full h-full"
                type="text"
                id="lastname"
                name="lastname"
                placeholder="Smith"
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label htmlFor="phone" className="pb-2">
              Phone Number
            </label>
            <div className=" w-[300px] h-[35px] ">
              <Input
                className=" outline-none rounded border-2 focus:border-purple-600 pl-2 w-full h-full"
                type="number"
                id="phone"
                name="phone"
                placeholder="(+995) 123 456"
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="pb-2">
              Email
            </label>
            <div className=" w-[300px] h-[35px] ">
              <Input
                className=" outline-none rounded border-2 focus:border-purple-600 pl-2 w-full h-full"
                type="email"
                id="email"
                name="email"
                placeholder="example@gmail.com"
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label htmlFor="password" className="pb-2">
              Password
            </label>
            <div className=" w-[300px] h-[35px] ">
              <Input
                className=" outline-none rounded border-2 focus:border-purple-600 pl-2 w-full h-full"
                type="password"
                id="password"
                name="password"
                placeholder="**********"
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label htmlFor="password" className="pb-2">
              Repeat Password
            </label>
            <div className=" w-[300px] h-[35px] ">
              <Input
                className=" outline-none rounded border-2 focus:border-purple-600 pl-2 w-full h-full"
                type="password"
                id="password"
                name="password"
                placeholder="**********"
              />
            </div>
          </div>

          <div className="flex justify-center border col-span-full">
            <Button className="w-full" type="submit">
              Sign Up
            </Button>
          </div>
        </form>
        <div>or</div>
        <Link className="hover:text-purple-600 hover:underline" href="/signin">
          I have already account
        </Link>
      </div>
    </div>
  );
}
