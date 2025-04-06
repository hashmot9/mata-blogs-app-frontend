import React from "react";
import AvaitetContactImg from "../../assets/contact-animation.gif";
import Reveal from "../../animation/Reveal";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section className="pt-20 pb-5">
      <div className="container mx-auto max-w-7xl items-center justify-center md:px-6 py-4">
        <motion.h2
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className="text-3xl font-bold font-serif text-center pb-8"
        >
          Get In Touch
        </motion.h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* left side */}
          <Reveal>
            <div>
              <div>
                <img src={AvaitetContactImg} alt="" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold ">Contact Information</h3>
                <p className="text-sm lg:pr-4">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
                  sunt veritatis quam blanditiis porro explicabo numquam esse
                  sequi nostrum!
                </p>
                <div className="space-y-1">
                  <p className="text-sm">
                    <strong className="text-mdtext-black  text-black font-semibold ">
                      Email:
                    </strong>{" "}
                    hashmotali561@gmail.con
                  </p>
                  <p className="text-sm">
                    <strong className="text-md font-semibold ">Phome:</strong>{" "}
                    01798-204293
                  </p>
                  <p className="text-sm">
                    <strong className="text-md font-semibold ">Email:</strong>{" "}
                    Kamarkhanda, Sirajganj
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
          {/* right side */}
          <Reveal>
            <div className="bg-white rounded-md shadow-2xl">
              <form className="px-6 py-8 space-y-2">
                <div className=" space-y-2">
                  <label
                    htmlFor="name"
                    className="text-md text-black font-semibold pb-2"
                  >
                    Name:
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Your name"
                    className="border border-gray-500 text-black w-full rounded-md focus:ring-1 focus:ring-indigo-600 outline-none py-2 px-6 "
                  />
                </div>
                <div className=" space-y-2">
                  <label
                    htmlFor="email"
                    className="text-md text-black font-semibold pb-2"
                  >
                    Email:
                  </label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Your email"
                    className="border border-gray-500 text-black w-full rounded-md focus:ring-1 focus:ring-indigo-600 outline-none py-2 px-6 "
                  />
                </div>
                <div className=" space-y-2">
                  <label
                    htmlFor="number"
                    className="text-md text-black font-semibold pb-2"
                  >
                    Phome:
                  </label>
                  <input
                    type="text"
                    name="number"
                    id="number"
                    placeholder="Your phone number"
                    className="border  border-gray-500 w-full text-black rounded-md focus:ring-1 focus:ring-indigo-600 outline-none py-2 px-6 "
                  />
                </div>
                <div className=" space-y-2">
                  <label
                    htmlFor="message"
                    className="text-md text-black font-semibold pb-2"
                  >
                    Message:
                  </label>
                  <textarea
                    rows="4"
                    type="message"
                    name="message"
                    id="message"
                    placeholder="Pleace comment"
                    className="border text-black border-gray-500 w-full rounded-md focus:ring-1 focus:ring-indigo-600 outline-none py-2 px-6 "
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full rounded-md bg-indigo-600 hover:bg-indigo-700 text-center px-6 py-2"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
