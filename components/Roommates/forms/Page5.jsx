"use client";
import Header from "@/components/Roommates/forms/Header";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { IoIosArrowBack } from "react-icons/io";
import { IoHomeSharp } from "react-icons/io5";
const Page5 = () => {
  const router = useRouter();
  const [budget, setBudget] = useState(1500);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("hi");
    sessionStorage.setItem("budget",budget)
    router.push("/roommates/6");
  };
  return (
    <form onSubmit={handleSubmit} className="h-[92vh] overflow-hidden forms">
      <Header />
      <Link
        href={"/roommates/4"}
        className="absolute p-2 rounded-full bg-white/60 lg:top-[45%] left-10 z-[10]"
      >
        <IoIosArrowBack className="text-2xl" />
      </Link>
      <motion.div
        initial={{ opacity: 0, scale: 1.4, x: 200 }}
        whileInView={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 50 }}
        className="flex justify-center w-full relative z-[2] h-full"
      >
        <section>
          <div className="flex justify-center">
            <img src="/roommates/fp5.png" alt="" className="w-[200px]" />
          </div>
          <div className="text-center font-bold text-white py-2">
            <h1>Hey Buddy !!</h1>

            <h1>What&apos;s you Name ?</h1>
          </div>
          <div className="flex justify-center">
            <div className="">
              <div className="flex justify-center">
                <IoHomeSharp className="text-xl text-blue-600 " />
              </div>
              <h1 className="text-white text-sm text-center">$200</h1>
            </div>
            <div className="flex flex-col z-10 mt-1">
              <input
                type="range"
                min="200"
                max="3000"
                step="200"
                name="Pricing"
                defaultValue={1500}
                onChange={(e) => setBudget(e.target.value)}
                required
                className=" w-full border-none focus:outline-none focus:ring-blue-500 focus:ring-opacity-50 rounded-lg"
              />
              <span className="text-center mt-2 text-base text-white font-bold ">
                ${budget}
              </span>
            </div>
            <div className="">
              <div className="flex justify-center">
                <IoHomeSharp className="text-xl text-blue-600 " />
              </div>
              <h1 className="text-white text-sm text-center">$3000</h1>
            </div>
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
              src="/roommates/buildimg.png"
              alt="buildings"
              className="w-full object-cover h-[250px] pb-[80px]"
            />
          </motion.div>
        </section>
        <section className="absolute bottom-[50px]  w-full flex justify-center">
          <button
            type="submit"
            className="flex justify-center duration-150 hover:scale-105 relative z-[10] cursor-pointer mr-10"
          >
            <img src="/roommates/bus2.png" alt="" className="w-[200px]" />
            <h1 className="font-bold text-xl text-white ml-[-100px] pt-2">
              Next
            </h1>
          </button>
        </section>
        <section className="bg-black h-[80px] w-full absolute z-[2] bottom-0"></section>
      </main>
    </form>
  );
};

export default Page5;
