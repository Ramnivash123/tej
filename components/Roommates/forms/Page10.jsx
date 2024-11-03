"use client";
import Header from "@/components/Roommates/forms/Header";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
const Page10 = () => {
  
  return (
    <div className="h-[92vh] overflow-hidden forms">
      <Header />
      <motion.div initial={{ opacity: 0, scale: 1.4, x: 200 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 50 }} className="flex justify-center w-full relative z-[2] h-full">
        <section>
          <div className="flex justify-center">
            <img src="/roommates/fp10.png" alt="" className="w-[300px] lg:w-[400px]" />
          </div>
          <div className="text-center font-bold text-white py-2">
            <h1>Let us match you with the</h1>

            <h1 className="text-3xl lg:text-5xl"> Perfect One</h1>
          </div>
          
        </section>
      </motion.div>

      <main className="absolute bottom-0 w-full">
        <section className="overflow-hidden">
          <motion.div
            initial={{ opacity: 0.5, scale: 1.4, x: 100 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 50 }}
            className=""
          >
            <img
              src="/roommates/successbuild.png"
              alt="buildings"
              className="w-full object-cover object-right h-[250px] pb-[80px]"
            />
          </motion.div>
        </section>
        <section className="absolute bottom-[50px]  w-full flex justify-center">
          <div
            className="flex justify-center duration-150 hover:scale-105 relative z-[10] cursor-pointer mr-10"
          >
            <img src="/roommates/bus2.png" alt="" className="w-[200px]" />
            <h1 className="font-bold text-xl text-white ml-[-125px] pt-2">
              Reached
            </h1>
          </div>
        </section>
        <section className="bg-black h-[80px] w-full absolute z-[2] bottom-0"></section>
      </main>
    </div>
  );
};

export default Page10;
