import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { motion } from "framer-motion";

const Faq = () => {
  return (
    <div>
      <main className="grid lg:grid-cols-3 px-10 lg:px-20 py-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 200, y: 0 }}
          whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 50 }}
        >
          <h1 className="text-4xl lora font-semibold pb-3">
            Frequently Asked Questions
          </h1>
          <div className="h-1 w-[200px] bg-[#00A1EF] rounded-xl"></div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 0, y: 200 }}
          whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 50 }}
          className="col-span-2 pt-10 lg:pt-0"
        >
          <div class="hs-accordion-group">
            <div class="hs-accordion active" id="hs-basic-heading-one">
              <button
                class="hs-accordion-toggle shadow-md  px-5 bg-blue-50/40 border-2 border-gray-300 my-2 hs-accordion-active:text-[#00A1EF] py-3 inline-flex items-center gap-x-3 w-full font-semibold text-start  hover:text-gray-500 rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 "
                aria-controls="hs-basic-collapse-one"
              >
                <div className="flex justify-between w-full">
                  <h1 className="max-w-[280px] md:max-w-[400px] lg:max-w-[500px]">
                    How can 99 Services help with student issues?
                  </h1>
                  <IoIosArrowDown className=" text-2xl text-blue-400" />
                </div>
              </button>
              <div
                id="hs-basic-collapse-one"
                class="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 "
                aria-labelledby="hs-basic-heading-one"
              >
                <div className="flex pl-10 lg:pl-20">
                  <div className="w-1 my-5 bg-[#00A1EF]"></div>
                  <div className="">
                    <p class="  p-5">
                      We provide legal support for student visa applications,
                      academic disputes, and housing concerns, ensuring a smooth
                      educational journey.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="hs-accordion" id="hs-basic-heading-two">
              <button
                class="hs-accordion-toggle shadow-md px-5 bg-blue-50/40 border-2 border-gray-300 my-2 hs-accordion-active:text-[#00A1EF] py-3 inline-flex items-center gap-x-3 w-full font-semibold text-start  hover:text-gray-500 rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 "
                aria-controls="hs-basic-collapse-two"
              >
                <div className="flex justify-between w-full">
                  <h1 className="max-w-[280px] md:max-w-[400px] lg:max-w-[500px]">
                    Can 99 Services assist with visa applications and
                    extensions?
                  </h1>
                  <IoIosArrowDown className=" text-2xl text-blue-400" />
                </div>
              </button>
              <div
                id="hs-basic-collapse-two"
                class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300 "
                aria-labelledby="hs-basic-heading-two"
              >
                <div className="flex pl-10 lg:pl-20">
                  <div className="w-1 my-5 bg-[#00A1EF]"></div>
                  <div className="">
                    <p class="  p-5">
                      We provide legal support for student visa applications,
                      academic disputes, and housing concerns, ensuring a smooth
                      educational journey.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="hs-accordion" id="hs-basic-heading-two">
              <button
                class="hs-accordion-toggle shadow-md px-5 bg-blue-50/40 border-2 border-gray-300 my-2 hs-accordion-active:text-[#00A1EF] py-3 inline-flex items-center gap-x-3 w-full font-semibold text-start  hover:text-gray-500 rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 "
                aria-controls="hs-basic-collapse-two"
              >
                <div className="flex justify-between w-full">
                  <h1 className="max-w-[280px] md:max-w-[400px] lg:max-w-[500px]">
                    How does 99 Services help with bank statements?
                  </h1>
                  <IoIosArrowDown className=" text-2xl text-blue-400" />
                </div>
              </button>
              <div
                id="hs-basic-collapse-two"
                class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300 "
                aria-labelledby="hs-basic-heading-two"
              >
                <div className="flex pl-10 lg:pl-20">
                  <div className="w-1 my-5 bg-[#00A1EF]"></div>
                  <div className="">
                    <p class="  p-5">
                      We assist in obtaining and verifying bank statements for
                      various purposes, ensuring accuracy and compliance with
                      legal requirements.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="hs-accordion" id="hs-basic-heading-two">
              <button
                class="hs-accordion-toggle shadow-md px-5 bg-blue-50/40 border-2 border-gray-300 my-2 hs-accordion-active:text-[#00A1EF] py-3 inline-flex items-center gap-x-3 w-full font-semibold text-start  hover:text-gray-500 rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 "
                aria-controls="hs-basic-collapse-two"
              >
                <div className="flex justify-between w-full">
                  <h1 className="max-w-[280px] md:max-w-[400px] lg:max-w-[500px]">
                    How confidential is the information I share with 99
                    Services?{" "}
                  </h1>
                  <IoIosArrowDown className=" text-2xl text-blue-400" />
                </div>
              </button>
              <div
                id="hs-basic-collapse-two"
                class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300 "
                aria-labelledby="hs-basic-heading-two"
              >
                <div className="flex pl-10 lg:pl-20">
                  <div className="w-1 my-5 bg-[#00A1EF]"></div>
                  <div className="">
                    <p class="  p-5">
                      Your privacy is our priority. We maintain strict
                      confidentiality and adhere to professional standards in
                      handling your personal information.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="hs-accordion" id="hs-basic-heading-two">
              <button
                class="hs-accordion-toggle shadow-md px-5 bg-blue-50/40 border-2 border-gray-300 my-2 hs-accordion-active:text-[#00A1EF] py-3 inline-flex items-center gap-x-3 w-full font-semibold text-start  hover:text-gray-500 rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 "
                aria-controls="hs-basic-collapse-two"
              >
                <div className="flex justify-between w-full">
                  <h1 className="max-w-[280px] md:max-w-[400px] lg:max-w-[500px]">
                    Why choose 99 Services for legal assistance?{" "}
                  </h1>
                  <IoIosArrowDown className=" text-2xl text-blue-400" />
                </div>
              </button>
              <div
                id="hs-basic-collapse-two"
                class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300 "
                aria-labelledby="hs-basic-heading-two"
              >
                <div className="flex pl-10 lg:pl-20">
                  <div className="w-1 my-5 bg-[#00A1EF]"></div>
                  <div className="">
                    <p class="  p-5">
                      99 Services is committed to providing personalized, expert
                      legal advice and support tailored to your specific needs,
                      ensuring peace of mind and efficient resolution.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default Faq;
