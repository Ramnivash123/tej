"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import logIn from "@/firebase/auth/login";
import { useRouter } from "next/navigation";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await logIn(email, password);
      router.push("/realty");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <main className="w-full h-screen flex items-center justify-center">
        <section className="shadow-md rounded-xl p-10">
          <div className="flex justify-center">
            <h1 className="montserrat text-xl font-bold">Login</h1>
          </div>
          <div className="pt-10">
            <form className="grid gap-5" onSubmit={handleSubmit}>
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
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div className="ml-[-25px] " onClick={() => setShow(!show)}>
                  {show ? <FaRegEye /> : <FaRegEyeSlash />}
                </div>
              </div>
              <button
                type="submit"
                className="bg-black/70 hover:bg-black duration-200 text-white montserrat font-bold py-2 rounded-xl mt-5"
              >
                Submit
              </button>
            </form>
          </div>
          <div className="pt-5 w-full text-center">
            <Link
              href={"/realty/forgot-password"}
              className=" text-sm text-blue-500 hover:underline underline-offset-4 text-center"
            >
              Forgot Password ?
            </Link>
            <h1 className="text-sm pt-5">
              Don&apos;t have an account ?{" "}
              <span>
                <Link
                  href={"/realty/signup"}
                  className="text-blue-500 hover:underline underline-offset-4"
                >
                  SignUp
                </Link>
              </span>
            </h1>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Login;
