"use client";
import React, { useEffect, useState, useRef } from "react";
import { CiSearch } from "react-icons/ci";
import { IoHeartOutline } from "react-icons/io5";
import { IoBed } from "react-icons/io5";
import { FaArrowUp, FaBath } from "react-icons/fa";
import { RiRulerFill } from "react-icons/ri";
import { RiArrowDownDoubleLine } from "react-icons/ri";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import { MdArrowOutward } from "react-icons/md";
import { getLocationsEn } from "../../firebase/firestore";
import Navbar from "./Navbar";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { MdOutlineTune } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { getFilteredPropertiess } from "../../firebase/firestore";
import { getPropertyfromLocationEn } from "../../firebase/firestore";
import { Pagination } from "@mui/material";
import { getAllProperties } from "@/firebase/firestore/index";
import FilterData from "./FilterData";
import Link from "next/link";
import Footer from "./Footer";
import Switch from "@mui/material/Switch";

const Explore = () => {
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState(true);
  const [properties, setProperties] = useState([]);
  const [location, setLocation] = useState();
  const [locations, setLocations] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [page, pagechange] = useState(1);
  const dataperpage = 6;
  const handlechangepage = (event, newpage) => {
    pagechange(newpage);
  };
  const [serviceType, setServiceType] = useState(null);
  const [propertyType, setPropertyType] = useState(null);
  const [fromPrice, setFromPrice] = useState(null);
  const [toPrice, setToPrice] = useState(null);
  const [get, setGet] = useState();
  const containerRef = useRef(null);

  const [checked, setChecked] = useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
    setPriceLan(event.target.checked);
  };

  console.log(checked, "c");

  const [priceLan, setPriceLan] = useState(true);

  const handleOpen = () => setOpen(!open);
  const handleSubmit = async () => {
    const data = await getFilteredPropertiess(
      serviceType,
      propertyType,
      fromPrice,
      toPrice
    );
    setGet(data);
    setProperties(data);
    // setOpen(false);
  };

  useEffect(() => {
    console.log(get);
  }, [get]);

  useEffect(() => {
    const language = () => {
      let lan = localStorage.getItem("lang");
      if (lan === null) {
        localStorage.setItem("lang", "en");
      } else {
        setLang(lan);
      }
    };
    const fetchAll = async () => {
      const res = await getAllProperties();
      setProperties(res);
    };
    const fetchLocation = async () => {
      const res = await getLocationsEn();
      setLocations(res);
    };
    fetchLocation();
    fetchAll();
    language();
  }, []);

  const fetchAll = async () => {
    const res = await getAllProperties();
    setProperties(res);
    setPropertyType(null);
    setServiceType(null);
    setFromPrice(null);
    setToPrice(null);
    setOpen(!open);
  };
  const handleSearch = (e) => {
    const searchterm = e.target.value;
    let data = [];
    locations.map((ln) => {
      if (ln.toLowerCase().includes(searchterm.toLowerCase())) {
        data.push(ln);
      }
    });
    setSuggestions(data);
  };
  const handleSuggestion = (e) => {
    e.preventDefault();
    setLocation(e.target.id);
  };
  const handleClickOutside = (event) => {
    if (containerRef.current && !containerRef.current.contains(event.target)) {
      setSuggestions([]);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const fetch = async () => {
      const res = await getPropertyfromLocationEn(location);
      setProperties(res);
      setSuggestions([]);
    };
    fetch();
  }, [location]);
  console.log(properties);

  return (
    <div>
      <section className="top-0 fixed z-[50]">
        <Navbar />
      </section>

      <Dialog
        open={open}
        handler={handleOpen}
        className="overflow-scroll bg-gray-100 text-black"
        style={{ maxHeight: "calc(100vh - 200px)" }}
      >
        <DialogHeader className="flex justify-between">
          {lang === "en" ? (
            <span> Options</span>
          ) : lang === "ge" ? (
            <span></span>
          ) : (
            <span></span>
          )}
          <IoClose onClick={handleOpen} />
        </DialogHeader>
        <DialogBody>
          <div className="p-5 text-black font-inter">
            <div>
              <h1 className="font-bold mb-4 text-lg">Transaction Type</h1>
              <div>
                <button
                  onClick={(e) => setServiceType(e.target.value)}
                  value={"sale"}
                  className={`border-2 mr-4 ${
                    serviceType === "sale" ? "bg-[#00A3FF] text-white" : " "
                  }   border-[#00A3FF] rounded-lg px-4 py-2`}
                >
                  For sale
                </button>
                <button
                  onClick={(e) => setServiceType(e.target.value)}
                  value={"rent"}
                  className={`border-2 ${
                    serviceType && serviceType === "rent"
                      ? "bg-[#00A3FF] text-white"
                      : " "
                  }   border-[#00A3FF] rounded-lg px-4 py-2`}
                >
                  For rent
                </button>
              </div>
            </div>
            <div>
              <h1 className="font-bold py-4 text-lg">Real Estate Types</h1>
              <div>
                <button
                  onClick={(e) => setPropertyType(e.target.value)}
                  value={"apartment"}
                  className={` border-2 ${
                    propertyType && propertyType === "apartment"
                      ? "bg-[#00A3FF] text-white"
                      : " "
                  }  border-[#00A3FF] rounded-lg px-4 py-2`}
                >
                  Apartments
                </button>
                <button
                  onClick={(e) => setPropertyType(e.target.value)}
                  value={"house"}
                  className={`mx-4 border-2 ${
                    propertyType && propertyType === "house"
                      ? "bg-[#00A3FF] text-white"
                      : " "
                  }  border-[#00A3FF] rounded-lg px-4 py-2`}
                >
                  Houses
                </button>
              </div>
            </div>
            <div>
              <h1 className="font-semibold py-5 text-lg">Price</h1>
              <div className="grid gap-5 w-fit">
                <input
                  type="text"
                  placeholder="From"
                  onChange={(e) => setFromPrice(e.target.value)}
                  className="border-2  rounded-md px-4 py-2 border-[#00A3FF]"
                />
                <input
                  type="text"
                  placeholder="To"
                  onChange={(e) => setToPrice(e.target.value)}
                  className="border-2 border-[#00A3FF] px-4 py-2 rounded-md"
                />
              </div>
            </div>
          </div>
        </DialogBody>
        <DialogFooter>
          <button
            onClick={fetchAll}
            className="border-2 border-[#00A3FF] px-4 py-2 rounded-lg"
          >
            Clear
          </button>
          <button
            onClick={handleSubmit}
            className="text-white bg-[#00A3FF] px-4 py-2 ml-4 rounded-lg"
          >
            Search
          </button>
        </DialogFooter>
      </Dialog>
      <main className="lg:px-10 px-5 pt-16 pb-10 ">
        <section className="portalmain rounded-3xl w-full lg:h-[250px] h-[180px] lg:px-10 px-5 py-5 text-white mt-10">
          <h1 className="text-5xl font-medium">
            {lang === "en" ? (
              <span>Explore</span>
            ) : lang === "ge" ? (
              <span>Გამოკვლევა</span>
            ) : (
              <span>Исследовать</span>
            )}
          </h1>
          <h5 className="text-xl pt-3 uppercase">
            {lang === "en" ? (
              <span>georgia</span>
            ) : lang === "ge" ? (
              <span>საქართველო</span>
            ) : (
              <span>Грузия</span>
            )}
          </h5>
        </section>
        <div className="lg:mt-[-100px] mt-[-50px] lg:px-8 px-3">
          <div className="pb-3">
            <a
              href={"/realty/students"}
              className="bg-[#110040] text-white px-3 py-2 rounded-md relative"
            >
              Properties nearby Metro Stations
              <FaArrowUp className="rotate-45 inline mb-1 ml-2" fontSize={20} />
            </a>
          </div>
          <section className=" grid-cols-7 lg:grid  gap-5 w-full">
            <div className="col-span-5">
              <div className=" lg:rounded-xl lg:bg-gray-100 relative z-[2] lg:p-5">
                <div className="flex gap-5 bg-gray-100 p-2 rounded-xl items-start w-full ">
                  <div className="w-full" ref={containerRef}>
                    <input
                      type="text"
                      placeholder="Search by location"
                      className={`px-5 py-3 ${
                        suggestions.length > 0 ? "rounded-t-xl" : "rounded-xl"
                      } focus:outline-none w-full`}
                      onChange={handleSearch}
                    />
                    {suggestions.length > 0 && (
                      <ul className="px-6 pt-2 pb-6 bg-white mt-0">
                        {suggestions.map((suggestion, index) => (
                          <li
                            className={`mb-2 text-lg block hover:cursor-pointer ${
                              index == 0 && "font-bold"
                            }`}
                            id={suggestion}
                            onClick={handleSuggestion}
                            key={index}
                          >
                            {suggestion}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                  <div className="">
                    <Button onClick={handleOpen}>
                      <MdOutlineTune className="text-2xl" />
                    </Button>
                  </div>
                </div>

                {/* buildings cards */}
                <h1 className="font-bold text-2xl monsterrat py-5 px-2">
                  {lang === "en" ? (
                    <span>Best Options</span>
                  ) : lang === "ge" ? (
                    <span>საუკეთესო ვარიანტები</span>
                  ) : (
                    <span>Лучшие варианты</span>
                  )}
                </h1>
                <section className="grid gap-5">
                  {/* card sts */}
                  {properties &&
                    properties
                      .slice(
                        page * dataperpage - dataperpage,
                        page * dataperpage + dataperpage - dataperpage
                      )
                      .map((property) => {
                        return (
                          <div
                            key={property.id}
                            className="w-full bg-white relative rounded-xl   shadow-md md:shadow-sm lg:shadow-none border"
                          >
                            <div className="md:flex">
                              <div
                                className="py-5 px-5"
                              >
                                <div className="md:w-[280px] w-full h-[180px] rounded-xl ">
                                  <img
                                    src={property.data.photos[0]}
                                    alt=""
                                    className="object-center w-full h-full rounded-xl"
                                  />
                                </div>
                              </div>
                              <div className="grid md:grid-cols-3 grid-cols-1 gap-5 w-full pt-5 md:pt-0 relative">
                                <div className="md:col-span-3 lg:col-span-2 pl-5  w-full md:pt-5 lg:py-5 relative flex flex-col justify-between ">
                                  <Link
                                      href={`/realty/properties/${property.id}`} className="">
                                    <div
                                      className="md:text-2xl text-[18px ]"
                                    >
                                      {lang === "en" ? (
                                        <span>{property.data.title_en}</span>
                                      ) : lang === "ge" ? (
                                        <span>{property.data.title_ge}</span>
                                      ) : (
                                        <span>{property.data.title_ru}</span>
                                      )}
                                    </div>
                                    <h5 className="text-gray-400">
                                      {lang === "en" ? (
                                        <span>{property.data.location_en}</span>
                                      ) : lang === "ge" ? (
                                        <span>{property.data.location_ge}</span>
                                      ) : (
                                        <span>{property.data.location_ru}</span>
                                      )}
                                    </h5>
                                    <div className="flex gap-3 text-xl items-center  w-fit px-3 py-1 pt-5">
                                      <div className="bg-[#001F4E]/10 text-[#001F4E] rounded-md flex gap-2 items-center px-2 py-1 ">
                                        <IoBed />
                                        <h1 className="text-sm ">
                                          {property.data.rooms}
                                        </h1>
                                      </div>
                                      <div className="bg-[#001F4E]/10 text-[#001F4E] rounded-md flex gap-2 items-center px-2 py-1 ">
                                        <FaBath />
                                        <h1 className="text-sm">
                                          {property.data.bathrooms}
                                        </h1>
                                      </div>
                                      <div className="bg-[#001F4E]/10 text-[#001F4E] rounded-md flex gap-2 items-center px-2 py-1 ">
                                        <RiRulerFill />
                                        <h1 className="text-sm">
                                          {property.data.sqm} m<sup>2</sup>
                                        </h1>
                                      </div>
                                    </div>
                                  </Link>
                                  <div className="flex gap-1 items-center pt-2 pl-3">
                                    &#8382;
                                    <Switch
                                      checked={checked}
                                      onChange={handleChange}
                                      inputProps={{
                                        "aria-label": "controlled",
                                      }}
                                    />
                                    $
                                  </div>
                                  <div className="flex items-end relative">
                                    <div className="hidden  w-full md:flex lg:hidden lg:col-span-1  lg:px-0 justify-between lg:items-end ">
                                      <div className="pb-3">
                                        {property.data.service_type ===
                                        "sale" ? (
                                          <h1 className="md:text-2xl text-xl font-bold pl-5 pt-0 md:pt-5">
                                            {priceLan === true ? (
                                              <span>
                                                {" "}
                                                $ {property.data.price_usd}
                                              </span>
                                            ) : (
                                              <span>
                                                {" "}
                                                &#8382; {property.data.price_ge}
                                              </span>
                                            )}
                                          </h1>
                                        ) : (
                                          <h1 className="md:text-2xl text-xl font-bold pl-5 pt-0 md:pt-5 flex ">
                                            {priceLan === true ? (
                                              <span>
                                                {" "}
                                                $ {property.data.price_usd}
                                              </span>
                                            ) : (
                                              <span>
                                                {" "}
                                                &#8382; {property.data.price_ge}
                                              </span>
                                            )}
                                            /{" "}
                                            {lang === "en" ? (
                                              <span>day</span>
                                            ) : lang === "ge" ? (
                                              <span>დღეს</span>
                                            ) : (
                                              <span>день</span>
                                            )}
                                          </h1>
                                        )}
                                      </div>
                                      <div className="flex items-end ">
                                        <div className="py-2 capitalize h-fit px-4 bg-[#001F4E]/10 rounded-br-xl rounded-tl-xl">
                                          {property.data.service_type ===
                                          "sale" ? (
                                            <div className="">
                                              {lang === "en" ? (
                                                <span>For Sale</span>
                                              ) : lang === "ge" ? (
                                                <span>ამისთვის გაყიდვა</span>
                                              ) : (
                                                <span>для распродажа</span>
                                              )}
                                            </div>
                                          ) : (
                                            <div className="">
                                              {lang === "en" ? (
                                                <span>For Rent</span>
                                              ) : lang === "ge" ? (
                                                <span>ამისთვის ქირავდება</span>
                                              ) : (
                                                <span>для арендовать</span>
                                              )}
                                            </div>
                                          )}
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div className="flex w-full lg:flex-col lg:flex lg:col-span-1 md:hidden  lg:px-0 justify-between lg:items-end">
                                  {property.data.service_type === "sale" ? (
                                    <h1 className="md:text-2xl text-xl font-bold p-5 pt-0 md:pt-5">
                                      {priceLan === true ? (
                                        <span>
                                          {" "}
                                          $ {property.data.price_usd}
                                        </span>
                                      ) : (
                                        <span>
                                          {" "}
                                          &#8382; {property.data.price_ge}
                                        </span>
                                      )}
                                    </h1>
                                  ) : (
                                    <h1 className="md:text-2xl text-xl font-bold p-5 pt-0 md:pt-5 flex ">
                                      {priceLan === true ? (
                                        <span>
                                          {" "}
                                          $ {property.data.price_usd}
                                        </span>
                                      ) : (
                                        <span>
                                          {" "}
                                          &#8382; {property.data.price_ge}
                                        </span>
                                      )}
                                      /{" "}
                                      {lang === "en" ? (
                                        <span>day</span>
                                      ) : lang === "ge" ? (
                                        <span>დღეს</span>
                                      ) : (
                                        <span>день</span>
                                      )}
                                    </h1>
                                  )}
                                  <div className="py-2 capitalize px-4 bg-[#001F4E]/10  rounded-br-xl rounded-tl-xl">
                                    {property.data.service_type === "sale" ? (
                                      <div className="">
                                        {lang === "en" ? (
                                          <span>For Sale</span>
                                        ) : lang === "ge" ? (
                                          <span>ამისთვის გაყიდვა</span>
                                        ) : (
                                          <span>для распродажа</span>
                                        )}
                                      </div>
                                    ) : (
                                      <div className="">
                                        {lang === "en" ? (
                                          <span>For Rent</span>
                                        ) : lang === "ge" ? (
                                          <span>ამისთვის ქირავდება</span>
                                        ) : (
                                          <span>для арендовать</span>
                                        )}
                                      </div>
                                    )}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                  {/* card ends */}
                  {/* card sts */}

                  {/* card ends */}

                  {/* <div className="flex justify-center">
                <div className="px-3 py-1 flex justify-center items-center gap-2 text-gray-400 rounded-xl bg-white">
                  <RiArrowDownDoubleLine />
                  Show More{" "}
                </div>
              </div> */}
                </section>
                <section>
                  <div className="mt-5  text-black  flex justify-center">
                    <Pagination
                      className=""
                      count={Math.ceil(
                        properties && properties.length / dataperpage
                      )}
                      page={page}
                      onChange={handlechangepage}
                    />
                  </div>
                </section>
              </div>

              {/* popular cards */}

              {/* more cards */}
            </div>
            <div className="bg-gray-100 lg:block hidden rounded-2xl h-fit pb-5 w-full col-span-2 px-5 sticky top-20">
              <h1 className="font-bold px-5 pt-5 text-2xl">Our Services</h1>
              <div className="grid gap-5 pt-5">
                <Link
                  href={"/realty/students"}
                  className="h-[240px] w-full bg-cover bg-center rounded-2xl "
                  style={{ backgroundImage: `url(/realty/metro.jpg)` }}
                >
                  <div className="flex flex-col h-full justify-between ">
                    <div className="flex justify-between w-full text-3xl ">
                      <h1 className="ml-2 mt-2 px-3 py-1 bg-white rounded-xl text-sm h-fit">
                        {lang === "en" ? (
                          <span>For Students</span>
                        ) : lang === "ge" ? (
                          <span>სტუდენტებისთვის</span>
                        ) : (
                          <span>Для студентов</span>
                        )}
                      </h1>
                      <div className="bg-white p-2 rounded-tr-xl rounded-bl-xl">
                        <MdArrowOutward className="" />
                      </div>
                    </div>
                    <div className="bg-white w-full text-xl font-bold py-2 text-center rounded-b-xl">
                      <h5 className="">
                        {lang === "en" ? (
                          <span>Properties nearby metro station</span>
                        ) : lang === "ge" ? (
                          <span>საკუთრება მეტროსთან ახლოს</span>
                        ) : (
                          <span>Недвижимость рядом со станцией метро</span>
                        )}
                      </h5>
                    </div>
                  </div>
                </Link>
                <Link
                  href={"/realty/trend"}
                  className="h-[200px] w-full bg-cover bg-center rounded-2xl "
                  style={{ backgroundImage: `url(/realty/hc2.jpeg)` }}
                >
                  <div className="flex flex-col h-full justify-between ">
                    <div className="flex justify-end w-full text-3xl ">
                      <div className="bg-white p-2 rounded-tr-xl rounded-bl-xl">
                        <MdArrowOutward className="" />
                      </div>
                    </div>
                    <div className="bg-white w-full text-xl font-bold py-2 text-center rounded-b-xl">
                      <h1>
                        {lang === "en" ? (
                          <span>Trending Projects</span>
                        ) : lang === "ge" ? (
                          <span>ტრენდული პროექტები</span>
                        ) : (
                          <span>Трендовые проекты</span>
                        )}
                      </h1>
                    </div>
                  </div>
                </Link>
                <Link
                  href={"/realty/popular"}
                  className="h-[200px] w-full bg-cover bg-center rounded-2xl "
                  style={{ backgroundImage: `url(/realty/hc1.jpeg)` }}
                >
                  <div className="flex flex-col h-full justify-between">
                    <div className="flex justify-end w-full text-3xl ">
                      <div className="bg-white p-2 rounded-tr-xl rounded-bl-xl">
                        <MdArrowOutward className="" />
                      </div>
                    </div>
                    <div className="bg-white w-full text-xl font-bold py-2 text-center rounded-b-xl">
                      <h1>
                        {lang === "en" ? (
                          <span>Popular Projects</span>
                        ) : lang === "ge" ? (
                          <span>პოპულარული პროექტები</span>
                        ) : (
                          <span>Популярные проекты</span>
                        )}
                      </h1>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Explore;
