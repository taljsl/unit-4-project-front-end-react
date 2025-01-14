import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchPostById } from "../services/api";
import api from "../services/api";
import { updatePost } from "../services/api";
const EditPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState({
    title: "",
    body_text: "",
  });

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetchPostById(id);
        setPost(response.data);
      } catch (error) {
        console.error("Error Fetching Post", error);
      }
    };
    fetchPost();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updatePost(id, post);
      navigate(`/posts/${id}`);
    } catch (error) {
      console.error("Error updating post:", error);
    }
  };

  const handlePostChange = (e) => {
    setPost({ ...post, [e.target.id]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Title</label>
      <input
        type="text"
        id="title"
        value={post.title}
        onChange={handlePostChange}
      />
      <label>Body</label>
      <textarea
        id="body_text"
        value={post.body_text}
        onChange={handlePostChange}
      ></textarea>
      <button type="submit">Publish</button>
    </form>
  );
};

export default EditPost;
