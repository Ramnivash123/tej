"use client";
import React, { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { motion } from "framer-motion";
import Link from "next/link";
import { Drawer } from "@mui/material";
import { IoIosArrowForward } from "react-icons/io";
import app from "@/firebase/config.js";
import { getAuth } from "firebase/auth";
const auth = getAuth(app);

const AdminNavbar = () => {
  const [open, setOpen] = useState(false);
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const handleLogout = (e) => {
    e.preventDefault();
     try {
       auth.signOut();
       window.location.replace("/realty/admin/login");
     } catch (error) {
       console.error("Error signing out:", error);
     }
  };
  return (
    <div className="">
      <div className="fixed w-full z-[50] ">
        <div className="flex justify-between lg:py-5 py-5 lg:px-20 px-10 bg-white">
          <div className="">
            <h1>Realty Admin</h1>
          </div>
          <div className="hidden lg:flex flex-row items-center justify-evenly gap-x-12 font-medium">
            <Link
              href={"/realty/admin"}
              className=" duration-200 hover:text-black/70 "
            >
              Properties
            </Link>
            <Link
              href={"/realty/admin/property/create"}
              className=" duration-200 hover:text-black/70"
            >
              Create Property
            </Link>

            <button
              onClick={handleLogout}
              className="text-white bg-black rounded-xl py-2 px-8 ml-10 hidden lg:flex"
            >
              Log out
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
              <Link href={"/realty/admin/"} onClick={toggleDrawer(false)}>
                <div className="flex justify-between montserrat items-center">
                  <h1 className="text-2xl">Properties</h1>
                  <IoIosArrowForward className="text-2xl" />
                </div>
              </Link>
              <Link
                href={"/realty/admin/property/create"}
                onClick={toggleDrawer(false)}
              >
                <div className="flex justify-between montserrat items-center">
                  <h1 className="text-2xl">Create Property</h1>
                  <IoIosArrowForward className="text-2xl" />
                </div>
              </Link>
              <button onClick={handleLogout}>
                <div className="flex justify-between montserrat items-center">
                  <h1 className="text-2xl">Logout</h1>
                  <IoIosArrowForward className="text-2xl" />
                </div>
              </button>
            </div>
          </section>
        </main>
      </Drawer>
    </div>
  );
};

export default AdminNavbar;
