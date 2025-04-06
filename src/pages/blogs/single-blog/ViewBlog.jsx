import React, { useEffect, useState } from "react";
import axios, { Axios } from "axios";
import authorImg from "../../../assets/authors/author-1.png";
import BlogsImg from "../../../assets/blogs/blog-1.png";
import { useParams } from "react-router";
import { motion } from "framer-motion";
import Reveal from "../../../animation/Reveal";

const ViewBlog = () => {
  const { id } = useParams();
  const [blogs, setBlogs] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const FetchBlogs = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/v1/blog/single-blog/${id}`
        );
        setBlogs(response.data.blog);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    FetchBlogs();
    window.scrollTo(0, 0);
  }, []);
  if (isLoading) return <div>Loading...</div>;
  console.log(blogs);

  return (
    <section className="py-24">
      <div className="container mx-auto max-w-7xl items-center justify-center md:px-6 py-4">
        <motion.h1
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className="text-2xl font-semibold pb-6"
        >
          {blogs.title}
        </motion.h1>
        <Reveal>
          <div className="flex space-x-2">
            <img src={blogs.author.image} alt="" />
            <div>
              <h3>{blogs.author.name}</h3>
              <p>
                {blogs?.date ? (
                  <span>{new Date(blogs.date).toLocaleDateString()}</span>
                ) : (
                  <span>{new Date(blogs.createdAt).toLocaleDateString()}</span>
                )}
              </p>
            </div>
          </div>
        </Reveal>
        <Reveal>
          <div className="my-8">
            <img
              src={blogs?.image}
              alt=""
              className="w-full md:h-[580px] rounded-md object-cover"
            />
          </div>
        </Reveal>
        <Reveal>
          <div>
            <p>{blogs?.description}</p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium officia numquam excepturi, sed eos nihil, sunt dicta
              consectetur nesciunt maxime omnis quos itaque. Ipsum consequuntur
              sit perferendis tempore aspernatur est sunt explicabo nulla.
              Quidem, libero. Labore illum voluptatibus impedit non beatae, eos
              saepe perferendis doloremque, dolorem, deleniti mollitia corrupti
              nam!
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default ViewBlog;
