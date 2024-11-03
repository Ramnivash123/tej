"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";

const SignUp = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [show, setShow] = useState(false);
  console.log(email);

  const handleSubmit = async () => {
    try {
      if (password === password2) {
        const res = await axios.post("/api", {
          email,
          password,
        });
        console.log("res.data");
        localStorage.setItem("token", res.data.token);
        router.push("/realty");
      } else {
        alert("Passwords do not match!");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <main className="w-full h-screen flex items-center justify-center">
        <section className="shadow-md rounded-xl p-10">
          <div className="flex justify-center">
            <h1 className="montserrat text-xl font-bold">SignUp</h1>
          </div>
          <div className="pt-10">
            <form action="" className="grid gap-5" onSubmit={handleSubmit}>
              <input
                type="email"
                name=""
                id="email"
                required
                className="focus:outline-none w-full border-b px-5 py-2 placeholder:text-black/60"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="flex items-center">
                <input
                  type={show ? "text" : "password"}
                  name=""
                  id="password"
                  required
                  className="focus:outline-none w-full border-b pl-5 pr-[35px] py-2 placeholder:text-black/60"
                  placeholder=" Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div className="ml-[-25px] " onClick={() => setShow(!show)}>
                  {show ? <FaRegEye /> : <FaRegEyeSlash />}
                </div>
              </div>
              <div className="flex items-center">
                <input
                  type={show ? "text" : "password"}
                  name=""
                  id="password"
                  required
                  className="focus:outline-none w-full border-b pl-5 pr-[35px] py-2 placeholder:text-black/60"
                  placeholder="Confirm Password"
                  onChange={(e) => setPassword2(e.target.value)}
                />
                <div className="ml-[-25px] " onClick={() => setShow(!show)}>
                  {show ? <FaRegEye /> : <FaRegEyeSlash />}
                </div>
              </div>
              <input
                type="submit"
                value="Submit"
                className="bg-black/70 hover:bg-black duration-200 text-white montserrat font-bold py-2 rounded-xl mt-5"
              />
            </form>
          </div>
          <div className="pt-5 w-full text-center">
            <h1 className="text-sm pt-5">
              Already have an account ?{" "}
              <span>
                <Link
                  href={"/realty/login"}
                  className="text-blue-500 hover:underline underline-offset-4"
                >
                  Login
                </Link>
              </span>
            </h1>
          </div>
        </section>
      </main>
    </div>
  );
};

export default SignUp;
