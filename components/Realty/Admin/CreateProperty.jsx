"use client";
import React, { useEffect, useState } from "react";
import AdminNavbar from "./AdminNavbar";
import { addProperty } from "@/firebase/firestore/index";
import axios from "axios";
import { API } from "@/config/config";

const translateToRussian = async (text) => {
  try {
    const response = await axios.post(
      "https://translation.googleapis.com/language/translate/v2",
      null,
      {
        params: {
          q: text,
          target: "ru",
          key: "AIzaSyDGcrKLQpCtlB93jVIGwPyFchn06lcEu2o", // Replace with your Google API key
        },
      }
    );
    return response.data.data.translations[0].translatedText;
  } catch (error) {
    console.error("Error translating to Russian: ", error);
    return "";
  }
};

const translateFieldsToRussian = async (data, fields) => {
  const translations = await Promise.all(
    fields.map((field) => translateToRussian(data[field]))
  );
  fields.forEach((field, index) => {
    data[field.replace("_en", "_ru")] = translations[index];
  });
};

const CreateProperty = () => {
  const [data, setData] = useState({});
  const [photos, setPhotos] = useState([]);
  const fieldsToTranslate = ["title_en", "desc_en", "location_en", "metro_en"];
  const [submit, setSubmit] = useState(false);

  const handleChange = (e) => {
    const { id, value, type } = e.target;
    let newValue;
    if (type === "number") {
      newValue = parseFloat(value);
    } else if (value === "true" || value === "false") {
      newValue = value === "true" ? true : false;
    } else {
      newValue = value;
    }
    setData({
      ...data,
      [id]: newValue,
    });
  };

  const extractCoordinates = (url) => {
    const regexPatterns = [
      /@([\d.\-]+),([\d.\-]+),(\d+(?:\.\d+)?)z/, // Pattern 1: @latitude,longitude,zoomz
      /q=([\d.\-]+),([\d.\-]+)/, // Pattern 2: q=latitude,longitude
      /ll=([\d.\-]+),([\d.\-]+)/, // Pattern 3: ll=latitude,longitude
      /place\/([\d.\-]+),([\d.\-]+)/, // Pattern 4: place/latitude,longitude
      /search\/([\d.\-]+),([\d.\-]+)\?/, // Pattern 5: search/latitude,longitude?
    ];

    for (const regex of regexPatterns) {
      const match = url.match(regex);
      if (match) {
        return {
          lat: match[1],
          lng: match[2],
          zoom: match[3] || 15,
        };
      }
    }

    const searchPattern = /maps\/search\/([\d.\-]+),([\d.\-]+)\?/;
    const searchMatch = url.match(searchPattern);
    if (searchMatch) {
      return {
        lat: searchMatch[1],
        lng: searchMatch[2],
        zoom: 15,
      };
    }

    return null;
  };
  const handleConvert = async (map) => {
    try {
      console.log("st");
      console.log("url", map);
      // const response = await axios.get(`/api/map_url`, {
      //   params: { map },
      // });
      // const encodedShortUrl = encodeURIComponent(map);
      // const proxyUrl = `/api/map_url?map=${encodedShortUrl}`;
      const shortUrl = map;
      const response = await axios.post(`${API}/expand`, { shortUrl });
      const fullUrl = response.data.fullUrl;
      console.log("fu", fullUrl);

      // alter

      const coordinates = extractCoordinates(fullUrl);

      if (coordinates) {
        const { lat, lng, zoom } = coordinates;
        // result
        const embededUrl = `https://www.google.com/maps/embed/v1/view?center=${lat},${lng}&zoom=${zoom}&key=AIzaSyAK5JTHKwu7VtduxdcQVqvTpJTtKl8VwLI`;
        data.embedmap = embededUrl;

        console.log(embededUrl);
        return embededUrl;
      } else {
        console.log("Could not extract coordinates from the URL");
      }
    } catch (error) {
      console.error("Error converting the URL:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(data);
    await translateFieldsToRussian(data, fieldsToTranslate);
    // if (data.maps) {

    // } else {
    //   await addProperty(data, photos);
    // }
    await handleConvert(data.maps).then(async (url) => {
      console.log("u", url);
      console.log("f", data);
      await addProperty(data, photos);
    });

    window.location.href = "/realty/admin";
  };

  return (
    <div>
      <AdminNavbar />
      <main className="py-10 px-10 pt-32">
        <section>
          <h1 className="text-2xl font-bold text-center">Create Property</h1>
        </section>
        <section className="flex justify-center pt-10">
          <form onSubmit={handleSubmit} className="max-w-[500px] grid gap-3">
            <div className="grid gap-3">
              <div className="">
                <label htmlFor="service_type">Service Type</label>
              </div>
              <select
                id="service_type"
                onChange={handleChange}
                required
                className="w-full px-5 py-1 focus:outline-none rounded-sm ring-gray-200 ring-2 ring-offset-4"
              >
                <option value="" disabled selected>
                  Choose
                </option>
                <option value={"sale"}>For Sale</option>
                <option value={"rent"}>For Rent</option>
              </select>
              {data && data.service_type == "rent" ? (
                <>
                  <div className="">
                    <label htmlFor="rental_type">Rental Type</label>
                  </div>
                  <input
                    name="rental_type"
                    id="rental_type"
                    onChange={handleChange}
                    placeholder="Eg: Day or Month"
                    required
                    className="w-full px-5 py-1 focus:outline-none rounded-sm ring-gray-200 ring-2 ring-offset-4"
                  />
                </>
              ) : (
                " "
              )}
            </div>
            <div className="py-5">
              <h1 className="text-2xl font-semibold">Details</h1>
            </div>
            <div className="grid">
              <label htmlFor="photos" className="px-2 py-2">
                Photos
              </label>
              <input
                type="file"
                id="photos"
                multiple
                accept="image/*"
                required
                onChange={(e) => setPhotos([...e.target.files])}
                className="block w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-white dark:border-neutral-700 dark:text-neutral-400
                        file:bg-gray-50 file:border-0
                        file:me-4
                        file:py-2 file:px-4
                        dark:file:bg-neutral-700 dark:file:text-neutral-400"
              />
            </div>
            <div className="grid gap-3">
              <div className="">
                <label htmlFor="property_type">Property Type</label>
              </div>
              <select
                name="property_type"
                id="property_type"
                onChange={handleChange}
                required
                className="w-full px-5 py-1 focus:outline-none rounded-sm ring-gray-200 ring-2 ring-offset-4"
              >
                <option value="" disabled selected>
                  Choose Type
                </option>
                <option value={"house"}>House</option>
                <option value={"apartment"}>Apartment</option>
                <option value={"hotel"}>Hotel</option>
              </select>
            </div>
            <div className="grid gap-1">
              <label htmlFor="title_en" className="px-2 py-2">
                Title - English
              </label>
              <input
                type="text"
                name=""
                id="title_en"
                placeholder="Enter title"
                onChange={handleChange}
                required
                className="focus:outline-none  placeholder:text-black w-full px-5 py-1 rounded-sm ring-gray-200 ring-2 ring-offset-4"
              />
            </div>

            <div className="grid gap-1">
              <label htmlFor="title_ge" className="px-2 py-2">
                Title - Georgian
              </label>
              <input
                type="text"
                name=""
                id="title_ge"
                placeholder="Enter title"
                onChange={handleChange}
                required
                className="focus:outline-none  placeholder:text-black w-full px-5 py-1 rounded-sm ring-gray-200 ring-2 ring-offset-4"
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="location_en" className="px-2 py-2">
                Location - English
              </label>
              <input
                name="loc_en"
                id="location_en"
                placeholder="Description"
                className="focus:outline-none placeholder:text-black  min-h-[200px] w-full rounded-xl ring-gray-200 ring-2 ring-offset-4 py-2 px-5"
                onChange={handleChange}
                required
              ></input>
            </div>
            <div className="grid gap-2">
              <label htmlFor="location_ge" className="px-2 py-2">
                Loaction - Georgian
              </label>
              <input
                name="loc_ge"
                id="location_ge"
                placeholder="Description"
                required
                className="focus:outline-none placeholder:text-black  min-h-[200px] w-full rounded-xl ring-gray-200 ring-2 ring-offset-4 py-2 px-5"
                onChange={handleChange}
              ></input>
            </div>
            <div className="grid gap-2">
              <label htmlFor="location_ge" className="px-2 py-2">
                Nearby Metro Station - English
              </label>
              <input
                name="metro_en"
                id="metro_en"
                placeholder="Metro Station"
                required
                className="focus:outline-none placeholder:text-black  min-h-[200px] w-full rounded-xl ring-gray-200 ring-2 ring-offset-4 py-2 px-5"
                onChange={handleChange}
              ></input>
            </div>
            <div className="grid gap-2">
              <label htmlFor="location_ge" className="px-2 py-2">
                Nearby Metro Station - Georgian
              </label>
              <input
                name="metro_ge"
                id="metro_ge"
                placeholder="Metro Station"
                required
                className="focus:outline-none placeholder:text-black  min-h-[200px] w-full rounded-xl ring-gray-200 ring-2 ring-offset-4 py-2 px-5"
                onChange={handleChange}
              ></input>
            </div>
            <div className="grid gap-2">
              <label htmlFor="location_en" className="px-2 py-2">
                Maps Link
              </label>
              <input
                name="maps"
                id="maps"
                placeholder="Google Maps Link"
                required
                className="focus:outline-none placeholder:text-black w-full rounded-xl ring-gray-200 ring-2 ring-offset-4 py-2 px-5"
                onChange={handleChange}
              ></input>
            </div>
            <div className="grid gap-2">
              <label htmlFor="desc_en" className="px-2 py-2">
                Description - English
              </label>
              <textarea
                name="desc_en"
                wrap="hard"
                id="desc_en"
                placeholder="Description"
                required
                className="focus:outline-none placeholder:text-black  min-h-[200px] w-full rounded-xl ring-gray-200 ring-2 ring-offset-4 py-2 px-5"
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="grid gap-2">
              <label htmlFor="desc_ge" className="px-2 py-2">
                Description - Georgian
              </label>
              <textarea
                name="desc_ge"
                wrap="hard"
                id="desc_ge"
                placeholder="Description"
                required
                className="focus:outline-none placeholder:text-black  min-h-[200px] w-full rounded-xl ring-gray-200 ring-2 ring-offset-4 py-2 px-5"
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="grid gap-3">
              <div className="">
                <label htmlFor="">Square meter</label>
              </div>
              <input
                type="number"
                name="sqm"
                id="sqm"
                placeholder="Enter Square Meter"
                required
                className="focus:outline-none placeholder:text-black  w-full px-5 py-2 rounded-sm ring-2 ring-gray-200 ring-offset-4"
                onChange={handleChange}
              />
            </div>
            <div className=" grid gap-2">
              <div className="">
                <label htmlFor="price_usd">Price - USD</label>
              </div>
              <div className="relative">
                <input
                  type="number"
                  id="price_usd"
                  name=""
                  required
                  className="py-1 px-4 ps-9 pe-16 block w-full  rounded-sm ring-gray-200 ring-2 ring-offset-4  focus:outline-none border-gray-200 shadow-sm text-sm focus:z-10  disabled:opacity-50 disabled:pointer-events-none dark:bg-white dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                  placeholder="0.00"
                  onChange={handleChange}
                />
                <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4">
                  <span className="text-gray-500 dark:text-neutral-500">$</span>
                </div>
                <div className="absolute inset-y-0 end-0 flex items-center pointer-events-none z-20 pe-4">
                  <span className="text-gray-500 dark:text-neutral-500">
                    USD
                  </span>
                </div>
              </div>
            </div>
            <div className=" grid gap-2">
              <div className="">
                <label htmlFor="price_ge">Price - GE</label>
              </div>
              <div className="relative">
                <input
                  type="number"
                  id="price_ge"
                  name=""
                  required
                  className="py-1 px-4 ps-9 pe-16 block w-full  rounded-sm ring-gray-200 ring-2 ring-offset-4  focus:outline-none border-gray-200 shadow-sm text-sm focus:z-10  disabled:opacity-50 disabled:pointer-events-none dark:bg-white dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                  placeholder="0.00"
                  onChange={handleChange}
                />
                <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4">
                  <span className="text-gray-500 dark:text-neutral-500">
                    &#8382;
                  </span>
                </div>
                <div className="absolute inset-y-0 end-0 flex items-center pointer-events-none z-20 pe-4">
                  <span className="text-gray-500 dark:text-neutral-500">
                    LARI
                  </span>
                </div>
              </div>
            </div>
            <div className=" grid gap-2">
              <div className="">
                <label htmlFor="price_ms_usd">Price / metre - USD</label>
              </div>
              <div className="relative">
                <input
                  type="number"
                  id="price_ms_usd"
                  name=""
                  required
                  className="py-1 px-4 ps-9 pe-16 block w-full  rounded-sm ring-gray-200 ring-2 ring-offset-4  focus:outline-none border-gray-200 shadow-sm text-sm focus:z-10  disabled:opacity-50 disabled:pointer-events-none dark:bg-white dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                  placeholder="0.00"
                  onChange={handleChange}
                />
                <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4">
                  <span className="text-gray-500 dark:text-neutral-500">$</span>
                </div>
                <div className="absolute inset-y-0 end-0 flex items-center pointer-events-none z-20 pe-4">
                  <span className="text-gray-500 dark:text-neutral-500">
                    USD
                  </span>
                </div>
              </div>
            </div>
            <div className=" grid gap-2">
              <div className="">
                <label htmlFor="price_ms_ge">Price / metre - GE</label>
              </div>
              <div className="relative">
                <input
                  type="number"
                  id="price_ms_ge"
                  name=""
                  required
                  className="py-1 px-4 ps-9 pe-16 block w-full  rounded-sm ring-gray-200 ring-2 ring-offset-4  focus:outline-none border-gray-200 shadow-sm text-sm focus:z-10  disabled:opacity-50 disabled:pointer-events-none dark:bg-white dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                  placeholder="0.00"
                  onChange={handleChange}
                />
                <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4">
                  <span className="text-gray-500 dark:text-neutral-500">
                    &#8382;
                  </span>
                </div>
                <div className="absolute inset-y-0 end-0 flex items-center pointer-events-none z-20 pe-4">
                  <span className="text-gray-500 dark:text-neutral-500">
                    LARI
                  </span>
                </div>
              </div>
            </div>
            <div className="">
              <h1 className="text-2xl font-semibold py-5">Main Parameters</h1>
            </div>
            <div className="grid gap-3">
              <div className="">
                <label htmlFor="rooms">No. of Rooms</label>
              </div>
              <input
                type="number"
                name="rooms"
                id="rooms"
                required
                placeholder="Enter No. of Rooms"
                className="focus:outline-none placeholder:text-black  w-full px-5 py-2 rounded-sm ring-2 ring-gray-200 ring-offset-4"
                onChange={handleChange}
              />
            </div>
            <div className="grid gap-3">
              <div className="">
                <label htmlFor="bathrooms">No. of Bathrooms</label>
              </div>
              <input
                type="number"
                name="bathrooms"
                id="bathrooms"
                required
                placeholder="Enter No. of Bathrooms"
                className="focus:outline-none placeholder:text-black  w-full px-5 py-2 rounded-sm ring-2 ring-gray-200 ring-offset-4"
                onChange={handleChange}
              />
            </div>
            <div className="grid gap-3">
              <div className="">
                <label htmlFor="floors">No. of Floors</label>
              </div>
              <input
                type="text"
                name="floors"
                id="floors"
                required
                placeholder="Enter No. of Floors"
                className="focus:outline-none placeholder:text-black  w-full px-5 py-2 rounded-sm ring-2 ring-gray-200 ring-offset-4"
                onChange={handleChange}
              />
            </div>
            <div className="grid gap-3">
              <div className="">
                <label htmlFor="yard">Yard</label>
              </div>
              <select
                name=""
                id="yard"
                required
                onChange={handleChange}
                className="w-full px-5 py-1 focus:outline-none rounded-sm ring-gray-200 ring-2 ring-offset-4"
              >
                <option value="" disabled selected>
                  Choose
                </option>
                <option value={true}>Yes</option>
                <option value={false}>No</option>
              </select>
            </div>
            {data.yard ? (
              <div className="grid gap-3">
                <div className="">
                  <label htmlFor="yard_sqm">Yard area in sqm</label>
                </div>
                <input
                  type="number"
                  id="yard_sqm"
                  required
                  placeholder="Enter yard area in sqm"
                  className="focus:outline-none placeholder:text-black  w-full px-5 py-2 rounded-sm ring-2 ring-gray-200 ring-offset-4"
                  onChange={handleChange}
                />
              </div>
            ) : (
              ""
            )}

            <div className="">
              <h1 className="text-2xl font-semibold py-5">
                Additional Parameters
              </h1>
            </div>
            <div className="grid gap-3">
              <div className="">
                <label htmlFor="status">Status</label>
              </div>
              <select
                name="status"
                id="status"
                required
                onChange={handleChange}
                className="w-full px-5 py-1 focus:outline-none rounded-sm ring-gray-200 ring-2 ring-offset-4"
              >
                <option value="" disabled selected>
                  Choose
                </option>
                <option value={"New Building"}>New Building</option>
                <option value={"On Construction"}>On Construction</option>
              </select>
            </div>
            <div className="grid gap-3">
              <div className="">
                <label htmlFor="internet">Internet</label>
              </div>
              <select
                name="internet"
                id="internet"
                onChange={handleChange}
                required
                className="w-full px-5 py-1 focus:outline-none rounded-sm ring-gray-200 ring-2 ring-offset-4"
              >
                <option value="" disabled selected>
                  Choose
                </option>
                <option value={true}>Yes</option>
                <option value={false}>No</option>
              </select>
            </div>
            <div className="grid gap-3">
              <div className="">
                <label htmlFor="phone">Phone</label>
              </div>
              <select
                name="phone"
                id="phone"
                required
                onChange={handleChange}
                className="w-full px-5 py-1 focus:outline-none rounded-sm ring-gray-200 ring-2 ring-offset-4"
              >
                <option value="" disabled selected>
                  Choose
                </option>
                <option value={true}>Yes</option>
                <option value={false}>No</option>
              </select>
            </div>
            <div className="grid gap-3">
              <div className="">
                <label htmlFor="parking">Parking Lot</label>
              </div>
              <select
                name="parking"
                id="parking"
                required
                onChange={handleChange}
                className="w-full px-5 py-1 focus:outline-none rounded-sm ring-gray-200 ring-2 ring-offset-4"
              >
                <option value="" disabled selected>
                  Choose
                </option>
                <option value={true}>Yes</option>
                <option value={false}>No</option>
              </select>
            </div>
            <div className="grid gap-3">
              <div className="">
                <label htmlFor="ac">Air Conditioner</label>
              </div>
              <select
                name="ac"
                id="ac"
                required
                onChange={handleChange}
                className="w-full px-5 py-1 focus:outline-none rounded-sm ring-gray-200 ring-2 ring-offset-4"
              >
                <option value="" disabled selected>
                  Choose
                </option>
                <option value={true}>Yes</option>
                <option value={false}>No</option>
              </select>
            </div>
            <div className="grid gap-3">
              <div className="">
                <label htmlFor="tv">TV</label>
              </div>
              <select
                name=""
                id="tv"
                required
                onChange={handleChange}
                className="w-full px-5 py-1 focus:outline-none rounded-sm ring-gray-200 ring-2 ring-offset-4"
              >
                <option value="" disabled selected>
                  Choose
                </option>
                <option value={true}>Yes</option>
                <option value={false}>No</option>
              </select>
            </div>
            <div className="grid gap-3">
              <div className="">
                <label htmlFor="swimming_pool">Swimming Pool</label>
              </div>
              <select
                name=""
                id="swimming_pool"
                onChange={handleChange}
                required
                className="w-full px-5 py-1 focus:outline-none rounded-sm ring-gray-200 ring-2 ring-offset-4"
              >
                <option value="" disabled selected>
                  Choose
                </option>
                <option value={true}>Yes</option>
                <option value={false}>No</option>
              </select>
            </div>
            <div className="">
              <h1 className="text-2xl font-semibold py-5">Categorization</h1>
            </div>
            <div className="grid gap-3">
              <div className="">
                <label htmlFor="trend">Trending</label>
              </div>
              <select
                name="trend"
                id="trend"
                onChange={handleChange}
                required
                className="w-full px-5 py-1 focus:outline-none rounded-sm ring-gray-200 ring-2 ring-offset-4"
              >
                <option value="" disabled selected>
                  Choose
                </option>
                <option value={true}>Yes</option>
                <option value={false}>No</option>
              </select>
            </div>
            <div className="grid gap-3">
              <div className="">
                <label htmlFor="tv">Popular</label>
              </div>
              <select
                name="popular"
                id="popular"
                required
                onChange={handleChange}
                className="w-full px-5 py-1 focus:outline-none rounded-sm ring-gray-200 ring-2 ring-offset-4"
              >
                <option value="" disabled selected>
                  Choose
                </option>
                <option value={true}>Yes</option>
                <option value={false}>No</option>
              </select>
            </div>
            <div className="pt-5">
              <input
                type="submit"
                value="Create"
                className="w-full rounded-xl bg-black py-2 text-white"
              />
            </div>
          </form>
        </section>
      </main>
    </div>
  );
};

export default CreateProperty;
