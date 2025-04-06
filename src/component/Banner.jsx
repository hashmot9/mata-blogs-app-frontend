import React from "react";
import { Link } from "react-router";
import BannerImg from "../assets/blogs/blog-0.png";
import AvaterImg from "../assets/author.png";
import {motion} from "framer-motion"

const Banner = () => {
    
    
  return (
    <div className="py-16">
      {/* Banner heading */}
      <div className="text-center mb-8">
        <motion.h1 
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
        }}
        className="text-4xl font-semibold mb-4">Meta Blog</motion.h1>
        <motion.ul 
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
        }}
        className="flex flex-wrap  items-center justify-center gap-4">
          <li className="px-4 py-1 hover:bg-blue-200 border-0 bg-gray-300 rounded-md text-gray-600 font-semibold hover:underline underline-offset-4">
            <Link to='/'>Home</Link>
          </li>
          <li className="px-4 py-1 hover:bg-blue-200 border-0 bg-gray-300 rounded-md text-gray-600 font-semibold hover:underline underline-offset-4">
            <Link to='/add-blog'>Add new blog</Link>
          </li>
          <li className="px-4 py-1 hover:bg-blue-200 border-0 bg-gray-300 rounded-md text-gray-600 font-semibold hover:underline underline-offset-4">
            <Link to='/manage-blogs'>Manage blogs</Link>
          </li>
        </motion.ul>
      </div>
      {/* Banner image */}
      <motion.div 
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
      }}
      className="md:min-h-[450px] h-80 w-full rounded-md bg-center bg-cover bg-no-repeat" style={{backgroundImage: `url(${BannerImg})`}}>
        <div className="flex flex-col flex-wrap h-full justify-end p-5 text-white">
            <span className="bg-blue-950 w-30 text-center font-semibold rounded-md py-1">Technology</span>
            <h2 className="md:text-4xl md:w-1/2 py-2">The impact of Technology on the Workplace: How Technology is chinging</h2>
            <div className="flex flex-wrap text-center space-x-4">
                <img src={AvaterImg} alt="" />
                <div className="flex flex-col text-center">
                  <span className="text-sm text-white">Tracay Wilsion</span>
                  <span className="text-sm text-white">20 march 2025</span>
                </div>
            </div>
        </div>

      </motion.div>
    </div>
  );
};

export default Banner;
