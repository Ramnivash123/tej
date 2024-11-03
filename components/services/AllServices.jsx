import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const AllServices = () => {
  return (
    <div>
      <main className="py-20 servicedots2 bg-contain bg-top">
        <section className="lg:px-20 px-10 ">
          <Link
            href={"/services"}
            className="opacity-60 hover:opacity-100 duration-200 font-bold text-xl"
          >
            &lt; Back
          </Link>
        </section>
        <section>
          <h1 className="lg:text-5xl pt-10 lora text-3xl font-semibold lg:text-center px-10">
            Our Services
          </h1>
        </section>
        <section className="grid lg:grid-cols-2 gap-8 lg:gap-10 lg:px-20 px-5 py-10">
          <div className="grid lg:grid-cols-2 gap-5 p-5 bg-[#F3F3F3] rounded-xl shadow-md max-w-[600px] m-auto">
            <div className="">
              <img
                src="/services/sc1.png"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full flex flex-col justify-between">
              <div className="">
                <h1 className="text-center lora text-xl font-bold">
                  Student Issues
                </h1>
                <h5>
                  We provide expert legal support for student visa applications,
                  academic disputes, and housing concerns. Let us help you
                  navigate the complexities of student life with ease.
                </h5>
              </div>
              <div className="w-full  grid">
                <Link
                  href={"/services/#contact"}
                  className="py-2 px-5 w-full h-auto text-white text-center hover:text-black duration-200  bg-[#2745AE] rounded-xl"
                >
                  Get Help
                </Link>
              </div>
            </div>
          </div>
          <div className="grid lg:grid-cols-2 gap-5 p-5 bg-[#F3F3F3] rounded-xl shadow-md max-w-[600px] m-auto">
            <div className="">
              <img
                src="/services/sc2.png"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full flex flex-col justify-between">
              <div className="">
                <h1 className="text-center lora text-xl font-bold">
                  University Transfers
                </h1>
                <h5>
                  We assist with the legal aspects of university transfers,
                  ensuring a smooth transition. Rely on us for expert advice and
                  support throughout the process.
                </h5>
              </div>
              <div className="w-full  grid">
                <Link
                  href={"/services/#contact"}
                  className="py-2 px-5 w-full h-auto text-white text-center hover:text-black duration-200  bg-[#2745AE] rounded-xl"
                >
                  Get Help
                </Link>
              </div>
            </div>
          </div>
          <div className="grid lg:grid-cols-2 gap-5 p-5 bg-[#F3F3F3] rounded-xl shadow-md max-w-[600px] m-auto">
            <div className="">
              <img
                src="/services/sc3.png"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full flex flex-col justify-between">
              <div className="">
                <h1 className="text-center lora text-xl font-bold">
                  Driver Licence Application{" "}
                </h1>
                <h5>
                  We guide you through the driver license application process,
                  handling legal paperwork and requirements. Trust our expertise
                  for a hassle-free experience.
                </h5>
              </div>
              <div className="w-full  grid">
                <Link
                  href={"/services/#contact"}
                  className="py-2 px-5 w-full h-auto text-white text-center hover:text-black duration-200  bg-[#2745AE] rounded-xl"
                >
                  Get Help
                </Link>
              </div>
            </div>
          </div>
          <div className="grid lg:grid-cols-2 gap-5 p-5 bg-[#F3F3F3] rounded-xl shadow-md max-w-[600px] m-auto">
            <div className="">
              <img
                src="/services/sc4.png"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full flex flex-col justify-between">
              <div className="">
                <h1 className="text-center lora text-xl font-bold">
                  Job Contracts
                </h1>
                <h5>
                  We offer legal assistance with job contracts, ensuring your
                  rights are protected and terms are clear. Rely on our
                  expertise for a secure employment agreement.
                </h5>
              </div>
              <div className="w-full  grid">
                <Link
                  href={"/services/#contact"}
                  className="py-2 px-5 w-full h-auto text-white text-center hover:text-black duration-200  bg-[#2745AE] rounded-xl"
                >
                  Get Help
                </Link>
              </div>
            </div>
          </div>
          <div className="grid lg:grid-cols-2 gap-5 p-5 bg-[#F3F3F3] rounded-xl shadow-md max-w-[600px] m-auto">
            <div className="">
              <img
                src="/services/sc5.png"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full flex flex-col justify-between">
              <div className="">
                <h1 className="text-center lora text-xl font-bold">
                  Visa Extention/ application
                </h1>
                <h5>
                  We provide expert legal support for visa applications and
                  extensions, ensuring a smooth and compliant process. Trust us
                  to handle your visa needs efficiently.
                </h5>
              </div>
              <div className="w-full  grid">
                <Link
                  href={"/services/#contact"}
                  className="py-2 px-5 w-full h-auto text-white text-center hover:text-black duration-200  bg-[#2745AE] rounded-xl"
                >
                  Get Help
                </Link>
              </div>
            </div>
          </div>
          <div className="grid lg:grid-cols-2 gap-5 p-5 bg-[#F3F3F3] rounded-xl shadow-md max-w-[600px] m-auto">
            <div className="">
              <img
                src="/services/sc6.png"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full flex flex-col justify-between">
              <div className="">
                <h1 className="text-center lora text-xl font-bold">
                  Bank Statement Service{" "}
                </h1>
                <h5>
                  We assist in obtaining and verifying bank statements for
                  various purposes, ensuring accuracy and compliance with legal
                  requirements.
                </h5>
              </div>
              <div className="w-full  grid">
                <Link
                  href={"/services/#contact"}
                  className="py-2 px-5 w-full h-auto text-white text-center hover:text-black duration-200  bg-[#2745AE] rounded-xl"
                >
                  Get Help
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="lflex lg:hidden justify-center px-10">
          <div className="max-w-[500px] ">
            <h1 className="lora text-xl font-semibold text-center">
              Explore our full range of services by contacting us directly.
              We're here to assist you with any legal need you may have.
            </h1>
            <div className="flex justify-center text-center pt-2">
              <Link
                href={"/services/#contact"}
                className="py-2 w-[300px] rounded-xl bg-[#1E0C51] text-white"
              >
                Contact us
              </Link>
            </div>{" "}
          </div>
        </section>
      </main>
    </div>
  );
};

export default AllServices;
