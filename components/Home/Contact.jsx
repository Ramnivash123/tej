"use client";
import Link from "next/link";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import axios from "axios";
import { API } from "@/config/config";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${API}/send-email-services`, {
        name,
        email,
        phone,
      });
      console.log("Message sent successfully!");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <main className="bg-neutral-200 relative z-[2] mt-5 overflow-hidden">
        <section className="lg:px-20 px-10 py-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: -100 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 50 }}
            className="text-black max-w-[450px] hidden lg:block"
          >
            <h1 className="text-2xl mont font-bold">Contact</h1>
            <h5>
              We&apos;d love to hear from you! Whether you have a question about
              our services, need assistance, or just want to give feedback,
              we&apos;re here to help. Reach out to us through any of the
              methods below
            </h5>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: -100, rotate: 20 }}
            whileInView={{ opacity: 1, scale: 1, x: 0, rotate: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 50 }}
            className="text-black max-w-[450px] md:max-w-full lg:hidden "
          >
            <h1 className="text-2xl mont font-bold">Contact</h1>
            <h5>
              We&apos;d love to hear from you! Contact us via email, phone, or
              the form below.
            </h5>
            <div className="md:flex justify-center w-full">
            <div className=" bg-blue-50 max-w-[500px] md:min-w-[400px] m-auto rounded-2xl lg:px-20 px-10 py-10 mt-5">
              <form action="" onSubmit={handleSubmit}>
                <h1 className="mont text-xl font-bold text-center pb-5 text-black">
                  Get in touch
                </h1>
                <div className="grid gap-5 place-items-center text-black  ">
                  <input
                    type="text"
                    name=""
                    id=""
                    className="bg-inherit border-black/50 border-b-2 w-full px-5 py-3 focus:outline-none"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <input
                    type="email"
                    name=""
                    id=""
                    className="bg-inherit border-black/50 border-b-2 w-full px-5 py-3 focus:outline-none"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <input
                    type="tel"
                    name=""
                    id=""
                    className="bg-inherit border-black/50 border-b-2 w-full px-5 py-3 focus:outline-none"
                    placeholder="Phone No"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                  <input
                    type="submit"
                    value="Submit"
                    className="bg-blue-900 w-full text-white py-2 rounded-xl mt-5"
                  />
                </div>
              </form>
            </div>
            </div>
          </motion.div>
        </section>
        <section className="grid  lg:grid-cols-2">
          <div className="lg:flex grid order-2 lg:order-1">
            <div className="lg:max-w-[100px] flex lg:flex-col lg:gap-10 gap-20 order-2 lg:order-1 justify-center lg:justify-end py-20 px-10 text-black text-xl">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 80 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 200, damping: 50 }}
                className="relative z-[5]"
              >
                <Link href={"/"}>
                  <FaInstagram />
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 80 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 200, damping: 50 }}
                className="relative z-[5]"
              >
                <Link href={"/"}>
                  <FaFacebook />
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 40 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 200, damping: 50 }}
                className="relative z-[5]"
              >
                <Link href={"/"}>
                  <FaXTwitter />
                </Link>
              </motion.div>
            </div>
            <div className="flex justify-center lg:items-end lg:py-14 w-full order-1 lg:order-2 ">
              <div className="text-center text-black grid gap-8 max-w-[350px]">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 180 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ type: "spring", stiffness: 200, damping: 50 }}
                  className="relative z-[5]"
                >
                  <h1 className="text-xl mont font-bold">Email</h1>
                  <h5>info@the99group.org</h5>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 120 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ type: "spring", stiffness: 200, damping: 50 }}
                  className="relative z-[4]"
                >
                  <h1 className="text-xl mont font-bold">Phone number</h1>
                  <h5>+995574893961</h5>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ type: "spring", stiffness: 200, damping: 50 }}
                  className="relative z-[3]"
                >
                  <h1 className="text-xl mont font-bold">Address</h1>
                  <h1>
                    Georgia, Rustavi city, Firosmani <br /> street, N 10
                  </h1>
                </motion.div>
              </div>
            </div>
          </div>
          <div className="p-10 order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 100 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 50 }}
              className=" bg-blue-50 max-w-[500px] lg:block hidden m-auto rounded-2xl lg:px-20 px-10 py-10"
            >
              <form action="" onSubmit={handleSubmit}>
                <h1 className="mont text-xl font-bold text-center pb-5">
                  Get in touch
                </h1>
                <div className="grid gap-5 place-items-center  ">
                  <input
                    type="text"
                    name=""
                    id=""
                    className="bg-inherit border-black/50 border-b-2 w-full px-5 py-3 focus:outline-none"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <input
                    type="email"
                    name=""
                    id=""
                    className="bg-inherit border-black/50 border-b-2 w-full px-5 py-3 focus:outline-none"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <input
                    type="tel"
                    name=""
                    id=""
                    className="bg-inherit border-black/50 border-b-2 w-full px-5 py-3 focus:outline-none"
                    placeholder="Phone No"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                  <input
                    type="submit"
                    value="Submit"
                    className="bg-blue-800 w-full text-white py-2 rounded-xl mt-5"
                  />
                </div>
              </form>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Contact;
