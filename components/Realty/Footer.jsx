import Link from "next/link";
import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";


function Footer() {
  return (
    <div className="bg-black h-max relative bottom-0 font-inter text-white py-10"  id="contact" >
      <div className="lg:flex font-normal lg:justify-evenly font-inter px-10 grid gap-5">
        <div className="">
          <h1 className=" lg:text-3xl text-2xl font-bold">
          99 Group
          </h1>

          <h3 className="opacity-60 pt-3">Find Your dream home with 99 Group</h3>
        </div>
        <div className="">
          <h1 className=" lg:text-3xl text-2xl font-bold">Navigation</h1>
          <div className="grid lg:grid-cols-2 gap-2 pt-3">
            <Link
              href={"/"}
              className="opacity-60 hover:opacity-100 duration-200"
            >
              Home
            </Link>
            <Link
              href={"/roommates"}
              className="opacity-60 hover:opacity-100 duration-200"
            >
              99 Roommates
            </Link>
            <Link
              href={"/realty"}
              className="opacity-60 hover:opacity-100 duration-200"
            >
              99 Realty
            </Link>
          
            <Link
              href={"/services"}
              className="opacity-60 hover:opacity-100 duration-200"
            >
              99 Services
            </Link>
          </div>
        </div>
        <div className="">
          <h1 className=" lg:text-3xl text-2xl font-bold">Information</h1>
          <div className="grid gap-2 pt-3">
            <div className="opacity-60 hover:opacity-100 duration-200">
              <Link href={"tel:+995574893961"}>
                <h1 className="">Phone Number</h1>
                <h1>+995 574 89 39 61</h1>
              </Link>
            </div>
            <div className="opacity-60 hover:opacity-100 duration-200">
              <Link href={"mailto:info@99group.org"}>
                <h1 className="">Email Address</h1>
                <h1 className="underline underline-offset-2">
                  info@99group.org
                </h1>
              </Link>
            </div>

            <div className="opacity-60 hover:opacity-100 duration-200">
              <div>
                <h1 className="">Location</h1>
                <h1>
                  Georgia, Rustavi city, Firosmani <br /> street, N 10
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:flex hidden justify-center items-center gap-x-3 my-14">
        <p>Copyright 2024@ All rights reserved | This website was Built by</p>
        <Link href={"https://www.axolotron.com/"} target="_blank">
          <img src="/axolotron.svg" alt="Axolotron" className="w-[100px]" />
        </Link>
      </div>
      <div className="flex justify-center">
        <div className=" lg:hidden justify-center gap-x-3 py-5">
          <p>Copyright 2024@ All rights reserved by</p>
          <h1 className="font-bold text-center">99 groups LLC</h1>
        </div>
      </div>
      <div className="flex lg:hidden items-center justify-center gap-x-3 py-5">
        <p>This website was Built by</p>
        <Link href={"https://www.axolotron.com/"} target="_blank">
          <img src="/axolotron.svg" alt="Axolotron" className="w-[100px]" />
        </Link>
      </div>
      <div className="flex justify-center gap-x-16">
        <FaInstagram fontSize={25} />
        <FaFacebook fontSize={25} />
        <FaWhatsapp fontSize={25} />
      </div>
    </div>
  );
}

export default Footer;
