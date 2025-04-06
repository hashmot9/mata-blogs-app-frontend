import React, { useContext, useEffect, useState } from "react";
import BlogsCard from "../../component/BlogsCard";
import { BlogContext } from "../../context/BlogContext";
import Reveal from "../../animation/Reveal";

const BlogList = () => {
  // const [searchTerm] = useState('')
  const [blogArry, setBlogArry] = useState([]);
  const [blogshow, setBlogshow] = useState(6);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://meta-blog-backend-p.vercel.app/api/v1/blog/all-blogs")
      .then((res) => res.json())
      .then((data) => {
        setBlogArry(data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  const { searchTerm, setSearchTerm } = useContext(BlogContext);

  const filterBlog = blogArry.filter(
    (blog) =>
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.author.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const hendleShowBlog = () => {
    setBlogshow((prev) => prev + 3);
  };

  if (isLoading) return <div className="h-20">Loading..</div>;

  return (
    <Reveal>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filterBlog.slice(0, blogshow).map((blog, index) => (
            <BlogsCard key={index} blog={blog} />
          ))}
        </div>
        {blogshow < filterBlog.length && (
          <div className="flex items-center justify-center my-4">
            <button
              onClick={hendleShowBlog}
              className="px-4 py-1 bg-blue-500 hover:bg-blue-700 rounded-md items-center justify-center"
            >
              Veiw more...
            </button>
          </div>
        )}
      </div>
    </Reveal>
  );
};

export default BlogList;
