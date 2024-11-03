"use client";
import React, { useEffect, useState } from "react";
import AdminNavbar from "./AdminNavbar";
import { getAllProperties } from "@/firebase/firestore/index";
import Link from "next/link";
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
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Typography,
} from "@material-tailwind/react";
import { IoClose } from "react-icons/io5";
import DeleteProperty from "./DeleteProperty";

const AllProperty = () => {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState("");
  const [deleteOpen, setDeleteOpen] = useState(false);
  const handleOpen = (data) => {
    setCurrent(data);
    setOpen(!open);
  };
  console.log(current);
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const data = await getAllProperties();
      setProperties(data);
    };
    fetch();
  }, [deleteOpen]);

  return (
    <div>
      <AdminNavbar />
      {/* View Dialog */}
      <Dialog className="bg-gray-100 h-[80vh]" open={open} handler={handleOpen}>
        <DialogHeader>
          <div className="flex w-full justify-between gap-20">
            <h1>View</h1>
            <Button
              variant="text"
              color="blue"
              onClick={handleOpen}
              className="mr-1"
            >
              <span>Close</span>
            </Button>
          </div>
        </DialogHeader>
        <DialogBody>
          <div className="relative h-[60vh] overflow-y-scroll">
            <section className="">
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
                  <h1 className="monsterrat text-2xl font-semibold">
                    {current.title_en}
                  </h1>
                  <div className="flex items-center gap-2 opacity-70">
                    <div className="">
                      <FaLocationDot />
                    </div>
                    <div className="">
                      <h1>{current.location_en}</h1>
                    </div>
                  </div>
                </div>
                <div className="py-3 flex justify-between pt-5">
                  <div className="">
                    <h1 className="text-sm  px-4 py-1 rounded-xl bg-neutral-200 w-fit">
                      99 Realty
                    </h1>
                  </div>
                  {/* <div className="">toggle</div> */}
                </div>
                <div className="">
                  {current.service_type === "rent" ? (
                    <div className="">
                      <h3 className="text-sm">
                        {/* {lang === "en" ? (
                          <span>1-day rental</span>
                        ) : lang === "ge" ? (
                          <span>ქირავდება 1 დღით</span>
                        ) : (
                          <span>аренда на 1 день</span>
                        )} */}
                        1-day rental
                      </h3>
                      <h1 className="text-xl">
                        <span className="font-bold">${current.price_usd}</span>{" "}
                        /
                        {/* {lang === "en" ? (
                          <span>day</span>
                        ) : lang === "ge" ? (
                          <span>დღეს</span>
                        ) : (
                          <span>день</span>
                        )} */}
                        day
                      </h1>
                    </div>
                  ) : (
                    <div className="text-2xl font-semibold">
                      $ {current.price_usd}
                    </div>
                  )}
                </div>
                {/* <div className="lg:p-2 pt-5 ">
            <div className="bg-neutral-100 rounded-2xl p-5 flex justify-around">
              <div className="flex gap-3 items-center">
                <IoBed />
                <h1 className="text-sm">2</h1>
              </div>
              <div className="flex gap-3 items-center">
                <FaBath />
                <h1 className="text-sm">2</h1>
              </div>
              <div className="flex gap-3 items-center">
                <PiStepsFill />
                <h1 className="text-sm">2</h1>
              </div>
              <div className="flex gap-3 items-center">
                <PiPlantFill />
                <h1 className="text-sm">
                  60 m<sup>2</sup>
                </h1>
              </div>
            </div>
          </div> */}
                <div className="w-full p-5 border-2 rounded-xl my-5">
                  <div className="grid grid-cols-2 gap-5 text-black/70">
                    <div className="">
                      <div className="flex gap-3 items-center">
                        <TbBorderCorners className="text-3xl" />
                        <div className="text-sm">
                          <h1>Area</h1>
                          <h1 className=" ">
                            {current.sqm} m<sup>2</sup>
                          </h1>
                        </div>
                      </div>
                    </div>
                    <div className="">
                      <div className="flex gap-3 items-center">
                        <IoBed className="text-3xl" />
                        <div className="text-sm">
                          <h1>Rooms</h1>
                          <h1 className=" ">{current.rooms}</h1>
                        </div>
                      </div>
                    </div>
                    <div className="">
                      <div className="flex gap-3 items-center">
                        <FaBath className="text-3xl" />
                        <div className="text-sm">
                          <h1>BathRooms</h1>
                          <h1 className=" ">{current.bathrooms}</h1>
                        </div>
                      </div>
                    </div>
                    <div className="">
                      <div className="flex gap-3 items-center">
                        <PiStepsFill className="text-3xl" />

                        <div className="text-sm ">
                          <h1>Floors</h1>
                          <h1 className="">{current.floors}</h1>
                        </div>
                      </div>
                    </div>
                    {current.yard ? (
                      <div className="">
                        <div className="flex gap-3 items-center">
                          <PiPlantFill className="text-3xl" />
                          <div className="text-sm">
                            <h1>Yard Area</h1>
                            <h1 className="">
                              {current.yard_sqm} m<sup>2</sup>
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
                  <h1>
                    {current.desc_en}
                  </h1>
                </div>
              </div>
              <div className="">
              <h1>map</h1>
              <div className="flex justify-center">
                {
                  current.embedmap && (
                    <iframe
                      src={current.embedmap}
                      allowfullscreen=""
                      loading="lazy"
                      referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>
                  )
                }
              </div>
              </div>
              <section className="pt-5 px-10">
                <div className="">
                  <h1 className="text-2xl font-semibold">
                    Additional Parameters
                  </h1>
                  <div className="grid gap-5 py-5 pb-28">
                    <div className="">
                      <div className="flex gap-3 items-center">
                        <BsBricks />
                        <h1>Status</h1>
                      </div>
                      <div className="text-black/50 text-sm pl-7">
                        {current.status}
                      </div>
                    </div>
                    <div className="">
                      <div className="flex gap-3 items-center">
                        <IoWifi />
                        <h1>Internet</h1>
                      </div>
                      <div className="text-black/50 text-sm pl-7">{current.internet ? "Yes" : "No"}</div>
                    </div>
                    <div className="">
                      <div className="flex gap-3 items-center">
                        <FaPhoneAlt />
                        <h1>Phone</h1>
                      </div>
                      <div className="text-black/50 text-sm pl-7">{current.phone ? "Yes" : "No"}</div>
                    </div>
                    <div className="">
                      <div className="flex gap-3 items-center">
                        <LuParkingCircle />
                        <h1>Parking Lot</h1>
                      </div>
                      <div className="text-black/50 text-sm pl-7">{current.parking ? "Yes" : "No"}</div>
                    </div>
                    <div className="">
                      <div className="flex gap-3 items-center">
                        <TbAirConditioning />
                        <h1>Air Conditioner</h1>
                      </div>
                      <div className="text-black/50 text-sm pl-7">{current.ac ? "Yes" : "No"}</div>
                    </div>
                    <div className="">
                      <div className="flex gap-3 items-center">
                        <PiTelevisionSimple />
                        <h1>TV</h1>
                      </div>
                      <div className="text-black/50 text-sm pl-7">{current.tv ? "Yes" : "No"}</div>
                    </div>
                    <div className="">
                      <div className="flex gap-3 items-center">
                        <FaSwimmingPool />
                        <h1>Swimming Pool</h1>
                      </div>
                      <div className="text-black/50 text-sm pl-7">{current.swimming_pool ? "Yes" : "No"}</div>
                    </div>
                  </div>
                </div>
              </section>
            </section>
          </div>
        </DialogBody>
        <DialogFooter></DialogFooter>
      </Dialog>

      <main className="pt-32">
        <div className="">
          <h1 className="text-center font-semibold text-2xl">All Properties</h1>
        </div>

        <section className="py-10">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr>
                <th className="border px-4 py-2">ID</th>
                <th className="border px-4 py-2">Title</th>
                <th className="border px-4 py-2">Location</th>
                <th className="border px-4 py-2">Price</th>
                <th className="border px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {properties &&
                properties.map((property, index) => (
                  <tr key={index}>
                    <td className="border px-4 py-2">{index+1}</td>
                    <td className="border px-4 py-2">
                      {property.data.title_en}
                    </td>
                    <td className="border px-4 py-2">
                      {property.data.location_en}
                    </td>
                    <td className="border px-4 py-2">
                      ${property.data.price_usd}
                    </td>
                    <td className="border px-4 py-2">
                      <div className="flex gap-5 w-fit">
                        <button
                          onClick={() => handleOpen(property.data)}
                          className="text-white bg-green-500 px-4 py-2 rounded-xl hover:bg-[#006395]"
                        >
                          View
                        </button>
                        <Link
                          href={`/realty/admin/property/update/${property.id}`}
                          className="text-white bg-[#110040] px-4 py-2 rounded-xl hover:bg-[#006395]"
                        >
                          Edit
                        </Link>
                        <DeleteProperty
                          open={deleteOpen}
                          setOpen={setDeleteOpen}
                          photos={property.data.photos}
                          id={property.id}
                        />
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
};

export default AllProperty;
