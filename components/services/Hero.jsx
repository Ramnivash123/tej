import Link from "next/link";
import React, { useEffect } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])
  return (
    <div className="grid relative h-full">
      <div className="  serviceshome min-h-[100vh] flex justify-center items-center w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: -0, y: 200 }}
          whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 50 }}
          className="max-w-[800px] px-10"
        >
          <div className="h-[160px] lg:hidden"></div>
          <h1 className="lg:text-5xl text-3xl text-center lora font-semibold">
            Your Trusted Partner for All Your Academic and Legal Needs
          </h1>
          <h5 className="lg:text-2xl text-xl pt-2 text-center lg:leading-normal leading-[32px]  lora">
            99 services is dedicated to provide comprehensive tailored solutions
            that meet the unique needs of the students. we prioritize
            personalized attention and a deep understanding experience, making
            us the ideal partner in solving student issues
          </h5>
          <div className="p-6 pt-14 lg:pt-3 flex justify-center">
            <Link
              href={"/services/#contact"}
              className="lg:text-xl font-semibold text-white px-6 py-2 bg-[#040A60] rounded-xl"
            >
              Get Free Consultation
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
