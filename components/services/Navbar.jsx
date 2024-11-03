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
      <div className="fixed w-full pt-5 z-[50]">
        <div className="flex justify-between py-4 lg:px-14 px-8 mx-5 lg:mx-24 rounded-3xl top-6 bg-gray-50 border-2 border-[#979797]">
          <img
            src="/services/serviceslogo.png"
            alt="Logo"
            className="w-[200px]"
          />
          <div className="hidden lg:flex flex-row items-center justify-evenly gap-x-12 font-medium">
            <Link
              href={"/services"}
              className=" duration-200 hover:text-black/70 text-[#00A0ED]"
            >
              Home
            </Link>
            <Link
              href={"/services/#services"}
              className=" duration-200 hover:text-black/70"
            >
              Services
            </Link>
            <Link
              href={"/services/#faq"}
              className=" duration-200 hover:text-black/70"
            >
              FAQ's
            </Link>
            <Link
              href={"/services/#contact"}
              className="text-white bg-[#040A60] rounded-xl py-2 px-8 ml-10 hidden lg:flex"
            >
              Contact
            </Link>
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
              <Link href={"/services"} onClick={toggleDrawer(false)}>
                <div className="flex justify-between montserrat items-center">
                  <h1 className="text-2xl">Home</h1>
                  <IoIosArrowForward className="text-2xl" />
                </div>
              </Link>
              <Link href={"/services/#services"} onClick={toggleDrawer(false)}>
                <div className="flex justify-between montserrat items-center">
                  <h1 className="text-2xl">Services</h1>
                  <IoIosArrowForward className="text-2xl" />
                </div>
              </Link>
              <Link href={"/services/#faq"} onClick={toggleDrawer(false)}>
                <div className="flex justify-between montserrat items-center">
                  <h1 className="text-2xl">FAQ's</h1>
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
