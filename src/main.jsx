import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import App from "./App.jsx";
import Home from "./pages/home/Home.jsx";
import Blogs from "./pages/blogs/Blogs.jsx";
import About from "./pages/about/About.jsx";
import Contact from "./pages/contact/Contact.jsx";
import AddNewBlog from "./pages/blogs/add-blog/AddNewBlog.jsx";
import ManageBlog from "./pages/blogs/manage-blogs/ManageBlog.jsx";
import BlogUpdate from "./pages/blogs/blog-update/BlogUpdate.jsx";
import ViewBlog from "./pages/blogs/single-blog/ViewBlog.jsx";



createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route element={<App />}>
        <Route index element={<Home />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="blog/:id" element={<ViewBlog />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="/add-blog" element={<AddNewBlog />} />
        <Route path="/manage-blogs" element={<ManageBlog />} />
        <Route path="/blog/edit/:id" element={<BlogUpdate/>} />
        <Route path="/sign-up" element={<div>Sign Up page</div>} />
      </Route>
    </Routes>
  </BrowserRouter>
);
