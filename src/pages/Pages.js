import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./About";
import Portfolio from "./Portfolio";
import Work from "./Work";
import Education from "./Education";
import BlogPostList from "./Blog";
import Whoops404 from "./Errors";
import Contact from "./Contact";

const Pages = ({ gitData }) => {
  return (
    <Routes>
      <Route path="/" element={<About gitData={gitData} />} />
      <Route path="/portfolio" element={<Portfolio gitData={gitData} />} />
      <Route path="/work" element={<Work gitData={gitData} />} />
      <Route path="/education" element={<Education gitData={gitData} />} />
      <Route path="/blog/*" element={<BlogPostList gitData={gitData} />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/*" element={<Whoops404 />} />
    </Routes>
  );
};

export default Pages;
