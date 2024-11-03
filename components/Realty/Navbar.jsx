"use client";
import React, { useEffect, useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { motion } from "framer-motion";
import Link from "next/link";
import { Drawer } from "@mui/material";
import { IoIosArrowForward } from "react-icons/io";
import { LuUser } from "react-icons/lu";
import { usePathname, useRouter } from "next/navigation";
import { IoMdArrowDropdown } from "react-icons/io";

import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const path = usePathname();
  useEffect(() => {
    let lan = localStorage.getItem("lang");
    if (lang === null) {
      localStorage.setItem("lang", "en");
    } else {
      setLang(lan);
    }
  }, []);
  const [show, setShow] = useState(false);
  const handleOpen = () => setShow(!show);

  const router = useRouter();

  const [lang, setLang] = useState("en");
  const [open, setOpen] = useState(false);
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const handleLanguage = (e) => {
    let lan = e.target.value;
    if (lan === "ru") {
      setLang("ru");
      localStorage.setItem("lang", "ru");
      location.reload();
    } else if (lan == "ge") {
      setLang("ge");
      localStorage.setItem("lang", "ge");
      location.reload();
    } else {
      setLang("en");
      localStorage.setItem("lang", "en");
      location.reload();
    }
  };

  const handleLang = (lan) => {
    if (lan === "ru") {
      setLang("ru");
      localStorage.setItem("lang", "ru");
      location.reload();
    } else if (lan == "ge") {
      setLang("ge");
      localStorage.setItem("lang", "ge");
      location.reload();
    } else {
      setLang("en");
      localStorage.setItem("lang", "en");
      location.reload();
    }
  };

  return (
    <div className="fixed w-full z-[50] bg-white">
      <Dialog
        open={show}
        handler={handleOpen}
        className=" bg-gray-100 text-black"
        style={{ maxHeight: "calc(100vh - 200px)" }}
      >
        <DialogHeader className="flex justify-between">
          {lang === "en" ? (
            <span> Set Language</span>
          ) : lang === "ge" ? (
            <span>ენის დაყენება</span>
          ) : (
            <span>Установить язык</span>
          )}
          <IoClose onClick={handleOpen} />
        </DialogHeader>
        <DialogBody>
          <div className="">
            <div className="grid">
              <div
                onClick={() => handleLang("en")}
                className="px-5 py-5 hover:bg-blue-400 text-black flex gap-5 items-center justify-start"
              >
                <div className="">
                  <img
                    src="/realty/united-kingdom.png"
                    alt=""
                    className="w-[40px]"
                  />
                </div>
                <div className="">English</div>
              </div>
              <div
                onClick={() => handleLang("ge")}
                className="px-5 py-5 hover:bg-blue-400 text-black flex gap-5 items-center justify-start"
              >
                <div className="">
                  <img src="/realty/georgia.png" alt="" className="w-[40px]" />
                </div>
                <div className="">Georgian</div>
              </div>
              <div
                onClick={() => handleLang("ru")}
                className="px-5 py-5 hover:bg-blue-400 text-black flex gap-5 items-center justify-start"
              >
                <div className="">
                  <img src="/realty/russia.png" alt="" className="w-[40px]" />
                </div>
                <div className="">Russian</div>
              </div>
            </div>
          </div>
        </DialogBody>
        <DialogFooter>
          <button
            onClick={handleOpen}
            className="text-white bg-[#00A3FF] px-4 py-2 ml-4 rounded-lg"
          >
            Close
          </button>
        </DialogFooter>
      </Dialog>
      <main className="flex justify-between items-center px-10 shadow-md lg:px-20 py-5">
        <section className="flex gap-2 items-center">
          <img src="/99groups.svg" alt="Logo" width={160} height={160} />
        </section>
        <section className="lg:flex hidden items-center gap-10">
          <Link
            href={"/realty"}
            className={
              path === ("/realty/" || "/realty")
                ? "underline underline-offset-4"
                : "hover:underline underline-offset-4"
            }
          >
            {lang === "en" ? (
              <span>Home</span>
            ) : lang === "ge" ? (
              <span>მთავარი</span>
            ) : (
              <span>Дом</span>
            )}
          </Link>
          <Link href={"/realty/students"}  className={
              path === ("/realty/students/" || "/realty/students")
                ? "underline underline-offset-4"
                : "hover:underline underline-offset-4"
            }>
            {lang === "en" ? (
              <span>For Students</span>
            ) : lang === "ge" ? (
              <span>სტუდენტებისთვის</span>
            ) : (
              <span>Для студентов</span>
            )}
          </Link>
          <Link href={"/realty/trend"} className={
              path === ("/realty/trend/" || "/realty/trend")
                ? "underline underline-offset-4"
                : "hover:underline underline-offset-4"
            }>
            {lang === "en" ? (
              <span>Trending Projects</span>
            ) : lang === "ge" ? (
              <span>ტრენდული პროექტები</span>
            ) : (
              <span>Трендовые проекты</span>
            )}
          </Link>
          <Link href={"/realty/popular"} className={
              path === ("/realty/popular/" || "/realty/popular")
                ? "underline underline-offset-4"
                : "hover:underline underline-offset-4"
            }>
            {lang === "en" ? (
              <span>Popular Projects</span>
            ) : lang === "ge" ? (
              <span>პოპულარული პროექტები</span>
            ) : (
              <span>Популярные проекты</span>
            )}
          </Link>
        </section>

        <section className="flex gap-5">
          <section className="flex gap-3 lg:gap-8">
            {/* <div className="">
              <select
                name="lang"
                id="lang"
                onChange={handleLanguage}
                value={lang}
                className="w-full px-2 py-1 focus:outline-none rounded-md ring-gray-200 ring-[1px] ring-offset-2"
              >
                <option value={"en"}>EN</option>
                <option value={"ge"}>Georgian</option>
                <option value={"ru"}>Russian</option>
              </select>
            </div> */}
            <div className="">
              <button
                onClick={handleOpen}
                className="py-1 px-2 rounded-xl border-2 flex gap-2 items-center"
              >
                {lang === "en" ? (
                  <div className="flex gap-2 items-center">
                    <div className="">
                      <img
                        src="/realty/united-kingdom.png"
                        alt=""
                        className="w-[30px]"
                      />
                    </div>
                    <div className="">EN</div>
                  </div>
                ) : lang === "ge" ? (
                  <div className="flex gap-2 items-center">
                    <div className="">
                      <img
                        src="/realty/united-kingdom.png"
                        alt=""
                        className="w-[30px]"
                      />
                    </div>
                    <div className="">GE</div>
                  </div>
                ) : (
                  <div className="flex gap-2 items-center">
                    <div className="">
                      <img
                        src="/realty/united-kingdom.png"
                        alt=""
                        className="w-[30px]"
                      />
                    </div>
                    <div className="">RU</div>
                  </div>
                )}
                <div className="">
                  <IoMdArrowDropdown className="text-sm" />
                </div>
              </button>
            </div>
            <div className="flex lg:hidden items-center">
              <IoIosMenu className="text-3xl" onClick={toggleDrawer(true)} />
            </div>
            <Link
              href={"/realty/#contact"}
              className="border px-4 py-1 rounded-xl lg:flex hidden items-center gap-2 hover:text-white duration-200 hover:bg-black/80"
            >
              {/* <LuUser /> */}
              <h1>
                {lang === "en" ? (
                  <span>Contact us</span>
                ) : lang === "ge" ? (
                  <span>Დაგვიკავშირდით</span>
                ) : (
                  <span>Связаться с нами</span>
                )}
              </h1>
            </Link>
          </section>
        </section>
      </main>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        <main className="block w-screen max-h-[100vh]  bg-gradient-to-b from-white to-gray-200 h-full relative z-[5]">
          <section
            className="flex justify-start p-10"
            onClick={toggleDrawer(false)}
          >
            <h1 className="opacity-80 hover:opacity-100 duration-200 font-bold text-xl">
              &lt;{" "}
              {lang === "en" ? (
                <span>back</span>
              ) : lang === "ge" ? (
                <span>უკან</span>
              ) : (
                <span>назад</span>
              )}
            </h1>
          </section>
          <section className="montserrat px-[50px]">
            <h1 className=" text-3xl text-center">
              {lang === "en" ? (
                <span>menu</span>
              ) : lang === "ge" ? (
                <span>მენიუ</span>
              ) : (
                <span>меню</span>
              )}
            </h1>
            <div className="pt-10 grid gap-6">
              <Link href={"/realty"} onClick={toggleDrawer(false)}>
                <div className="flex justify-between montserrat items-center">
                  <h1 className="text-2xl">
                    {" "}
                    {lang === "en" ? (
                      <span>Home</span>
                    ) : lang === "ge" ? (
                      <span>მთავარი</span>
                    ) : (
                      <span>Дом</span>
                    )}
                  </h1>
                  <IoIosArrowForward className="text-2xl" />
                </div>
              </Link>
              <Link href={"/realty/students"} onClick={toggleDrawer(false)}>
                <div className="flex justify-between montserrat items-center">
                  <h1 className="text-2xl">
                    {lang === "en" ? (
                      <span>For Students</span>
                    ) : lang === "ge" ? (
                      <span>სტუდენტებისთვის</span>
                    ) : (
                      <span>Для студентов</span>
                    )}
                  </h1>
                  <IoIosArrowForward className="text-2xl" />
                </div>
              </Link>
              <Link href={"/realty/trend"} onClick={toggleDrawer(false)}>
                <div className="flex justify-between montserrat items-center">
                  <h1 className="text-2xl">
                    {" "}
                    {lang === "en" ? (
                      <span>Trending Projects</span>
                    ) : lang === "ge" ? (
                      <span>ტრენდული პროექტები</span>
                    ) : (
                      <span>Трендовые проекты</span>
                    )}
                  </h1>
                  <IoIosArrowForward className="text-2xl" />
                </div>
              </Link>
              <Link href={"/realty/popular"} onClick={toggleDrawer(false)}>
                <div className="flex justify-between montserrat items-center">
                  <h1 className="text-2xl">
                    {lang === "en" ? (
                      <span>Popular Projects</span>
                    ) : lang === "ge" ? (
                      <span>პოპულარული პროექტები</span>
                    ) : (
                      <span>Популярные проекты</span>
                    )}
                  </h1>
                  <IoIosArrowForward className="text-2xl" />
                </div>
              </Link>
            </div>
          </section>

          <section className="flex justify-start items-end pt-40 px-10 gap-2">
            <div className="">
              <h1 className=" lg:text-4xl text-2xl font-bold">Contact</h1>
              <div className="grid gap-2 pt-3">
                <div className="opacity-80 hover:opacity-100 duration-200">
                  <Link href={"tel:+995574893961"}>
                    <h1 className="font-bold">Phone Number</h1>
                    <h1>+995 574 89 39 61</h1>
                  </Link>
                </div>
                <div className="opacity-80 hover:opacity-100 duration-200">
                  <Link href={"mailto:info@99group.org"}>
                    <h1 className="font-bold">Email Address</h1>
                    <h1 className="underline underline-offset-2">
                      info@99group.org
                    </h1>
                  </Link>
                </div>

                <div className="opacity-80 hover:opacity-100 duration-200">
                  <div>
                    <h1 className="font-bold">Location</h1>
                    <h1>
                      Georgia, Rustavi city, Firosmani <br /> street, N 10
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </Drawer>
    </div>
  );
};

export default Navbar;
