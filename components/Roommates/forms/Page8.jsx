"use client";
import Header from "@/components/Roommates/forms/Header";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { IoIosArrowBack } from "react-icons/io";
const Page8 = () => {
  const router = useRouter();
  const [roommates, setRoomates] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (roommates === "") {
      console.log("hell");
    } else {
      console.log("hi");
      sessionStorage.setItem("roommates",roommates)
      router.push("/roommates/9");
    }
  };
  return (
    <form onSubmit={handleSubmit} className="h-[100vh] overflow-hidden forms">
      <Header />
      <Link
        href={"/roommates/7"}
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
            <img src="/roommates/fp8.png" alt="" className="w-[200px]" />
          </div>
          <div className="text-center font-bold text-white text-[20px] py-2">
            <h1>How many roommates  are you <br /> looking for?</h1>
          </div>
          <div className="flex justify-center">
          <div className="pr-2 bg-white rounded-xl w-full">
              <select
                name=""
                id=""
                className={
                  roommates === ""
                    ? "py-2 px-5 focus:outline-none rounded-xl w-full text-gray-400"
                    : "py-2 px-5 focus:outline-none rounded-xl w-full "
                }
                placeholder="Gender"
                value={roommates}
                onChange={(e) => setRoomates(e.target.value)}
                required
              >
                <option value="" disabled className="">
                  Number of Roommates
                </option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
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

export default Page8;
