import React from "react";
import { Link } from "react-router";
import Reveal from "../animation/Reveal";
const BlogsCard = ({ blog }) => {
  // console.log(blog._id);

  return (
    <Reveal>
      <div className="bg-white rounded-md shadow-2xl">
        <div className=" p-4 space-y-2">
          <div className="mb-4">
            <Link to={`/blog/${blog?._id}`}>
              <img
                src={blog?.image}
                alt=""
                className="w-full h-48 rounded-md object-cover hover:scale-105 transition-all duration-200 "
              />
            </Link>
          </div>
          <span className="bg-blue-600  font-semibold rounded-md px-4 py-0.5">
            Technology
          </span>
          <h2 className="text-2xl font-semibold hover:text-blue-700 leading-tight text-gray-800">
            <Link to={`/blog/${blog?._id}`}>{blog?.title}</Link>
          </h2>
          <p className="text-sm text-gray-800">
            {blog?.description?.substring(0, 100)}...
          </p>
          <div className="flex items-center space-x-4">
            <img
              src={blog?.author?.image}
              alt=""
              className="w-16 h-16 rounded-full"
            />
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-gray-800">
                {blog?.author?.name}
              </span>
              <span className="text-sm font-semibold text-gray-500">
                {blog?.date}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
};

export default BlogsCard;
