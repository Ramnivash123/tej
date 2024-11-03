import React, { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {

    const [name,setName] = useState('')
    const [phone,setPhone] = useState('')
    const [help,setHelp] = useState('')

    const handleSubmit = async(e) => {
        e.preventDefault()
        // Send form data to your server
        try{
            const res = await axios.post("/api/services",{
                name,
                phone,
                help,
            })
            console.log("Email send successfully")
        }
        catch(error){
            console.error(error)
        }
    }

  return (
    <div className="bg-white">
      <main className="bg-gradient-to-br from-white to-violet-100 lg:p-20  lora">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 200, y: 0 }}
          whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 50 }}
          className="grid lg:grid-cols-3 p-10 lg:p-0"
        >
          <div className="">
            <h1 className="text-5xl  font-semibold">Get in touch!</h1>
            <h4 className="pt-3 text-xl">
              Contact Us for Expert Legal Advice and Support Tailored to Your
              Needs.
            </h4>
          </div>
        </motion.div>
        <section className="grid lg:grid-cols-5 lg:py-10  pb-20">
          <div className="col-span-2 p-10 lg:p-0">
            <div className="flex flex-col h-full gap-10 justify-center">
              <motion.div
                initial={{ opacity: 0.5, scale: 0.9, x: 0, y: 200 }}
                whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                transition={{ type: "spring", stiffness: 200, damping: 50 }}
                className=""
              >
                <h1 className="font-semibold text-2xl">Ph.no</h1>
                <h5 className="text-xl">01+59227592795</h5>
              </motion.div>
              <motion.div
                initial={{ opacity: 0.5, scale: 0.9, x: 0, y: 150 }}
                whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                transition={{ type: "spring", stiffness: 200, damping: 50 }}
                className=""
              >
                <h1 className="font-semibold text-2xl">Email</h1>
                <h5 className="text-xl">99 services.ge@gmail.com</h5>
              </motion.div>
              <motion.div
                initial={{ opacity: 0.7, scale: 0.9, x: 0, y: 50 }}
                whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                transition={{ type: "spring", stiffness: 200, damping: 50 }}
                className=""
              >
                <h1 className="font-semibold text-2xl">Address</h1>
                <h5 className="text-xl">
                  Georgia, Rustavi city, Firosmani street, N 10
                </h5>
              </motion.div>
            </div>
          </div>
          <div className="col-span-3 ">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 200, y: 0 }}
              whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 50 }}
              className="bg-[#1E0C51] rounded-2xl  p-7 max-w-[600px] m-auto"
            >
              <form action="" onSubmit={handleSubmit} className="grid gap-5">
                <input
                  type="text"
                  name=""
                  id="name"
                  className="w-full py-3 px-5 rounded-xl text-xl focus:outline-none"
                  placeholder="Name"
                  required
                  onChange={(e)=>setName(e.target.value)}
                />
                <input
                  type="tel"
                  name=""
                  id="phno"
                  className="w-full py-3 px-5 rounded-xl text-xl focus:outline-none"
                  placeholder="Phone Number"
                  required
                  onChange={(e)=>setPhone(e.target.value)}
                />
                <textarea
                  name=""
                  id=""
                  className="min-h-[150px] rounded-xl p-5 w-full text-xl focus:outline-none"
                  placeholder="How can we help you"
                  required
                  onChange={(e)=>setHelp(e.target.value)}
                ></textarea>
                <input
                  type="submit"
                  value="Get Consultation"
                  className="rounded-xl py-2 bg-[#405FF0] text-white font-semibold text-xl hover:bg-blue-600/50 duration-200"
                />
              </form>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Contact;
