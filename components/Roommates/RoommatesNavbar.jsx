import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const RoommatesNavbar = () => {
  return (
    <div className="">
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: -40 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
      >
        <main className="lg:bg-white rounded-2xl lg:px-20 px-5 py-5 lg:shadow-sm relative z-[2]">
          <div className="flex justify-between">
            <section>
              <div className="flex items-center gap-2">
                <img src="/logo.png" alt="" />
                <h1 className="font-bold text-cyan-950">99 ROOMMATES</h1>
              </div>
            </section>
            <section className="hidden lg:flex gap-20">
              <div className="">
                <Link
                  href={"/roommates"}
                  className="underline underline-offset-4 text-blue-400"
                >
                  Home
                </Link>
              </div>
              <div className="">
                <Link href={"/"}>99 Groups</Link>
              </div>
              <div className="">
                <Link
                  href={"/roommates/1"}
                  target="_blank"
                  className="bg-black px-4 py-2 rounded-md text-white"
                >
                  Find Roommates
                </Link>
              </div>
            </section>
          </div>
        </main>
      </motion.div>
    </div>
  );
};

export default RoommatesNavbar;
