import React from "react";

import NewLetterImg from "../assets/news-letter.png";
import { Link } from "react-router";
import Reveal from "../animation/Reveal";

const NewsLetter = () => {
  return (
    <Reveal>
      <div
        className="my-16 bg-cover bg-no-repeat bg-center rounded-lg "
        style={{ backgroundImage: `url(${NewLetterImg})` }}
      >
        <div className="bg-black/50 py-12 flex flex-col items-center justify-center rounded-md">
          <div className=" flex flex-col flex-wrap items-center justify-center text-center text-white">
            <h2 className="text-2xl font-bold font-serif">
              Sign up for our newletter
            </h2>
            <p className="text-lg font-serif py-2">
              Get the letest news, Update and offers to straight letters
            </p>
            <button className="bg-white hover:bg-blue-400 text-black text-sm font-semibold px-6 py-2 rounded-full">
              <Link to="/sign-up">Sign up</Link>
            </button>
          </div>
        </div>
      </div>
    </Reveal>
  );
};

export default NewsLetter;
