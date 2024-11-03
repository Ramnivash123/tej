import Link from "next/link";
import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { motion } from "framer-motion";

const Services = () => {
  const [show, setShow] = useState(true);
  return (
    <div>
      <main className="bg-gradient-to-r from-sky-400 to-sky-600 lg:p-20 p-10 min-h-[100vh]">
        <section className="flex justify-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: -100, y: 0 }}
            whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 50 }}
            className="lg:block hidden"
          >
            <div className="flex justify-center items-center gap-2">
              <h1 className="text-xl">Services</h1>
              <div className="lg:w-[200px] w-[160px] h-1 bg-black rounded-xl"></div>
            </div>
            <div className="pt-5">
              <h2 className="text-5xl lora font-semibold">
                Explore Our Services
              </h2>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: -100, y: 0 }}
            whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 50 }}
            className="lg:hidden"
          >
            <h1 className="text-3xl font-semibold lora tracking-wider">Our Services</h1>
          </motion.div>
        </section>
        <section className="lg:pt-20 pt-10 flex gap-5 justify-center">
          {show ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 200, y: 0 }}
              whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 50 }}
              key={show}
              className="grid lg:grid-cols-3 gap-10 lora text-xl"
            >
              <div className="rounded-2xl p-3 bg-stone-50">
                <div className="">
                  <img
                    src="/services/sc1.png"
                    alt=""
                    className="object-cover rounded-xl h-[270px] w-full"
                  />
                </div>
                <div className="p-5 text-center font-semibold">
                  <h1>Student Issues</h1>
                </div>
              </div>
              <div className="rounded-2xl p-3 bg-stone-50">
                <div className="">
                  <img
                    src="/services/sc2.png"
                    alt=""
                    className="object-cover rounded-xl h-[270px] w-full"
                  />
                </div>
                <div className="p-5 text-center font-semibold">
                  <h1>University transfers</h1>
                </div>
              </div>
              <div className="rounded-2xl p-3 bg-stone-50">
                <div className="">
                  <img
                    src="/services/sc3.png"
                    alt=""
                    className="object-cover rounded-xl h-[270px] w-full"
                  />
                </div>
                <div className="p-5 text-center font-semibold">
                  <h1>Driver licence application</h1>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 200, y: 0 }}
              whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 50 }}
              key={show}
              className="grid lg:grid-cols-3 gap-10 lora text-xl"
            >
              <div className="rounded-2xl p-3 bg-stone-50">
                <div className="">
                  <img
                    src="/services/sc4.png"
                    alt=""
                    className="object-cover rounded-xl h-[270px] w-full"
                  />
                </div>
                <div className="p-5 text-center font-semibold">
                  <h1>Job Contract</h1>
                </div>
              </div>
              <div className="rounded-2xl p-3 bg-stone-50">
                <div className="">
                  <img
                    src="/services/sc5.png"
                    alt=""
                    className="object-cover rounded-xl h-[270px] w-full"
                  />
                </div>
                <div className="p-5 text-center font-semibold">
                  <h1>Visa Extension / Application</h1>
                </div>
              </div>
              <div className="rounded-2xl p-3 bg-stone-50">
                <div className="">
                  <img
                    src="/services/sc6.png"
                    alt=""
                    className="object-cover rounded-xl h-[270px] w-full"
                  />
                </div>
                <div className="p-5 text-center font-semibold">
                  <h1>Bank Statement Service</h1>
                </div>
              </div>
            </motion.div>
          )}
          <div className="lg:flex items-center hidden">
            <div className="p-2 rounded-full text-2xl bg-stone-50">
              <IoIosArrowForward onClick={() => setShow(!show)} />
            </div>
          </div>
        </section>
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x:0, y: 100 }}
          whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 50 }}
          className="flex justify-center items-center pt-8"
        >
          <Link
            href={"/services/all-services"}
            className="px-8 py-2 rounded-xl border-2 bg-[#1E0C51] text-white lg:text-black duration-200 lg:bg-transparent border-black hover:bg-[#1E0C51] hover:text-white"
          >
            Explore All Services
          </Link>
        </motion.div>
      </main>
      <main className="lg:p-20 p-10 servicedots">
        <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 200, y: 0 }}
              whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 50 }} className="flex justify-center text-center text-3xl font-semibold">
          <h1>
            Why choose <span className="text-[#2745AE]">99 Services</span>
          </h1>
        </motion.div>
        <motion.div
              initial={{ opacity: 0, scale: 0.9, x: -200, y: 0 }}
              whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 50 }} className="grid lg:grid-cols-4 gap-8 pt-20">
          <div className="border-b-4 drop-shadow-xl   border-[#00AAFF] bg-[#F4F4F4] duration-200 hover:text-white hover:bg-gradient-to-br from-[#1E0C51] group to-[#441BB7] py-10 px-5">
            <div className="flex justify-center">
              <div className="">
                <div className="flex justify-center">
                  <img
                    src="/services/sv1.png"
                    alt=""
                    className="w-[80px] group-hover:invert "
                  />
                </div>
                <div className="flex justify-center text-center pt-2">
                  <h1 className="font-semibold text-xl">
                    Expertise and Professionalism
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="border-b-4 drop-shadow-xl   border-[#00AAFF] bg-[#F4F4F4] duration-200 hover:text-white hover:bg-gradient-to-br from-[#1E0C51] group to-[#441BB7] py-10 px-5">
            <div className="flex justify-center">
              <div className="">
                <div className="flex justify-center">
                  <img
                    src="/services/sv2.png"
                    alt=""
                    className="w-[80px] group-hover:invert"
                  />
                </div>
                <div className="flex justify-center text-center pt-2">
                  <h1 className="font-semibold text-xl">
                    Proven track <br /> records
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="border-b-4 drop-shadow-xl   border-[#00AAFF] bg-[#F4F4F4] duration-200 hover:text-white hover:bg-gradient-to-br from-[#1E0C51] group to-[#441BB7] py-10 px-5">
            <div className="flex justify-center">
              <div className="">
                <div className="flex justify-center">
                  <img
                    src="/services/sv3.png"
                    alt=""
                    className="w-[80px] group-hover:invert"
                  />
                </div>
                <div className="flex justify-center text-center pt-2">
                  <h1 className="font-semibold text-xl">
                    Personalized customer experience
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="border-b-4 drop-shadow-xl   border-[#00AAFF] bg-[#F4F4F4] duration-200 hover:text-white hover:bg-gradient-to-br from-[#1E0C51] group to-[#441BB7] py-10 px-5">
            <div className="flex justify-center">
              <div className="">
                <div className="flex justify-center">
                  <img
                    src="/services/sv4.png"
                    alt=""
                    className="w-[80px] group-hover:invert"
                  />
                </div>
                <div className="flex justify-center text-center pt-2">
                  <h1 className="font-semibold text-xl">
                    Wide range of <br /> services
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default Services;
