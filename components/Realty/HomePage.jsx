"use client";
import React, { useEffect, useLayoutEffect, useState } from "react";
import Navbar from "./Navbar";
import { CiSearch } from "react-icons/ci";
import { MdOutlineTune } from "react-icons/md";
import { IoHeartOutline } from "react-icons/io5";
import { IoBed } from "react-icons/io5";
import { FaBath } from "react-icons/fa";
import { RiRulerFill } from "react-icons/ri";
import { RiArrowDownDoubleLine } from "react-icons/ri";
import { FaHome } from "react-icons/fa";
import { LuPhoneCall } from "react-icons/lu";
import { FaWhatsapp } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { FaCircleArrowRight } from "react-icons/fa6";
import Link from "next/link";
import Footer from "./Footer";

const HomePage = () => {
  useLayoutEffect(() => {
    const language = () => {
      let lan = localStorage.getItem("lang");
      if (lan === null) {
        localStorage.setItem("lang", "en");
      } else {
        setLang(lan);
      }
    };
    language();
  }, []);
  const [lang, setLang] = useState("en");
  return (
    <div>
      <section>
        <Navbar />
      </section>
      <main className="lg:px-10 min-h-[100vh] hidden lg:flex items-center justify-center pt-24 ">
        <section className="lg:grid hidden lg:grid-cols-2 p-3 rounded-2xl lg:bg-gray-100 w-full">
          <div className=" py-5 px-5">
            <div className="flex flex-col justify-between h-full">
              <div className="">
                <div className=" flex items-center gap-2 text-gray-400">
                  <FaHome className="text-xl" />
                  <h1>99 Groups</h1>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="text-center">
                  <h1 className="text-gray-500">
                    {lang === "en" ? (
                      <span>Build Your Dreams with</span>
                    ) : lang === "ge" ? (
                      <span>ააშენე შენი ოცნებები</span>
                    ) : (
                      <span>Стройте свои мечты с</span>
                    )}
                  </h1>
                  <h1 className="text-6xl font-bold bg-gradient-to-tr from-white to-cyan-600 p-2 bg-clip-text text-transparent inline-block">
                    99 Groups
                  </h1>
                  <h1 className="text-4xl pt-3">
                    {lang === "en" ? (
                      <span>Real Estate in Georgia</span>
                    ) : lang === "ge" ? (
                      <span>უძრავი ქონება საქართველოში</span>
                    ) : (
                      <span>Недвижимость в Грузии</span>
                    )}
                  </h1>
                  <h2 className="text-3xl">
                    {lang === "en" ? (
                      <span>Ideal for Living and Investing</span>
                    ) : lang === "ge" ? (
                      <span>იდეალურია საცხოვრებლად და ინვესტირებისთვის</span>
                    ) : (
                      <span>Идеально для жизни и инвестиций</span>
                    )}
                  </h2>
                  {/* <h1 className="text-4xl pt-3">Real Estate in Georgia</h1>
                  <h2 className="text-3xl">Ideal for Living and Investing</h2> */}
                </div>
              </div>
              <div className="flex justify-between">
                <Link
                  href={"/realty/#contact"}
                  className="flex items-center gap-2 bg-black rounded-2xl p-1 text-white pr-3"
                >
                  <div className="p-2 rounded-full bg-gray-200 text-black">
                    <LuPhoneCall className="text-zinc-600 " />
                  </div>
                  {lang === "en" ? (
                    <span>Contact now</span>
                  ) : lang === "ge" ? (
                    <span>დაუკავშირდით ახლავე</span>
                  ) : (
                    <span>связаться сейчас</span>
                  )}
                </Link>
                <div className="flex gap-3 items-center px-5">
                  <div className="p-2 rounded-full bg-gray-200">
                    <FaWhatsapp className="text-zinc-600 " />
                  </div>
                  <div className="p-2 rounded-full bg-gray-200">
                    <BiLogoGmail className="text-zinc-600 " />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="realtyhome hidden bg-red-300 h-[85vh] w-full rounded-2xl lg:flex flex-col justify-between">
            {/* <img
              src="/realty/herobg5.jpg"
              alt=""
              className="object-center h-[80vh] w-full object-cover rounded-2xl"
            /> */}
            <div className="text-white p-5 flex justify-between">
              <div className="">
                <h1>
                  {lang === "en" ? (
                    <span> More than 1000+ real <br /> estate projects</span>
                  ) : lang === "ge" ? (
                    <span>1000-ზე მეტი უძრავი <br /> ქონების პროექტი</span>
                  ) : (
                    <span>Более 1000+ проектов <br /> недвижимости</span>
                  )}
                </h1>
              </div>
              <div className="px-3  flex items-center rounded-xl border border-white ">
                <FaHome className="text-xl" />
              </div>
            </div>
            <div className="flex justify-end p-5">
              <Link
                href={"/realty/explore"}
                className="bg-white rounded-2xl px-4 py-2 text-center flex gap-3 items-center hover:scale-105 duration-200"
              >
                <div className="">
                  <h1>
                    {lang === "en" ? (
                      <span>Explore places in</span>
                    ) : lang === "ge" ? (
                      <span>გამოიკვლიეთ ადგილები</span>
                    ) : (
                      <span>Исследуйте места в</span>
                    )}
                  </h1>
                  <h1>
                    {lang === "en" ? (
                      <span>Georgia</span>
                    ) : lang === "ge" ? (
                      <span>საქართველოს</span>
                    ) : (
                      <span>Грузия</span>
                    )}
                  </h1>
                </div>
                <div className="">
                  <MdKeyboardDoubleArrowDown className="text-xl" />
                </div>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <main className="lg:hidden min-h-[100vh] pt-16">
        <section className="realtyhomesm h-[95vh] bg-cover  ">
          <div className="backdrop-blur-[0px] flex flex-col justify-between h-full px-10 py-10 ">
            <div className="max-w-[600px] pr-10">
              <h1 className=" text-3xl font-semibold ">
                {lang === "en" ? (
                  <span>Find Your Dream Home Property</span>
                ) : lang === "ge" ? (
                  <span>იპოვეთ თქვენი ოცნების სახლის საკუთრება</span>
                ) : (
                  <span>Найдите дом своей мечты</span>
                )}
              </h1>
              <h3 className="text-[18px]">
                {lang === "en" ? (
                  <span>Discover your dream home and make it your paradise
</span>
                ) : lang === "ge" ? (
                  <span>
                    აღმოაჩინეთ თქვენი ოცნების სახლი და გახადეთ ის თქვენი სამოთხე
                  </span>
                ) : (
                  <span>
                    Откройте для себя дом своей мечты и сделайте его своим раем
                  </span>
                )}{" "}
              </h3>
            </div>
            <div className="pb-10 grid w-full">
              <Link
                href={"/realty/explore"}
                className="bg-[#00A3FF] text-white font-semibold w-full text-2xl text-center py-2 rounded-xl"
              >
                {lang === "en" ? (
                  <span>Explore Now</span>
                ) : lang === "ge" ? (
                  <span>გამოიკვლიეთ ახლა</span>
                ) : (
                  <span>Исследуйте сейчас</span>
                )}
              </Link>
            </div>
          </div>
        </section>
      </main>
      {/* <main className="py-10 px-10 lg:px-20">
        
        <div className="" id="contact">
          <h1 className="text-3xl font-semibold">Contact</h1>

          <div className="py-5 text-justify">
            <h5>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
              repudiandae veniam obcaecati recusandae ad. Tempora neque optio ad
              hic cupiditate reiciendis soluta atque illo vero recusandae! Quas
              a suscipit facere. Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Eos nulla rem rerum nostrum omnis distinctio
              quos dicta sit ea sint iure recusandae sequi libero, ullam vel
              modi. Iure, dolor incidunt!
            </h5>
          </div>
        </div>
        <div className="grid gap-5 pt-3">
          <div className="opacity-90 hover:opacity-100 duration-200">
            <Link href={"tel:+995574893961"}>
              <h1 className="font-semibold text-xl">Phone Number</h1>
              <h1>+995 574 89 39 61</h1>
            </Link>
          </div>
          <div className="opacity-90 hover:opacity-100 duration-200">
            <Link href={"mailto:info@99group.org"}>
              <h1 className="font-semibold text-xl">Email Address</h1>
              <h1 className="underline underline-offset-2">info@99group.org</h1>
            </Link>
          </div>

          <div className="opacity-90 hover:opacity-100 duration-200">
            <div>
              <h1 className="font-semibold text-xl">Location</h1>
              <h1>
                Georgia, Rustavi city, Firosmani <br /> street, N 10
              </h1>
            </div>
          </div>
        </div>
      </main> */}
      <section className="mt-20">
        <Footer />
      </section>
    </div>
  );
};

export default HomePage;
