import React from "react";
import { Link } from "react-router";

const Footer = () => {
  return (
    <div className="container bg-amber-100 mx-auto max-w-7xl flex items-center justify-between px-6 py-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div>
          {/* About section */}
          <h3 className="text-lg font-semibold mb-2">About</h3>
          <p className="text-sm text-gray-700 text-justify pr-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            nisi iste soluta, amet exercitationem minus tenetur dolore esse
            atque.
          </p>
          <div>
            <p className="text-sm font-semibold text-gray-800"><strong className="text-lg font-semibold">Email:</strong> hashmotali561@gmail.com</p>
            <p className="text-sm font-semibold text-gray-800"><strong className="text-lg font-semibold">Phone:</strong> 01798204293</p>
          </div>
        </div>
        {/* QueckList section */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Quick Link</h3>
          <ul>
            <li>
                <Link className="hover:text-blue-700" to='/'>Home</Link>
            </li>
            <li>
                <Link className="hover:text-blue-700" to='/about'>About</Link>
            </li>
            <li>
                <Link className="hover:text-blue-700" to='/blogs'>Blogs</Link>
            </li>
            <li>
                <Link className="hover:text-blue-700" to='/author'>Author</Link>
            </li>
            <li>
                <Link className="hover:text-blue-700" to='/contact'>Contact</Link>
            </li>
          </ul>
        </div>
        {/* Catagry section */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Categories</h3>
          <ul>
            <li>
                <Link className="hover:text-blue-700" to='/'>Lifestyle</Link>
            </li>
            <li>
                <Link className="hover:text-blue-700" to='/'>Technology</Link>
            </li>
            <li>
                <Link className="hover:text-blue-700" to='/'>Travels</Link>
            </li>
            <li>
                <Link className="hover:text-blue-700" to='/'>Business</Link>
            </li>
            <li>
                <Link className="hover:text-blue-700" to='/contact'>Contact</Link>
            </li>
          </ul>
        </div>
        {/* email input section */}
        <div className="bg-white py-4 px-4">
          <h3 className="text-lg font-semibold mb-2">Weekly newsletter</h3>
          <p className="text-sm text-gray-700 text-justify pr-4 pb-4">
            Sign up for our weekly newsletter and receive exciting updates,
            articles, and offers.Please subscribe.
          </p>
          <form className="flex flex-col items-center justify-center space-y-4">
            <input
              type="email"
              placeholder="Your email address..."
              className="border-1 hover:border-blue-700 px-2 py-1 rounded-md outline-none border-red-300 w-full"
            />
            <button className="bg-blue-600 hover:bg-blue-700 w-full rounded-md py-1">Subscribe</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;
