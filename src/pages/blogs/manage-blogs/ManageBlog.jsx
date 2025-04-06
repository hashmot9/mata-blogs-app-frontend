import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import axios from "axios";
import {motion} from "framer-motion"
import Reveal from "../../../animation/Reveal";

const ManageBlog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/v1/blog/all-blogs")
      .then((res) => res.json())
      .then((data) => setBlogs(data))
      .catch((error) => {
        console.error("Error fetching blog data:" + error);
      });
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete")) {
      try {
        await axios.delete(
          `http://localhost:8080/api/v1/blog/delete-blog/${id}`
        );
        setBlogs(blogs.filter((blog) => blog._id !== id));
      } catch (error) {
        console.log(error);
      }
    }
  };
  console.log(blogs);

  return (
    <section className="container mx-auto max-w-7xl items-center justify-center md:px-6 py-4">
      <div className="py-24">
        <motion.h1 
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className="text-3xl font-bold pb-6">Manage Blogs</motion.h1>
        <Reveal>
        <div>
          {/* Table goes here */}
          {blogs.length > 0 ? (
            <div className="bg-white shadow-2xl py-4 px-6 flex flex-col items-center justify-center">
              <table>
                <thead className=" md:w-full border bg-gray-700 md:px-6 py-4 text-xl text-white font-serif">
                  <tr className="py-4">
                    <th className="border">
                      <p>Titles</p>
                    </th>
                    <th className="border">
                      <p>Authors</p>
                    </th>
                    <th className="border">
                      <p>Date</p>
                    </th>
                    <th className="border py-3">
                      <p>Actions</p>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {blogs.map((blog, index) => (
                    <tr key={index} className="border bg-gray-500 shadow-md">
                      <td className="border py-2 px-4">
                        <p>
                          <span>{index + 1}</span>. {blog.title}
                        </p>
                      </td>
                      <td className="border py-2 px-4">
                        <p>{blog.author.name}</p>
                      </td>
                      <td>
                        <p className=" py-2 px-4">
                          {blog?.date ? (
                            <span>
                              {new Date(blog.date).toLocaleDateString()}
                            </span>
                          ) : (
                            <span>
                              {new Date(blog.createdAt).toLocaleDateString()}
                            </span>
                          )}
                        </p>
                      </td>
                      <td className="border py-2 px-4 space-x-1 space-y-1 lg:space-y-0.5 ">
                        <button className="bg-blue-600 hover:bg-blue-800 rounded-md py-1 px-5">
                          <Link to={`/blog/${blog?._id}`}>View</Link>
                        </button>
                        <button className="bg-yellow-600 hover:bg-yellow-800 rounded-md py-1 px-5.5">
                          <Link to={`/blog/edit/${blog?._id}`}>Edit</Link>
                        </button>
                        <button
                          onClick={() => handleDelete(blog?._id)}
                          className="bg-red-600 hover:bg-red-800 rounded-md py-1 px-3"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div>
              <p>Data not found</p>
            </div>
          )}
        </div>
        </Reveal>
      </div>
    </section>
  );
};

export default ManageBlog;
