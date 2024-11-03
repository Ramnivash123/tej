"use client";
import Header from "@/components/Roommates/forms/Header";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { IoIosArrowBack } from "react-icons/io";
const Page1 = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "") {
      console.log("hell");
    } else {
      console.log("hi");
      sessionStorage.setItem("name",name)
      router.push("/roommates/2");
    }
  };
  return (
    <form onSubmit={handleSubmit} className="h-[92vh] overflow-hidden forms">
      <Header />
      <motion.div
        initial={{ opacity: 0, scale: 1.4, x: 200 }}
        whileInView={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 50 }}
        className="flex justify-center w-full relative z-[2] h-full"
      >
        <section>
          <div className="flex justify-center">
            <img src="/roommates/fp1.png" alt="" className="w-[200px]" />
          </div>
          <div className="text-center font-bold text-white py-2">
            <h1>Hey Buddy !!</h1>

            <h1>What&apos;s you Name ?</h1>
          </div>
          <div className="flex justify-center">
            <input
              type="text"
              className="py-2 px-5 focus:outline-none rounded-xl"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
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
              className="w-full h-[250px] object-cover pb-[80px] "
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

export default Page1;
