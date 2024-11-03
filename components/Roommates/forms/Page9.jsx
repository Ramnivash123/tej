"use client";
import Header from "@/components/Roommates/forms/Header";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { IoIosArrowBack } from "react-icons/io";
import axios from "axios";
import { API } from "@/config/config";
const Page9 = () => {
  const router = useRouter();
  const [requirements, setRequirements] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (requirements === "") {
      console.log("hell");
    } else {
      console.log("hi");
      sessionStorage.setItem("requirements", requirements);
      sendmail();
    }
  };

  const sendmail = async () => {
    try {
      const name = sessionStorage.getItem("name");
      const age = sessionStorage.getItem("age");
      const gender = sessionStorage.getItem("gender");
      const phone = sessionStorage.getItem("phone");
      const email = sessionStorage.getItem("email");
      const profession = sessionStorage.getItem("profession");
      const city = sessionStorage.getItem("city");
      const street = sessionStorage.getItem("street");
      const budget = sessionStorage.getItem("budget");
      const apartment = sessionStorage.getItem("apartment");
      const rent = sessionStorage.getItem("rent");
      const roommates = sessionStorage.getItem("roommates");
      if(name === null || age === null || gender === null || phone === null || email === null || profession === null || city === null || street === null || budget === null || rent === null || apartment === null || roommates === null) {
        alert("Please fill all required fields");
        router.push("/roommates");
      }
      else{
        const res = await axios.post(`${API}/send-email-roommates`, {
          name,
          age,
          gender,
          phone,
          email,
          profession,
          city,
          street,
          budget,
          apartment,
          rent,
          roommates,
          requirements,
        });
        console.log(res.data);
        router.push("/roommates/10");
      }
      
    } catch (error) {
      alert("Error sending mail");
      console.log("mail");
      router.push("/roommates")
    }
  };
  return (
    <form onSubmit={handleSubmit} className="h-[92vh] overflow-hidden forms">
      <Header />
      <Link
        href={"/roommates/8"}
        className="absolute p-2 rounded-full bg-white/60 lg:top-[45%] left-10 z-[10]"
      >
        <IoIosArrowBack className="text-2xl" />
      </Link>
      <motion.div
        initial={{ opacity: 0, scale: 1.4, x: 200 }}
        whileInView={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 50 }}
        className="flex justify-center w-full relative z-[2] h-full"
      >
        <section>
          <div className="flex justify-center">
            <img src="/roommates/fp9.png" alt="" className="w-[200px]" />
          </div>
          <div className="text-center font-bold text-white text-[20px] py-2">
            <h1>
              would you please share your <br /> requirements for your room?
            </h1>
          </div>
          <div className="flex justify-center">
            <div className="bg-white rounded-2xl py-3 px-5">
              <textarea
                className=" focus:outline-none rounded-xl min-h-[100px] min-w-[250px]"
                placeholder="please share your requirements here"
                value={requirements}
                onChange={(e) => setRequirements(e.target.value)}
                name=""
                id=""
                required
              ></textarea>
            </div>
          </div>
        </section>
      </motion.div>

      <main className="absolute bottom-0 w-full">
        <section className="overflow-hidden">
          <motion.div
            initial={{ opacity: 0.5, scale: 1.4, x: 100 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 50 }}
            className=""
          >
            <img
              src="/roommates/buildimg.png"
              alt="buildings"
              className="w-full object-cover h-[250px] pb-[80px]"
            />
          </motion.div>
        </section>
        <section className="absolute bottom-[50px]  w-full flex justify-center">
          <button
            type="submit"
            className="flex justify-center duration-150 hover:scale-105 relative z-[10] cursor-pointer mr-10"
          >
            <img src="/roommates/bus2.png" alt="" className="w-[200px]" />
            <h1 className="font-bold text-xl text-white ml-[-100px] pt-2">
              Next
            </h1>
          </button>
        </section>
        <section className="bg-black h-[80px] w-full absolute z-[2] bottom-0"></section>
      </main>
    </form>
  );
};

export default Page9;
