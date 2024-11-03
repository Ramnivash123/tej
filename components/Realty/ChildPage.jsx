"use client";
import React, { useEffect, useLayoutEffect, useState } from "react";
import Navbar from "./Navbar";
import { FaBath, FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoBed } from "react-icons/io5";
import { RiRulerFill } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa";
import { PiStepsFill } from "react-icons/pi";
import { PiPlantFill } from "react-icons/pi";
import { BsBricks } from "react-icons/bs";
import { IoWifi } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { LuParkingCircle } from "react-icons/lu";
import { TbAirConditioning } from "react-icons/tb";
import { PiTelevisionSimple } from "react-icons/pi";
import { FaSwimmingPool } from "react-icons/fa";
import { TbBorderCorners } from "react-icons/tb";
import { getSingleProperty } from "@/firebase/firestore";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";
import axios from "axios";
import Switch from "@mui/material/Switch";

const ChildPage = ({ id }) => {
  const [data, setData] = useState("");
  console.log(data);
  const [activeIndex, setActiveIndex] = useState(0);
  const [shortUrl, setShortUrl] = useState("");
  const [embedUrl, setEmbedUrl] = useState("");
  console.log("embed", embedUrl);
  console.log(shortUrl);
  const [checked, setChecked] = useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
    setPriceLan(event.target.checked);
  };

  console.log(checked, "c");

  const [priceLan, setPriceLan] = useState(true);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setActiveIndex(activeIndex === data.photos.length - 1 ? 0 : activeIndex + 1);
  //   }, 3000);
  //   return () => clearInterval(interval);
  // }, [activeIndex]);
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
  const [cnt, setCnt] = useState(false);

  const handleIncrement = () => {
    if (activeIndex === data.photos.length - 1) {
      setActiveIndex(0);
    } else {
      setActiveIndex(activeIndex + 1);
    }
  };
  const handleDecrement = () => {
    if (activeIndex === 0) {
      setActiveIndex(data.photos.length - 1);
    } else {
      setActiveIndex(activeIndex - 1);
    }
  };
  useEffect(() => {
    const fetch = async () => {
      const res = await getSingleProperty(id);
      setData(res);
      // if (res) {
      //   console.log("res", res);
      //   setShortUrl(res.maps);
      //   handleConvert(res.maps);
      // }
    };
    // const handleConvert = async (map) => {
    //   try {
    //     console.log("st");
    //     console.log("url", map);
    //     const response = await axios.get(`/api/map_url`, {
    //       params: { map },
    //     });
    //     const fullUrl = response.data.fullUrl;
    //     console.log("fu", fullUrl);

    //     // Extract necessary parts from the full URL
    //     const regex = /@([\d\.\,-]+),(\d+\.?\d*)z/;
    //     const match = fullUrl.match(regex);

    //     if (match) {
    //       const coordinates = match[1];
    //       const zoomLevel = match[2];

    //       // Create the embed URL
    //       const embedUrl = `https://www.google.com/maps/embed/v1/view?center=${coordinates}&zoom=${zoomLevel}&key=AIzaSyAK5JTHKwu7VtduxdcQVqvTpJTtKl8VwLI`;
    //       setEmbedUrl(embedUrl);
    //     } else {
    //       console.log("Could not extract coordinates from the URL");
    //     }
    //   } catch (error) {
    //     console.error("Error converting the URL:", error);
    //   }
    // };
    fetch();
  }, []);
  console.log(data);

  return (
    <div>
      <section>
        <Navbar />
      </section>
      <section></section>
      {data && (
        <main className=" bg-neutral-50 lg:pt-20 pt-16">
          <div className="lg:px-20 lg:py-10">
            <section className="w-full">
              <img
                src={data.photos[activeIndex]}
                alt=""
                className="w-full lg:rounded-2xl max-h-[300px] lg:max-h-[60vh] object-cover object-bottom"
              />
            </section>
            <section className="flex justify-between lg:px-14 px-3 md:px-8 relative z-[10] w-full lg:mt-[-35vh] mt-[-150px] lg:text-7xl text-4xl text-white lg:font-light">
              <div className="">
                <IoIosArrowBack onClick={handleDecrement} />
              </div>
              <div className="">
                <IoIosArrowForward onClick={handleIncrement} />
              </div>
            </section>
            <div className="lg:pt-[32vh] pt-[130px]"></div>
            {/* lg */}
            <div className="">
              <section className="lg:grid hidden lg:grid-cols-3 grid-cols-1 gap-y-5 lg:gap-x-10 py-10 w-full ">
                <div className="col-span-2  w-full">
                  <div className="p-5 shadow-md rounded-xl">
                    <div className="lg:flex justify-between">
                      <div className="">
                        <h1 className="monsterrat text-[#040A60] text-4xl font-semibold">
                          {lang === "en" ? (
                            <span>{data.title_en}</span>
                          ) : lang === "ge" ? (
                            <span>{data.title_ge}</span>
                          ) : (
                            <span>{data.title_ru}</span>
                          )}
                        </h1>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 opacity-70 pt-2">
                      <div className="">
                        <FaLocationDot />
                      </div>
                      <div className="">
                        <h1>
                          {lang === "en" ? (
                            <span>{data.location_en}</span>
                          ) : lang === "ge" ? (
                            <span>{data.location_ge}</span>
                          ) : (
                            <span>{data.location_ru}</span>
                          )}
                        </h1>
                      </div>
                    </div>
                    <div className="p-5 w-full">
                      <div className="w-full p-5 border-2 rounded-xl">
                        <div className="flex gap-x-16 text-black/70">
                          <div className="">
                            <div className="flex gap-3 items-center">
                              <TbBorderCorners className="text-3xl" />
                              <div className="text-sm">
                                <h1>
                                  {lang === "en" ? (
                                    <span>Area</span>
                                  ) : lang === "ge" ? (
                                    <span>ფართობი</span>
                                  ) : (
                                    <span>Область</span>
                                  )}
                                </h1>
                                <h1 className=" ">
                                  {data.sqm} m<sup>2</sup>
                                </h1>
                              </div>
                            </div>
                          </div>
                          <div className="">
                            <div className="flex gap-3 items-center">
                              <IoBed className="text-3xl" />
                              <div className="text-sm">
                                <h1>
                                  {lang === "en" ? (
                                    <span>Rooms</span>
                                  ) : lang === "ge" ? (
                                    <span>ოთახები</span>
                                  ) : (
                                    <span>Номера</span>
                                  )}
                                </h1>
                                <h1 className=" ">{data.rooms}</h1>
                              </div>
                            </div>
                          </div>
                          <div className="">
                            <div className="flex gap-3 items-center">
                              <FaBath className="text-3xl" />
                              <div className="text-sm">
                                <h1>
                                  {lang === "en" ? (
                                    <span>Bathrooms</span>
                                  ) : lang === "ge" ? (
                                    <span>სველი წერტილები</span>
                                  ) : (
                                    <span>ванные комнаты</span>
                                  )}
                                </h1>
                                <h1 className=" ">{data.bathrooms}</h1>
                              </div>
                            </div>
                          </div>
                          <div className="">
                            <div className="flex gap-3 items-center">
                              <PiStepsFill className="text-3xl" />

                              <div className="text-sm ">
                                <h1>
                                  {lang === "en" ? (
                                    <span>Floors</span>
                                  ) : lang === "ge" ? (
                                    <span>სართულები</span>
                                  ) : (
                                    <span>Этажи</span>
                                  )}
                                </h1>
                                <h1 className="">{data.floors}</h1>
                              </div>
                            </div>
                          </div>
                          {data.yard && data.yard ? (
                            <div className="">
                              <div className="flex gap-3 items-center">
                                <PiPlantFill className="text-3xl" />
                                <div className="text-sm">
                                  <h1>
                                    {lang === "en" ? (
                                      <span>Yard Area</span>
                                    ) : lang === "ge" ? (
                                      <span>ეზოს ფართი</span>
                                    ) : (
                                      <span>Площадь двора</span>
                                    )}
                                  </h1>
                                  <h1 className="">
                                    {data.yard_sqm} m<sup>2</sup>
                                  </h1>
                                </div>
                              </div>
                            </div>
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-justify my-5 p-5 shadow-md rounded-xl pt-3">
                    <h1 className="font-semibold text-2xl text-[#040A60] pb-5">
                      {lang === "en" ? (
                        <span>Description</span>
                      ) : lang === "ge" ? (
                        <span>აღწერა</span>
                      ) : (
                        <span>Описание</span>
                      )}
                    </h1>
                    <h1>
                      {lang === "en" ? (
                        <span>{data.desc_en}</span>
                      ) : lang === "ge" ? (
                        <span>{data.desc_ge}</span>
                      ) : (
                        <span>{data.desc_ru}</span>
                      )}
                    </h1>
                  </div>

                  {/* <div className="grid gap-3 lg:grid-cols-4 pt-5">
                <img
                  src="/realty/childc1.jpg"
                  alt=""
                  className="rounded-2xl h-[150px] lg:h-[120px] object-cover w-full"
                />
                <img
                  src="/realty/childc2.jpeg"
                  alt=""
                  className="rounded-2xl h-[150px] lg:h-[120px] object-cover w-full"
                />
                <img
                  src="/realty/childc3.jpg"
                  alt=""
                  className="rounded-2xl h-[150px] lg:h-[120px] object-cover w-full"
                />
                <img
                  src="/realty/childc4.jpg"
                  alt=""
                  className="rounded-2xl h-[150px] lg:h-[120px] object-cover w-full"
                />
              </div> */}
                  <div className="bg-white rounded-xl mt-5 shadow-md w-full p-5">
                    <h1 className="text-2xl text-[#040A60] font-semibold">
                      {lang === "en" ? (
                        <span> Additional Parameters</span>
                      ) : lang === "ge" ? (
                        <span>დამატებითი პარამეტრები</span>
                      ) : (
                        <span>Дополнительные параметры</span>
                      )}
                    </h1>
                    <div className="grid grid-cols-4 gap-5 pt-5">
                      <div className="">
                        <div className="flex gap-3 items-center">
                          <BsBricks />
                          <h1>
                            {lang === "en" ? (
                              <span>Status</span>
                            ) : lang === "ge" ? (
                              <span>სტატუსი</span>
                            ) : (
                              <span>Положение дел</span>
                            )}
                          </h1>
                        </div>
                        <div className="text-black/50 text-sm pl-7">
                          {data.status}
                        </div>
                      </div>
                      <div className="">
                        <div className="flex gap-3 items-center">
                          <IoWifi />
                          <h1>
                            {lang === "en" ? (
                              <span>Internet</span>
                            ) : lang === "ge" ? (
                              <span>ინტერნეტი</span>
                            ) : (
                              <span>Интернет</span>
                            )}
                          </h1>
                        </div>
                        <div className="text-black/50 text-sm pl-7">
                          {data.internet ? "Yes" : "No"}
                        </div>
                      </div>
                      <div className="">
                        <div className="flex gap-3 items-center">
                          <FaPhoneAlt />
                          <h1>
                            {lang === "en" ? (
                              <span>Phone</span>
                            ) : lang === "ge" ? (
                              <span>ტელეფონი</span>
                            ) : (
                              <span>Телефон</span>
                            )}
                          </h1>
                        </div>
                        <div className="text-black/50 text-sm pl-7">
                          {data.phone ? "Yes" : "No"}
                        </div>
                      </div>
                      <div className="">
                        <div className="flex gap-3 items-center">
                          <LuParkingCircle />
                          <h1>
                            {lang === "en" ? (
                              <span>Parking Lot</span>
                            ) : lang === "ge" ? (
                              <span>ავტოსადგომი</span>
                            ) : (
                              <span>Парковка</span>
                            )}
                          </h1>
                        </div>
                        <div className="text-black/50 text-sm pl-7">
                          {data.parking ? "Yes" : "No"}
                        </div>
                      </div>
                      <div className="">
                        <div className="flex gap-3 items-center">
                          <TbAirConditioning />
                          <h1>
                            {lang === "en" ? (
                              <span>Air Conditioner</span>
                            ) : lang === "ge" ? (
                              <span>Ჰაერის კონდიციონერი</span>
                            ) : (
                              <span>Кондиционер</span>
                            )}
                          </h1>
                        </div>
                        <div className="text-black/50 text-sm pl-7">
                          {data.ac ? "Yes" : "No"}
                        </div>
                      </div>
                      <div className="">
                        <div className="flex gap-3 items-center">
                          <PiTelevisionSimple />
                          <h1>
                            {lang === "en" ? (
                              <span>Television</span>
                            ) : lang === "ge" ? (
                              <span>ტელევიზია</span>
                            ) : (
                              <span>Телевидение</span>
                            )}
                          </h1>
                        </div>
                        <div className="text-black/50 text-sm pl-7">
                          {data.tv ? "Yes" : "No"}
                        </div>
                      </div>
                      <div className="">
                        <div className="flex gap-3 items-center">
                          <FaSwimmingPool />
                          <h1>
                            {lang === "en" ? (
                              <span>Swimming pool</span>
                            ) : lang === "ge" ? (
                              <span>Საცურაო აუზი</span>
                            ) : (
                              <span>Бассейн</span>
                            )}
                          </h1>
                        </div>
                        <div className="text-black/50 text-sm pl-7">
                          {data.swimming_pool ? "Yes" : "No"}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:px-5 col-span-1 w-full  pt-10 lg:pt-0 h-fit sticky top-24">
                  <div className="bg-white w-full h-full rounded-2xl shadow-md ">
                    <div className="text-center text-[#040A60] py-3 border-b-2">
                      <h1>
                        {lang === "en" ? (
                          <span>Property Registry</span>
                        ) : lang === "ge" ? (
                          <span>ქონების რეესტრი</span>
                        ) : (
                          <span>Реестр собственности</span>
                        )}
                      </h1>
                    </div>
                    <div className=" grid gap-5 p-5">
                      <div className="pt-2 flex justify-between items-center">
                        <div className="grid gap-5">
                          {data.service_type === "rent" ? (
                            <div className="">
                              <h3 className="text-sm">
                                {lang === "en" ? (
                                  <span>1-day rental</span>
                                ) : lang === "ge" ? (
                                  <span>ქირავდება 1 დღით</span>
                                ) : (
                                  <span>аренда на 1 день</span>
                                )}
                              </h3>
                              <h1 className="text-xl">
                                <span className="font-bold">
                                  {priceLan === true ? (
                                    <span> $ {data.price_usd}</span>
                                  ) : (
                                    <span> &#8382; {data.price_ge}</span>
                                  )}
                                </span>{" "}
                                /{" "}
                                {lang === "en" ? (
                                  <span>day</span>
                                ) : lang === "ge" ? (
                                  <span>დღეს</span>
                                ) : (
                                  <span>день</span>
                                )}
                              </h1>
                            </div>
                          ) : (
                            <div className="text-2xl font-semibold">
                              {priceLan === true ? (
                                <span> $ {data.price_usd}</span>
                              ) : (
                                <span> &#8382; {data.price_ge}</span>
                              )}
                            </div>
                          )}
                        </div>
                        <div className="flex gap-1 items-center">
                          &#8382;
                          <Switch
                            checked={checked}
                            onChange={handleChange}
                            inputProps={{ "aria-label": "controlled" }}
                          />
                          $
                        </div>
                      </div>
                      <div className="flex justify-between">
                        <div className="flex gap-1">
                          <h1>
                            {lang === "en" ? (
                              <span>Area</span>
                            ) : lang === "ge" ? (
                              <span>ფართობი</span>
                            ) : (
                              <span>Область</span>
                            )}
                          </h1>
                          <h1 className=" ">
                            {data.sqm} m<sup>2</sup>
                          </h1>
                        </div>
                        <div className="">
                          <h1 className="text-sm  px-4 py-1 rounded-xl bg-neutral-100 w-fit">
                            99 Groups
                          </h1>
                        </div>
                      </div>

                      <div className="flex gap-5 w-full">
                        <div className="w-full">
                          <div
                            onClick={() => setCnt(!cnt)}
                            className="bg-[#040A60] text-center px-10 py-3 text-white shadow-md rounded-2xl duration-200"
                          >
                            {cnt ? (
                              <Link href={"tel:+995574893961"}>
                                +995 574 89 39 61
                              </Link>
                            ) : (
                              <h1>
                                {lang === "en" ? (
                                  <span>Show Contact</span>
                                ) : lang === "ge" ? (
                                  <span>კონტაქტის ჩვენება</span>
                                ) : (
                                  <span>Показать контакт</span>
                                )}
                              </h1>
                            )}
                          </div>
                        </div>
                        <Link href={"/"} className="p-2">
                          <FaWhatsapp className="text-3xl" />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center">
                    {/* <iframe
                      
                      
                      loading="lazy"
                      allowfullscreen
                      referrerpolicy="no-referrer-when-downgrade"
                      src={data.maps}
                    ></iframe> */}
                    <iframe
                      src={data.embedmap}
                      allowfullscreen=""
                      loading="lazy"
                      referrerpolicy="no-referrer-when-downgrade"
                      className="rounded-2xl w-full p-2 h-[200px]"
                    ></iframe>
                  </div>
                </div>
              </section>
              <section className="pt-5 lg:flex w-full hidden"></section>
            </div>
          </div>
          {/* sm md */}
          <section className="lg:hidden">
            <div className="flex justify-end pt-2">
              {/* <div className=" flex gap-2 items-center">
          <div className="">
            <h1 className="">4.8</h1>
          </div>
          <div className="flex gap-2 text-xl min-w-fit">
            <FaStar className="text-yellow-400" />
            <FaStar className="text-yellow-400" />
            <FaStar className="text-yellow-400" />
            <FaStar className="text-yellow-400" />
            <FaStarHalfAlt className="text-yellow-400" />
          </div>
        </div> */}
            </div>
            <div className="px-10 py-5">
              <div className="">
                <h1 className="monsterrat text-[#040A60] text-2xl font-semibold">
                  {lang === "en" ? (
                    <span>{data.title_en}</span>
                  ) : lang === "ge" ? (
                    <span>{data.title_ge}</span>
                  ) : (
                    <span>{data.title_ru}</span>
                  )}
                </h1>
                <div className="flex items-center gap-2 opacity-70">
                  <div className="">
                    <FaLocationDot />
                  </div>
                  <div className="">
                    <h1>
                      {" "}
                      {lang === "en" ? (
                        <span>{data.location_en}</span>
                      ) : lang === "ge" ? (
                        <span>{data.location_ge}</span>
                      ) : (
                        <span>{data.location_ru}</span>
                      )}
                    </h1>
                  </div>
                </div>
              </div>
              <div className="py-3 flex justify-between pt-5">
                <div className="">
                  <h1 className="text-sm  px-4 py-1 rounded-xl bg-neutral-200 w-fit">
                    99 Groups
                  </h1>
                </div>
                <div className=""></div>
              </div>
              <div className="flex justify-between py-5 px-3">
                <div className="grid gap-5">
                  {data.service_type === "rent" ? (
                    <div className="">
                      <h3 className="text-sm">
                        {lang === "en" ? (
                          <span>1-day rental</span>
                        ) : lang === "ge" ? (
                          <span>ქირავდება 1 დღით</span>
                        ) : (
                          <span>аренда на 1 день</span>
                        )}
                      </h3>
                      <h1 className="text-xl">
                        <span className="font-bold">
                          {priceLan === true ? (
                            <span> $ {data.price_usd}</span>
                          ) : (
                            <span> &#8382; {data.price_ge}</span>
                          )}
                        </span>{" "}
                        /
                        {lang === "en" ? (
                          <span>day</span>
                        ) : lang === "ge" ? (
                          <span>დღეს</span>
                        ) : (
                          <span>день</span>
                        )}
                      </h1>
                    </div>
                  ) : (
                    <div className="text-2xl font-semibold">
                      {priceLan === true ? (
                        <span> $ {data.price_usd}</span>
                      ) : (
                        <span> &#8382; {data.price_ge}</span>
                      )}
                    </div>
                  )}
                </div>
                <div className="flex gap-1 items-center">
                  &#8382;
                  <Switch
                    checked={checked}
                    onChange={handleChange}
                    inputProps={{ "aria-label": "controlled" }}
                  />
                  $
                </div>
              </div>

              <div className="w-full p-5 border-2 rounded-xl my-5">
                <div className="grid grid-cols-2 gap-5 text-black/70">
                  <div className="">
                    <div className="flex gap-3 items-center">
                      <TbBorderCorners className="text-3xl" />
                      <div className="text-sm">
                        <h1>
                          {lang === "en" ? (
                            <span>Area</span>
                          ) : lang === "ge" ? (
                            <span>ფართობი</span>
                          ) : (
                            <span>Область</span>
                          )}
                        </h1>
                        <h1 className=" ">
                          {data.sqm} m<sup>2</sup>
                        </h1>
                      </div>
                    </div>
                  </div>
                  <div className="">
                    <div className="flex gap-3 items-center">
                      <IoBed className="text-3xl" />
                      <div className="text-sm">
                        <h1>
                          {lang === "en" ? (
                            <span>Rooms</span>
                          ) : lang === "ge" ? (
                            <span>ოთახები</span>
                          ) : (
                            <span>Номера</span>
                          )}
                        </h1>
                        <h1 className=" ">{data.rooms}</h1>
                      </div>
                    </div>
                  </div>
                  <div className="">
                    <div className="flex gap-3 items-center">
                      <FaBath className="text-3xl" />
                      <div className="text-sm">
                        <h1>
                          {" "}
                          {lang === "en" ? (
                            <span>Bathrooms</span>
                          ) : lang === "ge" ? (
                            <span>სველი წერტილები</span>
                          ) : (
                            <span>ванные комнаты</span>
                          )}
                        </h1>
                        <h1 className=" ">{data.bathrooms}</h1>
                      </div>
                    </div>
                  </div>
                  <div className="">
                    <div className="flex gap-3 items-center">
                      <PiStepsFill className="text-3xl" />

                      <div className="text-sm ">
                        <h1>
                          {" "}
                          {lang === "en" ? (
                            <span>Floors</span>
                          ) : lang === "ge" ? (
                            <span>სართულები</span>
                          ) : (
                            <span>Этажи</span>
                          )}
                        </h1>
                        <h1 className="">{data.floors}</h1>
                      </div>
                    </div>
                  </div>
                  {data.yard && data.yard ? (
                    <div className="">
                      <div className="flex gap-3 items-center">
                        <PiPlantFill className="text-3xl" />
                        <div className="text-sm">
                          <h1>
                            {lang === "en" ? (
                              <span>Yard Area</span>
                            ) : lang === "ge" ? (
                              <span>ეზოს ფართი</span>
                            ) : (
                              <span>Площадь двора</span>
                            )}
                          </h1>
                          <h1 className="">
                            {data.yard_sqm} m<sup>2</sup>
                          </h1>
                        </div>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>

              <div className="text-justify pt-3">
                <h1 className="text-[#040A60] text-2xl py-2 font-semibold">
                  {lang === "en" ? (
                    <span>Description</span>
                  ) : lang === "ge" ? (
                    <span>აღწერა</span>
                  ) : (
                    <span>Описание</span>
                  )}
                </h1>
                <h1>
                  {" "}
                  {lang === "en" ? (
                    <span>{data.desc_en}</span>
                  ) : lang === "ge" ? (
                    <span>{data.desc_ge}</span>
                  ) : (
                    <span>{data.desc_ru}</span>
                  )}
                </h1>
              </div>
            </div>
            <div className="flex justify-center px-10">
              {/* <iframe
                      
                      
                      loading="lazy"
                      allowfullscreen
                      referrerpolicy="no-referrer-when-downgrade"
                      src={data.maps}
                    ></iframe> */}
              <iframe
                src={data.embedmap}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                className="rounded-2xl w-full p-2 h-[250px]"
              ></iframe>
            </div>
            <section className="pt-5 px-10">
              <div className="">
                <h1 className="text-2xl text-[#040A60] font-semibold">
                  {lang === "en" ? (
                    <span> Additional Parameters</span>
                  ) : lang === "ge" ? (
                    <span>დამატებითი პარამეტრები</span>
                  ) : (
                    <span>Дополнительные параметры</span>
                  )}
                </h1>
                <div className="grid gap-5 py-5 pb-28">
                  <div className="">
                    <div className="flex gap-3 items-center">
                      <BsBricks />
                      <h1>
                        {" "}
                        {lang === "en" ? (
                          <span>Status</span>
                        ) : lang === "ge" ? (
                          <span>სტატუსი</span>
                        ) : (
                          <span>Положение дел</span>
                        )}
                      </h1>
                    </div>
                    <div className="text-black/50 text-sm pl-7">
                      {data.status}
                    </div>
                  </div>
                  <div className="">
                    <div className="flex gap-3 items-center">
                      <IoWifi />
                      <h1>
                        {" "}
                        {lang === "en" ? (
                          <span>Internet</span>
                        ) : lang === "ge" ? (
                          <span>ინტერნეტი</span>
                        ) : (
                          <span>Интернет</span>
                        )}
                      </h1>
                    </div>
                    <div className="text-black/50 text-sm pl-7">
                      {data.internet ? "Yes" : "No"}
                    </div>
                  </div>
                  <div className="">
                    <div className="flex gap-3 items-center">
                      <FaPhoneAlt />
                      <h1>
                        {" "}
                        {lang === "en" ? (
                          <span>Phone</span>
                        ) : lang === "ge" ? (
                          <span>ტელეფონი</span>
                        ) : (
                          <span>Телефон</span>
                        )}
                      </h1>
                    </div>
                    <div className="text-black/50 text-sm pl-7">
                      {data.phone ? "Yes" : "No"}
                    </div>
                  </div>
                  <div className="">
                    <div className="flex gap-3 items-center">
                      <LuParkingCircle />
                      <h1>
                        {lang === "en" ? (
                          <span>Parking Lot</span>
                        ) : lang === "ge" ? (
                          <span>ავტოსადგომი</span>
                        ) : (
                          <span>Парковка</span>
                        )}
                      </h1>
                    </div>
                    <div className="text-black/50 text-sm pl-7">
                      {data.parking ? "Yes" : "No"}
                    </div>
                  </div>
                  <div className="">
                    <div className="flex gap-3 items-center">
                      <TbAirConditioning />
                      <h1>
                        {lang === "en" ? (
                          <span>Air Conditioner</span>
                        ) : lang === "ge" ? (
                          <span>Ჰაერის კონდიციონერი</span>
                        ) : (
                          <span>Кондиционер</span>
                        )}
                      </h1>
                    </div>
                    <div className="text-black/50 text-sm pl-7">
                      {" "}
                      {data.ac ? "Yes" : "No"}
                    </div>
                  </div>
                  <div className="">
                    <div className="flex gap-3 items-center">
                      <PiTelevisionSimple />
                      <h1>
                        {lang === "en" ? (
                          <span>Television</span>
                        ) : lang === "ge" ? (
                          <span>ტელევიზია</span>
                        ) : (
                          <span>Телевидение</span>
                        )}
                      </h1>
                    </div>
                    <div className="text-black/50 text-sm pl-7">
                      {" "}
                      {data.tv ? "Yes" : "No"}
                    </div>
                  </div>
                  <div className="">
                    <div className="flex gap-3 items-center">
                      <FaSwimmingPool />
                      <h1>
                        {" "}
                        {lang === "en" ? (
                          <span>Swimming pool</span>
                        ) : lang === "ge" ? (
                          <span>Საცურაო აუზი</span>
                        ) : (
                          <span>Бассейн</span>
                        )}
                      </h1>
                    </div>
                    <div className="text-black/50 text-sm pl-7">
                      {data.swimming_pool ? "Yes" : "No"}
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <div className="fixed bottom-0 bg-white z-[2] py-3 w-full">
              <div className="flex items-center w-full justify-around">
                <div className="">
                  <div
                    onClick={() => setCnt(!cnt)}
                    className=" bg-[#040A60] duration-200 text-center px-10 py-3 text-white shadow-md rounded-2xl"
                  >
                    {cnt ? (
                      <Link href={"tel:+995574893961"}>+995 574 89 39 61</Link>
                    ) : (
                      <h1>
                        {lang === "en" ? (
                          <span>Show Contact</span>
                        ) : lang === "ge" ? (
                          <span>კონტაქტის ჩვენება</span>
                        ) : (
                          <span>Показать контакт</span>
                        )}
                      </h1>
                    )}
                  </div>
                </div>
                <Link href={"/"} className="p-2 relative z-[3]">
                  <FaWhatsapp className="text-3xl" />
                </Link>
              </div>
            </div>
          </section>
        </main>
      )}
    </div>
  );
};

export default ChildPage;
