"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import RoommatesNavbar from "../RoommatesNavbar";

function RoommatesHero() {
  return (
    <div>
      <main className="heromin min-h-[100vh] overflow-x-hidden overflow-y-hidden ">
        <section className="p-5">
          <RoommatesNavbar />
        </section>
        <div className="lg:flex hidden ">
          <img
            src="/bround1.png"
            alt=""
            className="absolute top-0 left-0 w-[500px]"
          />
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.7, x: 100, y: 10 }}
          whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 50 }}
          className="hidden lg:flex"
        >
          <img
            src="/lgbg.png"
            alt=""
            className="mt-[-280px] absolute z-[1] py-[200px] pl-[300px] pr-[120px]"
          />
        </motion.div>
        <section className="grid lg:grid-cols-2 lg:px-20 px-8 pt-10 relative z-[2] mont">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: -100 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 50 }}
            className=""
          >
            <h1 className=" font-[800] lg:text-5xl text-3xl mont uppercase">
              FIND YOUR PERFECT ROOMMATE WITH
            </h1>
            <span className=" font-[800] lg:text-5xl text-3xl mont uppercase text-blue-500">
              {" "}
              99 ROOMMATES
            </span>
            <h5 className="text-xl lg:pt-2 pt-5 max-w-[450px]">
              Connecting Students Across Georgia for Shared Living Experiences,
              99 roommates is Your Trusted Platform to Find Compatible Roommates
            </h5>
            <div className="pt-5">
              <Link
                href={"/roommates/1"}
                target="_blank"
                className="bg-black/60 rounded-xl text-white px-5 py-2"
              >
                Find Your Roommates
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 100 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 50 }}
            className="lg:hidden"
          >
            <img src="/herominimg.png" alt="" className="mt-10" />
          </motion.div>
        </section>
        <div className="lg:flex hidden justify-end mt-[-350px]">
          <img
            src="/bround3.png"
            alt=""
            className="absolute right-0-0 w-[600px]"
          />
        </div>
      </main>
    </div>
  );
}

export default RoommatesHero;
