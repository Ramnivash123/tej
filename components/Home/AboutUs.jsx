"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

function AboutUs() {
  return (
    <div
      className="lg:px-14 px-8 flex justify-center items-center py-20 lg:py-0 lg:min-h-[100vh]"
      id="about-us"
    >
      {/* <div className="relative h-48 w-1 mt-48">
        <div
          className={`absolute bottom-0 w-full  bg-[#110040]`}
        ></div>
      </div> */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, x: -0, y: 200 }}
        whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 50 }}
        className="lg:flex hidden relative z-[1]"
      >
        <div className="w-1 h-48 bg-[#110040] rounded-3xl"></div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0.6, scale: 1, x: 0, y: 0, rotateZ: 8 }}
        whileInView={{ opacity: 1, scale: 1, x: 0, y: 0, rotateZ: 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 50 }}
        className="flex flex-col lg:ml-10 items-start font-raleway relative z-[2]"
      >
        <h1 className={`font-bold lg:text-5xl text-3xl mb-6 `}>About us</h1>
        <p className={`lg:pr-32 text-xl`}>
          At 99 Groups, we are dedicated to providing top-notch services across
          three unique sectors. Whether you're looking for real estate
          solutions, a perfect roommate, or reliable legal services, we've got
          you covered. Our mission is to simplify your life by offering
          comprehensive and reliable services all under one roof.
        </p>
      </motion.div>
      <div className="lg:flex hidden justify-center pr-52">
        <div className="m-2  grid grid-cols-2 gap-5 ">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: -0, y: 200 }}
            whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 50 }}
            className="pt-10 grid gap-5"
          >
            <img src="/about1.png" alt="" className="w-[500px] rounded-xl" />
            <img src="/about3.png" alt="" className="w-[500px] rounded-xl" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: -0, y: -200 }}
            whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 50 }}
            className="grid gap-5"
          >
            <img src="/about2.png" alt="" className="w-[500px] rounded-xl" />
            <img src="/about4.png" alt="" className="w-[500px] rounded-xl" />
          </motion.div>
          {/* <img
            src="/about2.png"
            alt="About 2"
            width={500}
            height={500}
            className={`my-4 `}
          />
          <img
            src="/about5.png"
            alt="About 5"
            width={500}
            height={500}
            className={``}
          />
        </div>
        <div className="pt-0">
          <img
            src="/about6.png"
            alt="About 6"
            width={500}
            height={500}
            className={``}
          />
          <img
            src="/about3.png"
            alt="About 3"
            width={500}
            height={500}
            className={``}
          />
          <img
            src="/about4.png"
            alt="About 4"
            width={500}
            height={500}
            className={`my-4 `}
          /> */}
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
