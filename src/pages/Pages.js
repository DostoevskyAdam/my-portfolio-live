import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./About";
import Portfolio from "./Portfolio";
import Experience from "./Experience";
import Education from "./Education";
import BlogPostList from "./Blog";
import Whoops404 from "./Errors";
import Contact from "./Contact";
import Home from "./Home";

const Pages = ({ gitData }) => {
  return (
    <Routes>
      <Route path="/" element={<Home gitData={gitData} />} />
      <Route path="/about" element={<About gitData={gitData} />} />
      <Route path="/portfolio" element={<Portfolio gitData={gitData} />} />
      <Route path="/work" element={<Experience gitData={gitData} />} />
      <Route path="/education" element={<Education gitData={gitData} />} />
      <Route path="/blog/*" element={<BlogPostList gitData={gitData} />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/*" element={<Whoops404 />} />
    </Routes>
  );
};

export default Pages;
