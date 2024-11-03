"use client";
import React, { useEffect, useRef, useState } from "react";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { motion } from "framer-motion";
import Link from "next/link";

function Realty({ data }) {
  return (
    <div className="lg:px-10 px-5 pb-10 lg:pb-20 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 1.1, x: 0, y: 0 }}
        whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 50 }}
        className=" lg:grid hidden lg:grid-cols-2 justify-between rounded-3xl shadow-md bg-blue-gradient text-white font-inter max-h-[300px] lg:min-h-[500px] lg:max-h-[750px]  w-full overflow-hidden bg-cover bg-no-repeat bg-right"
        style={{ backgroundImage: `url(${data.img})` }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: -100, y: 0 }}
          whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 50 }}
          className="flex flex-col justify-start gap-y-4 items-start px-10 lg:pl-20 py-8 lg:py-20"
        >
          <div className="flex items-center gap-2">
            <img src={data.logo} alt="" className="lg:w-[60px] w-[40px]" />
            <h1 className={`font-bold lg:text-4xl text-3xl `}>
              {data.heading}
            </h1>
          </div>
          <h2 className={`font-medium lg:text-xl mt-4  `}>{data.heading2}</h2>
          <p className={`mt-6 text-lg pr-2 text-justify lg:flex hidden`}>
            {data.paragraph}
          </p>
          <div className={`hidden lg:flex justify-center gap-x-12 mt-16  `}>
            <div>
              <p className="font-bold text-3xl">{data.number1}</p>
              <p className=" text-lg">{data.number1text}</p>
            </div>

            <div>
              <p className="text-3xl font-bold">{data.number2}</p>
              <p className="text-lg">{data.number2text}</p>
            </div>
          </div>
          <Link
            href={data.link}
            className={`hidden lg:flex items-center gap-x-2 lg:mt-10 lg:text-lg bg-white text-[#091139] font-bold px-4 py-2 rounded-xl  `}
          >
            {data.btntext}
            <IoIosArrowDroprightCircle />
          </Link>
          <Link
            href={data.link}
            className={`flex lg:hidden items-center gap-x-2 lg:mt-10 lg:text-lg bg-white text-[#091139] font-bold px-4 py-2 rounded-xl  `}
          >
            {data.mbtntext}
            <IoIosArrowDroprightCircle />
          </Link>
        </motion.div>

        <div className=""></div>
      </motion.div>
      {data.index === 2 ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 100, y: 0 }}
          whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 50 }}
          className="grid lg:hidden lg:grid-cols-2 justify-between rounded-3xl shadow-md bg-blue-gradient text-white font-inter max-h-[300px] lg:min-h-[500px] lg:max-h-[750px]  w-full overflow-hidden bg-cover bg-no-repeat bg-right"
          style={{ backgroundImage: `url(${data.img2})` }}
        >
          <div className="flex flex-col justify-start gap-y-4 items-start px-10 lg:pl-20 py-8 lg:py-20">
            <div className="flex items-center gap-2">
              <img src={data.logo} alt="" className="lg:w-[60px] w-[35px]" />
              <h1 className={`font-bold lg:text-4xl text-3xl `}>
                {data.heading}
              </h1>
            </div>
            <h2 className={`font-medium lg:text-xl mt-4  `}>{data.heading2}</h2>
            <p className={`mt-6 text-lg pr-2 text-justify lg:flex hidden`}>
              {data.paragraph}
            </p>
            <div className={`hidden lg:flex justify-center gap-x-12 mt-16  `}>
              <div>
                <p className="font-bold text-3xl">{data.number1}</p>
                <p className=" text-lg">{data.number1text}</p>
              </div>

              <div>
                <p className="text-3xl font-bold">{data.number2}</p>
                <p className="text-lg">{data.number2text}</p>
              </div>
            </div>
            <Link
              href={data.link}
              className={`hidden lg:flex items-center gap-x-2 lg:mt-10 lg:text-lg bg-white text-[#091139] font-bold px-4 py-2 rounded-xl  `}
            >
              {data.btntext}
              <IoIosArrowDroprightCircle />
            </Link>
            <Link
              href={data.link}
              className={`flex lg:hidden items-center gap-x-2 lg:mt-10 lg:text-lg bg-white text-[#091139] font-bold px-4 py-2 rounded-xl  `}
            >
              {data.mbtntext}
              <IoIosArrowDroprightCircle />
            </Link>
          </div>
          {/* <div className="">
        <img
          src={data.img}
          alt="House image"
          className={` h-full scale-[1.3] mix-blend-soft-light z-50 relative rounded-3xl w-fit overflow-hidden`}
        />
      </div> */}
          <div className=""></div>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: -100, y: 0 }}
          whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 50 }}
          className="grid lg:hidden lg:grid-cols-2 justify-between rounded-3xl shadow-md bg-blue-gradient text-white font-inter max-h-[300px] lg:min-h-[500px] lg:max-h-[750px]  w-full overflow-hidden bg-cover bg-no-repeat bg-right"
          style={{ backgroundImage: `url(${data.img2})` }}
        >
          <div className="flex flex-col justify-start gap-y-4 items-start px-10 lg:pl-20 py-8 lg:py-20">
            <div className="flex items-center gap-2">
              <img src={data.logo} alt="" className="lg:w-[60px] w-[35px]" />
              <h1 className={`font-bold lg:text-4xl text-3xl `}>
                {data.heading}
              </h1>
            </div>
            <h2 className={`font-medium lg:text-xl mt-4  `}>{data.heading2}</h2>
            <p className={`mt-6 text-lg pr-2 text-justify lg:flex hidden`}>
              {data.paragraph}
            </p>
            <div className={`hidden lg:flex justify-center gap-x-12 mt-16  `}>
              <div>
                <p className="font-bold text-3xl">{data.number1}</p>
                <p className=" text-lg">{data.number1text}</p>
              </div>

              <div>
                <p className="text-3xl font-bold">{data.number2}</p>
                <p className="text-lg">{data.number2text}</p>
              </div>
            </div>
            <Link
              href={data.link}
              className={`hidden lg:flex items-center gap-x-2 lg:mt-10 lg:text-lg bg-white text-[#091139] font-bold px-4 py-2 rounded-xl  `}
            >
              {data.btntext}
              <IoIosArrowDroprightCircle />
            </Link>
            <Link
              href={data.link}
              className={`flex lg:hidden items-center gap-x-2 lg:mt-10 lg:text-lg bg-white text-[#091139] font-bold px-4 py-2 rounded-xl  `}
            >
              {data.mbtntext}
              <IoIosArrowDroprightCircle />
            </Link>
          </div>
          {/* <div className="">
        <img
          src={data.img}
          alt="House image"
          className={` h-full scale-[1.3] mix-blend-soft-light z-50 relative rounded-3xl w-fit overflow-hidden`}
        />
      </div> */}
          <div className=""></div>
        </motion.div>
      )}
    </div>
  );
}

export default Realty;
