import React from "react";
import AddNewBlogCard from "./AddNewBlogCard";
import AddNewBlogTexarea from "./AddNewBlogTexarea";
import { useForm } from "react-hook-form";
import axios from "axios";
import { motion } from "framer-motion";
import Reveal from "../../../animation/Reveal";

const AddNewBlog = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = async (data) => {
    const BlogData = {
      title: data.title,
      description: data.description,
      image: data.blogImageUrl,
      author: {
        name: data.authorName,
        image: data.authorimgurl,
      },
    };

    try {
      const response = await axios.post(
        `https://meta-blog-backend-p.vercel.app/api/v1/blog/create-blog`,
        BlogData
      );
      // console.log(response.data);
      if (response.status === 200) {
        alert("Blog created successfully");
        reset();
      }
    } catch (error) {
      console.log(error);
    }
    // console.log(BlogData);
  };
  return (
    <section className="py-24">
      <div className=" container mx-auto max-w-7xl px-6">
        <motion.h1
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className="text-3xl font-bold font-serif pb-6"
        >
          Add New Blog
        </motion.h1>
        <Reveal>
          <div className="">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="bg-white px-4 lg:w-1/2 py-8 text-black space-y-4 rounded-md shadow-md"
            >
              <AddNewBlogCard
                htmlFor="title"
                leble="Title"
                name="title"
                id="title"
                placeholder="Enter title"
                type="text"
                register={register("title", { required: true })}
              />
              <AddNewBlogTexarea
                rows={4}
                htmlFor="description"
                leble={"Blog Describtion"}
                name="description"
                id="description"
                placeholder="Enter Blog Describtion"
                type="text"
                register={register("description", { required: true })}
              />
              <AddNewBlogCard
                htmlFor="authorName"
                leble="Author Name"
                name="authorName"
                id="authorName"
                placeholder="Enter Author Name"
                type="text"
                register={register("authorName", { required: true })}
              />
              <AddNewBlogCard
                htmlFor="authorimgurl"
                leble="Author Image URL"
                name="authorimgurl"
                id="authorimgurl"
                placeholder="Enter Author Image URL"
                type="text"
                register={register("authorimgurl", { required: true })}
              />
              <AddNewBlogCard
                htmlFor="blogImageUrl"
                leble="Blog Image URL"
                name="blogImageUrl"
                id="blogImageUrl"
                placeholder="Enter Blog Image URL"
                type="text"
                register={register("blogImageUrl", { required: true })}
              />
              <div>
                <button
                  type="submit"
                  className="w-full rounded-md bg-indigo-600 hover:bg-indigo-700 text-center px-6 py-2"
                >
                  Add Blogs
                </button>
              </div>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default AddNewBlog;
