import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="lg:p-20 p-10 w-full flex justify-center">
      <main className=" grid lg:grid-cols-5 max-w-[1000px] gap-10">
        <motion.div
        initial={{ opacity: 0, scale: 0.9, x: 200, y: 0 }}
        whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 50 }} className="col-span-2 flex justify-center items-center h-full">
          <div className="">
            <div className="flex gap-5 items-center">
              <h1 className="text-xl">About us</h1>
              <div className="lg:w-[200px] w-[160px] h-1 rounded-xl bg-[#00A1EF]"></div>
            </div>
            <div className="lg:pt-6 pt-2">
              <h1 className="lg:text-6xl text-3xl lora font-semibold">
                Welcome to 99 Services
              </h1>
            </div>
          </div>
        </motion.div>
        <motion.div
        initial={{ opacity: 0, scale: 0.9, x: 0, y: 200 }}
        whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 50 }} className="col-span-3">
          <div className="grid gap-5 text-xl lora lg:pt-10">
            <h1>
              At 99 Services, our mission is to empower students by providing
              accessible, reliable, and effective legal solutions.{" "}
            </h1>
            <h1>
              We understand the specific legal issues students face, from
              academic disputes and housing concerns to visa matters and more.
              Our goal is to ensure that students can focus on their education
              while we handle their legal needs.
            </h1>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default About;
