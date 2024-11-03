import React from "react";
import { HiMenuAlt2 } from "react-icons/hi";

const Header = () => {
  return (
    <div>
      <main className="flex justify-between px-10 py-10">
        <div className="">
          <HiMenuAlt2 className="font-bold lg:text-3xl text-2xl text-white" />
        </div>
        <div className="">
          <img src="/roommates/99logo.png" alt="" className="w-[40px]" />
        </div>
      </main>
    </div>
  );
};

export default Header;
