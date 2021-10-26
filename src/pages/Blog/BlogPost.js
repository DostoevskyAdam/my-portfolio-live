import React from "react";
import { useParams } from "react-router-dom";
import { getBlogPost} from './blogApi';

const BlogPost = () => {
  const { blogPostId } = useParams();
  const blogPost = getBlogPost(blogPostId);
//TODO Fix url errors by putting ternary function here
// if blogpost id is defined, then:
  return (
    <>
      {/* store and return whatever properties I wish 
       and create a blogpost page layout here */}
      <h2>{blogPost.name}</h2>
      <p>{blogPost.description}</p>
  {/* if id is undefined, redirect to Whoops404 */}
      </>
  );
}
export default BlogPost;
