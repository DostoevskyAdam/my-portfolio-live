import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import { getBlogPostList } from "./blogApi";
import BlogPost from './BlogPost'
import Layout from "../../components/Layout";

const BlogPostList = ({ gitData }) => {
  const blogPostList = getBlogPostList();

  return (
    <Layout gitData={gitData}>
    <div>
      <h1>Adam's web development Blog</h1>
      {/* List of blog posts */}
      <ul>
        {blogPostList.map(({ name, id }) => (
          <li key={id}>
            <Link to={id}>{name}</Link>
          </li>
        ))}
      </ul>
      <Routes>
        <Route path=":blogPostId/*" element={<BlogPost />} />
      </Routes>
    </div>
    </Layout>
  );
}
export default BlogPostList;
