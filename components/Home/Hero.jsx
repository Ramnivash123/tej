"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
function Hero() {
  return (
    <div className="overflow-hidden">
      <div className="bg-blue-200">
        <div className="bghero overflow-hidden  min-h-[100vh]">
          <div className="px-10 md:flex md:flex-col md:justify-between min-h-[100vh]  lg:flex lg:flex-row   lg:justify-center  lg:px-20">
            
            <div className="">
            <div className="h-[10px] lg:hidden"></div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5, x: 100, y: 0 }}
              whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 50 }}
              className="lg:flex flex-col pt-10 items-start lg:ml-8 pb-3 hidden relative z-[2]"
            >
              <div
                className={`font-bold text-3xl lg:text-5xl z-10 font-raleway mt-48`}
              >
                Transforming Your Lifestyle with Ease and Confidence
              </div>
              <p
                className={`font-medium text-[#555555] lg:pr-36 text-xl lg:text-2xl my-3 z-0 `}
              >
                Discover Real Estate, Roommates, and Legal Services with 99
                Groups, Your Pathway to Seamless Living
              </p>
              <Link
                href={"/#services"}
                className={`text-white bg-[#110040] px-4 py-2 rounded-xl mt-2 `}
              >
                Explore
              </Link>
            </motion.div>
            <div className="flex flex-col justify-center items-start lg:ml-8 pb-3 lg:hidden relative z-[3]">
              <motion.div
                initial={{ opacity: 0.7, scale: 0.5, x: 0, y: 350 }}
                whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                transition={{ type: "spring", stiffness: 200, damping: 50 }}
                className={`font-bold text-3xl lg:text-5xl z-10 font-raleway mt-48`}
              >
                Transforming Your Lifestyle with Ease and Confidence
              </motion.div>
              <motion.div
                initial={{ opacity: 0.7, scale: 0.5, x: 0, y: 200 }}
                whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                transition={{ type: "spring", stiffness: 200, damping: 50 }}
                className={`font-medium text-[#555555] lg:pr-36 text-xl lg:text-2xl my-3 z-0 `}
              >
                Discover Real Estate, Roommates, and Legal Services with 99
                Groups, Your Pathway to Seamless Living
              </motion.div>
              <motion.div
                initial={{ opacity: 0.7, scale: 0.5, x: 0, y: 100 }}
                whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                transition={{ type: "spring", stiffness: 200, damping: 50 }}
                className=""
              >
                <Link
                  href={"/#services"}
                  className={`text-white bg-[#110040] px-4 py-2 rounded-xl mt-2 `}
                >
                  Explore
                </Link>
              </motion.div>
            </div>
            </div>
            <motion.div
              initial={{ opacity: 0.6, scale: 0.9, x: -200, y: 0 }}
              whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 50 }}
              className={`lg:flex z-20 items-end justify-center hidden pt-28`}
            >
              <img
                src="/building.png"
                alt="Building"
                className="w-full  object-contain max-w-[400px] lg:max-w-full"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 1, scale: 1.5, x: -50, y: 0 }}
              whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 50 }}
              className={`flex items-end justify-center lg:hidden relative z-[5]`}
            >
              <img
                src="/building.png"
                alt="Building"
                className="w-full  object-contain max-w-[400px] lg:max-w-full"
              />
            </motion.div>
          </div>
        </div>
      </div>
      <div className="absolute lg:mt-[-160px] mt-[-120px] overflow-hidden w-full">
        <motion.div
          initial={{ opacity: 1, scale: 1.5, x: 0, y: 0 }}
          whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 50 }}
          className="  z-[4] overflow-hidden w-full"
        >
          <img
            src="/plants.png"
            alt=""
            className="w-full h-[200px] lg:h-auto object-cover"
          />
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
