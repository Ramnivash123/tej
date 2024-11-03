"use client";
import React, { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { motion } from "framer-motion";
import Link from "next/link";
import { Drawer } from "@mui/material";
import { IoIosArrowForward } from "react-icons/io";

function Navbar() {
  const [open, setOpen] = useState(false);
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  return (
    <div className="">
      <div className="fixed w-full pt-8 z-[50]">
        <div className="flex justify-between py-2 lg:px-14 px-8 mx-5 lg:mx-24 rounded-xl  top-6 bg-gray-50 border-2 border-[#979797]">
          <img src="/99groups.svg" alt="Logo" width={160} height={160} />
          <div className="hidden lg:flex flex-row items-center justify-evenly gap-x-8 font-medium text-[#555555]">
            <Link href={"/realty"} className=" duration-200 hover:text-black">Realty</Link>
            <Link href={"/roommates"} className=" duration-200 hover:text-black">Roommates</Link>
            <Link href={"/services"} className=" duration-200 hover:text-black">Services</Link>
            <button className="text-white bg-[#110040] rounded-xl py-2 px-4 ml-10 hidden lg:flex">
              Contact us
            </button>
          </div>
          <div className="flex lg:hidden items-center">
            <IoIosMenu className="text-3xl" onClick={toggleDrawer(true)} />
          </div>
        </div>
      </div>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        <main className="block w-screen max-h-[100vh]  bg-gradient-to-b from-white to-gray-200 h-full relative z-[5]">
          <section
            className="flex justify-start p-10"
            onClick={toggleDrawer(false)}
          >
            <h1 className="opacity-80 hover:opacity-100 duration-200 font-bold text-xl">
              &lt; Back
            </h1>
          </section>
          <section className="montserrat px-[50px]">
            <h1 className=" text-3xl text-center">Menu</h1>
            <div className="pt-10 grid gap-6">
              <Link href={"/realty"} onClick={toggleDrawer(false)}>
                <div className="flex justify-between montserrat items-center">
                  <h1 className="text-2xl">99 Realty</h1>
                  <IoIosArrowForward className="text-2xl" />
                </div>
              </Link>
              <Link href={"/roommates"} onClick={toggleDrawer(false)}>
                <div className="flex justify-between montserrat items-center">
                  <h1 className="text-2xl">99 Roommates</h1>
                  <IoIosArrowForward className="text-2xl" />
                </div>
              </Link>
              <Link href={"/services"} onClick={toggleDrawer(false)}>
                <div className="flex justify-between montserrat items-center">
                  <h1 className="text-2xl">99 Services</h1>
                  <IoIosArrowForward className="text-2xl" />
                </div>
              </Link>
            </div>
          </section>

          <section className="flex justify-start items-end pt-40 px-10 gap-2">
            <div className="">
              <h1 className=" lg:text-4xl text-2xl font-bold">Contact</h1>
              <div className="grid gap-2 pt-3">
                <div className="opacity-80 hover:opacity-100 duration-200">
                  <Link href={"tel:+995574893961"}>
                    <h1 className="font-bold">Phone Number</h1>
                    <h1>+995 574 89 39 61</h1>
                  </Link>
                </div>
                <div className="opacity-80 hover:opacity-100 duration-200">
                  <Link href={"mailto:info@99group.org"}>
                    <h1 className="font-bold">Email Address</h1>
                    <h1 className="underline underline-offset-2">
                      info@99group.org
                    </h1>
                  </Link>
                </div>

                <div className="opacity-80 hover:opacity-100 duration-200">
                  <div>
                    <h1 className="font-bold">Location</h1>
                    <h1>
                      Georgia, Rustavi city, Firosmani <br /> street, N 10
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </Drawer>
    </div>
  );
}

export default Navbar;
