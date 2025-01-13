import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchPostById } from "../services/api";

const PostDetails = () => {
  const { id } = useParams();  // This retrieves the post id from the URL
  const [post, setPost] = useState(null);

  useEffect(() => {
    const getPostDetails = async () => {
      try {
        const response = await fetchPostById(id);
        setPost(response.data);
      } catch (error) {
        console.error("Error fetching post details:", error);
      }
    };

    getPostDetails();
  }, [id]);

  if (!post) {
    return <p>Loading post details...</p>;
  }

  return (
    <div>
      <h2>{post.title}</h2>
      <p>Author:{post.author}</p>
      <div>
        <p>{post.body_text}</p>
      </div>
    </div>
  );
};

export default PostDetails;