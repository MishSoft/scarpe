import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import React from "react";

export default function page() {
  return (
    <div className="container mt-10 flex items-center justify-center mx-auto">
      <div className=" w-[500px] flex-col gap-8  flex items-center justify-center">
        <h2 className="text-4xl">Login</h2>
        <form className="flex flex-col gap-8">
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
            <div className="w-[300px] h-[35px] ">
              <Input
                className="outline-none rounded border-2 focus:border-purple-600 pl-2 w-full h-full"
                type="password"
                id="password"
                name="password"
                placeholder="**********"
              />
            </div>
          </div>

          <Button type="submit">Sign In</Button>
        </form>
        <div>or</div>
        <Link className="hover:text-purple-600 hover:underline" href="/signup">
          Create new account
        </Link>
      </div>
    </div>
  );
}
