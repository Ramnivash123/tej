"use client";
import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import app from "@/firebase/config";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
const auth = getAuth(app);
import Link from "next/link";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
// import logIn from "@/firebase/auth/login";

function AdminLogin() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [show, setShow] = useState(false);
  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      // Authenticate the user using Firebase Auth
      await signInWithEmailAndPassword(auth, email, password);
      // Redirect to the admin panel after successful login
      router.push("/realty/admin");
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <div className="">
      {/* <div className="p-6">
      <h1 className="font-koulen text-4xl mb-14 text-grey">Admin Login</h1>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="text-xl p-3 mb-4 w-full"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="text-xl p-3 w-full"
        />
        <button
          type="submit"
          className="block p-3 bg-blue-500 text-white rounded-xl mx-auto mt-11 w-full"
        >
          Login
        </button>
      </form>
      {error && <p>{error}</p>}
    </div> */}
      <div>
        <main className="w-full h-screen flex items-center justify-center">
          <section className="shadow-md rounded-xl p-10">
            <div className="flex justify-center">
              <h1 className="montserrat text-xl font-bold">Login</h1>
            </div>
            <div className="pt-10">
              <form className="grid gap-5" onSubmit={handleLogin}>
                <input
                  type="email"
                  name=""
                  id="email"
                  required
                  className="focus:outline-none w-full border-b px-5 py-2 placeholder:text-black/60"
                  placeholder="Email"
                  value={email}
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
                    value={password}
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
            {/* <div className="pt-5 w-full text-center">
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
            </div> */}
          </section>
        </main>
      </div>
    </div>
  );
}

export default AdminLogin;
